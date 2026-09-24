module.exports = {
  id: 'c07', num: '07', part: 'PART A · 미적분의 바닥', title: '수열과 급수', short: '판정법 · 멱급수 · 테일러',
  schools: { KU: '9년 내내 출제 · 19%', HY: '미적 파트', CAU: '매년 2–5문항' },
  lede: '고려대가 제일 사랑하는 단원. <보기> 네다섯 개 급수를 한꺼번에 판정시키는 문제와, f⁽²⁰²⁵⁾(0) 같은 괴물을 계수 하나로 읽는 문제가 매년 나온다. 둘 다 패턴이다.',
  body: h => String.raw`
<h3><span class="sn">7.1</span>급수 = 부분합의 극한</h3>
<p>$\sum_{n=1}^\infty a_n$ 은 $S_N=a_1+\cdots+a_N$ 의 극한이다. 극한이 유한하면 수렴, 아니면 발산. 끝.</p>
${h.box('key', '값을 아는 급수 셋', String.raw`<p><b>등비</b>: $\displaystyle\sum_{n=0}^\infty ar^n=\frac{a}{1-r}\ \ (|r|<1)$, $|r|\ge1$ 이면 발산.</p><p><b>망원</b>: $\displaystyle\sum\left(b_n-b_{n+1}\right)=b_1-\lim b_n$. 예: $\sum\frac1{n(n+1)}=\sum\left(\frac1n-\frac1{n+1}\right)=1$.</p><p><b>p-급수</b>: $\displaystyle\sum\frac1{n^p}$ 수렴 $\iff p>1$. ($p=1$ 조화급수는 발산. $\sum\frac1{n^2}=\frac{\pi^2}6$ 은 교양.)</p>`)}
${h.box('warn', '일반항 판정은 한 방향뿐', '<p>$a_n\\not\\to0$ 이면 발산. 하지만 $a_n\\to0$ 이라고 수렴하는 건 <b>아니다</b> ($\\frac1n$). 이거 거꾸로 쓰면 바로 0점.</p>')}

<h3><span class="sn">7.2</span>판정법 순서도 — 30초 컷의 비밀</h3>
${h.flow([
  { q: '$a_n\\to0$ 인가?', a: '아니면 즉시 발산' },
  { q: '$(-1)^n$, $\\cos n\\pi$ 가 붙었나?', a: '교대급수 판정 (7.4)' },
  { q: '$n!$ 이나 $a^n$, $n^n$ 이 있나?', a: '비판정법 $\\left|\\frac{a_{n+1}}{a_n}\\right|$' },
  { q: '통째로 $(\\cdots)^n$ 거듭제곱인가?', a: '근판정법 $\\sqrt[n]{|a_n|}$' },
  { q: '$\\ln n$ 이 분모에 끼어 있나?', a: '적분판정 / 응축' },
  { q: '나머지 전부 (분수, 루트, 삼각)', a: '극한비교: 제일 센 항만 남겨 $\\frac1{n^p}$ 와 비교' },
], '급수 판정 순서도. 위에서부터 첫 번째로 걸리는 곳에서 멈춘다.')}
${h.box('key', '판정법 네 개', String.raw`<p><b>극한비교</b>: $a_n,b_n>0$ 이고 $\frac{a_n}{b_n}\to c\ (0<c<\infty)$ 면 같이 수렴/발산. 실전 표현: $a_n\sim b_n$.</p>
<p><b>비판정</b>: $L=\lim\left|\frac{a_{n+1}}{a_n}\right|$. $L<1$ 절대수렴, $L>1$ 발산, $L=1$ 모름.</p>
<p><b>근판정</b>: $L=\lim\sqrt[n]{|a_n|}$. 판정 기준 같음.</p>
<p><b>적분판정</b>: $f$ 양수·감소면 $\sum f(n)$ 과 $\int^\infty f$ 가 같이 간다.</p>`)}
${h.box('pat', '작은 것의 근사', String.raw`<p>$n\to\infty$ 에서 $\frac1n\to0$ 이니까 2장 근사를 그대로 쓴다: $\sin\frac1n\sim\frac1n$, $\ \tan^{-1}\frac1n\sim\frac1n$, $\ 1-\cos\frac1n\sim\frac1{2n^2}$, $\ \ln\left(1+\frac1n\right)\sim\frac1n$, $\ e^{1/n}-1\sim\frac1n$.</p>`)}
${h.box('key', '로그 끼인 경계선 (고려대 단골)', String.raw`<p>$\displaystyle\sum\frac1{n\ln n}$ 발산, $\displaystyle\sum\frac1{n(\ln n)^2}$ 수렴. 일반적으로 $\sum\frac1{n(\ln n)^p}$ 은 $p>1$ 일 때만 수렴 ($u=\ln x$ 로 적분판정). 그리고 $\ln n$ 은 어떤 $n^\epsilon$ 보다도 느리다: $\sum\frac{\ln n}{n^2}$ 수렴, $\sum\frac1{\sqrt n\ln n}$ 발산.</p>`)}
${h.ex({ src: 'CAU 2023-20', q: String.raw`수렴하는 것의 개수는? (가) $\sum_{n\ge2}\frac1{n(\ln n)^2}$ (나) $\sum\left(\frac{2n+3}{3n+2}\right)^n$ (다) $\sum(-1)^n\frac{\sqrt n\ln(1+n)}{n+1}$ (라) $\sum\sin\frac1n$`, choices: h.c`1 | 2 | 3 | 4`,
  sol: String.raw`<p>(가) $p=2>1$ 로그 급수 → 수렴. (나) 통째 $n$ 제곱 → 근판정 $\frac{2n+3}{3n+2}\to\frac23<1$ → 수렴.<br>(다) 교대. 크기 $\frac{\sqrt n\ln n}{n}=\frac{\ln n}{\sqrt n}\to0$ 이고 (충분히 큰 $n$ 에서) 감소 → 수렴. (라) $\sin\frac1n\sim\frac1n$ → 발산.</p>`, ans: '③ 3개' })}
${h.ex({ src: 'CAU 2024-4', q: String.raw`수렴하는 것의 개수는? (가) $\sum\frac1{n(\ln(n+1))^2}$ (나) $\sum\tan^{-1}\frac1n$ (다) $\sum\frac{\cos n\pi}{\sqrt n}$ (라) $\sum\frac1{n\left(1+\frac1{\sqrt[3]{2^2}}+\cdots+\frac1{\sqrt[3]{n^2}}\right)}$`, choices: h.c`1 | 2 | 3 | 4`,
  sol: String.raw`<p>(가) 로그 제곱 → 수렴. (나) $\sim\frac1n$ → 발산. (다) $\cos n\pi=(-1)^n$, 교대 + $\frac1{\sqrt n}\downarrow0$ → 수렴.</p><p>(라) 괄호 안 $\sum_{k=1}^nk^{-2/3}\approx\int_1^nx^{-2/3}dx\approx3n^{1/3}$. 그래서 일반항 $\sim\frac1{3n^{4/3}}$, $p=\frac43>1$ → 수렴.</p>`, ans: '③ 3개' })}

<h3><span class="sn">7.3</span>교대급수 · 절대수렴 · 조건수렴</h3>
${h.box('key', '교대급수 판정 (라이프니츠)', String.raw`<p>$\sum(-1)^nb_n$ 에서 $b_n>0$ 이 <b>감소</b>하고 <b>$b_n\to0$</b> 이면 수렴.</p><p><b>절대수렴</b>: $\sum|a_n|$ 도 수렴. <b>조건수렴</b>: $\sum a_n$ 은 수렴인데 $\sum|a_n|$ 은 발산. 예: $\sum\frac{(-1)^{n+1}}n=\ln2$ 는 조건수렴.</p>`)}
${h.plot({ x: [0, 15], y: [0.3, 1.05], w: 540, h: 240, fns: [{ f: () => Math.log(2), c: 2, dash: 1, thin: 1, label: 'ln 2', lx: 13.5, ly: 0.66 }], curves: [{ fx: t => t, fy: t => { let s = 0; for (let k = 1; k <= Math.floor(t); k++) s += (k % 2 ? 1 : -1) / k; return s; }, t: [1, 15], n: 1400, c: 1 }], xt: [1, 5, 10, 15], yt: [0.5, 1], cap: '$1-\\frac12+\\frac13-\\cdots$ 의 부분합. 위아래로 번갈아 튀면서 $\\ln2$ 로 조여 들어간다. 오차는 항상 다음 항 크기보다 작다.' })}
${h.ex({ src: 'CAU 2026-15', q: String.raw`$A_k=\displaystyle\int_{k\pi}^{(k+1)\pi}\frac{\sin t}{t^\delta}dt$ 라 할 때, $\sum A_k$ 는 수렴하지만 $\sum|A_k|$ 는 발산하는 경우는?`, choices: h.c`$\delta=0$ | $\delta=\frac13$ | $\delta=\frac53$ | $\delta=2$`,
  sol: String.raw`<p>$\sin t$ 는 구간마다 부호가 바뀌니 $A_k$ 는 교대. 크기는 대략 $|A_k|\approx\frac{2}{(k\pi)^\delta}$.</p><p>조건수렴 = 교대로는 수렴($|A_k|\downarrow0$ 이려면 $\delta>0$) + 절댓값은 발산($\sum\frac1{k^\delta}$ 발산이려면 $\delta\le1$). 그러니 $0<\delta\le1$.</p>`, ans: '② $\\delta=\\frac13$' })}

<h3><span class="sn">7.4</span>멱급수와 수렴반경</h3>
<p>$\sum a_n(x-c)^n$ 은 $x$ 의 함수다. 이게 수렴하는 $x$ 는 항상 <b>$c$ 를 중심으로 한 구간</b>이고, 그 반지름이 수렴반경 $R$.</p>
${h.plot({ x: [-3.3, 3.3], y: [-0.7, 0.9], grid: false, w: 560, h: 130, axes: false, lines: [{ p: [-3.2, 0], q: [3.2, 0], c: 'm' }, { p: [-1.5, 0], q: [1.5, 0], c: 1 }], pts: [{ x: -1.5, y: 0, c: 2, open: 1, label: 'c − R', dy: -12, dx: -18 }, { x: 1.5, y: 0, c: 2, open: 1, label: 'c + R', dy: -12, dx: -18 }, { x: 0, y: 0, c: 1, label: 'c', dy: -12, dx: -4 }], texts: [{ x: -2.4, y: 0.35, t: '발산', c: 2 }, { x: 2.1, y: 0.35, t: '발산', c: 2 }, { x: -0.55, y: 0.35, t: '절대수렴', c: 1 }, { x: -1.5, y: -0.5, t: '끝점: 직접 확인', anchor: 'middle' }, { x: 1.5, y: -0.5, t: '끝점: 직접 확인', anchor: 'middle' }], cap: '수렴 구간. 안쪽은 무조건 절대수렴, 바깥은 무조건 발산, <b>끝점 두 개만</b> 따로 판정.' })}
${h.box('key', '수렴반경', String.raw`<p>$\displaystyle\frac1R=\lim\left|\frac{a_{n+1}}{a_n}\right|$ 또는 $\displaystyle\frac1R=\lim\sqrt[n]{|a_n|}$</p><p>$x^{2n}$ 처럼 띄엄띄엄 있으면 $a_n$ 공식 말고 <b>비판정을 통째로</b> 적용해서 $|x|$ 조건을 읽는다.</p>`)}
${h.ex({ src: 'CAU 2025-2', q: String.raw`멱급수 $\displaystyle\sum_{n=1}^\infty\frac{n!}{n^n}x^n$ 의 수렴반경은?`, choices: h.c`$\frac1e$ | $1$ | $e$ | $+\infty$`,
  sol: String.raw`<p>$\dfrac{a_{n+1}}{a_n}=\dfrac{(n+1)!}{(n+1)^{n+1}}\cdot\dfrac{n^n}{n!}=\left(\dfrac n{n+1}\right)^n\to\dfrac1e$. 그래서 $R=e$.</p>`, ans: '③ $e$' })}
${h.ex({ src: 'KU 2021-2', q: String.raw`$\displaystyle\sum\frac{n!\,x^n}{1\cdot3\cdot5\cdots(2n-1)}$ 가 수렴하는 정수 $x$ 를 모두 구하시오.`,
  sol: String.raw`<p>비: $\dfrac{(n+1)|x|}{2n+1}\to\dfrac{|x|}2$ → $R=2$. 끝점 $x=\pm2$: $|a_n|=\dfrac{n!\,2^n}{1\cdot3\cdots(2n-1)}=\dfrac{2\cdot4\cdots2n}{1\cdot3\cdots(2n-1)}\ge1$ 이라 $\not\to0$ → 발산. 정수는 $-1,0,1$.</p>`, ans: '$-1,\\ 0,\\ 1$' })}

<h3><span class="sn">7.5</span>매클로린 급수 — 외울 12개</h3>
<p>$f$ 를 $x=0$ 근처에서 무한 다항식으로 쓴 것: $f(x)=\sum\frac{f^{(n)}(0)}{n!}x^n$. 아래 표는 구구단이다. 2장에서 앞 몇 항만 썼던 걸 끝까지 쓴 버전.</p>
${h.table(['함수', '급수', '수렴 범위'], [
  ['$\\dfrac1{1-x}$', '$\\sum x^n=1+x+x^2+\\cdots$', '$|x|<1$'],
  ['$\\dfrac1{1+x^2}$', '$\\sum(-1)^nx^{2n}$', '$|x|<1$'],
  ['$e^x$', '$\\sum\\dfrac{x^n}{n!}$', '전체'],
  ['$\\sin x$', '$\\sum\\dfrac{(-1)^nx^{2n+1}}{(2n+1)!}$', '전체'],
  ['$\\cos x$', '$\\sum\\dfrac{(-1)^nx^{2n}}{(2n)!}$', '전체'],
  ['$\\sinh x,\\ \\cosh x$', '$\\sin,\\cos$ 에서 $(-1)^n$ 을 뺀 것', '전체'],
  ['$\\ln(1+x)$', '$\\sum\\dfrac{(-1)^{n+1}x^n}{n}$', '$-1<x\\le1$'],
  ['$-\\ln(1-x)$', '$\\sum\\dfrac{x^n}n$', '$-1\\le x<1$'],
  ['$\\tan^{-1}x$', '$\\sum\\dfrac{(-1)^nx^{2n+1}}{2n+1}$', '$|x|\\le1$'],
  ['$\\tanh^{-1}x=\\frac12\\ln\\frac{1+x}{1-x}$', '$\\sum\\dfrac{x^{2n+1}}{2n+1}$', '$|x|<1$'],
  ['$(1+x)^a$', '$\\sum\\dbinom an x^n=1+ax+\\frac{a(a-1)}{2!}x^2+\\cdots$', '$|x|<1$'],
  ['$\\dfrac1{\\sqrt{1-x^2}}$', '$\\sum\\dfrac{\\binom{2n}n}{4^n}x^{2n}=1+\\frac12x^2+\\frac38x^4+\\cdots$', '$|x|<1$'],
])}
${h.box('tip', '안 외워도 되는 것들', '<p>$\\frac1{1+x^2}$ 은 $\\frac1{1-x}$ 에 $x\\to-x^2$. $\\tan^{-1}x$ 는 그걸 적분. $\\ln(1+x)$ 는 $\\frac1{1+x}$ 적분. <b>대입·미분·적분</b>으로 새 급수를 만드는 게 편입 급수의 전부다.</p>')}

<h3><span class="sn">7.6</span>$f^{(n)}(0)$ — 미분 한 번도 안 하고 구하기</h3>
${h.box('key', '계수 = 도함수', String.raw`<p>$f(x)=\sum a_nx^n$ 이면 $\ f^{(n)}(0)=n!\,a_n$</p><p>그러니 $f^{(2025)}(0)$ 을 물으면 <b>급수에서 $x^{2025}$ 의 계수를 찾아 $2025!$ 을 곱한다.</b> 해당 차수 항이 없으면 답은 0.</p>`)}
${h.ex({ src: 'KU 2026-5', q: String.raw`$f(x)=x^5\tan^{-1}(x^4)$ 일 때 $f^{(2025)}(0)$ 을 구하시오.`,
  sol: String.raw`<p>$\tan^{-1}(x^4)=\sum\frac{(-1)^n x^{8n+4}}{2n+1}$ 에 $x^5$ 를 곱하면 $\sum\frac{(-1)^nx^{8n+9}}{2n+1}$.</p><p>$8n+9=2025$ → $n=252$. 계수 $\frac{(-1)^{252}}{505}=\frac1{505}$. 답 $\frac{2025!}{505}$.</p>`, ans: '$\\dfrac{2025!}{505}$' })}
${h.ex({ src: 'CAU 2024-5', q: String.raw`$f(x)=e^x(\cos2x+\sin2x)$ 의 매클로린 전개에서 $x^5$ 계수를 $a_5$ 라 할 때 $5!\times a_5$ 는?`, choices: h.c`$3$ | $5$ | $7$ | $9$`,
  sol: String.raw`<p>구하는 건 $f^{(5)}(0)$. 오일러 공식 $e^{i\theta}=\cos\theta+i\sin\theta$ 를 쓰면 $e^x(\cos2x+i\sin2x)=e^{(1+2i)x}$. 그래서 $f=\operatorname{Re}+\operatorname{Im}$ of $e^{(1+2i)x}$ 이고 $f^{(5)}(0)=\operatorname{Re}+\operatorname{Im}$ of $(1+2i)^5$.</p><p>$(1+2i)^2=-3+4i$, $(1+2i)^4=-7-24i$, $(1+2i)^5=41-38i$. 합 $41-38=3$.</p>`, ans: '① $3$' })}
${h.ex({ src: 'CAU 2026-22', q: String.raw`$H(x)=\dfrac1x\displaystyle\int_0^x\frac{\sin t}tdt\ (x\ne0),\ H(0)=1$ 일 때 $H''(0)$ 은?`, choices: h.c`$-\frac14$ | $-\frac19$ | $0$ | $\frac1{27}$`,
  sol: String.raw`<p>$\frac{\sin t}t=1-\frac{t^2}6+\cdots$ → 적분 $x-\frac{x^3}{18}+\cdots$ → $x$ 로 나누면 $H=1-\frac{x^2}{18}+\cdots$. $H''(0)=2!\cdot\left(-\frac1{18}\right)=-\frac19$.</p>`, ans: '②' })}

<h3><span class="sn">7.7</span>급수의 합 구하기 — 아는 급수로 역추적</h3>
${h.box('key', '미분해서 만드는 합', String.raw`<p>$\displaystyle\sum_{n\ge1}nx^{n}=\frac{x}{(1-x)^2},\qquad \sum_{n\ge1}n^2x^n=\frac{x(1+x)}{(1-x)^3},\qquad \sum_{n\ge0}\frac{n^2}{n!}=2e$</p><p>유도: $\sum x^n=\frac1{1-x}$ 를 미분하고 $x$ 곱하기. 한 번 더 하면 $n^2$.</p>`)}
${h.ex({ src: 'CAU 2025-24', q: String.raw`$\displaystyle\sum_{n=0}^\infty\frac{(n+1)^2}{3^n}$ 의 값은?`, choices: h.c`$\frac8{27}$ | $\frac13$ | $\frac72$ | $\frac92$`,
  sol: String.raw`<p>$m=n+1$: $\sum_{m\ge1}\frac{m^2}{3^{m-1}}=3\sum m^2\left(\frac13\right)^m=3\cdot\dfrac{\frac13\cdot\frac43}{\left(\frac23\right)^3}=3\cdot\frac32=\frac92$.</p>`, ans: '④ $\\frac92$' })}
${h.ex({ src: 'CAU 2026-11', q: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{(n+2)^2}{(n+1)!}$ 의 값은?`, choices: h.c`$2(e-1)$ | $3(e-1)$ | $4(e-1)$ | $5(e-1)$`,
  sol: String.raw`<p>$m=n+1\ (m\ge2)$: $\sum_{m\ge2}\frac{(m+1)^2}{m!}=\sum_{m\ge2}\frac{m^2+2m+1}{m!}$.</p><p>$m\ge0$ 전체 합은 $\sum\frac{m^2}{m!}+2\sum\frac m{m!}+\sum\frac1{m!}=2e+2e+e=5e$. 빠진 $m=0,1$ 항 $1+4=5$ 를 빼면 $5e-5$.</p>`, ans: '④' })}

