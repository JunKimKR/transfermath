module.exports = {
  id: 'c03', num: '03', part: 'PART A · 미적분의 바닥', title: '미분법', short: '공식 · 연쇄 · 음함수 · 역함수',
  schools: { KU: '음함수 2계 · 역함수', HY: '미방 풀 때 전부 씀', CAU: '매년 3–4문항' },
  lede: '미분은 "순간 기울기"다. 개념은 한 줄이고 나머지는 계산 기계를 손에 익히는 일이다. 이 장의 목표는 딱 하나, 어떤 함수든 30초 안에 미분하는 손.',
  body: h => String.raw`
<h3><span class="sn">3.1</span>미분계수 — 할선이 접선이 되는 순간</h3>
<p>두 점 $(a,f(a))$, $(a+h,f(a+h))$ 를 이은 직선(할선)의 기울기는 $\dfrac{f(a+h)-f(a)}{h}$. 여기서 $h\to0$ 하면 두 점이 붙어서 접선이 된다. 그 기울기가 <b>미분계수</b>다.</p>
$$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$$
${h.plot({ x: [-0.3, 3.3], y: [-0.5, 5], w: 520, h: 320, fns: [{ f: x => 0.5 * x * x + 0.3, c: 'm', label: 'y = f(x)', lx: 2.75, ly: 4.6 }, { f: x => 0.5 + (x - 1) * (0.5 * 9 + 0.3 - 0.8) / 2, c: 2, dash: 1, thin: 1, label: '할선 (h 큼)', lx: 2.5, ly: 2.2 }, { f: x => 0.8 + (x - 1) * (0.5 * 4 + 0.3 - 0.8) / 1, c: 4, dash: 1, thin: 1 }, { f: x => 0.8 + (x - 1) * 1, c: 1, label: '접선: 기울기 f′(1)', lx: -0.2, ly: -0.2 }], pts: [{ x: 1, y: 0.8, c: 1, label: 'a', dx: -14, dy: 14 }, { x: 3, y: 4.8, c: 2 }, { x: 2, y: 2.3, c: 4 }], cap: '$h$ 를 줄이면 빨강 → 보라 할선이 파란 접선에 달라붙는다.' })}
${h.box('key', '미분계수 정의가 숨은 극한 (중앙대 단골)', String.raw`<p>$\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a-h)}{2h}=f'(a),\qquad \lim_{h\to0}\frac{f(a+h)-2f(a)+f(a-h)}{h^2}=f''(a)$</p><p>극한 문제처럼 생겼는데 사실은 <b>미분해서 대입하라</b>는 문제다.</p>`)}
${h.ex({ src: 'CAU 2025-3', q: String.raw`$f(x)=\arctan x$ 일 때 $\displaystyle\lim_{h\to0}\frac{f(1+h)-2f(1)+f(1-h)}{h^2}$ 의 값은?`, choices: h.c`$-1$ | $-\frac12$ | $0$ | $\frac12$`,
  sol: String.raw`<p>위 공식대로 $f''(1)$. $f'=\dfrac1{1+x^2}$, $f''=\dfrac{-2x}{(1+x^2)^2}$, $f''(1)=\dfrac{-2}{4}$.</p>`, ans: '② $-\\frac12$' })}
<p><b>미분가능하면 연속</b>이다. 반대는 아니다. $|x|$ 는 $x=0$ 에서 연속이지만 뾰족해서(왼쪽 기울기 $-1$, 오른쪽 $+1$) 미분 불가능이다.</p>

