/**
 * scripts/impact.mjs — 发版影响分析：把"引擎变了什么"映射成"文档与示例要改哪几处"
 *
 * 输入
 *   --src <引擎 packages 路径>            新版本源码（默认 lib.DEFAULT_SRC / $MAPTALKS_SRC）
 *   --base <模型 json | baselines/<ver>>  旧模型；默认取 baselines/<基线引擎版本>，取不到则用本地缓存模型
 *   --index <示例符号索引 json>           默认 .vitepress/cache/examples-symbol-index.json（缺则自动生成）
 *   --out-json / --out-md                 报告输出位置（默认 .vitepress/cache/impact-report.{json,md}）
 *   --print                               打印四段摘要
 *
 * 报告四段（可直接当 PR 正文用）
 *   ① API 面   实体 / 成员 / 事件 / options 的增删改 + 引擎包版本变化
 *   ② 页面面   受影响的 API 页面（成员变化会沿继承链传播）+ "新增实体无页面"的孤儿
 *   ③ 示例面   受影响示例（由示例符号索引反查）+ import map 版本 pin 待更新项
 *   ④ 待人工   guide 候选页 + 新实体 stub 待办（不可派生的部分）
 *
 * 阻塞 / 提示：阻塞项（删实体、删成员、示例引用消失、pin 与基线不符）→ 退出码 1；
 *              签名/默认值变化、新实体无页面、guide 命中 → 只提示。
 *
 * 口径保证：与 scripts/baseline.mjs 共用 lib.canonicalModel()，摘要变化与影响分析结论一致。
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, rmSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT, CACHE, DEFAULT_SRC, canonicalModel, readText, log } from './api/lib.mjs';

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const SRC = arg('--src', DEFAULT_SRC);
const OUT_JSON = arg('--out-json', join(CACHE, 'impact-report.json'));
const OUT_MD = arg('--out-md', join(CACHE, 'impact-report.md'));
const INDEX_PATH = arg('--index', join(CACHE, 'examples-symbol-index.json'));
const BASELINE = join(ROOT, 'docs-baseline.json');

const git = (args, cwd = ROOT) => spawnSync('git', args, { cwd, encoding: 'utf8', maxBuffer: 128 * 1024 * 1024 });
const BLOCK = [];   // 阻塞项
const ADVISE = [];  // 提示项
const pick = (m) => m;

// ---------------------------------------------------------------- 载入页面映射与基线
const pageMapPath = join(ROOT, 'scripts', 'api', 'page-map.json');
const MAP = existsSync(pageMapPath) ? JSON.parse(readFileSync(pageMapPath, 'utf8')) : {};
const baseline = existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, 'utf8')) : { engine: {} };
const engineVer = baseline.engine?.['maptalks-gl'] || baseline.engine?.['maptalks'] || Object.values(baseline.engine || {})[0];

// ---------------------------------------------------------------- 载入旧模型（base）
function loadBase() {
  const b = arg('--base', null);
  if (b) {
    if (existsSync(b)) return JSON.parse(readFileSync(b, 'utf8'));
    // baselines/<ver> 形式：从归档分支取（本地分支或 origin 的远程分支都可以）
    for (const ref of [b, `origin/${b}`]) {
      const r = git(['show', `${ref}:api-model.json`]);
      if (r.status === 0) return JSON.parse(r.stdout);
    }
    throw new Error(`取不到 base：${b}`);
  }
  if (engineVer) {
    for (const ref of [`baselines/${engineVer}`, `origin/baselines/${engineVer}`]) {
      const r = git(['show', `${ref}:api-model.json`]);
      if (r.status === 0) return JSON.parse(r.stdout);
    }
    ADVISE.push(`未找到归档分支 baselines/${engineVer}（本地与 origin 都没有），改用本地缓存模型作为 base（建议跑 scripts/archive-baseline.mjs 并 push）`);
  }
  const cache = join(CACHE, 'api-model.json');
  if (!existsSync(cache)) throw new Error('既没有归档分支也没有本地缓存模型，无法确定 base');
  return JSON.parse(readFileSync(cache, 'utf8'));
}

// ---------------------------------------------------------------- 抽取新模型（复用 inventory 管线）
function extractNew() {
  const cache = join(CACHE, 'api-model.json');
  if (argv.includes('--no-extract')) {
    if (!existsSync(cache)) throw new Error('--no-extract 需要先跑 scripts/api/inventory.mjs 生成缓存模型');
    return JSON.parse(readFileSync(cache, 'utf8'));
  }
  const backup = existsSync(cache) ? readFileSync(cache) : null;
  try {
    const r = spawnSync(process.execPath, [join(ROOT, 'scripts', 'api', 'inventory.mjs'), '--src', SRC], { cwd: ROOT, encoding: 'utf8' });
    if (r.status !== 0) throw new Error('inventory 失败：' + (r.stdout + r.stderr).slice(0, 300));
    return JSON.parse(readFileSync(cache, 'utf8'));
  } finally {
    if (backup) writeFileSync(cache, backup);
  }
}

const baseModel = loadBase();
const newModel = extractNew();
const A = canonicalModel(baseModel);
const B = canonicalModel(newModel);

// 引擎包版本（新旧）
function engineVersions(srcRoot) {
  const out = {};
  if (!existsSync(srcRoot)) return out;
  for (const d of readdirSync(srcRoot, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const pj = join(srcRoot, d.name, 'package.json');
    if (!existsSync(pj)) continue;
    try {
      const { name, version } = JSON.parse(readFileSync(pj, 'utf8'));
      if (name && version && /^(maptalks|@maptalks\/)/.test(name)) out[name] = version;
    } catch { /* 忽略坏 package.json */ }
  }
  return out;
}
const newVersions = engineVersions(SRC);
const versionChanges = Object.entries(newVersions)
  .filter(([p, v]) => baseline.engine?.[p] && baseline.engine[p] !== v)
  .map(([p, v]) => ({ pkg: p, from: baseline.engine[p], to: v }));