<div class="probs-h"><h3>연습문제 7</h3><span class="cnt">22문항</span></div>
${h.p({ q: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{1}{n(n+2)}$`, ans: '$\\frac34$', sol: String.raw`<p>$\frac12\left(\frac1n-\frac1{n+2}\right)$ 망원: $\frac12\left(1+\frac12\right)$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\sum_{n=0}^\infty\frac{2^n+3^n}{6^n}$`, ans: '$\\frac72$', sol: String.raw`<p>$\frac1{1-1/3}+\frac1{1-1/2}=\frac32+2$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\sum\frac{n^2+1}{n^4+n}$ 수렴/발산`, ans: '수렴', sol: String.raw`<p>제일 센 항만: $\frac{n^2}{n^4}=\frac1{n^2}$ → $p=2$ → 수렴.</p>` })}
${h.p({ q: String.raw`$\displaystyle\sum\frac{n^2}{2^n}$ 수렴/발산`, ans: '수렴 (합 6)', sol: String.raw`<p>비판정 $\frac12$. 합은 $\frac{x(1+x)}{(1-x)^3}$ 에 $x=\frac12$: $\frac{\frac12\cdot\frac32}{\frac18}=6$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\sum\frac{n!}{n^n}$ 수렴/발산`, ans: '수렴', sol: String.raw`<p>비판정 $\to\frac1e<1$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\sum\left(1-\cos\frac1n\right)$`, ans: '수렴', sol: String.raw`<p>$\sim\frac1{2n^2}$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\sum\frac{1}{\sqrt n\,\ln n}$ ($n\ge2$)`, ans: '발산', sol: String.raw`<p>$\ln n\ll n^{1/4}$ 이니 $\frac1{\sqrt n\ln n}\ge\frac1{n^{3/4}}$ (큰 $n$).</p>` })}
${h.p({ q: String.raw`$\displaystyle\sum\frac{(-1)^n}{\ln n}$ ($n\ge2$) 는 절대수렴/조건수렴/발산?`, ans: '조건수렴', sol: String.raw`<p>교대로 수렴, $\frac1{\ln n}>\frac1n$ 이라 절댓값은 발산.</p>` })}
${h.p({ src: 'KU 2019-3', q: String.raw`$\displaystyle\sum\left(\frac{n}{n+1}\right)^{n^2}$`, ans: '수렴', sol: String.raw`<p>근판정: $\left(\frac n{n+1}\right)^n=\frac1{(1+1/n)^n}\to\frac1e<1$.</p>` })}
${h.p({ src: 'KU 2019-10', lv: 2, q: String.raw`$\displaystyle\sum_{n\ge2}\frac1{(\ln n)^{\ln n}}$`, ans: '수렴', sol: String.raw`<p>$(\ln n)^{\ln n}=e^{\ln n\cdot\ln\ln n}=n^{\ln\ln n}$. $n>e^{e^2}$ 이면 지수 $>2$ 라서 $\le\frac1{n^2}$.</p>` })}
${h.p({ src: 'KU 2018-3', q: String.raw`$\displaystyle\sum\frac{2^nx^n}{n^2}$ 의 수렴반경`, ans: '$\\frac12$', sol: String.raw`<p>$\sqrt[n]{\frac{2^n}{n^2}}\to2$.</p>` })}
${h.p({ q: String.raw`$\displaystyle\sum\frac{(x-3)^n}{n\,2^n}$ 의 수렴구간`, ans: '$[1,5)$', sol: String.raw`<p>$R=2$, 중심 3. $x=5$: $\sum\frac1n$ 발산. $x=1$: $\sum\frac{(-1)^n}n$ 수렴.</p>` })}
${h.p({ src: 'CAU 2023-21', q: String.raw`$f(x)=\displaystyle\sum_{n=1}^\infty\frac{x^n}n$ 에 대하여 $f\left(\frac12\right)$`, choices: h.c`$\ln\frac32$ | $\ln2$ | $\ln\frac52$ | $\ln3$`, ans: '② $\\ln2$', sol: String.raw`<p>$f=-\ln(1-x)$, $-\ln\frac12=\ln2$.</p>` })}
${h.p({ src: 'CAU 2025-22', q: String.raw`$\ln\left(\dfrac{1+x}{1-x}\right)=\sum B_nx^n$ 에서 $B_5+B_8$`, choices: h.c`$\frac14$ | $\frac25$ | $\frac{13}{20}$ | $\frac58$`, ans: '② $\\frac25$', sol: String.raw`<p>$=2\left(x+\frac{x^3}3+\frac{x^5}5+\cdots\right)$. 짝수 차수 없음. $B_5=\frac25,\ B_8=0$.</p>` })}
${h.p({ src: 'CAU 2025-26', q: String.raw`$\dfrac1{\sqrt{1-x^2}}=\sum A_kx^{2k}$ 에서 $\dfrac{A_5}{A_4}$`, choices: h.c`$\frac7{10}$ | $\frac9{10}$ | $\frac{11}{10}$ | $\frac{13}{10}$`, ans: '② $\\frac9{10}$', sol: String.raw`<p>이항급수 $(1-u)^{-1/2}$, $u=x^2$. 계수 비 $\frac{A_k}{A_{k-1}}=\frac{-\frac12-(k-1)}{k}\cdot(-1)=\frac{2k-1}{2k}$. $k=5$: $\frac9{10}$.</p>` })}
${h.p({ src: 'CAU 2026-8', q: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{(-1)^{n+1}}n$`, choices: h.c`$-\ln2$ | $1-\ln2$ | $\ln2$ | $1+\ln2$`, ans: '③', sol: String.raw`<p>$\ln(1+x)$ 에 $x=1$.</p>` })}
${h.p({ src: 'CAU 2026-17', q: String.raw`$|x|<1$ 일 때 $\displaystyle\int_0^x\frac{\tan^{-1}u}udu=\sum C_kx^{2k+1}$ 에서 $\dfrac{C_3}{C_4}$`, choices: h.c`$-\frac{81}{49}$ | $-\frac{49}{25}$ | $-\frac{25}9$ | $\frac{81}{25}$`, ans: '①', sol: String.raw`<p>$\frac{\tan^{-1}u}u=\sum\frac{(-1)^ku^{2k}}{2k+1}$, 적분하면 $C_k=\frac{(-1)^k}{(2k+1)^2}$. $C_3=-\frac1{49},\ C_4=\frac1{81}$.</p>` })}
${h.p({ src: 'KU 2018-2', q: String.raw`$f(x)=\dfrac{x^2}{x+2}$ 일 때 $f^{(4)}(0)$`, ans: '$3$', sol: String.raw`<p>$\frac{x^2}2\cdot\frac1{1+x/2}=\frac{x^2}2\left(1-\frac x2+\frac{x^2}4-\cdots\right)$. $x^4$ 계수 $\frac18$, $\times4!=3$.</p>` })}
${h.p({ src: 'KU 2020-7', lv: 2, q: String.raw`$f(x)=\displaystyle\int_0^xt^2e^{-t^2}dt$ 의 $f^{(101)}(0)$`, ans: '$-\\dfrac{100!}{49!}$', sol: String.raw`<p>$t^2e^{-t^2}=\sum\frac{(-1)^kt^{2k+2}}{k!}$, 적분 $\sum\frac{(-1)^kx^{2k+3}}{(2k+3)k!}$. $2k+3=101$ → $k=49$. $101!\cdot\frac{-1}{101\cdot49!}$.</p>` })}
${h.p({ src: 'KU 2023-3', q: String.raw`$f(x)=\ln(1+x^2)$ 의 $f^{(2022)}(0)$`, ans: '$\\dfrac{2022!}{1011}$', sol: String.raw`<p>$\sum\frac{(-1)^{n+1}x^{2n}}n$, $n=1011$ 에서 부호 $+$.</p>` })}
${h.p({ src: 'KU 2021-6', lv: 2, q: String.raw`$e^{-x^2}\cos2x=\sum a_nx^n$ 일 때 $90\displaystyle\sum_{n=0}^6a_n$`, ans: '$-68$', sol: String.raw`<p>$e^{-x^2}=1-x^2+\frac{x^4}2-\frac{x^6}6$, $\cos2x=1-2x^2+\frac23x^4-\frac4{45}x^6$. 곱해서 짝수 차만: $a_0=1$, $a_2=-3$, $a_4=\frac23+2+\frac12=\frac{19}6$, $a_6=-\frac4{45}-\frac23-1-\frac16=-\frac{173}{90}$. 합 $1-3+\frac{19}6-\frac{173}{90}=\frac{90-270+285-173}{90}=-\frac{68}{90}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\displaystyle\sum_{n=1}^\infty\frac{n}{2^n}$`, ans: '$2$', sol: String.raw`<p>$\frac{x}{(1-x)^2}$ 에 $\frac12$.</p>` })}
`
};
