module.exports = {
  id: 'c13', num: '13', part: 'PART C · 선형대수', title: '행렬 · 연립방정식 · 행렬식', short: '가우스 소거 · 역행렬 · 행렬식',
  schools: { KU: '출제 없음', HY: '매년 2–3문항', CAU: '매년 2–4문항' },
  lede: '선형대수 전체가 한 문장 위에 서 있다: 행렬은 숫자표가 아니라 벡터를 넣으면 벡터가 나오는 기계다. 이 장은 그 기계를 다루는 손기술(소거, 역행렬, 행렬식)을 만든다.',
  body: h => String.raw`
<h3><span class="sn">13.1</span>행렬은 공간을 휘는 기계다</h3>
<p>$2\times2$ 행렬 $A$ 에 벡터를 넣으면 다른 벡터가 나온다. 모든 점에 한꺼번에 하면 <b>격자 전체가 휜다</b>. 그리고 이 휨은 딱 두 화살표로 정해진다: $\mathbf e_1=(1,0)$ 이 어디로 가는지($A$ 의 1열), $\mathbf e_2=(0,1)$ 이 어디로 가는지($A$ 의 2열).</p>
${h.lin2([[2, 1], [0.5, 1.5]], { cap: '$A=\\begin{pmatrix}2&1\\\\0.5&1.5\\end{pmatrix}$. 회색 원래 격자가 파란 격자로 휜다. 1열 $(2,0.5)$ 이 $A\\mathbf e_1$, 2열 $(1,1.5)$ 가 $A\\mathbf e_2$.' })}
${h.box('key', '행렬 × 벡터 = 열들의 일차결합', String.raw`<p>$$\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=x\begin{pmatrix}a\\c\end{pmatrix}+y\begin{pmatrix}b\\d\end{pmatrix}$$</p><p>그래서 $A\mathbf x=\mathbf b$ 가 풀린다 ⟺ $\mathbf b$ 가 $A$ 의 열들로 만들어진다. 이 문장이 14장(열공간)의 전부다.</p>`)}
<div class="wg" data-w="matrix"><div class="wg-h">직접 돌려 보기 · 2×2 행렬이 하는 일</div><canvas data-ratio="0.75" aria-label="행렬 변환"></canvas>
<div class="ctl"><span>$A=$</span> <input type="number" step="0.5" value="2" aria-label="a"> <input type="number" step="0.5" value="1" aria-label="b"> <input type="number" step="0.5" value="1" aria-label="c"> <input type="number" step="0.5" value="2" aria-label="d">
<label>예시 <select><option value="2,1,1,2">대칭 (고유벡터 직교)</option><option value="0,-1,1,0">90° 회전</option><option value="1,1,0,1">밀기(전단)</option><option value="2,0,0,0.5">늘이고 줄이기</option><option value="1,2,2,4">납작 (det 0)</option><option value="3,1,0,2">삼각</option></select></label></div><div class="out"></div></div>
<p>파란 평행사변형 넓이 = $|\det A|$ (13.5절). 빨간 점선 = 방향을 안 꺾고 늘이기만 되는 방향 = 고유벡터 (15장). 지금은 그냥 봐 두기만 해라.</p>

<h3><span class="sn">13.2</span>행렬 곱 · 전치 · 역행렬</h3>
${h.box('key', '기본 규칙', String.raw`<p><b>곱</b>: $(AB)_{ij}=(A\text{ 의 }i\text{행})\cdot(B\text{ 의 }j\text{열})$. $AB\ne BA$ 가 기본이다.</p><p><b>전치</b>: $(A^T)_{ij}=A_{ji}$, $(AB)^T=B^TA^T$</p><p><b>역행렬</b>: $AA^{-1}=I$. $(AB)^{-1}=B^{-1}A^{-1}$ ← 순서 뒤집힘. 양말 신고 신발 신었으면 신발부터 벗는다.</p><p>$2\times2$: $\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\dfrac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$ (대각 바꾸고 비대각 부호)</p>`)}

<h3><span class="sn">13.3</span>연립방정식 — 가우스 소거</h3>
<p>행에 할 수 있는 세 가지 (<b>기본 행연산</b>): ① 두 행 바꾸기 ② 한 행에 0 아닌 수 곱하기 ③ 한 행에 다른 행의 몇 배 더하기. 이걸로 계단 모양을 만든다.</p>
${h.ex({ q: String.raw`$\begin{cases}x+2y+z=4\\2x+5y+3z=9\\x+3y+3z=8\end{cases}$ 를 푸시오.`,
  sol: String.raw`$$\left(\begin{array}{ccc|c}1&2&1&4\\2&5&3&9\\1&3&3&8\end{array}\right)\xrightarrow{R_2-2R_1,\ R_3-R_1}\left(\begin{array}{ccc|c}1&2&1&4\\0&1&1&1\\0&1&2&4\end{array}\right)\xrightarrow{R_3-R_2}\left(\begin{array}{ccc|c}1&2&1&4\\0&1&1&1\\0&0&1&3\end{array}\right)$$<p>아래부터 대입: $z=3$, $y=1-3=-2$, $x=4+4-3=5$.</p>`, ans: '$(5,-2,3)$' })}
${h.box('key', '해의 개수 = 계단 모양 보고 판단', String.raw`<p><b>피벗</b>: 각 행의 첫 번째 0 아닌 수. 피벗 개수 = <b>계수(rank)</b>.</p><p>① 마지막 열(우변)에 피벗이 생기면 ($0=1$ 꼴 행) → 해 없음.<br>② 아니면 해 있음. 피벗 없는 열의 변수 = <b>자유변수</b>, 개수 = (변수 수) − rank. 자유변수 0개면 해 1개, 1개 이상이면 무한.</p>`)}
${h.ex({ src: 'HY 2025-47', q: String.raw`$A=\begin{pmatrix}2&1&0&4\\2&1&1&2\\4&2&3&2\end{pmatrix}$ 에 대하여 $A\mathbf v=\begin{pmatrix}2\\3\\r\end{pmatrix}$ 를 만족하는 $\mathbf v$ 가 존재할 때 $\operatorname{rank}(A)\times r$ 은?`, choices: h.c`$6$ | $8$ | $10$ | $12$ | $14$`,
  sol: String.raw`<p>$R_2-R_1=(0,0,1,-2\,|\,1)$, $R_3-2R_1=(0,0,3,-6\,|\,r-4)$. 여기서 $R_3-3R_2$: $(0,0,0,0\,|\,r-7)$.</p><p>해가 있으려면 $r=7$. 피벗은 1열, 3열 두 개 → rank 2. $2\times7=14$.</p>`, ans: '⑤ $14$' })}

<h3><span class="sn">13.4</span>역행렬 구하기</h3>
<p>$[A\,|\,I]$ 를 행연산으로 $[I\,|\,A^{-1}]$ 로 만든다. 성분 몇 개만 물으면 <b>여인자 공식</b>이 빠르다: $(A^{-1})_{ij}=\dfrac{C_{ji}}{\det A}$ (인덱스 뒤집힘 주의).</p>
${h.ex({ src: 'CAU 2026-3', q: String.raw`$\begin{pmatrix}1&2&3\\2&3&5\\1&0&2\end{pmatrix}$ 의 역행렬을 $U=(U_{ij})$ 라 할 때 $U_{12}+U_{21}$ 은?`, choices: h.c`$-4$ | $-3$ | $2$ | $3$`,
  sol: String.raw`<p>$\det A=1(6-0)-2(4-5)+3(0-3)=6+2-9=-1$.</p><p>$U_{12}=\frac{C_{21}}{\det}$: $C_{21}=-\begin{vmatrix}2&3\\0&2\end{vmatrix}=-4$ → $U_{12}=4$. $U_{21}=\frac{C_{12}}{\det}$: $C_{12}=-\begin{vmatrix}2&5\\1&2\end{vmatrix}=1$ → $U_{21}=-1$. 합 3.</p>`, ans: '④ $3$' })}
${h.box('key', '가역 동치 조건 (n×n)', '<p>$A$ 가역 ⟺ $\\det A\\ne0$ ⟺ rank $=n$ ⟺ $A\\mathbf x=\\mathbf 0$ 의 해가 $\\mathbf 0$ 뿐 ⟺ 열(행)이 일차독립 ⟺ 0 이 고윳값이 아님. <b>〈보기〉 문제에서 이 사슬을 통째로 쓴다.</b></p>')}

<h3><span class="sn">13.5</span>행렬식 — 넓이(부피) 배율</h3>
<p>$\det A$ = 단위 정사각형(정육면체)이 $A$ 로 변한 뒤의 <b>부호 있는 넓이(부피)</b>. 0이면 공간이 납작하게 눌린 것 → 되돌릴 수 없음 → 역행렬 없음.</p>
${h.box('key', '계산', String.raw`<p>$2\times2$: $ad-bc$. &nbsp; $3\times3$: 사루스 (대각선 세 개 곱 더하고, 반대 대각선 세 개 빼기). $4\times4$ 이상은 사루스 <b>안 됨</b>.</p><p><b>여인자 전개</b>: 아무 행(열)이나 골라 $\det A=\sum_ja_{ij}C_{ij}$, $C_{ij}=(-1)^{i+j}M_{ij}$. <mark>0이 제일 많은 줄</mark>을 고른다. 부호판 $\begin{smallmatrix}+&-&+\\-&+&-\\+&-&+\end{smallmatrix}$.</p>`)}
${h.box('key', '성질 (〈보기〉 단골)', String.raw`<p>① $\det(AB)=\det A\det B$ &nbsp; ② $\det A^T=\det A$ &nbsp; ③ $\det A^{-1}=\frac1{\det A}$ &nbsp; ④ $\det(kA)=k^n\det A$ ($n\times n$)</p><p>⑤ 행 바꾸면 부호 반대, 한 행에 $k$ 곱하면 $k$ 배, 한 행에 다른 행 배수 더하면 <b>그대로</b></p><p>⑥ 삼각행렬 = 대각 성분의 곱 &nbsp; ⑦ 블록 삼각 $\begin{vmatrix}A&B\\O&D\end{vmatrix}=\det A\det D$ &nbsp; ⑧ $\det(A+B)\ne\det A+\det B$</p>`)}
${h.ex({ src: 'HY 2025-44', q: String.raw`$3\times3$ 행렬 $A,B$ 에 대하여 $A^3=B^2$ 이고 $\det B=27$ 일 때 $\det(2A^TBA^{-1}B^{-1}A)$ 는?`, choices: h.c`$18$ | $24$ | $54$ | $72$ | $96$`,
  sol: String.raw`<p>$\det(A^3)=\det(B^2)$ → $(\det A)^3=729$ → $\det A=9$.</p><p>$\det(2\cdots)=2^3\cdot\det A\cdot\det B\cdot\frac1{\det A}\cdot\frac1{\det B}\cdot\det A=8\cdot9=72$. $2$ 가 $2^3$ 으로 튀는 것 (성질 ④) 이 함정.</p>`, ans: '④ $72$' })}
${h.ex({ src: 'CAU 2023-30', q: String.raw`$\begin{pmatrix}3&1&0&0&0\\1&2&0&0&0\\0&0&1&1&0\\0&0&1&3&1\\0&0&2&0&2\end{pmatrix}$ 의 행렬식은?`, choices: h.c`$24$ | $26$ | $28$ | $30$`,
  sol: String.raw`<p>블록 대각. $\begin{vmatrix}3&1\\1&2\end{vmatrix}=5$, $\begin{vmatrix}1&1&0\\1&3&1\\2&0&2\end{vmatrix}=1(6-0)-1(2-2)+0=6$. 곱 30.</p>`, ans: '④ $30$' })}
${h.ex({ src: 'CAU 2025-10', q: String.raw`$M=\begin{pmatrix}a&b&b&b\\a&a&b&a\\a&b&a&a\\b&b&b&a\end{pmatrix}$ 의 행렬식은?`, choices: h.c`$a(a-b)^3$ | $-b(a-b)^3$ | $(a-b)^4$ | $-(a-b)^4$`,
  sol: String.raw`<p>4지선다 행렬식은 <b>숫자를 넣어서 보기를 지운다</b>. $a=1,\ b=0$ 이면 $M=\begin{pmatrix}1&0&0&0\\1&1&0&1\\1&0&1&1\\0&0&0&1\end{pmatrix}$, 하삼각에 가까워서 $\det=1$ (1행, 4행으로 전개). ①: 1, ②: 0, ③: 1, ④: $-1$ → ①③ 남음.</p><p>$a=0,\ b=1$: $M=\begin{pmatrix}0&1&1&1\\0&0&1&0\\0&1&0&0\\1&1&1&0\end{pmatrix}$. 1열 전개(4행만 1): $-\begin{vmatrix}1&1&1\\0&1&0\\1&0&0\end{vmatrix}=-(1\cdot(0-0)-1\cdot(0-0)+1\cdot(0-1))=1$. ①: 0, ③: 1 → ③.</p>`, ans: '③ $(a-b)^4$' })}
${h.box('key', '특수 행렬식 둘', String.raw`<p><b>삼중대각</b> (대각 $a$, 위아래 $b,c$): $D_n=aD_{n-1}-bcD_{n-2}$. 대각 2, 위아래 $-1$ 이면 $D_n=n+1$.</p><p><b>반데르몽드</b>: $\det\left(x_j^{\,i-1}\right)=\prod_{i<j}(x_j-x_i)$.</p>`)}
${h.ex({ src: 'CAU 2024-29', q: String.raw`$A^{-1}=\begin{pmatrix}0&1&-1\\1&1&0\\0&-\frac23&-\frac13\end{pmatrix}$ 일 때 $BA=A^2+A$ 인 $B$ 에 대하여 $\det B$ 는?`, choices: h.c`$0$ | $\frac23$ | $\frac43$ | $2$`,
  sol: String.raw`<p>$BA=A(A+I)$ → $\det B\det A=\det A\det(A+I)$ → $\det B=\det(A+I)=\det A\cdot\det(I+A^{-1})$.</p><p>$\det A^{-1}=0-1\left(-\frac13-0\right)+(-1)\left(-\frac23-0\right)=\frac13+\frac23=1$ → $\det A=1$.</p><p>$I+A^{-1}=\begin{pmatrix}1&1&-1\\1&2&0\\0&-\frac23&\frac23\end{pmatrix}$, $\det=1\cdot\frac43-1\cdot\frac23+(-1)\left(-\frac23\right)=\frac43$. $A$ 를 직접 구할 필요가 없다.</p>`, ans: '③ $\\frac43$' })}

<h3><span class="sn">13.6</span>부피 · 수반행렬 · 크래머</h3>
${h.box('key', '공식', String.raw`<p><b>부피</b>: 세 벡터가 만드는 평행육면체 $=|\det[\mathbf v_1\ \mathbf v_2\ \mathbf v_3]|$.</p><p><b>수반행렬</b> $\operatorname{adj}A=C^T$ (여인자 행렬의 전치). $A\operatorname{adj}A=(\det A)I$. 그래서 $\det(\operatorname{adj}A)=(\det A)^{n-1}$, $\operatorname{adj}(\operatorname{adj}A)=(\det A)^{n-2}A$.</p><p><b>크래머</b>: $x_i=\dfrac{\det A_i}{\det A}$ ($A_i$: $i$열을 $\mathbf b$ 로 바꾼 것). 변수 하나만 물을 때 빠르다.</p>`)}
${h.ex({ src: 'HY 2026-10', q: String.raw`$\mathbf v_1=(1,2,4),\ \mathbf v_2=(1,-1,1),\ \mathbf v_3=(1,5,25)$ 에 대해 $V=\{c_1\mathbf v_1+c_2\mathbf v_2+c_3\mathbf v_3\mid0\le c_1\le1,\ 0\le c_2\le\frac12,\ 0\le c_3\le\frac13\}$ 의 부피는?`, choices: h.c`$1$ | $3$ | $5$ | $7$ | $9$`,
  sol: String.raw`<p>$|\det|$ 가 $c_i\in[0,1]$ 전체의 부피. 범위가 $\frac12,\frac13$ 로 줄면 부피도 그만큼 곱해진다.</p><p>$\det\begin{pmatrix}1&2&4\\1&-1&1\\1&5&25\end{pmatrix}=1(-25-5)-2(25-1)+4(5+1)=-30-48+24=-54$. $54\cdot1\cdot\frac12\cdot\frac13=9$.</p>`, ans: '⑤ $9$' })}

<div class="probs-h"><h3>연습문제 13</h3><span class="cnt">16문항</span></div>
${h.p({ q: String.raw`$\begin{pmatrix}1&2\\3&4\end{pmatrix}^{-1}$`, ans: '$\\begin{pmatrix}-2&1\\\\\\frac32&-\\frac12\\end{pmatrix}$', sol: String.raw`<p>$\frac1{-2}\begin{pmatrix}4&-2\\-3&1\end{pmatrix}$.</p>` })}
${h.p({ q: String.raw`$\begin{vmatrix}2&0&1\\1&3&2\\1&1&1\end{vmatrix}$`, ans: '$0$', sol: String.raw`<p>$2(3-2)-0+1(1-3)=0$.</p>` })}
${h.p({ q: String.raw`$4\times4$ 행렬 $A$ 가 $\det A=3$ 일 때 $\det(2A^{-1}A^T)$`, ans: '$16$', sol: String.raw`<p>$2^4\cdot\frac13\cdot3$.</p>` })}
${h.p({ src: 'CAU 2024-18', q: String.raw`$\begin{pmatrix}1&x&x\\x&x&1\\x&1&x\end{pmatrix}$ 의 rank 가 2 가 되는 $x$ 를 모두 구하면?`, choices: h.c`$-\frac12,\ 1$ | $0,\ 1$ | $-\frac12$ | $0$`, ans: '③ $-\\frac12$', sol: String.raw`<p>$\det=-(x-1)^2(2x+1)$. $\det=0$ 인 $x=1,-\frac12$ 가 후보. $x=1$ 이면 모든 행이 $(1,1,1)$ → rank 1. $x=-\frac12$ → rank 2.</p>` })}
${h.p({ src: 'HY 2022-24', q: String.raw`대각 2, 바로 위·아래 $-1$, 나머지 0 인 $5\times5$ 행렬의 행렬식`, ans: '$6$', sol: String.raw`<p>$D_n=2D_{n-1}-D_{n-2}$, $D_1=2,\ D_2=3$ → $D_n=n+1$.</p>` })}
${h.p({ src: 'HY 2023-15', lv: 2, q: String.raw`$\begin{pmatrix}3&0&0&0&0&2\\0&0&0&0&3&2\\0&0&0&4&3&3\\0&0&5&4&4&4\\0&6&5&5&5&5\\1&0&0&0&0&1\end{pmatrix}$ 의 행렬식`, choices: h.c`$-720$ | $-360$ | $-180$ | $180$ | $360$`, ans: '⑤ $360$', sol: String.raw`<p>$C_6\leftarrow C_6-\frac23C_1$ (열연산, 값 불변). 1행이 $(3,0,0,0,0,0)$, 6행이 $(1,0,0,0,0,\frac13)$ 이 된다. 1행 전개로 $3\times$(나머지 $5\times5$).</p><p>그 $5\times5$ 의 마지막 행은 $(0,0,0,0,\frac13)$ 이라 또 전개: $\frac13\times\begin{vmatrix}0&0&0&3\\0&0&4&3\\0&5&4&4\\6&5&5&5\end{vmatrix}$. 이건 역삼각 모양이라 행 순서를 뒤집으면 하삼각(대각 $6,5,4,3$). 4개 행 뒤집기는 교환 2번이라 부호 $+$. 값 360.</p><p>$3\cdot\frac13\cdot360=360$.</p>` })}
${h.p({ src: 'HY 2024-58', q: String.raw`$A=\begin{pmatrix}2&-4&6\\1&-1&-2\\4&-8&14\end{pmatrix}$ 에 대하여 $\det(\operatorname{adj}(\operatorname{adj}A))$`, ans: '$256$', sol: String.raw`<p>$\det A=4$. $\det(\operatorname{adj}B)=(\det B)^2$ 두 번: $\det\operatorname{adj}A=16$, 그 adj 의 det $=16^2=256$. 한 줄 공식 $(\det A)^{(n-1)^2}=4^4$.</p>` })}
${h.p({ src: 'HY 2023-11', lv: 2, q: String.raw`$\begin{pmatrix}1&2&1&0\\2&-1&0&1\\1&-3&-1&1\\2&9&4&-1\end{pmatrix}$ 의 영공간의 기저가 $\{(a,b,5,0),(c,d,0,1)\}$ 이면 $\frac ba+\frac dc$ 는?`, choices: h.c`$-\frac32$ | $-\frac23$ | $0$ | $\frac23$ | $\frac32$`, ans: '⑤ $\\frac32$', sol: String.raw`<p>RREF 로 자유변수 $x_3,x_4$. $x_3=5,x_4=0$: $x_1+2x_2=-5,\ 2x_1-x_2=0$ → $x_1=-1,x_2=-2$. $x_3=0,x_4=1$: $x_1+2x_2=0,\ 2x_1-x_2=-1$ → $x_1=-\frac25,x_2=\frac15$. $\frac{-2}{-1}+\frac{1/5}{-2/5}=2-\frac12$.</p>` })}
${h.p({ src: 'HY 2026-24', lv: 2, q: String.raw`$\mathbb R^4$ 의 $V=\{x+y+z=0\},\ W=\{x+w=0,\ y=2z\}$ 에 대해 $V\cap W=\langle(9,p,q,r)\rangle$ 일 때 $|pqr|$`, ans: '$162$', sol: String.raw`<p>$y=2z,\ x=-y-z=-3z,\ w=-x=3z$ → $z(-3,2,1,3)$. $x=9$ 이면 $z=-3$: $(9,-6,-3,-9)$.</p>` })}
${h.p({ q: String.raw`$\begin{cases}x+y=1\\x+ky=k\end{cases}$ 의 해가 무수히 많을 $k$`, ans: '$k=1$', sol: String.raw`<p>$k=1$ 이면 두 식이 같다. $k\ne1$ 이면 유일해.</p>` })}
${h.p({ q: String.raw`크래머로 $\begin{cases}2x+y=5\\x-3y=-1\end{cases}$ 의 $x$`, ans: '$2$', sol: String.raw`<p>$\frac{\begin{vmatrix}5&1\\-1&-3\end{vmatrix}}{\begin{vmatrix}2&1\\1&-3\end{vmatrix}}=\frac{-14}{-7}$.</p>` })}
${h.p({ q: String.raw`$\det\begin{pmatrix}1&1&1\\1&2&4\\1&3&9\end{pmatrix}$`, ans: '$2$', sol: String.raw`<p>반데르몽드 $(2-1)(3-1)(3-2)$.</p>` })}
${h.p({ lv: 2, q: String.raw`$A^2=A$ 인 가역행렬 $A$ 는?`, ans: '$A=I$', sol: String.raw`<p>양변에 $A^{-1}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$n\times n$ 에서 $A^T=-A$ 이고 $n$ 이 홀수면 $\det A$ 는?`, ans: '$0$', sol: String.raw`<p>$\det A=\det A^T=\det(-A)=(-1)^n\det A=-\det A$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\det\begin{pmatrix}1+x&1&1\\1&1+x&1\\1&1&1+x\end{pmatrix}$`, ans: '$x^2(x+3)$', sol: String.raw`<p>$xI+J$ ($J$ 는 전부 1): 고윳값 $x,x,x+3$ (15장). 또는 모든 열을 1열에 더하면 $(x+3)$ 인수.</p>` })}
${h.p({ q: String.raw`$(AB)^{-1}$ 과 $A^{-1}B^{-1}$ 이 같은가?`, ans: '일반적으로 다르다', sol: String.raw`<p>$(AB)^{-1}=B^{-1}A^{-1}$. $AB=BA$ 일 때만 같다.</p>` })}
`
};
