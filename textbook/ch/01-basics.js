module.exports = {
  id: 'c01', num: '01', part: 'PART A · 미적분의 바닥', title: '고등수학 응급복구', short: '함수 · 지수로그 · 삼각 · 쌍곡',
  schools: { KU: '직접 출제 적음', HY: '전 단원 기반', CAU: '역삼각·매개 출제' },
  lede: '편입수학이 어려운 이유의 절반은 편입수학이 아니라 고1–고3 수학을 까먹어서다. 이 장은 뒤에서 매 페이지 쓰는 도구들을 딱 필요한 만큼만 복구한다.',
  body: h => String.raw`
<h3><span class="sn">1.1</span>함수는 자판기다</h3>
<p>함수 $f$ 는 자판기다. 동전 $x$ 를 넣으면 음료 $f(x)$ 가 하나 나온다. <mark>넣은 것 하나에 나오는 것은 딱 하나.</mark> 이 규칙만 지키면 전부 함수다.</p>
<ul>
<li><b>정의역</b>: 넣을 수 있는 동전들. $\sqrt{x}$ 는 $x\ge 0$, $\ln x$ 는 $x>0$, $\frac1x$ 는 $x\ne 0$.</li>
<li><b>치역</b>: 실제로 나오는 음료들.</li>
<li><b>합성함수</b> $(f\circ g)(x)=f(g(x))$: 자판기 두 대를 이어 붙인 것. <b>안쪽($g$)부터</b> 돌린다.</li>
<li><b>역함수</b> $f^{-1}$: 음료를 넣으면 동전을 돌려주는 반대 자판기. 그래프는 $y=x$ 에 대해 뒤집은 모양이다.</li>
</ul>
${h.plot({ x: [-2.5, 4], y: [-2.5, 4], equal: true, w: 420, h: 380, fns: [{ f: x => Math.exp(x), c: 1, label: 'y = eˣ', lx: 1.05, ly: 3.5 }, { f: x => x > 0 ? Math.log(x) : NaN, c: 2, label: 'y = ln x', lx: 2.6, ly: 0.55 }, { f: x => x, c: 'm', dash: 1, thin: 1, label: 'y = x', lx: 3.1, ly: 3.45 }], pts: [{ x: 0, y: 1, c: 1, label: '(0,1)', dx: -46 }, { x: 1, y: 0, c: 2, label: '(1,0)', dy: 16 }], xt: [1, 2, 3], yt: [1, 2, 3], cap: '$e^x$ 와 $\\ln x$ 는 서로 역함수라서 $y=x$ 에 대해 거울상이다. 점 $(a,b)$ 가 한쪽에 있으면 $(b,a)$ 는 다른 쪽에 있다.' })}
${h.box('key', '역함수 구하는 3단계', String.raw`<ol class="steps"><li>$y=f(x)$ 로 쓴다.</li><li>$x$ 와 $y$ 를 바꾼다.</li><li>$y=$ 꼴로 다시 푼다. 그게 $f^{-1}(x)$.</li></ol>`)}
<h4>우함수 · 기함수 — 적분에서 공짜 점수</h4>
<p><b>우함수</b>(짝함수): $f(-x)=f(x)$. $y$축 대칭. 예: $x^2,\ \cos x,\ |x|$.<br><b>기함수</b>(홀함수): $f(-x)=-f(x)$. 원점 대칭. 예: $x^3,\ \sin x,\ \tan x,\ \arctan x$.</p>
<p>곱셈 규칙은 부호처럼 움직인다: (기)×(기)=(우), (기)×(우)=(기), (우)×(우)=(우). 이게 왜 중요하냐면 <mark>기함수를 $-a$ 부터 $a$ 까지 적분하면 무조건 0</mark> 이기 때문이다. 계산 한 줄 안 하고 0 쓰는 문제가 매년 나온다.</p>

<h3><span class="sn">1.2</span>그래프 옮기기 네 가지</h3>
${h.table(['식', '그래프가 어떻게 되나', '외우는 법'], [
  ['$y=f(x-a)+b$', '오른쪽 $a$, 위로 $b$ 평행이동', '$x$ 쪽은 부호 반대로 움직인다'],
  ['$y=f(kx)$', '가로로 $\\frac1k$ 배 (압축)', '$x$ 쪽은 역수로'],
  ['$y=kf(x)$', '세로로 $k$ 배', '$y$ 쪽은 그대로'],
  ['$y=f(-x)$, $y=-f(x)$', '$y$축 대칭, $x$축 대칭', ''],
  ['$y=|f(x)|$', '$x$축 아래 부분을 위로 접어 올림', ''],
])}

<h3><span class="sn">1.3</span>지수와 로그</h3>
${h.box('key', '지수·로그 법칙', String.raw`<p>$a^m a^n=a^{m+n},\quad (a^m)^n=a^{mn},\quad a^{-n}=\dfrac1{a^n},\quad a^{1/n}=\sqrt[n]{a}$</p>
<p>$\ln(AB)=\ln A+\ln B,\quad \ln\dfrac AB=\ln A-\ln B,\quad \ln A^k=k\ln A,\quad \log_a b=\dfrac{\ln b}{\ln a}$</p>
<p>$e^{\ln A}=A,\qquad \ln e^x=x,\qquad a^x=e^{x\ln a}$ ← <b>이 마지막 게 핵심 무기</b></p>`)}
<p>$e\approx 2.718$ 은 그냥 "미분해도 자기 자신이 나오는 지수함수의 밑"이다. 이유는 3장에서 본다. 대학 수학에서 $\log$ 라고 쓰면 거의 $\ln$ 이다.</p>
<p><b>$a^x=e^{x\ln a}$</b> 는 진짜 중요하다. $x^{\sin x}$ 처럼 밑과 지수에 둘 다 변수가 있는 괴물은 전부 $e^{\sin x\ln x}$ 로 바꿔서 처리한다. 2장 극한, 3장 미분에서 계속 나온다.</p>

<h3><span class="sn">1.4</span>삼각함수 — 단위원 하나로 끝낸다</h3>
<p>반지름 1인 원 위에서 각 $\theta$ 만큼 돈 점의 좌표가 $(\cos\theta,\ \sin\theta)$ 다. 정의 끝. $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$ 는 그 점과 원점을 이은 선의 기울기.</p>
${h.plot({ x: [-1.45, 1.6], y: [-1.3, 1.3], equal: true, w: 420, h: 360, axes: true, grid: false,
  curves: [{ fx: t => Math.cos(t), fy: t => Math.sin(t), t: [0, 2 * Math.PI], c: 'm', thin: 1 }, { fx: t => 0.28 * Math.cos(t), fy: t => 0.28 * Math.sin(t), t: [0, 0.9], c: 2, thin: 1 }],
  lines: [{ p: [0, 0], q: [Math.cos(0.9), Math.sin(0.9)], c: 1 }, { p: [Math.cos(0.9), 0], q: [Math.cos(0.9), Math.sin(0.9)], c: 2, dash: 1 }, { p: [0, 0], q: [Math.cos(0.9), 0], c: 3 }],
  pts: [{ x: Math.cos(0.9), y: Math.sin(0.9), c: 1, label: '(cos θ, sin θ)', dx: 8 }],
  texts: [{ x: 0.33, y: 0.13, t: 'θ', c: 2 }, { x: Math.cos(0.9) + 0.05, y: 0.35, t: 'sin θ', c: 2 }, { x: 0.18, y: -0.14, t: 'cos θ', c: 3 }, { x: 1.03, y: -0.13, t: '1' }],
  cap: '단위원. 빨간 세로 길이가 $\\sin\\theta$, 초록 가로 길이가 $\\cos\\theta$. 피타고라스 정리로 바로 $\\sin^2\\theta+\\cos^2\\theta=1$.' })}
<h4>라디안</h4>
<p>대학 수학에서 각은 무조건 <b>라디안</b>이다. $180^\circ=\pi$. 그러니까 $90^\circ=\frac\pi2,\ 60^\circ=\frac\pi3,\ 45^\circ=\frac\pi4,\ 30^\circ=\frac\pi6$. 도(°)로 계산하면 미분 공식이 다 틀어진다.</p>
${h.table(['$\\theta$', '$0$', '$\\frac\\pi6$', '$\\frac\\pi4$', '$\\frac\\pi3$', '$\\frac\\pi2$', '$\\pi$'], [
  ['$\\sin$', '$0$', '$\\frac12$', '$\\frac{\\sqrt2}2$', '$\\frac{\\sqrt3}2$', '$1$', '$0$'],
  ['$\\cos$', '$1$', '$\\frac{\\sqrt3}2$', '$\\frac{\\sqrt2}2$', '$\\frac12$', '$0$', '$-1$'],
  ['$\\tan$', '$0$', '$\\frac1{\\sqrt3}$', '$1$', '$\\sqrt3$', '없음', '$0$'],
], 'c')}
<h4>항등식 — 5층 건물</h4>
<p>공식이 많아 보이지만 1층 두 개만 외우면 나머지는 전부 거기서 파생된다.</p>
${h.box('key', '삼각 항등식', String.raw`<p><b>1층</b> $\sin^2\theta+\cos^2\theta=1$ &nbsp;(양변을 $\cos^2$ 로 나누면 $1+\tan^2\theta=\sec^2\theta$)</p>
<p><b>1층</b> 덧셈정리 $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b,\quad \cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$</p>
<p><b>2층</b> 배각 ($a=b$): $\sin2\theta=2\sin\theta\cos\theta,\quad \cos2\theta=\cos^2\theta-\sin^2\theta=1-2\sin^2\theta=2\cos^2\theta-1$</p>
<p><b>3층</b> 반각 (배각 거꾸로): $\sin^2\theta=\dfrac{1-\cos2\theta}2,\quad \cos^2\theta=\dfrac{1+\cos2\theta}2$ ← <mark>적분에서 제일 많이 씀</mark></p>
<p><b>4층</b> 곱→합: $\sin a\cos b=\tfrac12[\sin(a+b)+\sin(a-b)]$, $\ \cos a\cos b=\tfrac12[\cos(a-b)+\cos(a+b)]$, $\ \sin a\sin b=\tfrac12[\cos(a-b)-\cos(a+b)]$</p>
<p><b>5층</b> $\tan$ 반각 치환: $t=\tan\frac\theta2$ 이면 $\sin\theta=\dfrac{2t}{1+t^2},\ \cos\theta=\dfrac{1-t^2}{1+t^2}$ (5장 적분 비장의 무기)</p>`)}
<p>나머지 세 친구: $\sec\theta=\dfrac1{\cos\theta},\ \csc\theta=\dfrac1{\sin\theta},\ \cot\theta=\dfrac{\cos\theta}{\sin\theta}$. 이름에 붙은 규칙: <b>s는 c로, c는 s로 뒤집힌다.</b></p>
${h.plot({ x: [-6.6, 6.6], y: [-1.6, 1.6], w: 620, h: 250, fns: [{ f: Math.sin, c: 1, label: 'sin x', lx: 1.3, ly: 1.2 }, { f: Math.cos, c: 2, dash: 1, label: 'cos x', lx: -0.6, ly: 1.3 }], xt: [[-2 * Math.PI, '−2π'], [-Math.PI, '−π'], [Math.PI, 'π'], [2 * Math.PI, '2π']], yt: [1, -1], cap: '$\\sin$ 과 $\\cos$ 은 주기 $2\\pi$. $\\cos x$ 는 $\\sin x$ 를 왼쪽으로 $\\frac\\pi2$ 민 것 ($\\cos x=\\sin(x+\\frac\\pi2)$).' })}

<h3><span class="sn">1.5</span>역삼각함수 — 각도를 돌려주는 기계</h3>
<p>$\sin x$ 는 같은 값이 무한 번 나와서 역함수가 없다. 그래서 <b>한 구간만 잘라서</b> 뒤집는다. 이 잘라낸 구간이 역삼각함수의 치역이다. <mark>이거 틀리면 답이 $\pi$ 만큼 틀어진다.</mark></p>
${h.table(['함수', '정의역', '치역 (돌려주는 각)', '대표값'], [
  ['$\\sin^{-1}x=\\arcsin x$', '$[-1,1]$', '$[-\\frac\\pi2,\\frac\\pi2]$', '$\\sin^{-1}\\frac12=\\frac\\pi6$'],
  ['$\\cos^{-1}x=\\arccos x$', '$[-1,1]$', '$[0,\\pi]$', '$\\cos^{-1}(-\\frac12)=\\frac{2\\pi}3$'],
  ['$\\tan^{-1}x=\\arctan x$', '모든 실수', '$(-\\frac\\pi2,\\frac\\pi2)$', '$\\tan^{-1}1=\\frac\\pi4,\\ \\tan^{-1}\\infty=\\frac\\pi2$'],
])}
${h.plot({ x: [-6, 6], y: [-2, 2], w: 560, h: 240, fns: [{ f: Math.atan, c: 1, label: 'y = arctan x', lx: 2.2, ly: 0.8 }, { f: () => Math.PI / 2, c: 2, dash: 1, thin: 1, label: 'π/2', lx: -5.8, ly: 1.75 }, { f: () => -Math.PI / 2, c: 2, dash: 1, thin: 1, label: '−π/2', lx: 4.6, ly: -1.35 }], xt: [-4, -2, 2, 4], cap: '$\\arctan x$ 는 양쪽 끝에서 $\\pm\\frac\\pi2$ 로 눕는다. 기함수라 원점 대칭.' })}
${h.box('key', '역삼각 필수 관계', String.raw`<p>$\sin^{-1}x+\cos^{-1}x=\dfrac\pi2,\qquad \tan^{-1}x+\tan^{-1}\dfrac1x=\dfrac\pi2\ (x>0)$</p><p>$\cos(\sin^{-1}x)=\sqrt{1-x^2},\qquad \tan(\cos^{-1}x)=\dfrac{\sqrt{1-x^2}}{x}$ ← 직각삼각형 그려서 읽는다</p>`)}
${h.box('pat', '역삼각 안에 삼각', '<p>$\\tan(\\cos^{-1}\\frac35)$ 같은 건 <b>직각삼각형을 그린다.</b> $\\cos\\theta=\\frac35$ → 밑변 3, 빗변 5 → 높이 4 → $\\tan\\theta=\\frac43$. 계산 끝.</p>')}
${h.ex({ src: 'CAU 2024-7', q: String.raw`$\sin^{-1}\!\left(\dfrac4{\sqrt{17}}\right)=\theta_1,\ \sin^{-1}\!\left(\dfrac1{\sqrt{17}}\right)=\theta_2$ 일 때 $\theta_1+\theta_2$ 의 값은?`, choices: ['$-\\frac\\pi2$', '$0$', '$\\frac\\pi2$', '$\\pi$'],
  sol: String.raw`<p>$\sin\theta_1=\frac4{\sqrt{17}}$ → 빗변 $\sqrt{17}$, 높이 4, 밑변 1 → $\tan\theta_1=4$. 똑같이 $\tan\theta_2=\frac14$.</p><p>둘 다 양수 예각이고 $\tan\theta_1\cdot\tan\theta_2=1$ 이니까 $\theta_2=\frac\pi2-\theta_1$. 합은 $\frac\pi2$.</p>`, ans: '③ $\\frac\\pi2$' })}

<h3><span class="sn">1.6</span>쌍곡선함수 — 이름만 무섭다</h3>
<p>그냥 $e^x$ 와 $e^{-x}$ 를 더하고 뺀 거다. 삼각함수랑 공식 모양이 비슷해서 "쌍곡 삼각함수"라는 이름이 붙었다.</p>
${h.box('key', '정의와 항등식', String.raw`<p>$\sinh x=\dfrac{e^x-e^{-x}}2,\qquad \cosh x=\dfrac{e^x+e^{-x}}2,\qquad \tanh x=\dfrac{\sinh x}{\cosh x}$</p>
<p>$\cosh^2x-\sinh^2x=1$ ← 삼각이랑 <b>부호 하나</b> 다르다</p>
<p>$(\sinh x)'=\cosh x,\quad (\cosh x)'=\sinh x$ ← <b>마이너스가 안 생긴다</b></p>
<p>$\sinh^{-1}x=\ln\!\left(x+\sqrt{x^2+1}\right),\qquad \cosh^{-1}x=\ln\!\left(x+\sqrt{x^2-1}\right)\ (x\ge1),\qquad \tanh^{-1}x=\dfrac12\ln\dfrac{1+x}{1-x}$</p>`)}
${h.plot({ x: [-3, 3], y: [-3.5, 4.5], w: 460, h: 330, fns: [{ f: Math.cosh, c: 1, label: 'cosh x', lx: 1.75, ly: 3.8 }, { f: Math.sinh, c: 2, label: 'sinh x', lx: 1.9, ly: 2.2 }, { f: Math.tanh, c: 3, label: 'tanh x', lx: 1.8, ly: 0.55 }], xt: [-2, -1, 1, 2], yt: [1, -1], cap: '$\\cosh$ 는 우함수(쇠사슬을 늘어뜨린 모양, 현수선), $\\sinh$·$\\tanh$ 는 기함수. $\\tanh$ 는 $\\pm1$ 사이에 갇힌다.' })}
<p>$\sinh^{-1}$ 이 $\ln$ 으로 나오는 이유: $y=\sinh^{-1}x$ 면 $x=\frac{e^y-e^{-y}}2$. $u=e^y$ 로 두면 $u^2-2xu-1=0$ 이라 $u=x+\sqrt{x^2+1}$ (양수 쪽). 따라서 $y=\ln(x+\sqrt{x^2+1})$. 이 유도 한 번 해 두면 안 외워도 된다.</p>

<h3><span class="sn">1.7</span>매개변수로 주어진 곡선</h3>
<p>$x=f(t),\ y=g(t)$ 처럼 둘 다 $t$ 로 주어지면 <b>$t$ 를 없애서</b> $x,y$ 관계식을 찾는다. 삼각함수면 $\sin^2+\cos^2=1$ 이나 배각공식으로 없앤다.</p>
${h.ex({ src: 'CAU 2024-22', q: String.raw`$0\le t\le\pi$ 일 때 점 $P(\sin^2t,\ \cos t\sin t)$ 의 자취는 어떤 원 위에 있는가?`, choices: h.c`중심 $(0,\frac12)$, 반지름 $\frac12$ | 중심 $(\frac12,0)$, 반지름 $\frac12$ | 중심 $(0,\frac12)$, 반지름 1 | 중심 $(\frac12,0)$, 반지름 1`,
  sol: String.raw`<p>배각으로 바꾸면 $x=\sin^2t=\dfrac{1-\cos2t}2,\ y=\sin t\cos t=\dfrac{\sin2t}2$.</p><p>그러면 $x-\frac12=-\frac{\cos2t}2,\ y=\frac{\sin 2t}2$ 이라 제곱해서 더하면 $\left(x-\frac12\right)^2+y^2=\frac14$.</p>`, ans: '② 중심 $(\\frac12,0)$, 반지름 $\\frac12$' })}

<h3><span class="sn">1.8</span>이차곡선 네 마리 (기본형만)</h3>
${h.table(['이름', '표준형', '특징'], [
  ['원', '$(x-a)^2+(y-b)^2=r^2$', '중심 $(a,b)$ 반지름 $r$'],
  ['타원', '$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$', '넓이 $\\pi ab$. $a>b$ 면 초점 $(\\pm c,0)$, $c^2=a^2-b^2$, 이심률 $e=\\frac ca$'],
  ['포물선', '$y^2=4px$', '초점 $(p,0)$, 준선 $x=-p$'],
  ['쌍곡선', '$\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$', '점근선 $y=\\pm\\frac bax$, $c^2=a^2+b^2$'],
])}
<p>$xy$ 항이 섞인 회전된 이차곡선($5x^2+2\sqrt2xy+4y^2=1$ 같은 것)은 16장 선형대수에서 고윳값으로 한 방에 처리한다. 지금은 표준형만 알아보면 된다.</p>

<div class="probs-h"><h3>연습문제 1</h3><span class="cnt">15문항</span></div>
${h.p({ q: String.raw`$f(x)=2x+3,\ g(x)=x^2$ 일 때 $(f\circ g)(2)$ 와 $(g\circ f)(2)$ 를 구하시오.`, ans: '$11,\ 49$', sol: String.raw`<p>$(f\circ g)(2)=f(g(2))=f(4)=11$. $(g\circ f)(2)=g(f(2))=g(7)=49$. 순서 바꾸면 값이 바뀐다.</p>` })}
${h.p({ q: String.raw`$f(x)=\dfrac{2x+1}{x-3}$ 의 역함수를 구하시오.`, ans: '$f^{-1}(x)=\\dfrac{3x+1}{x-2}$', sol: String.raw`<p>$y=\frac{2x+1}{x-3}$ 에서 $x,y$ 바꾸면 $x=\frac{2y+1}{y-3}$ → $xy-3x=2y+1$ → $y(x-2)=3x+1$.</p>` })}
${h.p({ q: String.raw`$\log_2 12-\log_2 3$ 의 값은?`, ans: '$2$', sol: String.raw`<p>$\log_2\frac{12}3=\log_2 4=2$.</p>` })}
${h.p({ q: String.raw`$e^{2\ln 3}$ 의 값은?`, ans: '$9$', sol: String.raw`<p>$2\ln3=\ln 9$ 이고 $e^{\ln 9}=9$.</p>` })}
${h.p({ q: String.raw`$\sin 75^\circ$ 의 값은?`, ans: '$\\dfrac{\\sqrt6+\\sqrt2}4$', sol: String.raw`<p>$\sin(45^\circ+30^\circ)=\frac{\sqrt2}2\cdot\frac{\sqrt3}2+\frac{\sqrt2}2\cdot\frac12$.</p>` })}
${h.p({ q: String.raw`$\tan\theta=2$ 일 때 $\cos2\theta$ 의 값은?`, ans: '$-\\dfrac35$', sol: String.raw`<p>$\cos2\theta=\dfrac{\cos^2\theta-\sin^2\theta}{\cos^2\theta+\sin^2\theta}=\dfrac{1-\tan^2\theta}{1+\tan^2\theta}=\dfrac{1-4}{1+4}$. 분모에 1을 몰래 넣는 기술, 자주 쓴다.</p>` })}
${h.p({ lv: 2, q: String.raw`$\sin^{-1}\!\left(\sin\dfrac{5\pi}6\right)$ 의 값은?`, ans: '$\\dfrac\\pi6$', sol: String.raw`<p>$\sin\frac{5\pi}6=\frac12$. 그런데 $\sin^{-1}$ 은 $[-\frac\pi2,\frac\pi2]$ 안의 각만 돌려준다. 그래서 $\frac{5\pi}6$ 이 아니라 $\frac\pi6$. 함정 문제.</p>` })}
${h.p({ q: String.raw`$\tan\!\left(\cos^{-1}\dfrac35\right)$ 의 값은?`, ans: '$\\dfrac43$', sol: String.raw`<p>밑변 3, 빗변 5, 높이 4인 직각삼각형.</p>` })}
${h.p({ q: String.raw`$\cosh(\ln 2)$ 의 값은?`, ans: '$\\dfrac54$', sol: String.raw`<p>$\frac{e^{\ln2}+e^{-\ln2}}2=\frac{2+\frac12}2=\frac54$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\sinh x=\dfrac34$ 을 만족하는 $x$ 는?`, ans: '$\\ln 2$', sol: String.raw`<p>$x=\sinh^{-1}\frac34=\ln\left(\frac34+\sqrt{\frac9{16}+1}\right)=\ln\left(\frac34+\frac54\right)=\ln2$.</p>` })}
${h.p({ q: String.raw`다음 중 기함수를 모두 고르시오. <br>(가) $x^3\sin x$ &nbsp; (나) $\ln\dfrac{1+x}{1-x}$ &nbsp; (다) $x\cos x$ &nbsp; (라) $e^{x^2}$`, ans: '(나), (다)', sol: String.raw`<p>(가) 기×기=우. (나) $x\to-x$ 하면 $\ln\frac{1-x}{1+x}=-\ln\frac{1+x}{1-x}$ → 기. (다) 기×우=기. (라) 우.</p>` })}
${h.p({ lv: 2, q: String.raw`$\tan^{-1}1+\tan^{-1}2+\tan^{-1}3$ 의 값은?`, ans: '$\\pi$', sol: String.raw`<p>$\tan(A+B)=\frac{\tan A+\tan B}{1-\tan A\tan B}$ 로 $\tan(\tan^{-1}2+\tan^{-1}3)=\frac{5}{1-6}=-1$. $\tan^{-1}2+\tan^{-1}3$ 은 $(\frac\pi2,\pi)$ 안에 있으니 $\frac{3\pi}4$. 여기에 $\frac\pi4$ 더하면 $\pi$.</p>` })}
${h.p({ q: String.raw`$0<x<\dfrac\pi2$ 에서 $\sin x\cos x=\dfrac14$ 의 해를 모두 구하시오.`, ans: '$\\dfrac\\pi{12},\\ \\dfrac{5\\pi}{12}$', sol: String.raw`<p>$\frac12\sin2x=\frac14$ → $\sin2x=\frac12$, $0<2x<\pi$ 이므로 $2x=\frac\pi6,\frac{5\pi}6$.</p>` })}
${h.p({ q: String.raw`타원 $\dfrac{x^2}{25}+\dfrac{y^2}9=1$ 의 넓이와 이심률을 구하시오.`, ans: '넓이 $15\\pi$, 이심률 $\\dfrac45$', sol: String.raw`<p>$a=5,\ b=3$ → 넓이 $\pi ab=15\pi$. $c=\sqrt{25-9}=4$ → $e=\frac45$.</p>` })}
${h.p({ lv: 2, q: String.raw`$x=2\cos t+1,\ y=3\sin t$ 가 나타내는 곡선으로 둘러싸인 넓이는?`, ans: '$6\\pi$', sol: String.raw`<p>$\left(\frac{x-1}2\right)^2+\left(\frac y3\right)^2=1$: 반축 2, 3인 타원. 넓이 $\pi\cdot2\cdot3$.</p>` })}
`
};
