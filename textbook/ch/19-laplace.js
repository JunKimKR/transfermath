module.exports = {
  id: 'c19', num: '19', part: 'PART D · 공학수학', title: '라플라스 · 연립 미분방정식 · 열방정식', short: '라플라스 · 연립 · 열방정식',
  schools: { KU: '출제 없음', HY: '라플라스 4 · 연립 5 · 열 2 (5년)', CAU: '출제 없음 (라플라스 적분만 2026-12)' },
  lede: '라플라스 변환은 미분을 곱셈으로 바꾸는 번역기다. 미분방정식을 대수 방정식으로 바꿔 풀고 다시 번역해 온다. 연립 미분방정식은 15장 고윳값을 그대로 쓴다. 한양대 5점짜리가 여기 있다.',
  body: h => String.raw`
<h3><span class="sn">19.1</span>라플라스 변환 — 번역표</h3>
<p>$\mathcal L\{f\}(s)=F(s)=\displaystyle\int_0^\infty e^{-st}f(t)\,dt$. 5장에서 이미 $\int_0^\infty e^{-st}\sin t\,dt=\frac1{s^2+1}$ 을 계산했다. 그게 라플라스 변환이다.</p>
${h.table(['$f(t)$', '$F(s)$', '$f(t)$', '$F(s)$'], [
  ['$1$', '$\\dfrac1s$', '$\\sin\\omega t$', '$\\dfrac{\\omega}{s^2+\\omega^2}$'],
  ['$t^n$', '$\\dfrac{n!}{s^{n+1}}$', '$\\cos\\omega t$', '$\\dfrac{s}{s^2+\\omega^2}$'],
  ['$e^{at}$', '$\\dfrac1{s-a}$', '$\\sinh at$', '$\\dfrac{a}{s^2-a^2}$'],
  ['$e^{at}f(t)$', '$F(s-a)$ ← $s$ 이동', '$u(t-c)f(t-c)$', '$e^{-cs}F(s)$ ← $t$ 이동'],
  ["$f'(t)$", '$sF-f(0)$', "$f''(t)$", "$s^2F-sf(0)-f'(0)$"],
  ['$tf(t)$', "$-F'(s)$", '$(f*g)(t)$', '$F(s)G(s)$'],
], 'c')}
${h.box('key', '역변환 요령', String.raw`<p>① 분모 인수분해 → 부분분수. ② 이차식이 안 쪼개지면 <b>완전제곱</b> $(s-a)^2+\omega^2$ 로 만들고 $s$ 이동 공식. ③ 분자도 $(s-a)$ 기준으로 맞춘다.</p>`)}
${h.ex({ src: 'HY 2025-51', q: String.raw`$F(s)=\dfrac{s-1}{s^2+4s+4}$ 의 라플라스 역변환을 $f(t)$ 라 할 때 $f(1)$ 은?`, choices: h.c`$-2e^{-2}$ | $-e^{-2}$ | $e^{-2}$ | $2e^{-2}$ | $3e^{-2}$`,
  sol: String.raw`<p>$\dfrac{s-1}{(s+2)^2}=\dfrac{(s+2)-3}{(s+2)^2}=\dfrac1{s+2}-\dfrac3{(s+2)^2}$.</p><p>$f=e^{-2t}-3te^{-2t}$ ($\frac1{s^2}\leftrightarrow t$ 에 $s$ 이동). $f(1)=e^{-2}-3e^{-2}$.</p>`, ans: '①' })}
<h4>초기값 문제를 라플라스로</h4>
${h.ex({ q: String.raw`$y''+y=1,\ y(0)=0,\ y'(0)=0$`,
  sol: String.raw`<p>변환: $s^2Y+Y=\frac1s$ → $Y=\dfrac1{s(s^2+1)}=\dfrac1s-\dfrac{s}{s^2+1}$. 역변환: $y=1-\cos t$.</p><p>초기값이 0 이면 라플라스가 미정계수법보다 빠르다. 초기값이 알아서 들어가니까 상수 결정 단계가 없다.</p>`, ans: '$y=1-\\cos t$' })}

