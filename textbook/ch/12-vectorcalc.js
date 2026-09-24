const field = (F, xr, yr, n, s) => { const v = []; for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) { const x = xr[0] + (xr[1] - xr[0]) * i / n, y = yr[0] + (yr[1] - yr[0]) * j / n; const [a, b] = F(x, y); const L = Math.hypot(a, b); if (L < 1e-9 || !isFinite(L)) continue; v.push({ from: [x, y], v: [a / L * s, b / L * s], c: 'm' }); } return v; };
module.exports = {
  id: 'c12', num: '12', part: 'PART B · 다변수와 벡터', title: '벡터 미적분', short: '선적분 · 그린 · 발산 · 스토크스',
  schools: { KU: '20% · 9년 개근 · 마지막 문제', HY: '미적 파트', CAU: '매년 1–3문항' },
  lede: '고려대의 심장. 겁주는 단원이지만 정체는 "경계에서 적분한 것 = 안쪽에서 미분해서 적분한 것" 한 문장이다. 그린·스토크스·발산 정리는 전부 이 문장의 2D·3D 버전이다.',
  body: h => String.raw`
<h3><span class="sn">12.1</span>벡터장과 선적분</h3>
<p>벡터장 $\mathbf F(x,y)=(P,Q)$ 는 각 점에 화살표가 꽂힌 지도다 (바람, 물 흐름, 힘).</p>
<div class="fig-row">
${h.plot({ x: [-2.2, 2.2], y: [-2.2, 2.2], equal: true, grid: false, w: 300, h: 300, vecs: field((x, y) => [-y, x], [-2, 2], [-2, 2], 8, 0.38), cap: '$\\mathbf F=(-y,x)$: 소용돌이. 회전 있음.' })}
${h.plot({ x: [-2.2, 2.2], y: [-2.2, 2.2], equal: true, grid: false, w: 300, h: 300, vecs: field((x, y) => [x, y], [-2, 2], [-2, 2], 8, 0.38), cap: '$\\mathbf F=(x,y)$: 퍼져 나감. 발산 있음, 회전 없음.' })}
</div>
${h.box('key', '선적분 두 종류', String.raw`<p><b>스칼라</b> (길이로 가중): $\int_Cf\,ds=\int_a^bf(\mathbf r(t))\,|\mathbf r'(t)|\,dt$</p><p><b>벡터</b> (일, 순환): $\int_C\mathbf F\cdot d\mathbf r=\int_a^b\mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt=\int P\,dx+Q\,dy+R\,dz$</p><p>절차: 곡선을 $t$ 로 매개화 → 전부 $t$ 로 바꿔 넣기 → 일변수 적분.</p>`)}

<h3><span class="sn">12.2</span>보존장 — 경로 무관, 끝점만 본다</h3>
${h.box('key', '보존장', String.raw`<p>$\mathbf F=\nabla\phi$ 인 $\phi$ (퍼텐셜)가 있으면 $\displaystyle\int_C\mathbf F\cdot d\mathbf r=\phi(\text{끝})-\phi(\text{시작})$. 닫힌 곡선이면 0.</p><p><b>판정</b> (정의역이 구멍 없는 영역일 때): 2D $\ Q_x=P_y$, 3D $\ \operatorname{curl}\mathbf F=\mathbf 0$.</p><p><b>퍼텐셜 찾기</b>: $P$ 를 $x$ 로, $Q$ 를 $y$ 로, $R$ 을 $z$ 로 각각 적분해서 나온 항들을 <b>겹치는 건 한 번만</b> 모은다.</p>`)}
${h.ex({ src: 'CAU 2024-10', q: String.raw`$\mathbf F=(y\cos z-yze^x,\ x\cos z-ze^x,\ -xy\sin z-ye^x)$ 를 $C:\ \mathbf r(t)=(\cos t,\sin t,t),\ 0\le t\le\frac\pi2$ 를 따라 적분한 값은?`, choices: h.c`$-\frac\pi2e^{\pi/2}$ | $-\frac\pi2$ | $-\pi$ | $-\pi e^{\pi/2}$`,
  sol: String.raw`<p>매개화해서 넣으면 지옥. 보존장인지부터 본다. 각 성분 적분: $P\to xy\cos z-yze^x$, $Q\to xy\cos z-yze^x$, $R\to xy\cos z-yze^x$. 셋 다 같다! $\phi=xy\cos z-yze^x$.</p><p>시작 $(1,0,0)$: $\phi=0$. 끝 $(0,1,\frac\pi2)$: $\phi=0-1\cdot\frac\pi2\cdot1=-\frac\pi2$.</p>`, ans: '②' })}
${h.box('warn', '구멍 뚫린 보존장 (고려대 2025-10, 2026-9 · 중앙대 2023-25)', String.raw`<p>$\mathbf F=\dfrac{(-y,\ x)}{x^2+y^2}$ 는 $Q_x=P_y$ 를 만족하지만 <b>원점을 감는 닫힌 곡선</b>에서 적분이 $2\pi$ 다. 원점에 구멍이 있어서 판정식이 안 통한다.</p><p>정체: $\mathbf F\cdot d\mathbf r=d\theta$ (각도의 변화량). 그래서 이 장의 선적분은 <b>곡선이 원점 둘레로 몇 라디안 돌았냐</b>와 같다.</p>`)}
${h.ex({ src: 'CAU 2023-25', q: String.raw`$C:\ \mathbf r(t)=(e^t\cos t,\ e^t\sin t),\ 0\le t\le1$ 과 $\mathbf F=\dfrac{(-y,x)}{x^2+y^2}$ 에 대해 $\int_C\mathbf F\cdot d\mathbf r$ 은?`, choices: h.c`$1$ | $\frac32$ | $2$ | $\frac52$`,
  sol: String.raw`<p>$\mathbf F\cdot d\mathbf r=d\theta$. 곡선의 각도는 $\theta=t$ 로 $0\to1$. 답 1. ($e^t$ 는 반지름만 늘려서 상관없다.)</p>`, ans: '①' })}

<h3><span class="sn">12.3</span>그린 정리 — 닫힌 곡선이면 넓이 적분으로</h3>
${h.box('key', '그린 정리', String.raw`<p>$C$ 가 영역 $D$ 의 경계이고 <b>반시계 방향</b>이면 $$\oint_CP\,dx+Q\,dy=\iint_D\left(Q_x-P_y\right)dA$$</p><p>넓이 공식: $A=\oint x\,dy=-\oint y\,dx=\frac12\oint(x\,dy-y\,dx)$</p>`)}
${h.plot({ x: [-2.4, 2.4], y: [-1.7, 1.7], equal: true, grid: false, axes: false, w: 380, h: 270, pfills: [{ fx: t => 2 * Math.cos(t) + 0.2 * Math.cos(3 * t), fy: t => 1.3 * Math.sin(t), t: [0, 2 * Math.PI], c: 1 }], curves: [{ fx: t => 2 * Math.cos(t) + 0.2 * Math.cos(3 * t), fy: t => 1.3 * Math.sin(t), t: [0, 2 * Math.PI], c: 1 }], vecs: [0.3, 1.9, 3.5, 5].map(t => ({ from: [2 * Math.cos(t) + 0.2 * Math.cos(3 * t), 1.3 * Math.sin(t)], v: [(-2 * Math.sin(t) - 0.6 * Math.sin(3 * t)) * 0.25, 1.3 * Math.cos(t) * 0.25], c: 2 })), texts: [{ x: -0.3, y: 0, t: 'D', c: 1 }, { x: 1.9, y: 1.2, t: 'C (반시계)', c: 2 }], cap: '반시계로 돌면 영역이 항상 <b>왼쪽</b>에 있다. 이게 양의 방향.' })}
${h.ex({ src: 'CAU 2025-19', q: String.raw`부드러운 폐곡선 $C$ 가 둘러싼 넓이가 $s$ 일 때 $\oint_C(2y+3)dx+(6x-11)dy$ 는?`, choices: h.c`$4s$ | $6s$ | $8s$ | $12s$`,
  sol: String.raw`<p>$Q_x-P_y=6-2=4$. $\iint4\,dA=4s$.</p>`, ans: '① $4s$' })}
${h.ex({ src: 'KU 2023-9', q: String.raw`반시계 단순 폐곡선 $C$ 에 대하여 $\oint_C(y^3-6xy)dx+(6xy-x^3)dy$ 의 최댓값을 구하시오.`,
  sol: String.raw`<p>$Q_x-P_y=(6y-3x^2)-(3y^2-6x)=-3\left[(x-1)^2+(y-1)^2-2\right]$.</p><p>적분값을 최대로 하려면 <b>피적분함수가 양수인 영역 전체</b>를 $D$ 로 잡는다: 원 $(x-1)^2+(y-1)^2<2$.</p><p>중심 옮긴 극좌표: $\int_0^{2\pi}\int_0^{\sqrt2}-3(r^2-2)r\,dr\,d\theta=2\pi\cdot(-3)\left(1-2\right)=6\pi$.</p>`, ans: '$6\\pi$' })}

<h3><span class="sn">12.4</span>곡면적분 — $dS$ 네 가지</h3>
${h.box('key', 'dS 공식', String.raw`<p>① 그래프 $z=f(x,y)$: $dS=\sqrt{1+f_x^2+f_y^2}\,dA$</p><p>② 매개곡면 $\mathbf r(u,v)$: $dS=|\mathbf r_u\times\mathbf r_v|\,du\,dv$</p><p>③ 구 $\rho=a$: $dS=a^2\sin\phi\,d\phi\,d\theta$ &nbsp; ④ 원기둥 $r=a$: $dS=a\,d\theta\,dz$</p><p><b>유량</b>(벡터): $\iint\mathbf F\cdot d\mathbf S=\iint\mathbf F\cdot\mathbf n\,dS$. 그래프면 위쪽 법선으로 $d\mathbf S=(-f_x,-f_y,1)\,dA$.</p>`)}
${h.ex({ src: 'CAU 2026-20', q: String.raw`$\mathbf u(r,\theta)=r\cos\theta\,\mathbf i+r\sin\theta\,\mathbf j+r\,\mathbf k\ (0\le r\le2,\ 0\le\theta\le2\pi)$ 로 표현되는 곡면의 넓이는?`, choices: h.c`$\pi\sqrt2$ | $2\pi\sqrt2$ | $4\pi\sqrt2$ | $8\pi\sqrt2$`,
  sol: String.raw`<p>원뿔이다. $\mathbf u_r=(\cos\theta,\sin\theta,1)$, $\mathbf u_\theta=(-r\sin\theta,r\cos\theta,0)$, 외적 크기 $\sqrt2r$.</p><p>$\int_0^{2\pi}\int_0^2\sqrt2r\,dr\,d\theta=4\sqrt2\pi$.</p>`, ans: '③' })}
${h.ex({ src: 'CAU 2023-26', q: String.raw`구면 $S:x^2+y^2+z^2=4$ 에 대해 $\displaystyle\iint_S\frac{dS}{\sqrt{x^2+y^2+(z-1)^2}}$ 는?`, choices: h.c`$8\pi-1$ | $8\pi$ | $8\pi+1$ | $8\pi+2$`,
  sol: String.raw`<p>분모 = 구 위의 점과 $(0,0,1)$ 사이 거리. 구면좌표 ($\phi$ 는 $z$축에서): 거리² $=4+1-4\cos\phi$.</p>$$\int_0^{2\pi}\int_0^\pi\frac{4\sin\phi}{\sqrt{5-4\cos\phi}}d\phi\,d\theta=8\pi\cdot\frac{1}{2}\Big[\sqrt{5-4\cos\phi}\Big]_0^\pi=4\pi(3-1)=8\pi$$<p>(물리 사실: 구 안의 점에서 본 $\frac1r$ 평균은 $\frac1R$ 이라 $4\pi R^2\cdot\frac1R=4\pi R$.)</p>`, ans: '②' })}

<h3><span class="sn">12.5</span>발산 정리 — 닫힌 곡면이면 부피 적분으로</h3>
${h.box('key', '발산 정리 (가우스)', String.raw`<p>$S$ 가 입체 $E$ 를 감싼 <b>닫힌</b> 곡면, 바깥 방향이면 $$\iint_S\mathbf F\cdot d\mathbf S=\iiint_E\operatorname{div}\mathbf F\,dV,\qquad \operatorname{div}\mathbf F=P_x+Q_y+R_z$$</p>`)}
${h.ex({ src: 'CAU 2023-27', q: String.raw`세 평면 $z=0,\ y=0,\ y=2$ 와 곡면 $z=1-x^2$ 으로 둘러싸인 영역의 경계 $S$ 에 대해 $\mathbf F=(x+\sin y,\ 2y+\cos x,\ 3z)$ 의 유량은?`, choices: h.c`$13$ | $14$ | $15$ | $16$`,
  sol: String.raw`<p>$\operatorname{div}\mathbf F=1+2+3=6$. 부피: 단면 넓이 $\int_{-1}^1(1-x^2)dx=\frac43$, 길이 2 → $\frac83$. 유량 $6\cdot\frac83=16$. 지저분한 $\sin y,\cos x$ 는 미분하면 사라지게 넣은 장식.</p>`, ans: '④ $16$' })}
${h.ex({ src: 'CAU 2024-20', q: String.raw`$z=0,\ z=1$ 과 원기둥 $x^2+y^2=9$ 로 둘러싸인 영역의 경계 $S$ (바깥 방향), $\mathbf F=\big(x(x^2+y^2+z^2)+e^{-yz},\ y(x^2+y^2+z^2)+e^{-zx},\ z(x^2+y^2+z^2)+e^{-xy}\big)$ 의 유량은?`, choices: h.c`$\frac{345\pi}2$ | $\frac{435\pi}2$ | $\frac{525\pi}4$ | $\frac{405\pi}4$`,
  sol: String.raw`<p>$\operatorname{div}$: $x(\rho^2)$ 의 $x$ 미분 $=\rho^2+2x^2$. 세 개 더하면 $3\rho^2+2\rho^2=5(x^2+y^2+z^2)$. 지수 항들은 자기 변수가 없어서 0.</p><p>원기둥좌표: $5\int_0^{2\pi}\int_0^1\int_0^3(r^2+z^2)r\,dr\,dz\,d\theta=10\pi\left(\frac{81}4+\frac{9}{2}\cdot\frac13\right)=\frac{435\pi}2$.</p>`, ans: '②' })}
${h.box('pat', '뚜껑 없는 곡면에 유량 (고려대 매년)', '<p>곡면이 안 닫혀 있으면 발산 정리를 못 쓴다. <b>뚜껑(평평한 원판 등)을 덮어 닫고</b>, 발산 정리로 전체 유량을 구한 뒤 <b>뚜껑 몫을 뺀다</b>. 뚜껑은 평면이라 유량 계산이 쉽다.</p>')}
${h.ex({ q: String.raw`반구면 $z=\sqrt{1-x^2-y^2}$ (위쪽 방향)을 지나는 $\mathbf F=(x+y^2,\ y+e^x,\ z)$ 의 유량`,
  sol: String.raw`<p>밑면 원판 $z=0$ (아래 방향 $-\mathbf k$)으로 뚜껑. 전체 = $\iiint3\,dV=3\cdot\frac{2\pi}3=2\pi$.</p><p>밑면: $\mathbf F\cdot(-\mathbf k)=-z=0$. 그래서 반구 유량 $=2\pi-0$.</p>`, ans: '$2\\pi$' })}

<h3><span class="sn">12.6</span>스토크스 정리 — 공간 곡선의 선적분을 곡면으로</h3>
${h.box('key', '스토크스', String.raw`<p>$$\oint_C\mathbf F\cdot d\mathbf r=\iint_S\operatorname{curl}\mathbf F\cdot d\mathbf S,\qquad\operatorname{curl}\mathbf F=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\\partial_x&\partial_y&\partial_z\\P&Q&R\end{vmatrix}$$</p><p>$C$ 를 경계로 갖는 곡면이면 <b>아무거나 골라도 된다</b>. 제일 평평한 걸 고른다. 방향은 오른손: 엄지가 법선, 나머지 손가락이 $C$ 방향.</p>`)}
${h.surf({ w: 380, h: 300, sc: 85, oy: 40, surfs: [{ p: (u, v) => [v * Math.cos(u), v * Math.sin(u), 0.3 + 0.5 * v * Math.sin(u)], u: [0, 2 * Math.PI], v: [0, 1], n: 16, m: 5, c: 1 }], curves: [{ r: t => [Math.cos(t), Math.sin(t), 0.3 + 0.5 * Math.sin(t)], t: [0, 2 * Math.PI], c: 2 }], vecs: [{ from: [0, 0, 0.3], v: [0, -0.5, 1], c: 3, label: 'n' }], cap: '원기둥과 평면의 교선 $C$(빨강). 스토크스에서는 이 곡선 안쪽의 <b>평면 조각</b>(파랑)을 곡면으로 고르면 제일 편하다.' })}
${h.ex({ src: 'KU 2021-10', q: String.raw`$C$ 는 $x^2+y^2=1$ 과 $z=y+2$ 의 교선 (위에서 봐서 반시계). $\mathbf F=(-y,\ z,\ x)$ 일 때 $\oint_C\mathbf F\cdot d\mathbf r$`,
  sol: String.raw`<p>$\operatorname{curl}\mathbf F=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y)=(0-1,\ 0-1,\ 0+1)=(-1,-1,1)$.</p><p>곡면: 평면 $z=y+2$ 의 원판 부분. $d\mathbf S=(-f_x,-f_y,1)dA=(0,-1,1)dA$. 내적 $0+1+1=2$. $\iint2\,dA=2\pi$.</p>`, ans: '$2\\pi$' })}

<h3><span class="sn">12.7</span>한 장 요약 — 문제 보고 뭘 꺼내나</h3>
${h.table(['문제 모양', '도구'], [
  ['선적분, $\\mathbf F$ 가 지저분', '보존장 검사 → 퍼텐셜, 끝점 대입'],
  ['평면 닫힌 곡선 선적분', '그린 → $\\iint(Q_x-P_y)$'],
  ['"선적분의 최댓값"', '그린 + 피적분함수 양수 영역 전부'],
  ['$\\frac{(-y,x)}{x^2+y^2}$ 류', '원점 감는지 확인. 감으면 $2\\pi\\times$감은 횟수'],
  ['닫힌 곡면 유량', '발산 정리'],
  ['열린 곡면 유량', '뚜껑 덮고 발산 정리 − 뚜껑'],
  ['공간 닫힌 곡선 선적분', '스토크스, 평평한 곡면 선택'],
  ['$\\iint\\operatorname{curl}\\mathbf F\\cdot d\\mathbf S$ 곡면이 복잡', '스토크스 거꾸로: 경계 곡선 선적분 or 더 쉬운 곡면'],
])}

<div class="probs-h"><h3>연습문제 12</h3><span class="cnt">14문항</span></div>
${h.p({ q: String.raw`선분 $(0,0)\to(1,1)$ 위에서 $\int_C(x+y)\,ds$`, ans: '$\\sqrt2$', sol: String.raw`<p>$\mathbf r=(t,t)$, $|\mathbf r'|=\sqrt2$, $\int_0^12t\sqrt2\,dt$.</p>` })}
${h.p({ q: String.raw`$\mathbf F=(y,x)$ 가 $(0,0)$ 에서 $(1,2)$ 까지 아무 경로로 한 일`, ans: '$2$', sol: String.raw`<p>$\phi=xy$.</p>` })}
${h.p({ q: String.raw`$\mathbf F=(2xy,\ x^2+2y)$ 의 퍼텐셜`, ans: '$x^2y+y^2+C$', sol: String.raw`<p>$P$ 적분 $x^2y$, $Q$ 적분 $x^2y+y^2$. 합집합.</p>` })}
${h.p({ src: 'KU 2018-6', q: String.raw`타원 $\frac{x^2}4+\frac{y^2}9=1$ (반시계) 위에서 $\oint e^x\sin y\,dx+(x+e^x\cos y)\,dy$`, ans: '$6\\pi$', sol: String.raw`<p>$Q_x-P_y=1+e^x\cos y-e^x\cos y=1$. 넓이 $\pi\cdot2\cdot3$.</p>` })}
${h.p({ src: 'KU 2020-5', q: String.raw`단위원 (반시계) 위에서 $\mathbf F=\left(-y^3+\sin(x^2),\ x^3+\cos(y^2)\right)$ 의 선적분`, ans: '$\\frac{3\\pi}2$', sol: String.raw`<p>$Q_x-P_y=3x^2+3y^2$. $3\int_0^{2\pi}\int_0^1r^3drd\theta=\frac{3\pi}2$.</p>` })}
${h.p({ q: String.raw`그린 정리로 타원 $x=a\cos t,\ y=b\sin t$ 의 넓이`, ans: '$\\pi ab$', sol: String.raw`<p>$\frac12\oint(x\,dy-y\,dx)=\frac12\int_0^{2\pi}ab\,dt$.</p>` })}
${h.p({ q: String.raw`단위원 (반시계)에서 $\oint\frac{-y\,dx+x\,dy}{x^2+y^2}$`, ans: '$2\\pi$', sol: String.raw`<p>$d\theta$ 를 한 바퀴. $Q_x=P_y$ 인데 0이 아니다: 원점 구멍.</p>` })}
${h.p({ q: String.raw`반지름 $a$ 인 구면을 바깥으로 지나는 $\mathbf F=(x,y,z)$ 의 유량`, ans: '$4\\pi a^3$', sol: String.raw`<p>$\operatorname{div}=3$, $3\cdot\frac43\pi a^3$.</p>` })}
${h.p({ q: String.raw`$z=x^2+y^2\ (z\le1)$ 포물면의 넓이`, ans: '$\\frac\\pi6(5\\sqrt5-1)$', sol: String.raw`<p>$\iint\sqrt{1+4r^2}r\,dr\,d\theta=2\pi\cdot\frac1{12}(5^{3/2}-1)$.</p>` })}
${h.p({ q: String.raw`$\mathbf F=(yz,\ xz,\ xy)$ 의 $\operatorname{curl}$ 과 $\operatorname{div}$`, ans: '$\\operatorname{curl}=\\mathbf 0,\\ \\operatorname{div}=0$', sol: String.raw`<p>$\phi=xyz$ 의 기울기라 curl 0. div 는 각 성분이 자기 변수 없음.</p>` })}
${h.p({ lv: 2, q: String.raw`반구면 $z=\sqrt{1-x^2-y^2}$ (위 방향)에서 $\iint\operatorname{curl}\mathbf F\cdot d\mathbf S$, $\mathbf F=(-y,\ x,\ z^2)$`, ans: '$2\\pi$', sol: String.raw`<p>스토크스로 경계 단위원: $\oint-y\,dx+x\,dy=2\cdot\pi$.</p>` })}
${h.p({ src: 'KU 2019-7', lv: 2, q: String.raw`$x^2+y^2\le1,\ 0\le z\le1+x$ 영역의 경계면(바깥)을 지나는 $\mathbf F=(x^2z,\ y,\ xyz)$ 의 유량`, ans: '$\\frac{3\\pi}2$', sol: String.raw`<p>$\operatorname{div}=2xz+1+xy$. $\iiint1=\iint(1+x)dA=\pi$. $\iiint2xz=\iint x(1+x)^2dA=\iint2x^2dA=\frac\pi2$ (홀수 차 항은 0). $\iiint xy=0$. 합 $\frac{3\pi}2$.</p>` })}
${h.p({ lv: 2, q: String.raw`원기둥 $x^2+y^2=4,\ 0\le z\le3$ 의 옆면(바깥)만 지나는 $\mathbf F=(x,y,z)$ 의 유량`, ans: '$24\\pi$', sol: String.raw`<p>옆면에서 $\mathbf n=\frac{(x,y,0)}2$, $\mathbf F\cdot\mathbf n=\frac{x^2+y^2}2=2$. 넓이 $2\pi\cdot2\cdot3=12\pi$. 곱 $24\pi$. (검산: 전체 $3\cdot12\pi=36\pi$, 윗면 $3\cdot4\pi=12\pi$, 밑면 0.)</p>` })}
${h.p({ lv: 3, q: String.raw`타원 $C:\frac{x^2}{9}+y^2=1$ (반시계) 위에서 $\oint\frac{-y\,dx+x\,dy}{x^2+y^2}$`, ans: '$2\\pi$', sol: String.raw`<p>원점을 한 번 감으니 모양 상관없이 $2\pi$. 증명: 안쪽에 작은 원을 파내고 그린 정리를 쓰면 사이 영역에서 $Q_x-P_y=0$ 이라 두 선적분이 같다.</p>` })}
`
};
