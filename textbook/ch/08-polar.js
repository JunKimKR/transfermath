const P = Math.PI;
module.exports = {
  id: 'c08', num: '08', part: 'PART A · 미적분의 바닥', title: '극좌표 · 매개곡선 · 곡률', short: '극곡선 넓이·길이·접선',
  schools: { KU: '매년 1문항 꼴', HY: '미적 파트', CAU: '극곡선 넓이 · 곡률' },
  lede: '원, 꽃잎, 하트 모양은 x, y 로 쓰면 지옥이고 r, θ 로 쓰면 한 줄이다. 공식 세 개(넓이·길이·접선)만 쥐면 된다.',
  body: h => String.raw`
<h3><span class="sn">8.1</span>극좌표 — 거리와 각도로 점 찍기</h3>
<p>점을 "원점에서 얼마나 떨어졌나($r$)"와 "$x$축에서 몇 도 돌았나($\theta$)"로 표시한다.</p>
${h.box('key', '변환', String.raw`<p>$x=r\cos\theta,\quad y=r\sin\theta,\quad r^2=x^2+y^2,\quad \tan\theta=\dfrac yx$</p><p>$r<0$ 이면 반대 방향으로 $|r|$ 만큼. 그래서 같은 점을 여러 방식으로 쓸 수 있다 (교점 구할 때 함정).</p>`)}
<h4>극곡선 도감</h4>
<div class="fig-row">
${h.plot({ x: [-0.6, 2.4], y: [-1.3, 1.3], equal: true, w: 250, h: 220, curves: [{ r: t => 2 * Math.cos(t), t: [0, P], c: 1 }], cap: '$r=2a\\cos\\theta$: 원 (지름 $2a$)' })}
${h.plot({ x: [-0.5, 2.3], y: [-1.5, 1.5], equal: true, w: 250, h: 220, curves: [{ r: t => 1 + Math.cos(t), t: [0, 2 * P], c: 2 }], cap: '$r=a(1+\\cos\\theta)$: 심장형. 넓이 $\\frac32\\pi a^2$, 길이 $8a$' })}
${h.plot({ x: [-1.2, 1.2], y: [-1.2, 1.2], equal: true, w: 250, h: 220, curves: [{ r: t => Math.cos(2 * t), t: [0, 2 * P], c: 3 }], cap: '$r=\\cos2\\theta$: 장미 4잎. $\\cos n\\theta$ 는 $n$ 홀수면 $n$ 잎, 짝수면 $2n$ 잎' })}
${h.plot({ x: [-1.2, 3.4], y: [-2, 2], equal: true, w: 250, h: 220, curves: [{ r: t => 1 + 2 * Math.cos(t), t: [0, 2 * P], c: 4 }], cap: '$r=1+2\\cos\\theta$: 리마송. $b>a$ 면 안에 작은 고리' })}
${h.plot({ x: [-1.2, 1.2], y: [-0.8, 0.8], equal: true, w: 250, h: 220, curves: [{ r: t => Math.sqrt(Math.max(0, Math.cos(2 * t))), t: [-P / 4, P / 4], c: 1 }, { r: t => Math.sqrt(Math.max(0, Math.cos(2 * t))), t: [3 * P / 4, 5 * P / 4], c: 1 }], cap: '$r^2=\\cos2\\theta$: 연주형(렘니스케이트). 넓이 1' })}
${h.plot({ x: [-5, 7], y: [-5.5, 3], equal: true, w: 250, h: 220, curves: [{ r: t => t, t: [0, 2 * P], c: 2 }], cap: '$r=\\theta$: 아르키메데스 나선' })}
</div>

<h3><span class="sn">8.2</span>극곡선의 넓이 — 부채꼴을 모은다</h3>
${h.box('key', '극좌표 넓이', String.raw`<p>$$A=\frac12\int_\alpha^\beta r^2\,d\theta$$</p><p>반지름 $r$, 각 $d\theta$ 인 얇은 부채꼴 넓이가 $\frac12r^2d\theta$. 두 곡선 사이(안쪽 A, 바깥 B 밖)는 $\frac12\int\left(r_{\text{바깥}}^2-r_{\text{안}}^2\right)d\theta$.</p>`)}
${h.box('warn', '교점은 두 종류', '<p>$r_1(\\theta)=r_2(\\theta)$ 를 풀어서 나오는 교점 말고, <b>원점</b>은 두 곡선이 서로 다른 $\\theta$ 에서 지나가도 교점이다. 방정식으로 안 잡힌다. 고려대 2022-5 가 이걸 물었다: $r=\\sqrt3+2\\sin\\theta$ 와 $r=4\\sin\\theta$ 의 교점은 $(\\pm\\sqrt3,3)$ 말고 $(0,0)$ 도 있다.</p>')}
${h.ex({ q: String.raw`원 $r=3\cos\theta$ 안에 있고 심장형 $r=1+\cos\theta$ 밖에 있는 영역의 넓이`,
  sol: String.raw`${h.plot({ x: [-0.5, 3.3], y: [-1.8, 1.8], equal: true, w: 360, h: 320, pfills: [{ r: t => 3 * Math.cos(t), t: [-P / 3, P / 3], c: 1, origin: 1 }], curves: [{ r: t => 3 * Math.cos(t), t: [0, P], c: 1, label: 'r = 3cos θ', lx: 2.3, ly: 1.5 }, { r: t => 1 + Math.cos(t), t: [0, 2 * P], c: 2, label: 'r = 1+cos θ', lx: -0.45, ly: 1.2 }], cap: '파란 부채꼴 영역에서 빨간 심장형 안쪽을 뺀다.' })}<p>교점: $3\cos\theta=1+\cos\theta$ → $\cos\theta=\frac12$ → $\theta=\pm\frac\pi3$.</p>$$A=\frac12\int_{-\pi/3}^{\pi/3}\left(9\cos^2\theta-(1+\cos\theta)^2\right)d\theta=\int_0^{\pi/3}\left(8\cos^2\theta-2\cos\theta-1\right)d\theta$$<p>$8\cos^2=4+4\cos2\theta$: $\Big[3\theta+2\sin2\theta-2\sin\theta\Big]_0^{\pi/3}=\pi+\sqrt3-\sqrt3=\pi$.</p>`, ans: '$\\pi$' })}
${h.ex({ src: 'CAU 2026-28', q: String.raw`곡선 $\gamma:\ x=t\cos t,\ y=t\sin t\ (0\le t\le2\pi)$ 와 양의 $x$축으로 둘러싸인 영역 $\Omega$ 의 넓이는?`, choices: h.c`$\frac23\pi^3$ | $\pi^3$ | $\frac43\pi^3$ | $\frac83\pi^3$`,
  sol: String.raw`${h.plot({ x: [-5, 7], y: [-5.5, 2.5], equal: true, w: 380, h: 280, pfills: [{ r: t => t, t: [0, 2 * P], c: 1 }], curves: [{ r: t => t, t: [0, 2 * P], c: 1 }], cap: '나선 $r=\\theta$ 가 한 바퀴 돌며 쓸고 간 영역.' })}<p>$x=t\cos t,\ y=t\sin t$ 는 극좌표 $r=\theta$ ($t=\theta$) 그 자체다. 한 바퀴 돌면서 쓸고 간 넓이:</p>$$\frac12\int_0^{2\pi}\theta^2d\theta=\frac12\cdot\frac{(2\pi)^3}{3}=\frac{4\pi^3}3$$`, ans: '③' })}

<h3><span class="sn">8.3</span>극곡선의 길이와 접선</h3>
${h.box('key', '길이 · 접선', String.raw`<p>$L=\displaystyle\int_\alpha^\beta\sqrt{r^2+(r')^2}\,d\theta$</p><p>접선 기울기: $x=r\cos\theta,\ y=r\sin\theta$ 를 <b>각각 $\theta$ 로 미분</b>해서 $\dfrac{dy}{dx}=\dfrac{r'\sin\theta+r\cos\theta}{r'\cos\theta-r\sin\theta}$. 공식 외우지 말고 매번 곱의 미분으로 만들어라.</p>`)}
${h.ex({ src: 'KU 2023-5', q: String.raw`극곡선 $r=2-\sin\theta$ 의 $\theta=0$ 에서의 접선을 구하시오.`,
  sol: String.raw`<p>$r(0)=2$, $r'=-\cos\theta$ → $r'(0)=-1$. 점 $(2,0)$.</p><p>$\frac{dx}{d\theta}=r'\cos\theta-r\sin\theta=-1$, $\frac{dy}{d\theta}=r'\sin\theta+r\cos\theta=2$. 기울기 $-2$. $y=-2(x-2)$. (고려대는 2026-4 에 <b>같은 문제</b>를 또 냈다.)</p>`, ans: '$2x+y=4$' })}
${h.ex({ src: 'KU 2024-8', q: String.raw`극곡선 $r=\cos^2\frac\theta2$ 의 길이를 구하시오.`,
  sol: String.raw`<p>반각: $\cos^2\frac\theta2=\frac{1+\cos\theta}2$. 심장형 $a=\frac12$. 길이 $8a=4$.</p><p>직접 하면: $r^2+r'^2=\cos^4\frac\theta2+\cos^2\frac\theta2\sin^2\frac\theta2=\cos^2\frac\theta2$. $\int_0^{2\pi}\left|\cos\frac\theta2\right|d\theta=4$. <mark>절댓값 잊으면 0 나온다</mark>.</p>`, ans: '$4$' })}

<h3><span class="sn">8.4</span>이차곡선의 극방정식</h3>
${h.box('key', '초점이 원점인 이차곡선', String.raw`<p>$$r=\frac{ed}{1+e\cos\theta}$$ 이심률 $e<1$ 타원, $e=1$ 포물선, $e>1$ 쌍곡선. 분모 상수항을 <b>1로 맞춘 뒤</b> $\cos$ 계수를 읽어야 $e$ 다.</p>`)}
${h.ex({ src: 'CAU 2025-11', q: String.raw`극곡선 $r=\dfrac{16}{5+3\cos\theta}\ (0\le\theta\le2\pi)$ 가 둘러싼 영역의 넓이는?`, choices: h.c`$5\pi$ | $10\pi$ | $15\pi$ | $20\pi$`,
  sol: String.raw`<p>$r=\dfrac{16/5}{1+\frac35\cos\theta}$ → $e=\frac35$, 타원.</p><p>장축 양 끝: $r(0)=\frac{16}8=2$, $r(\pi)=\frac{16}2=8$. 장축 $2a=10$ → $a=5$. $c=ae=3$, $b=\sqrt{25-9}=4$. 넓이 $\pi ab=20\pi$. 적분 안 한다.</p>`, ans: '④ $20\\pi$' })}

<h3><span class="sn">8.5</span>곡률 — 얼마나 급하게 꺾이나</h3>
<p>곡률 $\kappa$ 는 그 점에서 곡선에 가장 잘 맞는 원(곡률원)의 반지름의 역수. 직선은 0, 반지름 $R$ 인 원은 $\frac1R$.</p>
${h.box('key', '곡률 공식 셋', String.raw`<p>$y=f(x)$: $\ \kappa=\dfrac{|y''|}{\left(1+y'^2\right)^{3/2}}$</p><p>평면 매개: $\ \kappa=\dfrac{|\dot x\ddot y-\dot y\ddot x|}{\left(\dot x^2+\dot y^2\right)^{3/2}}$</p><p>공간 $\mathbf r(t)$: $\ \kappa=\dfrac{|\mathbf r'\times\mathbf r''|}{|\mathbf r'|^3}=\dfrac{|\mathbf T'|}{|\mathbf r'|}$</p>`)}
${h.ex({ src: 'CAU 2026-29', q: String.raw`곡선 $\gamma:\ x=t\cos t,\ y=t\sin t$ 의 곡률 $\kappa(t)$ 에 대해 $\kappa(\sqrt3)$ 은?`, choices: h.c`$\frac5{64}$ | $\frac58$ | $\frac54$ | $\frac52$`,
  sol: String.raw`<p>$\dot x=\cos t-t\sin t,\ \dot y=\sin t+t\cos t$ → $\dot x^2+\dot y^2=1+t^2$.</p><p>$\ddot x=-2\sin t-t\cos t,\ \ddot y=2\cos t-t\sin t$. $\dot x\ddot y-\dot y\ddot x=t^2+2$ (전개하면 교차항이 싹 지워진다).</p><p>$\kappa=\dfrac{t^2+2}{(1+t^2)^{3/2}}$, $t=\sqrt3$: $\dfrac5{8}$.</p>`, ans: '② $\\frac58$' })}
${h.ex({ src: 'KU 2021-3', q: String.raw`$\mathbf r(t)=\langle t^2,\ \sin2t-2t\cos2t,\ \cos2t+2t\sin2t\rangle\ (t>0)$ 의 곡률`,
  sol: String.raw`<p>미분하면 뭉친다: $\mathbf r'=\langle2t,\ 4t\sin2t,\ 4t\cos2t\rangle=2t\langle1,2\sin2t,2\cos2t\rangle$. $|\mathbf r'|=2\sqrt5\,t$.</p><p>$\mathbf T=\frac1{\sqrt5}\langle1,2\sin2t,2\cos2t\rangle$, $|\mathbf T'|=\frac{4}{\sqrt5}$. $\kappa=\dfrac{4/\sqrt5}{2\sqrt5t}=\dfrac2{5t}$.</p>`, ans: '$\\dfrac2{5t}$' })}

<div class="probs-h"><h3>연습문제 8</h3><span class="cnt">14문항</span></div>
${h.p({ q: String.raw`극좌표 $(2,\frac{2\pi}3)$ 를 직교좌표로`, ans: '$(-1,\\sqrt3)$', sol: String.raw`<p>$2\cos\frac{2\pi}3=-1$, $2\sin\frac{2\pi}3=\sqrt3$.</p>` })}
${h.p({ q: String.raw`$r=4\sin\theta$ 를 직교좌표 방정식으로`, ans: '$x^2+(y-2)^2=4$', sol: String.raw`<p>양변에 $r$: $r^2=4r\sin\theta$ → $x^2+y^2=4y$.</p>` })}
${h.p({ q: String.raw`심장형 $r=1+\cos\theta$ 의 넓이`, ans: '$\\frac{3\\pi}2$', sol: String.raw`<p>$\frac12\int_0^{2\pi}(1+\cos\theta)^2d\theta=\frac12\left(2\pi+\pi\right)$.</p>` })}
${h.p({ q: String.raw`$r=\cos2\theta$ 의 잎 하나의 넓이`, ans: '$\\frac\\pi8$', sol: String.raw`<p>$\frac12\int_{-\pi/4}^{\pi/4}\cos^22\theta\,d\theta=\frac12\cdot\frac\pi4$.</p>` })}
${h.p({ q: String.raw`$r^2=\cos2\theta$ 전체 넓이`, ans: '$1$', sol: String.raw`<p>두 고리: $2\cdot\frac12\int_{-\pi/4}^{\pi/4}\cos2\theta\,d\theta=1$.</p>` })}
${h.p({ src: 'KU 2019-8', lv: 2, q: String.raw`심장형 $r=1+\cos\theta$ 중 원 $r=3\cos\theta$ 내부에 있는 부분의 길이`, ans: '$4$', sol: String.raw`<p>교점 $\theta=\pm\frac\pi3$. 심장형은 $|\theta|\le\frac\pi3$ 에서 원 안. $\sqrt{r^2+r'^2}=\sqrt{2+2\cos\theta}=2\cos\frac\theta2$. $\int_{-\pi/3}^{\pi/3}2\cos\frac\theta2d\theta=8\sin\frac\pi6=4$.</p>` })}
${h.p({ src: 'KU 2022-5', q: String.raw`$r=\sqrt3+2\sin\theta$ 와 $r=4\sin\theta$ 의 교점을 직교좌표로 모두`, ans: '$(\\pm\\sqrt3,3),\\ (0,0)$', sol: String.raw`<p>$\sin\theta=\frac{\sqrt3}2$ → $\theta=\frac\pi3,\frac{2\pi}3$, $r=2\sqrt3$. 원점은 따로: $4\sin\theta=0$ 이 $\theta=0$ 에서, $\sqrt3+2\sin\theta=0$ 이 $\theta=\frac{4\pi}3$ 에서 성립하니 둘 다 원점을 지난다.</p>` })}
${h.p({ q: String.raw`$r=e^{\theta}$ 의 $0\le\theta\le2\pi$ 부분의 길이`, ans: '$\\sqrt2(e^{2\\pi}-1)$', sol: String.raw`<p>$\sqrt{r^2+r'^2}=\sqrt2e^\theta$.</p>` })}
${h.p({ lv: 2, q: String.raw`극곡선 $r=1+2\cos\theta$ 의 안쪽 작은 고리의 넓이`, ans: '$\\pi-\\frac{3\\sqrt3}2$', sol: String.raw`<p>$r=0$ 은 $\theta=\frac{2\pi}3,\frac{4\pi}3$. 작은 고리는 $\frac{2\pi}3\le\theta\le\frac{4\pi}3$ ($r<0$ 부분). $\frac12\int(1+2\cos\theta)^2d\theta=\frac12\int(3+4\cos\theta+2\cos2\theta)$. 대칭으로 $\int_{2\pi/3}^{\pi}$ 두 배: $\left[3\theta+4\sin\theta+\sin2\theta\right]_{2\pi/3}^{\pi}=\pi-2\sqrt3+\frac{\sqrt3}2=\pi-\frac{3\sqrt3}2$.</p>` })}
${h.p({ q: String.raw`$y=x^2$ 의 원점에서의 곡률`, ans: '$2$', sol: String.raw`<p>$\frac{2}{(1+0)^{3/2}}$.</p>` })}
${h.p({ q: String.raw`$y=\ln x$ 의 곡률이 최대가 되는 $x$`, ans: '$\\frac1{\\sqrt2}$', sol: String.raw`<p>$\kappa=\frac{1/x^2}{(1+1/x^2)^{3/2}}=\frac{x}{(x^2+1)^{3/2}}$. 미분: $(x^2+1)-3x^2=0$.</p>` })}
${h.p({ q: String.raw`나선 $\mathbf r(t)=\langle\cos t,\sin t,t\rangle$ 의 곡률`, ans: '$\\frac12$', sol: String.raw`<p>$|\mathbf r'|=\sqrt2$, $\mathbf r'\times\mathbf r''=\langle\sin t,-\cos t,1\rangle$, 크기 $\sqrt2$. $\frac{\sqrt2}{2\sqrt2}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$r=\dfrac{6}{2+\cos\theta}$ 이 나타내는 타원의 넓이`, ans: '$8\\sqrt3\\pi$', sol: String.raw`<p>$r(0)=2,\ r(\pi)=6$ → $2a=8,\ a=4$. $e=\frac12$, $c=2$, $b=\sqrt{12}=2\sqrt3$. $\pi ab=8\sqrt3\pi$.</p>` })}
${h.p({ q: String.raw`극곡선 $r=\theta$ 의 $\theta=\frac\pi2$ 에서 접선 기울기`, ans: '$-\\frac2\\pi$', sol: String.raw`<p>$\frac{dy}{dx}=\frac{\sin\theta+\theta\cos\theta}{\cos\theta-\theta\sin\theta}$, $\theta=\frac\pi2$: $\frac{1}{-\pi/2}$.</p>` })}
`
};