<h3><span class="sn">19.2</span>합성곱과 적분방정식</h3>
${h.box('key', '합성곱', String.raw`<p>$(f*g)(t)=\displaystyle\int_0^tf(\tau)g(t-\tau)\,d\tau$, $\ \mathcal L\{f*g\}=FG$.</p><p>$\int_0^x\sin(x-t)f(t)\,dt$ 같은 게 보이면 <b>합성곱</b> ($=\sin*f$). 양변 라플라스 하면 대수 방정식.</p>`)}
${h.ex({ src: 'HY 2022-25', q: String.raw`$f(x)=x^4+\displaystyle\int_0^x\sin(x-t)f(t)\,dt$ 에서 $f(1)=\frac qp$ ($p,q$ 서로소)일 때 $p+q$ 를 구하시오.`,
  sol: String.raw`<p>$F=\frac{24}{s^5}+\frac{F}{s^2+1}$ → $F\cdot\frac{s^2}{s^2+1}=\frac{24}{s^5}$ → $F=\frac{24(s^2+1)}{s^7}=\frac{24}{s^5}+\frac{24}{s^7}$.</p><p>$f=x^4+\frac{24}{6!}x^6=x^4+\frac{x^6}{30}$. $f(1)=\frac{31}{30}$.</p>`, ans: '$61$' })}

<h3><span class="sn">19.3</span>연립 미분방정식 $\mathbf X'=A\mathbf X$</h3>
${h.box('key', '고윳값으로 푼다', String.raw`<p>$A\mathbf v=\lambda\mathbf v$ 면 $\mathbf X=e^{\lambda t}\mathbf v$ 가 해. 대각화 가능하면</p>$$\mathbf X(t)=c_1e^{\lambda_1t}\mathbf v_1+\cdots+c_ne^{\lambda_nt}\mathbf v_n,\qquad \mathbf X(0)=\sum c_i\mathbf v_i$$<p>초기값을 고유벡터로 쪼개는 게 계산의 전부 (15.5 의 $A^n\mathbf v$ 와 똑같은 구조, $\lambda^n$ 대신 $e^{\lambda t}$).</p><p>허근 $\alpha\pm\beta i$: 실수해 $e^{\alpha t}(\cos\beta t,\ \sin\beta t)$ 조합. $2\times2$ 는 한 식을 미분해서 2계 하나로 만드는 게 더 빠르다.</p>`)}
${h.ex({ src: 'HY 2026-26', q: String.raw`$\mathbf X'=\begin{pmatrix}3&1&-1\\1&3&-1\\3&3&-1\end{pmatrix}\mathbf X,\ \mathbf X(0)=(2,3,7)^T$ 일 때 $x(\ln5)+y(\ln5)+z(\ln5)$ 를 구하시오.`,
  sol: String.raw`<p>고윳값: $\det(A-\lambda I)=-(\lambda-1)(\lambda-2)^2$ (대각합 $1+2+2=5$ 로 검산). $\lambda=1$: $(1,1,3)$. $\lambda=2$: $A-2I=\begin{pmatrix}1&1&-1\\1&1&-1\\3&3&-3\end{pmatrix}$, rank 1 → 고유공간 2차원: $(-1,1,0),(1,0,1)$.</p><p>$(2,3,7)=a(1,1,3)+b(-1,1,0)+c(1,0,1)$ → $a=2,\ b=1,\ c=1$.</p><p>$\mathbf X=2e^t(1,1,3)+e^{2t}\big[(-1,1,0)+(1,0,1)\big]=2e^t(1,1,3)+e^{2t}(0,1,1)$. 성분합 $10e^t+2e^{2t}$, $t=\ln5$: $50+50$.</p>`, ans: '$100$' })}
${h.ex({ src: 'HY 2023-26', q: String.raw`$x'=7x-y+6z,\ y'=-10x+4y-12z,\ z'=-2x+y-z$, $(x(0),y(0),z(0))=(-1,4,2)$. $x(1)+y(1)+z(1)=ae^l+be^m+ce^n$ 일 때 $a+b+c+l+m+n$ 을 구하시오.`,
  sol: String.raw`<p>고윳값 $2,3,5$ (대각합 10 확인). 고유벡터: $2\to(-1,1,1)$, $3\to(-1,2,1)$, $5\to(-3,6,2)$.</p><p>$(-1,4,2)=-2(-1,1,1)+6(-1,2,1)-1\cdot(-3,6,2)$ (검산: $2-6+3=-1$ ✓, $-2+12-6=4$ ✓, $-2+6-2=2$ ✓).</p><p>성분합: $-2e^{2t}\cdot1+6e^{3t}\cdot2-e^{5t}\cdot5$. $t=1$: $-2e^2+12e^3-5e^5$. $(-2)+12+(-5)+2+3+5=15$.</p>`, ans: '$15$' })}
