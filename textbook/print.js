// node print.js → dist/편입수학-3관왕.pdf
// 로컬 폰트(@fontsource)를 넣고 인쇄용 CSS 로 A4 PDF 를 만든다.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs'), path = require('path');
const FONTS = process.env.FONT_DIR || path.join(__dirname, 'node_modules/@fontsource');

function fontCss() {
  const pick = [['black-han-sans', ['400']], ['ibm-plex-sans-kr', ['400', '500', '700']], ['ibm-plex-mono', ['500', '600']]];
  let css = '';
  for (const [fam, ws] of pick) for (const w of ws) {
    const dir = path.join(FONTS, fam);
    css += fs.readFileSync(path.join(dir, w + '.css'), 'utf8').replace(/url\(\.\/files\//g, `url(file://${dir}/files/`);
  }
  return css.replace(/font-family: '([^']+)'/g, (m, f) => `font-family: '${f}'`);
}

const PRINT = `
@page{size:A4;margin:14mm 13mm 16mm}
html,body{background:#fff!important}
body{font-size:10.4pt;line-height:1.7}
.wrap{max-width:none;padding:0}
.layout{display:block!important}
main{max-width:none}
.toc{position:static!important;max-height:none!important;overflow:visible!important;break-after:page;font-size:11pt}
.toc summary{pointer-events:none}.toc summary::before{display:none}
.tc,.prog,.mk,.wg,#only-wrong,#reset-marks,#reset-confirm,.card:has(.btn){display:none!important}
section.ch{content-visibility:visible!important;break-before:page;margin-top:0;padding-top:0;border-top:0}
section.cover{break-before:auto}
.hero{padding-top:30mm}
h2,h3,h4,.probs-h,.ex-h,.pb-h{break-after:avoid}
.ex,.box,.fig,.pb,tr,.card,.flow li{break-inside:avoid}
.box,.ex{box-shadow:none}
.svgw,.tw,.katex-display,.katex.wide{overflow:visible!important}
.fig svg{max-height:95mm;width:auto}
.pb-s summary{pointer-events:none;color:#7A8290}
.pb-s summary::before{content:"▸"!important}
.pb-s .sol{background:#F7F8FA}
.foot{break-before:avoid}
a{text-decoration:none}
`;

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.emulateMedia({ colorScheme: 'light', media: 'print' });
  await p.route('https://fonts.googleapis.com/**', r => r.fulfill({ body: fontCss(), contentType: 'text/css' }));
  await p.goto('file://' + path.join(__dirname, 'dist/preview.html'), { waitUntil: 'load' });
  await p.addStyleTag({ content: PRINT });
  await p.evaluate(async () => {
    document.querySelectorAll('details').forEach(d => d.open = true);
    document.querySelectorAll('.pb-s summary').forEach(s => s.textContent = '답 · 풀이');
    await document.fonts.ready;
  });
  await p.waitForTimeout(1500);
  const out = path.join(__dirname, 'dist', '편입수학-3관왕.pdf');
  await p.pdf({ path: out, format: 'A4', printBackground: true, displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="width:100%;font:8pt sans-serif;color:#888;text-align:center"><span class="pageNumber"></span> / <span class="totalPages"></span> · 편입수학 3관왕</div>',
    margin: { top: '14mm', bottom: '16mm', left: '13mm', right: '13mm' } });
  console.log(out, (fs.statSync(out).size / 1048576).toFixed(1) + ' MB');
  await b.close();
})();