// ---------------------------------------------------------------- 模型 diff
const key = (kind, name) => `${kind}:${name}`;
const mapOf = (canon, field) => new Map(canon[field].map((x) => [key(field, x.name), x]));
const Aclass = mapOf(A, 'classes'), Bclass = mapOf(B, 'classes');
const Ans = mapOf(A, 'namespaces'), Bns = mapOf(B, 'namespaces');
const Aev = new Map(A.events.map((e) => [`${e[0]}#${e[1]}`, e]));
const Bev = new Map(B.events.map((e) => [`${e[0]}#${e[1]}`, e]));
const Aopt = new Map(A.options.map((o) => [o[0], o[1]]));
const Bopt = new Map(B.options.map((o) => [o[0], o[1]]));

const entitiesAdded = [], entitiesRemoved = [];
for (const [k, v] of Bclass) if (!Aclass.has(k)) entitiesAdded.push({ kind: 'class', name: v.name });
for (const [k, v] of Aclass) if (!Bclass.has(k)) entitiesRemoved.push({ kind: 'class', name: v.name });
for (const [k, v] of Bns) if (!Ans.has(k)) entitiesAdded.push({ kind: 'namespace', name: v.name });
for (const [k, v] of Ans) if (!Bns.has(k)) entitiesRemoved.push({ kind: 'namespace', name: v.name });

