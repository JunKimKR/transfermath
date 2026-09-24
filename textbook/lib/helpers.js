// 교재 본문에서 쓰는 조각들: 문제 상자, 그래프(SVG), 행렬 변환 그림, 방향장, 3D 곡면.
// 모든 색은 CSS 클래스(테마 토큰)로만 칠한다 — 다크모드에서도 그대로 읽히게.

let CH = 'x', PN = 0, EN = 0;
const registry = []; // 전 문제 목록 (정답표 / 오답노트용)

function reset(ch) { CH = ch; PN = 0; EN = 0; }

const CIRC = ['①', '②', '③', '④', '⑤'];
function choiceRow(choices) {
  if (!choices) return '';
  return `<ol class="chs">${choices.map(c => c.replace(/\\frac/g, '\\dfrac')).map((c, i) => `<li><span class="cn">${CIRC[i]}</span> ${c}</li>`).join('')}</ol>`;
}

const SCH = { KU: '고려대', HY: '한양대', CAU: '중앙대' };
function srcTag(src) {
  if (!src) return '';
  // src 예: 'CAU 2024-17', 'KU 2023-5', 'HY 2025-47', '자작'
  const m = /^(KU|HY|CAU)\b\s*(.*)$/.exec(src);
  if (m) return `<span class="src s-${m[1]}"><b>${SCH[m[1]]}</b> ${m[2]}</span>`;
  return `<span class="src s-own">${src}</span>`;
}

// 예제: 풀이가 펼쳐진 채로 나온다
function ex({ src, title, q, choices, sol, ans }) {
  EN++;
  const id = `${CH}-e${EN}`;
  return `<div class="ex" id="${id}">
<div class="ex-h"><span class="ex-n">예제 ${EN}</span>${title ? `<span class="ex-t">${title}</span>` : ''}${srcTag(src)}</div>
<div class="ex-q">${q}${choiceRow(choices)}</div>
<div class="ex-s"><div class="lab">풀이</div>${sol}${ans ? `<div class="ans">답 &nbsp;${ans}</div>` : ''}</div>
</div>`;
}

// 연습문제: 풀이는 접혀 있다. ○/✕ 체크는 브라우저에 저장
function p({ src, q, choices, sol, ans, lv }) {
  PN++;
  const id = `${CH}-p${PN}`;
  registry.push({ id, ch: CH, n: PN, src: src || '', ans: ans || '' });
  const stars = lv ? `<span class="lv" title="난이도">${'●'.repeat(lv)}${'○'.repeat(3 - lv)}</span>` : '';
  return `<div class="pb" id="${id}" data-pid="${id}">
<div class="pb-h"><span class="pb-n">${PN}</span>${srcTag(src)}${stars}<span class="mk"><button type="button" class="mk-o" aria-label="맞음 표시">○</button><button type="button" class="mk-x" aria-label="틀림 표시">✕</button></span></div>
<div class="pb-q">${q}${choiceRow(choices)}</div>
<details class="pb-s"><summary>답 · 풀이 보기</summary><div class="ans">답 &nbsp;${ans}</div>${sol ? `<div class="sol">${sol}</div>` : ''}</details>
</div>`;
}

function box(kind, title, body) {
  const lab = { key: '이것만은 외워', warn: '함정 주의', tip: '꿀팁', why: '왜 그런데?', pat: '보이면 바로', slang: '한 줄 요약' }[kind] || kind;
  return `<div class="box ${kind}"><div class="bt">${lab}${title ? ` · <span>${title}</span>` : ''}</div>${body}</div>`;
}

// ───────────── SVG 그래프 ─────────────
const fmt = v => (Math.round(v * 100) / 100).toString();

