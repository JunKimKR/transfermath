module.exports = {
  id: 'c14', num: '14', part: 'PART C · 선형대수', title: '벡터공간 · 선형사상', short: '부분공간 · 차원 · 행렬표현',
  schools: { KU: '출제 없음', HY: '행렬표현 거의 매년', CAU: '차원 · 치역 · 핵 매년 2–3' },
  lede: '용어가 많아서 무서워 보이는 장이다. 근데 전부 "화살표를 더하고 늘일 수 있는 동네"와 "그 동네를 몇 개 화살표로 다 만들 수 있냐"는 이야기다. 다항식도, 행렬도 화살표 취급하면 끝.',
  body: h => String.raw`
<h3><span class="sn">14.1</span>벡터공간 — 더하고 늘일 수 있는 것들의 동네</h3>
<p>더하기와 상수배가 되고, 그 결과가 다시 같은 동네 안에 있으면 <b>벡터공간</b>이다. 편입에 나오는 건 넷뿐이다.</p>
${h.table(['공간', '원소', '차원', '표준기저'], [
  ['$\\mathbb R^n$', '숫자 $n$ 개 세로줄', '$n$', '$\\mathbf e_1,\\ldots,\\mathbf e_n$'],
  ['$P_n$', '차수 $\\le n$ 다항식', '$n+1$', '$1,x,\\ldots,x^n$'],
  ['$M_{m\\times n}$', '$m\\times n$ 행렬', '$mn$', '$E_{ij}$ (한 칸만 1)'],
  ['함수공간', '연속함수 등', '무한', '—'],
])}
<p>핵심: <mark>다항식 $a_0+a_1x+a_2x^2$ 은 그냥 $(a_0,a_1,a_2)$ 라는 화살표다.</mark> 계수만 떼서 $\mathbb R^3$ 문제로 바꿔 푼다.</p>
${h.box('key', '부분공간 판정 3종', String.raw`<p>$W\subset V$ 가 부분공간 ⟺ ① $\mathbf 0\in W$ ② 더해도 $W$ ③ 상수배해도 $W$.</p><p>실전: <b>조건식이 "선형 등식 = 0" 꼴이면 부분공간</b>. 상수항이 있거나($x+y=1$), 제곱·곱($xy=0$), 부등식($x\ge0$)이 있으면 아니다.</p>`)}

<h3><span class="sn">14.2</span>생성 · 일차독립 · 기저 · 차원</h3>
${h.box('key', '네 단어', String.raw`<p><b>생성(span)</b>: 벡터들의 일차결합 전체. $\operatorname{span}\{\mathbf v_1,\mathbf v_2\}$ = 둘로 만들 수 있는 모든 것.</p><p><b>일차독립</b>: $c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf 0$ 의 해가 $c_i=0$ 뿐. 즉 <b>쓸데없는 벡터가 없다</b>. 판정: 벡터를 열로 쌓아 rank = 개수인지.</p><p><b>기저</b>: 공간을 생성하는 일차독립 집합 (최소한의 재료). <b>차원</b>: 기저의 개수.</p>`)}
${h.surf({ w: 400, h: 300, sc: 62, oy: 40, surfs: [{ p: (u, v) => [u * 1 + v * 0.3, u * 0.2 + v * 1, u * 0.5 + v * 0.4], u: [-1.4, 1.4], v: [-1.4, 1.4], n: 8, m: 8, c: 1 }], vecs: [{ v: [1, 0.2, 0.5], c: 2, label: 'v₁' }, { v: [0.3, 1, 0.4], c: 3, label: 'v₂' }, { v: [1.3, 1.2, 0.9], c: 4, label: 'v₁+v₂' }], cap: '$\\mathbb R^3$ 안의 두 독립 벡터가 만드는 평면 = 2차원 부분공간. 세 번째로 $\\mathbf v_1+\\mathbf v_2$ 를 넣어도 평면 밖으로 못 나간다 → 종속, 차원 그대로 2.' })}
${h.ex({ src: 'CAU 2025-23', q: String.raw`$P_4(\mathbb R)$ (차수 $\le4$ 다항식)에서 $W=\{p:\ p(x)=x^4p(1/x)\}$ 의 차원은?`, choices: h.c`$1$ | $2$ | $3$ | $4$`,
  sol: String.raw`<p>$p=a_0+a_1x+a_2x^2+a_3x^3+a_4x^4$ 이면 $x^4p(1/x)=a_0x^4+a_1x^3+a_2x^2+a_3x+a_4$. 같으려면 $a_0=a_4,\ a_1=a_3$ (계수가 거울 대칭). 자유롭게 고를 수 있는 건 $a_0,a_1,a_2$ 세 개.</p>`, ans: '③ $3$' })}
${h.ex({ src: 'CAU 2026-24', q: String.raw`$n\times n$ 대칭행렬 전체 $W=\{A:A=A^T\}$ 의 차원은?`, choices: h.c`$n-1$ | $n$ | $\frac{n(n-1)}2$ | $\frac{n(n+1)}2$`,
  sol: String.raw`<p>대각선 위(대각 포함)만 정하면 아래는 자동. $n+(n-1)+\cdots+1=\frac{n(n+1)}2$. 반대칭($A^T=-A$)은 대각이 0이라 $\frac{n(n-1)}2$.</p>`, ans: '④' })}

<h3><span class="sn">14.3</span>행렬의 공간들과 차원 정리</h3>
${h.box('key', '세 공간', String.raw`<p>$A$ 가 $m\times n$ 일 때</p><p><b>열공간</b> $C(A)\subset\mathbb R^m$: 열들의 span = $A\mathbf x$ 로 나올 수 있는 모든 것 = <b>치역</b>. 차원 = rank.</p><p><b>영공간</b> $N(A)\subset\mathbb R^n$: $A\mathbf x=\mathbf 0$ 의 해 = <b>핵(kernel)</b>. 차원 = nullity = 자유변수 개수.</p><p><b>행공간</b> $C(A^T)$: 차원도 rank. (행 rank = 열 rank)</p>`)}
${h.box('key', '차원 정리 (rank–nullity)', String.raw`<p>$$\operatorname{rank}A+\dim N(A)=n\ (\text{열 개수})$$</p><p>기계로 말하면: 입력 차원 $n$ = (살아서 나가는 차원) + (0으로 뭉개지는 차원). 그리고 $N(A^TA)=N(A)$, $\operatorname{rank}(A^TA)=\operatorname{rank}A$.</p><p>부분공간 합: $\dim(U+W)=\dim U+\dim W-\dim(U\cap W)$.</p>`)}
${h.ex({ src: 'CAU 2023-11', q: String.raw`$m\times n$ 행렬 $A$ 의 영공간과 $A^T$ 의 영공간의 차원이 각각 $7,\ 2$ 이고 $A^TA$ 의 영공간 차원이 $k$ 일 때 $m-n+k$ 는?`, choices: h.c`$-5$ | $-2$ | $2$ | $5$`,
  sol: String.raw`<p>$k=\dim N(A^TA)=\dim N(A)=7$. rank $r$: $r=n-7$ ($A$ 에 차원 정리), $r=m-2$ ($A^T$ 는 $n\times m$, 열 $m$ 개). 그래서 $m-n=-5$, 답 $-5+7=2$.</p>`, ans: '③ $2$' })}
${h.ex({ src: 'CAU 2025-8', q: String.raw`$T\mathbf x=\begin{pmatrix}1&2&1\\0&1&1\\-1&3&4\end{pmatrix}\mathbf x$ 일 때 $T$ 의 치역에 속하지 <b>않는</b> 벡터는?`, choices: h.c`$(-1,0,1)$ | $(5,1,0)$ | $(4,1,1)$ | $(-3,1,3)$`,
  sol: String.raw`<p>$\det=1(4-3)-2(0+1)+1(0+1)=0$ → 치역은 평면. 독립인 두 열 $(1,0,-1),(2,1,3)$ 의 외적 $=(1,-5,1)$ 이 평면의 법선. 치역 = $\{x-5y+z=0\}$.</p><p>대입: ① $-1+1=0$ ✓ ② $5-5=0$ ✓ ③ $4-5+1=0$ ✓ ④ $-3-5+3=-5$ ✗.</p>`, ans: '④' })}
${h.ex({ src: 'CAU 2024-17', q: String.raw`$T\mathbf v=A\mathbf v,\ A=\begin{pmatrix}1&2&1\\0&2&0\\-1&4&-1\end{pmatrix}$ 의 치역은 평면이다. 이 평면 위에서 점 $(1,2,3)$ 과 가장 가까운 점을 $(a,b,c)$ 라 할 때 $a+b+c$ 는?`, choices: h.c`$6$ | $\frac{64}{11}$ | $\frac{60}{11}$ | $\frac{58}{11}$`,
  sol: String.raw`<p>1열 = 3열이라 치역 = span$\{(1,0,-1),(2,2,4)\}$. 외적 $(2,-6,2)\propto(1,-3,1)$ → 평면 $x-3y+z=0$.</p><p>점에서 법선 방향으로 내리기: $(1,2,3)\cdot(1,-3,1)=-2$, $|\mathbf n|^2=11$. 가장 가까운 점 $=(1,2,3)+\frac2{11}(1,-3,1)$. 좌표합 $6+\frac2{11}(-1)=\frac{64}{11}$.</p>`, ans: '②' })}
${h.ex({ src: 'CAU 2023-1', q: String.raw`선형변환 $T:\mathbb R^3\to\mathbb R^3$ 가 $T(1,0,0)=(1,2,2),\ T(1,1,0)=(-4,5,1),\ T(1,1,1)=(5,-3,1)$ 을 만족한다. $T$ 의 핵에 속하는 점과 점 $(1,-2,3)$ 사이의 최소 거리는?`, choices: h.c`$\sqrt8$ | $\sqrt{10}$ | $\sqrt{12}$ | $\sqrt{14}$`,
  sol: String.raw`<p>선형이니 빼서 표준기저 상을 구한다: $T\mathbf e_1=(1,2,2)$, $T\mathbf e_2=T(1,1,0)-T\mathbf e_1=(-5,3,-1)$, $T\mathbf e_3=T(1,1,1)-T(1,1,0)=(9,-8,0)$.</p><p>$A=\begin{pmatrix}1&-5&9\\2&3&-8\\2&-1&0\end{pmatrix}$ 의 영공간: 3행에서 $y=2x$, 1행 $x-10x+9z=0$ → $z=x$. 핵 $=\operatorname{span}(1,2,1)$.</p><p>$(1,-2,3)\cdot(1,2,1)=1-4+3=0$: 점이 이미 핵에 수직이다. 그래서 최소 거리는 점의 길이 그대로 $\sqrt{1+4+9}=\sqrt{14}$.</p>`, ans: '④' })}

<h3><span class="sn">14.4</span>선형사상과 행렬표현 — 3단계 기계</h3>
<p>선형사상 $T$ 는 $T(a\mathbf u+b\mathbf v)=aT\mathbf u+bT\mathbf v$ 인 함수. 미분, 적분, 행렬 곱, 전치 전부 선형이다. 선형이면 <b>기저의 상만 알면 전부 안다</b>.</p>
${h.box('key', '행렬표현 $[T]_\\beta$ 만드는 법', '<ol class="steps"><li>기저 벡터를 하나씩 $T$ 에 넣는다.</li><li>나온 결과를 <b>도착 공간의 기저로</b> 좌표를 구한다 (연립방정식 or 눈으로).</li><li>그 좌표를 <b>열로</b> 차례대로 세운다.</li></ol><p><mark>열로 세운다</mark>. 행으로 세우면 전치가 되어 다 틀린다.</p>')}
${h.ex({ src: 'HY 2022-12', q: String.raw`$A=\begin{pmatrix}1&3\\2&-1\end{pmatrix}$ 에 대하여 $T(B)=AB$ 로 정의된 $T:M_2\to M_2$ 의 표준기저 $\{E_{11},E_{12},E_{21},E_{22}\}$ 에 대한 행렬표현 $P=(p_{ij})$ 에서 $p_{13}+p_{24}$ 는?`, choices: h.c`$5$ | $6$ | $7$ | $8$ | $9$`,
  sol: String.raw`<p>$AE_{11}=\begin{pmatrix}1&0\\2&0\end{pmatrix}$ → 좌표 $(1,0,2,0)$ (순서: 11,12,21,22). $AE_{12}=\begin{pmatrix}0&1\\0&2\end{pmatrix}$ → $(0,1,0,2)$. $AE_{21}=\begin{pmatrix}3&0\\-1&0\end{pmatrix}$ → $(3,0,-1,0)$. $AE_{22}$ → $(0,3,0,-1)$.</p><p>열로 세우면 $P=\begin{pmatrix}1&0&3&0\\0&1&0&3\\2&0&-1&0\\0&2&0&-1\end{pmatrix}$. $p_{13}+p_{24}=3+3$.</p>`, ans: '② $6$' })}
${h.ex({ src: 'CAU 2023-10', q: String.raw`$P_2$ 의 순서기저 $B=\{1+t^2,\ t+t^2,\ 1+2t+t^2\}$ 에 대한 $T$ 의 행렬표현이 $\begin{pmatrix}3&4&0\\0&5&-1\\1&-2&7\end{pmatrix}$ 이고 $p(t)=T(1+t+t^2)$ 일 때 $p(-1)$ 은?`, choices: h.c`$0$ | $1$ | $2$ | $3$`,
  sol: String.raw`<p>① $1+t+t^2$ 의 $B$-좌표: $a(1+t^2)+b(t+t^2)+c(1+2t+t^2)$ 에서 상수 $a+c=1$, $t$: $b+2c=1$, $t^2$: $a+b+c=1$ → $b=0,\ c=\frac12,\ a=\frac12$.</p><p>② 행렬 곱: $\begin{pmatrix}3&4&0\\0&5&-1\\1&-2&7\end{pmatrix}\begin{pmatrix}1/2\\0\\1/2\end{pmatrix}=\begin{pmatrix}3/2\\-1/2\\4\end{pmatrix}$ (결과의 $B$-좌표).</p><p>③ 되돌리기: $p=\frac32(1+t^2)-\frac12(t+t^2)+4(1+2t+t^2)$. $t=-1$: $\frac32\cdot2-\frac12\cdot0+4\cdot0=3$.</p>`, ans: '④ $3$' })}
${h.ex({ src: 'HY 2026-11', q: String.raw`$P_2$ 에서 $S(f)=f+\frac12xf'+\frac13x^2f''$, $T(f)=3f+(x+1)f'+(x-1)f''$ 일 때 기저 $\{1,x,x^2\}$ 에 대한 $S\circ T$ 의 행렬표현의 대각성분의 곱은?`, choices: h.c`$120$ | $160$ | $200$ | $240$ | $300$`,
  sol: String.raw`<p>$S$: $1\to1$, $x\to x+\frac12x=\frac32x$, $x^2\to x^2+x^2+\frac23x^2=\frac83x^2$ → 대각 $\operatorname{diag}(1,\frac32,\frac83)$.</p><p>$T$: $1\to3$, $x\to3x+x+1=4x+1$, $x^2\to3x^2+2x^2+2x+2x-2=5x^2+4x-2$ → 상삼각, 대각 $3,4,5$.</p><p>상삼각끼리 곱의 대각 = 대각끼리 곱: $3,\ 6,\ \frac{40}3$. 곱 240.</p>`, ans: '④ $240$' })}
${h.box('key', '기저변환', String.raw`<p>$[T]_\beta=P^{-1}[T]_{\text{표준}}P$, $P$ = $\beta$ 의 벡터들을 (표준 좌표로) 열로 세운 행렬. 표현이 달라도 같은 사상이라 <b>닮음</b>: 행렬식·대각합·고윳값·rank 가 같다.</p>`)}

<div class="probs-h"><h3>연습문제 14</h3><span class="cnt">13문항</span></div>
${h.p({ q: String.raw`다음 중 $\mathbb R^3$ 의 부분공간을 모두 고르시오. (가) $x+2y=z$ (나) $x+y+z=1$ (다) $xy=0$ (라) $x=y=z$`, ans: '(가), (라)', sol: String.raw`<p>(나) 원점 없음. (다) $(1,0,0)+(0,1,0)$ 이 밖으로 나감.</p>` })}
${h.p({ q: String.raw`$(1,2,3),(2,3,4),(3,4,5)$ 는 일차독립인가?`, ans: '종속 (rank 2)', sol: String.raw`<p>$(3,4,5)=2(2,3,4)-(1,2,3)$.</p>` })}
${h.p({ q: String.raw`$3\times5$ 행렬의 rank 가 3 이면 영공간의 차원은?`, ans: '$2$', sol: String.raw`<p>$5-3$.</p>` })}
${h.p({ q: String.raw`$D:P_3\to P_3$, $D(p)=p'$ 의 핵과 치역의 차원`, ans: '핵 1, 치역 3', sol: String.raw`<p>핵 = 상수. $1+3=4=\dim P_3$.</p>` })}
${h.p({ q: String.raw`$T:P_2\to P_2$, $T(p)=p'$ 의 기저 $\{1,x,x^2\}$ 에 대한 행렬`, ans: '$\\begin{pmatrix}0&1&0\\\\0&0&2\\\\0&0&0\\end{pmatrix}$', sol: String.raw`<p>$T1=0,\ Tx=1,\ Tx^2=2x$ 를 열로.</p>` })}
${h.p({ src: 'HY 2023-10', lv: 2, q: String.raw`$T(a_3x^3+a_2x^2+a_1x+a_0)=(a_0+a_1)x^3+2a_2x^2+(a_3-a_0)x+3a_1-a_2$ 의 기저 $\{x^3+x^2,\ x^2,\ x+1,\ 1\}$ 에 대한 행렬표현 $A$ 의 두 번째 행 성분의 합`, choices: h.c`$0$ | $1$ | $2$ | $3$ | $4$`, ans: '② $1$', sol: String.raw`<p>$T(x^3+x^2)=2x^2+x-1$ → 좌표 $(0,2,1,-2)$. $T(x^2)=2x^2-1$ → $(0,2,0,-1)$. $T(x+1)=2x^3-x+3$ → $(2,-2,-1,4)$. $T(1)=x^3-x$ → $(1,-1,-1,1)$.</p><p>(좌표 구하기: $c_1(x^3+x^2)+c_2x^2+c_3(x+1)+c_4$, $x^3$ 계수가 $c_1$, $x^2$ 계수 $c_1+c_2$, $x$ 계수 $c_3$, 상수 $c_3+c_4$.) 둘째 행: $2+2-2-1=1$.</p>` })}
${h.p({ src: 'HY 2024-45', lv: 2, q: String.raw`기저 $\{(0,1,1),(0,1,0),(1,1,0)\}$ 에 대한 $T$ 의 행렬표현이 $\begin{pmatrix}1&-6&-4\\0&3&0\\0&5&2\end{pmatrix}$ 이고 $T(3,3,1)=(p,q,r)$ 일 때 $|p|+|q|+|r|$`, choices: h.c`$7$ | $9$ | $11$ | $13$ | $15$`, ans: '④ $13$', sol: String.raw`<p>$(3,3,1)=1\cdot(0,1,1)-1\cdot(0,1,0)+3\cdot(1,1,0)$ → 좌표 $(1,-1,3)$. 곱하면 $(1+6-12,\ -3,\ -5+6)=(-5,-3,1)$. 되돌리면 $-5(0,1,1)-3(0,1,0)+1(1,1,0)=(1,-7,-5)$.</p>` })}
${h.p({ src: 'HY 2026-12', lv: 2, q: String.raw`(HY 2026-11 의 $T$) 기저 $\{1,\ 1+ax+bx^2,\ 1+cx+dx^2\}$ 에 대한 $T$ 의 행렬표현이 대각행렬일 때 $a+b+c+d$`, choices: h.c`$3$ | $4$ | $5$ | $6$ | $7$`, ans: '④ $6$', sol: String.raw`<p>대각표현 = 고유벡터 기저 (15장). $T$ 의 행렬 $\begin{pmatrix}3&1&-2\\0&4&4\\0&0&5\end{pmatrix}$, 고윳값 $3,4,5$. $\lambda=4$: $(1,1,0)$ → $1+x$. $\lambda=5$: $(1,4,1)$ → $1+4x+x^2$. $a=1,b=0,c=4,d=1$.</p>` })}
${h.p({ q: String.raw`$\dim U=3,\ \dim W=4$ 인 $\mathbb R^5$ 의 부분공간에서 $\dim(U\cap W)$ 의 최솟값`, ans: '$2$', sol: String.raw`<p>$\dim(U+W)\le5$ → $3+4-\dim(U\cap W)\le5$.</p>` })}
${h.p({ q: String.raw`$2\times2$ 반대칭행렬 공간과 대각합 0 인 행렬 공간의 차원`, ans: '1, 3', sol: String.raw`<p>반대칭 $\begin{pmatrix}0&a\\-a&0\end{pmatrix}$. 대각합 0: $a+d=0$ 하나의 조건.</p>` })}
${h.p({ lv: 2, q: String.raw`$T:\mathbb R^3\to\mathbb R^2$ 선형, $T$ 가 전사이면 $\dim\ker T$ 는?`, ans: '$1$', sol: String.raw`<p>치역 차원 2, $3-2$.</p>` })}
${h.p({ lv: 2, q: String.raw`$A$ 가 $5\times3$, rank 3 일 때 $A\mathbf x=\mathbf b$ 의 해의 개수는 가능한 경우가?`, ans: '0개 또는 1개', sol: String.raw`<p>영공간 $\{0\}$ 이라 해가 있으면 유일. 치역이 $\mathbb R^5$ 전체가 아니라 없을 수도.</p>` })}
${h.p({ lv: 2, q: String.raw`닮은 두 행렬이 반드시 공유하는 것을 고르시오: 행렬식, 대각합, 고윳값, 고유벡터, rank`, ans: '행렬식, 대각합, 고윳값, rank', sol: String.raw`<p>고유벡터는 $P$ 만큼 바뀐다.</p>` })}
`
};
