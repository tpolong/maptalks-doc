/**
 * scripts/fix-example-stale-refs.mjs — 修正示例（docs/public/examples/**）里过时/不可达的外部引用
 *
 * 与 guide 同源的问题：不少示例从 maptalks.com 旧站搬来，引用了已下线或只能在 http 下工作的地址。
 * 线上是 HTTPS 站点，http 子资源会被浏览器按混合内容拦截。
 *
 * 每条规则的依据都是实测（.vitepress/cache/check-example-hosts.mjs）：
 *   - https://maptalks.com/api/maptalks.css ........ 不可达（旧站下线）→ unpkg 同路径 200
 *   - http://tile.maptalks.com/..................... https 同主机 200
 *   - http://resource.dvgis.cn/..................... https 同上 200
 *   - http://osm.org / http://{s}.tile.osm.org ..... https 200
 *   - http://map.baidu.com ......................... https 200（attribution 链接）
 *   - http://online{s}.map.bdimg.com/tile/ ......... TLS 证书域名不匹配（ALTNAME_INVALID）
 *                                                    → https://maponline{s}.bdimg.com/tile/ 200
 *   - http://webst{s}.is.autonavi.com/.............. 只改协议即可（模板配 subdomains:["01".."04"]，
 *                                                    拼出来本就是 webst01..04，https 下 200）。
 *                                                    改主机名会拼成 webst001 而失效。
 *   - http://t{s}.tianditu.com/DataServer .......... 自签名证书，https 不可用且示例缺 tk
 *                                                    → https://t{s}.tianditu.gov.cn WMTS 端点（与示例
 *                                                      tile/tiles/epsg4326、指南 projection.md 一致）
 *   - http://www.tianditu.cn（attribution） ........ https 自签名证书 → https://www.tianditu.gov.cn
 *
 * 注意：**改主机名前先看示例里的 subdomains**。`{s}` 只是把 subdomains 的元素原样填进模板，
 * 若 subdomains 已经带前缀（如 ["01","02"]），再往模板里加 "0" 会拼出不存在的 webst001。
 * 只有确认「同一 subdomains 下新主机名可达」时才换主机（如 online{s}.map.bdimg.com → maponline{s}.bdimg.com）。
 *
 * 用法：node scripts/fix-example-stale-refs.mjs [--dry]
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { ROOT } from './api/lib.mjs';

const DRY = process.argv.includes('--dry');
const BASE = join(ROOT, 'docs', 'public', 'examples');

const TDT_TK = '75be8b6b35685dc98d080f13e02f0d4e';
const tdtWmts = (layer) =>
  `https://t{s}.tianditu.gov.cn/${layer}_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0` +
  `&LAYER=${layer}&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles` +
  `&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${TDT_TK}`;

const RULES = [
  // 1) 已下线的旧域样式表
  [/https:\/\/maptalks\.com\/api\/maptalks\.css/g, 'https://unpkg.com/maptalks/dist/maptalks.css', 'css'],
  // 2) 明文 http → https（主机不变，实测 https 可用）
  [/http:\/\/tile\.maptalks\.com/g, 'https://tile.maptalks.com', 'http→https'],
  [/http:\/\/resource\.dvgis\.cn/g, 'https://resource.dvgis.cn', 'http→https'],
  [/http:\/\/\{s\}\.tile\.osm\.org/g, 'https://{s}.tile.osm.org', 'http→https'],
  [/http:\/\/osm\.org/g, 'https://www.openstreetmap.org/copyright', 'http→https'],
  [/http:\/\/map\.baidu\.com/g, 'https://map.baidu.com', 'http→https'],
  [/http:\/\/www\.tianditu\.cn/g, 'https://www.tianditu.gov.cn', 'http→https'],
  [/http:\/\/dmitrybaranovskiy\.github\.io/g, 'https://dmitrybaranovskiy.github.io', 'http→https'],
  // 3) 主机在 https 下不可用，必须换主机
  [/http:\/\/online\{s\}\.map\.bdimg\.com\/tile\//g, 'https://maponline{s}.bdimg.com/tile/', 'host-bdimg'],
  [/http:\/\/webst\{s\}\.is\.autonavi\.com/g, 'https://webst{s}.is.autonavi.com', 'host-autonavi'],
  // 4) 天地图旧 DataServer（自签名证书 + 缺 tk）→ 现行 WMTS 端点
  [/https?:\/\/t\{s\}\.tianditu\.com\/DataServer\?T=vec_c&x=\{x\}&y=\{y\}&l=\{z\}/g, tdtWmts('vec'), 'host-tianditu'],
  [/https?:\/\/t\{s\}\.tianditu\.com\/DataServer\?T=cva_c&x=\{x\}&y=\{y\}&l=\{z\}/g, tdtWmts('cva'), 'host-tianditu'],
];

const files = [];
(function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(html|js|json|css|md|txt)$/.test(e.name)) files.push(p);
  }
})(BASE);

const counts = {};
const changed = [];
for (const abs of files) {
  const orig = readFileSync(abs, 'utf8');
  let txt = orig;
  for (const [re, to, key] of RULES) {
    const n = (txt.match(re) || []).length;
    if (n) { txt = txt.replace(re, to); counts[key] = (counts[key] || 0) + n; }
  }
  if (txt !== orig) {
    changed.push(relative(BASE, abs).replace(/\\/g, '/'));
    if (!DRY) writeFileSync(abs, txt, 'utf8');
  }
}

console.log(`示例文件 ${files.length} 个；${DRY ? '[dry-run] ' : ''}改动 ${changed.length} 个`);
for (const [k, v] of Object.entries(counts).sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(16)} ${v}`);
if (process.argv.includes('--list')) for (const f of changed) console.log('   · ' + f);