function plot(o) {
  const W = o.w || 520, H = o.h || 320, pad = o.pad || 30;
  let [x0, x1] = o.x, [y0, y1] = o.y;
  if (o.equal) {
    // 가로 세로 축척을 맞춘다 (원·타원이 찌그러지지 않게)
    const sx = (W - 2 * pad) / (x1 - x0), sy = (H - 2 * pad) / (y1 - y0);
    const s = Math.min(sx, sy);
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    const hw = (W - 2 * pad) / s / 2, hh = (H - 2 * pad) / s / 2;
    x0 = cx - hw; x1 = cx + hw; y0 = cy - hh; y1 = cy + hh;
  }
  const X = x => pad + (x - x0) / (x1 - x0) * (W - 2 * pad);
  const Y = y => H - pad - (y - y0) / (y1 - y0) * (H - 2 * pad);
  const out = [];
  const inY = y => isFinite(y) && y > y0 - (y1 - y0) * 3 && y < y1 + (y1 - y0) * 3;

  // 격자
  if (o.grid !== false) {
    const gs = o.gstep || niceStep(x1 - x0), gy = o.gstepy || niceStep(y1 - y0);
    let g = '';
    for (let x = Math.ceil(x0 / gs) * gs; x <= x1 + 1e-9; x += gs) g += `M${fmt(X(x))} ${pad}V${H - pad}`;
    for (let y = Math.ceil(y0 / gy) * gy; y <= y1 + 1e-9; y += gy) g += `M${pad} ${fmt(Y(y))}H${W - pad}`;
    out.push(`<path class="gr" d="${g}"/>`);
  }
  // 채우기
  for (const f of o.fills || []) {
    const n = 160, a = f.a, b = f.b;
    let d = '';
    for (let i = 0; i <= n; i++) { const x = a + (b - a) * i / n; d += (i ? 'L' : 'M') + fmt(X(x)) + ' ' + fmt(Y(clampY(f.top(x)))); }
    for (let i = n; i >= 0; i--) { const x = a + (b - a) * i / n; d += 'L' + fmt(X(x)) + ' ' + fmt(Y(clampY(f.bot ? f.bot(x) : 0))); }
    out.push(`<path class="fl f${f.c || 1}" d="${d}Z"/>`);
  }
  for (const f of o.pfills || []) { // 매개/극좌표 영역 채우기 (닫힌 곡선)
    const n = 300; let d = '';
    for (let i = 0; i <= n; i++) {
      const t = f.t[0] + (f.t[1] - f.t[0]) * i / n;
      let px, py;
      if (f.r) { const r = f.r(t); px = r * Math.cos(t); py = r * Math.sin(t); } else { px = f.fx(t); py = f.fy(t); }
      d += (i ? 'L' : 'M') + fmt(X(px)) + ' ' + fmt(Y(py));
    }
    if (f.origin) d += `L${fmt(X(0))} ${fmt(Y(0))}`;
    out.push(`<path class="fl f${f.c || 1}" d="${d}Z"/>`);
  }
  function clampY(y) { return Math.max(y0 - (y1 - y0), Math.min(y1 + (y1 - y0), y)); }
  // 축
  if (o.axes !== false) {
    if (y0 <= 0 && y1 >= 0) out.push(`<path class="ax" d="M${pad - 6} ${fmt(Y(0))}H${W - pad + 8}" marker-end="url(#ah)"/>`);
    if (x0 <= 0 && x1 >= 0) out.push(`<path class="ax" d="M${fmt(X(0))} ${H - pad + 6}V${pad - 8}" marker-end="url(#ah)"/>`);
    const ax = y0 <= 0 && y1 >= 0 ? Y(0) : H - pad, ay = x0 <= 0 && x1 >= 0 ? X(0) : pad;
    out.push(`<text class="tl it" x="${W - pad + 4}" y="${fmt(ax - 8)}">${o.xl || 'x'}</text>`);
    out.push(`<text class="tl it" x="${fmt(ay + 8)}" y="${pad - 6}">${o.yl || 'y'}</text>`);
    for (const t of o.xt || []) {
      const [v, lab] = Array.isArray(t) ? t : [t, fmt(t)];
      out.push(`<path class="ax" d="M${fmt(X(v))} ${fmt(ax - 3)}v6"/><text class="tk" x="${fmt(X(v))}" y="${fmt(ax + 16)}" text-anchor="middle">${lab}</text>`);
    }
    for (const t of o.yt || []) {
      const [v, lab] = Array.isArray(t) ? t : [t, fmt(t)];
      out.push(`<path class="ax" d="M${fmt(ay - 3)} ${fmt(Y(v))}h6"/><text class="tk" x="${fmt(ay - 7)}" y="${fmt(Y(v) + 4)}" text-anchor="end">${lab}</text>`);
    }
  }
  // 곡선 y=f(x)
  for (const c of o.fns || []) {
    const [a, b] = c.dom || [x0, x1], n = c.n || 400;
    let d = '', pen = false, prev = null;
    for (let i = 0; i <= n; i++) {
      const x = a + (b - a) * i / n, y = c.f(x);
      if (!inY(y) || (prev !== null && Math.abs(y - prev) > (y1 - y0) * 1.5)) { pen = false; prev = inY(y) ? y : null; if (!inY(y)) continue; }
      d += (pen ? 'L' : 'M') + fmt(X(x)) + ' ' + fmt(Y(clampY(y))); pen = true; prev = y;
    }
    out.push(`<path class="cv c${c.c || 1}${c.dash ? ' ds' : ''}${c.thin ? ' th' : ''}" d="${d}"/>`);
    if (c.label) out.push(`<text class="lb c${c.c || 1}" x="${fmt(X(c.lx))}" y="${fmt(Y(c.ly))}"${c.anchor ? ` text-anchor="${c.anchor}"` : ''}>${c.label}</text>`);
  }
  // 매개 곡선 / 극곡선
  for (const c of o.curves || []) {
    const n = c.n || 500; let d = '';
    for (let i = 0; i <= n; i++) {
      const t = c.t[0] + (c.t[1] - c.t[0]) * i / n;
      let px, py;
      if (c.r) { const r = c.r(t); px = r * Math.cos(t); py = r * Math.sin(t); } else { px = c.fx(t); py = c.fy(t); }
      d += (i ? 'L' : 'M') + fmt(X(px)) + ' ' + fmt(Y(py));
    }
    out.push(`<path class="cv c${c.c || 1}${c.dash ? ' ds' : ''}${c.thin ? ' th' : ''}" d="${d}"${c.arrow ? ' marker-mid="url(#am)"' : ''}/>`);
    if (c.label) out.push(`<text class="lb c${c.c || 1}" x="${fmt(X(c.lx))}" y="${fmt(Y(c.ly))}"${c.anchor ? ` text-anchor="${c.anchor}"` : ''}>${c.label}</text>`);
  }
  for (const l of o.lines || []) {
    out.push(`<path class="cv c${l.c || 'm'}${l.dash ? ' ds' : ''} th" d="M${fmt(X(l.p[0]))} ${fmt(Y(l.p[1]))}L${fmt(X(l.q[0]))} ${fmt(Y(l.q[1]))}"${l.arrow ? ` marker-end="url(#a${l.c || 'm'})"` : ''}/>`);
  }
  for (const v of o.vecs || []) {
    const [a, b] = v.from || [0, 0];
    out.push(`<path class="vc c${v.c || 1}" d="M${fmt(X(a))} ${fmt(Y(b))}L${fmt(X(a + v.v[0]))} ${fmt(Y(b + v.v[1]))}" marker-end="url(#a${v.c || 1})"/>`);
    if (v.label) out.push(`<text class="lb c${v.c || 1}" x="${fmt(X(a + v.v[0] * 1.0) + (v.dx || 6))}" y="${fmt(Y(b + v.v[1]) + (v.dy || -6))}">${v.label}</text>`);
  }
  for (const pt of o.pts || []) {
    out.push(`<circle class="pt c${pt.c || 1}${pt.open ? ' op' : ''}" cx="${fmt(X(pt.x))}" cy="${fmt(Y(pt.y))}" r="${pt.r || 4}"/>`);
    if (pt.label) out.push(`<text class="lb c${pt.c || 1}" x="${fmt(X(pt.x) + (pt.dx ?? 7))}" y="${fmt(Y(pt.y) + (pt.dy ?? -7))}"${pt.anchor ? ` text-anchor="${pt.anchor}"` : ''}>${pt.label}</text>`);
  }
  for (const t of o.texts || []) {
    out.push(`<text class="lb c${t.c || 'm'}${t.it ? ' it' : ''}" x="${fmt(X(t.x))}" y="${fmt(Y(t.y))}"${t.anchor ? ` text-anchor="${t.anchor}"` : ''}>${t.t}</text>`);
  }
  return svgWrap(W, H, out.join(''), o.cap, o.alt);
}