/** 比较同一实体的成员数组（[n, sig, zh, en]） */
function diffMembers(kind, name, a, b) {
  const out = [];
  const ma = new Map((a || []).map((m) => [m[0], m]));
  const mb = new Map((b || []).map((m) => [m[0], m]));
  for (const [n, m] of mb) if (!ma.has(n)) out.push({ entity: name, kind, member: n, change: 'added' });
  for (const [n, m] of ma) if (!mb.has(n)) out.push({ entity: name, kind, member: n, change: 'removed', from: m[1] });
  for (const [n, m] of mb) {
    const o = ma.get(n);
    if (!o) continue;
    if (JSON.stringify(o) !== JSON.stringify(m)) {
      const fields = [];
      if (o[1] !== m[1]) fields.push({ field: 'sig', from: o[1], to: m[1] });
      if (o[2] !== m[2]) fields.push({ field: 'zh' });
      if (o[3] !== m[3]) fields.push({ field: 'en' });
      out.push({ entity: name, kind, member: n, change: 'changed', fields });
    }
  }
  return out;
}
let memberChanges = [];
for (const [k, b] of Bclass) {
  const a = Aclass.get(k);
  if (!a) continue;
  memberChanges.push(...diffMembers('method', b.name, a.methods, b.methods));
  memberChanges.push(...diffMembers('static', b.name, a.statics, b.statics));
}
for (const [k, b] of Bns) {
  const a = Ans.get(k);
  if (!a) continue;
  memberChanges.push(...diffMembers('namespace-member', b.name, a.members, b.members));
}
const eventChanges = [];
for (const [k, b] of Bev) {
  const a = Aev.get(k);
  if (!a) eventChanges.push({ entity: b[0], member: b[1], change: 'added' });
  else if (JSON.stringify(a) !== JSON.stringify(b)) eventChanges.push({ entity: b[0], member: b[1], change: 'changed' });
}
for (const [k, a] of Aev) if (!Bev.has(k)) eventChanges.push({ entity: a[0], member: a[1], change: 'removed' });
const optionChanges = [];
for (const [f, v] of Bopt) if (!Aopt.has(f)) optionChanges.push({ file: f, change: 'added' });
for (const [f, v] of Aopt) {
  if (!Bopt.has(f)) optionChanges.push({ file: f, change: 'removed' });
  else if (Bopt.get(f) !== v) optionChanges.push({ file: f, change: 'changed' });
}

// ---------------------------------------------------------------- ② 页面映射
const pageOf = new Map();
for (const [page, e] of Object.entries(MAP)) if (e && e.target) pageOf.set(e.target, page);
/** 成员变化沿继承链传播：父类成员变化会通过 include 影响所有子类页面 */
const descendantsOf = new Map();
for (const c of B.classes) {
  for (const anc of (c.chain || []).slice(1)) {
    if (!descendantsOf.has(anc)) descendantsOf.set(anc, new Set());
    descendantsOf.get(anc).add(c.name);
  }
  for (const mix of c.mixins || []) {
    if (!descendantsOf.has(mix)) descendantsOf.set(mix, new Set());
    descendantsOf.get(mix).add(c.name);
  }
}
const pagesFor = (entity) => {
  const out = new Set();
  if (pageOf.has(entity)) out.add(pageOf.get(entity));
  for (const d of descendantsOf.get(entity) || []) if (pageOf.has(d)) out.add(pageOf.get(d));
  return [...out];
};

const affectedPages = new Map(); // page → reasons
const addPage = (page, reason) => { if (!page) return; if (!affectedPages.has(page)) affectedPages.set(page, []); affectedPages.get(page).push(reason); };

for (const e of entitiesRemoved) {
  const pages = pagesFor(e.name);
  if (pages.length) { for (const p of pages) addPage(p, `实体 ${e.name} 已被删除（页面会指向不存在的类）`); BLOCK.push(`${e.kind} ${e.name} 被删除，影响页面 ${pages.join(', ')}`); }
  else BLOCK.push(`${e.kind} ${e.name} 被删除（无对应页面，但可能有示例引用）`);
}
const orphans = entitiesAdded.filter((e) => !pageOf.has(e.name));
for (const e of entitiesAdded) for (const p of pagesFor(e.name)) addPage(p, `新增/变更实体 ${e.name}`);

// 页面里是否真的写了这个成员（写了才阻塞）
const docHasMember = (page, member) => {
  const f = join(ROOT, 'docs', 'api', `${page}.md`);
  if (!existsSync(f)) return false;
  const txt = readText(f);
  return new RegExp('`' + member + '[`(]').test(txt);
};
for (const mc of memberChanges) {
  const pages = pagesFor(mc.entity);
  for (const p of pages) addPage(p, `${mc.entity}.${mc.member} ${mc.change === 'added' ? '新增' : mc.change === 'removed' ? '删除' : '签名/默认值变化'}`);
  if (mc.change === 'removed') {
    const hit = pages.filter((p) => docHasMember(p, mc.member));
    if (hit.length) BLOCK.push(`成员 ${mc.entity}.${mc.member} 被删除，但页面仍在文档化它：${hit.join(', ')}`);
  }
  if (mc.change === 'changed') ADVISE.push(`成员 ${mc.entity}.${mc.member} 的 ${(mc.fields || []).map((f) => f.field).join('/')} 有变化（页面片段需刷新）`);
}
for (const ec of eventChanges) {
  for (const p of pagesFor(ec.entity)) addPage(p, `事件 ${ec.entity}#${ec.member} ${ec.change}`);
  if (ec.change === 'removed') ADVISE.push(`事件 ${ec.entity}#${ec.member} 被删除`);
}

