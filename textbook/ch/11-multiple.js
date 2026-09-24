module.exports = {
  id: 'c11', num: '11', part: 'PART B · 다변수와 벡터', title: '다중적분', short: '순서교환 · 극좌표 · 야코비안 · 구면좌표',
  schools: { KU: '11% · 나오면 2문제', HY: '미적 파트', CAU: '매년 2–3문항' },
  lede: '이중적분은 "영역을 그릴 줄 아냐" 시험이다. 영역만 제대로 그리면 순서 바꾸기, 극좌표, 변수변환 중 뭘 쓸지가 그림에서 바로 보인다.',
  body: h => String.raw`
<h3><span class="sn">11.1</span>이중적분 = 부피, 계산은 한 변수씩</h3>
<p>$\iint_Df(x,y)\,dA$ 는 영역 $D$ 위에서 높이 $f$ 인 기둥의 부피. 계산은 <b>안쪽 적분부터</b>: 바깥 변수는 상수로 두고 안쪽 변수로 적분.</p>
${h.box('key', '영역 두 가지 읽기', String.raw`<p><b>세로 줄</b>: $a\le x\le b,\ g_1(x)\le y\le g_2(x)$ → $\displaystyle\int_a^b\int_{g_1(x)}^{g_2(x)}f\,dy\,dx$</p><p><b>가로 줄</b>: $c\le y\le d,\ h_1(y)\le x\le h_2(y)$ → $\displaystyle\int_c^d\int_{h_1(y)}^{h_2(y)}f\,dx\,dy$</p><p>같은 영역을 두 방식으로 읽을 수 있다. 이게 순서 교환이다.</p>`)}

<h3><span class="sn">11.2</span>적분 순서 바꾸기</h3>
${h.box('pat', '안쪽 적분이 초등함수로 안 풀린다', '<p>$e^{x^2},\\ e^{x^3},\\ \\sin(y^2),\\ \\frac{1}{y^3+1}$ 처럼 적분이 안 되는 놈이 안쪽에 있으면 <b>100% 순서 교환 문제</b>다. 바꾸면 그 앞에 딱 맞는 미분 인자($x^2$ 같은)가 튀어나오게 설계돼 있다.</p>')}
${h.ex({ src: 'CAU 2023-5', q: String.raw`$\displaystyle\int_0^1\int_{\sqrt y}^1e^{x^3}dx\,dy$ 의 값은?`, choices: h.c`$\frac12(e-1)$ | $\frac12(e+1)$ | $\frac13(e-1)$ | $\frac13(e+1)$`,
  sol: String.raw`${h.plot({ x: [-0.15, 1.25], y: [-0.15, 1.25], equal: true, w: 300, h: 290, fills: [{ top: x => x * x, bot: () => 0, a: 0, b: 1, c: 1 }], fns: [{ f: x => x * x, dom: [0, 1.1], c: 1, label: 'y = x² (x = √y)', lx: 0.05, ly: 0.9 }], lines: [{ p: [1, 0], q: [1, 1.1], c: 2 }, { p: [0.3, 0.25], q: [1, 0.25], c: 'm', dash: 1 }, { p: [0.6, 0], q: [0.6, 0.36], c: 3 }], texts: [{ x: 1.03, y: 0.5, t: 'x = 1', c: 2 }], cap: '원래: 가로 줄(점선) $\\sqrt y\\le x\\le1$. 바꾸면: 세로 줄(초록) $0\\le y\\le x^2$.' })}<p>영역: $0\le y\le1,\ \sqrt y\le x\le1$ = $0\le x\le1,\ 0\le y\le x^2$.</p>$$\int_0^1\int_0^{x^2}e^{x^3}dy\,dx=\int_0^1x^2e^{x^3}dx=\frac13(e-1)$$<p>바꾸니까 $x^2$ 가 튀어나와서 치환이 된다. 설계된 문제.</p>`, ans: '③' })}
${h.ex({ src: 'CAU 2024-3', q: String.raw`$\displaystyle\int_0^1\int_x^1x^{2022}\sqrt{1+y^{2024}}\,dy\,dx$ 의 값은?`, choices: h.c`$\frac{2\sqrt2-1}{2024\cdot3036}$ | $\frac{2\sqrt2-1}{2023\cdot3036}$ | $\frac{\sqrt2-1}{2024\cdot3036}$ | $\frac{\sqrt2-1}{2023\cdot3036}$`,
  sol: String.raw`<p>영역 $0\le x\le y\le1$. 바꾸면 $\int_0^1\sqrt{1+y^{2024}}\int_0^yx^{2022}dx\,dy=\int_0^1\sqrt{1+y^{2024}}\frac{y^{2023}}{2023}dy$.</p><p>$u=1+y^{2024}$, $du=2024y^{2023}dy$: $\frac1{2023\cdot2024}\int_1^2\sqrt u\,du=\frac{1}{2023\cdot2024}\cdot\frac23(2\sqrt2-1)$. $2024\cdot\frac32=3036$.</p>`, ans: '②' })}

<h3><span class="sn">11.3</span>극좌표 — 원이 보이면</h3>
${h.box('key', '극좌표 이중적분', String.raw`<p>$$dA=r\,dr\,d\theta$$ <mark>$r$ 하나 곱하는 거 까먹으면 끝</mark>. 영역이 원·부채꼴·고리거나 피적분함수에 $x^2+y^2$ 가 있으면 극좌표.</p><p>가우스 적분: $\displaystyle\int_{-\infty}^\infty e^{-x^2}dx=\sqrt\pi$ (제곱해서 극좌표로 증명).</p>`)}
${h.ex({ q: String.raw`$\displaystyle\iint_{x^2+y^2\le4}e^{-(x^2+y^2)}dA$`,
  sol: String.raw`<p>$\int_0^{2\pi}\int_0^2e^{-r^2}r\,dr\,d\theta=2\pi\cdot\frac12(1-e^{-4})=\pi(1-e^{-4})$. 여기서 $r$ 이 없으면 적분이 안 된다. 그 $r$ 이 공짜로 치환 인자가 되어 준다.</p>`, ans: '$\\pi(1-e^{-4})$' })}

<h3><span class="sn">11.4</span>변수변환 — 야코비안</h3>
${h.box('key', '변수변환', String.raw`<p>$x=x(u,v),\ y=y(u,v)$ 면 $\ dx\,dy=\left|\dfrac{\partial(x,y)}{\partial(u,v)}\right|du\,dv$</p><p><b>역수 공식</b>: $u,v$ 가 $x,y$ 로 주어지면 $\dfrac{\partial(x,y)}{\partial(u,v)}=1\Big/\dfrac{\partial(u,v)}{\partial(x,y)}$. 굳이 $x,y$ 로 풀지 않는다.</p>`)}
${h.box('pat', '언제 쓰나', '<p>① 영역 경계가 $x-y=\\text{상수},\\ x+2y=\\text{상수}$ 처럼 기울어진 평행사변형 → $u=x-y,\\ v=x+2y$. ② 타원 $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}\\le1$ → $x=au,\\ y=bv$ ($dA=ab\\,du\\,dv$) 후 극좌표. ③ $xy$ 항 있는 이차형식 → 완전제곱이나 회전.</p>')}
${h.ex({ src: 'CAU 2025-30', q: String.raw`$P=\{(x,y):0\le x-y\le\pi,\ 0\le x+2y\le\frac\pi2\}$ 일 때 $\displaystyle\iint_P\sin(x-y)\cos(x+2y)\,dx\,dy$ 는?`, choices: h.c`$\frac16$ | $\frac13$ | $\frac12$ | $\frac23$`,
  sol: String.raw`<p>$u=x-y,\ v=x+2y$. $\frac{\partial(u,v)}{\partial(x,y)}=\begin{vmatrix}1&-1\\1&2\end{vmatrix}=3$ → $dx\,dy=\frac13du\,dv$.</p><p>$\frac13\int_0^\pi\sin u\,du\int_0^{\pi/2}\cos v\,dv=\frac13\cdot2\cdot1$.</p>`, ans: '④ $\\frac23$' })}
${h.ex({ src: 'KU 2020-4', q: String.raw`$D:\ 2x^2+2xy+5y^2\le1$ 에서 $\displaystyle\iint_De^{2x^2+2xy+5y^2}dA$`,
  sol: String.raw`<p>완전제곱: $2\left(x+\frac y2\right)^2+\frac92y^2$. $u=\sqrt2\left(x+\frac y2\right),\ v=\frac3{\sqrt2}y$ 면 $u^2+v^2\le1$, $\frac{\partial(u,v)}{\partial(x,y)}=\sqrt2\cdot\frac3{\sqrt2}=3$.</p><p>$\frac13\iint_{u^2+v^2\le1}e^{u^2+v^2}du\,dv=\frac13\cdot\pi(e-1)$.</p><p>빠른 길: 이차형식 $\mathbf x^TA\mathbf x\le1$ 영역의 넓이는 $\frac{\pi}{\sqrt{\det A}}$, $A=\begin{pmatrix}2&1\\1&5\end{pmatrix}$, $\det=9$ → 배율 $\frac13$.</p>`, ans: '$\\dfrac{\\pi(e-1)}3$' })}

<h3><span class="sn">11.5</span>삼중적분 — 원기둥 · 구면좌표</h3>
<div class="fig-row">
${h.surf({ w: 320, h: 280, sc: 70, oy: 40, surfs: [{ p: (u, v) => [Math.cos(u), Math.sin(u), v], u: [0, 2 * Math.PI], v: [0, 1.3], n: 16, m: 4, c: 1 }], pts: [{ p: [0.8 * Math.cos(0.7), 0.8 * Math.sin(0.7), 0.9], c: 2, label: '(r, θ, z)' }], cap: '원기둥좌표: 극좌표 + 높이 $z$. $dV=r\\,dz\\,dr\\,d\\theta$' })}
${h.surf({ w: 320, h: 280, sc: 70, oy: 30, surfs: [{ p: (u, v) => [Math.sin(v) * Math.cos(u), Math.sin(v) * Math.sin(u), Math.cos(v)], u: [0, 2 * Math.PI], v: [0, Math.PI], n: 14, m: 8, c: 1 }], vecs: [{ v: [0.55, 0.45, 0.7], c: 2, label: 'ρ' }], cap: '구면좌표: $x=\\rho\\sin\\phi\\cos\\theta,\\ y=\\rho\\sin\\phi\\sin\\theta,\\ z=\\rho\\cos\\phi$. $dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$' })}
</div>
${h.box('key', '좌표 고르기', String.raw`<p>$x^2+y^2$ 만 있고 원기둥·포물면 → <b>원기둥</b>. $x^2+y^2+z^2$ 이 있고 구·원뿔 → <b>구면</b>. $\phi$ 는 $z$축에서 내려온 각 ($0\le\phi\le\pi$), 원뿔 $z=\sqrt{x^2+y^2}$ 은 $\phi=\frac\pi4$.</p>`)}
${h.ex({ src: 'CAU 2023-28', q: String.raw`$B:\ x^2+y^2+z^2\le1$ 에 대해 $\displaystyle\iiint_Be^{(x^2+y^2+z^2)^{3/2}}dV$ 는?`, choices: h.c`$\frac43\pi(e-1)$ | $\frac53\pi(e-1)$ | $\frac43\pi(e+1)$ | $\frac53\pi(e+1)$`,
  sol: String.raw`<p>구면좌표, 각도 부분은 통째로 $4\pi$ (구 겉넓이 인자): $4\pi\int_0^1e^{\rho^3}\rho^2d\rho=4\pi\cdot\frac13(e-1)$.</p>`, ans: '①' })}
${h.ex({ src: 'CAU 2025-16', q: String.raw`$\Omega=\{z>0,\ x^2+y^2+z^2\le1\}$ 에서 $\displaystyle\iiint_\Omega(x^2+y^2)z\,dV$ 는?`, choices: h.c`$\frac\pi{21}$ | $\frac\pi{18}$ | $\frac\pi{15}$ | $\frac\pi{12}$`,
  sol: String.raw`<p>$x^2+y^2=\rho^2\sin^2\phi$, $z=\rho\cos\phi$. $\int_0^{2\pi}\int_0^{\pi/2}\int_0^1\rho^5\sin^3\phi\cos\phi\,d\rho\,d\phi\,d\theta=2\pi\cdot\frac16\cdot\frac14$.</p>`, ans: '④ $\\frac\\pi{12}$' })}
${h.ex({ src: 'CAU 2026-26', q: String.raw`$E=\left\{\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}\le1\right\}$ 에서 $\displaystyle\iiint_E\left(\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}\right)^3dV$ 는?`, choices: h.c`$\frac\pi9abc$ | $\frac{2\pi}9abc$ | $\frac\pi3abc$ | $\frac{4\pi}9abc$`,
  sol: String.raw`<p>$x=au,\ y=bv,\ z=cw$ ($dV=abc\,du\,dv\,dw$) → 단위구에서 $\rho^6$ 적분: $abc\cdot4\pi\int_0^1\rho^8d\rho=\frac{4\pi abc}9$.</p>`, ans: '④' })}

<h3><span class="sn">11.6</span>응용: 부피 · 질량 · 무게중심</h3>
${h.box('key', '공식', String.raw`<p>질량 $m=\iint\rho\,dA$, 무게중심 $\bar x=\frac1m\iint x\rho\,dA$, $\bar y=\frac1m\iint y\rho\,dA$. 관성모멘트 $I_x=\iint y^2\rho\,dA$ ($x$축까지 거리²).</p><p>대칭이면 무게중심 좌표 하나는 계산 없이 0.</p>`)}

<div class="probs-h"><h3>연습문제 11</h3><span class="cnt">15문항</span></div>
${h.p({ src: 'CAU 2023-24', q: String.raw`$\displaystyle\int_0^4\int_{\sqrt x}^2\frac1{y^3+1}dy\,dx$`, choices: h.c`$\frac13\ln2$ | $\frac13\ln3$ | $\frac23\ln2$ | $\frac23\ln3$`, ans: '④', sol: String.raw`<p>$0\le y\le2,\ 0\le x\le y^2$. $\int_0^2\frac{y^2}{y^3+1}dy=\frac13\ln9$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_0^1\int_x^1e^{y^2}dy\,dx$`, ans: '$\\frac{e-1}2$', sol: String.raw`<p>$\int_0^1ye^{y^2}dy$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_0^{\pi}\int_x^{\pi}\frac{\sin y}ydy\,dx$`, ans: '$2$', sol: String.raw`<p>$\int_0^\pi\frac{\sin y}y\cdot y\,dy=2$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\iint_{x^2+y^2\le1}\sqrt{1-x^2-y^2}\,dA$`, ans: '$\\frac{2\\pi}3$', sol: String.raw`<p>반구 부피. $2\pi\int_0^1\sqrt{1-r^2}r\,dr=\frac{2\pi}3$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_{-\infty}^\infty\int_{-\infty}^\infty e^{-(x^2+y^2)}dx\,dy$`, ans: '$\\pi$', sol: String.raw`<p>$2\pi\int_0^\infty re^{-r^2}dr$.</p>` })}
${h.p({ q: String.raw`타원 $\frac{x^2}4+\frac{y^2}9\le1$ 에서 $\iint x^2dA$`, ans: '$6\\pi$', sol: String.raw`<p>$x=2u,y=3v$: $6\iint4u^2=24\cdot\frac\pi4$.</p>` })}
${h.p({ src: 'KU 2021-4', lv: 2, q: String.raw`$9x^2+4y^2\le1$ 의 1사분면에서 $\iint\sin(9x^2+4y^2)dA$`, ans: '$\\dfrac{\\pi(1-\\cos1)}{24}$', sol: String.raw`<p>$u=3x,v=2y$ ($dA=\frac16du\,dv$), 1사분면 원: $\frac16\cdot\frac\pi2\cdot\frac{1-\cos1}2$.</p>` })}
${h.p({ src: 'KU 2025-7', lv: 3, q: String.raw`$x^2-xy+y^2\le2$ 에서 $\iint x^2dA$`, ans: '$\\dfrac{8\\sqrt3}9\\pi$', sol: String.raw`<p>$45^\circ$ 회전 $x=\frac{u-v}{\sqrt2},y=\frac{u+v}{\sqrt2}$ (야코비안 1): $x^2-xy+y^2=\frac{u^2+3v^2}2\le2$, 반축 $2,\frac2{\sqrt3}$ 인 타원. $x^2=\frac{(u-v)^2}2$, 교차항은 대칭으로 0 → $\frac12\iint(u^2+v^2)$.</p><p>타원 $\frac{u^2}{a^2}+\frac{v^2}{b^2}\le1$: $\iint u^2=\frac{\pi a^3b}4$, $\iint v^2=\frac{\pi ab^3}4$. 계산하면 $\frac12\left(\frac{4\pi}{\sqrt3}+\frac{4\pi}{3\sqrt3}\right)=\frac{8\pi}{3\sqrt3}$.</p>` })}
${h.p({ src: 'KU 2025-6', lv: 2, q: String.raw`$\displaystyle\int_0^1\int_y^{2y}x^2e^{xy}dx\,dy$`, ans: '$\\dfrac{e+1}2$', sol: String.raw`<p>$x$ 로 먼저면 부분적분 지옥. 순서 바꾸면 $\int x^2e^{xy}dy=xe^{xy}$ 로 깔끔. 영역 $y\le x\le2y$ 를 $x$ 기준으로 읽으면 $x\in[0,1]$: $\frac x2\le y\le x$, $x\in[1,2]$: $\frac x2\le y\le1$.</p><p>$\int_0^1x\left(e^{x^2}-e^{x^2/2}\right)dx+\int_1^2x\left(e^x-e^{x^2/2}\right)dx=\left(\frac e2-\sqrt e+\frac12\right)+\sqrt e$.</p>` })}
${h.p({ q: String.raw`구 $x^2+y^2+z^2\le a^2$ 의 부피를 구면좌표로`, ans: '$\\frac43\\pi a^3$', sol: String.raw`<p>$\int_0^{2\pi}\int_0^\pi\int_0^a\rho^2\sin\phi$.</p>` })}
${h.p({ lv: 2, q: String.raw`원뿔 $z=\sqrt{x^2+y^2}$ 위, 구 $x^2+y^2+z^2=4$ 아래 영역의 부피`, ans: '$\\frac{16\\pi}3\\left(1-\\frac1{\\sqrt2}\\right)$', sol: String.raw`<p>$\phi\le\frac\pi4$, $\rho\le2$: $2\pi\cdot(1-\cos\frac\pi4)\cdot\frac83$.</p>` })}
${h.p({ lv: 2, q: String.raw`포물면 $z=4-x^2-y^2$ 과 $xy$ 평면 사이 부피`, ans: '$8\\pi$', sol: String.raw`<p>$\int_0^{2\pi}\int_0^2(4-r^2)r\,dr\,d\theta=2\pi\cdot4$.</p>` })}
${h.p({ q: String.raw`반원판 $x^2+y^2\le1,\ y\ge0$ (밀도 1)의 무게중심`, ans: '$\\left(0,\\frac4{3\\pi}\\right)$', sol: String.raw`<p>$\iint y\,dA=\int_0^\pi\int_0^1r^2\sin\theta=\frac23$, 넓이 $\frac\pi2$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\int_0^2\int_0^{\sqrt{4-x^2}}\frac{1}{1+x^2+y^2}dy\,dx$`, ans: '$\\frac\\pi4\\ln5$', sol: String.raw`<p>1사분면 반지름 2: $\frac\pi2\cdot\frac12\ln(1+r^2)\big|_0^2$.</p>` })}
${h.p({ lv: 2, q: String.raw`$u=x+y,\ v=x-y$ 로 $\displaystyle\iint_{|x|+|y|\le1}(x+y)^2dA$`, ans: '$\\frac23$', sol: String.raw`<p>영역 $|u|\le1,|v|\le1$, $dA=\frac12du\,dv$. $\frac12\int_{-1}^1u^2du\int_{-1}^1dv=\frac12\cdot\frac23\cdot2$.</p>` })}
`
};