<h3><span class="sn">3.2</span>도함수 공식표 — 이건 구구단이다</h3>
${h.table(['$f(x)$', "$f'(x)$", '$f(x)$', "$f'(x)$"], [
  ['$x^n$', '$nx^{n-1}$', '$\\sin x$', '$\\cos x$'],
  ['$e^x$', '$e^x$', '$\\cos x$', '$-\\sin x$'],
  ['$a^x$', '$a^x\\ln a$', '$\\tan x$', '$\\sec^2x$'],
  ['$\\ln|x|$', '$\\dfrac1x$', '$\\sec x$', '$\\sec x\\tan x$'],
  ['$\\log_a x$', '$\\dfrac1{x\\ln a}$', '$\\cot x$', '$-\\csc^2x$'],
  ['$\\sqrt x$', '$\\dfrac1{2\\sqrt x}$', '$\\csc x$', '$-\\csc x\\cot x$'],
  ['$\\sin^{-1}x$', '$\\dfrac1{\\sqrt{1-x^2}}$', '$\\sinh x$', '$\\cosh x$'],
  ['$\\cos^{-1}x$', '$-\\dfrac1{\\sqrt{1-x^2}}$', '$\\cosh x$', '$\\sinh x$'],
  ['$\\tan^{-1}x$', '$\\dfrac1{1+x^2}$', '$\\tanh x$', '$\\operatorname{sech}^2x$'],
  ['$\\sinh^{-1}x$', '$\\dfrac1{\\sqrt{x^2+1}}$', '$\\tanh^{-1}x$', '$\\dfrac1{1-x^2}$'],
], 'c')}
${h.box('tip', '외우는 요령', '<p><b>co- 가 붙으면 마이너스.</b> $\\cos,\\ \\cot,\\ \\csc,\\ \\cos^{-1}$ 은 도함수에 $-$ 가 붙는다. 쌍곡은 예외 없이 마이너스 없음. $\\tan\\leftrightarrow\\sec^2$, $\\sec\\leftrightarrow\\sec\\tan$ 은 짝으로 외운다 (적분할 때 거꾸로 씀).</p>')}

<h3><span class="sn">3.3</span>곱 · 몫 · 연쇄</h3>
${h.box('key', '세 규칙', String.raw`<p><b>곱</b> $(fg)'=f'g+fg'$ &nbsp; "앞미뒤 + 앞뒤미"</p><p><b>몫</b> $\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}$ &nbsp; "분자 미분 먼저, 빼기"</p><p><b>연쇄</b> $\big(f(g(x))\big)'=f'(g(x))\cdot g'(x)$ &nbsp; "겉 미분 × 속 미분"</p>`)}
<p>연쇄법칙이 미분의 90%다. 양파 까듯이 겉에서부터 한 겹씩 미분하고 곱한다.</p>
$$\frac{d}{dx}\sin^3(2x^2)=\underbrace{3\sin^2(2x^2)}_{\text{세제곱}}\cdot\underbrace{\cos(2x^2)}_{\sin}\cdot\underbrace{4x}_{2x^2}$$
${h.ex({ src: 'CAU 2026-1', q: String.raw`$\dfrac{d}{dx}\ln\!\left(\dfrac{1+x}{1-x}\right)\Big|_{x=1/2}$ 의 값은?`, choices: h.c`$-\frac43$ | $\frac23$ | $\frac43$ | $\frac83$`,
  sol: String.raw`<p>로그는 쪼개고 미분한다: $\ln(1+x)-\ln(1-x)$ → $\dfrac1{1+x}+\dfrac1{1-x}=\dfrac2{1-x^2}$. $x=\frac12$: $\dfrac{2}{3/4}=\dfrac83$.</p>`, ans: '④ $\\frac83$' })}

