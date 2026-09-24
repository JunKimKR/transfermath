module.exports = {
  id: 'c02', num: '02', part: 'PART A · 미적분의 바닥', title: '극한과 연속', short: '극한 · 로피탈 · 연속',
  schools: { KU: '테일러 극한 매년', HY: '미적 기초', CAU: '1^∞ 꼴 · 불연속 개수' },
  lede: '극한은 "거기 가 보면 뭐가 있냐"가 아니라 "거기로 가까이 가면 뭐에 달라붙냐"다. 이 차이 하나가 미적분 전체를 만든다.',
  body: h => String.raw`
<h3><span class="sn">2.1</span>극한의 뜻</h3>
<p>$\displaystyle\lim_{x\to a}f(x)=L$ 은 "$x$ 를 $a$ 에 한없이 가까이 보내면 $f(x)$ 가 $L$ 에 한없이 가까워진다"는 뜻이다. <mark>$x=a$ 에서의 값은 상관없다.</mark> 거기 구멍이 뚫려 있어도 된다.</p>
${h.plot({ x: [-4.5, 4.5], y: [-0.4, 1.3], w: 560, h: 250, fns: [{ f: x => Math.abs(x) < 1e-9 ? NaN : Math.sin(x) / x, c: 1, label: 'y = sin x / x', lx: 1.6, ly: 0.9 }], pts: [{ x: 0, y: 1, c: 2, open: 1, label: '구멍인데 극한은 1', dx: 10, dy: -10 }], xt: [[-Math.PI, '−π'], [Math.PI, 'π']], yt: [1], cap: '$x=0$ 에서 $\\frac{\\sin x}x$ 는 정의가 안 된다. 그래도 양쪽에서 1에 달라붙으니까 $\\lim_{x\\to0}\\frac{\\sin x}x=1$.' })}
<p><b>좌극한</b> $\lim_{x\to a^-}$ 은 왼쪽에서만, <b>우극한</b> $\lim_{x\to a^+}$ 은 오른쪽에서만 접근. <mark>극한이 존재 ⟺ 좌극한 = 우극한</mark>. 절댓값, 가우스 기호, 구간별 함수가 나오면 무조건 양쪽 따로 계산한다.</p>

<h3><span class="sn">2.2</span>계산 기본기 네 개</h3>
${h.table(['상황', '할 일', '예'], [
  ['그냥 대입해서 숫자 나옴', '끝. 그게 답', '$\\lim_{x\\to2}(x^2+1)=5$'],
  ['$\\frac00$ 이고 다항식', '인수분해해서 약분', '$\\frac{x^2-4}{x-2}=x+2\\to4$'],
  ['$\\frac00$ 이고 루트', '켤레 곱해서 유리화', '$\\frac{\\sqrt{1+x}-1}x=\\frac{1}{\\sqrt{1+x}+1}\\to\\frac12$'],
  ['$\\frac\\infty\\infty$ 이고 다항식', '최고차항끼리 비교', '$\\frac{3x^2+x}{5x^2-2}\\to\\frac35$'],
  ['$\\infty-\\infty$ 루트', '유리화해서 분수로', '$\\sqrt{x^2+x}-x=\\frac{x}{\\sqrt{x^2+x}+x}\\to\\frac12$'],
])}

<h3><span class="sn">2.3</span>외워야 하는 극한 네 개</h3>
${h.box('key', '기본 극한', String.raw`<p>$\displaystyle\lim_{x\to0}\frac{\sin x}x=1,\qquad \lim_{x\to0}\frac{e^x-1}x=1,\qquad \lim_{x\to0}\frac{\ln(1+x)}x=1,\qquad \lim_{x\to0}(1+x)^{1/x}=e$</p>
<p>변형판: $\displaystyle\lim_{x\to0}\frac{\tan x}x=1,\quad \lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12,\quad \lim_{n\to\infty}\left(1+\frac an\right)^n=e^a$</p>`)}
<p>사실 이건 다 "0 근처에서 $\sin x\approx x$, $e^x\approx 1+x$, $\ln(1+x)\approx x$" 라는 한 문장이다. 이 <b>근사</b>를 끝까지 밀어붙인 게 2.7절 테일러고, 그게 편입 극한의 끝판왕이다.</p>

<h3><span class="sn">2.4</span>무한대 서열표</h3>
<p>$\infty$ 끼리 싸우면 누가 더 빨리 커지는지만 보면 된다.</p>
${h.box('key', '느림 → 빠름', String.raw`<p>$$\ln n\ \ll\ n^p\ (p>0)\ \ll\ a^n\ (a>1)\ \ll\ n!\ \ll\ n^n$$</p><p>그래서 $\dfrac{\ln x}{x}\to0,\quad \dfrac{x^{100}}{e^x}\to0,\quad \dfrac{2^n}{n!}\to0,\quad \dfrac{n!}{n^n}\to0$. 7장 급수 판정에서 이 표로 30초 컷 한다.</p>`)}
${h.ex({ src: 'CAU 2025-12', q: String.raw`$0<a<b$ 일 때 $\displaystyle\lim_{n\to\infty}\left(a^n+b^n\right)^{1/n}$ 의 값은?`, choices: h.c`$1$ | $a$ | $b$ | $a+b$`,
  sol: String.raw`<p>큰 놈이 이긴다. $b^n$ 으로 묶으면 $(a^n+b^n)^{1/n}=b\left(1+(a/b)^n\right)^{1/n}$. $(a/b)^n\to0$ 이니까 괄호 안은 $1^{0}$ 꼴 → 1.</p>`, ans: '③ $b$' })}

<h3><span class="sn">2.5</span>로피탈 정리 — 편하지만 맹신 금지</h3>
${h.box('key', '로피탈', String.raw`<p>$\dfrac00$ 또는 $\dfrac\infty\infty$ 꼴이면 $\displaystyle\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}$ (오른쪽 극한이 있을 때).</p><p>분자·분모를 <b>따로</b> 미분한다. 몫의 미분 아니다!</p>`)}
<p>다른 꼴은 이 두 꼴로 바꿔서 쓴다.</p>
<ul>
<li>$0\cdot\infty$: 하나를 분모로 내린다. $x\ln x=\dfrac{\ln x}{1/x}$ → $\frac\infty\infty$ → $\dfrac{1/x}{-1/x^2}=-x\to0$.</li>
<li>$\infty-\infty$: 통분해서 하나의 분수로.</li>
</ul>
${h.box('warn', '로피탈 두 번까지만', '<p>분모가 $x^5,\ x^6$ 처럼 고차면 로피탈을 5~6번 해야 하는데, 분자가 매번 폭발한다. 고려대 2025-1번은 분모가 $x^6\\ln(1+x)$ 였다. <b>로피탈은 두 번까지, 그 이상이면 테일러(2.7절)</b>. 이게 실전 규칙이다.</p>')}

<h3><span class="sn">2.6</span>$1^\infty,\ 0^0,\ \infty^0$ — 지수에 변수가 있는 괴물</h3>
<p>1장에서 말한 무기 $a^b=e^{b\ln a}$ 를 꺼낸다. $\lim f^g=e^{\lim g\ln f}$. 지수만 따로 계산하면 된다.</p>
${h.box('key', '1^∞ 꼴 공식 (진짜 자주 씀)', String.raw`<p>$f\to1,\ g\to\infty$ 이면 $\displaystyle\lim f^{\,g}=e^{\lim g\,(f-1)}$</p><p>이유: $f\to1$ 이면 $\ln f=\ln(1+(f-1))\approx f-1$.</p>`)}
${h.ex({ src: 'CAU 2024-1', q: String.raw`$\displaystyle\lim_{x\to0^+}\left(e^{\sin x}+3x\right)^{\frac1{\tan x}}$ 의 값은?`, choices: h.c`$1$ | $e$ | $e^4$ | $\infty$`,
  sol: String.raw`<p>밑 $\to1$, 지수 $\to\infty$: $1^\infty$ 꼴. 공식대로 지수만:</p>$$\lim_{x\to0^+}\frac{e^{\sin x}+3x-1}{\tan x}=\lim\frac{(e^{\sin x}-1)+3x}{\tan x}.$$<p>0 근처에서 $e^{\sin x}-1\approx\sin x\approx x$, $\tan x\approx x$ 라 $\dfrac{x+3x}{x}=4$. 답은 $e^4$.</p>`, ans: '③ $e^4$' })}
${h.ex({ src: 'CAU 2024-16', q: String.raw`$\displaystyle\lim_{x\to\infty}\left(\frac{x-a}{x+2a}\right)^x=e^4$ 을 만족하는 실수 $a$ 는?`, choices: h.c`$\frac23$ | $-\frac23$ | $\frac43$ | $-\frac43$`,
  sol: String.raw`<p>$1^\infty$. 지수: $\displaystyle\lim x\left(\frac{x-a}{x+2a}-1\right)=\lim\frac{-3ax}{x+2a}=-3a$. $-3a=4$.</p>`, ans: '④ $-\\frac43$' })}
${h.ex({ src: 'KU 2024-1', q: String.raw`$\displaystyle\lim_{x\to0^+}\left(x^{\sin x}+(\sin x)^x\right)$ 의 값을 구하시오.`,
  sol: String.raw`<p>$x^{\sin x}=e^{\sin x\ln x}$ 인데 $\sin x\ln x\approx x\ln x\to0$ 이라 $\to e^0=1$. $(\sin x)^x=e^{x\ln\sin x}$ 도 $x\ln\sin x\approx x\ln x\to0$ 이라 1.</p>`, ans: '$2$' })}

<h3><span class="sn">2.7</span>테일러로 극한 부수기 (예고편)</h3>
<p>7장에서 제대로 배우지만, 극한 문제에 필요한 다섯 개는 지금 외운다. 0 근처에서 함수를 다항식으로 바꿔 쓰는 거다.</p>
${h.box('key', '0 근처 전개 (x가 작을 때)', String.raw`<p>$e^x=1+x+\dfrac{x^2}{2}+\dfrac{x^3}{6}+\cdots$</p>
<p>$\sin x=x-\dfrac{x^3}{6}+\dfrac{x^5}{120}-\cdots,\qquad \cos x=1-\dfrac{x^2}{2}+\dfrac{x^4}{24}-\cdots$</p>
<p>$\ln(1+x)=x-\dfrac{x^2}{2}+\dfrac{x^3}{3}-\cdots,\qquad \arctan x=x-\dfrac{x^3}{3}+\dfrac{x^5}{5}-\cdots$</p>
<p>$\tan x=x+\dfrac{x^3}{3}+\cdots,\qquad (1+x)^a=1+ax+\dfrac{a(a-1)}{2}x^2+\cdots$</p>`)}
<div class="wg" data-w="taylor"><div class="wg-h">직접 돌려 보기 · 테일러 다항식</div><canvas data-ratio="0.55" aria-label="테일러 다항식 그래프"></canvas>
<div class="ctl"><label>함수 <select><option value="sin">sin x</option><option value="cos">cos x</option><option value="exp">eˣ</option><option value="ln">ln(1+x)</option><option value="atan">arctan x</option><option value="geo">1/(1−x)</option></select></label><label>차수 <input type="range" min="0" max="15" value="3"></label></div><div class="out"></div></div>
<p>차수를 올릴수록 빨간 근사가 회색 진짜에 더 넓게 달라붙는 게 보인다. 극한은 $x\to0$ 근처만 보니까 <b>앞의 몇 항이면 충분하다.</b></p>
${h.box('pat', '분모가 $x^n$', '<p>분자를 $x^n$ 항까지만 전개해서 <b>$x^n$ 의 계수</b>를 읽는다. 그게 답이다. 그보다 낮은 차수가 살아남으면 극한은 발산 or 문제에서 그걸 0으로 만드는 조건을 준다.</p>')}
${h.ex({ src: 'CAU 2023-15', q: String.raw`$\displaystyle\lim_{x\to0}\frac{\sinh x-x}{x^3}$ 의 값은?`, choices: h.c`$\frac1{12}$ | $\frac16$ | $\frac14$ | $\frac13$`,
  sol: String.raw`<p>$\sinh x=\frac{e^x-e^{-x}}2=x+\frac{x^3}6+\cdots$ ($e^x$ 전개의 홀수 차만 남는다). 분자 $=\frac{x^3}6+\cdots$, $x^3$ 계수 $\frac16$.</p>`, ans: '② $\\frac16$' })}
${h.ex({ src: 'KU 2024-5', q: String.raw`$\displaystyle\lim_{x\to\infty}\left(ax+bx^2\ln\frac{1+x}{x}\right)=1$ 일 때 $a-b$ 를 구하시오.`,
  sol: String.raw`<p>$t=\frac1x\to0$ 으로 바꾸면 $\ln\frac{1+x}x=\ln(1+t)=t-\frac{t^2}2+\frac{t^3}3-\cdots$.</p>$$bx^2\ln(1+t)=\frac{b}{t^2}\left(t-\frac{t^2}2+\cdots\right)=\frac bt-\frac b2+\frac{b}{3}t-\cdots$$<p>그러면 식 전체는 $\dfrac{a+b}{t}-\dfrac b2+(\text{0으로 가는 것})$. 수렴하려면 $a+b=0$, 극한값 $-\frac b2=1$ → $b=-2,\ a=2$.</p>`, ans: '$a-b=4$' })}
${h.ex({ src: 'KU 2023-1', q: String.raw`$\displaystyle\lim_{x\to0^+}\frac{(e^x-1)^{7/6}}{x^{2/3}\sin(3\sqrt x)}$ 의 값을 구하시오.`,
  sol: String.raw`<p>각 조각을 최저차로 바꾼다. $e^x-1\approx x$ 라서 분자 $\approx x^{7/6}$. $\sin(3\sqrt x)\approx 3\sqrt x=3x^{1/2}$ 라서 분모 $\approx 3x^{2/3+1/2}=3x^{7/6}$. 차수가 같으니 계수 비 $\frac13$.</p>`, ans: '$\\frac13$' })}

<h3><span class="sn">2.8</span>연속 — 펜을 떼지 않고 그리기</h3>
${h.box('key', 'x = a 에서 연속의 세 조건', '<ol class="steps"><li>$f(a)$ 가 정의돼 있다.</li><li>$\\lim_{x\\to a}f(x)$ 가 존재한다 (좌극한 = 우극한).</li><li>둘이 같다: $\\lim_{x\\to a}f(x)=f(a)$.</li></ol>')}
<p>다항식, 지수, 로그, 삼각함수는 정의된 곳에서 전부 연속이다. 문제가 되는 건 <b>분모가 0 되는 곳, 구간별로 정의된 함수의 이음매, 가우스 기호 $[\ ]$</b> 셋뿐이다.</p>
<p><b>가우스 기호</b> $[x]$ 는 $x$ 이하의 최대 정수. $[2.7]=2,\ [-0.3]=-1$. $[g(x)]$ 는 $g(x)$ 가 <b>정수를 뚫고 지나가는 순간</b> 값이 점프해서 불연속이다.</p>
${h.ex({ src: 'CAU 2024-8', q: String.raw`함수 $f(x)=[2\cos x-\cos2x]$ 에 대하여 구간 $0<x<3\pi$ 에서 불연속인 점의 개수는? (단, $[x]$ 는 $x$ 보다 크지 않은 최대의 정수)`, choices: h.c`$10$ | $11$ | $12$ | $13$`,
  sol: String.raw`<p>$g(x)=2\cos x-\cos2x$ 에 $\cos2x=2\cos^2x-1$ 을 넣고 $c=\cos x$ 로 두면 $g=-2c^2+2c+1$. $c\in[-1,1]$ 에서 이 포물선은 $c=\frac12$ 일 때 최대 $\frac32$, $c=-1$ 일 때 최소 $-3$, $c=1$ 일 때 $1$.</p>
