module.exports = {
  id: 'c04', num: '04', part: 'PART A · 미적분의 바닥', title: '미분의 활용', short: '극값 · 최적화 · 평균값정리',
  schools: { KU: 'MVT 증명 · 거리', HY: '기본기', CAU: '최댓값·거리 매년 3문항' },
  lede: '미분을 왜 배우냐고 물으면 답은 하나다. 최대·최소를 찾으려고. 중앙대는 이걸로만 매년 3문제를 낸다.',
  body: h => String.raw`
<h3><span class="sn">4.1</span>$f'$ 의 부호가 모양을 정한다</h3>
${h.plot({ x: [-2.3, 3.3], y: [-3, 3.5], w: 560, h: 300, fns: [{ f: x => x ** 3 - 1.5 * x * x - 1.5 * x + 1, c: 1, label: 'y = f(x)', lx: 2.55, ly: 3.1 }], pts: [{ x: 1 - Math.sqrt(2), y: (1 - Math.sqrt(2)) ** 3 - 1.5 * (1 - Math.sqrt(2)) ** 2 - 1.5 * (1 - Math.sqrt(2)) + 1, c: 2, label: "극대 (f′: + → −)", dy: -10, dx: -40 }, { x: 1 + Math.sqrt(2), y: (1 + Math.sqrt(2)) ** 3 - 1.5 * (1 + Math.sqrt(2)) ** 2 - 1.5 * (1 + Math.sqrt(2)) + 1, c: 3, label: "극소 (f′: − → +)", dy: 22, dx: -60 }, { x: 0.5, y: 0.125 - 0.375 - 0.75 + 1, c: 4, label: '변곡점 (f″ 부호 바뀜)', dx: 10, dy: -4 }], cap: '$f\'>0$ 이면 올라가고 $f\'<0$ 이면 내려간다. 부호가 바뀌는 곳이 극값, $f\'\'$ 부호가 바뀌는 곳이 변곡점.' })}
${h.box('key', '극값 · 볼록 판정', String.raw`<p><b>1계 판정</b>: $f'(c)=0$ (또는 미분 불가)이고 $f'$ 부호가 $+\to-$ 면 극대, $-\to+$ 면 극소. 부호가 안 바뀌면 극값 아님 ($x^3$ 의 원점).</p>
<p><b>2계 판정</b>: $f'(c)=0$ 이고 $f''(c)<0$ 이면 극대, $f''(c)>0$ 이면 극소, $f''(c)=0$ 이면 모름.</p>
<p><b>볼록</b>: $f''>0$ 이면 아래로 볼록(∪, 웃는 입), $f''<0$ 이면 위로 볼록(∩). 부호가 바뀌는 점이 <b>변곡점</b>.</p>`)}
${h.ex({ src: 'CAU 2024-23', q: String.raw`함수 $f(x)=\dfrac{x^2-4x+4}{x-5}$ 가 $x=a$ 에서 극댓값, $x=b$ 에서 극솟값을 가질 때 $2a^2+b^2$ 의 값은?`, choices: h.c`$72$ | $114$ | $132$ | $153$`,
  sol: String.raw`<p>$f'=\dfrac{(2x-4)(x-5)-(x-2)^2}{(x-5)^2}=\dfrac{x^2-10x+16}{(x-5)^2}=\dfrac{(x-2)(x-8)}{(x-5)^2}$.</p><p>분모는 항상 양수라 분자 부호만 본다. $x<2$: $+$, $2<x<8$: $-$, $x>8$: $+$. 그러니 $x=2$ 극대, $x=8$ 극소 ($x=5$ 는 정의역 밖). $2\cdot4+64=72$.</p>`, ans: '① $72$' })}

<h3><span class="sn">4.2</span>최대 · 최소 찾는 절차</h3>
${h.box('key', '닫힌 구간 [a,b] 에서 최대·최소', '<ol class="steps"><li>$f\'(x)=0$ 인 점, 미분 안 되는 점 (임계점)을 전부 찾는다.</li><li>양 끝점 $a,b$ 를 추가한다.</li><li>후보들에서 $f$ 값을 다 계산해서 제일 큰 게 최대, 작은 게 최소.</li></ol><p>열린 구간·무한 구간이면 끝에서의 극한도 비교해야 한다.</p>')}
${h.ex({ src: 'CAU 2025-9', q: String.raw`폐구간 $\left[-\frac\pi2,\frac\pi2\right]$ 에서 $S(x)=\dfrac{\sin x}{x}\ (x\ne0),\ S(0)=1$ 의 최솟값은?`, choices: h.c`$\frac{3\sqrt3}{2\pi}$ | $\frac{2\sqrt2}\pi$ | $\frac2\pi$ | $1$`,
  sol: String.raw`<p>$S$ 는 우함수고 $0<x\le\frac\pi2$ 에서 $S'=\dfrac{x\cos x-\sin x}{x^2}<0$ (분자 $g=x\cos x-\sin x$ 는 $g(0)=0,\ g'=-x\sin x<0$ 이라 음수). 감소하니까 최솟값은 끝점 $S\!\left(\frac\pi2\right)=\dfrac{1}{\pi/2}$.</p>`, ans: '③ $\\frac2\\pi$' })}
${h.box('pat', '치환해서 최댓값', '<p>$e^x+e^{-x}$, $\\sin x+\\cos x$, $x+\\frac1x$ 같은 덩어리가 반복되면 그걸 $u$ 로 두고 <b>$u$ 의 범위</b>부터 구한다. $e^x+e^{-x}\\ge2$, $\\sin x+\\cos x\\in[-\\sqrt2,\\sqrt2]$, $x+\\frac1x\\ge2\\ (x>0)$.</p>')}
${h.ex({ src: 'CAU 2024-2', q: String.raw`$f(x)=-(e^x+e^{-x})^3+6(e^x+e^{-x})^2+15(e^x+e^{-x})$ 가 최댓값을 갖는 $x$ 를 $\alpha,\beta\ (\alpha>\beta)$ 라 할 때 $e^{2\alpha}+e^{2\beta}$ 는?`, choices: h.c`$2$ | $14$ | $23$ | $34$`,
  sol: String.raw`<p>$u=e^x+e^{-x}\ge2$. $g(u)=-u^3+6u^2+15u$, $g'=-3(u^2-4u-5)=-3(u-5)(u+1)$. $u\ge2$ 에서 $u=5$ 가 최대.</p><p>$e^x+e^{-x}=5$ → $(e^x)^2-5e^x+1=0$ 의 두 근이 $e^\alpha,e^\beta$. 근과 계수: 합 5, 곱 1. $e^{2\alpha}+e^{2\beta}=5^2-2\cdot1=23$.</p>`, ans: '③ $23$' })}

<h3><span class="sn">4.3</span>거리 최소 — 법선이 점을 지난다</h3>
<p>점 $P$ 에서 곡선까지 가장 가까운 점 $Q$ 에서는 <b>$PQ$ 가 곡선의 접선과 수직</b>이다. 풀이는 두 가지:</p>
<ol class="steps"><li>곡선 위 점을 한 변수로 쓰고 <b>거리의 제곱</b> $D$ 를 미분해서 0. (루트는 버린다. 제곱이 최소면 거리도 최소.)</li><li>법선 조건: $\overrightarrow{PQ}\perp$ 접선.</li></ol>
${h.plot({ x: [-0.5, 4.5], y: [-3, 5], equal: true, w: 400, h: 400, curves: [{ fx: t => t * t / 2, fy: t => t, t: [-2.8, 3], c: 1, label: 'y² = 2x', lx: 3.3, ly: 3 }], lines: [{ p: [1, 4], q: [2, 2], c: 2, dash: 1 }, { p: [1, 1.5], q: [3, 2.5], c: 'm' }], pts: [{ x: 1, y: 4, c: 2, label: 'P(1,4)', dx: 8 }, { x: 2, y: 2, c: 1, label: 'Q(2,2)', dx: 8, dy: 14 }], cap: '중앙대 2023-16. 최단 거리 선분(빨강)은 접선(회색)과 수직이다.' })}
${h.ex({ src: 'CAU 2023-16', q: String.raw`점 $(1,4)$ 와 곡선 $y^2=2x$ 위의 점 사이 거리의 최솟값은?`, choices: h.c`$\frac{3\sqrt5}5$ | $\frac{4\sqrt5}5$ | $\sqrt5$ | $\frac{6\sqrt5}5$`,
  sol: String.raw`<p>곡선 위 점을 $\left(\frac{y^2}2,y\right)$ 로 쓴다 ($x$ 로 쓰면 루트가 생겨서 귀찮다). $D=\left(\frac{y^2}2-1\right)^2+(y-4)^2$.</p><p>$D'=2\left(\frac{y^2}2-1\right)y+2(y-4)=y^3-8=0$ → $y=2$, 점 $(2,2)$. $D=1+4=5$.</p>`, ans: '③ $\\sqrt5$' })}
${h.ex({ src: 'CAU 2025-29', q: String.raw`좌표평면에서 점 $(-1,1)$ 과 곡선 $xy=1$ 사이의 거리는?`, choices: h.c`$\sqrt3$ | $\sqrt5$ | $\sqrt3+1$ | $\sqrt5+1$`,
  sol: String.raw`<p>곡선 위 점 $\left(t,\frac1t\right)$. $D=(t+1)^2+\left(\frac1t-1\right)^2=\left(t^2+\frac1{t^2}\right)+2\left(t-\frac1t\right)+2$.</p><p>$u=t-\frac1t$ 로 두면 $t^2+\frac1{t^2}=u^2+2$ 라서 $D=u^2+2u+4=(u+1)^2+3$. $u$ 는 모든 실수를 가질 수 있으니 최소 3.</p>`, ans: '① $\\sqrt3$' })}

<h3><span class="sn">4.4</span>기하 최적화 몇 개</h3>
${h.ex({ src: 'CAU 2023-18', q: String.raw`타원 $x^2+\dfrac{y^2}4=1$ 에 내접하는 직사각형 넓이의 최댓값은?`, choices: h.c`$\frac{15}4$ | $4$ | $\frac{17}4$ | $\frac92$`,
  sol: String.raw`<p>꼭짓점 $(\cos t,\ 2\sin t)$ 로 두면 넓이 $=2\cos t\cdot4\sin t=4\sin2t\le4$. 일반적으로 타원 $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ 에 내접하는 직사각형 최대 넓이는 $2ab$.</p>`, ans: '② $4$' })}
${h.ex({ src: 'CAU 2023-8', q: String.raw`$x$ 축 위의 점 $P(t,0)$ 과 $A(0,2),\ B(5,7)$ 로 만든 삼각형에서 $\angle APB$ 가 최대가 되는 $t$ 는? $(0\le t\le5)$`, choices: h.c`$5\sqrt2-7$ | $7\sqrt2-5$ | $2\sqrt5-2$ | $2\sqrt7-2$`,
  sol: String.raw`<p>미분으로 밀면 지옥이다. 기하 한 줄: <b>$A,B$ 를 지나고 $x$ 축에 접하는 원의 접점</b>에서 각이 최대다 (원 밖의 점에서 보면 각이 작아진다: 원주각 성질).</p>
${h.plot({ x: [-1.5, 7], y: [-1, 8.5], equal: true, w: 380, h: 420, curves: [{ fx: s => (-2 + 2 * Math.sqrt(7)) + ((-2 + 2 * Math.sqrt(7)) ** 2 + 4) / 4 * Math.cos(s), fy: s => ((-2 + 2 * Math.sqrt(7)) ** 2 + 4) / 4 * (1 + Math.sin(s)), t: [0, 2 * Math.PI], c: 'm', thin: 1 }], lines: [{ p: [0, 2], q: [-2 + 2 * Math.sqrt(7), 0], c: 1 }, { p: [5, 7], q: [-2 + 2 * Math.sqrt(7), 0], c: 1 }], pts: [{ x: 0, y: 2, c: 1, label: 'A', dx: -16 }, { x: 5, y: 7, c: 1, label: 'B' }, { x: -2 + 2 * Math.sqrt(7), y: 0, c: 2, label: 'P', dy: 18 }], cap: '$A,B$ 를 지나고 $x$축에 접하는 원. 접점이 답.' })}
<p>원의 중심 $(t,r)$ (접하니까 반지름 = $y$좌표). $A$: $t^2+(r-2)^2=r^2$ → $r=\frac{t^2+4}4$. $B$: $(5-t)^2+(7-r)^2=r^2$ → $(5-t)^2+49=14r=\frac72(t^2+4)$.</p><p>정리하면 $t^2+4t-24=0$, $t=-2+2\sqrt7$.</p>`, ans: '④ $2\\sqrt7-2$' })}

<h3><span class="sn">4.5</span>평균값 정리 · 롤의 정리</h3>
${h.plot({ x: [-0.3, 4.3], y: [-0.5, 4], w: 500, h: 280, fns: [{ f: x => 0.25 * x * x * x - 1.3 * x * x + 2 * x + 1.2, c: 1, dom: [0.3, 3.9] }, { f: x => (0.25 * 0.027 - 1.3 * 0.09 + 0.6 + 1.2) + (x - 0.3) * ((0.25 * 59.319 - 1.3 * 15.21 + 7.8 + 1.2) - (0.25 * 0.027 - 1.3 * 0.09 + 0.6 + 1.2)) / 3.6, c: 'm', dash: 1, thin: 1 }], pts: [{ x: 0.3, y: 0.25 * 0.027 - 1.3 * 0.09 + 0.6 + 1.2, c: 'm', label: 'a' }, { x: 3.9, y: 0.25 * 59.319 - 1.3 * 15.21 + 7.8 + 1.2, c: 'm', label: 'b' }], cap: '양 끝을 이은 선(점선)과 평행한 접선이 사이 어딘가에 반드시 있다. 그 점이 $c$.' })}
${h.box('key', '평균값 정리 (MVT)', String.raw`<p>$f$ 가 $[a,b]$ 에서 연속, $(a,b)$ 에서 미분가능하면 $\ \dfrac{f(b)-f(a)}{b-a}=f'(c)$ 인 $c\in(a,b)$ 가 있다.</p><p><b>롤의 정리</b>는 특수형: $f(a)=f(b)$ 면 $f'(c)=0$ 인 $c$ 가 있다.</p>`)}
<p>고려대 서술형에서 "$\ldots$ 인 $c$ 가 존재함을 보여라"가 나오면 90% 롤이다. 요령: 증명하려는 식을 $g'(c)=0$ 꼴로 만드는 <b>보조함수 $g$</b> 를 역으로 짓는다.</p>
${h.ex({ q: String.raw`$f$ 가 $[0,1]$ 에서 미분가능하고 $f(0)=0,\ f(1)=1$ 일 때, $f'(c)=2c$ 인 $c\in(0,1)$ 이 존재함을 보이시오.`,
  sol: String.raw`<p>$f'(c)-2c=0$ 은 $\big(f(x)-x^2\big)'=0$ 이다. $g(x)=f(x)-x^2$ 로 두면 $g(0)=0,\ g(1)=1-1=0$. 롤의 정리로 $g'(c)=0$ 인 $c$ 존재.</p>`, ans: '보조함수 $g=f-x^2$' })}
${h.box('tip', '부등식 증명에도 MVT', '<p>$|\\sin a-\\sin b|\\le|a-b|$ 같은 건 MVT 한 줄: $\\sin a-\\sin b=\\cos c\\,(a-b)$ 이고 $|\\cos c|\\le1$.</p>')}

<h3><span class="sn">4.6</span>방정식의 실근 개수</h3>
<p>$f(x)=k$ 의 근 개수 = $y=f(x)$ 와 $y=k$ 의 교점 수. <b>증감표 + 끝에서의 극한</b>만 보면 된다. 구간마다 단조(계속 증가 or 계속 감소)면 그 구간에서 근은 최대 1개.</p>
${h.ex({ src: 'CAU 2026-18', q: String.raw`$x>0$ 에서 $\dfrac1x+\dfrac1{x-1}+\cdots+\dfrac1{x-N}=x$ 를 만족하는 실근의 개수는? $(N\ge2)$`, choices: h.c`$0$ | $N-1$ | $N$ | $N+1$`,
  sol: String.raw`<p>$g(x)=\sum_{k=0}^N\frac1{x-k}-x$. $g'(x)=-\sum\frac1{(x-k)^2}-1<0$: 정의된 모든 구간에서 <b>감소</b>.</p>
${h.plot({ x: [0, 4.6], y: [-6, 6], w: 540, h: 260, fns: [0, 1, 2, 3].map(k => ({ f: x => [0, 1, 2, 3].reduce((s, j) => s + 1 / (x - j), 0) - x, dom: [k + 0.02, k + 0.98], c: 1, n: 200 })).concat([{ f: x => [0, 1, 2, 3].reduce((s, j) => s + 1 / (x - j), 0) - x, dom: [3.02, 4.6], c: 1, n: 200 }]), xt: [1, 2, 3], cap: '$N=3$ 일 때 $g(x)$. 구간 $(0,1),(1,2),(2,3),(3,\\infty)$ 에서 각각 $+\\infty\\to-\\infty$ 로 떨어지니 근이 하나씩.' })}
<p>구간 $(k,k+1)$ ($k=0,\ldots,N-1$): 왼쪽 끝에서 $+\infty$, 오른쪽 끝에서 $-\infty$, 감소 → 근 1개씩, 합 $N$개. $(N,\infty)$: $+\infty$ 에서 시작해 $x\to\infty$ 에서 $-\infty$ → 1개. 총 $N+1$.</p>`, ans: '④ $N+1$' })}

<h3><span class="sn">4.7</span>점근선 · 선형근사</h3>
${h.table(['종류', '찾는 법'], [
  ['수직 $x=a$', '분모 $=0$ 이고 $\\lim_{x\\to a}f=\\pm\\infty$'],
  ['수평 $y=b$', '$\\lim_{x\\to\\pm\\infty}f=b$'],
  ['사선 $y=mx+n$', '$m=\\lim\\frac{f(x)}x,\\ n=\\lim(f(x)-mx)$. 유리함수면 나눗셈의 몫'],
])}
${h.box('key', '선형근사', String.raw`<p>$f(a+\Delta x)\approx f(a)+f'(a)\Delta x$. 접선으로 근처 값을 추정한다. 예: $\sqrt{4.1}\approx2+\frac1{4}(0.1)=2.025$.</p>`)}

<div class="probs-h"><h3>연습문제 4</h3><span class="cnt">16문항</span></div>
${h.p({ src: 'CAU 2023-4', lv: 2, q: String.raw`곡선 $3y^2=x^3$ 위의 점과 점 $(0,\sqrt3)$ 사이의 최소 거리는?`, choices: h.c`$\sqrt{\frac73}$ | $\sqrt{\frac53}$ | $\sqrt{\frac43}$ | $\sqrt{\frac23}$`, ans: '① $\\sqrt{\\frac73}$', sol: String.raw`<p>$y=\frac{x^{3/2}}{\sqrt3}$ ($y\ge0$ 쪽이 점에 가깝다). $D=x^2+\left(\frac{x^{3/2}}{\sqrt3}-\sqrt3\right)^2=x^2+\frac{x^3}3-2x^{3/2}+3$.</p><p>$D'=2x+x^2-3x^{1/2}=0$ → $x=1$ 이 근 ($2+1-3=0$). $D(1)=1+\frac13-2+3=\frac73$.</p>` })}
${h.p({ q: String.raw`$f(x)=x^3-3x^2-9x+5$ 의 극댓값과 극솟값`, ans: '극대 $10$ ($x=-1$), 극소 $-22$ ($x=3$)', sol: String.raw`<p>$f'=3(x-3)(x+1)$. $f(-1)=-1-3+9+5=10$, $f(3)=27-27-27+5=-22$.</p>` })}
${h.p({ q: String.raw`$[0,3]$ 에서 $f(x)=x^3-6x^2+9x+1$ 의 최댓값과 최솟값`, ans: '최대 $5$, 최소 $1$', sol: String.raw`<p>$f'=3(x-1)(x-3)$. 후보 $f(0)=1,\ f(1)=5,\ f(3)=1$.</p>` })}
${h.p({ q: String.raw`$f(x)=xe^{-x}$ 의 변곡점`, ans: '$(2,\\ 2e^{-2})$', sol: String.raw`<p>$f'=(1-x)e^{-x}$, $f''=(x-2)e^{-x}$. $x=2$ 에서 부호 바뀜.</p>` })}
${h.p({ q: String.raw`$x>0$ 에서 $f(x)=x^x$ 의 최솟값`, ans: '$e^{-1/e}$', sol: String.raw`<p>$f'=x^x(\ln x+1)=0$ → $x=\frac1e$. 값 $\left(\frac1e\right)^{1/e}$.</p>` })}
${h.p({ lv: 2, q: String.raw`넓이가 $100$ 인 직사각형 중 둘레가 최소인 것의 둘레`, ans: '$40$', sol: String.raw`<p>$2\left(x+\frac{100}x\right)$, $x=10$. 산술기하로도 $x+\frac{100}x\ge20$.</p>` })}
${h.p({ lv: 2, q: String.raw`반지름 $R$ 인 구에 내접하는 원기둥의 부피 최댓값`, ans: '$\\dfrac{4\\pi R^3}{3\\sqrt3}$', sol: String.raw`<p>높이 $2h$, 반지름 $\sqrt{R^2-h^2}$ → $V=2\pi h(R^2-h^2)$, $V'=0$ → $h=\frac R{\sqrt3}$. $V=2\pi\frac R{\sqrt3}\cdot\frac{2R^2}3$.</p>` })}
${h.p({ q: String.raw`$y=\dfrac{x^2+1}{x-1}$ 의 점근선을 모두 구하시오.`, ans: '$x=1,\\ y=x+1$', sol: String.raw`<p>나눗셈: $\frac{x^2+1}{x-1}=x+1+\frac2{x-1}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$f(x)=x+2\cos x$ 의 $[0,\pi]$ 에서 최댓값`, ans: '$\\dfrac\\pi6+\\sqrt3$', sol: String.raw`<p>$f'=1-2\sin x=0$ → $x=\frac\pi6,\frac{5\pi}6$. $f(\frac\pi6)=\frac\pi6+\sqrt3\approx2.26$, $f(\frac{5\pi}6)=\frac{5\pi}6-\sqrt3\approx0.89$, $f(0)=2$, $f(\pi)=\pi-2\approx1.14$.</p>` })}
${h.p({ lv: 2, q: String.raw`방정식 $e^x=kx$ 가 서로 다른 두 실근을 가질 $k$ 의 범위`, ans: '$k>e$', sol: String.raw`<p>$k=\frac{e^x}x$ 의 그래프와 수평선 교점. $x>0$ 에서 $\frac{e^x}x$ 는 $x=1$ 에서 최소 $e$, 양 끝에서 $\infty$. $x<0$ 에서는 음수라 $k>0$ 과 안 만남. 두 근이면 $k>e$.</p>` })}
${h.p({ q: String.raw`$\sqrt[3]{8.06}$ 을 선형근사로 추정하시오.`, ans: '$2.005$', sol: String.raw`<p>$f(x)=x^{1/3}$, $f'(8)=\frac13\cdot8^{-2/3}=\frac1{12}$. $2+\frac{0.06}{12}=2.005$.</p>` })}
${h.p({ lv: 2, q: String.raw`$f(x)=\ln x$ 에 대해 $[1,e]$ 에서 평균값 정리를 만족하는 $c$`, ans: '$e-1$', sol: String.raw`<p>$\frac{1-0}{e-1}=\frac1c$.</p>` })}
${h.p({ lv: 3, q: String.raw`$x>0$ 에서 부등식 $\ln x\le\dfrac xe$ 를 보이고 등호 조건을 쓰시오.`, ans: '$x=e$ 에서 등호', sol: String.raw`<p>$g(x)=\frac xe-\ln x$, $g'=\frac1e-\frac1x$, $x=e$ 에서 최소 $g(e)=0$. 그래서 $g\ge0$. (덤: 이걸로 $e^\pi>\pi^e$ 가 나온다.)</p>` })}
${h.p({ lv: 2, q: String.raw`곡선 $y=x^2$ 과 $y=-(x-6)^2$ 사이의 최단 거리`, ans: '$2\\sqrt5$', src: 'KU 2024-7', sol: String.raw`<p>두 포물선은 점 $(3,0)$ 에 대해 점대칭. 그래서 최단 선분도 $(3,0)$ 을 지나고, 답은 $(3,0)$ 에서 $y=x^2$ 까지 거리의 2배.</p><p>$D=(x-3)^2+x^4$, $D'=2(x-3)+4x^3=0$ → $2x^3+x-3=0$ → $x=1$. $D=4+1=5$. 거리 $\sqrt5$, 두 배 $2\sqrt5$.</p>` })}
${h.p({ lv: 2, q: String.raw`$y=\dfrac{\ln x}{x}$ 의 최댓값과 그때의 $x$`, ans: '$x=e$ 에서 $\\frac1e$', sol: String.raw`<p>$y'=\frac{1-\ln x}{x^2}$.</p>` })}
${h.p({ lv: 3, q: String.raw`$f(x)=x^4-4x^3+ax^2$ 가 극댓값을 갖지 않을 $a$ 의 범위`, ans: '$a\\ge\\frac92$ 또는 $a=0$', sol: String.raw`<p>$f'=2x(2x^2-6x+a)$. 극대가 생기려면 $f'$ 의 부호가 $+\to-$ 로 바뀌는 곳이 있어야 한다. $f'$ 이 세 개의 서로 다른 실근을 가지면 부호가 $-,+,-,+$ 라 극대 존재. 그러니 $2x^2-6x+a=0$ 이 (i) 중근이거나 허근: $36-8a\le0$ → $a\ge\frac92$, 또는 (ii) $x=0$ 을 근으로 가짐: $a=0$ (이때 $f'=4x^2(x-3)$, 부호 $-,-,+$ 로 극대 없음).</p>` })}
`
};
