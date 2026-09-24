module.exports = {
  id: 'c10', num: '10', part: 'PART B · 다변수와 벡터', title: '다변수 미분', short: '편미분 · 기울기 · 극값 · 라그랑주',
  schools: { KU: '11% · 라그랑주 매년', HY: '미적 파트', CAU: '매년 3–4문항' },
  lede: '변수가 둘이 되면 "기울기"가 방향마다 달라진다. 그래서 x 방향, y 방향 기울기를 따로 재고(편미분), 그걸 벡터로 묶는다(기울기 벡터). 나머지는 일변수 미분의 복붙이다.',
  body: h => String.raw`
<h3><span class="sn">10.1</span>함수 $z=f(x,y)$ 는 지형이다</h3>
<div class="fig-row">
${h.surf({ w: 320, h: 260, sc: 52, oy: 50, surfs: [{ f: (x, y) => (x * x + y * y) / 2, u: [-1.5, 1.5], v: [-1.5, 1.5], n: 12, m: 12, c: 1 }], cap: '$z=\\frac{x^2+y^2}2$: 그릇. 원점이 극소.' })}
${h.surf({ w: 320, h: 260, sc: 52, oy: 30, surfs: [{ f: (x, y) => (x * x - y * y) / 2, u: [-1.5, 1.5], v: [-1.5, 1.5], n: 12, m: 12, c: 2 }], cap: '$z=\\frac{x^2-y^2}2$: 말안장. 원점은 극값이 아닌 <b>안장점</b>.' })}
</div>
<p>높이가 같은 점을 이은 선이 <b>등위선</b>. 지도의 등고선이랑 똑같다. 등고선이 촘촘하면 가파르다.</p>

<h3><span class="sn">10.2</span>다변수 극한 — 길이 무한 개다</h3>
<p>$(x,y)\to(0,0)$ 으로 가는 길은 직선, 포물선, 나선 등 무한히 많다. <mark>모든 길에서 같은 값이어야</mark> 극한이 존재한다.</p>
${h.box('key', '판정 두 도구', String.raw`<p><b>없음을 보일 때 (경로법)</b>: 길 두 개에서 값이 다르면 끝. 보통 $y=mx$ 넣어서 $m$ 에 따라 값이 바뀌는지 본다. 분모에 $y^4$ 같은 게 있으면 $x=my^2$ 곡선 경로.</p><p><b>있음을 보일 때 (조임)</b>: 극좌표 $x=r\cos\theta,\ y=r\sin\theta$ 넣어서 $|f|\le(\theta\text{ 와 무관한 것})\to0$.</p>`)}
${h.ex({ q: String.raw`(가) $\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy}{x^2+y^2}$ &nbsp; (나) $\displaystyle\lim\frac{x^2y}{x^2+y^2}$ &nbsp; (다) $\displaystyle\lim\frac{xy^2}{x^2+y^4}$`,
  sol: String.raw`<p>(가) $y=mx$: $\frac{m}{1+m^2}$, $m$ 따라 바뀜 → <b>없음</b>.</p><p>(나) 극좌표: $r\cos^2\theta\sin\theta$, $|\cdot|\le r\to0$ → <b>0</b>.</p><p>(다) 직선 $y=mx$: $\frac{m^2x^3}{x^2+m^4x^4}\to0$. 속지 마라. $x=y^2$: $\frac{y^4}{2y^4}=\frac12$ → <b>없음</b>. 분자·분모 차수를 맞춰 주는 경로를 찾는 게 요령.</p>`, ans: '없음 · 0 · 없음' })}

<h3><span class="sn">10.3</span>편미분</h3>
<p>$f_x=\dfrac{\partial f}{\partial x}$: <b>$y$ 를 상수 취급</b>하고 $x$ 로 미분. 그게 다다. $f=x^2y^3$ 이면 $f_x=2xy^3,\ f_y=3x^2y^2$.</p>
${h.box('key', '클레로 정리', String.raw`<p>2계 편도함수가 연속이면 $f_{xy}=f_{yx}$. 순서 상관없다. 편한 순서로 미분해라.</p>`)}
${h.box('warn', '편미분 가능 ≠ 연속 (고려대 2025·2026 연속 출제)', '<p>$f_x(0,0),\\ f_y(0,0)$ 이 둘 다 존재해도 $f$ 가 $(0,0)$ 에서 불연속일 수 있다. 예: $f=\\frac{xy}{x^2+y^2},\\ f(0,0)=0$. 축 위에서 $f=0$ 이라 편미분은 0 인데 극한이 없다. 반면 <b>편도함수가 연속이면 미분가능, 미분가능하면 연속</b>. 일변수 직관이 깨지는 첫 지점.</p>')}
${h.ex({ src: 'CAU 2024-11', q: String.raw`$f(x,y)=\displaystyle\int_{2x+4y}^{3y^2}\frac{1}{1+e^{-u}}du$ 일 때 $\dfrac{\partial^2f}{\partial x\partial y}(0,0)$ 은?`, choices: h.c`$-2$ | $2$ | $-3$ | $3$`,
  sol: String.raw`<p>$F(u)=\frac1{1+e^{-u}}$. 적분 미분(5장): 위끝 $3y^2$ 은 $x$ 와 무관, 아래끝 $2x+4y$ → $f_x=-2F(2x+4y)$.</p><p>$y$ 로 미분: $f_{xy}=-2F'(2x+4y)\cdot4=-8F'(0)$. $F'(u)=\frac{e^{-u}}{(1+e^{-u})^2}$, $F'(0)=\frac14$. 답 $-2$.</p>`, ans: '① $-2$' })}

<h3><span class="sn">10.4</span>연쇄법칙 — 나무를 그려라</h3>
<p>$z=f(x,y)$ 이고 $x,y$ 가 또 $s,t$ 의 함수면, $z$ 에서 $s$ 까지 가는 <b>모든 길</b>의 미분을 곱해서 더한다.</p>
$$\frac{\partial z}{\partial s}=\frac{\partial z}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial z}{\partial y}\frac{\partial y}{\partial s}$$
${h.plot({ x: [0, 10], y: [0, 5], grid: false, axes: false, w: 420, h: 200, lines: [{ p: [5, 4.3], q: [2.6, 2.6], c: 1 }, { p: [5, 4.3], q: [7.4, 2.6], c: 1 }, { p: [2.4, 2.1], q: [1.3, 0.8], c: 3 }, { p: [2.4, 2.1], q: [3.5, 0.8], c: 3 }, { p: [7.6, 2.1], q: [6.5, 0.8], c: 3 }, { p: [7.6, 2.1], q: [8.7, 0.8], c: 3 }], texts: [{ x: 5, y: 4.5, t: 'z', anchor: 'middle', it: 1 }, { x: 2.4, y: 2.2, t: 'x', anchor: 'middle', it: 1 }, { x: 7.6, y: 2.2, t: 'y', anchor: 'middle', it: 1 }, { x: 1.2, y: 0.3, t: 's', anchor: 'middle', it: 1 }, { x: 3.6, y: 0.3, t: 't', anchor: 'middle', it: 1 }, { x: 6.4, y: 0.3, t: 's', anchor: 'middle', it: 1 }, { x: 8.8, y: 0.3, t: 't', anchor: 'middle', it: 1 }, { x: 3.2, y: 3.6, t: 'z_x', c: 1 }, { x: 6.3, y: 3.6, t: 'z_y', c: 1 }], cap: '연쇄법칙 나무. $z\\to s$ 로 가는 길이 $z\\to x\\to s$, $z\\to y\\to s$ 두 개라 항이 두 개.' })}
${h.box('key', '음함수 편미분', String.raw`<p>$F(x,y,z)=0$ 이 $z=z(x,y)$ 를 정하면 $\ \dfrac{\partial z}{\partial x}=-\dfrac{F_x}{F_z},\quad\dfrac{\partial z}{\partial y}=-\dfrac{F_y}{F_z}$</p><p>분모는 항상 <b>구하려는 변수</b>로 편미분한 것.</p>`)}
${h.box('warn', '2계 연쇄법칙', '<p>$z_x=f_uu_x+f_vv_x$ 를 또 미분할 때 $f_u,f_v$ 도 $u,v$ 를 통해 $x$ 에 의존한다. $\\frac{\\partial}{\\partial x}f_u=f_{uu}u_x+f_{uv}v_x$. 이걸 빼먹으면 틀린다 (고려대 2021-8).</p>')}

<h3><span class="sn">10.5</span>기울기 벡터와 방향도함수</h3>
${h.box('key', '∇f', String.raw`<p>$\nabla f=(f_x,f_y,f_z)$</p><p>단위벡터 $\mathbf u$ 방향으로의 변화율: $D_{\mathbf u}f=\nabla f\cdot\mathbf u$</p><p>① <b>가장 빨리 증가하는 방향 = $\nabla f$ 방향</b>, 그 최대 변화율 $=|\nabla f|$ ② $\nabla f$ 는 등위선(등위면)에 <b>수직</b></p>`)}
${h.plot({ x: [-2.3, 2.3], y: [-2.3, 2.3], equal: true, w: 380, h: 360, curves: [0.5, 1, 1.5, 2].map((r, i) => ({ fx: t => r * Math.cos(t), fy: t => r * Math.sin(t) / 1.3, t: [0, 2 * Math.PI], c: 'm', thin: 1 })), vecs: [{ from: [1 / Math.SQRT2, 1 / Math.SQRT2 / 1.3], v: [0.7, 0.7 * 1.69], c: 2, label: '∇f' }, { from: [-1.5, 0], v: [-0.7, 0], c: 2 }, { from: [0, -1.5 / 1.3], v: [0, -0.9], c: 2 }], cap: '$f=x^2+1.69y^2$ 의 등위선(타원)과 기울기 벡터. 항상 등위선에 수직이고 바깥(증가 방향)을 가리킨다.' })}
${h.ex({ src: 'CAU 2024-12', q: String.raw`$f(x,y,z)=xe^{-y-z}\cos(xy)$ 가 점 $(1,0,1)$ 에서 가장 빨리 증가하는 방향의 단위벡터는?`, choices: h.c`$\left(-\frac1{\sqrt3},-\frac1{\sqrt3},\frac1{\sqrt3}\right)$ | $\left(\frac1{\sqrt3},\frac1{\sqrt3},-\frac1{\sqrt3}\right)$ | $\left(-\frac1{\sqrt3},-\frac1{\sqrt3},-\frac1{\sqrt3}\right)$ | $\left(\frac1{\sqrt3},-\frac1{\sqrt3},-\frac1{\sqrt3}\right)$`,
  sol: String.raw`<p>$(1,0,1)$ 에서 $\cos(xy)=1,\ \sin(xy)=0$, $e^{-y-z}=e^{-1}$.</p><p>$f_x=e^{-y-z}[\cos xy-xy\sin xy]=e^{-1}$, $f_y=-xe^{-y-z}\cos xy-x^2e^{-y-z}\sin xy=-e^{-1}$, $f_z=-xe^{-y-z}\cos xy=-e^{-1}$.</p><p>$\nabla f\propto(1,-1,-1)$.</p>`, ans: '④' })}
${h.ex({ src: 'CAU 2023-29', q: String.raw`$f(x,y)=xe^{x^2+y^2}\sin(y^2)$ 에 대하여 $\nabla f(1,1)=(a,b)$ 일 때 $\dfrac ba$ 는?`, choices: h.c`$\frac23(1+\tan1)$ | $\frac23(2+\tan1)$ | $\frac23(1+\cot1)$ | $\frac23(2+\cot1)$`,
  sol: String.raw`<p>로그 미분이 편하다: $\ln f=\ln x+x^2+y^2+\ln\sin y^2$. $\frac{f_x}f=\frac1x+2x=3$, $\frac{f_y}f=2y+\frac{2y\cos y^2}{\sin y^2}=2+2\cot1$.</p><p>$\frac ba=\frac{2+2\cot1}3$.</p>`, ans: '③' })}

<h3><span class="sn">10.6</span>접평면과 법선</h3>
${h.box('key', '접평면', String.raw`<p><b>곡면 $F(x,y,z)=0$</b>: 법선벡터 $=\nabla F(P)$. 접평면 $\nabla F\cdot(\mathbf x-P)=0$.</p><p><b>그래프 $z=f(x,y)$</b>: $z-z_0=f_x(x-x_0)+f_y(y-y_0)$ ← 이게 그대로 <b>선형근사</b>, $dz=f_xdx+f_ydy$ 가 <b>전미분</b>.</p><p><b>매개곡면 $\mathbf r(u,v)$</b>: 법선 $=\mathbf r_u\times\mathbf r_v$ (12장).</p>`)}
${h.ex({ src: 'CAU 2023-14', q: String.raw`곡면 $x^4+y^4+z^4-3x^2y^2z^2=0$ 위의 점 $(1,1,\sqrt2)$ 에서의 접평면이 $z$ 축과 $(0,0,a)$ 에서 만난다. $a$ 는?`, choices: h.c`$-3\sqrt2$ | $-\sqrt2$ | $\sqrt2$ | $3\sqrt2$`,
  sol: String.raw`<p>$F_x=4x^3-6xy^2z^2=4-12=-8$, $F_y=-8$ (대칭), $F_z=4z^3-6x^2y^2z=8\sqrt2-6\sqrt2=2\sqrt2$.</p><p>접평면 $-8(x-1)-8(y-1)+2\sqrt2(z-\sqrt2)=0$. $x=y=0$: $16+2\sqrt2z-4=0$ → $z=-\frac{12}{2\sqrt2}=-3\sqrt2$.</p>`, ans: '①' })}

<h3><span class="sn">10.7</span>극값 — 임계점 + 헤세 판정</h3>
${h.box('key', '2변수 극값 절차', String.raw`<ol class="steps"><li>$f_x=0,\ f_y=0$ 을 연립해서 임계점을 다 구한다.</li><li>$D=f_{xx}f_{yy}-f_{xy}^2$ 계산.</li><li>$D>0,\ f_{xx}>0$ → 극소. $D>0,\ f_{xx}<0$ → 극대. $D<0$ → 안장점. $D=0$ → 모름.</li></ol>`)}
${h.ex({ src: 'CAU 2024-9', q: String.raw`$f(z)=\tanh z,\ g(x,y)=x^3-12xy+8y^3$ 일 때 $h=f\circ g$ 의 임계점을 $(a,b),(c,d)$ 라 하면 $a+b+c+d$ 는?`, choices: h.c`$-3$ | $-2$ | $2$ | $3$`,
  sol: String.raw`<p>$\nabla h=\operatorname{sech}^2(g)\,\nabla g$ 이고 $\operatorname{sech}^2>0$ 이라 $\nabla h=0\iff\nabla g=0$. 겉 함수가 단조면 임계점은 속 함수 것 그대로.</p><p>$g_x=3x^2-12y=0,\ g_y=-12x+24y^2=0$ → $y=\frac{x^2}4$, $x=2y^2=\frac{x^4}8$ → $x=0$ 또는 $x=2$. 점 $(0,0),(2,1)$. 합 3.</p>`, ans: '④ $3$' })}
${h.ex({ src: 'CAU 2023-9', q: String.raw`$(x+3y-5)^2+(x-y-1)^2+(x+y)^2$ 의 최솟값은?`, choices: h.c`$2$ | $3$ | $6$ | $12$`,
  sol: String.raw`<p>편미분 두 개 = 0: $\frac12f_x=(x+3y-5)+(x-y-1)+(x+y)=3x+3y-6=0$, $\frac12f_y=3(x+3y-5)-(x-y-1)+(x+y)=3x+11y-14=0$.</p><p>$x=y=1$. 값 $1+1+4=6$. (16장에서 이게 최소제곱 $A^TA\hat x=A^Tb$ 와 똑같은 식이라는 걸 본다.)</p>`, ans: '③ $6$' })}
${h.ex({ src: 'CAU 2023-23', q: String.raw`영역 $x^2+y^2\le4$ 에서 $f(x,y)=e^{-x^2-y^2}(x^2+2y^2)$ 의 최댓값은?`, choices: h.c`$\frac2e$ | $\frac4{e^2}$ | $\frac6{e^3}$ | $\frac8{e^4}$`,
  sol: String.raw`<p>극좌표: $f=r^2e^{-r^2}(1+\sin^2\theta)\le2\cdot r^2e^{-r^2}$. $\theta=\frac\pi2$ 에서 등호.</p><p>$g(t)=te^{-t}\ (t=r^2\in[0,4])$ 는 $t=1$ 에서 최대 $\frac1e$. 답 $\frac2e$.</p>`, ans: '①' })}

<h3><span class="sn">10.8</span>라그랑주 승수법 — 제약이 있을 때</h3>
<p>"$g=k$ 위에서 $f$ 의 최대"는 <b>$f$ 의 등위선이 제약곡선에 접하는 곳</b>에서 생긴다. 접하면 두 법선($\nabla f,\nabla g$)이 평행.</p>
${h.plot({ x: [-3.3, 3.3], y: [-2, 2], equal: true, w: 460, h: 290, curves: [{ fx: t => 2 * Math.SQRT2 * Math.cos(t), fy: t => Math.SQRT2 * Math.sin(t), t: [0, 2 * Math.PI], c: 1, label: 'x²+4y²=8', lx: 1.9, ly: 1.4 }], fns: [0.8, 2, 3.2].flatMap(c => [{ f: x => c / x, dom: [c / 1.9, 3.3], c: c === 2 ? 2 : 'm', thin: c !== 2, dash: c !== 2 }, { f: x => c / x, dom: [-3.3, -c / 1.9], c: c === 2 ? 2 : 'm', thin: c !== 2, dash: c !== 2 }]), pts: [{ x: 2, y: 1, c: 2, label: '접점 = 최대', dx: 8, dy: -8 }], cap: '중앙대 2026-7. 쌍곡선 $xy=c$ 를 키워 가다가 타원에 딱 접하는 순간($c=2$)이 최대.' })}
${h.box('key', '라그랑주', String.raw`<p>$\nabla f=\lambda\nabla g,\ g=k$ 연립. 제약 두 개면 $\nabla f=\lambda\nabla g+\mu\nabla h$.</p><p><b>풀기 요령</b>: 식들을 $\lambda$ 에 대해 풀어 서로 같다고 놓거나, 양변에 $x,y,z$ 를 곱해 더하는 식으로 $\lambda$ 를 없앤다. 경우 나누기($x=0$ 인 경우 등) 빼먹지 말 것.</p>`)}
${h.box('tip', '라그랑주 대신 쓰는 지름길 셋', String.raw`<p>① <b>매개화</b>: 제약이 타원이면 $x=a\cos t,\ y=b\sin t$ 넣고 일변수로.</p><p>② <b>코시–슈바르츠</b>: $(a_1x+a_2y+a_3z)^2\le(a_1^2+a_2^2+a_3^2)(x^2+y^2+z^2)$. 가중치 있으면 $\left(\sum a_ix_i\right)^2\le\left(\sum\frac{a_i^2}{w_i}\right)\left(\sum w_ix_i^2\right)$.</p><p>③ <b>완전제곱 치환</b>: 제약을 $u^2+v^2+w^2=1$ 꼴로 바꾸면 선형식의 최대는 계수 벡터 크기.</p>`)}
${h.ex({ src: 'CAU 2024-25', q: String.raw`타원면 $x^2+2y^2+z^2=1$ 위에서 $f=xy+z^2$ 의 최댓값·최솟값을 $a,b$ 라 할 때 $a^2+b^2$ 는?`, choices: h.c`$1$ | $\sqrt{\frac32}+1$ | $\frac98$ | $\frac54$`,
  sol: String.raw`<p>$\nabla f=\lambda\nabla g$: $y=2\lambda x,\ x=4\lambda y,\ 2z=2\lambda z$.</p><p><b>$z\ne0$</b> 이면 $\lambda=1$ → $y=2x,\ x=4y$ → $x=y=0$, $z^2=1$ → $f=1$.</p><p><b>$z=0$</b> 이면 $x^2+2y^2=1$ 에서 $xy$ 의 최대최소. $x=\cos t,\ y=\frac{\sin t}{\sqrt2}$ → $xy=\frac{\sin2t}{2\sqrt2}\in\left[-\frac1{2\sqrt2},\frac1{2\sqrt2}\right]$.</p><p>최대 $a=1$, 최소 $b=-\frac1{2\sqrt2}$. $a^2+b^2=1+\frac18$.</p>`, ans: '③ $\\frac98$' })}
${h.ex({ src: 'KU 2019-5', q: String.raw`$x^2+2y^2+3z^2=1$ 일 때 $(x+y+z)^2$ 의 최댓값`,
  sol: String.raw`<p>가중 코시–슈바르츠: $(x+y+z)^2=\left(1\cdot x+\frac1{\sqrt2}\cdot\sqrt2y+\frac1{\sqrt3}\cdot\sqrt3z\right)^2\le\left(1+\frac12+\frac13\right)(x^2+2y^2+3z^2)=\frac{11}6$.</p>`, ans: '$\\frac{11}6$' })}

<h3><span class="sn">10.9</span>라플라시안 · 야코비안</h3>
${h.box('key', '정의', String.raw`<p>라플라시안 $\Delta u=u_{xx}+u_{yy}+\cdots$ (조화함수: $\Delta u=0$)</p><p>야코비안 $\dfrac{\partial(f_1,\ldots,f_n)}{\partial(x_1,\ldots,x_n)}=\det\left[\frac{\partial f_i}{\partial x_j}\right]$ (11장 변수변환에서 $dA$ 배율)</p><p>$r=\|\mathbf x\|$ 에 대해 $u=r^\alpha$ 면 $\Delta u=\alpha(\alpha+n-2)r^{\alpha-2}$ ($\mathbb R^n$).</p>`)}
${h.ex({ src: 'CAU 2026-10', q: String.raw`$\mathbb R^n\ (n\ge3)$ 에서 $u(\mathbf x)=\|\mathbf x\|^\alpha$ 가 $\Delta u=0\ (\mathbf x\ne\mathbf0)$ 을 만족하는 $\alpha$ 는?`, choices: h.c`$\alpha=1-n$ | $\alpha=2-n$ | $\alpha=n-1$ | $\alpha=n-2$`,
  sol: String.raw`<p>$u=(x_1^2+\cdots+x_n^2)^{\alpha/2}$. $u_{x_i}=\alpha x_ir^{\alpha-2}$, $u_{x_ix_i}=\alpha r^{\alpha-2}+\alpha(\alpha-2)x_i^2r^{\alpha-4}$.</p><p>$i$ 에 대해 더하면 $n\alpha r^{\alpha-2}+\alpha(\alpha-2)r^{\alpha-2}=\alpha(\alpha+n-2)r^{\alpha-2}=0$ → $\alpha=2-n$. (3차원에서 $\frac1r$, 쿨롱 퍼텐셜이다.)</p>`, ans: '②' })}

<div class="probs-h"><h3>연습문제 10</h3><span class="cnt">18문항</span></div>
${h.p({ q: String.raw`$f=x^3y^2+e^{xy}$ 의 $f_x,\ f_{xy}$`, ans: '$f_x=3x^2y^2+ye^{xy}$, $f_{xy}=6x^2y+e^{xy}+xye^{xy}$', sol: String.raw`<p>$f_x$ 를 $y$ 로 미분. 곱의 미분 조심.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2-y^2}{x^2+y^2}$`, ans: '존재하지 않음', sol: String.raw`<p>$x$축 1, $y$축 $-1$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^3+y^3}{x^2+y^2}$`, ans: '$0$', sol: String.raw`<p>극좌표 $r(\cos^3+\sin^3)$, $\le2r$.</p>` })}
${h.p({ q: String.raw`$z=x^2y$, $x=s+t,\ y=st$ 일 때 $\frac{\partial z}{\partial s}$ 를 $s=1,t=2$ 에서`, ans: '$30$', sol: String.raw`<p>$s=1,t=2$ 에서 $x=3,\ y=2$. $z_s=z_xx_s+z_yy_s=2xy\cdot1+x^2\cdot t=12+18=30$.</p>` })}
${h.p({ q: String.raw`$xyz+x^2+z^3=5$ 에서 점 $(1,1,1)$ 의 $\frac{\partial z}{\partial x}$`, ans: '$-\\frac34$', sol: String.raw`<p>$F_x=yz+2x=3$, $F_z=xy+3z^2=4$.</p>` })}
${h.p({ q: String.raw`$f=x^2+xy+y^2$ 의 점 $(1,1)$ 에서 $(3,4)$ 방향 방향도함수`, ans: '$\\frac{21}5$', sol: String.raw`<p>$\nabla f=(3,3)$, $\mathbf u=(\frac35,\frac45)$.</p>` })}
${h.p({ q: String.raw`$z=x^2+y^2$ 의 $(1,2,5)$ 에서 접평면`, ans: '$z=2x+4y-5$', sol: String.raw`<p>$z-5=2(x-1)+4(y-2)$.</p>` })}
${h.p({ q: String.raw`$f=x^3-3x+y^2$ 의 임계점과 판정`, ans: '$(1,0)$ 극소, $(-1,0)$ 안장점', sol: String.raw`<p>$f_{xx}=6x,\ f_{yy}=2,\ f_{xy}=0$. $(1,0)$: $D=12>0$, $f_{xx}>0$. $(-1,0)$: $D<0$.</p>` })}
${h.p({ src: 'CAU 2026-7', q: String.raw`타원 $x^2+4y^2=8$ 위에서 $xy$ 의 최댓값 $M$, 최솟값 $m$ 에 대해 $M-m$`, choices: h.c`$2$ | $4$ | $6$ | $8$`, ans: '② $4$', sol: String.raw`<p>$x=2\sqrt2\cos t,\ y=\sqrt2\sin t$: $xy=2\sin2t$.</p>` })}
${h.p({ src: 'CAU 2026-30', lv: 2, q: String.raw`$f_j=\dfrac{x_j}{1+x_1+x_2+x_3}\ (j=1,2,3)$ 의 야코비안 행렬식`, choices: h.c`$\frac1{(1+s)^6}$ | $\frac{1-x_1x_2x_3}{(1+s)^6}$ | $\frac1{(1+s)^4}$ | $\frac{1-x_1x_2x_3}{(1+s)^4}$`, ans: '③ ($s=x_1+x_2+x_3$)', sol: String.raw`<p>$\frac{\partial f_j}{\partial x_i}=\frac{\delta_{ij}}{1+s}-\frac{x_j}{(1+s)^2}$. 행렬 $=\frac1{1+s}\left(I-\frac{\mathbf x\mathbf 1^T}{1+s}\right)$. 행렬식 보조정리 $\det(I-\mathbf{uv}^T)=1-\mathbf v^T\mathbf u$: $\frac1{(1+s)^3}\left(1-\frac{s}{1+s}\right)=\frac1{(1+s)^4}$.</p><p>빠른 검산: 보기 넷 다 원점에서는 1이라 못 거른다. $x_1=1,\ x_2=x_3=0$ 에서 직접 계산하면 $\frac1{16}$ 이고, 이걸 주는 건 ③뿐.</p>` })}
${h.p({ src: 'KU 2025-4', lv: 2, q: String.raw`$x^2+xy+\frac{y^2}2+z^2=1$ 일 때 $x+y+z$ 의 최댓값·최솟값`, ans: '$\\pm\\sqrt3$', sol: String.raw`<p>완전제곱: $\left(x+\frac y2\right)^2+\left(\frac y2\right)^2+z^2=1$. $u=x+\frac y2,\ v=\frac y2,\ w=z$ 면 $x+y+z=u+v+w$, 단위구 위 최대 $\sqrt3$.</p>` })}
${h.p({ src: 'KU 2022-8', lv: 2, q: String.raw`$x^2+2xy+2y^2\le1$ 에서 $xy+y^2$ 의 최솟값 $m$, 최댓값 $M$ 에 대해 $mM$`, ans: '$-\\frac14$', sol: String.raw`<p>$u=x+y,\ v=y$: 영역은 $u^2+v^2\le1$, 함수는 $uv\in[-\frac12,\frac12]$.</p>` })}
${h.p({ src: 'KU 2021-9', lv: 3, q: String.raw`$x^2+\frac{y^2}4+z^2=4$ 에서 $2x^2+yz-4z+3$ 의 최댓값`, ans: '$\\frac{41}3$', sol: String.raw`<p>라그랑주: $4x=2\lambda x$, $z=\frac{\lambda y}2$, $y-4=2\lambda z$. 첫 식에서 $x=0$ 또는 $\lambda=2$.</p><p>$\lambda=2$: $z=y$, $y-4=4z=4y$ → $y=z=-\frac43$. $x^2=4-\frac{4}{9}-\frac{16}9=\frac{16}9$. 값 $2\cdot\frac{16}9+\frac{16}9+\frac{16}3+3=\frac{32+16+48+27}{9}=\frac{123}9=\frac{41}3$.</p><p>$x=0$ 인 경우는 $\frac{y^2}4+z^2=4$ 위에서 $yz-4z+3$ 의 최대인데, 계산하면 $\frac{41}3$ 보다 작다. 그래서 최댓값 $\frac{41}3$.</p>` })}
${h.p({ q: String.raw`$f=xy$ 를 $x+y=10$ 위에서 최대로`, ans: '$25$', sol: String.raw`<p>$x=y=5$.</p>` })}
${h.p({ lv: 2, q: String.raw`원점에서 평면 $x+2y+2z=9$ 까지 가장 가까운 점`, ans: '$(1,2,2)$', sol: String.raw`<p>법선 방향 $t(1,2,2)$ 가 평면에: $9t=9$.</p>` })}
${h.p({ lv: 2, q: String.raw`$f=\frac{xy}{x^2+y^2},\ f(0,0)=0$ 에 대해 $f_x(0,0)$ 과 연속성`, ans: '$f_x(0,0)=0$, 불연속', sol: String.raw`<p>$f(x,0)=0$ 이라 $f_x(0,0)=0$. 그런데 $y=x$ 에서 $\frac12$ 라 극한 없음.</p>` })}
${h.p({ lv: 2, q: String.raw`$u=\ln\sqrt{x^2+y^2}$ 의 라플라시안 ($(x,y)\ne0$)`, ans: '$0$', sol: String.raw`<p>2차원에서 $\ln r$ 은 조화함수. 직접: $u_x=\frac{x}{r^2}$, $u_{xx}=\frac{y^2-x^2}{r^4}$, $u_{yy}=\frac{x^2-y^2}{r^4}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$z=f(x,y)$, $x=r\cos\theta,\ y=r\sin\theta$ 일 때 $z_x^2+z_y^2$ 를 $z_r,z_\theta$ 로`, ans: '$z_r^2+\\frac1{r^2}z_\\theta^2$', sol: String.raw`<p>$z_r=z_x\cos\theta+z_y\sin\theta$, $z_\theta=-z_xr\sin\theta+z_yr\cos\theta$. 제곱해서 더하면 교차항 소거.</p>` })}
`
};