// ---------------------------------------------------------------- ③ 示例反查
if (!existsSync(INDEX_PATH)) {
  const r = spawnSync(process.execPath, [join(ROOT, 'scripts', 'examples-index.mjs'), '--out', INDEX_PATH], { cwd: ROOT, encoding: 'utf8' });
  if (r.status !== 0) ADVISE.push('生成示例符号索引失败，示例面分析降级为空');
}
const idx = existsSync(INDEX_PATH) ? JSON.parse(readFileSync(INDEX_PATH, 'utf8')) : { bySymbol: {}, byPackage: {}, byVersion: {}, total: 0 };
const affectedExamples = new Map();
const addExample = (ex, reason) => { if (!affectedExamples.has(ex)) affectedExamples.set(ex, []); affectedExamples.get(ex).push(reason); };
const symbolsGone = new Set([
  ...entitiesRemoved.map((e) => e.name),
  ...memberChanges.filter((m) => m.change === 'removed').map((m) => m.member),
]);
for (const s of symbolsGone) {
  for (const ex of idx.bySymbol[s] || []) addExample(ex, `引用了已消失的符号 ${s}`);
}
if (symbolsGone.size) {
  const hit = Object.entries(idx.bySymbol).filter(([s]) => symbolsGone.has(s));
  if (hit.length) BLOCK.push(`示例引用了已消失的符号：${hit.map(([s, v]) => `${s}(${v.length} 例)`).join('、')}`);
}
for (const vc of versionChanges) for (const ex of (idx.byPackage[vc.pkg] || []).slice(0, 30)) addExample(ex, `包 ${vc.pkg} 版本 ${vc.from} → ${vc.to}`);

// import map 的版本 pin 与新版引擎是否一致
const replPath = join(ROOT, 'docs', 'examples', 'ExampleRepl.vue');
const pinned = new Map();
if (existsSync(replPath)) {
  const t = readText(replPath);
  for (const m of t.matchAll(/"([^"\s]+)"\s*:\s*"([^"]+)"/g)) {
    const v = /@(\d[^/?#]*)(?:\/|$)/.exec(m[2]);
    if (v) pinned.set(m[1], v[1]);
  }
}
const pinUpdates = [];
for (const [pkg, to] of Object.entries(newVersions)) {
  if (!pinned.has(pkg)) continue;
  if (pinned.get(pkg) !== to) pinUpdates.push({ pkg, pinned: pinned.get(pkg), engine: to });
}
if (pinUpdates.length) BLOCK.push(`import map 版本 pin 需更新：${pinUpdates.map((p) => `${p.pkg} ${p.pinned}→${p.engine}`).join('、')}`);

// ---------------------------------------------------------------- ④ guide 候选
const changedNames = [...new Set([...entitiesRemoved, ...entitiesAdded].map((e) => e.name)
  .concat(memberChanges.filter((m) => m.change !== 'added').map((m) => m.member)))].filter((n) => n && n.length > 3);
const guideHits = [];
if (changedNames.length) {
  const walk = (dir, out = []) => {
    if (!existsSync(dir)) return out;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p, out);
      else if (e.name.endsWith('.md')) out.push(p);
    }
    return out;
  };
  for (const f of [...walk(join(ROOT, 'docs', 'guide')), ...walk(join(ROOT, 'docs', 'en', 'guide'))]) {
    const txt = readText(f);
    const hit = changedNames.filter((n) => txt.includes(n));
    if (hit.length) guideHits.push({ file: f.replace(ROOT, '').replace(/\\/g, '/'), symbols: hit.slice(0, 6) });
  }
}
for (const g of guideHits) ADVISE.push(`guide 可能需人工确认：${g.file}（${g.symbols.join(', ')}）`);