${h.ex({ src: 'HY 2025-54', q: String.raw`$x'=x+y,\ y'=-x+y,\ (x(0),y(0))=(2,4)$ 일 때 $x(\pi)$ 는?`, choices: h.c`$2e^\pi$ | $e^\pi$ | $-e^\pi$ | $-2e^\pi$ | $-3e^\pi$`,
  sol: String.raw`<p>$A=\begin{pmatrix}1&1\\-1&1\end{pmatrix}=I+R$, 고윳값 $1\pm i$. 해는 $e^t\times$(회전): $\begin{pmatrix}x\\y\end{pmatrix}=e^t\begin{pmatrix}\cos t&\sin t\\-\sin t&\cos t\end{pmatrix}\begin{pmatrix}2\\4\end{pmatrix}$.</p><p>$t=\pi$: 회전 행렬 $=-I$ → $x=-2e^\pi$.</p>`, ans: '④' })}

<h3><span class="sn">19.4</span>열방정식 — 변수분리 한 판</h3>
${h.box('key', '열방정식 $u_t=ku_{xx}$', String.raw`<p>양 끝 0 ($u(0,t)=u(L,t)=0$): $u=\sum b_ne^{-k(n\pi/L)^2t}\sin\frac{n\pi x}L$. 초기조건이 이미 $\sin$ 몇 개의 합이면 <b>항마다 $e^{-k(n\pi/L)^2t}$ 만 붙인다</b>. 푸리에 계산 필요 없다.</p><p>끝값이 0 이 아니거나 비동차 항이 있으면 먼저 정상상태 $u_s(x)$ ($u_t=0$ 인 해)를 빼서 동차 문제로 만든다. $u_x=0$ (단열) 경계면 $\cos$ 가 고유함수.</p>`)}
${h.ex({ src: 'HY 2023-18', q: String.raw`길이 1 철사, 양 끝 0℃, 열 확산율 $\frac1{\pi^2}$, 초기 온도 $2\sin3\pi x+5\sin8\pi x$. $u\left(\frac12,1\right)$ 은?`, choices: h.c`$-3e^{-9}$ | $-2e^{-9}$ | $-e^{-8}$ | $2e^{-3}$ | $5e^{-3}$`,
  sol: String.raw`<p>$k(n\pi)^2=\frac{1}{\pi^2}(n\pi)^2=n^2$. $u=2e^{-9t}\sin3\pi x+5e^{-64t}\sin8\pi x$.</p><p>$x=\frac12$: $\sin\frac{3\pi}2=-1$, $\sin4\pi=0$. $u=-2e^{-9}$.</p>`, ans: '②' })}
${h.ex({ src: 'HY 2026-21', q: String.raw`$u_t=u_{xx}-\pi^2\cos(\pi x)$, $u_x(0,t)=0,\ u(1,t)=1$, $u(x,0)=\cos\left(\frac\pi2x\right)-\cos(\pi x)$ 의 해에 대해 $u_t(2,0)+u_x(3,0)$ 은?`, choices: h.c`$-\pi^2-\frac\pi2$ | $-\pi^2+\frac\pi2$ | $\frac{\pi^2}4-\pi$ | $\frac{\pi^2}4+\frac\pi2$ | $\frac{\pi^2}4+\pi$`,
  sol: String.raw`<p>정상상태: $u_s''=\pi^2\cos\pi x$ → $u_s=-\cos\pi x+ax+b$, $u_s'(0)=0$ → $a=0$, $u_s(1)=1+b=1$ → $b=0$. $u_s=-\cos\pi x$.</p><p>나머지 $v=u-u_s$: $v_t=v_{xx}$, $v_x(0)=0,\ v(1)=0$, $v(x,0)=\cos\frac{\pi x}2$ → 이게 그대로 고유함수: $v=e^{-\pi^2t/4}\cos\frac{\pi x}2$.</p><p>$u=-\cos\pi x+e^{-\pi^2t/4}\cos\frac{\pi x}2$. $u_t(2,0)=-\frac{\pi^2}4\cos\pi=\frac{\pi^2}4$. $u_x(3,0)=\pi\sin3\pi-\frac\pi2\sin\frac{3\pi}2=\frac\pi2$.</p>`, ans: '④' })}