<h3><span class="sn">3.4</span>로그 미분법 — 곱셈 덩어리, 지수에 변수</h3>
<p>양변에 $\ln$ 을 씌우면 곱은 합이, 거듭제곱은 곱이 된다. 그다음 미분하면 $\dfrac{y'}{y}$ 가 나온다.</p>
${h.box('key', '로그 미분', String.raw`<p>$y=\dfrac{f_1f_2}{g_1g_2}$ 꼴 → $\dfrac{y'}y=\dfrac{f_1'}{f_1}+\dfrac{f_2'}{f_2}-\dfrac{g_1'}{g_1}-\dfrac{g_2'}{g_2}$</p><p>$y=f(x)^{g(x)}$ 꼴 → $\ln y=g\ln f$ → $\dfrac{y'}y=g'\ln f+g\dfrac{f'}{f}$</p>`)}
${h.ex({ src: 'CAU 2025-1', q: String.raw`$\dfrac{d}{dx}\left\{\dfrac{x^4(x-1)}{(x+2)(x^2+1)}\right\}\Big|_{x=2}$ 의 값은?`, choices: h.c`$\frac{16}{25}$ | $\frac{11}5$ | $\frac{19}{25}$ | $\frac{39}{25}$`,
  sol: String.raw`<p>$y(2)=\dfrac{16\cdot1}{4\cdot5}=\dfrac45$. 로그 미분: $\dfrac{y'}{y}=\dfrac4x+\dfrac1{x-1}-\dfrac1{x+2}-\dfrac{2x}{x^2+1}$, $x=2$ 에서 $2+1-\frac14-\frac45=\frac{39}{20}$.</p><p>$y'(2)=\frac45\cdot\frac{39}{20}=\frac{39}{25}$. 몫의 미분으로 하면 3분 걸리는 걸 40초에 끝낸다.</p>`, ans: '④ $\\frac{39}{25}$' })}
${h.ex({ src: 'CAU 2023-13', q: String.raw`곡선 $y=x^{\sin x}$ 위의 점 $\left(\frac\pi2,\frac\pi2\right)$ 에서의 접선의 기울기는?`, choices: h.c`$\frac16$ | $\frac13$ | $\frac12$ | $1$`,
  sol: String.raw`<p>$\ln y=\sin x\ln x$ → $\dfrac{y'}{y}=\cos x\ln x+\dfrac{\sin x}{x}$. $x=\frac\pi2$: $0+\dfrac{1}{\pi/2}=\dfrac2\pi$. $y'=\dfrac\pi2\cdot\dfrac2\pi=1$.</p>`, ans: '④ $1$' })}
${h.ex({ src: 'CAU 2026-16', q: String.raw`$f(x)=\left(\dfrac{1+\tanh x}{1-\tanh x}\right)^{1/6}$ 에 대하여 $\dfrac{f'(x)}{f(x)}$ 는?`, choices: h.c`$-\frac13$ | $-\frac13\tanh x$ | $\frac13\cosh x$ | $\frac13$`,
  sol: String.raw`<p>괄호 안을 먼저 정리하는 게 핵심. $\tanh x=\frac{e^x-e^{-x}}{e^x+e^{-x}}$ 이니 $\dfrac{1+\tanh x}{1-\tanh x}=\dfrac{2e^x}{2e^{-x}}=e^{2x}$. 그러면 $f=e^{x/3}$, $\dfrac{f'}{f}=\dfrac13$.</p>`, ans: '④ $\\frac13$' })}

<h3><span class="sn">3.5</span>음함수 미분 — $y$ 를 못 풀어도 미분한다</h3>
<p>$x^3+y^3=6xy$ 처럼 $y=$ 로 정리가 안 되는 곡선. 방법은 두 가지.</p>
<ol class="steps"><li><b>그냥 양변을 $x$ 로 미분</b>. $y$ 가 나올 때마다 연쇄법칙으로 $y'$ 를 붙인다: $\frac{d}{dx}y^3=3y^2y'$.</li><li><b>공식</b>: $F(x,y)=0$ 이면 $\dfrac{dy}{dx}=-\dfrac{F_x}{F_y}$. $F_x$ 는 $y$ 를 상수로 보고 $x$ 로만 미분한 것 (편미분, 10장). 계산이 제일 빠르다.</li></ol>
${h.ex({ src: 'KU 2018-1', q: String.raw`곡선 $x^3+y^3=6xy$ 위의 점 $(3,3)$ 에서의 접선을 구하시오.`,
  sol: String.raw`<p>$F=x^3+y^3-6xy$. $F_x=3x^2-6y=27-18=9$, $F_y=3y^2-6x=9$. 기울기 $-\frac99=-1$. 접선 $y-3=-(x-3)$.</p>`, ans: '$x+y=6$' })}
${h.ex({ src: 'CAU 2026-13', q: String.raw`방정식 $xye^{x+y}+(x+y)e^{xy}=1$ 에 의해 정의되는 함수 $y=y(x)$ 에 대하여 $\dfrac{dy}{dx}\Big|_{x=0}$ 의 값은?`, choices: h.c`$-e-2$ | $-e-1$ | $-e$ | $-e+1$`,
  sol: String.raw`<p>먼저 점: $x=0$ 넣으면 $0+y\cdot1=1$ → $y=1$.</p><p>$F_x=ye^{x+y}+xye^{x+y}+e^{xy}+(x+y)ye^{xy}$, $(0,1)$ 에서 $e+0+1+1=e+2$.<br>$F_y=xe^{x+y}+xye^{x+y}+e^{xy}+(x+y)xe^{xy}$, $(0,1)$ 에서 $0+0+1+0=1$.</p><p>$\dfrac{dy}{dx}=-\dfrac{e+2}{1}$.</p>`, ans: '① $-e-2$' })}
<h4>음함수 2계 미분</h4>
<p>$y'$ 를 구한 다음 그걸 <b>또 $x$ 로 미분</b>한다. 이때 식 안의 $y$ 는 또 $y'$ 를 뱉고, 거기에 방금 구한 $y'$ 를 대입한다. 고려대가 좋아한다.</p>
${h.ex({ src: 'CAU 2025-7', q: String.raw`$y^3-x^2=4$ 를 만족할 때 $\dfrac{d^2y}{dx^2}$ 은?`, choices: h.c`$\frac{6y-8}{9y^5}$ | $\frac{6y^2-8x}{9y^5}$ | $\frac{6y^3-8x^2}{9y^5}$ | $\frac{6y^4-8x^3}{9y^5}$`,
  sol: String.raw`<p>$3y^2y'=2x$ → $y'=\dfrac{2x}{3y^2}$.</p><p>몫의 미분: $y''=\dfrac{2\cdot3y^2-2x\cdot6yy'}{9y^4}=\dfrac{6y^2-12xy\cdot\frac{2x}{3y^2}}{9y^4}=\dfrac{6y^2-\frac{8x^2}{y}}{9y^4}=\dfrac{6y^3-8x^2}{9y^5}$.</p>`, ans: '③' })}

<h3><span class="sn">3.6</span>역함수 미분 — 기울기는 뒤집힌다</h3>
${h.box('key', '역함수의 미분계수', String.raw`<p>$f(a)=b$ 이면 $\ (f^{-1})'(b)=\dfrac1{f'(a)}$</p><p>순서: ① $f(a)=b$ 인 $a$ 를 찾는다 (보통 작은 정수 대입해 보면 나온다) ② $f'(a)$ ③ 뒤집는다.</p>`)}
${h.plot({ x: [-0.5, 4.5], y: [-0.5, 4.5], equal: true, w: 380, h: 360, fns: [{ f: x => x * x / 3 + 0.2, c: 1, dom: [0, 3.4], label: 'f', lx: 2.2, ly: 2.6 }, { f: x => x >= 0.2 ? Math.sqrt(3 * (x - 0.2)) : NaN, c: 2, label: 'f⁻¹', lx: 3.6, ly: 2.7 }, { f: x => x, c: 'm', dash: 1, thin: 1 }, { f: x => 1.533 + (x - 2) * 4 / 3, c: 1, thin: 1, dom: [1.2, 2.8] }, { f: x => 2 + (x - 1.533) * 3 / 4, c: 2, thin: 1, dom: [0.6, 2.6] }], pts: [{ x: 2, y: 1.533, c: 1, label: '(a,b)', dx: 8, dy: 14 }, { x: 1.533, y: 2, c: 2, label: '(b,a)', dx: -46 }], cap: '거울에 비친 접선. 가로·세로가 바뀌니 기울기 $m$ 은 $\\frac1m$ 이 된다.' })}
${h.ex({ src: 'CAU 2025-6', q: String.raw`$f(x)=x^3+\frac12x$ 의 역함수를 $f^{-1}$ 이라 할 때 $\dfrac{d}{dx}\{f^{-1}(x)\}\Big|_{x=9}$ 의 값은?`, choices: h.c`$\frac1{25}$ | $\frac2{25}$ | $\frac4{25}$ | $\frac8{25}$`,
  sol: String.raw`<p>$f(a)=9$: $a=2$ 넣어 보면 $8+1=9$. $f'(2)=3\cdot4+\frac12=\frac{25}2$. 뒤집으면 $\frac2{25}$.</p>`, ans: '② $\\frac2{25}$' })}
${h.ex({ src: 'CAU 2023-12', q: String.raw`미분가능한 두 함수 $f,g$ 가 $f'(x)=1+[f(x)]^2$ 과 $f(g(x))=x$ 를 만족할 때 $g'(2)$ 의 값은?`, choices: h.c`$\frac1{12}$ | $\frac1{10}$ | $\frac15$ | $\frac12$`,
  sol: String.raw`<p>$f(g(x))=x$ 를 미분: $f'(g(x))g'(x)=1$. $g'(2)=\dfrac1{f'(g(2))}=\dfrac1{1+[f(g(2))]^2}=\dfrac1{1+2^2}$. $f(g(2))=2$ 인 걸 쓰는 게 포인트.</p>`, ans: '③ $\\frac15$' })}

<h3><span class="sn">3.7</span>매개변수 미분</h3>
${h.box('key', '매개변수 1계 · 2계', String.raw`<p>$x=x(t),\ y=y(t)$ 이면 $\dfrac{dy}{dx}=\dfrac{\dot y}{\dot x}$ (점은 $t$ 로 미분)</p><p>$\dfrac{d^2y}{dx^2}=\dfrac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\dot x}$ ← <mark>분모에 $\dot x$ 한 번 더. 이거 빼먹는 게 1위 실수</mark></p>`)}
${h.ex({ q: String.raw`$x=t^2,\ y=t^3$ 일 때 $\dfrac{d^2y}{dx^2}$ 을 $t$ 로 나타내시오.`,
  sol: String.raw`<p>$\dfrac{dy}{dx}=\dfrac{3t^2}{2t}=\dfrac32t$. 이걸 $t$ 로 미분하면 $\frac32$, 여기서 끝내면 틀린다. $\dot x=2t$ 로 한 번 더 나눠서 $\dfrac{3/2}{2t}=\dfrac3{4t}$.</p>`, ans: '$\\dfrac3{4t}$' })}

<h3><span class="sn">3.8</span>고계도함수와 라이프니츠 공식</h3>
${h.box('key', '곱의 n계 미분 (라이프니츠)', String.raw`<p>$$(fg)^{(n)}=\sum_{k=0}^n\binom nk f^{(k)}g^{(n-k)}$$</p><p>이항정리랑 모양이 똑같다. $f$ 가 다항식이면 몇 번 미분하면 0 이 돼서 항이 몇 개 안 남는다.</p>`)}
${h.ex({ src: 'CAU 2024-21', q: String.raw`$f(x)=x^3e^x$ 에 대하여 $n\ge3$ 일 때 $f^{(n)}(1)$ 의 값은?`, choices: h.c`$e(n^2+n+1)$ | $e(n^3+n+1)$ | $e(n^2+2n+1)$ | $e(n^3+2n+1)$`,
  sol: String.raw`<p>$x^3$ 은 4번 미분하면 0. $e^x$ 는 몇 번 미분해도 $e^x$.</p>$$f^{(n)}=e^x\left[x^3+\binom n1 3x^2+\binom n2 6x+\binom n3 6\right]$$<p>$x=1$: $e\left[1+3n+3n(n-1)+n(n-1)(n-2)\right]=e(n^3+2n+1)$. 검산: $n=3$ 이면 $34e$. 직접 미분해도 $34e$.</p>`, ans: '④' })}
<p>자주 쓰는 $n$ 계 도함수: $(e^{ax})^{(n)}=a^ne^{ax}$, $(\sin x)^{(n)}=\sin\!\left(x+\frac{n\pi}2\right)$, $\left(\dfrac1{x}\right)^{(n)}=\dfrac{(-1)^nn!}{x^{n+1}}$, $(\ln x)^{(n)}=\dfrac{(-1)^{n-1}(n-1)!}{x^n}$.</p>

<h3><span class="sn">3.9</span>접선 · 법선 · 직교</h3>
<p>점 $(a,f(a))$ 에서 접선: $y-f(a)=f'(a)(x-a)$. 법선은 기울기 $-\frac1{f'(a)}$. <b>두 곡선이 직교</b>한다는 건 교점에서 두 접선 기울기의 곱이 $-1$.</p>
${h.ex({ src: 'CAU 2024-6', q: String.raw`두 곡선 $y^3=x^2$ 과 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ 의 교점에서 각 곡선의 접선이 서로 수직이 되는 $a,b$ 의 관계식은?`, choices: h.c`$3b^2=2a^2$ | $2b^3=3a^2$ | $3b^2=2a^3$ | $2b^2=3a^2$`,
  sol: String.raw`<p>곡선 1: $3y^2y'=2x$ → $m_1=\dfrac{2x}{3y^2}$. 곡선 2: $\dfrac{2x}{a^2}+\dfrac{2yy'}{b^2}=0$ → $m_2=-\dfrac{b^2x}{a^2y}$.</p><p>$m_1m_2=-\dfrac{2b^2x^2}{3a^2y^3}=-1$. 교점에서는 $x^2=y^3$ 이라 $\dfrac{2b^2}{3a^2}=1$.</p>`, ans: '④ $2b^2=3a^2$' })}

