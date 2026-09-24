module.exports = {
  id: 'c06', num: '06', part: 'PART A · 미적분의 바닥', title: '적분의 활용과 이상적분', short: '넓이 · 부피 · 길이 · 이상적분',
  schools: { KU: '회전체 · 이상적분 수렴', HY: '미적 파트 단골', CAU: '넓이 매년 1–2' },
  lede: '적분 문제의 절반은 "무엇을 적분해야 하는지"만 세우면 끝난다. 그림 그리고, 얇은 조각 하나의 넓이·부피·길이를 쓰고, 더한다.',
  body: h => String.raw`
<h3><span class="sn">6.1</span>두 곡선 사이 넓이 — 위 빼기 아래</h3>
${h.box('key', '넓이', String.raw`<p>$\displaystyle A=\int_a^b\big(\text{위}-\text{아래}\big)\,dx$ &nbsp;또는&nbsp; $\displaystyle A=\int_c^d\big(\text{오른쪽}-\text{왼쪽}\big)\,dy$</p><p>교점부터 구하고, 구간마다 누가 위인지 확인. 위아래가 바뀌면 쪼갠다.</p>`)}
${h.plot({ x: [-0.15, 1.2], y: [-0.15, 1.2], equal: true, w: 360, h: 340, fills: [{ top: x => Math.sin(Math.PI * x / 2), bot: x => 2 / Math.PI * Math.asin(Math.min(1, x)), a: 0, b: 1, c: 1 }], fns: [{ f: x => Math.sin(Math.PI * x / 2), dom: [0, 1], c: 1, label: 'y = sin(πx/2)', lx: 0.08, ly: 0.9 }, { f: x => 2 / Math.PI * Math.asin(x), dom: [0, 1], c: 2, label: '역함수', lx: 0.7, ly: 0.28 }, { f: x => x, c: 'm', dash: 1, thin: 1 }], xt: [1], yt: [1], cap: '중앙대 2024-13. 함수와 역함수 사이 넓이는 $y=x$ 로 반 갈라서 두 배.' })}
${h.ex({ src: 'CAU 2024-13', q: String.raw`$y=\sin\left(\frac\pi2x\right)\ (0\le x\le1)$ 의 그래프와 그 역함수의 그래프로 둘러싸인 넓이는?`, choices: h.c`$\frac4\pi+1$ | $\frac4\pi-1$ | $\frac6\pi+1$ | $\frac6\pi-1$`,
  sol: String.raw`<p>역함수 적분은 귀찮다. 두 그래프는 $y=x$ 대칭이니 <b>$y=\sin\frac{\pi x}2$ 와 $y=x$ 사이 넓이의 2배</b>.</p><p>$2\int_0^1\left(\sin\frac{\pi x}2-x\right)dx=2\left(\frac2\pi-\frac12\right)=\frac4\pi-1$.</p>`, ans: '②' })}
${h.ex({ src: 'CAU 2023-7', q: String.raw`두 부등식 $x^2+y^2\ge4,\ x^2+(y-\sqrt3)^2\le1$ 을 만족하는 영역의 넓이는?`, choices: h.c`$\sqrt3-\frac\pi6$ | $\sqrt6-\frac\pi3$ | $\sqrt3-\frac\pi4$ | $\sqrt6-\frac\pi4$`,
  sol: String.raw`${h.plot({ x: [-2.3, 2.3], y: [-0.6, 3], equal: true, w: 380, h: 280, pfills: [{ fx: t => Math.cos(t), fy: t => Math.sqrt(3) + Math.sin(t), t: [0, Math.PI], c: 1 }], curves: [{ fx: t => 2 * Math.cos(t), fy: t => 2 * Math.sin(t), t: [0, Math.PI], c: 'm' }, { fx: t => Math.cos(t), fy: t => Math.sqrt(3) + Math.sin(t), t: [0, 2 * Math.PI], c: 1 }], pfills2: [], cap: '작은 원의 윗 반원(색칠)에서 큰 원이 파먹은 활꼴을 뺀다.' })}<p>교점: 두 식 빼면 $2\sqrt3y=6$ → $y=\sqrt3,\ x=\pm1$. 작은 원 중심이 $(0,\sqrt3)$ 이니 이 현은 작은 원의 <b>지름</b>. 구하는 영역 = 작은 원 윗반원 $\frac\pi2$ − (큰 원의 활꼴).</p><p>활꼴: 큰 원(반지름 2)에서 두 교점의 중심각 $\frac\pi3$. $\frac12r^2(\theta-\sin\theta)=2\left(\frac\pi3-\frac{\sqrt3}2\right)$.</p><p>$\frac\pi2-\frac{2\pi}3+\sqrt3=\sqrt3-\frac\pi6$.</p>`, ans: '①' })}
${h.ex({ src: 'CAU 2026-25', q: String.raw`1사분면에서 $y=\cos x$ 와 타원 $4x^2+\pi^2y^2=\pi^2$ 사이 영역의 넓이는?`, choices: h.c`$\frac{\pi^2}8-2$ | $\frac{\pi^2}8-1$ | $\frac{\pi^2}8+1$ | $\frac{\pi^2}8+2$`,
  sol: String.raw`<p>타원: $\dfrac{x^2}{(\pi/2)^2}+y^2=1$, 반축 $\frac\pi2,\ 1$. 두 곡선 모두 $(0,1),\ (\frac\pi2,0)$ 을 지나고 타원이 바깥.</p><p>(타원 $\frac14$) − ($\cos x$ 아래) $=\frac14\pi\cdot\frac\pi2\cdot1-\int_0^{\pi/2}\cos x\,dx=\frac{\pi^2}8-1$.</p>`, ans: '②' })}
<h4>매개변수 곡선의 넓이</h4>
<p>$x=x(t),y=y(t)$ 면 $A=\int y\,dx=\int y(t)\,x'(t)\,dt$. 구간 방향(부호) 조심.</p>
${h.ex({ src: 'CAU 2023-2', q: String.raw`$x^{2/3}+y^{2/3}\le1,\ x\ge0,\ y\ge0$ 영역의 넓이는?`, choices: h.c`$\frac{3\pi}{16}$ | $\frac{3\pi}{32}$ | $\frac\pi8$ | $\frac{5\pi}{64}$`,
  sol: String.raw`${h.plot({ x: [-1.2, 1.2], y: [-1.2, 1.2], equal: true, w: 300, h: 300, pfills: [{ fx: t => Math.cos(t) ** 3, fy: t => Math.sin(t) ** 3, t: [0, Math.PI / 2], c: 1, origin: 1 }], curves: [{ fx: t => Math.cos(t) ** 3, fy: t => Math.sin(t) ** 3, t: [0, 2 * Math.PI], c: 1 }], cap: '아스테로이드(성망형) $x^{2/3}+y^{2/3}=1$.' })}<p>$x=\cos^3t,\ y=\sin^3t$ 로 매개화. $t:0\to\frac\pi2$ 에서 $x:1\to0$ 이라 부호 주의.</p>$$A=\int_0^1y\,dx=\int_{\pi/2}^0\sin^3t\cdot(-3\cos^2t\sin t)\,dt=3\int_0^{\pi/2}\sin^4t\cos^2t\,dt$$<p>$\sin^4\cos^2=\sin^4-\sin^6$ 으로 왈리스: $\frac{3\pi}{16}-\frac{5\pi}{32}=\frac{\pi}{32}$. 곱하기 3.</p>`, ans: '② $\\frac{3\\pi}{32}$' })}

<h3><span class="sn">6.2</span>회전체 부피 — 원판 vs 원통껍질</h3>
<div class="fig-row">
${h.plot({ x: [-0.3, 2.4], y: [-1.6, 1.6], equal: true, grid: false, w: 300, h: 260, fns: [{ f: x => Math.sqrt(x), dom: [0, 2], c: 1 }, { f: x => -Math.sqrt(x), dom: [0, 2], c: 1, dash: 1, thin: 1 }], curves: [{ fx: t => 1.3 + 0.12 * Math.cos(t), fy: t => Math.sqrt(1.3) * Math.sin(t), t: [0, 2 * Math.PI], c: 2 }], lines: [{ p: [1.3, 0], q: [1.3, Math.sqrt(1.3)], c: 2 }], texts: [{ x: 1.45, y: 0.5, t: 'r = f(x)', c: 2 }], cap: '원판: $x$축 회전. 조각 = 원판 $\\pi f(x)^2dx$' })}
${h.plot({ x: [-2.3, 2.3], y: [-0.3, 2.2], equal: true, grid: false, w: 300, h: 260, fns: [{ f: x => 2 - x * x / 2, dom: [0, 2], c: 1 }, { f: x => 2 - x * x / 2, dom: [-2, 0], c: 1, dash: 1, thin: 1 }], lines: [{ p: [1.1, 0], q: [1.1, 2 - 1.21 / 2], c: 2 }, { p: [-1.1, 0], q: [-1.1, 2 - 1.21 / 2], c: 2, dash: 1 }], curves: [{ fx: t => 1.1 * Math.cos(t), fy: t => 0.12 * Math.sin(t), t: [0, 2 * Math.PI], c: 2 }], texts: [{ x: 0.5, y: 0.25, t: '반지름 x', c: 2 }], cap: '원통껍질: $y$축 회전. 조각 = 껍질 $2\\pi x\\,f(x)\\,dx$' })}
</div>
${h.box('key', '부피 공식', String.raw`<p><b>원판·와셔</b> ($x$축 회전): $V=\pi\int_a^b\left(R^2-r^2\right)dx$ &nbsp; (바깥 반지름² − 안쪽 반지름²)</p><p><b>원통껍질</b> ($y$축 회전, $x$ 로 적분): $V=2\pi\int_a^b x\,f(x)\,dx$</p><p><b>단면적</b>: $V=\int A(x)\,dx$. 회전축이 $x=c$ 면 반지름이 $|x-c|$.</p>`)}
${h.box('warn', '와셔', '<p>$\\pi(R^2-r^2)$ 이지 $\\pi(R-r)^2$ 아니다. 매년 누군가 이걸로 틀린다.</p>')}
${h.ex({ src: 'CAU 2023-17', q: String.raw`곡선 $y=\dfrac2{x^3-x^2-x+1}$ 와 $y=0,\ x=0,\ x=\frac12$ 로 둘러싸인 영역을 $y$ 축 둘레로 회전한 부피는?`, choices: h.c`$\pi(2-\ln2)$ | $\pi(2-\ln3)$ | $\pi(3-\ln2)$ | $\pi(3-\ln3)$`,
  sol: String.raw`<p>$y$축 회전 + $x$ 로 주어진 함수 → 원통껍질. 분모 인수분해: $x^2(x-1)-(x-1)=(x-1)^2(x+1)$.</p>$$V=2\pi\int_0^{1/2}\frac{2x}{(x-1)^2(x+1)}dx$$<p>부분분수 $\frac{x}{(x-1)^2(x+1)}=\frac{1/4}{x-1}+\frac{1/2}{(x-1)^2}-\frac{1/4}{x+1}$ (가림법으로 $\frac12,-\frac14$, 나머지는 $x^2$ 계수).</p><p>적분 $=\Big[\frac14\ln\left|\frac{x-1}{x+1}\right|-\frac{1}{2(x-1)}\Big]_0^{1/2}=\left(\frac14\ln\frac13+1\right)-\frac12=\frac12-\frac14\ln3$.</p><p>$V=4\pi\left(\frac12-\frac14\ln3\right)=\pi(2-\ln3)$.</p>`, ans: '②' })}
${h.box('key', '파푸스 정리', String.raw`<p>넓이 $A$ 인 영역을 (자기를 가로지르지 않는) 축 둘레로 돌리면 $V=2\pi\bar r\,A$. $\bar r$ 은 무게중심에서 축까지 거리.</p><p>도넛(토러스): 반지름 $r$ 원을 중심에서 $R$ 떨어진 축으로 → $V=2\pi R\cdot\pi r^2=2\pi^2Rr^2$.</p>`)}

<h3><span class="sn">6.3</span>곡선의 길이 · 회전면의 넓이</h3>
${h.box('key', '길이 · 겉넓이', String.raw`<p>$L=\int_a^b\sqrt{1+(y')^2}\,dx$, &nbsp; 매개: $L=\int\sqrt{\dot x^2+\dot y^2}\,dt$, &nbsp; 극좌표: $L=\int\sqrt{r^2+(r')^2}\,d\theta$ (8장)</p><p>회전면 ($x$축): $S=2\pi\int y\,\sqrt{1+(y')^2}\,dx$ &nbsp; (둘레 × 미소 길이)</p>`)}
<p>문제는 대부분 루트 안이 <b>완전제곱</b>이 되도록 설계돼 있다. $1+(y')^2$ 을 전개했는데 안 벗겨지면 계산 실수부터 의심해라.</p>
${h.ex({ q: String.raw`$y=\cosh x$ 의 $0\le x\le1$ 부분 길이`, sol: String.raw`<p>$1+\sinh^2x=\cosh^2x$ 라 루트가 벗겨진다. $\int_0^1\cosh x\,dx=\sinh1$.</p>`, ans: '$\\sinh 1=\\frac{e-e^{-1}}2$' })}
${h.ex({ q: String.raw`사이클로이드 $x=a(t-\sin t),\ y=a(1-\cos t)$ 한 아치 ($0\le t\le2\pi$) 의 길이`, sol: String.raw`<p>$\dot x^2+\dot y^2=a^2\left[(1-\cos t)^2+\sin^2t\right]=2a^2(1-\cos t)=4a^2\sin^2\frac t2$.</p><p>$L=\int_0^{2\pi}2a\sin\frac t2\,dt=8a$. 이 숫자는 외워라.</p>`, ans: '$8a$' })}

<h3><span class="sn">6.4</span>이상적분 — 끝이 무한이거나 함수가 터지거나</h3>
<p>적분 구간이 $\infty$ 까지 가거나, 구간 안에서 함수가 $\infty$ 로 터지면 <b>극한</b>으로 정의한다: $\int_1^\infty f=\lim_{R\to\infty}\int_1^Rf$. 극한이 유한하면 수렴.</p>
${h.box('key', 'p-적분 (판정의 기준자)', String.raw`<p>$\displaystyle\int_1^\infty\frac{dx}{x^p}$ 수렴 $\iff p>1$ &nbsp;&nbsp;|&nbsp;&nbsp; $\displaystyle\int_0^1\frac{dx}{x^p}$ 수렴 $\iff p<1$</p><p>외우는 법: 무한대 쪽은 <b>빨리 죽어야</b>($p>1$), 0 쪽은 <b>천천히 터져야</b>($p<1$). $p=1$ 은 양쪽 다 발산 ($\ln$).</p>`)}
${h.plot({ x: [0, 6], y: [0, 2.5], w: 520, h: 250, fns: [{ f: x => 1 / x, c: 2, label: '1/x : 발산', lx: 3.2, ly: 0.55, dom: [0.35, 6] }, { f: x => 1 / (x * x), c: 1, label: '1/x² : 수렴', lx: 1.6, ly: 0.2, dom: [0.6, 6] }], xt: [1, 2, 3, 4, 5], yt: [1, 2], cap: '$1$ 부터 $\\infty$ 까지. $\\frac1x$ 아래 넓이는 끝없이 쌓이고($\\ln R\\to\\infty$), $\\frac1{x^2}$ 은 1로 수렴한다.' })}
${h.box('pat', '수렴 판정 = 끝에서 뭐처럼 행동하냐', '<p>문제 되는 끝(무한대나 터지는 점)에서 함수를 <b>제일 센 항만 남겨</b> $\\frac1{x^p}$ 와 비교한다 (극한비교). $\\frac1{\\sqrt{2+x^3}}\\sim x^{-3/2}$ → 수렴. $\\frac{1}{\\sqrt{1+x^2}}\\sim\\frac1x$ → 발산.</p>')}
${h.ex({ src: 'CAU 2025-27', q: String.raw`다음 중 발산하는 적분을 모두 고르면?<br>(가) $\int_0^1\frac{dx}{\sqrt{1-x}}$ &nbsp; (나) $\int_1^4\frac{dx}{(x-2)^2}$ &nbsp; (다) $\int_1^\infty\frac{dx}{\sqrt{1+x^2}}$ &nbsp; (라) $\int_1^\infty\frac{dx}{\sqrt{2+x^3}}$`, choices: h.c`(가), (나) | (나), (다) | (가), (라) | (다), (라)`,
  sol: String.raw`<p>(가) $x=1$ 에서 $(1-x)^{-1/2}$, $p=\frac12<1$ → 수렴 (값 2).<br>(나) 구간 <b>안</b>의 $x=2$ 에서 $(x-2)^{-2}$, $p=2\ge1$ → 발산. <mark>구간 안에 숨은 폭탄</mark> 자주 나온다.<br>(다) $\sim\frac1x$ → 발산. (라) $\sim x^{-3/2}$ → 수렴.</p>`, ans: '② (나), (다)' })}
${h.box('key', '알아 두면 공짜인 이상적분', String.raw`<p>$\displaystyle\int_0^\infty x^ne^{-x}dx=n!\ \ (\Gamma(n+1))$, $\quad\displaystyle\int_0^\infty e^{-x^2}dx=\frac{\sqrt\pi}2$, $\quad\displaystyle\int_0^\infty\frac{dx}{1+x^2}=\frac\pi2$</p>`)}
${h.ex({ src: 'KU 2019-6', q: String.raw`$\displaystyle\int_0^\infty\left(\frac1{\sqrt{x^2+1}}-\frac{2Cx}{x^2+4}\right)dx$ 가 수렴하도록 하는 $C$ 와 그때의 적분값을 구하시오.`,
  sol: String.raw`<p>$x\to\infty$ 에서 $\frac1{\sqrt{x^2+1}}\approx\frac1x$, $\frac{2Cx}{x^2+4}\approx\frac{2C}x$. 차이 $\frac{1-2C}x$ 가 살아 있으면 발산이니 $C=\frac12$.</p><p>$\int_0^R=\Big[\ln\left(x+\sqrt{x^2+1}\right)-\frac12\ln(x^2+4)\Big]_0^R=\ln\frac{R+\sqrt{R^2+1}}{\sqrt{R^2+4}}+\frac12\ln4\to\ln2+\ln2$.</p>`, ans: '$C=\\frac12$, 값 $2\\ln2$' })}

<div class="probs-h"><h3>연습문제 6</h3><span class="cnt">16문항</span></div>
${h.p({ q: String.raw`$y=x^2$ 과 $y=x+2$ 로 둘러싸인 넓이`, ans: '$\\frac92$', sol: String.raw`<p>교점 $-1,2$. $\int_{-1}^2(x+2-x^2)dx=\frac92$. 포물선과 직선 사이는 공식 $\frac{|a|}6(\beta-\alpha)^3=\frac16\cdot27$.</p>` })}
${h.p({ q: String.raw`$y=\sqrt x,\ y=0,\ x=4$ 로 둘러싸인 영역을 $x$축 둘레로 회전한 부피`, ans: '$8\\pi$', sol: String.raw`<p>$\pi\int_0^4x\,dx=8\pi$.</p>` })}
${h.p({ q: String.raw`같은 영역을 $y$축 둘레로 회전한 부피`, ans: '$\\frac{128\\pi}5$', sol: String.raw`<p>껍질: $2\pi\int_0^4x\sqrt x\,dx=2\pi\cdot\frac25\cdot32=\frac{128\pi}5$.</p>` })}
${h.p({ q: String.raw`$y=x^2,\ y=x$ 로 둘러싸인 영역을 $x$축 둘레로 회전한 부피`, ans: '$\\frac{2\\pi}{15}$', sol: String.raw`<p>와셔: $\pi\int_0^1(x^2-x^4)dx=\pi\left(\frac13-\frac15\right)$.</p>` })}
${h.p({ q: String.raw`$y=\frac23x^{3/2}$ 의 $0\le x\le3$ 부분 길이`, ans: '$\\frac{14}3$', sol: String.raw`<p>$1+(y')^2=1+x$. $\int_0^3\sqrt{1+x}\,dx=\frac23(8-1)$.</p>` })}
${h.p({ q: String.raw`반지름 $r$ 인 구의 겉넓이를 회전면 공식으로 유도하시오.`, ans: '$4\\pi r^2$', sol: String.raw`<p>$y=\sqrt{r^2-x^2}$, $y\sqrt{1+y'^2}=r$. $2\pi\int_{-r}^rr\,dx=4\pi r^2$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_1^\infty\frac{dx}{x^2}$ 와 $\displaystyle\int_0^1\frac{dx}{\sqrt x}$`, ans: '$1,\\ 2$', sol: String.raw`<p>둘 다 수렴.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_0^\infty xe^{-x}dx$`, ans: '$1$', sol: String.raw`<p>$\Gamma(2)=1!$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_0^\infty x^3e^{-2x}dx$`, ans: '$\\frac38$', sol: String.raw`<p>$u=2x$: $\frac1{16}\int_0^\infty u^3e^{-u}du=\frac{6}{16}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\int_2^\infty\frac{dx}{x(\ln x)^p}$ 가 수렴하는 $p$`, ans: '$p>1$', sol: String.raw`<p>$u=\ln x$ 로 $\int_{\ln2}^\infty\frac{du}{u^p}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\int_0^1\ln x\,dx$`, ans: '$-1$', sol: String.raw`<p>$[x\ln x-x]_0^1=-1$ ($x\ln x\to0$).</p>` })}
${h.p({ lv: 2, q: String.raw`반지름 1인 원을 중심이 원점에서 3 떨어진 축 둘레로 돌린 도넛의 부피`, ans: '$6\\pi^2$', sol: String.raw`<p>파푸스 $2\pi\cdot3\cdot\pi$.</p>` })}
${h.p({ lv: 2, q: String.raw`극좌표가 아닌 매개곡선 $x=t^2,\ y=t^3-3t$ 의 고리 ($-\sqrt3\le t\le\sqrt3$) 로 둘러싸인 넓이`, ans: '$\\frac{24\\sqrt3}5$', sol: String.raw`<p>$A=\left|\int y\,dx\right|=\left|\int_{-\sqrt3}^{\sqrt3}(t^3-3t)2t\,dt\right|=2\left|\int(2t^4-6t^2)dt\right|$ over $[0,\sqrt3]$: $\int_0^{\sqrt3}(2t^4-6t^2)dt=\frac25\cdot9\sqrt3-2\cdot3\sqrt3=\frac{18\sqrt3}5-6\sqrt3=-\frac{12\sqrt3}5$. 절댓값 두 배 $\frac{24\sqrt3}5$.</p>` })}
${h.p({ lv: 2, q: String.raw`$y=e^x,\ y=0,\ x=0,\ x=1$ 영역을 $y$축 둘레로 회전한 부피`, ans: '$2\\pi$', sol: String.raw`<p>$2\pi\int_0^1xe^xdx=2\pi[(x-1)e^x]_0^1=2\pi$.</p>` })}
${h.p({ lv: 3, q: String.raw`$\displaystyle\int_0^\infty\frac{\sin x}{x}dx$ 가 수렴하는지, $\displaystyle\int_0^\infty\left|\frac{\sin x}{x}\right|dx$ 는?`, ans: '앞은 수렴 ($\\frac\\pi2$), 뒤는 발산', sol: String.raw`<p>앞: 부분적분하면 $\int\frac{\cos x}{x^2}$ 꼴이 되어 절대수렴 → 수렴 (값 $\frac\pi2$ 는 외워 둔다). 뒤: $[k\pi,(k+1)\pi]$ 에서 적분이 $\ge\frac{2}{(k+1)\pi}$, 조화급수라 발산. 중앙대 2026-15 가 이 구조다 (7장).</p>` })}
${h.p({ lv: 2, q: String.raw`$y=\ln x$ 의 $1\le x\le e$ 부분과 $x$ 축, $x=e$ 로 둘러싸인 영역을 $x$ 축 둘레로 돌린 부피`, ans: '$\\pi(e-2)$', sol: String.raw`<p>$\pi\int_1^e(\ln x)^2dx=\pi(e-2)$ (5장 공식).</p>` })}
`
};
