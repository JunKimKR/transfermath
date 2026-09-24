// node build.js  →  dist/index.html (한 파일짜리 교재)
const fs = require('fs'), path = require('path'), katex = require('katex');
const h = require('./lib/helpers');

// 린트: 일반 따옴표 문자열 안의 한 번짜리 역슬래시는 조용히 수식을 망가뜨린다 (\t → 탭, \s → s)
let lintBad = 0;
const acorn = require('acorn'), walk = require('acorn-walk');
for (const f of fs.readdirSync(path.join(__dirname, 'ch')).filter(f => f.endsWith('.js'))) {
  const src = fs.readFileSync(path.join(__dirname, 'ch', f), 'utf8');
  const ast = acorn.parse(src, { ecmaVersion: 2022, locations: true });
  walk.full(ast, n => {
    let raw = null;
    if (n.type === 'Literal' && typeof n.value === 'string') raw = n.raw;
    if (n.type === 'TaggedTemplateExpression' && !(n.tag.type === 'MemberExpression' && n.tag.property.name === 'raw') && !(n.tag.type === 'MemberExpression' && n.tag.property.name === 'c')) raw = src.slice(n.quasi.start, n.quasi.end);
    if (n.type === 'TemplateLiteral' && !n.__tagged) { /* 태그 없는 템플릿은 쓰지 않는다 */ }
    if (raw && /\$/.test(raw) && /(^|[^\\])\\[a-zA-Z{},;!|]/.test(raw)) { lintBad++; console.error(`LINT ${f}:${n.loc.start.line}: ${raw.slice(0, 90)}`); }
  });
  walk.ancestor(ast, { TemplateLiteral(n, anc) { const p = anc[anc.length - 2]; if (!(p && p.type === 'TaggedTemplateExpression')) { lintBad++; console.error(`LINT ${f}:${n.loc.start.line}: 태그 없는 템플릿 리터럴 (String.raw 를 쓸 것)`); } } });
}
if (lintBad) { console.error(lintBad + ' lint errors'); process.exit(1); }

const chFiles = fs.readdirSync(path.join(__dirname, 'ch')).filter(f => f.endsWith('.js')).sort();
const chapters = chFiles.map(f => { const m = require('./ch/' + f); h.reset(m.id); return { ...m, html: m.body(h) }; });

// ── 수식 렌더링 ──
const macros = { '\\R': '\\mathbb{R}', '\\dd': '\\,\\mathrm{d}', '\\tr': '\\operatorname{tr}', '\\rank': '\\operatorname{rank}', '\\curl': '\\operatorname{curl}', '\\dv': '\\operatorname{div}', '\\adj': '\\operatorname{adj}', '\\proj': '\\operatorname{proj}', '\\sech': '\\operatorname{sech}', '\\csch': '\\operatorname{csch}' };
let mathErrors = 0, mathCount = 0;
// 수식: 빌드 때 KaTeX 로 문법만 검사하고, 실제 렌더링은 브라우저에서 (파일 크기 1/5)
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function tex(s, display) {
  mathCount++;
  try { return katex.renderToString(s, { displayMode: display, throwOnError: true, macros: { ...macros }, strict: false, output: 'html' }); }
  catch (e) { mathErrors++; console.error('KaTeX:', e.message.slice(0, 160), '\n   in:', s.slice(0, 120)); return `<code>${esc(s)}</code>`; }
}
function renderMath(html) {
  const keep = [];
  html = html.replace(/<(svg|script|style)[\s\S]*?<\/\1>/g, m => { keep.push(m); return `\u0000${keep.length - 1}\u0000`; });
  html = html.replace(/\$\$([\s\S]+?)\$\$/g, (_, s) => tex(s.trim(), true));
  html = html.replace(/\$([^$]+?)\$/g, (_, s) => tex(s, false));
  return html.replace(/\u0000(\d+)\u0000/g, (_, i) => keep[+i]);
}

// ── KaTeX CSS + 폰트 인라인 (CSP상 폰트는 data URI 로만) ──
let kcss = fs.readFileSync(require.resolve('katex/dist/katex.min.css'), 'utf8');
kcss = kcss.replace(/src:url\(fonts\/([^)]+?)\.woff2\) format\("woff2"\)[^;}]*/g, (_, name) => {
  const b = fs.readFileSync(path.join(path.dirname(require.resolve('katex/dist/katex.min.css')), 'fonts', name + '.woff2')).toString('base64');
  return `src:url(data:font/woff2;base64,${b}) format("woff2")`;
});

const css = fs.readFileSync(path.join(__dirname, 'lib/style.css'), 'utf8');
const js = fs.readFileSync(path.join(__dirname, 'lib/app.js'), 'utf8');

const parts = {};
for (const c of chapters) (parts[c.part] ||= []).push(c);
const toc = Object.entries(parts).map(([pt, cs]) => `<div class="tp">${pt}</div>` + cs.map(c => `<a href="#${c.id}" data-ch="${c.id}"><span class="tn">${c.num}</span><span class="tt">${c.short || c.title}</span><span class="tc" data-cnt="${c.id}"></span></a>`).join('')).join('');

const SCH = { KU: '고려대', HY: '한양대', CAU: '중앙대' };
const body = chapters.map(c => c.cover ? `<section class="ch cover" id="${c.id}">${c.html}</section>` : `<section class="ch" id="${c.id}">
<header class="ch-h"><div class="ch-num">${c.num}</div><div class="ch-hh"><div class="ch-part">${c.part}</div><h2>${c.title}</h2>
${c.schools ? `<div class="chips">${Object.entries(c.schools).map(([k, v]) => `<span class="chip s-${k}"><b>${SCH[k]}</b> ${v}</span>`).join('')}</div>` : ''}
${c.lede ? `<p class="lede">${c.lede}</p>` : ''}</div></header>
${c.html}
</section>`).join('\n');

const page = `<title>편입수학 3관왕</title>
<meta name="description" content="고려대·한양대·중앙대 편입수학을 0에서부터 한 권으로. 미적분·선형대수·공학수학, 기출 풀이와 연습문제.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=IBM+Plex+Sans+KR:wght@400;500;700&family=IBM+Plex+Mono:wght@500;600&display=swap">
<style>${kcss}</style>
<style>${css}</style>
<div class="wrap">
<div class="layout">
<nav class="toc" aria-label="목차"><details open id="tocd"><summary>목차 <span class="prog" id="prog"></span></summary><div class="tl2">${toc}</div></details></nav>
<main>
${renderMath(body)}
<footer class="foot"><div>편입수학 3관왕 · 고려대 · 한양대 · 중앙대</div><div>기출 출처: 각 대학 공개 문제지 (2019–2026학년도)</div></footer>
</main>
</div>
</div>
<script>window.KMACROS=${JSON.stringify(macros)};</script>
<script>${js}</script>`;

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist/index.html'), page);
// 로컬 확인용: 게시 때 씌워지는 뼈대를 흉내 낸다
fs.writeFileSync(path.join(__dirname, 'dist/preview.html'), `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>body{margin:0}[hidden]{display:none!important}</style></head><body>${page}</body></html>`);
fs.writeFileSync(path.join(__dirname, 'dist/answers.json'), JSON.stringify(h.registry, null, 1));
console.log(`chapters ${chapters.length} · math ${mathCount} (errors ${mathErrors}) · problems ${h.registry.length} · ${(page.length / 1024 / 1024).toFixed(2)} MB`);
if (mathErrors) process.exitCode = 1;
