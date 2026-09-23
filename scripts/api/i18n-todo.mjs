/**
 * scripts/api/i18n-todo.mjs — 导出"缺文字说明"的成员（中英双语），并切批
 *
 * 用法：
 *   node scripts/api/i18n-todo.mjs --todo              生成待办 → .vitepress/cache/api/i18n-todo.json
 *   node scripts/api/i18n-todo.mjs --batches [每批条数]  切批 → i18n-batches/<NN>.json
 *
 * 每条含：key / entity / name / kind / signature / file / line / zh / en / need（缺哪一侧）
 * 补写结果（{ "<key>": { "zh": "...", "en": "..." } }）由子代理写入 i18n-parts/<NN>.json，
 * 再由 i18n-merge.mjs 合并进 scripts/api/i18n-overrides.json。
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { CACHE, ROOT, log, writeJson } from './lib.mjs';

const MODEL = JSON.parse(readFileSync(join(CACHE, 'api-model.json'), 'utf8'));
const AUDIT = JSON.parse(readFileSync(join(CACHE, 'audit.json'), 'utf8'));
const ZH = existsSync(join(ROOT, 'scripts/api/zh-overrides.json'))
  ? JSON.parse(readFileSync(join(ROOT, 'scripts/api/zh-overrides.json'), 'utf8')) : {};
const I18N = existsSync(join(ROOT, 'scripts/api/i18n-overrides.json'))
  ? JSON.parse(readFileSync(join(ROOT, 'scripts/api/i18n-overrides.json'), 'utf8')) : {};

const cls = new Map(MODEL.classes.map((c) => [c.name, c]));
const ns = new Map(MODEL.namespaces.map((n) => [n.name, n]));
const evIdx = new Map(MODEL.events.map((e) => [`${e.owner}#${e.name}`, e]));
const fnIdx = new Map();
for (const f of MODEL.functionFiles) for (const fn of f.fns) fnIdx.set(`${f.file}|${fn.n}`, { ...fn, file: f.file });

if (process.argv.includes('--todo')) {
  // 缺口头来源：默认用 audit.json（页面视角）；加 --from-gaps 用 gen-includes 自报的
  // text-gaps.json（生成器视角，键与片段实体一致，能覆盖"继承片段按父类为键"的情况）
  const fromGaps = process.argv.includes('--from-gaps');
  const GAPS = fromGaps && existsSync(join(CACHE, 'text-gaps.json'))
    ? JSON.parse(readFileSync(join(CACHE, 'text-gaps.json'), 'utf8')) : null;
  const need = new Map();
  const touch = (r, name, kind) => {
    const key = kind === 'event' ? `Event:${r.target}#${name}` : `${r.target}.${name}`;
    const rec = need.get(key) || { key, entity: r.target, name, kind, langs: new Set() };
    rec.langs.add(r.lang);
    need.set(key, rec);
  };
  if (GAPS) {
    for (const g of GAPS) touch({ target: g.entity, lang: g.lang }, g.name, g.kind);
  } else {
    for (const r of AUDIT) {
      for (const n of r.noDesc) touch(r, n, 'member');
      for (const n of r.noDescEvents) touch(r, n, 'event');
    }
  }
  const out = [];
  for (const rec of need.values()) {
    const { key, entity, name, kind } = rec;
    const ov = I18N[key] || {};
    const zh = ov.zh || (kind === 'event' ? '' : '') || ZH[key] || '';
    let src = null;
    if (kind === 'event') src = evIdx.get(`${entity}#${name}`);
    else if (cls.has(entity)) src = (cls.get(entity).methods || []).find((m) => m.n === name) || (cls.get(entity).statics || []).find((m) => m.n === name);
    else if (ns.has(entity)) src = (ns.get(entity).members || []).find((m) => m.n === name);
    else src = fnIdx.get(`${entity}|${name}`) || [...fnIdx.values()].find((x) => x.n === name) || null;
    const needZh = rec.langs.has('zh') && !(ov.zh || ZH[key] || src?.zh);
    const needEn = rec.langs.has('en') && !(ov.en || src?.en);
    if (!needZh && !needEn) continue;
    out.push({
      key, entity, name, kind,
      signature: src?.sig || src?.signature || '',
      file: src?.file || src?.rel || (cls.get(entity)?.rel ?? ns.get(entity)?.rel ?? ''),
      line: src?.line ?? null,
      zh: ov.zh || ZH[key] || src?.zh || '',
      en: ov.en || src?.en || '',
      need: [needZh ? 'zh' : null, needEn ? 'en' : null].filter(Boolean).join('+'),
    });
  }
  out.sort((a, b) => a.entity.localeCompare(b.entity) || a.name.localeCompare(b.name));
  writeJson(join(CACHE, 'i18n-todo.json'), out);
  const both = out.filter((x) => x.need === 'zh+en').length;
  log(`待补说明 ${out.length} 条（需中英双语 ${both}；仅缺英文 ${out.filter((x) => x.need === 'en').length}；仅缺中文 ${out.filter((x) => x.need === 'zh').length}）`);
  const byEntity = {};
  for (const x of out) byEntity[x.entity] = (byEntity[x.entity] || 0) + 1;
  log('Top15 实体: ' + Object.entries(byEntity).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([k, v]) => `${k}(${v})`).join(', '));
}

if (process.argv.includes('--batches')) {
  const BATCH = Number(process.argv[3] || 25);
  const items = JSON.parse(readFileSync(join(CACHE, 'i18n-todo.json'), 'utf8'));
  const dir = join(CACHE, 'i18n-batches');
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  mkdirSync(join(CACHE, 'i18n-parts'), { recursive: true });
  const n = Math.ceil(items.length / BATCH);
  for (let i = 0; i < n; i++) writeJson(join(dir, `${String(i).padStart(2, '0')}.json`), items.slice(i * BATCH, (i + 1) * BATCH));
  log(`共 ${items.length} 条 → ${n} 批（每批 ${BATCH}）：${Array.from({ length: n }, (_, i) => String(i).padStart(2, '0')).join(' ')}`);
}
