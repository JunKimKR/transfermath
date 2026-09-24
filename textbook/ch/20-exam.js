module.exports = {
  id: 'c20', num: '20', part: 'PART E · 실전', title: '시험장에서 100점 받는 법', short: '전략 · 모의고사 3세트 · 공식 카드',
  schools: { KU: '모의 C', HY: '모의 B', CAU: '모의 A' },
  lede: '실력이 90점이어도 시험장에서 70점 나오는 사람이 있고, 실력이 80점인데 80점 다 챙기는 사람이 있다. 차이는 시간 배분과 실수 관리다. 이 장은 그걸 연습시킨다.',
  body: h => String.raw`
<h3><span class="sn">20.1</span>학교별 운영 전략</h3>
<div class="grid2">
<div class="card"><h4 style="color:var(--ku)">고려대 — 10문항, 전부 10점</h4><ul class="small"><li>한 문제 = 10%. <b>풀 수 있는 7문제를 100% 맞히는 게</b> 10문제 다 건드리는 것보다 낫다.</li><li>첫 5분: 전체 훑고 쉬운 순서 매기기. 벡터 미적분·급수가 보통 제일 안정적.</li><li>서술형: 계산 과정에 <b>쓴 정리 이름</b>(그린, 발산, 비판정법…)과 <b>조건 확인</b>(닫힌 곡면, 반시계, $a_n\to0$)을 한 줄씩 적는다. 부분점수는 여기서 나온다.</li><li>5분 규칙: 5분 동안 첫 줄이 안 나오면 넘긴다.</li></ul></div>
<div class="card"><h4 style="color:var(--hy)">한양대 — 25문항, 5지선다 + 주관식</h4><ul class="small"><li>미방 7문항은 <b>형태 판별 → 기계적 풀이</b>라 제일 먼저 턴다 (문항당 2–3분).</li><li>선대 세트형(48·49번처럼 두 문제 묶음)은 앞 문제 틀리면 뒤도 같이 틀린다. 앞 문제 답을 한 번 검산.</li><li>주관식은 정수 답이 대부분. 분수가 나오면 계산 실수 의심.</li><li>5지선다는 대입 검산이 된다: 초기조건, 특수값 $x=0$ 대입으로 보기 지우기.</li></ul></div>
<div class="card"><h4 style="color:var(--cau)">중앙대 — 30문항 60분</h4><ul class="small"><li><b>문항당 2분</b>. 한 문제에 4분 넘기면 무조건 표시하고 넘긴다.</li><li>1회전(40분): 2.5–3점짜리 계산 문제 싹쓸이. 2회전(15분): 표시한 4점짜리. 마지막 5분: 마킹 확인.</li><li>4지선다 행렬식·극한은 <b>숫자 대입으로 지우기</b>가 계산보다 빠른 경우가 많다 (13장 중앙대 2025-10).</li><li>배점이 문항마다 다르다 (2.5–4.4). 같은 시간이면 높은 배점 먼저.</li></ul></div>
</div>

<h3><span class="sn">20.2</span>실수 체크리스트 — 이 책 전체에서 제일 많이 틀리는 20개</h3>
${h.table(['#', '실수', '장'], [
  ['1', '$\\sin^{-1},\\tan^{-1}$ 의 치역 무시 ($\\sin^{-1}\\sin\\frac{5\\pi}6\\ne\\frac{5\\pi}6$)', '1'],
  ['2', '로피탈 3번 이상 → 테일러로 갈아탈 것', '2'],
  ['3', '$1^\\infty$ 꼴에서 $e^{\\lim g(f-1)}$ 대신 $1$ 이라고 쓰기', '2'],
  ['4', '매개변수 2계 미분에서 $\\dot x$ 로 한 번 더 안 나누기', '3'],
  ['5', '역함수 미분: $f(a)=b$ 의 $a$ 를 안 찾고 $b$ 를 대입', '3'],
  ['6', '거리 최소에서 제곱 안 하고 루트째 미분', '4'],
  ['7', '와셔 $\\pi(R^2-r^2)$ 를 $\\pi(R-r)^2$ 로', '6'],
  ['8', '이상적분: 구간 <b>안</b>의 발산점 놓치기', '6'],
  ['9', '$a_n\\to0$ 이라 수렴이라고 하기', '7'],
  ['10', '멱급수 끝점 판정 빼먹기', '7'],
  ['11', '극곡선 교점에서 원점 빼먹기, 길이에서 $|\\cos|$ 절댓값', '8'],
  ['12', '다변수 극한을 직선 경로만 보고 판정', '10'],
  ['13', '라그랑주에서 $x=0$ 같은 경우 나누기 빼먹기', '10'],
  ['14', '극좌표 $dA=r\\,dr\\,d\\theta$ 에서 $r$ 빼먹기, 구면 $\\rho^2\\sin\\phi$', '11'],
  ['15', '열린 곡면에 발산 정리 그냥 쓰기 (뚜껑!)', '12'],
  ['16', '$\\frac{(-y,x)}{x^2+y^2}$ 를 보존장이라 0 쓰기', '12'],
  ['17', '$\\det(kA)=k\\det A$ 로 쓰기 ($k^n$ 이다)', '13'],
  ['18', '행렬표현을 행으로 세우기 (열로 세운다)', '14'],
  ['19', '적분인자 쓰기 전에 표준형 안 만들기', '17'],
  ['20', '미정계수법 공명 ($x$ 곱하기) 빼먹기', '18'],
])}

<h3><span class="sn">20.3</span>D-day 운영표 (오늘 9월 24일 기준)</h3>
<p>고려대 시험은 12월 12일(앞선 작전지도 기준)이고, 한양대·중앙대는 해마다 12월 말–1월이다. 날짜는 반드시 각 학교 모집요강으로 다시 확인해라.</p>
${h.table(['기간', '할 일', '하루 분량'], [
  ['9/24 – 10/20 (4주)', '1–7장 (미적분 바닥 + 급수). 연습문제 전부 1회', '하루 1장 절반 + 문제 10개'],
  ['10/21 – 11/10 (3주)', '고려대 1지망: 8–12장 먼저 / 한·중 1지망: 13–16장 먼저', '하루 1장 + 문제 10개'],
  ['11/11 – 11/30 (3주)', '나머지 파트 + 17–19장 미분방정식', '하루 1장 + 앞 장 ✕ 재풀이'],
  ['12/1 – 12/11', '고려대 모드: 8–12장 ✕ 재풀이 + 모의 C 두 번 + 고려대 실제 기출', '매일 모의 1세트'],
  ['12/13 – 시험', '한양·중앙 모드: 13–19장 ✕ 재풀이 + 모의 A·B + 실제 기출 PDF 시간 재고', '하루 1세트 + 오답'],
])}
${h.box('tip', '오답(✕) 운영', '<p>0장의 "오답만 모아 보기" 버튼을 써라. ✕ 가 붙은 문제를 다시 풀어서 맞으면 ○ 로 바꾼다. <b>✕ 가 0 이 되는 날이 준비 끝나는 날</b>이다. ✕ 를 지우지 말고 ○ 로 덮어써야 몇 번 만에 고쳤는지 스스로 안다.</p>')}

<div class="probs-h"><h3>모의고사 A · 중앙대형</h3><span class="cnt">20문항 · 40분 · 4지선다</span></div>
<p class="small">시간 재고 풀어라. 문항당 2분. 풀이는 전부 푼 다음에 연다.</p>
${h.p({ src: '모의 A-1', q: String.raw`$\displaystyle\lim_{x\to0}\frac{e^{2x}-1-2x}{x\sin x}$`, choices: h.c`$1$ | $2$ | $3$ | $4$`, ans: '②', sol: String.raw`<p>분자 $\approx2x^2$, 분모 $\approx x^2$.</p>` })}
${h.p({ src: '모의 A-2', q: String.raw`$\dfrac{d}{dx}x^x\Big|_{x=e}$`, choices: h.c`$e^e$ | $2e^e$ | $e^{e+1}$ | $e^{e-1}$`, ans: '②', sol: String.raw`<p>$x^x(\ln x+1)$, $x=e$: $2e^e$.</p>` })}
${h.p({ src: '모의 A-3', q: String.raw`$\displaystyle\int_0^{\pi/2}\sin^3x\cos^2x\,dx$`, choices: h.c`$\frac1{15}$ | $\frac2{15}$ | $\frac15$ | $\frac4{15}$`, ans: '②', sol: String.raw`<p>$u=\cos x$: $\int_0^1(1-u^2)u^2du=\frac13-\frac15$.</p>` })}
${h.p({ src: '모의 A-4', q: String.raw`$\displaystyle\int_0^1xe^{2x}dx$`, choices: h.c`$\frac{e^2-1}4$ | $\frac{e^2+1}4$ | $\frac{e^2}4$ | $\frac{e^2+1}2$`, ans: '②', sol: String.raw`<p>$\left[\frac{xe^{2x}}2-\frac{e^{2x}}4\right]_0^1=\frac{e^2}4+\frac14$.</p>` })}
${h.p({ src: '모의 A-5', q: String.raw`$\displaystyle\sum_{n=1}^\infty\frac n{3^n}$`, choices: h.c`$\frac12$ | $\frac23$ | $\frac34$ | $1$`, ans: '③', sol: String.raw`<p>$\frac{x}{(1-x)^2}$, $x=\frac13$: $\frac{1/3}{4/9}$.</p>` })}
${h.p({ src: '모의 A-6', q: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{n^2}{2^n}x^{2n}$ 의 수렴반경`, choices: h.c`$\frac12$ | $\frac1{\sqrt2}$ | $\sqrt2$ | $2$`, ans: '③', sol: String.raw`<p>비판정 통째로: $\frac{x^2}{2}<1$.</p>` })}
${h.p({ src: '모의 A-7', q: String.raw`$f(x)=x^3+x+1$ 에 대해 $(f^{-1})'(3)$`, choices: h.c`$\frac14$ | $\frac13$ | $\frac12$ | $4$`, ans: '①', sol: String.raw`<p>$f(1)=3$, $f'(1)=4$.</p>` })}
${h.p({ src: '모의 A-8', q: String.raw`$y=x^2$ 과 $y=2x-x^2$ 으로 둘러싸인 넓이`, choices: h.c`$\frac16$ | $\frac13$ | $\frac12$ | $\frac23$`, ans: '②', sol: String.raw`<p>$\int_0^1(2x-2x^2)dx$.</p>` })}
${h.p({ src: '모의 A-9', q: String.raw`$y=e^x\ (0\le x\le1)$, $x$축, $x=0,1$ 로 둘러싸인 영역을 $x$축 둘레로 회전한 부피`, choices: h.c`$\pi(e-1)$ | $\frac\pi2(e^2-1)$ | $\pi(e^2-1)$ | $\frac\pi2(e-1)$`, ans: '②', sol: String.raw`<p>$\pi\int_0^1e^{2x}dx$.</p>` })}
${h.p({ src: '모의 A-10', q: String.raw`극곡선 $r=2\sin3\theta$ 로 둘러싸인 전체 넓이`, choices: h.c`$\frac\pi3$ | $\frac\pi2$ | $\pi$ | $2\pi$`, ans: '③', sol: String.raw`<p>잎 3개, 한 잎 $\frac12\int_0^{\pi/3}4\sin^23\theta\,d\theta=\frac\pi3$.</p>` })}
${h.p({ src: '모의 A-11', q: String.raw`곡면 $z=x^2y$ 의 점 $(1,2,2)$ 에서 접평면이 $z$축과 만나는 점의 $z$ 좌표`, choices: h.c`$-4$ | $-2$ | $2$ | $4$`, ans: '①', sol: String.raw`<p>$z-2=4(x-1)+(y-2)$, $x=y=0$: $z=2-4-2$.</p>` })}
${h.p({ src: '모의 A-12', q: String.raw`$x^2+y^2=5$ 위에서 $x+2y$ 의 최댓값`, choices: h.c`$\sqrt5$ | $2\sqrt5$ | $5$ | $10$`, ans: '③', sol: String.raw`<p>코시–슈바르츠 $\sqrt{1+4}\sqrt5$.</p>` })}
${h.p({ src: '모의 A-13', q: String.raw`$\displaystyle\int_0^1\int_x^1\sin(y^2)\,dy\,dx$`, choices: h.c`$1-\cos1$ | $\frac{1-\cos1}2$ | $\frac{\sin1}2$ | $\sin1$`, ans: '②', sol: String.raw`<p>순서 교환: $\int_0^1y\sin y^2dy$.</p>` })}
${h.p({ src: '모의 A-14', q: String.raw`$\displaystyle\iint_{x^2+y^2\le1}(x^2+y^2)^{3/2}dA$`, choices: h.c`$\frac\pi5$ | $\frac{2\pi}5$ | $\frac\pi2$ | $\frac{2\pi}3$`, ans: '②', sol: String.raw`<p>$2\pi\int_0^1r^3\cdot r\,dr$.</p>` })}
${h.p({ src: '모의 A-15', q: String.raw`단위원(반시계)에서 $\oint(x^2-y)\,dx+(x+y^3)\,dy$`, choices: h.c`$0$ | $\pi$ | $2\pi$ | $4\pi$`, ans: '③', sol: String.raw`<p>그린: $1-(-1)=2$, 넓이 $\pi$.</p>` })}
${h.p({ src: '모의 A-16', q: String.raw`$\det\begin{pmatrix}1&2&3\\4&5&6\\7&8&10\end{pmatrix}$`, choices: h.c`$-3$ | $0$ | $3$ | $6$`, ans: '①', sol: String.raw`<p>$1\cdot2-2\cdot(-2)+3\cdot(-3)$.</p>` })}
${h.p({ src: '모의 A-17', q: String.raw`$A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$ 일 때 $A^5$ 의 대각합`, choices: h.c`$242$ | $243$ | $244$ | $245$`, ans: '③', sol: String.raw`<p>고윳값 $3,1$ → $3^5+1$.</p>` })}
${h.p({ src: '모의 A-18', q: String.raw`$\begin{pmatrix}1&2&3\\2&4&6\\1&1&1\end{pmatrix}$ 의 영공간의 차원`, choices: h.c`$0$ | $1$ | $2$ | $3$`, ans: '②', sol: String.raw`<p>rank 2 (1·2행 비례), $3-2$.</p>` })}
${h.p({ src: '모의 A-19', q: String.raw`$y'+y=e^{-x},\ y(0)=1$ 일 때 $y(1)$`, choices: h.c`$\frac1e$ | $\frac2e$ | $e$ | $2e$`, ans: '②', sol: String.raw`<p>$(e^xy)'=1$ → $y=(x+1)e^{-x}$.</p>` })}
${h.p({ src: '모의 A-20', q: String.raw`$y''-4y'+4y=0,\ y(0)=1,\ y'(0)=3$ 일 때 $y(1)$`, choices: h.c`$e^2$ | $2e^2$ | $3e^2$ | $4e^2$`, ans: '②', sol: String.raw`<p>중근 2: $(1+t)e^{2t}$.</p>` })}

