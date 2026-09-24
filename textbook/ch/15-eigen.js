module.exports = {
  id: 'c15', num: '15', part: 'PART C · 선형대수', title: '고윳값과 대각화', short: '고윳값 · 대각화 · Aⁿ · 조르당',
  schools: { KU: '출제 없음', HY: '선대 40문항 중 13문항', CAU: '매년 3–5문항' },
  lede: '선형대수에서 점수가 제일 많이 걸린 장. 핵심 아이디어는 하나다: 행렬이 방향을 꺾지 않고 늘이기만 하는 특별한 방향이 있다. 그 방향을 축으로 삼으면 어떤 괴물 행렬도 "축마다 몇 배"라는 숫자 목록이 되고, 그걸 2026제곱하는 건 일도 아니다.',
  body: h => String.raw`
<h3><span class="sn">15.1</span>고유벡터 — 안 꺾이는 방향</h3>
${h.lin2([[2, 1], [1, 2]], { eig: [[1, 1], [1, -1]], cap: '$A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$. 격자는 다 비틀리는데 빨간 두 직선 위의 벡터는 방향이 그대로다. $(1,1)$ 방향은 3배, $(1,-1)$ 방향은 1배. 이게 고유벡터와 고윳값.' })}
${h.box('key', '정의', String.raw`<p>$A\mathbf v=\lambda\mathbf v\ (\mathbf v\ne\mathbf 0)$: $\mathbf v$ 는 <b>고유벡터</b>, $\lambda$ 는 <b>고윳값</b>. $\lambda$ 에 대응하는 고유벡터 전체 + $\mathbf 0$ = <b>고유공간</b> $E(\lambda)=N(A-\lambda I)$.</p>`)}

<h3><span class="sn">15.2</span>구하는 법</h3>
${h.box('key', '특성방정식', String.raw`<p>$A\mathbf v=\lambda\mathbf v$ ⟺ $(A-\lambda I)\mathbf v=\mathbf 0$ 이 0 아닌 해를 가짐 ⟺ $\det(A-\lambda I)=0$.</p><ol class="steps"><li>$\det(A-\lambda I)=0$ 풀어서 $\lambda$ 전부.</li><li>각 $\lambda$ 마다 $(A-\lambda I)\mathbf v=\mathbf 0$ 을 가우스 소거로 → 고유벡터.</li></ol><p>$2\times2$ 지름길: $\lambda^2-(\operatorname{tr}A)\lambda+\det A=0$.</p>`)}
${h.ex({ src: 'HY 2022-10', q: String.raw`$A=\begin{pmatrix}4&0&1\\-2&1&0\\-2&0&1\end{pmatrix}$ 의 고윳값 $\lambda_1<\lambda_2<\lambda_3$ 에 대응하는 고유벡터가 $\mathbf a=(a_1,1,a_3),\ \mathbf b=(b_1,b_2,2),\ \mathbf c=(3,c_2,c_3)$ 일 때 $\lambda_1+\lambda_2+\lambda_3+a_1+b_2+c_3$ 는?`, choices: h.c`$3$ | $4$ | $5$ | $6$ | $7$`,
  sol: String.raw`<p>2열이 $(0,1,0)^T$ 라 2열로 전개: $\det(A-\lambda I)=(1-\lambda)\left[(4-\lambda)(1-\lambda)+2\right]=(1-\lambda)(\lambda-2)(\lambda-3)$. 고윳값 $1,2,3$ (합 6, 대각합으로 검산).</p><p>$\lambda=1$: $3x+z=0,\ -2x=0$ → $(0,1,0)$: $a_1=0$. $\lambda=2$: $2x+z=0,\ -2x-y=0$ → $(-1,2,2)$: $b_2=2$. $\lambda=3$: $x+z=0,\ -2x-2y=0$ → $(1,-1,-1)$, 1성분을 3으로: $(3,-3,-3)$, $c_3=-3$.</p><p>$6+0+2-3=5$.</p>`, ans: '③ $5$' })}

<h3><span class="sn">15.3</span>성질표 — 계산 안 하고 답 내기</h3>
${h.table(['사실', '쓰는 곳'], [
  ['$\\sum\\lambda_i=\\operatorname{tr}A,\\quad\\prod\\lambda_i=\\det A$', '고윳값 합·곱 묻는 문제 전부'],
  ['삼각행렬의 고윳값 = 대각 성분', '계산 0초'],
  ['$A^k$ 의 고윳값 $\\lambda^k$, $A^{-1}$ 은 $\\frac1\\lambda$, $f(A)$ 는 $f(\\lambda)$', '$\\det f(A)=\\prod f(\\lambda_i)$'],
  ['$A$ 와 $A^T$ 의 고윳값은 같다 (고유벡터는 다름)', '〈보기〉'],
  ['닮은 행렬 $P^{-1}AP$ 는 고윳값 같다', '$BAB^{-1}$ 대각화'],
  ['0 이 고윳값 ⟺ 비가역', '〈보기〉'],
  ['모든 행의 합이 $s$ 면 $(1,\\ldots,1)$ 이 고유벡터, 고윳값 $s$', '눈으로 하나 찾기'],
  ['$\\operatorname{rank}1$ 행렬 $\\mathbf{uv}^T$: 고윳값 $\\mathbf v\\cdot\\mathbf u$ 하나 + 나머지 0', '$J$(전부 1) 는 $n,0,\\ldots,0$'],
])}
${h.ex({ src: 'CAU 2023-3', q: String.raw`$A=\begin{pmatrix}0.1&0.2&-0.1\\0.1&0&0.2\\0.4&0.4&0.5\end{pmatrix}$ 의 고윳값 $\alpha,\beta,\gamma$ 에 대하여 $\frac3\alpha+\frac3\beta+\frac3\gamma$ 는?`, choices: h.c`$3$ | $4$ | $5$ | $6$`,
  sol: String.raw`<p>$\frac1\alpha+\frac1\beta+\frac1\gamma=\operatorname{tr}(A^{-1})=\dfrac{\alpha\beta+\beta\gamma+\gamma\alpha}{\alpha\beta\gamma}$. 분자 = 주소행렬식(대각 $2\times2$ 소행렬식)의 합, 분모 = $\det A$.</p><p>10배 한 $B=10A$ 로 계산하면 편하다: $B=\begin{pmatrix}1&2&-1\\1&0&2\\4&4&5\end{pmatrix}$. 주소행렬식: $\begin{vmatrix}1&2\\1&0\end{vmatrix}=-2$, $\begin{vmatrix}1&-1\\4&5\end{vmatrix}=9$, $\begin{vmatrix}0&2\\4&5\end{vmatrix}=-8$ → 합 $-1$. $\det B=1(0-8)-2(5-8)-1(4-0)=-6$.</p><p>$B$ 의 역수합 $=\frac{-1}{-6}=\frac16$, $A=\frac1{10}B$ 라 $A$ 의 역수합은 10배 $=\frac53$. 3배 하면 5.</p>`, ans: '③ $5$' })}
${h.ex({ src: 'CAU 2024-27', q: String.raw`$A=\begin{pmatrix}2&0&0&1\\0&0&2&1\\0&0&1&0\\0&1&2&0\end{pmatrix}$ 에 대하여 $\det(A^4-3A^3+A^2)$ 은?`, choices: h.c`$-20$ | $-10$ | $0$ | $10$`,
  sol: String.raw`<p>고윳값: 1열 $(2,0,0,0)$ 로 전개 → $2$ 하나, 남은 $\begin{pmatrix}0&2&1\\0&1&0\\1&2&0\end{pmatrix}$ 은 2행으로 전개 → $1$ 과 $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ 의 $\pm1$. 고윳값 $2,1,1,-1$.</p><p>$f(\lambda)=\lambda^4-3\lambda^3+\lambda^2$: $f(2)=-4,\ f(1)=-1,\ f(-1)=5$. 곱 $(-4)(-1)(-1)(5)=-20$.</p>`, ans: '①' })}

<h3><span class="sn">15.4</span>대각화</h3>
${h.box('key', '대각화', String.raw`<p>$A=PDP^{-1}$: $P$ 의 열 = 고유벡터들, $D$ = 대응하는 고윳값을 대각에. <b>순서를 맞춘다</b>.</p><p><b>가능 조건</b>: 일차독립인 고유벡터가 $n$ 개 ⟺ 각 고윳값의 (대수적 중복도) = (고유공간 차원). 고윳값이 전부 다르면 무조건 가능. 대칭행렬도 무조건 가능 (16장).</p>`)}
${h.ex({ src: 'CAU 2024-24', q: String.raw`$A=\begin{pmatrix}2&0&-1\\1&-3&2\\-1&2&6\end{pmatrix}$ 가 어떤 $B$ 에 대해 $BAB^{-1}=\operatorname{diag}(a,b,c)$ 를 만족할 때 $a+b+c$ 는?`, choices: h.c`$0$ | $2$ | $3$ | $5$`,
  sol: String.raw`<p>닮음이라 대각합 보존: $a+b+c=\operatorname{tr}A=2-3+6=5$. 고윳값은 끔찍한 3차방정식 근인데 구할 필요 없다.</p>`, ans: '④ $5$' })}

<h3><span class="sn">15.5</span>$A^n$ 과 점화식</h3>
${h.box('key', 'Aⁿ 세 가지 방법', String.raw`<p>① <b>대각화</b>: $A^n=PD^nP^{-1}$.</p><p>② <b>고유벡터에 곱하기</b>: $\mathbf v=c_1\mathbf v_1+c_2\mathbf v_2$ 로 쪼개면 $A^n\mathbf v=c_1\lambda_1^n\mathbf v_1+c_2\lambda_2^n\mathbf v_2$. 벡터 하나에만 곱하라고 하면 이게 제일 빠르다.</p><p>③ <b>극한</b>: $|\lambda|<1$ 인 성분은 $n\to\infty$ 에서 사라지고 $\lambda=1$ 성분만 남는다.</p>`)}
${h.ex({ src: 'CAU 2024-28', q: String.raw`$\begin{pmatrix}6&-3\\-3&6\end{pmatrix}^{10}\begin{pmatrix}1\\1\end{pmatrix}=\begin{pmatrix}a\\b\end{pmatrix}$ 일 때 $a+b$ 는?`, choices: h.c`$3^{10}$ | $2\cdot3^{10}$ | $3^{11}$ | $4\cdot3^{10}$`,
  sol: String.raw`<p>$A(1,1)^T=(3,3)^T=3(1,1)^T$. 고유벡터다! $A^{10}(1,1)^T=3^{10}(1,1)^T$. 합 $2\cdot3^{10}$.</p>`, ans: '②' })}
${h.ex({ src: 'CAU 2023-6', q: String.raw`$\begin{pmatrix}1&0\\1.5&0.5\end{pmatrix}^n=\begin{pmatrix}a_n&b_n\\c_n&d_n\end{pmatrix}$ 일 때 $\lim(a_n+b_n+c_n+d_n)$ 은?`, choices: h.c`$1$ | $2$ | $3$ | $4$`,
  sol: String.raw`<p>하삼각이라 고윳값 $1,\ 0.5$. $0.5^n\to0$ 이라 극한은 "$\lambda=1$ 성분만 남기는" 행렬. 직접 점화식이 더 빠르다: $A^{n+1}=AA^n$ 의 2행: $c_{n+1}=1.5a_n+0.5c_n$, $d_{n+1}=1.5b_n+0.5d_n$. $a_n=1,b_n=0$ 이니 $c\to1.5+0.5c$ → $c=3$, $d\to0.5d$ → $d=0$.</p><p>극한행렬 $\begin{pmatrix}1&0\\3&0\end{pmatrix}$, 합 4.</p>`, ans: '④ $4$' })}
${h.ex({ src: 'CAU 2024-26', q: String.raw`$A=\begin{pmatrix}0&-1&2\\-2&1&2\\-3&-1&5\end{pmatrix}$, $B=A^{2024}\begin{pmatrix}1&1&1\\1&0&1\\1&1&2\end{pmatrix}$ 의 대각합 $\operatorname{tr}(B)$ 는?`, choices: h.c`$1+2^{2024}+2\cdot3^{2024}$ | $1+3^{2024}$ | $1+2^{2024}$ | $1+2\cdot3^{2024}$`,
  sol: String.raw`<p>고윳값 $1,2,3$ (특성다항식 계산 or 대각합 6 + 추측). 그래서 $\operatorname{tr}(B)=\alpha\cdot1^{2024}+\beta\cdot2^{2024}+\gamma\cdot3^{2024}$ 꼴, $\alpha,\beta,\gamma$ 는 $n$ 에 무관.</p><p>$n=0$: $\operatorname{tr}C=1+0+2=3=\alpha+\beta+\gamma$. $n=1$: $\operatorname{tr}(AC)=7=\alpha+2\beta+3\gamma$. $n=2$: $\operatorname{tr}(A^2C)=19=\alpha+4\beta+9\gamma$. 풀면 $\alpha=1,\ \beta=0,\ \gamma=2$.</p><p>보기 중 $n=1$ 에서 7 이 되는 건 ④ ($1+2\cdot3=7$) 뿐이라, 사실 $\operatorname{tr}(AC)$ 하나만 계산해도 끝난다.</p>`, ans: '④' })}
${h.box('key', '선형 점화식 = 특성방정식', String.raw`<p>$a_{n+3}=pa_{n+2}+qa_{n+1}+ra_n$ 의 특성방정식 $t^3=pt^2+qt+r$ 의 근이 $\alpha,\beta,\gamma$ (서로 다름)면 $a_n=c_1\alpha^n+c_2\beta^n+c_3\gamma^n$. 초기값 3개로 $c_i$ 결정. (동반행렬의 고윳값 이야기와 같다.)</p>`)}
${h.ex({ src: 'HY 2026-13', q: String.raw`$a_0=6,\ a_1=-1,\ a_2=15$, $a_{n+3}=-a_{n+2}+4a_{n+1}+4a_n$ 일 때 $a_{2025}$ 는?`, choices: h.c`$2-3^{2025}$ | $3-3^{2025}$ | $2^{2025}-3$ | $3^{2025}-2$ | $2^{2025}+3^{2025}-1$`,
  sol: String.raw`<p>$t^3+t^2-4t-4=(t+1)(t^2-4)$ → $t=-1,2,-2$. $a_n=A(-1)^n+B2^n+C(-2)^n$.</p><p>$A+B+C=6$, $-A+2B-2C=-1$, $A+4B+4C=15$ → $A=3,\ B=2,\ C=1$.</p><p>$a_{2025}=-3+2^{2026}-2^{2025}=2^{2025}-3$.</p>`, ans: '③' })}

<h3><span class="sn">15.6</span>케일리–해밀턴 · 최소다항식</h3>
${h.box('key', '케일리–해밀턴', String.raw`<p>특성다항식 $f(\lambda)=\det(\lambda I-A)$ 에 $A$ 를 넣으면 $f(A)=O$.</p><p>쓰는 법: $A$ 의 높은 거듭제곱을 <b>$f$ 로 나눈 나머지</b>로 줄인다. $A^7$ 은 (나머지 다항식)$(A)$.</p><p><b>최소다항식</b> $m(\lambda)$: $m(A)=O$ 인 최소 차수 모닉 다항식. 특성다항식을 나누고, <b>근은 똑같이</b> 고윳값 전부를 가진다 (중복도만 작을 수 있음). 대각화 가능 ⟺ $m$ 이 중근이 없다.</p>`)}
${h.ex({ src: 'HY 2023-12', q: String.raw`$A=\begin{pmatrix}1&0&0&0\\0&0&-9&0\\0&1&-6&0\\0&0&0&-2\end{pmatrix}$, $\mathbf v=(0,1,0,0)^T$ 에 대해 $A^3\mathbf v=a_1A\mathbf v+a_0\mathbf v$ 일 때 $a_0-a_1$ 은?`, choices: h.c`$21$ | $24$ | $27$ | $30$ | $33$`,
  sol: String.raw`<p>$\mathbf v$ 는 가운데 블록 $\begin{pmatrix}0&-9\\1&-6\end{pmatrix}$ 안에서만 논다. 이 블록의 특성다항식 $\lambda^2+6\lambda+9$ → $A^2\mathbf v=-6A\mathbf v-9\mathbf v$.</p><p>$A^3\mathbf v=-6A^2\mathbf v-9A\mathbf v=-6(-6A\mathbf v-9\mathbf v)-9A\mathbf v=27A\mathbf v+54\mathbf v$. $54-27$.</p>`, ans: '③ $27$' })}
${h.ex({ src: 'HY 2024-48·49', q: String.raw`$5\times5$ 실행렬 $A$: ㉠ $A,\ A^2$ 은 $I$ 의 상수배가 아니다 ㉡ $A^4-4A^3+5A^2-8A+6I=O$ ㉢ $A-3I$ 는 가역.<br>48. 최소다항식 $m$ 에 대해 $m(3)$ &nbsp; 49. $\dim E(1)>1$ 일 때 특성다항식 $f$ 의 $f(2)$`,
  sol: String.raw`<p>인수분해: $x^4-4x^3+5x^2-8x+6=(x-1)(x-3)(x^2+2)$. ㉢ 으로 3 은 고윳값 아님 → $m\mid(x-1)(x^2+2)$.</p><p>후보 $x-1$ ($A=I$, ㉠ 위반), $x^2+2$ ($A^2=-2I$, ㉠ 위반), $(x-1)(x^2+2)$. 그래서 $m(3)=2\cdot11=22$.</p><p>49: 고윳값은 $1,\ \pm\sqrt2i$. 실행렬이라 허근은 짝으로, 각각 최소 1개. 총 5개. $\dim E(1)>1$ 이면 1의 중복도 $\ge2$ → $(x-1)^3(x^2+2)$. $f(2)=1\cdot6=6$.</p>`, ans: '48: $22$ · 49: $6$' })}

<h3><span class="sn">15.7</span>조르당 블록 — 대각화 안 될 때</h3>
<p>고유벡터가 모자라면 대각화가 안 되고, 대신 대각 바로 옆에 1 이 붙은 <b>조르당 블록</b>까지만 간다.</p>
${h.box('key', '조르당 블록의 거듭제곱', String.raw`<p>$J=\begin{pmatrix}\lambda&0&0\\1&\lambda&0\\0&1&\lambda\end{pmatrix}=\lambda I+N$ ($N^3=O$) 이면 이항정리로 $J^n=\lambda^nI+n\lambda^{n-1}N+\binom n2\lambda^{n-2}N^2$.</p><p>블록 크기 = $(A-\lambda I)^k$ 의 영공간이 더 이상 안 커지는 최소 $k$ (그 고윳값의 최대 블록 크기).</p>`)}
${h.ex({ src: 'HY 2026-15·16', q: String.raw`$A=\begin{pmatrix}3&0&0&0&0&0\\1&3&0&0&0&0\\0&1&3&0&0&0\\0&0&0&3&0&0\\0&0&0&1&3&0\\0&0&0&0&0&2\end{pmatrix}$. 15. $N((A-3I)^7)=N((A-3I)^k)$ 인 최소 자연수 $k$ &nbsp; 16. $A^{2026}=(p_{ij})$ 일 때 $1350\dfrac{p_{21}}{p_{31}}$`,
  sol: String.raw`<p>블록: 3짜리 크기 3 (1–3행), 크기 2 (4–5행), 2짜리 크기 1. 15: 최대 블록 크기 3 → $k=3$.</p><p>16: 첫 블록에서 $p_{21}=n3^{n-1}$, $p_{31}=\binom n23^{n-2}$ ($n=2026$). 비 $=\dfrac{3n}{n(n-1)/2}=\dfrac6{n-1}=\dfrac6{2025}$. $1350\cdot\frac6{2025}=4$.</p>`, ans: '15: ② $3$ · 16: ① $4$' })}

<h3><span class="sn">15.8</span>〈보기〉 판정 모음</h3>
${h.ex({ src: 'CAU 2024-30', q: String.raw`$A^T=A^TA$ 이고 $A\ne O$ 일 때 옳은 것을 모두 고르면? (가) $A=A^T$ (나) $A=A^{-1}$ (다) $A^2=A$ (라) $\det A=-1$`, choices: h.c`(가), (나) | (나), (다) | (가), (다) | (가), (다), (라)`,
  sol: String.raw`<p>양변 전치: $A=(A^TA)^T=A^TA=A^T$ → (가) 참. 그러면 $A=A^TA=A\cdot A$ → (다) 참.</p><p>(나): $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ 은 조건 만족인데 역행렬 없음 → 거짓. (라): $A^2=A$ 면 $\det A\in\{0,1\}$ → 거짓.</p>`, ans: '③' })}
${h.ex({ src: 'CAU 2026-6', q: String.raw`$5\times5$ 행렬 $J_5$ 가 $i+j=6$ 인 자리만 1 (반대각선). 다음 중 <b>틀린</b> 것은? (가) $B$ 의 1열과 5열이 같으면 $BJ_5=B$ (나) $J_5$ 의 대각합은 1 (다) $(1,2,2,2,1),\ (1,-3,3,-3,-1)$ 은 모두 $J_5$ 의 고유벡터 (라) $J_5^{-1}=J_5$`, choices: h.c`(가) | (나) | (다) | (라)`,
  sol: String.raw`<p>$J_5$ 는 순서를 거꾸로 뒤집는 행렬. $BJ_5$ = $B$ 의 열 순서를 뒤집은 것.</p><p>(가) $BJ_5=B$ 이려면 1열=5열 <b>그리고</b> 2열=4열이어야 한다. 1열=5열만으로는 부족 → 거짓. (나) 대각에서 1인 칸은 $(3,3)$ 하나 → 참. (라) 두 번 뒤집으면 원래대로 → 참.</p><p>(다) $(1,2,2,2,1)$ 은 뒤집어도 같아서 고윳값 1. 그런데 인쇄된 $(1,-3,3,-3,-1)$ 은 뒤집으면 $(-1,-3,3,-3,1)$ 이라 자기의 상수배가 <b>아니다</b>. 엄밀히는 (다)도 거짓이다. 출제 의도는 뒤집으면 부호만 바뀌는 벡터(예: $(1,-3,0,3,-1)$, 고윳값 $-1$)였을 가능성이 크다.</p><p>시험장 판단: (가)는 누가 봐도 거짓이 되게 설계된 명제고 (다)는 오타 의심. 이런 경우 <b>설계된 함정 쪽</b>을 고른다. 공식 정답은 이 책에서 확인하지 못했다.</p>`, ans: '① (가) (출제 의도 기준)' })}

<div class="probs-h"><h3>연습문제 15</h3><span class="cnt">16문항</span></div>
${h.p({ q: String.raw`$\begin{pmatrix}4&1\\2&3\end{pmatrix}$ 의 고윳값과 고유벡터`, ans: '$5:(1,1),\\ 2:(1,-2)$', sol: String.raw`<p>$\lambda^2-7\lambda+10=0$.</p>` })}
${h.p({ src: 'CAU 2025-4', q: String.raw`$B=\begin{pmatrix}1&1&0\\1&-1&0\\0&0&0\end{pmatrix}$ 의 고윳값이 <b>아닌</b> 것은?`, choices: h.c`$-\sqrt2$ | $0$ | $\frac{\sqrt2}2$ | $\sqrt2$`, ans: '③', sol: String.raw`<p>블록: $\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ 은 $\lambda^2-2=0$, 나머지 0.</p>` })}
${h.p({ src: 'HY 2025-49', q: String.raw`고윳값이 $1,-1,2$ 인 $3\times3$ 행렬 $A$ 에 대해 $B=A^3-5A^2$ 의 $\det B$`, choices: h.c`$-288$ | $-144$ | $-72$ | $-48$ | $-24$`, ans: '① $-288$', sol: String.raw`<p>$f(\lambda)=\lambda^3-5\lambda^2$: $f(1)=-4,\ f(-1)=-6,\ f(2)=-12$. 곱 $-288$.</p>` })}
${h.p({ src: 'HY 2023-25', q: String.raw`$A$ 의 고윳값 $1,2,3$ 에 대응하는 고유벡터가 $(1,0,0),(1,1,0),(1,1,1)$ 일 때 $A$ 의 3열 성분의 합 $c+f+i$`, ans: '$5$', sol: String.raw`<p>$A(0,0,1)^T=A[(1,1,1)-(1,1,0)]=(3,3,3)-(2,2,0)=(1,1,3)$. 3열이 $(1,1,3)$.</p>` })}
${h.p({ src: 'HY 2023-24', lv: 2, q: String.raw`$B=\operatorname{diag}(2,-1,1,3)=P^{-1}AP$ 일 때 $f(x)$ 를 $A+2I$ 의 특성다항식이라 하면 $|f(2)|$`, ans: '$6$', sol: String.raw`<p>$A+2I$ 의 고윳값 $4,1,3,5$. $f(2)=(2-4)(2-1)(2-3)(2-5)=-6$. $P$ 는 필요 없다.</p>` })}
${h.p({ src: 'HY 2024-46', lv: 2, q: String.raw`$B=\operatorname{diag}(-1,2,1,3)=P^{-1}AP$, $P=\begin{pmatrix}1&0&0&0\\1&5&0&0\\-4&1&1&0\\2&-2&1&3\end{pmatrix}$. $A$ 의 고윳값 2 에 대응하는 고유벡터 $(a,b,1,c)$ 의 $a^2+b^2+c^2$`, choices: h.c`$1$ | $5$ | $13$ | $21$ | $29$`, ans: '⑤ $29$', sol: String.raw`<p>$AP=PB$ 라서 $P$ 의 2열 $(0,5,1,-2)$ 이 고윳값 2 의 고유벡터. 셋째 성분이 이미 1.</p>` })}
${h.p({ src: 'HY 2022-16', lv: 2, q: String.raw`$A=\begin{pmatrix}0&-1&0&0\\1&-2&0&0\\0&0&3&0\\0&0&0&5\end{pmatrix},\ \mathbf v=(1,0,0,0)$ 일 때 $(3A^7+7A^6+13A^3+5A^2-4A)\mathbf v=(p,q,r,s)$ 의 $p+q+r+s$`, choices: h.c`$8$ | $10$ | $13$ | $17$ | $22$`, ans: '① $8$', sol: String.raw`<p>$\mathbf v$ 는 왼쪽 위 블록 $\begin{pmatrix}0&-1\\1&-2\end{pmatrix}$ 에서만 논다. 그 특성다항식 $(\lambda+1)^2$. 주어진 다항식을 $(x+1)^2$ 로 나눈 나머지 $ax+b$ 를 구하면: $g(-1)=b-a$, $g'(-1)=a$. $g(-1)=-3+7-13+5+4=0$, $g'(x)=21x^6+42x^5+39x^2+10x-4$, $g'(-1)=21-42+39-10-4=4$. 나머지 $4x+4$.</p><p>$(4A+4I)\mathbf v=4(0,1,0,0)+4(1,0,0,0)=(4,4,0,0)$. 합 8.</p>` })}
${h.p({ q: String.raw`$A=\begin{pmatrix}1&2\\0&3\end{pmatrix}$ 을 대각화하시오.`, ans: '$P=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix},\\ D=\\operatorname{diag}(1,3)$', sol: String.raw`<p>$\lambda=3$: $(A-3I)=\begin{pmatrix}-2&2\\0&0\end{pmatrix}$ → $(1,1)$.</p>` })}
${h.p({ q: String.raw`$\begin{pmatrix}2&1\\0&2\end{pmatrix}$ 은 대각화 가능한가?`, ans: '불가능', sol: String.raw`<p>고윳값 2 (중복 2), 고유공간 차원 1.</p>` })}
${h.p({ q: String.raw`$\begin{pmatrix}0.5&0.5\\0.5&0.5\end{pmatrix}^{100}$`, ans: '자기 자신', sol: String.raw`<p>$P^2=P$ (사영행렬).</p>` })}
${h.p({ lv: 2, q: String.raw`$A=\begin{pmatrix}1&1\\1&0\end{pmatrix}$ 의 고윳값으로 피보나치 수의 일반항을 쓰시오.`, ans: '$F_n=\\frac1{\\sqrt5}(\\phi^n-\\psi^n)$', sol: String.raw`<p>$\lambda^2-\lambda-1=0$, $\phi=\frac{1+\sqrt5}2,\ \psi=\frac{1-\sqrt5}2$.</p>` })}
${h.p({ q: String.raw`$4\times4$ 행렬 $J$ (모든 성분 1)의 고윳값`, ans: '$4,0,0,0$', sol: String.raw`<p>rank 1, 대각합 4.</p>` })}
${h.p({ src: 'CAU 2025-21', q: String.raw`반대칭행렬($A^T=-A$)에 대해 옳은 것을 모두: (가) $A-A^T$ 는 반대칭 (나) $n$ 홀수면 $\det A=0$ (다) $n$ 짝수면 $\det A<0$ (라) 대각성분 합 0`, choices: h.c`(가),(나),(다) | (가),(나),(라) | (가),(다),(라) | (나),(다),(라)`, ans: '②', sol: String.raw`<p>(가) $2A$. (나) 13장 연습문제. (다) $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ 은 $\det=1>0$ → 거짓 (실제로 항상 $\ge0$). (라) 대각이 전부 0.</p>` })}
${h.p({ lv: 2, q: String.raw`$A^2=I$ 인 $A$ 의 가능한 고윳값`, ans: '$\\pm1$', sol: String.raw`<p>$\lambda^2=1$.</p>` })}
${h.p({ lv: 2, q: String.raw`$2\times2$ 행렬 $A$ 가 $\operatorname{tr}A=5,\ \det A=6$ 일 때 $A^2-5A$`, ans: '$-6I$', sol: String.raw`<p>케일리–해밀턴 $A^2-5A+6I=O$.</p>` })}
${h.p({ lv: 3, q: String.raw`$A=\begin{pmatrix}2&0\\1&2\end{pmatrix}$ 일 때 $A^{10}$`, ans: '$\\begin{pmatrix}2^{10}&0\\\\10\\cdot2^9&2^{10}\\end{pmatrix}$', sol: String.raw`<p>$2I+N$, $N^2=O$: $2^{10}I+10\cdot2^9N$.</p>` })}
`
};