${h.plot({ x: [0, 3 * Math.PI], y: [-3.4, 2], w: 600, h: 260, fns: [{ f: x => 2 * Math.cos(x) - Math.cos(2 * x), c: 1 }, ...[1, 0, -1, -2, -3].map(k => ({ f: () => k, c: 'm', dash: 1, thin: 1 }))], xt: [[Math.PI, 'π'], [2 * Math.PI, '2π'], [3 * Math.PI, '3π']], yt: [1, -1, -2, -3], cap: '$g(x)=2\\cos x-\\cos 2x$. 점선(정수)을 <b>뚫고 지나가는</b> 곳만 불연속. $x=\\pi$ 에서 $-3$ 은 바닥을 찍고 튕기기만 해서 뚫지 않는다.' })}
<p>$x$ 가 $0\to\pi$ 로 가면 $c$ 는 $1\to-1$ 로 줄어들고, $g$ 는 $1\to\frac32\to-3$. 이때 정수 $1,0,-1,-2$ 를 한 번씩 <b>뚫고</b> 내려간다 (4개). $-3$ 은 $x=\pi$ 에서 딱 찍고 올라가니 뚫는 게 아니다. $\pi\to2\pi$ 에서 올라오면서 다시 4개. $x=2\pi$ 에서는 $g=1$ 인데 그 근처에서 $g\ge1$ 이라 $[g]=1$ 로 연속. $2\pi\to3\pi$ 에서 또 4개.</p><p>$4+4+4=12$.</p>`, ans: '③ $12$' })}
${h.box('key', '중간값 정리', '<p>$f$ 가 $[a,b]$ 에서 연속이고 $f(a)$ 와 $f(b)$ 의 부호가 다르면, $f(c)=0$ 인 $c$ 가 $(a,b)$ 에 적어도 하나 있다. "방정식 근이 있냐"는 질문의 기본 도구.</p>')}

<div class="probs-h"><h3>연습문제 2</h3><span class="cnt">20문항</span></div>
${h.p({ q: String.raw`$\displaystyle\lim_{x\to0}\frac{\sin5x}{\sin2x}$`, ans: '$\\frac52$', sol: String.raw`<p>$\sin5x\approx5x,\ \sin2x\approx2x$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+x}-x\right)$`, ans: '$\\frac12$', sol: String.raw`<p>유리화: $\dfrac{x}{\sqrt{x^2+x}+x}=\dfrac{1}{\sqrt{1+1/x}+1}\to\frac12$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{x\to0}(1+2x)^{1/x}$`, ans: '$e^2$', sol: String.raw`<p>$1^\infty$: $e^{\lim\frac1x\cdot2x}=e^2$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{n\to\infty}\left(1+\frac3n\right)^{2n}$`, ans: '$e^6$', sol: String.raw`<p>$e^{\lim 2n\cdot\frac3n}=e^6$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{x\to0^+}x\ln x$`, ans: '$0$', sol: String.raw`<p>$\dfrac{\ln x}{1/x}$ 로 바꿔 로피탈: $\dfrac{1/x}{-1/x^2}=-x\to0$. 서열표로 봐도 $x$ 가 $\ln$ 을 이긴다.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{x\to\infty}x^{1/x}$`, ans: '$1$', sol: String.raw`<p>$e^{\ln x/x}$, $\frac{\ln x}x\to0$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{x\to0}\frac{e^x-1-x}{x^2}$`, ans: '$\\frac12$', sol: String.raw`<p>$e^x-1-x=\frac{x^2}2+\cdots$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$`, ans: '$\\frac16$', sol: String.raw`<p>$x-\left(x-\frac{x^3}6\right)=\frac{x^3}6$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{x\to0}\frac{\tan x-x}{x^3}$`, ans: '$\\frac13$', sol: String.raw`<p>$\tan x=x+\frac{x^3}3+\cdots$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}$`, ans: '$-\\frac12$', sol: String.raw`<p>$\ln(1+x)-x=-\frac{x^2}2+\cdots$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\lim_{x\to0}\left(\frac1{\sin^2x}-\frac1{x^2}\right)$`, ans: '$\\frac13$', sol: String.raw`<p>통분: $\dfrac{x^2-\sin^2x}{x^2\sin^2x}$. 분모 $\approx x^4$. 분자: $\sin^2x=\left(x-\frac{x^3}6\right)^2=x^2-\frac{x^4}3+\cdots$ 라서 분자 $=\frac{x^4}3$. 답 $\frac13$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\lim_{x\to0}\frac{\cos x-e^{-x^2/2}}{x^4}$`, ans: '$-\\frac1{12}$', sol: String.raw`<p>$\cos x=1-\frac{x^2}2+\frac{x^4}{24}$, $e^{-x^2/2}=1-\frac{x^2}2+\frac{x^4}{8}$. 차이 $\frac{x^4}{24}-\frac{x^4}8=-\frac{x^4}{12}$.</p>` })}
${h.p({ q: String.raw`$f(x)=\begin{cases}\dfrac{x^2-a}{x-2}&(x\ne2)\\ b&(x=2)\end{cases}$ 가 $x=2$ 에서 연속이 되도록 하는 $a,b$ 는?`, ans: '$a=4,\\ b=4$', sol: String.raw`<p>분모 $\to0$ 인데 극한이 있으려면 분자도 $\to0$: $4-a=0$. 그러면 $\frac{x^2-4}{x-2}=x+2\to4=b$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\lim_{x\to0}\frac{\sqrt{1+\sin x}-\sqrt{1-\sin x}}{x}$`, ans: '$1$', sol: String.raw`<p>유리화하면 $\dfrac{2\sin x}{x(\sqrt{1+\sin x}+\sqrt{1-\sin x})}\to\dfrac{2}{2}=1$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\lim_{x\to\infty}\left(\frac{x+1}{x-1}\right)^x$`, ans: '$e^2$', sol: String.raw`<p>지수: $x\left(\frac{x+1}{x-1}-1\right)=\frac{2x}{x-1}\to2$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{x\to0}\frac{\arctan x-\sin x}{x^3}$`, ans: '$-\\frac16$', sol: String.raw`<p>$\left(x-\frac{x^3}3\right)-\left(x-\frac{x^3}6\right)=-\frac{x^3}6$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\lim_{x\to0}\frac{(1+x)^{1/x}-e}{x}$`, ans: '$-\\frac e2$', sol: String.raw`<p>$(1+x)^{1/x}=e^{\ln(1+x)/x}=e^{1-\frac x2+\cdots}=e\cdot e^{-\frac x2+\cdots}\approx e\left(1-\frac x2\right)$. 그래서 분자 $\approx-\frac{e}2x$. 유명한 문제.</p>` })}
${h.p({ lv: 3, src: 'KU 2022-2', q: String.raw`$\displaystyle\lim_{x\to1}\left(\frac{x}{x-1}-\frac1{\ln x}+(2-x)^{\tan\frac{\pi x}2}\right)$ 의 값을 구하시오.`, ans: '$\\frac12+e^{2/\\pi}$', sol: String.raw`<p>$t=x-1\to0$ 으로 평행이동. 앞 두 항: $\dfrac{1+t}{t}-\dfrac1{\ln(1+t)}$, $\dfrac1{\ln(1+t)}=\dfrac1{t(1-\frac t2+\cdots)}=\dfrac1t\left(1+\frac t2+\cdots\right)$ 라서 $\left(\frac1t+1\right)-\left(\frac1t+\frac12\right)\to\frac12$.</p><p>뒤 항: $(1-t)^{\tan(\frac\pi2+\frac{\pi t}2)}$, $\tan(\frac\pi2+\theta)=-\cot\theta\approx-\frac{2}{\pi t}$. $1^\infty$ 공식: 지수 $\to(-t)\cdot\left(-\frac2{\pi t}\right)=\frac2\pi$. 그래서 $e^{2/\pi}$.</p>` })}
${h.p({ lv: 2, q: String.raw`방정식 $x^3+x-1=0$ 이 구간 $(0,1)$ 에 실근을 가짐을 보이시오.`, ans: '중간값 정리', sol: String.raw`<p>$f(x)=x^3+x-1$ 은 연속, $f(0)=-1<0$, $f(1)=1>0$. 중간값 정리로 근 존재. (게다가 $f'=3x^2+1>0$ 이라 딱 하나.)</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\lim_{x\to0}\frac{e^{x}-e^{\sin x}}{x^3}$`, ans: '$\\frac16$', sol: String.raw`<p>$e^{x}-e^{\sin x}=e^{\sin x}\left(e^{x-\sin x}-1\right)\approx1\cdot(x-\sin x)\approx\frac{x^3}6$.</p>` })}
`
};