<div class="probs-h"><h3>모의고사 B · 한양대형 (선대 · 미방)</h3><span class="cnt">15문항 · 40분</span></div>
${h.p({ src: '모의 B-1', q: String.raw`$A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$, $A^{10}\begin{pmatrix}1\\1\end{pmatrix}$ 의 성분 합`, choices: h.c`$3^{10}$ | $2\cdot3^{10}$ | $3^{11}$ | $2\cdot3^{11}$ | $4\cdot3^{10}$`, ans: '②', sol: String.raw`<p>$(1,1)$ 은 고윳값 3 의 고유벡터.</p>` })}
${h.p({ src: '모의 B-2', q: String.raw`$3\times3$, $\det A=5$ 일 때 $\det(\operatorname{adj}A)$`, choices: h.c`$5$ | $15$ | $25$ | $125$ | $625$`, ans: '③', sol: String.raw`<p>$(\det A)^{n-1}$.</p>` })}
${h.p({ src: '모의 B-3', q: String.raw`$W=\{p\in P_3:\ p(1)=0,\ p'(1)=0\}$ 의 차원`, choices: h.c`$0$ | $1$ | $2$ | $3$ | $4$`, ans: '③', sol: String.raw`<p>$(x-1)^2(ax+b)$ 꼴. 4차원에 조건 2개.</p>` })}
${h.p({ src: '모의 B-4', q: String.raw`$T(p)=p'+p$ 의 $P_2$ 기저 $\{1,x,x^2\}$ 행렬표현의 모든 성분의 합`, choices: h.c`$4$ | $5$ | $6$ | $7$ | $8$`, ans: '③', sol: String.raw`<p>$T1=1,\ Tx=1+x,\ Tx^2=2x+x^2$ → $\begin{pmatrix}1&1&0\\0&1&2\\0&0&1\end{pmatrix}$.</p>` })}
${h.p({ src: '모의 B-5', q: String.raw`$(1,2,3)$ 의 $\operatorname{span}\{(1,1,1)\}$ 위로의 정사영의 길이`, choices: h.c`$\sqrt3$ | $2$ | $2\sqrt3$ | $3$ | $\sqrt{14}$`, ans: '③', sol: String.raw`<p>$\frac63(1,1,1)=(2,2,2)$.</p>` })}
${h.p({ src: '모의 B-6', q: String.raw`$2x^2+2xy+2y^2\le1$ 영역의 넓이`, choices: h.c`$\frac\pi3$ | $\frac\pi{\sqrt3}$ | $\frac\pi2$ | $\pi$ | $\sqrt3\pi$`, ans: '②', sol: String.raw`<p>고윳값 $3,1$ → $\frac{\pi}{\sqrt{3\cdot1}}$.</p>` })}
${h.p({ src: '모의 B-7', q: String.raw`고윳값이 $1,2,4$ 인 대칭행렬 $A$ 에 대해 $\det(A^2-3A)$`, choices: h.c`$-16$ | $-8$ | $8$ | $16$ | $32$`, ans: '④', sol: String.raw`<p>$(1-3)(4-6)(16-12)=16$.</p>` })}
${h.p({ src: '모의 B-8', q: String.raw`$\begin{pmatrix}2&1&0\\0&2&0\\0&0&3\end{pmatrix}$ 의 최소다항식 $m$ 에 대해 $m(4)$`, choices: h.c`$2$ | $4$ | $8$ | $12$ | $16$`, ans: '②', sol: String.raw`<p>2 의 블록 크기 2 → $(x-2)^2(x-3)$. $4\cdot1$.</p>` })}
${h.p({ src: '모의 B-9', q: String.raw`$y'=xy^2,\ y(0)=1$ 일 때 $y(1)$`, choices: h.c`$\frac12$ | $1$ | $\frac32$ | $2$ | $3$`, ans: '④', sol: String.raw`<p>$-\frac1y=\frac{x^2}2-1$ → $y=\frac{1}{1-x^2/2}$.</p>` })}
${h.p({ src: '모의 B-10', q: String.raw`$xy'+2y=4x^2,\ y(1)=2$ 일 때 $y(2)$`, choices: h.c`$\frac{15}4$ | $4$ | $\frac{17}4$ | $\frac92$ | $5$`, ans: '③', sol: String.raw`<p>$\mu=x^2$: $(x^2y)'=4x^3$ → $x^2y=x^4+1$.</p>` })}
${h.p({ src: '모의 B-11', q: String.raw`$y''+y=2\cos x,\ y(0)=y'(0)=0$ 일 때 $y\left(\frac\pi2\right)$`, choices: h.c`$0$ | $\frac\pi4$ | $\frac\pi2$ | $1$ | $\pi$`, ans: '③', sol: String.raw`<p>공명: $y_p=x\sin x$, 초기조건이 이미 만족 → $y=x\sin x$.</p>` })}
${h.p({ src: '모의 B-12', q: String.raw`$x^2y''-3xy'+4y=0,\ y(1)=1,\ y'(1)=3$ 일 때 $y(e)$`, choices: h.c`$e^2$ | $2e^2$ | $3e^2$ | $e^3$ | $2e^3$`, ans: '②', sol: String.raw`<p>중근 $r=2$: $x^2(1+\ln x)$.</p>` })}
${h.p({ src: '모의 B-13', q: String.raw`$\mathcal L^{-1}\left\{\dfrac1{s^2+2s+2}\right\}$ 의 $t=\frac\pi2$ 에서의 값`, choices: h.c`$0$ | $e^{-\pi/2}$ | $e^{\pi/2}$ | $\frac12e^{-\pi/2}$ | $1$`, ans: '②', sol: String.raw`<p>$e^{-t}\sin t$.</p>` })}
${h.p({ src: '모의 B-14', q: String.raw`$\mathbf X'=\begin{pmatrix}1&2\\2&1\end{pmatrix}\mathbf X,\ \mathbf X(0)=(1,1)$ 일 때 $x(1)$`, choices: h.c`$e$ | $e^2$ | $e^3$ | $e^{-1}$ | $2e^3$`, ans: '③', sol: String.raw`<p>초기값이 고윳값 3 의 고유벡터.</p>` })}
${h.p({ src: '모의 B-15', q: String.raw`$u_t=2u_{xx}\ (0<x<\pi)$, 양 끝 0, $u(x,0)=4\sin2x$ 일 때 $u\left(\frac\pi4,1\right)$`, choices: h.c`$4e^{-2}$ | $4e^{-4}$ | $4e^{-8}$ | $2e^{-8}$ | $0$`, ans: '③', sol: String.raw`<p>$e^{-2\cdot4t}$.</p>` })}

