module.exports = {
  id: 'c09', num: '09', part: 'PART B · 다변수와 벡터', title: '공간벡터 · 직선 · 평면', short: '내적 · 외적 · 평면 · 거리',
  schools: { KU: '기타 5%', HY: '선대와 겹침', CAU: '삼중곱 · 외적' },
  lede: '다변수 미적분과 선형대수의 공용 언어. 내적은 "얼마나 같은 방향이냐", 외적은 "둘 다에 수직인 방향과 넓이", 삼중곱은 "부피". 이 세 문장이면 끝난다.',
  body: h => String.raw`
<h3><span class="sn">9.1</span>내적 — 같은 방향인 정도</h3>
${h.box('key', '내적', String.raw`<p>$\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2+a_3b_3=|\mathbf a||\mathbf b|\cos\theta$</p><p>$\mathbf a\cdot\mathbf b=0\iff$ 수직. $\ |\mathbf a|^2=\mathbf a\cdot\mathbf a$.</p><p><b>정사영</b> ($\mathbf b$ 를 $\mathbf a$ 방향으로): $\ \operatorname{proj}_{\mathbf a}\mathbf b=\dfrac{\mathbf a\cdot\mathbf b}{\mathbf a\cdot\mathbf a}\,\mathbf a$ ← 16장 그람–슈미트의 부품</p>`)}
${h.plot({ x: [-0.5, 4.5], y: [-0.6, 3], equal: true, grid: false, w: 420, h: 260, vecs: [{ v: [4, 0.8], c: 1, label: 'a' }, { v: [2.2, 2.4], c: 3, label: 'b' }, { v: [2.2 * 4 * 4 / 16.64 + 2.4 * 0.8 * 4 / 16.64, (2.2 * 4 + 2.4 * 0.8) * 0.8 / 16.64], c: 2, label: 'proj', dy: 18 }], lines: [{ p: [2.2, 2.4], q: [(2.2 * 4 + 2.4 * 0.8) * 4 / 16.64, (2.2 * 4 + 2.4 * 0.8) * 0.8 / 16.64], c: 'm', dash: 1 }], cap: '$\\mathbf b$ 의 그림자를 $\\mathbf a$ 위에 떨어뜨린 것(빨강)이 정사영. 점선은 $\\mathbf a$ 와 수직.' })}

<h3><span class="sn">9.2</span>외적 — 수직 방향 + 넓이</h3>
${h.box('key', '외적', String.raw`<p>$$\mathbf a\times\mathbf b=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}=(a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1)$$</p><p>① $\mathbf a,\mathbf b$ 둘 다에 수직 (오른손 법칙) ② 크기 $=|\mathbf a||\mathbf b|\sin\theta=$ 평행사변형 넓이 ③ $\mathbf b\times\mathbf a=-\mathbf a\times\mathbf b$ ④ 결합법칙 <b>안 됨</b></p>`)}
${h.surf({ w: 420, h: 300, sc: 70, vecs: [{ v: [1.6, 0, 0], c: 1, label: 'a' }, { v: [0.6, 1.5, 0], c: 3, label: 'b' }, { v: [0, 0, 1.8], c: 2, label: 'a × b' }], surfs: [{ p: (u, v) => [1.6 * u + 0.6 * v, 1.5 * v, 0], u: [0, 1], v: [0, 1], n: 6, m: 6, c: 1 }], cap: '$\\mathbf a\\times\\mathbf b$ 는 두 벡터가 만드는 평행사변형에 수직이고, 길이가 그 넓이다.' })}
${h.box('key', '스칼라 삼중곱 = 부피', String.raw`<p>$\mathbf a\cdot(\mathbf b\times\mathbf c)=\det\begin{pmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{pmatrix}$ = 세 벡터가 만드는 평행육면체의 부호 있는 부피. 0 이면 세 벡터가 한 평면 위(일차종속).</p>`)}
${h.ex({ src: 'CAU 2025-5', q: String.raw`$\mathbf a=(1,1,1),\ \mathbf b=(2,3,4),\ \mathbf c=(4,9,16)$ 일 때 $\mathbf a\cdot(\mathbf b\times\mathbf c)$ 는?`, choices: h.c`$2$ | $6$ | $12$ | $16$`,
  sol: String.raw`<p>삼중곱 = 세 벡터를 행으로 쌓은 행렬식. 행이 $(1,1,1),(2,3,4),(4,9,16)$ 이니 $x=2,3,4$ 의 $0$제곱·$1$제곱·$2$제곱을 쌓은 모양, <b>반데르몽드</b> 행렬이다.</p><p>반데르몽드 행렬식 $=\prod_{i<j}(x_j-x_i)=(3-2)(4-2)(4-3)=2$. 모르면 그냥 사루스로 계산해도 30초.</p>`, ans: '① $2$' })}
${h.ex({ src: 'CAU 2026-21', q: String.raw`$\mathbf a=(1,-1,1),\ \mathbf b=(1,1,0),\ \mathbf c=(3,4,5)$ 에 대해 $\mathbf c=c_1\mathbf a+c_2\mathbf b+c_3(\mathbf a\times\mathbf b)$ 로 쓸 때 $c_1c_2c_3$ 은?`, choices: h.c`$\frac{22}9$ | $\frac{14}3$ | $\frac{77}{12}$ | $\frac{77}9$`,
  sol: String.raw`<p>먼저 확인: $\mathbf a\cdot\mathbf b=1-1+0=0$. 수직이다! 그리고 $\mathbf a\times\mathbf b=(-1,1,2)$ 는 둘 다에 수직. 즉 세 벡터가 <b>서로 직교</b>.</p><p>직교 기저면 계수는 연립방정식 풀 필요 없이 내적 한 번: $c_1=\frac{\mathbf c\cdot\mathbf a}{|\mathbf a|^2}=\frac{4}{3}$, $c_2=\frac{\mathbf c\cdot\mathbf b}{|\mathbf b|^2}=\frac72$, $c_3=\frac{\mathbf c\cdot(\mathbf a\times\mathbf b)}{|\mathbf a\times\mathbf b|^2}=\frac{11}6$.</p><p>곱 $\frac{4\cdot7\cdot11}{3\cdot2\cdot6}=\frac{77}9$.</p>`, ans: '④' })}

<h3><span class="sn">9.3</span>직선과 평면</h3>
${h.box('key', '방정식', String.raw`<p><b>직선</b>: 점 $P_0$, 방향 $\mathbf d$ → $\mathbf r=P_0+t\mathbf d$, 대칭형 $\dfrac{x-x_0}{d_1}=\dfrac{y-y_0}{d_2}=\dfrac{z-z_0}{d_3}$</p><p><b>평면</b>: 점 $P_0$, 법선 $\mathbf n=(a,b,c)$ → $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$. <mark>평면 식의 계수가 곧 법선벡터</mark>.</p><p>세 점 $A,B,C$ 를 지나는 평면: 법선 $=\overrightarrow{AB}\times\overrightarrow{AC}$.</p>`)}
${h.box('key', '거리', String.raw`<p>점 $(x_1,y_1,z_1)$ 과 평면 $ax+by+cz+d=0$: $\ \dfrac{|ax_1+by_1+cz_1+d|}{\sqrt{a^2+b^2+c^2}}$</p><p>꼬인 두 직선 ($P_1+t\mathbf d_1$, $P_2+s\mathbf d_2$): $\ \dfrac{\left|\overrightarrow{P_1P_2}\cdot(\mathbf d_1\times\mathbf d_2)\right|}{|\mathbf d_1\times\mathbf d_2|}$</p><p>점과 직선: $\ \dfrac{|\overrightarrow{P_0Q}\times\mathbf d|}{|\mathbf d|}$</p>`)}
${h.ex({ src: 'CAU 2024-19', q: String.raw`평면 $x+y+z=1$ 과 구면 $x^2+y^2+(z+1)^2=4$ 의 교집합인 원 $C$ 가 있다. 이 원의 내부를 밑면으로, 구면 위의 점 $P$ 를 꼭짓점으로 하는 원뿔의 부피의 최댓값은?`, choices: h.c`$\frac{16}9\pi\left(1+\frac1{\sqrt3}\right)$ | $\frac43\pi\left(1+\frac1{\sqrt3}\right)$ | $\frac89\pi\left(1+\frac1{\sqrt3}\right)$ | $\frac83\pi\left(1+\frac1{\sqrt3}\right)$`,
  sol: String.raw`<p>구 중심 $(0,0,-1)$, 반지름 2. 중심에서 평면까지 거리 $d=\frac{|0+0-1-1|}{\sqrt3}=\frac2{\sqrt3}$.</p><p>원 $C$ 반지름² $=4-d^2=\frac83$. 높이 최대는 평면 반대편 구 끝: $h=2+\frac2{\sqrt3}$.</p><p>$V=\frac13\pi\cdot\frac83\cdot2\left(1+\frac1{\sqrt3}\right)=\frac{16}9\pi\left(1+\frac1{\sqrt3}\right)$.</p>`, ans: '①' })}

<div class="probs-h"><h3>연습문제 9</h3><span class="cnt">12문항</span></div>
${h.p({ q: String.raw`$\mathbf a=(1,2,2),\ \mathbf b=(3,0,4)$ 사이 각의 코사인`, ans: '$\\frac{11}{15}$', sol: String.raw`<p>$\frac{3+0+8}{3\cdot5}$.</p>` })}
${h.p({ q: String.raw`$\mathbf b=(3,0,4)$ 의 $\mathbf a=(1,2,2)$ 위로의 정사영`, ans: '$\\frac{11}9(1,2,2)$', sol: String.raw`<p>$\frac{11}{9}\mathbf a$.</p>` })}
${h.p({ q: String.raw`세 점 $(1,0,0),(0,2,0),(0,0,3)$ 을 꼭짓점으로 하는 삼각형 넓이`, ans: '$\\frac72$', sol: String.raw`<p>$(-1,2,0)\times(-1,0,3)=(6,3,2)$, 크기 7, 반.</p>` })}
${h.p({ q: String.raw`같은 세 점을 지나는 평면의 방정식`, ans: '$6x+3y+2z=6$', sol: String.raw`<p>법선 $(6,3,2)$, 점 $(1,0,0)$. (절편형 $\frac x1+\frac y2+\frac z3=1$ 과 같다.)</p>` })}
${h.p({ q: String.raw`점 $(1,1,1)$ 과 평면 $2x-y+2z=10$ 사이 거리`, ans: '$\\frac73$', sol: String.raw`<p>$\frac{|2-1+2-10|}{3}$.</p>` })}
${h.p({ lv: 2, q: String.raw`직선 $(1,0,0)+t(1,1,0)$ 과 $(0,1,3)+s(0,1,1)$ 사이 거리`, ans: '$\\frac1{\\sqrt3}$', sol: String.raw`<p>$\mathbf d_1\times\mathbf d_2=(1,-1,1)$, $\overrightarrow{P_1P_2}=(-1,1,3)$, 내적 $1$. $\frac1{\sqrt3}$.</p>` })}
${h.p({ q: String.raw`두 평면 $x+y+z=1$, $x-y+2z=0$ 의 교선의 방향벡터`, ans: '$(3,-1,-2)$ (의 상수배)', sol: String.raw`<p>법선끼리 외적 $(1,1,1)\times(1,-1,2)=(3,-1,-2)$.</p>` })}
${h.p({ q: String.raw`$\mathbf a\times\mathbf b=\mathbf 0$ 의 의미`, ans: '평행 (또는 영벡터)', sol: String.raw`<p>$\sin\theta=0$.</p>` })}
${h.p({ q: String.raw`$(1,0,1),(0,1,1),(1,1,0)$ 이 만드는 평행육면체의 부피`, ans: '$2$', sol: String.raw`<p>행렬식 $1(0-1)-0+1(0-1)=-2$, 절댓값.</p>` })}
${h.p({ lv: 2, q: String.raw`구 $x^2+y^2+z^2=9$ 위의 점 $(1,2,2)$ 에서의 접평면`, ans: '$x+2y+2z=9$', sol: String.raw`<p>법선 = 중심에서 그 점으로 가는 벡터 $(1,2,2)$.</p>` })}
${h.p({ lv: 2, q: String.raw`항등식 $|\mathbf a\times\mathbf b|^2+(\mathbf a\cdot\mathbf b)^2$ 은?`, ans: '$|\\mathbf a|^2|\\mathbf b|^2$', sol: String.raw`<p>$\sin^2+\cos^2=1$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\mathbf a\times(\mathbf b\times\mathbf c)$ 를 내적으로 풀어 쓰면?`, ans: '$(\\mathbf a\\cdot\\mathbf c)\\mathbf b-(\\mathbf a\\cdot\\mathbf b)\\mathbf c$', sol: String.raw`<p>"BAC − CAB" 로 외운다. 결합법칙이 안 되는 이유가 이거다: $(\mathbf a\times\mathbf b)\times\mathbf c$ 는 다른 값.</p>` })}
`
};