<h3><span class="sn">3.10</span>함수방정식 — 정의로 미분한다</h3>
${h.ex({ src: 'CAU 2023-22', q: String.raw`미분가능한 $f$ 가 (i) $f(x+y)=f(x)+f(y)+x^2y+xy^2$ (ii) $\displaystyle\lim_{x\to0}\frac{f(x)}x=1$ 을 만족할 때 $f(3)$ 은?`, choices: h.c`$10$ | $12$ | $14$ | $16$`,
  sol: String.raw`<p>(i)에 $x=y=0$: $f(0)=2f(0)$ → $f(0)=0$. 그래서 (ii)는 $f'(0)=1$ 이라는 뜻.</p><p>정의대로: $f'(x)=\displaystyle\lim_{h\to0}\frac{f(x+h)-f(x)}h=\lim\frac{f(h)+x^2h+xh^2}{h}=1+x^2$.</p><p>$f(x)=x+\frac{x^3}3$ ($f(0)=0$). $f(3)=3+9=12$.</p>`, ans: '② $12$' })}

<div class="probs-h"><h3>연습문제 3</h3><span class="cnt">22문항</span></div>
${h.p({ q: String.raw`$y=\sin^3(2x^2)$ 의 도함수`, ans: '$12x\\sin^2(2x^2)\\cos(2x^2)$', sol: String.raw`<p>$3\sin^2(2x^2)\cdot\cos(2x^2)\cdot4x$.</p>` })}
${h.p({ q: String.raw`$y=e^{-x}\cos2x$ 의 도함수`, ans: '$-e^{-x}(\\cos2x+2\\sin2x)$', sol: String.raw`<p>곱의 미분: $-e^{-x}\cos2x+e^{-x}(-2\sin2x)$.</p>` })}
${h.p({ q: String.raw`$y=\tan^{-1}\!\left(\dfrac{1}{x}\right)$ 의 도함수`, ans: '$-\\dfrac1{1+x^2}$', sol: String.raw`<p>$\dfrac1{1+1/x^2}\cdot\left(-\dfrac1{x^2}\right)=-\dfrac1{x^2+1}$. ($\tan^{-1}x+\tan^{-1}\frac1x$ 가 상수라서 당연.)</p>` })}
${h.p({ q: String.raw`$y=\ln\left(x+\sqrt{x^2+1}\right)$ 의 도함수`, ans: '$\\dfrac1{\\sqrt{x^2+1}}$', sol: String.raw`<p>$\sinh^{-1}x$ 다. 직접 해도 $\dfrac{1+\frac{x}{\sqrt{x^2+1}}}{x+\sqrt{x^2+1}}=\dfrac1{\sqrt{x^2+1}}$.</p>` })}
${h.p({ q: String.raw`$y=x^x$ 의 도함수`, ans: '$x^x(\\ln x+1)$', sol: String.raw`<p>$\ln y=x\ln x$ → $\frac{y'}y=\ln x+1$.</p>` })}
${h.p({ src: 'CAU 2026-4', q: String.raw`$f(x)=\dfrac{x}{x^2+2x+2}$ 일 때 $\displaystyle\lim_{h\to0}\frac{f(2+h)-f(2-h)}{2h}$ 의 값은?`, choices: h.c`$-\frac1{25}$ | $-\frac1{50}$ | $\frac1{50}$ | $\frac1{25}$`, ans: '② $-\\frac1{50}$', sol: String.raw`<p>$f'(2)$ 다. $f'=\dfrac{(x^2+2x+2)-x(2x+2)}{(x^2+2x+2)^2}=\dfrac{2-x^2}{(x^2+2x+2)^2}$, $x=2$: $\dfrac{-2}{100}$.</p>` })}
${h.p({ src: 'KU 2024-2', q: String.raw`$f(x)=e^{-x}-x$ 일 때 $(f^{-1})'(1)$ 을 구하시오.`, ans: '$-\\frac12$', sol: String.raw`<p>$f(0)=1$. $f'(x)=-e^{-x}-1$, $f'(0)=-2$. 뒤집어서 $-\frac12$.</p>` })}
${h.p({ src: 'KU 2019-2', lv: 2, q: String.raw`$x=1$ 근방에서 $x^3+x^2y+xy^3=3$ 을 만족하는 함수 $y=f(x)$ 에 대해 $f''(1)$ 을 구하시오.`, ans: '$-\\frac{13}8$', sol: String.raw`<p>$x=1$: $1+y+y^3=3$ → $y=1$.</p><p>한 번 미분: $3x^2+2xy+x^2y'+y^3+3xy^2y'=0$. $(1,1)$: $3+2+y'+1+3y'=0$ → $y'=-\frac32$.</p><p>또 미분: $6x+2y+2xy'+2xy'+x^2y''+3y^2y'+3y^2y'+6xy(y')^2+3xy^2y''=0$. $(1,1,y'=-\frac32)$ 넣으면 $6+2-3-3+y''-\frac92-\frac92+\frac{27}2+3y''=0$ → $4y''+\frac{13}2=0$ → $y''=-\frac{13}8$.</p>` })}
${h.p({ q: String.raw`$x=\cos t,\ y=\sin t$ 일 때 $\dfrac{d^2y}{dx^2}$ 을 $t$ 로 나타내시오.`, ans: '$-\\dfrac1{\\sin^3t}$', sol: String.raw`<p>$\dfrac{dy}{dx}=\dfrac{\cos t}{-\sin t}=-\cot t$. $t$ 로 미분 $\csc^2t$, $\dot x=-\sin t$ 로 나누면 $-\csc^3t$.</p>` })}
${h.p({ src: 'KU 2020-6', q: String.raw`곡선 $y=\tan^{-1}\sqrt x$ 의 $x=1$ 에서의 접선을 구하시오.`, ans: '$y=\\dfrac{x-1}4+\\dfrac\\pi4$', sol: String.raw`<p>$y'=\dfrac1{1+x}\cdot\dfrac1{2\sqrt x}$, $x=1$: $\frac14$. 점 $(1,\frac\pi4)$.</p>` })}
${h.p({ q: String.raw`$f(x)=\dfrac1{1-x}$ 일 때 $f^{(10)}(0)$`, ans: '$10!$', sol: String.raw`<p>$f^{(n)}=\dfrac{n!}{(1-x)^{n+1}}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$f(x)=x^2\sin x$ 일 때 $f^{(20)}(0)$`, ans: '$0$', sol: String.raw`<p>라이프니츠: $\binom{20}{2}\cdot2\cdot(\sin x)^{(18)}$ 만 $x=0$ 에서 살아남을 수 있다 (나머지는 $x^2$, $2x$ 가 0). $(\sin x)^{(18)}=\sin(x+9\pi)=-\sin x$, $x=0$ 에서 0. 그래서 0. (우함수 $x^2$ × 기함수 = 기함수라서 짝수 계 미분이 0인 거랑 같은 이야기.)</p>` })}
${h.p({ lv: 2, q: String.raw`$f(x)=x^2\sin x$ 일 때 $f^{(21)}(0)$`, ans: '$-420$', sol: String.raw`<p>라이프니츠로 살아남는 항은 $\binom{21}2\cdot2\cdot(\sin x)^{(19)}(0)$ 하나. $(\sin x)^{(19)}=\sin\!\left(x+\frac{19\pi}2\right)=\sin\!\left(x+\frac{3\pi}2\right)=-\cos x$ 라 $x=0$ 에서 $-1$. 답 $210\cdot2\cdot(-1)=-420$.</p><p>검산법: $x^2\sin x=x^3-\frac{x^5}{3!}+\cdots$ 에서 $x^{21}$ 계수는 $\frac{-1}{19!}$ 이고 $f^{(21)}(0)=21!\times\frac{-1}{19!}=-420$. 7장에서 이 방법이 주력이 된다.</p>` })}
${h.p({ lv: 2, q: String.raw`곡선 $x^2+xy+y^2=7$ 위의 점 $(1,2)$ 에서의 법선의 방정식`, ans: '$y=\\dfrac54x+\\dfrac34$', sol: String.raw`<p>$F_x=2x+y=4$, $F_y=x+2y=5$ → 접선 기울기 $-\frac45$, 법선 기울기 $\frac54$. $y-2=\frac54(x-1)$.</p>` })}
${h.p({ q: String.raw`$y=\cosh^{-1}(2x)$ 의 도함수 ($x>\frac12$)`, ans: '$\\dfrac{2}{\\sqrt{4x^2-1}}$', sol: String.raw`<p>$(\cosh^{-1}u)'=\dfrac1{\sqrt{u^2-1}}$ 에 연쇄.</p>` })}
${h.p({ lv: 2, q: String.raw`$f(x)=\displaystyle\frac{(x+1)^3\sqrt{x+3}}{(x+2)^2}$ 일 때 $f'(1)$`, ans: '$\\dfrac{46}{27}$', sol: String.raw`<p>$f(1)=\dfrac{8\cdot2}{9}=\dfrac{16}9$. 로그 미분: $\dfrac{3}{x+1}+\dfrac{1}{2(x+3)}-\dfrac2{x+2}$ at $x=1$: $\frac32+\frac18-\frac23=\frac{36+3-16}{24}=\frac{23}{24}$.</p><p>$f'(1)=\frac{16}9\cdot\frac{23}{24}=\frac{46}{27}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$g$ 가 $f(x)=x^5+x^3+x$ 의 역함수일 때 $g'(3)$`, ans: '$\\frac19$', sol: String.raw`<p>$f(1)=3$. $f'(1)=5+3+1=9$.</p>` })}
${h.p({ lv: 2, q: String.raw`$f(x)=\sin^{-1}x+\cos^{-1}x$ 의 도함수와 그 의미`, ans: '$0$ (상수 $\\frac\\pi2$)', sol: String.raw`<p>$\frac1{\sqrt{1-x^2}}-\frac1{\sqrt{1-x^2}}=0$. 상수함수고 값은 $\frac\pi2$.</p>` })}
${h.p({ q: String.raw`$y=\log_2(x^2+1)$ 의 도함수`, ans: '$\\dfrac{2x}{(x^2+1)\\ln2}$', sol: String.raw`<p>$\log_2u=\frac{\ln u}{\ln 2}$.</p>` })}
${h.p({ lv: 3, q: String.raw`$x=t-\sin t,\ y=1-\cos t$ (사이클로이드) 위에서 $t=\frac\pi2$ 일 때 $\dfrac{d^2y}{dx^2}$`, ans: '$-1$', sol: String.raw`<p>$\frac{dy}{dx}=\frac{\sin t}{1-\cos t}$. $t$ 로 미분: $\frac{\cos t(1-\cos t)-\sin^2t}{(1-\cos t)^2}=\frac{\cos t-1}{(1-\cos t)^2}=-\frac1{1-\cos t}$. 한 번 더 $\dot x=1-\cos t$ 로 나누면 $-\frac1{(1-\cos t)^2}$, $t=\frac\pi2$ 에서 $-1$.</p>` })}
${h.p({ lv: 2, q: String.raw`$f(x+y)=f(x)f(y)$, $f(0)\ne0$, $f'(0)=2$ 일 때 $f(x)$ 는?`, ans: '$e^{2x}$', sol: String.raw`<p>$f(0)=f(0)^2$ → $f(0)=1$. $f'(x)=\lim\frac{f(x)f(h)-f(x)}h=f(x)f'(0)=2f(x)$ → $f=e^{2x}$.</p>` })}
${h.p({ q: String.raw`$y=\dfrac{\sin x}{1+\cos x}$ 의 도함수를 가장 간단히`, ans: '$\\dfrac1{1+\\cos x}$', sol: String.raw`<p>$\dfrac{\cos x(1+\cos x)+\sin^2x}{(1+\cos x)^2}=\dfrac{1+\cos x}{(1+\cos x)^2}$. (애초에 $y=\tan\frac x2$ 라 $\frac12\sec^2\frac x2$ 와 같다.)</p>` })}
`
};