<div class="probs-h"><h3>모의고사 C · 고려대형</h3><span class="cnt">10문항 · 단답 + 서술</span></div>
${h.p({ src: '모의 C-1', q: String.raw`$\displaystyle\lim_{x\to0}\frac{\sin x-x\cos x}{x^3}$`, ans: '$\\frac13$', sol: String.raw`<p>$\left(x-\frac{x^3}6\right)-x\left(1-\frac{x^2}2\right)=\frac{x^3}3$.</p>` })}
${h.p({ src: '모의 C-2', q: String.raw`$f(x)=x^2e^x$ 일 때 $f^{(10)}(0)$`, ans: '$90$', sol: String.raw`<p>$\sum\frac{x^{n+2}}{n!}$, $x^{10}$ 계수 $\frac1{8!}$, $\times10!$.</p>` })}
${h.p({ src: '모의 C-3', q: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{(-1)^nn}{n^2+1}$ 은 절대수렴/조건수렴/발산?`, ans: '조건수렴', sol: String.raw`<p>크기 $\sim\frac1n$ 발산, 교대로는 ($\frac{n}{n^2+1}$ 이 $n\ge1$ 에서 감소, $\to0$) 수렴.</p>` })}
${h.p({ src: '모의 C-4', q: String.raw`$\displaystyle\sum\frac{(x-1)^n}{n\,3^n}$ 의 수렴구간`, ans: '$[-2,4)$', sol: String.raw`<p>$R=3$. $x=4$: 조화 발산. $x=-2$: 교대 수렴.</p>` })}
${h.p({ src: '모의 C-5', q: String.raw`극곡선 $r=\theta^2\ (0\le\theta\le\sqrt5)$ 의 길이`, ans: '$\\frac{19}3$', sol: String.raw`<p>$\sqrt{\theta^4+4\theta^2}=\theta\sqrt{\theta^2+4}$, $\frac13(\theta^2+4)^{3/2}\Big|_0^{\sqrt5}=\frac{27-8}3$.</p>` })}
${h.p({ src: '모의 C-6', q: String.raw`$x^2+y^2+z^2=14$ 위에서 $x+2y+3z$ 의 최댓값과 그 점`, ans: '$14$, $(1,2,3)$', sol: String.raw`<p>코시–슈바르츠 $\sqrt{14}\cdot\sqrt{14}$, 등호는 $(x,y,z)\parallel(1,2,3)$.</p>` })}
${h.p({ src: '모의 C-7', q: String.raw`구 $x^2+y^2+z^2\le4$ 안, 원뿔 $z\ge\sqrt{x^2+y^2}$ 위의 영역에서 $\iiint z\,dV$`, ans: '$2\\pi$', sol: String.raw`<p>$\int_0^{2\pi}\int_0^{\pi/4}\int_0^2\rho^3\cos\phi\sin\phi\,d\rho\,d\phi\,d\theta=2\pi\cdot\frac14\cdot4$.</p>` })}
${h.p({ src: '모의 C-8', q: String.raw`$\mathbf F=(2xy+z,\ x^2,\ x)$ 를 $(0,0,0)$ 에서 $(1,2,3)$ 까지 (아무 경로) 적분`, ans: '$5$', sol: String.raw`<p>$\phi=x^2y+xz$. 겹치는 항 한 번만. $2+3$.</p>` })}
${h.p({ src: '모의 C-9', q: String.raw`단위구면(바깥)을 지나는 $\mathbf F=(x^3,y^3,z^3)$ 의 유량`, ans: '$\\frac{12\\pi}5$', sol: String.raw`<p>$\operatorname{div}=3\rho^2$: $3\int\rho^4\sin\phi=3\cdot\frac{4\pi}5$.</p>` })}
${h.p({ src: '모의 C-10 · 서술', lv: 2, q: String.raw`$C$: 원기둥 $x^2+y^2=1$ 과 평면 $z=2-x$ 의 교선 (위에서 봐서 반시계). $\mathbf F=(z,x,y)$ 일 때 $\oint_C\mathbf F\cdot d\mathbf r$ 을 <b>과정과 함께</b> 구하시오.`, ans: '$2\\pi$', sol: String.raw`<p><b>[1] 정리 선택</b>: 닫힌 공간곡선 → 스토크스. $C$ 를 경계로 하는 곡면 $S$: 평면 $z=2-x$ 의 $x^2+y^2\le1$ 부분, 위쪽 방향 (반시계와 오른손 법칙 일치).</p><p><b>[2] 회전</b>: $\operatorname{curl}\mathbf F=(\partial_yy-\partial_zx,\ \partial_zz-\partial_xy,\ \partial_xx-\partial_yz)=(1,1,1)$.</p><p><b>[3] 법선</b>: $z=f(x,y)=2-x$ → $d\mathbf S=(-f_x,-f_y,1)dA=(1,0,1)dA$.</p><p><b>[4] 계산</b>: $\iint(1,1,1)\cdot(1,0,1)dA=2\cdot\pi$.</p><p>채점 포인트: 정리 이름, 곡면·방향 명시, curl 계산, $d\mathbf S$ 계산. 네 줄 다 쓰면 답이 틀려도 부분점수.</p>` })}

<h3><span class="sn">20.4</span>공식 카드 — 시험 전날 이것만</h3>
<div class="grid2">
<div class="card"><h4>극한 · 미분</h4><p class="small">$\lim f^g=e^{\lim g(f-1)}$ ($1^\infty$)<br>$\sin x\approx x-\frac{x^3}6,\ \cos x\approx1-\frac{x^2}2,\ e^x\approx1+x+\frac{x^2}2$<br>$(f^{-1})'(b)=\frac1{f'(a)}$, $\frac{dy}{dx}=-\frac{F_x}{F_y}$<br>매개 2계: $\frac{d}{dt}(y')\div\dot x$<br>$(fg)^{(n)}=\sum\binom nkf^{(k)}g^{(n-k)}$</p></div>
<div class="card"><h4>적분</h4><p class="small">$\int u\,dv=uv-\int v\,du$ (로다삼지)<br>$\int_0^{\pi/2}\sin^n$ 왈리스, $\int_0^\infty x^ne^{-x}=n!$<br>$t=\tan\frac x2$: $\sin=\frac{2t}{1+t^2},\ \cos=\frac{1-t^2}{1+t^2},\ dx=\frac{2dt}{1+t^2}$<br>King: $\int_a^bf(x)=\int_a^bf(a+b-x)$<br>$\frac{d}{dx}\int_{a(x)}^{b(x)}f=f(b)b'-f(a)a'$</p></div>
<div class="card"><h4>급수</h4><p class="small">$\sum\frac1{n^p}$: $p>1$ · $\sum\frac1{n(\ln n)^p}$: $p>1$<br>비·근판정 $L<1$ 수렴 · 교대: 감소 + $\to0$<br>$f^{(n)}(0)=n!\,a_n$<br>$\sum nx^n=\frac{x}{(1-x)^2}$, $\sum n^2x^n=\frac{x(1+x)}{(1-x)^3}$</p></div>
<div class="card"><h4>곡선 · 넓이 · 부피</h4><p class="small">극: $A=\frac12\int r^2$, $L=\int\sqrt{r^2+r'^2}$<br>원판 $\pi\int(R^2-r^2)$, 껍질 $2\pi\int xf$<br>$L=\int\sqrt{1+y'^2}$, 사이클로이드 $8a$<br>$\kappa=\frac{|x'y''-y'x''|}{(x'^2+y'^2)^{3/2}}=\frac{|\mathbf r'\times\mathbf r''|}{|\mathbf r'|^3}$</p></div>
<div class="card"><h4>다변수 · 다중적분</h4><p class="small">$D_{\mathbf u}f=\nabla f\cdot\mathbf u$, 최대 방향 $\nabla f$<br>$D=f_{xx}f_{yy}-f_{xy}^2$<br>$\nabla f=\lambda\nabla g$<br>$dA=r\,dr\,d\theta$, $dV=\rho^2\sin\phi$, $dx\,dy=|J|\,du\,dv$</p></div>
<div class="card"><h4>벡터 미적분</h4><p class="small">보존: $\operatorname{curl}=0$ → $\phi(B)-\phi(A)$ (구멍 조심)<br>그린 $\oint P\,dx+Q\,dy=\iint(Q_x-P_y)$<br>발산 $\oiint\mathbf F\cdot d\mathbf S=\iiint\operatorname{div}\mathbf F$ (열리면 뚜껑)<br>스토크스 $\oint\mathbf F\cdot d\mathbf r=\iint\operatorname{curl}\mathbf F\cdot d\mathbf S$<br>$z=f$: $d\mathbf S=(-f_x,-f_y,1)dA$</p></div>
<div class="card"><h4>선형대수</h4><p class="small">$\det(kA)=k^n\det A$, $\det\operatorname{adj}A=(\det A)^{n-1}$<br>rank + nullity = 열 수<br>$\sum\lambda=\operatorname{tr}$, $\prod\lambda=\det$, $f(A)\to f(\lambda)$<br>$A^n\mathbf v=\sum c_i\lambda_i^n\mathbf v_i$<br>$\operatorname{proj}_W\mathbf b=A(A^TA)^{-1}A^T\mathbf b$<br>대칭: 직교대각화, 이차형식 축 = 고유벡터</p></div>
<div class="card"><h4>미분방정식</h4><p class="small">선형 1계: 표준형 → $\mu=e^{\int P}$<br>베르누이 $v=y^{1-n}$ · 동차 $y=vx$ · 완전 $M_y=N_x$<br>2계: 특성방정식 (실근/중근×$x$/허근 $e^{\alpha x}\cos\beta x$)<br>공명 → $x$ 곱하기 · 오일러 $x^r$<br>$\mathcal L\{f'\}=sF-f(0)$, $\mathcal L\{f*g\}=FG$<br>$\mathbf X'=A\mathbf X$: $\sum c_ie^{\lambda_it}\mathbf v_i$</p></div>
</div>

${h.box('slang', '', '다 풀었으면 이제 실제 기출 PDF를 시간 재고 풀어라. 이 책 문제랑 모양이 똑같다는 게 느껴지면 준비 끝이다.')}
<p class="small">마지막으로 솔직하게: 이 책은 세 학교 기출을 기준으로 범위를 잡았지만 출제 범위가 해마다 조금씩 바뀐다. 모집요강의 출제 범위 공지와 가장 최근 기출은 시험 직전에 한 번 더 확인해라. 기출 중 이 책이 원문을 확인하지 못한 고려대 문항(작전지도 표로만 확인한 것)은 문제를 재구성해서 실었다.</p>
`
};