<div class="probs-h"><h3>연습문제 19</h3><span class="cnt">11문항</span></div>
${h.p({ q: String.raw`$\mathcal L\{t^2e^{3t}\}$`, ans: '$\\dfrac2{(s-3)^3}$', sol: String.raw`<p>$\frac{2}{s^3}$ 에 $s\to s-3$.</p>` })}
${h.p({ q: String.raw`$\mathcal L^{-1}\left\{\dfrac{s+1}{s^2+2s+5}\right\}$`, ans: '$e^{-t}\\cos2t$', sol: String.raw`<p>$(s+1)^2+4$.</p>` })}
${h.p({ q: String.raw`$\mathcal L^{-1}\left\{\dfrac{1}{s(s+1)}\right\}$`, ans: '$1-e^{-t}$', sol: String.raw`<p>$\frac1s-\frac1{s+1}$.</p>` })}
${h.p({ q: String.raw`라플라스로 $y'-2y=0,\ y(0)=3$`, ans: '$3e^{2t}$', sol: String.raw`<p>$sY-3-2Y=0$.</p>` })}
${h.p({ q: String.raw`$y''+4y=0,\ y(0)=1,\ y'(0)=2$ 를 라플라스로`, ans: '$\\cos2t+\\sin2t$', sol: String.raw`<p>$Y=\frac{s+2}{s^2+4}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$f(t)=t+\displaystyle\int_0^tf(\tau)\,d\tau$`, ans: '$e^t-1$', sol: String.raw`<p>$F=\frac1{s^2}+\frac Fs$ → $F=\frac1{s(s-1)}$.</p>` })}
${h.p({ q: String.raw`$\sin t*\sin t$ 의 라플라스 변환`, ans: '$\\dfrac1{(s^2+1)^2}$', sol: String.raw`<p>곱.</p>` })}
${h.p({ src: 'HY 2022-20', q: String.raw`$x'=y,\ y'=-x-2y,\ (x(0),y(0))=(1,2)$ 일 때 $x(2)+y(2)$`, choices: h.c`$-2e^{-2}$ | $-e^{-2}$ | $e^{-2}$ | $2e^{-2}$ | $3e^{-2}$`, ans: '⑤', sol: String.raw`<p>$x''=y'=-x-2x'$ → $x''+2x'+x=0$, 중근 $-1$: $x=(A+Bt)e^{-t}$, $x(0)=1$, $x'(0)=y(0)=2=B-A$ → $B=3$. $x=(1+3t)e^{-t}$, $y=x'=(2-3t)e^{-t}$. 합 $(3)e^{-t}$ → $3e^{-2}$.</p>` })}
${h.p({ q: String.raw`$\mathbf X'=\begin{pmatrix}1&0\\0&2\end{pmatrix}\mathbf X,\ \mathbf X(0)=(3,4)$`, ans: '$(3e^t,\\ 4e^{2t})$', sol: String.raw`<p>대각이라 따로 논다.</p>` })}
${h.p({ lv: 2, q: String.raw`$u_t=u_{xx}\ (0<x<\pi)$, $u(0,t)=u(\pi,t)=0$, $u(x,0)=\sin x+3\sin2x$ 의 해`, ans: '$e^{-t}\\sin x+3e^{-4t}\\sin2x$', sol: String.raw`<p>$\sin nx$ 에 $e^{-n^2t}$.</p>` })}
${h.p({ lv: 2, q: String.raw`$\mathcal L\{u(t-2)(t-2)^2\}$ ($u$ 는 단위계단함수)`, ans: '$\\dfrac{2e^{-2s}}{s^3}$', sol: String.raw`<p>$t$ 이동: $e^{-2s}\cdot\frac2{s^3}$.</p>` })}
`
};
