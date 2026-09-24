module.exports = {
  id: 'c05', num: '05', part: 'PART A · 미적분의 바닥', title: '적분 기술', short: '치환 · 부분 · 삼각 · 부분분수',
  schools: { KU: '모든 계산의 바닥', HY: '미방 = 적분', CAU: '매년 4–5문항 직접 출제' },
  lede: '적분은 미분을 거꾸로 돌리는 일이다. 미분은 기계적이지만 적분은 "어떤 도구를 꺼낼지" 알아보는 게임이다. 도구는 다섯 개뿐이다.',
  body: h => String.raw`
<h3><span class="sn">5.1</span>적분 = 넓이 = 반미분</h3>
<p>구간 $[a,b]$ 를 잘게 쪼개서 직사각형 넓이를 다 더한 뒤 폭을 0으로 보낸 극한이 정적분 $\int_a^bf(x)\,dx$ 다. 아래를 움직여 보면 직사각형이 많아질수록 진짜 넓이에 달라붙는 게 보인다.</p>
<div class="wg" data-w="riemann"><div class="wg-h">직접 돌려 보기 · 리만 합</div><canvas data-ratio="0.55" aria-label="리만 합"></canvas><div class="ctl"><label>직사각형 개수 <input type="range" min="1" max="60" value="6"></label></div><div class="out"></div></div>
${h.box('key', '미적분의 기본정리', String.raw`<p>$F'=f$ 이면 $\ \displaystyle\int_a^bf(x)\,dx=F(b)-F(a)$</p><p>$\displaystyle\frac{d}{dx}\int_a^xf(t)\,dt=f(x)$, 일반형 $\displaystyle\frac{d}{dx}\int_{a(x)}^{b(x)}f(t)\,dt=f(b(x))\,b'(x)-f(a(x))\,a'(x)$</p>`)}
<p>즉 넓이를 구하려면 <b>미분해서 $f$ 가 나오는 함수 $F$</b> (역도함수, 부정적분)를 찾으면 된다. 부정적분에는 $+C$ 를 붙인다.</p>
${h.table(['$f(x)$', '$\\int f\\,dx$', '$f(x)$', '$\\int f\\,dx$'], [
  ['$x^n\\ (n\\ne-1)$', '$\\dfrac{x^{n+1}}{n+1}$', '$\\sec^2x$', '$\\tan x$'],
  ['$\\dfrac1x$', '$\\ln|x|$', '$\\sec x\\tan x$', '$\\sec x$'],
  ['$e^{ax}$', '$\\dfrac{e^{ax}}a$', '$\\tan x$', '$-\\ln|\\cos x|$'],
  ['$\\sin ax$', '$-\\dfrac{\\cos ax}a$', '$\\sec x$', '$\\ln|\\sec x+\\tan x|$'],
  ['$\\cos ax$', '$\\dfrac{\\sin ax}a$', '$\\dfrac1{\\sqrt{a^2-x^2}}$', '$\\sin^{-1}\\dfrac xa$'],
  ['$\\dfrac1{x^2+a^2}$', '$\\dfrac1a\\tan^{-1}\\dfrac xa$', '$\\dfrac1{\\sqrt{x^2\\pm a^2}}$', '$\\ln\\left|x+\\sqrt{x^2\\pm a^2}\\right|$'],
  ['$\\dfrac1{x^2-a^2}$', '$\\dfrac1{2a}\\ln\\left|\\dfrac{x-a}{x+a}\\right|$', '$\\dfrac{f\'(x)}{f(x)}$', '$\\ln|f(x)|$'],
], 'c')}
${h.box('pat', '분자가 분모의 미분', '<p>$\\displaystyle\\int\\frac{f\'}{f}dx=\\ln|f|$. 분자에 분모의 미분이 (상수배로라도) 보이면 바로 로그. $\\int\\frac{2x}{x^2+1}dx=\\ln(x^2+1)$. 이걸 못 보면 시간 다 버린다.</p>')}

<h3><span class="sn">5.2</span>도구 ① 치환적분 — 연쇄법칙 거꾸로</h3>
${h.box('key', '치환', String.raw`<p>$\displaystyle\int f(g(x))\,g'(x)\,dx=\int f(u)\,du\quad(u=g(x))$</p><p>정적분이면 <b>구간도 $u$ 값으로 바꾼다</b>. 그러면 다시 $x$ 로 돌아올 필요가 없다.</p>`)}
<p>알아보는 법: <b>어떤 덩어리와 그 덩어리의 미분이 같이 곱해져 있다.</b> $xe^{x^2}$ 에서 $x^2$ 와 $2x$, $\frac{\ln x}{x}$ 에서 $\ln x$ 와 $\frac1x$.</p>
${h.ex({ src: 'CAU 2025-13', q: String.raw`$g'$ 이 연속이고 $g(1)=\sqrt3,\ g(0)=1$ 일 때 $\displaystyle\int_0^1\frac{g(x)g'(x)}{\sqrt{1+\{g(x)\}^2}}dx$ 의 값은?`, choices: h.c`$\frac{2-\sqrt2}2$ | $2-\sqrt2$ | $\frac{2+\sqrt2}2$ | $2+\sqrt2$`,
  sol: String.raw`<p>$u=1+g^2$, $du=2gg'dx$. 구간: $x=0\to u=2$, $x=1\to u=4$.</p>$$\int_2^4\frac{du}{2\sqrt u}=\Big[\sqrt u\Big]_2^4=2-\sqrt2$$`, ans: '② $2-\\sqrt2$' })}

<h3><span class="sn">5.3</span>도구 ② 부분적분 — 곱의 미분 거꾸로</h3>
${h.box('key', '부분적분', String.raw`<p>$\displaystyle\int u\,dv=uv-\int v\,du$</p><p><b>$u$ 고르는 순서</b> (먼저 나오는 걸 $u$ 로, 미분할 쪽): <mark>로그 → 역삼각 → 다항 → 삼각 → 지수</mark> ("로·다·삼·지", 역삼각은 로그 옆)</p>`)}
<p>다항식 × (삼각 or 지수)는 <b>표 적분법</b>이 빠르다. 왼쪽 열은 다항식을 0 될 때까지 미분, 오른쪽 열은 계속 적분, 대각선으로 곱하고 부호는 $+,-,+,\ldots$</p>
${h.table(['부호', '미분 ($u$)', '적분 ($dv$)'], [['$+$', '$t^2$', '$\\sin2t$'], ['$-$', '$2t$', '$-\\frac12\\cos2t$'], ['$+$', '$2$', '$-\\frac14\\sin2t$'], ['', '$0$', '$\\frac18\\cos2t$']], 'c')}
${h.ex({ src: 'CAU 2025-14', q: String.raw`$\displaystyle\int_0^{\pi/2}t^2\sin(2t)\,dt$ 의 값은?`, choices: h.c`$\frac{\pi^2-4}8$ | $\frac{\pi^2-2}8$ | $\frac{\pi^2+2}8$ | $\frac{\pi^2+4}8$`,
  sol: String.raw`<p>위 표에서 대각선 곱: $-\frac12t^2\cos2t+\frac12t\sin2t+\frac14\cos2t$.</p><p>$t=\frac\pi2$: $-\frac12\cdot\frac{\pi^2}4\cdot(-1)+0+\frac14(-1)=\frac{\pi^2}8-\frac14$. $t=0$: $\frac14$. 차: $\frac{\pi^2}8-\frac12=\frac{\pi^2-4}8$.</p>`, ans: '①' })}
<h4>돌고 도는 부분적분</h4>
<p>$e^{ax}\sin bx$ 류는 부분적분을 두 번 하면 원래 적분이 다시 나온다. 그걸 $I$ 로 두고 방정식처럼 푼다.</p>
${h.box('key', '외워 두면 편한 결과', String.raw`<p>$\displaystyle\int e^{ax}\sin bx\,dx=\frac{e^{ax}(a\sin bx-b\cos bx)}{a^2+b^2},\qquad \int e^{ax}\cos bx\,dx=\frac{e^{ax}(a\cos bx+b\sin bx)}{a^2+b^2}$</p><p>$\displaystyle\int_0^\infty e^{-st}\sin t\,dt=\frac1{s^2+1},\quad \int_0^\infty e^{-st}\cos t\,dt=\frac{s}{s^2+1}$ ← 19장 라플라스 변환 그 자체</p>`)}
${h.ex({ src: 'CAU 2026-12', q: String.raw`$x>0$ 일 때 $\displaystyle\int_0^\infty e^{-xt}\sin t\,dt$ 는?`, choices: h.c`$\frac{x}{x^2+1}$ | $\frac1{x^2+1}$ | $\frac{x+1}{x^2+1}$ | $\frac{x-1}{x^2+1}$`,
  sol: String.raw`<p>위 공식에서 $a=-x,\ b=1$: $\left[\dfrac{e^{-xt}(-x\sin t-\cos t)}{x^2+1}\right]_0^\infty=0-\dfrac{-1}{x^2+1}$.</p><p>이 결과는 19장에서 "$\sin t$ 의 라플라스 변환"이라는 이름으로 다시 만난다. 지금 외워 두면 두 번 번다.</p>`, ans: '② $\\frac1{x^2+1}$' })}
${h.box('tip', '로그 한 방', String.raw`<p>$\int\ln x\,dx=x\ln x-x$, $\int(\ln x)^2dx=x(\ln x)^2-2x\ln x+2x$. 일반형 $\displaystyle\int_0^1x^m(\ln x)^n\,dx=\frac{(-1)^n\,n!}{(m+1)^{n+1}}$ (고려대 2019-1).</p>`)}

<h3><span class="sn">5.4</span>도구 ③ 삼각함수 적분</h3>
${h.box('key', '∫ sin^m x cos^n x dx', String.raw`<p><b>홀수 차수가 하나라도 있으면</b>: 홀수 쪽에서 하나 떼어 $dx$ 옆에 붙이고, 나머지는 $\sin^2+\cos^2=1$ 로 반대편 함수로 바꾼 뒤 치환.</p><p><b>둘 다 짝수</b>: 반각공식 $\sin^2=\frac{1-\cos2x}2,\ \cos^2=\frac{1+\cos2x}2$ 로 차수를 낮춘다.</p><p><b>곱 $\sin ax\cos bx$</b>: 곱→합 공식.</p>`)}
${h.ex({ src: 'CAU 2024-14', q: String.raw`부정적분 $\displaystyle\int\frac{\sin^7x}{\cos^4x}dx$ 는?`, choices: h.c`$\frac1{3\cos^3x}-\frac3{\cos x}-3\cos x+\frac{\cos^3x}3+C$ | $\frac1{3\sin^3x}-\frac3{\sin x}-3\sin x+\frac{\sin^3x}3+C$ | $\frac3{\cos^3x}-\frac1{3\cos x}-\frac{\cos x}3+3\cos^3x+C$ | $\frac3{\sin^3x}-\frac1{3\sin x}-\frac{\sin x}3+3\sin^3x+C$`,
  sol: String.raw`<p>$\sin$ 이 홀수(7). 하나 떼서 $\sin x\,dx=-du$ ($u=\cos x$), 나머지 $\sin^6=(1-u^2)^3$.</p>$$-\int\frac{(1-u^2)^3}{u^4}du=-\int\left(u^{-4}-3u^{-2}+3-u^2\right)du=\frac1{3u^3}-\frac3u-3u+\frac{u^3}3+C$$<p>$\cos$ 로 된 보기 중 부호 맞는 건 ①. (②④는 $\sin$ 이라 보자마자 탈락.)</p>`, ans: '①' })}
${h.box('key', '왈리스 공식', String.raw`<p>$$\int_0^{\pi/2}\sin^nx\,dx=\int_0^{\pi/2}\cos^nx\,dx=\frac{n-1}n\cdot\frac{n-3}{n-2}\cdots\times\begin{cases}\frac\pi2 & n\text{ 짝수}\\ 1 & n\text{ 홀수}\end{cases}$$</p><p>예: $\int_0^{\pi/2}\sin^5=\frac45\cdot\frac23=\frac8{15}$, $\int_0^{\pi/2}\sin^6=\frac56\cdot\frac34\cdot\frac12\cdot\frac\pi2=\frac{5\pi}{32}$.</p>`)}

<h3><span class="sn">5.5</span>도구 ④ 삼각치환 — 루트 안의 제곱을 없앤다</h3>
<div class="fig-row">
${h.plot({ x: [-0.3, 3.4], y: [-0.4, 2.6], equal: true, grid: false, axes: false, w: 260, h: 220, lines: [{ p: [0, 0], q: [2.6, 0], c: 1 }, { p: [2.6, 0], q: [2.6, 2], c: 1 }, { p: [0, 0], q: [2.6, 2], c: 1 }], texts: [{ x: 1.05, y: 1.3, t: 'a', c: 1 }, { x: 2.75, y: 0.9, t: 'x' }, { x: 1.3, y: -0.3, t: '√(a²−x²)', anchor: 'middle' }, { x: 0.45, y: 0.1, t: 'θ', c: 2 }], cap: '$\\sqrt{a^2-x^2}$ → $x=a\\sin\\theta$' })}
${h.plot({ x: [-0.3, 3.4], y: [-0.4, 2.6], equal: true, grid: false, axes: false, w: 260, h: 220, lines: [{ p: [0, 0], q: [2.6, 0], c: 3 }, { p: [2.6, 0], q: [2.6, 2], c: 3 }, { p: [0, 0], q: [2.6, 2], c: 3 }], texts: [{ x: 0.7, y: 1.35, t: '√(a²+x²)', c: 3 }, { x: 2.75, y: 0.9, t: 'x' }, { x: 1.3, y: -0.3, t: 'a', anchor: 'middle' }, { x: 0.45, y: 0.1, t: 'θ', c: 2 }], cap: '$\\sqrt{a^2+x^2}$ → $x=a\\tan\\theta$' })}
${h.plot({ x: [-0.3, 3.4], y: [-0.4, 2.6], equal: true, grid: false, axes: false, w: 260, h: 220, lines: [{ p: [0, 0], q: [2.6, 0], c: 4 }, { p: [2.6, 0], q: [2.6, 2], c: 4 }, { p: [0, 0], q: [2.6, 2], c: 4 }], texts: [{ x: 1.05, y: 1.3, t: 'x', c: 4 }, { x: 2.75, y: 0.9, t: '√(x²−a²)' }, { x: 1.3, y: -0.3, t: 'a', anchor: 'middle' }, { x: 0.45, y: 0.1, t: 'θ', c: 2 }], cap: '$\\sqrt{x^2-a^2}$ → $x=a\\sec\\theta$' })}
</div>
<p>치환하고 나면 루트가 $a\cos\theta,\ a\sec\theta,\ a\tan\theta$ 로 깔끔히 벗겨진다. 끝나고 $x$ 로 돌아올 때는 <b>위 삼각형을 보고</b> 읽는다.</p>
${h.ex({ src: 'CAU 2025-17', q: String.raw`$\displaystyle\frac1\pi\int_0^{3/4}\frac{dx}{\sqrt{x(1-x)}}$ 의 값은?`, choices: h.c`$\frac16$ | $\frac13$ | $\frac12$ | $\frac23$`,
  sol: String.raw`<p>$x=\sin^2\theta$ 로 치환 (변형 삼각치환). $dx=2\sin\theta\cos\theta\,d\theta$, $\sqrt{x(1-x)}=\sin\theta\cos\theta$. 적분 $=\int2\,d\theta=2\theta$.</p><p>구간: $x=0\to\theta=0$, $x=\frac34\to\sin\theta=\frac{\sqrt3}2\to\theta=\frac\pi3$. 값 $\frac{2\pi}3$, $\pi$ 로 나누면 $\frac23$.</p>`, ans: '④ $\\frac23$' })}

<h3><span class="sn">5.6</span>도구 ⑤ 부분분수 — 유리함수는 무조건 이걸로 끝난다</h3>
${h.box('key', '분모 모양별 분해', String.raw`<p>(분자 차수 ≥ 분모 차수면 먼저 나눗셈!)</p>
<p>① 서로 다른 일차: $\dfrac{1}{(x-a)(x-b)}=\dfrac{A}{x-a}+\dfrac{B}{x-b}$</p>
<p>② 반복 일차: $\dfrac{\cdots}{(x-a)^2}=\dfrac{A}{x-a}+\dfrac{B}{(x-a)^2}$</p>
<p>③ 이차 기약: $\dfrac{\cdots}{x^2+1}\ni\dfrac{Ax+B}{x^2+1}$ → $\ln$ 과 $\tan^{-1}$ 로 쪼개짐</p>
<p><b>계수 빨리 구하기 (가림법)</b>: $A$ 를 구할 땐 $(x-a)$ 를 손으로 가리고 나머지에 $x=a$ 대입.</p>`)}
${h.ex({ src: 'CAU 2025-15', q: String.raw`$\displaystyle\int_{-1}^1\frac{6x+7}{(x+2)^2}dx$ 의 값은?`, choices: h.c`$6\ln3-\frac{10}3$ | $6\ln3-\frac53$ | $6\ln3+\frac53$ | $6\ln3+\frac{10}3$`,
  sol: String.raw`<p>분자를 $(x+2)$ 로 맞춘다: $6x+7=6(x+2)-5$. 그래서 $\dfrac6{x+2}-\dfrac5{(x+2)^2}$.</p><p>$\Big[6\ln|x+2|+\dfrac5{x+2}\Big]_{-1}^1=6\ln3+\left(\frac53-5\right)=6\ln3-\frac{10}3$.</p>`, ans: '①' })}
${h.ex({ src: 'CAU 2024-15', q: String.raw`다음 중 두 개를 더했을 때 유리함수로 표현할 수 있는 것은?<br>(가) $\int\frac{2x}{x^2-1}dx$ &nbsp; (나) $\int\frac{2}{x(x+1)}dx$ &nbsp; (다) $\int\frac{x^2+1}{x^2(x+1)^2}dx$ &nbsp; (라) $\int\frac{x^2+1}{x^2(x+1)}dx$`, choices: h.c`(가)+(나) | (나)+(다) | (가)+(다) | (나)+(라)`,
  sol: String.raw`<p>로그 부분이 서로 지워져야 유리함수가 남는다. 각각의 로그 부분만 뽑자.</p><p>(가) $\ln|x^2-1|=\ln|x-1|+\ln|x+1|$. (나) $2\ln|x|-2\ln|x+1|$.</p><p>(다) $\frac{x^2+1}{x^2(x+1)^2}=\frac Ax+\frac1{x^2}+\frac C{x+1}+\frac2{(x+1)^2}$, 가림법으로 $B=1,\ D=2$. $x^3$ 계수 $A+C=0$, $x^2$ 계수 $2A+B+C+D=1$ → $A=-2,\ C=2$. 로그 부분 $-2\ln|x|+2\ln|x+1|$.</p><p>(나)+(다)의 로그가 정확히 상쇄.</p>`, ans: '② (나)+(다)' })}

<h3><span class="sn">5.7</span>비장의 무기 $t=\tan\frac x2$</h3>
<p>$\sin x,\cos x$ 의 유리식인데 위 방법이 안 먹히면 무조건 통하는 치환. 대신 계산이 길어서 마지막 수단이다.</p>
${h.box('key', '반각 치환', String.raw`<p>$t=\tan\frac x2$ → $\sin x=\dfrac{2t}{1+t^2},\quad\cos x=\dfrac{1-t^2}{1+t^2},\quad dx=\dfrac{2\,dt}{1+t^2}$</p>`)}
${h.ex({ src: 'CAU 2023-19', q: String.raw`$\displaystyle\int_{\pi/3}^{\pi/2}\frac{1}{1+\sin x-\cos x}dx$ 의 값은?`, choices: h.c`$\ln\frac{1+\sqrt2}2$ | $\ln\frac{1+\sqrt3}2$ | $\ln\frac{2+\sqrt2}2$ | $\ln\frac{2+\sqrt3}2$`,
  sol: String.raw`<p>분모: $1+\frac{2t}{1+t^2}-\frac{1-t^2}{1+t^2}=\frac{2t^2+2t}{1+t^2}$. 곱하기 $dx$: $\dfrac{1+t^2}{2t(t+1)}\cdot\dfrac{2}{1+t^2}dt=\dfrac{dt}{t(t+1)}=\left(\frac1t-\frac1{t+1}\right)dt$.</p><p>구간 $t=\tan\frac\pi6=\frac1{\sqrt3}$ 부터 $t=\tan\frac\pi4=1$. $\Big[\ln\frac t{t+1}\Big]=\ln\frac12-\ln\frac{1}{1+\sqrt3}=\ln\frac{1+\sqrt3}2$.</p>`, ans: '②' })}

<h3><span class="sn">5.8</span>정적분 꼼수 — 계산 안 하고 답 내기</h3>
${h.box('key', '대칭 · 킹스룰', String.raw`<p><b>대칭</b>: $f$ 가 기함수면 $\int_{-a}^af=0$, 우함수면 $\int_{-a}^af=2\int_0^af$.</p><p><b>King's rule</b>: $\displaystyle\int_a^bf(x)\,dx=\int_a^bf(a+b-x)\,dx$. 구간을 뒤집어도 적분값은 같다. 원래 식과 뒤집은 식을 <b>더하면</b> 깔끔해지는 문제가 단골.</p>`)}
${h.ex({ q: String.raw`$\displaystyle\int_0^{\pi/2}\frac{\sin x}{\sin x+\cos x}dx$`,
  sol: String.raw`<p>$I$ 에 King's rule ($x\to\frac\pi2-x$): $I=\int_0^{\pi/2}\frac{\cos x}{\cos x+\sin x}dx$. 원래 것과 더하면 $2I=\int_0^{\pi/2}1\,dx=\frac\pi2$.</p>`, ans: '$\\frac\\pi4$' })}
${h.ex({ src: 'CAU 2026-9', q: String.raw`$\displaystyle\int_0^\pi\ln\sin x\,dx$ 의 값은?`, choices: h.c`$-2\pi\ln2$ | $-\pi\ln2$ | $-\frac\pi2\ln2$ | $-\frac\pi4\ln2$`,
  sol: String.raw`<p>$J=\int_0^{\pi/2}\ln\sin x\,dx$ 로 두면 대칭으로 구하는 값은 $2J$. King's rule로 $J=\int_0^{\pi/2}\ln\cos x\,dx$ 도 된다.</p><p>더하면 $2J=\int_0^{\pi/2}\ln(\sin x\cos x)dx=\int_0^{\pi/2}\ln\frac{\sin2x}2dx=\int_0^{\pi/2}\ln\sin2x\,dx-\frac\pi2\ln2$.</p><p>$u=2x$: $\int_0^{\pi/2}\ln\sin2x\,dx=\frac12\int_0^\pi\ln\sin u\,du=\frac12\cdot2J=J$. 그래서 $2J=J-\frac\pi2\ln2$, $J=-\frac\pi2\ln2$. 답 $2J=-\pi\ln2$.</p>`, ans: '② $-\\pi\\ln2$' })}

${h.flow([
  { q: '분자가 분모의 미분 꼴인가? 덩어리와 그 미분이 곱해져 있나?', a: '치환 (5.2) / ln|f|' },
  { q: '다항·로그·역삼각 × 다른 함수의 곱인가?', a: '부분적분 (5.3) · 표 적분' },
  { q: 'sin, cos 의 거듭제곱 곱인가?', a: '홀수 떼기 / 반각 (5.4)' },
  { q: '√(a²±x²), √(x²−a²) 이 있나?', a: '삼각치환 (5.5)' },
  { q: '다항식 ÷ 다항식인가?', a: '나눗셈 → 부분분수 (5.6)' },
  { q: 'sin, cos 유리식인데 위가 다 안 되나?', a: 't = tan(x/2) (5.7)' },
  { q: '구간이 대칭이거나 0~π/2 인가?', a: '기우성 · King\'s rule (5.8) 먼저!' },
], '적분 도구 고르는 순서. 시험장에선 <b>7번을 제일 먼저</b> 확인한다.')}

<div class="probs-h"><h3>연습문제 5</h3><span class="cnt">24문항</span></div>
${h.p({ q: String.raw`$\displaystyle\int xe^{x^2}dx$`, ans: '$\\frac12e^{x^2}+C$', sol: String.raw`<p>$u=x^2$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_0^1\frac{x}{1+x^2}dx$`, ans: '$\\frac12\\ln2$', sol: String.raw`<p>분자가 분모 미분의 절반.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int\frac{\ln x}{x}dx$`, ans: '$\\frac12(\\ln x)^2+C$', sol: String.raw`<p>$u=\ln x$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int x\cos x\,dx$`, ans: '$x\\sin x+\\cos x+C$', sol: String.raw`<p>$u=x,\ dv=\cos x\,dx$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_0^\pi x\sin x\,dx$`, ans: '$\\pi$', sol: String.raw`<p>$[-x\cos x+\sin x]_0^\pi=\pi$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int e^x\sin x\,dx$`, ans: '$\\frac12e^x(\\sin x-\\cos x)+C$', sol: String.raw`<p>공식 $a=b=1$.</p>` })}
${h.p({ src: 'CAU 2025-20', q: String.raw`$\displaystyle\int_1^e(\ln x)^2dx$`, choices: h.c`$e-2$ | $e$ | $e+2$ | $2e$`, ans: '① $e-2$', sol: String.raw`<p>$[x(\ln x)^2-2x\ln x+2x]_1^e=(e-2e+2e)-2$.</p>` })}
${h.p({ src: 'CAU 2026-2', q: String.raw`$\displaystyle\int_0^1x\ln\sqrt{x^2+1}\,dx$`, choices: h.c`$\frac12\ln2-\frac14$ | $\frac12\ln2+\frac14$ | $\ln2-\frac12$ | $\ln2+\frac12$`, ans: '①', sol: String.raw`<p>$\ln\sqrt{\ }=\frac12\ln$. $u=x^2+1$: $\frac14\int_1^2\ln u\,du=\frac14[u\ln u-u]_1^2=\frac14(2\ln2-1)$.</p>` })}
${h.p({ src: 'CAU 2026-5', q: String.raw`$\displaystyle\int_0^\pi\sin2x\cos3x\,dx$`, choices: h.c`$-\frac45$ | $-\frac25$ | $\frac25$ | $\frac45$`, ans: '① $-\\frac45$', sol: String.raw`<p>곱→합: $\frac12(\sin5x-\sin x)$. $\int_0^\pi\sin5x=\frac25$, $\int_0^\pi\sin x=2$. $\frac12\left(\frac25-2\right)=-\frac45$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_0^{\pi/2}\sin^6x\,dx$`, ans: '$\\frac{5\\pi}{32}$', sol: String.raw`<p>왈리스.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int\sin^2x\,dx$`, ans: '$\\frac x2-\\frac{\\sin2x}4+C$', sol: String.raw`<p>반각.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int\frac{dx}{x^2-1}$`, ans: '$\\frac12\\ln\\left|\\frac{x-1}{x+1}\\right|+C$', sol: String.raw`<p>$\frac12\left(\frac1{x-1}-\frac1{x+1}\right)$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_0^1\sqrt{1-x^2}\,dx$`, ans: '$\\frac\\pi4$', sol: String.raw`<p>반지름 1인 원의 $\frac14$. 계산 안 한다.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_0^2\frac{dx}{x^2+4}$`, ans: '$\\frac\\pi8$', sol: String.raw`<p>$\frac12\tan^{-1}\frac x2\Big|_0^2=\frac12\cdot\frac\pi4$.</p>` })}
${h.p({ q: String.raw`$\dfrac{d}{dx}\displaystyle\int_x^{x^2}e^{t^2}dt$`, ans: '$2xe^{x^4}-e^{x^2}$', sol: String.raw`<p>위끝 대입×위끝 미분 − 아래끝 대입×아래끝 미분.</p>` })}
${h.p({ q: String.raw`$\displaystyle\int_{-1}^1\left(x^3\cos x+x^2\right)dx$`, ans: '$\\frac23$', sol: String.raw`<p>$x^3\cos x$ 는 기함수라 0.</p>` })}
${h.p({ src: 'KU 2019-1', lv: 2, q: String.raw`$\displaystyle\int_0^1x^2(\ln x)^3dx$`, ans: '$-\\frac2{27}$', sol: String.raw`<p>공식 $\frac{(-1)^3\,3!}{3^4}=-\frac6{81}$.</p>` })}
${h.p({ src: 'CAU 2026-14', q: String.raw`$I=\displaystyle\int_0^{\pi/2}\frac{d\theta}{3+2\cos\theta}$ 를 $x=\tan\frac\theta2$ 로 바꾸면?`, choices: h.c`$2\int_0^1\frac{dx}{5+x^2}$ | $2\int_0^1\frac{(1+x^2)^2}{5+x^2}dx$ | $2\int_0^1\frac{dx}{1+5x^2}$ | $2\int_0^1\frac{(1+x^2)^2}{1+5x^2}dx$`, ans: '①', sol: String.raw`<p>$3+2\frac{1-x^2}{1+x^2}=\frac{5+x^2}{1+x^2}$, $d\theta=\frac{2dx}{1+x^2}$. 곱하면 $\frac{2dx}{5+x^2}$.</p>` })}
${h.p({ src: 'KU 2025-5', lv: 2, q: String.raw`$\displaystyle\int\frac{dx}{\sqrt x-\sqrt[3]x}$`, ans: '$2\\sqrt x+3\\sqrt[3]x+6\\sqrt[6]x+6\\ln|\\sqrt[6]x-1|+C$', sol: String.raw`<p>루트 차수 2, 3의 최소공배수 6: $x=t^6$. $dx=6t^5dt$, 분모 $t^3-t^2$. $\int\frac{6t^3}{t-1}dt=6\int\left(t^2+t+1+\frac1{t-1}\right)dt$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\int\frac{dx}{\sqrt{x^2+4}}$`, ans: '$\\ln\\left(x+\\sqrt{x^2+4}\\right)+C$', sol: String.raw`<p>$x=2\tan\theta$ → $\int\sec\theta\,d\theta=\ln|\sec\theta+\tan\theta|$, 삼각형으로 되돌리면 $\ln\frac{x+\sqrt{x^2+4}}2$, 상수 $-\ln2$ 는 $C$ 에 흡수.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\int\frac{x^3}{x^2+1}dx$`, ans: '$\\frac{x^2}2-\\frac12\\ln(x^2+1)+C$', sol: String.raw`<p>나눗셈: $x-\frac{x}{x^2+1}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\int\frac{2x+3}{x^2+2x+5}dx$`, ans: '$\\ln(x^2+2x+5)+\\frac12\\tan^{-1}\\frac{x+1}2+C$', sol: String.raw`<p>분자를 분모 미분 $2x+2$ 에 맞춰 $(2x+2)+1$. 앞부분 $\ln$, 뒷부분 $\int\frac{dx}{(x+1)^2+4}=\frac12\tan^{-1}\frac{x+1}2$.</p>` })}
${h.p({ lv: 3, q: String.raw`$\displaystyle\int_0^{\pi}\frac{x\sin x}{1+\cos^2x}dx$`, ans: '$\\frac{\\pi^2}4$', sol: String.raw`<p>King's rule: $x\to\pi-x$ 하면 $\int\frac{(\pi-x)\sin x}{1+\cos^2x}$. 더하면 $2I=\pi\int_0^\pi\frac{\sin x}{1+\cos^2x}dx=\pi\big[-\tan^{-1}\cos x\big]_0^\pi=\pi\cdot\frac\pi2$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\int_0^{\pi/4}\tan^3x\sec^2x\,dx$`, ans: '$\\frac14$', sol: String.raw`<p>$u=\tan x$, $\int_0^1u^3du$.</p>` })}
`
};