function niceStep(span) {
  const raw = span / 8, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p;
  return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
}

let SVGN = 0;
function svgWrap(W, H, inner, cap, alt) {
  SVGN++;
  return `<figure class="fig"><div class="svgw"><svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="${alt || (cap ? cap.replace(/<[^>]+>/g, '').slice(0, 120) : '그림')}">${DEFS}${inner}</svg></div>${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
}
const DEFS = `<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="mk-ax" d="M0 1L9 5L0 9z"/></marker>${[1, 2, 3, 4, 'm'].map(c => `<marker id="a${c}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="mkf c${c}" d="M0 1L9 5L0 9z"/></marker>`).join('')}<marker id="am" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="mkf c1" d="M1 1L9 5L1 9z"/></marker></defs>`;

// 행렬 A 가 격자를 어떻게 휘는지: 원래 격자(회색) + 변형 격자(파랑) + 고유벡터 방향(빨강)
function lin2(A, o = {}) {
  const W = o.w || 360, H = o.h || 360, R = o.r || 3.2, pad = 18;
  const X = x => pad + (x + R) / (2 * R) * (W - 2 * pad), Y = y => H - pad - (y + R) / (2 * R) * (H - 2 * pad);
  const T = ([x, y]) => [A[0][0] * x + A[0][1] * y, A[1][0] * x + A[1][1] * y];
  let g = '', t = '';
  for (let k = -6; k <= 6; k++) {
    g += `M${fmt(X(k))} ${fmt(Y(-R))}V${fmt(Y(R))}M${fmt(X(-R))} ${fmt(Y(k))}H${fmt(X(R))}`;
    const a = T([k, -8]), b = T([k, 8]), c = T([-8, k]), d = T([8, k]);
    t += `M${fmt(X(a[0]))} ${fmt(Y(a[1]))}L${fmt(X(b[0]))} ${fmt(Y(b[1]))}M${fmt(X(c[0]))} ${fmt(Y(c[1]))}L${fmt(X(d[0]))} ${fmt(Y(d[1]))}`;
  }
  const out = [`<clipPath id="lc${SVGN}"><rect x="${pad}" y="${pad}" width="${W - 2 * pad}" height="${H - 2 * pad}"/></clipPath>`,
    `<g clip-path="url(#lc${SVGN})"><path class="gr" d="${g}"/><path class="tg" d="${t}"/>`];
  if (o.eig) for (const [ex, ey] of o.eig) {
    const s = 10; out.push(`<path class="cv c2 ds" d="M${fmt(X(-ex * s))} ${fmt(Y(-ey * s))}L${fmt(X(ex * s))} ${fmt(Y(ey * s))}"/>`);
  }
  out.push(`<path class="ax" d="M${fmt(X(-R))} ${fmt(Y(0))}H${fmt(X(R))}M${fmt(X(0))} ${fmt(Y(-R))}V${fmt(Y(R))}"/>`);
  const e1 = T([1, 0]), e2 = T([0, 1]);
  out.push(`<path class="vc cm" d="M${fmt(X(0))} ${fmt(Y(0))}L${fmt(X(1))} ${fmt(Y(0))}" marker-end="url(#am)"/>`);
  out.push(`<path class="vc c1" d="M${fmt(X(0))} ${fmt(Y(0))}L${fmt(X(e1[0]))} ${fmt(Y(e1[1]))}" marker-end="url(#a1)"/>`);
  out.push(`<path class="vc c3" d="M${fmt(X(0))} ${fmt(Y(0))}L${fmt(X(e2[0]))} ${fmt(Y(e2[1]))}" marker-end="url(#a3)"/>`);
  out.push(`<text class="lb c1" x="${fmt(X(e1[0]) + 6)}" y="${fmt(Y(e1[1]) + 14)}">A e₁</text><text class="lb c3" x="${fmt(X(e2[0]) + 6)}" y="${fmt(Y(e2[1]) - 6)}">A e₂</text></g>`);
  return svgWrap(W, H, out.join(''), o.cap, o.alt);
}

// 방향장 + 해곡선 (RK4)
function slope(o) {
  const f = o.f, [x0, x1] = o.x, [y0, y1] = o.y, W = o.w || 480, H = o.h || 320, pad = 28;
  const X = x => pad + (x - x0) / (x1 - x0) * (W - 2 * pad), Y = y => H - pad - (y - y0) / (y1 - y0) * (H - 2 * pad);
  const nx = o.nx || 20, ny = o.ny || 14; let d = '';
  const sx = (W - 2 * pad) / (x1 - x0), sy = (H - 2 * pad) / (y1 - y0);
  for (let i = 0; i <= nx; i++) for (let j = 0; j <= ny; j++) {
    const x = x0 + (x1 - x0) * i / nx, y = y0 + (y1 - y0) * j / ny, m = f(x, y);
    if (!isFinite(m)) continue;
    const vx = sx, vy = m * sy, L = Math.hypot(vx, vy), h = 7;
    d += `M${fmt(X(x) - vx / L * h)} ${fmt(Y(y) + vy / L * h)}L${fmt(X(x) + vx / L * h)} ${fmt(Y(y) - vy / L * h)}`;
  }
  const out = [`<path class="sf" d="${d}"/>`];
  out.push(`<path class="ax" d="M${pad} ${fmt(Y(Math.max(y0, Math.min(y1, 0))))}H${W - pad}M${fmt(X(Math.max(x0, Math.min(x1, 0))))} ${H - pad}V${pad}"/>`);
  for (const s of o.sols || []) {
    const pts = [[s.x, s.y]];
    for (const dir of [1, -1]) {
      let x = s.x, y = s.y; const hh = dir * (x1 - x0) / 600; const arr = [];
      for (let k = 0; k < 900; k++) {
        const k1 = f(x, y), k2 = f(x + hh / 2, y + hh * k1 / 2), k3 = f(x + hh / 2, y + hh * k2 / 2), k4 = f(x + hh, y + hh * k3);
        y += hh * (k1 + 2 * k2 + 2 * k3 + k4) / 6; x += hh;
        if (!isFinite(y) || x < x0 || x > x1 || y < y0 - 2 || y > y1 + 2) break; arr.push([x, y]);
      }
      if (dir === 1) pts.push(...arr); else pts.unshift(...arr.reverse());
    }
    out.push(`<path class="cv c${s.c || 2}" d="${pts.map((p, i) => (i ? 'L' : 'M') + fmt(X(p[0])) + ' ' + fmt(Y(Math.max(y0 - 1, Math.min(y1 + 1, p[1]))))).join('')}"/>`);
  }
  return svgWrap(W, H, `<clipPath id="sc${SVGN}"><rect x="${pad}" y="${pad}" width="${W - 2 * pad}" height="${H - 2 * pad}"/></clipPath><g clip-path="url(#sc${SVGN})">${out.join('')}</g>`, o.cap, o.alt);
}

// 3D: 간단한 사선 투영 와이어프레임
function surf(o) {
  const W = o.w || 460, H = o.h || 340;
  const az = o.az ?? -0.9, el = o.el ?? 0.45, sc = o.sc || 60, cx = W / 2 + (o.ox || 0), cy = H / 2 + (o.oy || 30);
  const P = ([x, y, z]) => {
    const xr = x * Math.cos(az) - y * Math.sin(az), yr = x * Math.sin(az) + y * Math.cos(az);
    return [cx + sc * xr, cy - sc * (z * Math.cos(el) + yr * Math.sin(el))];
  };
  const out = [];
  const L = o.axl || 2.2;
  for (const [v, lab] of [[[L, 0, 0], 'x'], [[0, L, 0], 'y'], [[0, 0, L * 0.9], 'z']]) {
    const a = P([0, 0, 0]), b = P(v);
    out.push(`<path class="ax" d="M${fmt(a[0])} ${fmt(a[1])}L${fmt(b[0])} ${fmt(b[1])}" marker-end="url(#ah)"/><text class="tl it" x="${fmt(b[0] + 5)}" y="${fmt(b[1] - 3)}">${lab}</text>`);
  }
  for (const s of o.surfs || []) {
    const n = s.n || 16, m = s.m || 16; let d = '';
    const pt = (u, v) => s.p ? s.p(u, v) : [u, v, s.f(u, v)];
    const [ua, ub] = s.u, [va, vb] = s.v;
    for (let i = 0; i <= n; i++) { const u = ua + (ub - ua) * i / n; for (let j = 0; j <= 40; j++) { const v = va + (vb - va) * j / 40; const q = P(pt(u, v)); d += (j ? 'L' : 'M') + fmt(q[0]) + ' ' + fmt(q[1]); } }
    for (let j = 0; j <= m; j++) { const v = va + (vb - va) * j / m; for (let i = 0; i <= 40; i++) { const u = ua + (ub - ua) * i / 40; const q = P(pt(u, v)); d += (i ? 'L' : 'M') + fmt(q[0]) + ' ' + fmt(q[1]); } }
    out.push(`<path class="wf c${s.c || 1}" d="${d}"/>`);
  }
  for (const c of o.curves || []) {
    let d = ''; for (let i = 0; i <= 300; i++) { const t = c.t[0] + (c.t[1] - c.t[0]) * i / 300; const q = P(c.r(t)); d += (i ? 'L' : 'M') + fmt(q[0]) + ' ' + fmt(q[1]); }
    out.push(`<path class="cv c${c.c || 2}" d="${d}"/>`);
  }
  for (const v of o.vecs || []) {
    const a = P(v.from || [0, 0, 0]), b = P((v.from || [0, 0, 0]).map((x, i) => x + v.v[i]));
    out.push(`<path class="vc c${v.c || 2}" d="M${fmt(a[0])} ${fmt(a[1])}L${fmt(b[0])} ${fmt(b[1])}" marker-end="url(#a${v.c || 2})"/>${v.label ? `<text class="lb c${v.c || 2}" x="${fmt(b[0] + 6)}" y="${fmt(b[1] - 4)}">${v.label}</text>` : ''}`);
  }
  for (const pt of o.pts || []) { const q = P(pt.p); out.push(`<circle class="pt c${pt.c || 2}" cx="${fmt(q[0])}" cy="${fmt(q[1])}" r="4"/>${pt.label ? `<text class="lb c${pt.c || 2}" x="${fmt(q[0] + 7)}" y="${fmt(q[1] - 6)}">${pt.label}</text>` : ''}`); }
  return svgWrap(W, H, out.join(''), o.cap, o.alt);
}

// 흐름도(판정 순서도 등): 세로로 쌓인 질문 → 예/아니오
function flow(steps, cap) {
  return `<figure class="fig"><ol class="flow">${steps.map(s => `<li><div class="fq">${s.q}</div><div class="fa">${s.a}</div></li>`).join('')}</ol>${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
}

// 표
function table(head, rows, cls) {
  return `<div class="tw"><table class="tb ${cls || ''}"><thead><tr>${head.map(x => `<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(x => { const m = /^@([\w -]+)\|/.exec(x); return m ? `<td class="${m[1]}">${x.slice(m[0].length)}</td>` : `<td>${x}</td>`; }).join('')}</tr>`).join('')}</tbody></table></div>`;
}

// 보기 목록: h.c`가 | 나 | 다 | 라`  (String.raw 라서 역슬래시 한 번만)
function c(strs, ...vals) { return String.raw(strs, ...vals).split(/\s+\|\s+/).map(x => x.trim()); }

module.exports = { c, reset, ex, p, box, plot, lin2, slope, surf, flow, table, registry, srcTag };
