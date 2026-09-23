/**
 * scripts/api/zh-events.mjs — 事件描述的中文补写：导出待办 / 切批 / 合并
 *
 * 用法：
 *   node scripts/api/zh-events.mjs --todo      导出缺中文的事件 → .vitepress/cache/api/zh-events-todo.json
 *   node scripts/api/zh-events.mjs --batches   切成每批 20 条 → zh-event-batches/<NN>.json
 *   node scripts/api/zh-events.mjs --merge     合并 zh-event-parts/*.json → scripts/api/zh-overrides.json（键 Event:<类>#<事件>）
 */
import { readFileSync, readdirSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { CACHE, ROOT, writeJson, log, loadPageMap } from './lib.mjs';

const MODEL = JSON.parse(readFileSync(join(CACHE, 'api-model.json'), 'utf8'));
const MAP = loadPageMap();
const wanted = new Set();
for (const e of Object.values(MAP || {})) if (e.kind === 'class') wanted.add(e.target);

const todoPath = join(CACHE, 'zh-events-todo.json');
const todo = existsSync(todoPath) ? JSON.parse(readFileSync(todoPath, 'utf8')) : [];

if (process.argv.includes('--todo')) {
  const items = MODEL.events
    .filter((e) => wanted.has(e.owner) && !e.zh)
    .map((e) => ({ key: `Event:${e.owner}#${e.name}`, owner: e.owner, name: e.name, en: e.en || '', props: (e.props || []).length, file: e.file || '' }));
  writeJson(todoPath, items);
  log(`缺中文的事件 ${items.length} 条 → .vitepress/cache/api/zh-events-todo.json`);
}

if (process.argv.includes('--batches')) {
  const BATCH = Number(process.argv[3] || 20);
  const dir = join(CACHE, 'zh-event-batches');
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  mkdirSync(join(CACHE, 'zh-event-parts'), { recursive: true });
  const list = [...todo].sort((a, b) => (b.props - a.props) || a.owner.localeCompare(b.owner));
  const n = Math.ceil(list.length / BATCH);
  for (let i = 0; i < n; i++) writeJson(join(dir, `${String(i).padStart(2, '0')}.json`), list.slice(i * BATCH, (i + 1) * BATCH));
  log(`共 ${list.length} 条 → ${n} 批；批号 ${Array.from({ length: n }, (_, i) => String(i).padStart(2, '0')).join(' ')}`);
}

if (process.argv.includes('--merge')) {
  const partsDir = join(CACHE, 'zh-event-parts');
  const cur = existsSync(join(ROOT, 'scripts/api/zh-overrides.json'))
    ? JSON.parse(readFileSync(join(ROOT, 'scripts/api/zh-overrides.json'), 'utf8')) : {};
  let added = 0, bad = 0;
  for (const f of readdirSync(partsDir).filter((x) => x.endsWith('.json')).sort()) {
    let obj; try { obj = JSON.parse(readFileSync(join(partsDir, f), 'utf8')); } catch { bad++; continue; }
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v !== 'string' || !v.trim()) { bad++; continue; }
      if (cur[k] === undefined) { cur[k] = v.trim(); added++; }
    }
  }
  const sorted = {}; for (const k of Object.keys(cur).sort()) sorted[k] = cur[k];
  writeJson(join(ROOT, 'scripts/api/zh-overrides.json'), sorted);
  log(`事件中文新增 ${added} 条（异常 ${bad}）→ scripts/api/zh-overrides.json（共 ${Object.keys(sorted).length} 条）`);
}
