module.exports = {
  id: 'c18', num: '18', part: 'PART D · 공학수학', title: '2계 선형 미분방정식', short: '특성방정식 · 미정계수 · 오일러',
  schools: { KU: '출제 없음', HY: '미방 35문항 중 11문항', CAU: '2025–26 매년 1문항' },
  lede: '2계 상수계수는 미방에서 제일 쉬운 점수다. 특성방정식 → 근 세 경우 → 우변 모양대로 추측. 이 세 걸음이 끝이다. 계수가 x 의 거듭제곱이면 오일러, 해 하나를 주면 계수 낮추기.',
  body: h => String.raw`
<h3><span class="sn">18.1</span>해의 구조 — 동차해 + 특수해</h3>
${h.box('key', '선형 방정식의 해 구조', String.raw`<p>$L[y]=y''+p(x)y'+q(x)y=f(x)$ 의 일반해 $=\underbrace{c_1y_1+c_2y_2}_{L[y]=0\text{ 의 일반해}}+\underbrace{y_p}_{\text{특수해 하나}}$</p><p>$y_1,y_2$ 가 독립 ⟺ 론스키안 $W=\begin{vmatrix}y_1&y_2\\y_1'&y_2'\end{vmatrix}\ne0$.</p><p><b>비동차 해 둘의 차는 동차해.</b> 해를 여러 개 주는 문제는 빼서 동차해를 뽑는다.</p>`)}
${h.ex({ src: 'HY 2024-54', q: String.raw`2계 선형 $L[y]=f(x)$ 의 세 해가 $y_1=2e^x+e^{x^2},\ y_2=3e^x+e^{x^2},\ y_3=4e^x+e^{x^2}+5e^{-x^3}$ 이다. $L[y]=f,\ y(0)=-3,\ y'(0)=1$ 의 해에 대해 $y(1)+y(-1)$ 은?`, choices: h.c`$-2e-4e^{-1}$ | $-2e-3e^{-1}$ | $-2e-e^{-1}$ | $-e-3e^{-1}$ | $-e-2e^{-1}$`,
  sol: String.raw`<p>차: $y_2-y_1=e^x$, $y_3-y_2=e^x+5e^{-x^3}$ → 동차해 $e^x,\ e^{-x^3}$. 특수해 $e^{x^2}$.</p><p>$y=e^{x^2}+Ae^x+Be^{-x^3}$. $y(0)=1+A+B=-3$, $y'(0)=0+A+0=1$ → $A=1,\ B=-5$.</p><p>$y(1)=e+e-5e^{-1}$, $y(-1)=e+e^{-1}-5e$. 합 $-2e-4e^{-1}$.</p>`, ans: '①' })}

<h3><span class="sn">18.2</span>상수계수 동차 — 특성방정식</h3>
${h.box('key', '$ay\'\'+by\'+cy=0$', String.raw`<p>$y=e^{rx}$ 넣으면 $ar^2+br+c=0$ (특성방정식).</p>`)}
${h.table(['근', '일반해'], [
  ['서로 다른 실근 $r_1,r_2$', '$c_1e^{r_1x}+c_2e^{r_2x}$'],
  ['중근 $r$', '$(c_1+c_2x)e^{rx}$ ← $x$ 하나 곱한다'],
  ['허근 $\\alpha\\pm\\beta i$', '$e^{\\alpha x}(c_1\\cos\\beta x+c_2\\sin\\beta x)$'],
])}
${h.plot({ x: [0, 10], y: [-1.2, 1.3], w: 560, h: 240, fns: [{ f: t => Math.exp(-0.15 * t) * Math.cos(2 * t), c: 1, label: '허근: 진동하며 감쇠', lx: 4.6, ly: 0.8 }, { f: t => (1 + 1.2 * t) * Math.exp(-1.2 * t), c: 2, label: '중근: 임계감쇠', lx: 1.6, ly: 0.95 }, { f: t => 1.3 * Math.exp(-0.4 * t) - 0.3 * Math.exp(-2 * t), c: 3, label: '실근 둘: 과감쇠', lx: 4.8, ly: 0.35 }], xt: [2, 4, 6, 8], cap: '용수철 $my\'\'+cy\'+ky=0$ 의 세 모습. 근이 허수면 흔들린다.' })}
${h.ex({ src: 'CAU 2025-28', q: String.raw`$h''+2h'-15h=0,\ h(0)=0,\ h'(0)=-1$ 일 때 $h(-1)$ 은?`, choices: h.c`$\frac18(e^{-5}-e^3)$ | $\frac18(e^5-e^{-3})$ | $\frac18(e^5-e^3)$ | $\frac18(e^{-5}-e^{-3})$`,
  sol: String.raw`<p>$r^2+2r-15=(r+5)(r-3)$. $h=Ae^{3x}+Be^{-5x}$. $A+B=0$, $3A-5B=-1$ → $A=-\frac18,\ B=\frac18$.</p><p>$h(-1)=-\frac18e^{-3}+\frac18e^5$.</p>`, ans: '②' })}

<h3><span class="sn">18.3</span>미정계수법 — 우변 모양대로 찍는다</h3>
${h.table(['우변 $f(x)$', '특수해 추측 $y_p$'], [
  ['$n$차 다항식', '$n$차 다항식 (계수 전부 미지수)'],
  ['$e^{kx}$', '$Ae^{kx}$'],
  ['$\\cos\\omega x$ 또는 $\\sin\\omega x$', '$A\\cos\\omega x+B\\sin\\omega x$ (둘 다!)'],
  ['$x^ne^{kx}$', '$(n\\text{차 다항식})e^{kx}$'],
  ['$e^{kx}\\cos\\omega x$', '$e^{kx}(A\\cos\\omega x+B\\sin\\omega x)$'],
])}
${h.box('warn', '공명 규칙', '<p>추측이 <b>동차해와 겹치면 $x$ 를 곱한다</b>. 중근과 겹치면 $x^2$. 이걸 빼먹으면 대입했을 때 $0=f$ 가 나와서 멘붕 온다. 한양대가 매년 이걸로 한 문제 낸다.</p>')}
${h.ex({ src: 'CAU 2026-19', q: String.raw`$u''+4u=t^3+1,\ u(0)=\frac12,\ u'(0)=\frac18$ 일 때 $u(1)$ 은?`, choices: h.c`$\frac14(\cos2+\sin2)+\frac18$ | $\frac14(\cos2-\sin2)+\frac18$ | $\frac14(\cos2+\sin2)+\frac3{32}$ | $\frac14(\cos2-\sin2)+\frac3{32}$`,
  sol: String.raw`<p>동차: $r=\pm2i$ → $c_1\cos2t+c_2\sin2t$. 특수: $at^3+bt^2+ct+d$ 대입: $6at+2b+4(at^3+bt^2+ct+d)=t^3+1$ → $a=\frac14,\ b=0,\ c=-\frac38,\ d=\frac14$.</p><p>$u(0)=c_1+\frac14=\frac12$ → $c_1=\frac14$. $u'(0)=2c_2-\frac38=\frac18$ → $c_2=\frac14$.</p><p>$u(1)=\frac14(\cos2+\sin2)+\frac14-\frac38+\frac14$.</p>`, ans: '①' })}
${h.ex({ src: 'HY 2025-52', q: String.raw`$y''+5y'+4y=6e^{-t},\ y(0)=2,\ y'(0)=3$ 일 때 $y(1)$ 은?`, choices: h.c`$3e^{-1}-e^{-4}$ | $5e^{-1}-e^{-4}$ | $3e^{-1}-2e^{-4}$ | $-3e^{-1}+e^{-4}$ | $-5e^{-1}+e^{-4}$`,
  sol: String.raw`<p>$r=-1,-4$. 우변 $e^{-t}$ 가 동차해 → <b>공명</b>: $y_p=Ate^{-t}$. 대입하면 (계수 정리) $3A=6$ → $A=2$.</p><p>빠른 공식: $y''+py'+qy=e^{kt}$ 에서 $k$ 가 단근이면 $y_p=\frac{te^{kt}}{P'(k)}$, $P(r)=r^2+5r+4$, $P'(-1)=3$ → $\frac{6}{3}te^{-t}$.</p><p>$y=c_1e^{-t}+c_2e^{-4t}+2te^{-t}$. $c_1+c_2=2$, $-c_1-4c_2+2=3$ → $c_2=-1,\ c_1=3$. $y(1)=5e^{-1}-e^{-4}$.</p>`, ans: '②' })}
${h.ex({ src: 'HY 2023-17', q: String.raw`$y''+2y'+y=e^{-t},\ y(0)=3,\ y'(0)=3$ 일 때 $y(1)$ 은?`, choices: h.c`$5e^{-1}$ | $\frac{13}2e^{-1}$ | $8e^{-1}$ | $\frac{19}2e^{-1}$ | $11e^{-1}$`,
  sol: String.raw`<p>중근 $-1$ 과 겹침 → $x^2$ 곱하기: $y_p=At^2e^{-t}$, $A=\frac12$ (중근이면 $\frac{t^2e^{kt}}{P''(k)}=\frac{t^2e^{-t}}2$).</p><p>$y=(3+Bt)e^{-t}+\frac{t^2}2e^{-t}$. $y'(0)=B-3=3$ → $B=6$. $y(1)=\left(3+6+\frac12\right)e^{-1}$.</p>`, ans: '④' })}
${h.ex({ src: 'HY 2024-53', q: String.raw`$y''+24y=\cos7t-\sin7t$ 의 특수해 $y_p=A\cos(7t-\alpha)$ 에 대해 $A+\alpha$ 는? $(-\pi<\alpha\le\pi)$`, choices: h.c`$-\frac{\sqrt2}{25}-\frac\pi4$ | $-\frac{\sqrt2}{25}+\frac\pi4$ | $\frac{\sqrt2}{25}-\frac\pi4$ | $-\frac{\sqrt7}{25}+\frac\pi4$ | $\frac{\sqrt7}{25}+\frac\pi4$`,
  sol: String.raw`<p>$\cos7t,\sin7t$ 는 $y''=-49y$ 라 $y_p=\frac{f}{24-49}=-\frac{\cos7t-\sin7t}{25}$.</p><p>$\cos7t-\sin7t=\sqrt2\cos\left(7t+\frac\pi4\right)$. 그래서 $y_p=-\frac{\sqrt2}{25}\cos\left(7t-\left(-\frac\pi4\right)\right)$: $A=-\frac{\sqrt2}{25},\ \alpha=-\frac\pi4$. (보기가 이 형태만 있다.)</p>`, ans: '①' })}

<h3><span class="sn">18.4</span>매개변수변환법 — 우변이 $\sec x,\ \ln x$ 처럼 못생겼을 때</h3>
${h.box('key', '매개변수변환 (론스키안 공식)', String.raw`<p>$y''+py'+qy=f$ (표준형: $y''$ 계수 1), 동차해 $y_1,y_2$, $W=y_1y_2'-y_2y_1'$:</p>$$y_p=-y_1\int\frac{y_2f}{W}dx+y_2\int\frac{y_1f}{W}dx$$`)}
${h.ex({ src: 'HY 2025-55', q: String.raw`$y''+y=\sec x\ \left(-\frac\pi2<x<\frac\pi2\right),\ y(0)=\ln2,\ y\left(\frac\pi3\right)=\frac{\sqrt3}6\pi$ 일 때 $y\left(\frac\pi4\right)$ 는?`, choices: h.c`$\frac{\sqrt2}4\ln2+\frac{\sqrt2}8\pi$ | $\frac{\sqrt2}4\ln2+\frac{\sqrt2}6\pi$ | $\frac{\sqrt2}2\ln2+\frac{\sqrt2}8\pi$ | $\frac{\sqrt2}2\ln2+\frac{\sqrt2}6\pi$ | $\frac{\sqrt2}6\ln2+\frac{\sqrt2}8\pi$`,
  sol: String.raw`<p>$y_1=\cos x,\ y_2=\sin x,\ W=1$. $y_p=-\cos x\int\sin x\sec x\,dx+\sin x\int\cos x\sec x\,dx=\cos x\ln(\cos x)+x\sin x$.</p><p>$y=c_1\cos x+c_2\sin x+\cos x\ln\cos x+x\sin x$. $y(0)=c_1=\ln2$. $y(\frac\pi3)=\frac{\ln2}2+\frac{\sqrt3}2c_2+\frac12\ln\frac12+\frac{\sqrt3\pi}6$ → $c_2=0$.</p><p>$y(\frac\pi4)=\frac{\sqrt2}2\ln2+\frac{\sqrt2}2\ln\frac{\sqrt2}2+\frac{\sqrt2\pi}8=\frac{\sqrt2}2\cdot\frac12\ln2+\frac{\sqrt2\pi}8$.</p>`, ans: '①' })}

<h3><span class="sn">18.5</span>코시–오일러 — 계수가 $x^2,\ x,\ 1$</h3>
${h.box('key', '$x^2y\'\'+axy\'+by=0$', String.raw`<p>$y=x^r$ 넣으면 $r(r-1)+ar+b=0$. 근에 따라 $x^{r_1},x^{r_2}$ / $x^r,\ x^r\ln x$ / $x^\alpha\cos(\beta\ln x),\ x^\alpha\sin(\beta\ln x)$.</p><p>원리: $x=e^t$ 로 바꾸면 상수계수가 된다. 비동차($=\ln x$ 등)는 이 치환으로 18.3 방식. $(x-c)^2$ 꼴이면 $x-c$ 를 새 변수로.</p>`)}
${h.ex({ src: 'HY 2025-53', q: String.raw`$x^2y''-15xy'+68y=0\ (x>0),\ y(1)=3,\ y'(1)=30$ 일 때 $y(e^{\pi/8})$ 는?`, choices: h.c`$\sqrt2e^\pi$ | $2\sqrt2e^\pi$ | $3\sqrt2e^\pi$ | $4\sqrt2e^\pi$ | $5\sqrt2e^\pi$`,
  sol: String.raw`<p>$r(r-1)-15r+68=r^2-16r+68=0$ → $r=8\pm2i$. $y=x^8\left[A\cos(2\ln x)+B\sin(2\ln x)\right]$.</p><p>$y(1)=A=3$. $y'(1)=8A+2B=30$ → $B=3$. $x=e^{\pi/8}$: $x^8=e^\pi$, $2\ln x=\frac\pi4$ → $e^\pi\cdot3\sqrt2$.</p>`, ans: '③' })}
${h.ex({ src: 'HY 2023-19', q: String.raw`$x^2y''+xy'+y=\ln x\ (x>0),\ y(1)=e,\ y(e^{\pi/2})=\pi$ 일 때 $y(e^\pi)$ 는?`, choices: h.c`$\pi-2e$ | $\pi-e$ | $\pi+2e$ | $2\pi+e$ | $2\pi+2e$`,
  sol: String.raw`<p>$x=e^t$: $\ddot y+y=t$ → $y=A\cos t+B\sin t+t$.</p><p>$t=0$: $A=e$. $t=\frac\pi2$: $B+\frac\pi2=\pi$ → $B=\frac\pi2$. $t=\pi$: $-e+\pi$.</p>`, ans: '②' })}

<h3><span class="sn">18.6</span>해 하나를 알 때 — 계수 낮추기 · 완전형</h3>
${h.box('key', '두 기술', String.raw`<p><b>계수 낮추기</b>: 해 $y_1$ 을 알면 $y_2=y_1\displaystyle\int\frac{e^{-\int p\,dx}}{y_1^2}dx$ (표준형 $y''+py'+qy=0$).</p><p><b>눈으로 해 찾기</b>: 계수 합이 0 이면 $e^x$, $p+xq=0$ 이면 $x$, $1-p+q=0$ 이면 $e^{-x}$ 가 해.</p><p><b>완전형 2계</b>: $P y''+Qy'+Ry$ 에서 $P''-Q'+R=0$ 이면 $\big(Py'+(Q-P')y\big)'$ 로 적분 한 번에 1계로 떨어진다.</p>`)}
${h.ex({ src: 'HY 2026-20', q: String.raw`$t^2x''+t(t-1)x'-tx=0\ (t>0),\ x(1)=x'(1)=1$ 일 때 $x(2)$ 는?`, choices: h.c`$e^{-2}+1$ | $e^{-2}+2$ | $e^{-2}+3$ | $e^{-1}+1$ | $e^{-1}+2$`,
  sol: String.raw`<p>$t$ 로 나누면 $tx''+(t-1)x'-x=0$. 눈으로: $x=t-1$ 대입 → $0+(t-1)-(t-1)=0$ ✓. $x=e^{-t}$ → $te^{-t}-(t-1)e^{-t}-e^{-t}=0$ ✓.</p><p>$x=A(t-1)+Be^{-t}$. $x(1)=Be^{-1}=1$ → $B=e$. $x'(1)=A-1=1$ → $A=2$. $x(2)=2+e^{-1}$.</p>`, ans: '⑤' })}
${h.ex({ src: 'HY 2025-56', q: String.raw`$(x^2-x)y''+(3x-1)y'+y=0\ (0<x<1),\ y\left(\frac12\right)=0,\ y'\left(\frac12\right)=-12$ 일 때 $y\left(\frac14\right)$ 는?`, choices: h.c`$\ln2$ | $2\ln2$ | $3\ln2$ | $4\ln2$ | $5\ln2$`,
  sol: String.raw`<p>$P=x^2-x,\ Q=3x-1,\ R=1$: $P''-Q'+R=2-3+1=0$ → 완전형. $\big((x^2-x)y'+(3x-1-(2x-1))y\big)'=\big((x^2-x)y'+xy\big)'=0$.</p><p>$(x^2-x)y'+xy=C$, $x=\frac12$: $\left(-\frac14\right)(-12)+0=3$. 1계 선형: $y'+\frac{y}{x-1}=\frac3{x(x-1)}$, $\mu=x-1$: $((x-1)y)'=\frac3x$ → $(x-1)y=3\ln x+D$, $x=\frac12$ → $D=3\ln2$.</p><p>$x=\frac14$: $-\frac34y=3\ln\frac14+3\ln2=-3\ln2$ → $y=4\ln2$.</p>`, ans: '④' })}

<div class="probs-h"><h3>연습문제 18</h3><span class="cnt">14문항</span></div>
${h.p({ q: String.raw`$y''-3y'+2y=0,\ y(0)=1,\ y'(0)=0$`, ans: '$y=2e^x-e^{2x}$', sol: String.raw`<p>$r=1,2$.</p>` })}
${h.p({ q: String.raw`$y''+4y'+4y=0,\ y(0)=1,\ y'(0)=0$`, ans: '$y=(1+2x)e^{-2x}$', sol: String.raw`<p>중근 $-2$.</p>` })}
${h.p({ q: String.raw`$y''+2y'+5y=0$ 의 일반해`, ans: '$e^{-x}(c_1\\cos2x+c_2\\sin2x)$', sol: String.raw`<p>$r=-1\pm2i$.</p>` })}
${h.p({ q: String.raw`$y''-y=e^{2x}$ 의 특수해`, ans: '$\\frac13e^{2x}$', sol: String.raw`<p>$\frac{e^{2x}}{P(2)}=\frac{e^{2x}}{3}$.</p>` })}
${h.p({ q: String.raw`$y''-y=e^x$ 의 특수해`, ans: '$\\frac12xe^x$', sol: String.raw`<p>공명: $\frac{xe^x}{P'(1)}=\frac{xe^x}2$.</p>` })}
${h.p({ q: String.raw`$y''+y=\sin x$ 의 특수해`, ans: '$-\\frac12x\\cos x$', sol: String.raw`<p>공명. $y_p=x(A\cos x+B\sin x)$ 대입: $-2A\sin x+2B\cos x=\sin x$.</p>` })}
${h.p({ src: 'HY 2026-19', q: String.raw`$y''-y=2xe^x,\ y(0)=2,\ y'(0)=\frac12$ 일 때 $y(2)$`, choices: h.c`$\frac12e^2+e^{-2}$ | $\frac32e^2+\frac12e^{-2}$ | $\frac32e^2+e^{-2}$ | $\frac52e^2+\frac12e^{-2}$ | $\frac52e^2+e^{-2}$`, ans: '④', sol: String.raw`<p>공명(단근 1) → $y_p=(Ax^2+Bx)e^x$. 대입: $(4Ax+2A+2B)e^x=2xe^x$ → $A=\frac12,\ B=-\frac12$. $y=c_1e^x+c_2e^{-x}+\frac12(x^2-x)e^x$. $c_1+c_2=2$, $c_1-c_2-\frac12=\frac12$ → $c_1=\frac32,\ c_2=\frac12$. $y(2)=\frac32e^2+\frac12e^{-2}+e^2$.</p>` })}
${h.p({ src: 'HY 2024-55', lv: 2, q: String.raw`$y''-4y=t+te^t,\ y(0)=-\frac29,\ y'(0)=\frac49$ 일 때 $y(1)$`, choices: h.c`$\frac3{16}(e^2-e^{-2})-\frac49e-\frac14$ | $\frac5{16}(e^2-e^{-2})-\frac49e-\frac14$ | $\frac5{16}(e^2-e^{-2})-\frac59e-\frac14$ | $\frac7{16}(e^2-e^{-2})-\frac49e-\frac14$ | $\frac7{16}(e^2-e^{-2})-\frac59e-\frac14$`, ans: '③', sol: String.raw`<p>$t$ 에 대해 $-\frac t4$. $te^t$ 에 대해 $(At+B)e^t$: $(2A+At+B)-4(At+B)=t$ 정리 → $-3A=1$, $2A-3B=0$ → $A=-\frac13,\ B=-\frac29$. $y=c_1e^{2t}+c_2e^{-2t}-\frac t4-\left(\frac t3+\frac29\right)e^t$.</p><p>$y(0)$: $c_1+c_2-\frac29=-\frac29$ → $c_1+c_2=0$. $y'(0)=2c_1-2c_2-\frac14-\frac13-\frac29=\frac49$ → $c_1-c_2=\frac58$ → $c_1=\frac5{16}$. $y(1)=\frac5{16}(e^2-e^{-2})-\frac14-\frac59e$.</p>` })}
${h.p({ src: 'HY 2024-52', q: String.raw`$(x-1)^2y''-3(x-1)y'+3y=0,\ y(2)=1,\ y(3)=14$ 일 때 $y(0)+y(4)$`, choices: h.c`$33$ | $40$ | $43$ | $50$ | $53$`, ans: '④ $50$', sol: String.raw`<p>$u=x-1$ 로 오일러: $r^2-4r+3=0$ → $y=Au+Bu^3$. $A+B=1$, $2A+8B=14$ → $A=-1,B=2$. $y(0)$: $u=-1$ → $1-2=-1$. $y(4)$: $u=3$ → $-3+54=51$.</p>` })}
${h.p({ src: 'HY 2023-20', lv: 2, q: String.raw`$ty''-ty'+y=2,\ y(0)=2,\ y'(0)=-4$ 일 때 $y(-5)+y(5)$`, choices: h.c`$-2$ | $0$ | $2$ | $4$ | $6$`, ans: '④ $4$', sol: String.raw`<p>상수 2 가 특수해. 동차 $ty''-ty'+y=0$ 에 $y=t$ 가 해 ($0-t+t=0$). 다른 해는 $t\int\frac{e^t}{t^2}dt$ 꼴로 $t=0$ 에서 매끄럽지 않다. 초기조건이 $t=0$ 에서 주어졌으니 해는 $y=2+ct$, $c=-4$. $y(-5)+y(5)=22-18$.</p>` })}
${h.p({ src: 'HY 2024-60', lv: 3, q: String.raw`$y'''-7y'+6y=0,\ y(0)=1,y'(0)=2,y''(0)=3$. $\mathbf Y=(y,y',y'')^T$ 에 대해 $\mathbf Y'=A\mathbf Y$ 일 때 $20\,y(1)\det A=pe+qe^2+re^{-3}$. $|p+q+r|$ 를 구하시오.`, ans: '$120$', sol: String.raw`<p>$r^3-7r+6=(r-1)(r-2)(r+3)$. $y=ae^t+be^{2t}+ce^{-3t}$: $a+b+c=1,\ a+2b-3c=2,\ a+4b+9c=3$ → $a=\frac14,\ b=\frac45,\ c=-\frac1{20}$.</p><p>$A=\begin{pmatrix}0&1&0\\0&0&1\\-6&7&0\end{pmatrix}$, $\det A=-6$ (1행 전개: $-1\cdot\big(0\cdot0-1\cdot(-6)\big)$).</p><p>$20\cdot(-6)\cdot y(1)=-120\left(\frac e4+\frac{4e^2}5-\frac{e^{-3}}{20}\right)=-30e-96e^2+6e^{-3}$. $|-30-96+6|=120$.</p>` })}
${h.p({ q: String.raw`$x^2y''-2xy'+2y=0$ 의 일반해`, ans: '$c_1x+c_2x^2$', sol: String.raw`<p>$r(r-1)-2r+2=0$ → $r=1,2$.</p>` })}
${h.p({ q: String.raw`$x^2y''+3xy'+y=0$ 의 일반해`, ans: '$\\frac{c_1+c_2\\ln x}{x}$', sol: String.raw`<p>$r^2+2r+1=0$ 중근 $-1$.</p>` })}
${h.p({ lv: 2, q: String.raw`$y_1=x$ 가 $x^2y''-xy'+y=0$ 의 해일 때 다른 해`, ans: '$x\\ln x$', sol: String.raw`<p>표준형 $p=-\frac1x$, $e^{-\int p}=x$. $y_2=x\int\frac{x}{x^2}dx=x\ln x$. (오일러로 봐도 중근 $r=1$.)</p>` })}
`
};