// ---------------------------------------------------------------- 报告
const report = {
  generatedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
  base: { engine: baseline.engine || {}, archive: engineVer ? `baselines/${engineVer}` : null },
  src: SRC,
  upstream: { packages: Object.keys(newVersions).length, versionChanges },
  api: { entitiesAdded, entitiesRemoved, memberChanges, eventChanges, optionChanges },
  pages: { affected: [...affectedPages].map(([page, reasons]) => ({ page, reasons: [...new Set(reasons)] })), orphans: orphans.map((o) => `${o.kind} ${o.name}`) },
  examples: { total: idx.total, affected: [...affectedExamples].map(([path, reasons]) => ({ path, reasons: [...new Set(reasons)] })), pinUpdates },
  manual: { guides: guideHits, newEntitiesNeedingPages: orphans.map((o) => `${o.kind} ${o.name}`) },
  blocking: BLOCK,
  advisory: ADVISE,
};

mkdirSync(dirname(OUT_JSON), { recursive: true });
writeFileSync(OUT_JSON, JSON.stringify(report, null, 1), 'utf8');

const L = [];
L.push(`# 发版影响报告（${report.generatedAt}）`, '');
L.push(`基准：${report.base.archive || '(本地缓存模型)'}　新源码：${SRC}`, '');
L.push('## ① API 面', '');
L.push(`- 实体：新增 ${entitiesAdded.length} / 删除 ${entitiesRemoved.length}`);
L.push(`- 成员：新增 ${memberChanges.filter((m) => m.change === 'added').length} / 删除 ${memberChanges.filter((m) => m.change === 'removed').length} / 变化 ${memberChanges.filter((m) => m.change === 'changed').length}`);
L.push(`- 事件：新增 ${eventChanges.filter((e) => e.change === 'added').length} / 删除 ${eventChanges.filter((e) => e.change === 'removed').length} / 变化 ${eventChanges.filter((e) => e.change === 'changed').length}`);
L.push(`- options 定义：${optionChanges.length} 处变化`);
if (versionChanges.length) L.push(`- 包版本：${versionChanges.map((v) => `${v.pkg} ${v.from}→${v.to}`).join('、')}`);
L.push('', '## ② 页面面', '');
L.push(`- 受影响页面 ${affectedPages.size} 个`);
for (const [page, reasons] of [...affectedPages].slice(0, 30)) L.push(`  - \`${page}\`：${[...new Set(reasons)].slice(0, 3).join('；')}`);
if (orphans.length) L.push(`- 新增实体无页面（需补 stub）：${orphans.map((o) => `${o.kind} ${o.name}`).join('、')}`);
L.push('', '## ③ 示例面', '');
L.push(`- 受影响示例 ${affectedExamples.size} 个（索引共 ${idx.total} 例）`);
for (const [ex, reasons] of [...affectedExamples].slice(0, 30)) L.push(`  - \`${ex}\`：${[...new Set(reasons)].join('；')}`);
if (pinUpdates.length) L.push(`- import map pin 待更新：${pinUpdates.map((p) => `${p.pkg} ${p.pinned}→${p.engine}`).join('、')}`);
L.push('', '## ④ 待人工', '');
if (!guideHits.length && !orphans.length) L.push('- （无）');
for (const o of orphans) L.push(`- [ ] 新实体 ${o.kind} ${o.name}：补 stub 页 + 中文说明（走 zh-todo 批次）`);
for (const g of guideHits.slice(0, 20)) L.push(`- [ ] 复核 guide：\`${g.file}\`（${g.symbols.join(', ')}）`);
L.push('', '## 阻塞项', '');
if (!BLOCK.length) L.push('- 无');
for (const b of BLOCK) L.push(`- ${b}`);
L.push('', '## 提示项', '');
if (!ADVISE.length) L.push('- 无');
for (const a of ADVISE.slice(0, 40)) L.push(`- ${a}`);
writeFileSync(OUT_MD, L.join('\n') + '\n', 'utf8');

if (argv.includes('--print')) {
  log(L.slice(0, 26).join('\n'));
  log(`\n完整报告：${OUT_MD.replace(ROOT, '.')} / ${OUT_JSON.replace(ROOT, '.')}`);
}
log(`影响分析完成：阻塞 ${BLOCK.length} 项 / 提示 ${ADVISE.length} 项；受影响页面 ${affectedPages.size}、示例 ${affectedExamples.size}`);
process.exit(BLOCK.length ? 1 : 0);
