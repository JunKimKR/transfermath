module.exports = {
  id: 'c17', num: '17', part: 'PART D · 공학수학', title: '1계 미분방정식', short: '분리 · 선형 · 완전 · 베르누이 · 동차',
  schools: { KU: '출제 없음 (보험)', HY: '미방 35문항 중 13문항', CAU: '2025–26 매년 1문항' },
  lede: '미분방정식은 선대보다 훨씬 기계적이다. 식을 보고 "무슨 형태인지" 알아보는 순간 풀이 절차가 정해진다. 1계는 형태가 여섯 개뿐이고, 나머지는 5장 적분이다.',
  body: h => String.raw`
<h3><span class="sn">17.1</span>미분방정식이 뭔데</h3>
<p>미지수가 숫자가 아니라 <b>함수</b>고, 조건이 그 함수의 도함수로 주어진 방정식. "$y'=y$ 인 함수는?" 답은 $y=Ce^x$ — 해가 하나가 아니라 곡선 가족이다.</p>
${h.slope({ f: (x, y) => y - x, x: [-3, 3], y: [-2.5, 3.5], sols: [{ x: 0, y: 1, c: 2 }, { x: 0, y: 0.5, c: 1 }, { x: 0, y: 1.6, c: 3 }], cap: '$y\'=y-x$ 의 방향장. 각 점의 짧은 선이 그 점에서의 기울기. 해곡선은 이 선들을 따라 흐른다. 일반해 $y=x+1+Ce^x$ 중 $C=0$ 이 빨간 직선.' })}
${h.box('key', '용어 넷', '<p><b>계수(order)</b>: 가장 높은 도함수 차수. <b>일반해</b>: 임의상수가 계수만큼 든 해. <b>초기조건</b>: $y(0)=3$ 처럼 상수를 정하는 조건. <b>선형</b>: $y,y\',y\'\',\\ldots$ 에 대해 1차 (서로 곱하거나 제곱하지 않음), 계수는 $x$ 의 함수여도 된다.</p>')}
<div class="wg" data-w="field"><div class="wg-h">직접 돌려 보기 · 방향장 (그림을 누르면 그 점을 지나는 해곡선)</div><canvas data-ratio="0.62" aria-label="방향장"></canvas>
<div class="ctl"><label>방정식 <select><option value="a">y′ = y − x</option><option value="b">y′ = xy</option><option value="c">y′ = y(2 − y) (로지스틱)</option><option value="d">y′ = −x / y (원)</option></select></label><button type="button">곡선 지우기</button></div></div>

<h3><span class="sn">17.2</span>판별 순서도</h3>
${h.flow([
  { q: '$y\'=f(x)g(y)$ 로 쪼개지나? (항 네 개면 인수분해 시도)', a: '분리형 (17.3)' },
  { q: '$y\'+P(x)y=Q(x)$ 꼴인가? ($y$ 가 1차)', a: '선형 → 적분인자 (17.4)' },
  { q: '$M\\,dx+N\\,dy=0$ 이고 $M_y=N_x$?', a: '완전형 (17.5)' },
  { q: '$y\'+Py=Qy^n$?', a: '베르누이 $v=y^{1-n}$ (17.6)' },
  { q: '모든 항의 차수가 같은가? $y\'=F(y/x)$', a: '동차형 $y=vx$ (17.7)' },
  { q: '$y\'=f(ax+by+c)$?', a: '$u=ax+by+c$ 치환' },
], '1계 판별 순서. 위에서부터 첫 "예"에서 멈춘다. 여섯 개 다 아니면 식 정리하다 틀린 거다.')}

<h3><span class="sn">17.3</span>분리형</h3>
${h.box('key', '분리형', String.raw`<p>$\dfrac{dy}{dx}=f(x)g(y)$ → $\displaystyle\int\frac{dy}{g(y)}=\int f(x)\,dx+C$. $y$ 는 왼쪽, $x$ 는 오른쪽으로 몰고 양변 적분.</p>`)}
${h.box('pat', '항이 네 개', '<p>$4+6x+2y+3xy$ 처럼 항이 네 개면 <b>묶어서 곱</b>이 되는지 본다: $=2(2+3x)+y(2+3x)=(2+3x)(2+y)$. 한양대가 이 모양을 2022, 2024 두 번 냈다.</p>')}
${h.ex({ src: 'HY 2022-26', q: String.raw`개체수 $P(t)$ 가 $\dfrac{dP}{dt}=1+t^2+P+t^2P,\ P(0)=10$ 을 만족한다. $P(3)=\alpha e^\beta+\gamma$ 일 때 $\alpha+\beta+\gamma$ ($\alpha,\beta,\gamma$ 정수)`,
  sol: String.raw`<p>$=(1+t^2)(1+P)$. $\ln|1+P|=t+\frac{t^3}3+C$, $P(0)=10$ → $1+P=11e^{t+t^3/3}$.</p><p>$P(3)=11e^{12}-1$. $11+12-1=22$.</p>`, ans: '$22$' })}
${h.ex({ src: 'HY 2024-50', q: String.raw`$\dfrac{dy}{dx}=4+6x+2y+3xy,\ y(0)=3$ 일 때 $y(1)$ 은?`, choices: h.c`$4e^{7/3}-1$ | $5e^{7/3}-2$ | $6e^{7/3}-3$ | $4e^{8/3}-1$ | $5e^{8/3}-2$`,
  sol: String.raw`<p>$(2+3x)(2+y)$. $\ln|2+y|=2x+\frac32x^2+C$, $y(0)=3$ → $2+y=5e^{2x+\frac32x^2}$.</p><p>$y(1)=5e^{7/2}-2$. <b>인쇄된 보기에는 $e^{7/2}$ 가 없다</b> (지수 오타로 보인다). 구조($5e^{\square}-2$)가 맞는 건 ②⑤인데 분모 3 쪽이 출제 의도로 추정된다. 실전에서 이러면 구조 맞는 보기 고르고 넘어간다. 계산을 의심하며 시간 쓰지 마라.</p>`, ans: '계산값 $5e^{7/2}-2$ (보기 오류)' })}
${h.ex({ src: 'CAU 2026-23', q: String.raw`$\dfrac{dx}{dt}=k(x-a)(x-b),\ x(0)=0\ (0<a<b,\ k>0)$ 의 해는?`, choices: h.c`$\frac{ab[1-e^{-k(b-a)t}]}{a-be^{-k(b-a)t}}$ | $\frac{ab[1-e^{-k(b-a)t}]}{a+be^{-k(b-a)t}}$ | $\frac{ab[1-e^{-k(b-a)t}]}{b-ae^{-k(b-a)t}}$ | $\frac{ab[1-e^{-k(b-a)t}]}{b+ae^{-k(b-a)t}}$`,
  sol: String.raw`<p>검산만으로 푼다. $t=0$: 네 개 다 분자 0 이라 통과. $t\to\infty$: $x$ 는 평형점으로 가야 한다. $x'=k(x-a)(x-b)$ 에서 $0<x<a$ 면 $x'>0$ 이라 $a$ 쪽으로 올라가서 멈춘다. 보기의 극한: ① $\frac{ab}{a}=b$ ② $b$ ③ $\frac{ab}b=a$ ④ $a$ → ③④ 남음.</p><p>④ 는 분모가 $b+a$ 로 시작해 $t=0$ 에서 미분하면 부호 확인: $x'(0)=kab>0$. ③: 분자 $\approx abk(b-a)t$, 분모 $b-a$ → $x\approx abkt$ ✓. ④: 분모 $a+b$ → $x\approx\frac{abk(b-a)}{a+b}t$ ✗.</p>`, ans: '③' })}

<h3><span class="sn">17.4</span>선형 1계 — 적분인자</h3>
${h.box('key', '적분인자 3줄', String.raw`<ol class="steps"><li><b>표준형</b>으로: $y'$ 의 계수를 1로 (나눈다!). $y'+P(x)y=Q(x)$.</li><li>적분인자 $\mu=e^{\int P\,dx}$ (상수 안 붙임).</li><li>$(\mu y)'=\mu Q$ → $y=\dfrac1\mu\left(\int\mu Q\,dx+C\right)$.</li></ol><p>왜 되나: $(\mu y)'=\mu y'+\mu'y=\mu(y'+Py)$ 이 되려면 $\mu'=\mu P$. 곱의 미분을 거꾸로 만든 것.</p>`)}
${h.box('warn', '표준형부터', '<p>$t^2x\'+2(1+t)x=\\cdots$ 에서 $P=2(1+t)$ 로 읽으면 끝난다. $t^2$ 으로 나눠서 $P=\\frac{2(1+t)}{t^2}$, <b>우변도 같이 나눈다</b>.</p>')}
${h.ex({ src: 'CAU 2025-18', q: String.raw`$(x^2+1)f'(x)+4xf(x)=x,\ f(2)=1$ 일 때 $f(0)$ 은?`, choices: h.c`$1$ | $\frac{79}4$ | $19$ | $25$`,
  sol: String.raw`<p>표준형: $f'+\frac{4x}{x^2+1}f=\frac{x}{x^2+1}$. $\mu=e^{2\ln(x^2+1)}=(x^2+1)^2$.</p><p>$\big((x^2+1)^2f\big)'=x(x^2+1)$ → $(x^2+1)^2f=\frac{(x^2+1)^2}4+C$. $x=2$: $25=\frac{25}4+C$ → $C=\frac{75}4$.</p><p>$x=0$: $f(0)=\frac14+\frac{75}4=19$.</p>`, ans: '③ $19$' })}
${h.ex({ src: 'HY 2022-17', q: String.raw`$t^2x'(t)+2(1+t)x(t)=\dfrac1{t^2}e^{2/t},\ x(1)=2e^2$ 일 때 $x(2)$ 는?`, choices: h.c`$\frac38e$ | $\frac12e$ | $\frac58e$ | $\frac34e$ | $\frac78e$`,
  sol: String.raw`<p>표준형 $x'+\left(\frac2{t^2}+\frac2t\right)x=\frac{e^{2/t}}{t^4}$. $\int P=-\frac2t+2\ln t$ → $\mu=t^2e^{-2/t}$.</p><p>$(\mu x)'=t^2e^{-2/t}\cdot\frac{e^{2/t}}{t^4}=\frac1{t^2}$ → $t^2e^{-2/t}x=-\frac1t+C$. $t=1$: $e^{-2}\cdot2e^2=2=-1+C$ → $C=3$.</p><p>$t=2$: $4e^{-1}x=\frac52$ → $x=\frac58e$. 우변의 $e^{2/t}$ 가 적분인자와 딱 상쇄되게 설계됐다. 적분이 단순해지면 맞게 가는 중이라는 신호.</p>`, ans: '③' })}
${h.ex({ src: 'HY 2023-21', q: String.raw`$y'=0.02y+10^5\sin t,\ y(0)=10^6$ 일 때 $\displaystyle\lim_{t\to\infty}\frac{y(t)}{10^5e^{0.02t}}$ 는?`, choices: h.c`$\frac{27450}{2503}$ | $\frac{27485}{2503}$ | $\frac{27485}{2501}$ | $\frac{27500}{2501}$ | $\frac{27510}{2501}$`,
  sol: String.raw`<p>해 = $Ce^{0.02t}+y_p$, $y_p$ 는 $\sin,\cos$ 조합 (유계). $e^{0.02t}$ 로 나누면 $y_p$ 는 사라져서 극한 $=\frac{C}{10^5}$.</p><p>$y_p=a\sin t+b\cos t$ 대입: $a\cos t-b\sin t=0.02a\sin t+0.02b\cos t+10^5\sin t$ → $a=0.02b$, $-b=0.02a+10^5$ → $b=-\frac{10^5}{1.0004}$.</p><p>$y(0)=C+b=10^6$ → $\frac C{10^5}=10+\frac1{1.0004}=10+\frac{2500}{2501}=\frac{27510}{2501}$.</p>`, ans: '⑤' })}

<h3><span class="sn">17.5</span>완전형</h3>
${h.box('key', '완전형 = 퍼텐셜 찾기 (12장 보존장과 같은 기술)', String.raw`<p>$M\,dx+N\,dy=0$ 이고 $M_y=N_x$ 면 $F_x=M,\ F_y=N$ 인 $F$ 가 있고 해는 $F(x,y)=C$.</p><p>$M$ 을 $x$ 로, $N$ 을 $y$ 로 각각 적분해서 <b>겹치는 항은 한 번만</b> 모은다.</p><p>완전형이 아닐 때: $\frac{M_y-N_x}{N}$ 이 $x$ 만의 함수면 $\mu(x)=e^{\int\frac{M_y-N_x}Ndx}$ 를 곱하면 완전형.</p>`)}
${h.ex({ src: 'HY 2023-16', q: String.raw`$3x^2+4xy+(2y+2x^2)\dfrac{dy}{dx}=0,\ y(0)=1$ 일 때 $\{y(2)\}^2+8y(2)$ 는?`, choices: h.c`$-12$ | $-7$ | $-2$ | $3$ | $8$`,
  sol: String.raw`<p>$M=3x^2+4xy,\ N=2y+2x^2$, $M_y=4x=N_x$ ✓.</p><p>$\int M\,dx=x^3+2x^2y$, $\int N\,dy=y^2+2x^2y$ → $F=x^3+2x^2y+y^2$. $y(0)=1$ → $F=1$.</p><p>$x=2$: $8+8y+y^2=1$ → $y^2+8y=-7$. 묻는 식이 그대로 나온다. $y$ 를 구할 필요 없다.</p>`, ans: '② $-7$' })}

<h3><span class="sn">17.6</span>베르누이</h3>
${h.box('key', '베르누이 $y\'+Py=Qy^n$', String.raw`<p>$v=y^{1-n}$ 으로 두면 선형이 된다: $v'+(1-n)Pv=(1-n)Q$.</p><p>자주: $n=2$ → $v=\frac1y$, $n=3$ → $v=y^{-2}$, $n=-3$ → $v=y^4$.</p>`)}
${h.ex({ src: 'HY 2025-59', q: String.raw`$y'+\dfrac{4y}x=3y^2\ (x>0),\ y(1)=\frac13$ 일 때 $y(2)=\frac qp$ ($p,q$ 서로소). $p+q$ 를 구하시오.`,
  sol: String.raw`<p>$n=2$, $v=\frac1y$: $v'-\frac4xv=-3$. $\mu=x^{-4}$: $(x^{-4}v)'=-3x^{-4}$ → $x^{-4}v=x^{-3}+C$ → $v=x+Cx^4$.</p><p>$v(1)=3$ → $C=2$. $v(2)=2+32=34$, $y(2)=\frac1{34}$.</p>`, ans: '$35$' })}
${h.ex({ src: 'HY 2026-18', q: String.raw`$\dfrac{dy}{dx}+xy=\dfrac{2x}{e^{x^2}y^3},\ y(0)=2$ 일 때 $\{y(3)\}^4$ 은?`, choices: h.c`$4e^{-9}+12e^{-18}$ | $4e^{-9}+12e^{-14}$ | $3e^{-4}+8e^{-12}$ | $3e^{-4}+9e^{-10}$ | $6e^{-9}+18e^{-12}$`,
  sol: String.raw`<p>$n=-3$, $v=y^4$: $v'=4y^3y'=-4xv+8xe^{-x^2}$. $\mu=e^{2x^2}$: $(e^{2x^2}v)'=8xe^{x^2}$ → $e^{2x^2}v=4e^{x^2}+C$, $v(0)=16$ → $C=12$.</p><p>$v=4e^{-x^2}+12e^{-2x^2}$, $x=3$: $4e^{-9}+12e^{-18}$. 묻는 게 $y^4=v$ 라 그대로 답.</p>`, ans: '①' })}

<h3><span class="sn">17.7</span>동차형과 치환</h3>
${h.box('key', '동차형 $y\'=F(y/x)$', String.raw`<p>$y=vx$ → $y'=v+xv'$ → $v+xv'=F(v)$ → 분리형 $\dfrac{dv}{F(v)-v}=\dfrac{dx}x$.</p><p>알아보는 법: 분자·분모 모든 항의 차수가 같다 ($\frac{2t^2+y^2}{ty}$ 는 전부 2차).</p>`)}
${h.ex({ src: 'HY 2022-19', q: String.raw`$y'=\dfrac{2t^2+y^2}{ty},\ y(1)=6$ 일 때 $y(e)$ 는?`, choices: h.c`$e\sqrt6$ | $e\sqrt{10}$ | $2e\sqrt6$ | $2e\sqrt{10}$ | $3e\sqrt6$`,
  sol: String.raw`<p>$y=vt$: $v+tv'=\frac2v+v$ → $v\,dv=\frac{2dt}t$ → $v^2=4\ln t+C$, $v(1)=6$ → $C=36$.</p><p>$t=e$: $v^2=40$, $y=e\sqrt{40}=2e\sqrt{10}$.</p>`, ans: '④' })}
${h.ex({ src: 'HY 2024-51', q: String.raw`$y\dfrac{dy}{dx}=3x+\dfrac{y^2}x,\ y(1)=5$ 일 때 $y(e)$ 는?`, choices: h.c`$\sqrt{21}e$ | $\sqrt{23}e$ | $\sqrt{26}e$ | $\sqrt{29}e$ | $\sqrt{31}e$`,
  sol: String.raw`<p>$yy'$ 이 보이면 $u=y^2$ ($u'=2yy'$): $u'=6x+\frac{2u}x$ → 선형. $\mu=x^{-2}$: $(u/x^2)'=\frac6x$ → $u=x^2(6\ln x+25)$.</p><p>$u(e)=31e^2$.</p>`, ans: '⑤' })}

<h3><span class="sn">17.8</span>응용: 성장 · 로지스틱 · 혼합</h3>
${h.box('key', '모델 셋', String.raw`<p><b>지수</b> $y'=ky$ → $y=y_0e^{kt}$. 반감기 $\frac{\ln2}{|k|}$. 뉴턴 냉각 $T'=-k(T-T_s)$ → $T=T_s+(T_0-T_s)e^{-kt}$.</p><p><b>로지스틱</b> $P'=kP\left(1-\frac PK\right)$ → $P=\dfrac{K}{1+Ae^{-kt}},\ A=\dfrac{K-P_0}{P_0}$.</p><p><b>혼합 탱크</b>: $\dfrac{dQ}{dt}=(\text{들어오는 농도}\times\text{유입량})-\dfrac{Q}{V(t)}\times\text{유출량}$. $V$ 가 변하면 $V(t)=V_0+(\text{유입}-\text{유출})t$.</p>`)}
${h.plot({ x: [0, 12], y: [0, 5.5], w: 520, h: 250, fns: [{ f: t => 5 / (1 + 49 * Math.exp(-0.8 * t)), c: 1, label: 'P(t)', lx: 7.5, ly: 4.3 }, { f: () => 5, c: 2, dash: 1, thin: 1, label: 'K (수용한계)', lx: 0.3, ly: 5.2 }], xt: [2, 4, 6, 8, 10], cap: '로지스틱 곡선. 처음엔 지수처럼 크다가 $K$ 에 다가가며 눕는다. 변곡점은 $P=\\frac K2$.' })}
${h.ex({ src: 'HY 2026-25', q: String.raw`곰 50마리를 방사, 5년 후 100마리. $\dfrac{dP}{dt}=kP\left(1-\dfrac P{5000}\right)$ 일 때 10년 후 개체수를 구하시오.`,
  sol: String.raw`<p>$A=\frac{5000-50}{50}=99$. $P(5)=100$: $1+99e^{-5k}=50$ → $e^{-5k}=\frac{49}{99}$.</p><p>$P(10)=\dfrac{5000}{1+99\left(\frac{49}{99}\right)^2}=\dfrac{5000}{1+\frac{2401}{99}}=\dfrac{5000\cdot99}{2500}=198$.</p>`, ans: '$198$' })}
${h.ex({ src: 'HY 2025-61', q: String.raw`30 L 수조에 소금 2 kg 이 녹은 물 10 L. 농도 0.1 kg/L 인 물이 3 L/min 로 들어오고 잘 섞인 물이 2 L/min 로 나간다. 물이 20 L 가 되는 순간 소금의 양이 $\frac qp$ kg. $p+q$ 를 구하시오.`,
  sol: String.raw`<p>$V=10+t$, 20 L 는 $t=10$. $Q'=0.3-\frac{2Q}{10+t}$, $\mu=(10+t)^2$: $\big((10+t)^2Q\big)'=0.3(10+t)^2$ → $(10+t)^2Q=0.1(10+t)^3+C$.</p><p>$t=0$: $200=100+C$ → $C=100$. $t=10$: $400Q=800+100$ → $Q=\frac94$.</p>`, ans: '$13$' })}

<div class="probs-h"><h3>연습문제 17</h3><span class="cnt">14문항</span></div>
${h.p({ q: String.raw`$y'=xy,\ y(0)=2$`, ans: '$y=2e^{x^2/2}$', sol: String.raw`<p>분리.</p>` })}
${h.p({ q: String.raw`$y'=\dfrac{x}{y},\ y(0)=1$`, ans: '$y=\\sqrt{x^2+1}$', sol: String.raw`<p>$y\,dy=x\,dx$ → $y^2=x^2+1$.</p>` })}
${h.p({ q: String.raw`$y'+2y=e^{-x},\ y(0)=0$`, ans: '$y=e^{-x}-e^{-2x}$', sol: String.raw`<p>$\mu=e^{2x}$: $(e^{2x}y)'=e^x$.</p>` })}
${h.p({ q: String.raw`$xy'+y=x^2\ (x>0),\ y(1)=1$`, ans: '$y=\\frac{x^2}3+\\frac2{3x}$', sol: String.raw`<p>좌변이 이미 $(xy)'$. $xy=\frac{x^3}3+C$.</p>` })}
${h.p({ src: 'HY 2026-17', q: String.raw`$\dfrac{dy}{dx}+\dfrac{2x}{1+x^2}y=\dfrac x{1+x^2},\ y(0)=1$ 일 때 $y(5)$`, choices: h.c`$\frac{11}{26}$ | $\frac{27}{52}$ | $\frac{15}{26}$ | $\frac{31}{52}$ | $\frac{17}{26}$`, ans: '② $\\frac{27}{52}$', sol: String.raw`<p>$\mu=1+x^2$: $((1+x^2)y)'=x$ → $(1+x^2)y=\frac{x^2}2+1$. $x=5$: $26y=\frac{27}2$.</p>` })}
${h.p({ q: String.raw`$(2xy+1)dx+(x^2+2y)dy=0$ 의 일반해`, ans: '$x^2y+x+y^2=C$', sol: String.raw`<p>$M_y=2x=N_x$.</p>` })}
${h.p({ q: String.raw`$y'-y=y^2$`, ans: '$y=\\dfrac{1}{Ce^{-x}-1}$', sol: String.raw`<p>$v=\frac1y$: $v'+v=-1$ → $v=-1+Ce^{-x}$.</p>` })}
${h.p({ q: String.raw`$y'=\dfrac{x+y}{x}\ (x>0)$`, ans: '$y=x\\ln x+Cx$', sol: String.raw`<p>$y=vx$: $xv'=1$. 또는 선형 $y'-\frac yx=1$.</p>` })}
${h.p({ src: 'HY 2022-18', lv: 2, q: String.raw`$x'=x(3-4x),\ x(0)=3$ 일 때 $x(3)$`, choices: h.c`$\frac{e^3}{\frac43e^3-1}$ | $\frac{e^4}{\frac43e^4-1}$ | $\frac{e^7}{\frac43e^7-1}$ | $\frac{e^8}{\frac43e^8-1}$ | $\frac{e^9}{\frac43e^9-1}$`, ans: '⑤', sol: String.raw`<p>로지스틱 $K=\frac34$, 증가율 3. $A=\frac{K-x_0}{x_0}=-\frac34$. $x=\frac{3/4}{1-\frac34e^{-3t}}$, $t=3$: 분자분모에 $\frac43e^9$ 곱하면 $\frac{e^9}{\frac43e^9-1}$.</p>` })}
${h.p({ q: String.raw`반감기 5730년인 탄소-14 가 원래의 $\frac14$ 이 남는 데 걸리는 시간`, ans: '11460년', sol: String.raw`<p>반감기 두 번.</p>` })}
${h.p({ lv: 2, q: String.raw`$y'=(x+y+1)^2$`, ans: '$\\tan^{-1}(x+y+1)=x+C$', sol: String.raw`<p>$u=x+y+1$: $u'=1+u^2$.</p>` })}
${h.p({ lv: 2, q: String.raw`$(y^2+xy)dx-x^2dy=0$ 을 푸시오 ($x>0$)`, ans: '$y=-\\dfrac{x}{\\ln x+C}$', sol: String.raw`<p>동차: $y'=\frac{y^2+xy}{x^2}=v^2+v$. $v+xv'=v^2+v$ → $\frac{dv}{v^2}=\frac{dx}x$ → $-\frac1v=\ln x+C$.</p>` })}
${h.p({ lv: 2, q: String.raw`$y\,dx+(2x-ye^y)dy=0$ 의 적분인자와 일반해`, ans: '$\\mu=y$, $xy^2-(y^2-2y+2)e^y=C$', sol: String.raw`<p>$M_y=1,\ N_x=2$. $\frac{N_x-M_y}{M}=\frac1y$ 이 $y$ 만의 함수 → $\mu=e^{\int\frac1ydy}=y$. 곱하면 $y^2dx+(2xy-y^2e^y)dy$, $F=xy^2-\int y^2e^ydy$.</p>` })}
${h.p({ lv: 2, q: String.raw`100°C 물체를 20°C 방에 두니 10분 후 60°C. 30°C 가 되는 시간`, ans: '30분', sol: String.raw`<p>$T-20=80e^{-kt}$, $40=80e^{-10k}$ → $e^{-10k}=\frac12$. $10=80\left(\frac12\right)^{t/10}$ → $t=30$.</p>` })}
`
};
