/**
 * scripts/check-release-tag.mjs — 发布门禁：tag 必须与基线一致，且提交在 main 上
 *
 * 约定：`docs-v<引擎版本>` = "本提交的文档已与该引擎版本核对"；`<引擎版本>` 取
 * docs-baseline.json 的 maptalks-gl 版本（与 archive-baseline.mjs 的分支命名一致）。
 *
 * 用法：
 *   node scripts/check-release-tag.mjs                      # 读 $GITHUB_REF_NAME
 *   node scripts/check-release-tag.mjs --tag docs-v0.126.0
 *   node scripts/check-release-tag.mjs --tag ... --allow-offmain   # 允许不在 main 上（本地试跑）
 *
 * 退出码：0 通过；1 不通过（并打印原因）
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT } from './api/lib.mjs';

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
const TAG = arg('--tag', process.env.GITHUB_REF_NAME || '');
const ALLOW_OFFMAIN = argv.includes('--allow-offmain');
const BASELINE = join(ROOT, 'docs-baseline.json');

const fail = (msg) => { console.error('发布门禁失败：' + msg); process.exit(1); };

if (!TAG) fail('没有 tag（请用 --tag 指定，或设置 GITHUB_REF_NAME）');
if (!TAG.startsWith('docs-v')) fail(`tag 命名应为 docs-v<引擎版本>，当前是 ${TAG}`);
if (!existsSync(BASELINE)) fail('缺 docs-baseline.json');

const version = TAG.slice('docs-v'.length);
const baseline = JSON.parse(readFileSync(BASELINE, 'utf8'));
const engineVersion = baseline.engine?.['maptalks-gl'] || baseline.engine?.['maptalks'] || Object.values(baseline.engine || {})[0];

if (!engineVersion) fail('docs-baseline.json 里没有引擎版本');
if (version !== engineVersion) {
  fail(`tag 的版本 ${version} 与基线引擎版本 ${engineVersion} 不一致（docs-baseline.json 需要先按该版本更新）`);
}
if (!baseline.source?.commit) fail('docs-baseline.json 缺 source.commit');

const git = (args) => spawnSync('git', args, { cwd: ROOT, encoding: 'utf8' });
if (!ALLOW_OFFMAIN) {
  const hasMain = git(['rev-parse', '--verify', '--quiet', 'origin/main']).status === 0
    || git(['rev-parse', '--verify', '--quiet', 'refs/heads/main']).status === 0;
  if (!hasMain) fail('找不到 main 分支引用（CI 里请用 fetch-depth: 0 检出）');
  const ref = git(['rev-parse', '--verify', '--quiet', 'origin/main']).status === 0 ? 'origin/main' : 'refs/heads/main';
  const anc = git(['merge-base', '--is-ancestor', 'HEAD', ref]);
  if (anc.status !== 0) fail(`当前提交不在 ${ref} 上（tag 只能打在已合并的发布提交上）`);
}

console.log(`发布门禁通过：${TAG} ↔ 基线引擎 maptalks-gl ${engineVersion}（source ${String(baseline.source.commit).slice(0, 8)}）`);
