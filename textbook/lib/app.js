(function(){
  // ── 수식은 빌드 때 미리 그려져 있다. 칸보다 넓은 인라인 수식만 가로 스크롤로 ──
  function fitMath(root){
    var wide = [];
    root.querySelectorAll('.katex').forEach(function(el){ if (el.parentElement && !el.parentElement.classList.contains('katex-display')) { var p = el.parentElement; if (el.offsetWidth > p.clientWidth + 1) wide.push(el); } });
    wide.forEach(function(el){ el.classList.add('wide'); });
  }
  var secs = Array.prototype.slice.call(document.querySelectorAll('section.ch'));
  if ('IntersectionObserver' in window) {
    var mio = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { fitMath(e.target); mio.unobserve(e.target); } }); }, { rootMargin: '600px 0px' });
    secs.forEach(function(s){ mio.observe(s); });
  } else secs.forEach(fitMath);

  // ── ○/✕ 표시: 이 브라우저에만 저장 ──
  var KEY = 'tm3-marks-v1', marks = {};
  try { marks = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { marks = {}; }
  function save(){ try { localStorage.setItem(KEY, JSON.stringify(marks)); } catch (e) {} }
  var pbs = document.querySelectorAll('.pb');
  function paint(el){ var m = marks[el.dataset.pid]; el.classList.toggle('ok', m === 'o'); el.classList.toggle('ng', m === 'x'); }
  pbs.forEach(function(el){
    paint(el);
    el.querySelector('.mk-o').addEventListener('click', function(){ marks[el.dataset.pid] = marks[el.dataset.pid] === 'o' ? undefined : 'o'; if (!marks[el.dataset.pid]) delete marks[el.dataset.pid]; save(); paint(el); counts(); });
    el.querySelector('.mk-x').addEventListener('click', function(){ marks[el.dataset.pid] = marks[el.dataset.pid] === 'x' ? undefined : 'x'; if (!marks[el.dataset.pid]) delete marks[el.dataset.pid]; save(); paint(el); counts(); });
  });
  function counts(){
    var per = {}, done = 0, tot = pbs.length, wrong = 0;
    pbs.forEach(function(el){ var ch = el.dataset.pid.split('-p')[0]; per[ch] = per[ch] || {t:0,d:0,x:0}; per[ch].t++; var m = marks[el.dataset.pid]; if (m) { per[ch].d++; done++; } if (m === 'x') { per[ch].x++; wrong++; } });
    document.querySelectorAll('[data-cnt]').forEach(function(s){ var c = per[s.dataset.cnt]; if (!c) { s.textContent = ''; return; } s.textContent = c.d + '/' + c.t + (c.x ? ' ✕' + c.x : ''); s.classList.toggle('x', c.x > 0); });
    var pg = document.getElementById('prog'); if (pg) pg.textContent = done + '/' + tot + ' 풂' + (wrong ? ' · 오답 ' + wrong : '');
  }
  counts();
  // 오답만 보기
  var wbtn = document.getElementById('only-wrong');
  if (wbtn) wbtn.addEventListener('click', function(){
    var on = document.body.classList.toggle('only-wrong');
    wbtn.textContent = on ? '전체 문제 다시 보기' : '오답(✕)만 모아 보기';
    pbs.forEach(function(el){ el.hidden = on && marks[el.dataset.pid] !== 'x'; });
  });
  var rbtn = document.getElementById('reset-marks');
  var rconf = document.getElementById('reset-confirm');
  if (rbtn && rconf) {
    rbtn.addEventListener('click', function(){ rconf.hidden = false; });
    rconf.querySelector('.yes').addEventListener('click', function(){ marks = {}; save(); pbs.forEach(paint); counts(); rconf.hidden = true; });
    rconf.querySelector('.no').addEventListener('click', function(){ rconf.hidden = true; });
  }

  // ── 목차 현재 위치 ──
  var links = {}; document.querySelectorAll('.toc a[data-ch]').forEach(function(a){ links[a.dataset.ch] = a; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { Object.keys(links).forEach(function(k){ links[k].classList.remove('on'); }); var a = links[e.target.id]; if (a) a.classList.add('on'); } }); }, { rootMargin: '-10% 0px -80% 0px' });
    document.querySelectorAll('section.ch').forEach(function(s){ io.observe(s); });
  }
  var tocd = document.getElementById('tocd');
  if (tocd && window.matchMedia('(max-width:1079px)').matches) tocd.open = false;
  document.querySelectorAll('.toc a').forEach(function(a){ a.addEventListener('click', function(){ if (window.matchMedia('(max-width:1079px)').matches) tocd.open = false; }); });

  // ── 위젯 공통 ──
  function col(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim() || '#888'; }
  function setup(cv){
    var r = window.devicePixelRatio || 1, w = cv.clientWidth || 600, hh = Math.round(w * (cv.dataset.ratio ? +cv.dataset.ratio : 0.6));
    cv.width = w * r; cv.height = hh * r; var g = cv.getContext('2d'); g.setTransform(r, 0, 0, r, 0, 0); return { g: g, w: w, h: hh };
  }
  var redraws = [];
  function onTheme(){ redraws.forEach(function(f){ f(); }); }
  if (window.matchMedia) { var mq = window.matchMedia('(prefers-color-scheme: dark)'); if (mq.addEventListener) mq.addEventListener('change', onTheme); }
  new MutationObserver(onTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.addEventListener('resize', function(){ clearTimeout(window.__rz); window.__rz = setTimeout(onTheme, 150); });

  function axes(g, w, h, X, Y, x0, x1, y0, y1){
    g.strokeStyle = col('--grid'); g.lineWidth = 1; g.beginPath();
    for (var x = Math.ceil(x0); x <= x1; x++) { g.moveTo(X(x), 0); g.lineTo(X(x), h); }
    for (var y = Math.ceil(y0); y <= y1; y++) { g.moveTo(0, Y(y)); g.lineTo(w, Y(y)); }
    g.stroke(); g.strokeStyle = col('--ink2'); g.lineWidth = 1.3; g.beginPath(); g.moveTo(0, Y(0)); g.lineTo(w, Y(0)); g.moveTo(X(0), 0); g.lineTo(X(0), h); g.stroke();
  }
  function curve(g, f, X, Y, x0, x1, c, lw, y0, y1){
    g.strokeStyle = c; g.lineWidth = lw || 2.4; g.beginPath(); var pen = false;
    for (var i = 0; i <= 600; i++) { var x = x0 + (x1 - x0) * i / 600, y = f(x); if (!isFinite(y) || y < y0 - 50 || y > y1 + 50) { pen = false; continue; } if (pen) g.lineTo(X(x), Y(y)); else g.moveTo(X(x), Y(y)); pen = true; }
    g.stroke();
  }

  // 테일러 다항식 위젯
  document.querySelectorAll('.wg[data-w="taylor"]').forEach(function(box){
    var cv = box.querySelector('canvas'), sel = box.querySelector('select'), rng = box.querySelector('input[type=range]'), out = box.querySelector('.out');
    var F = {
      sin: { f: Math.sin, c: function(k){ return k % 2 ? (k % 4 === 1 ? 1 : -1) / fact(k) : 0; }, r: [-7, 7, -2.5, 2.5], name: 'sin x' },
      cos: { f: Math.cos, c: function(k){ return k % 2 ? 0 : (k % 4 === 0 ? 1 : -1) / fact(k); }, r: [-7, 7, -2.5, 2.5], name: 'cos x' },
      exp: { f: Math.exp, c: function(k){ return 1 / fact(k); }, r: [-4, 3, -1.5, 8], name: 'eˣ' },
      ln: { f: function(x){ return x > -1 ? Math.log(1 + x) : NaN; }, c: function(k){ return k === 0 ? 0 : (k % 2 ? 1 : -1) / k; }, r: [-1.5, 2.5, -3, 2], name: 'ln(1+x)' },
      geo: { f: function(x){ return 1 / (1 - x); }, c: function(){ return 1; }, r: [-2, 1.5, -2, 6], name: '1/(1−x)' },
      atan: { f: Math.atan, c: function(k){ return k % 2 ? ((k - 1) / 2 % 2 ? -1 : 1) / k : 0; }, r: [-2.5, 2.5, -2, 2], name: 'arctan x' }
    };
    function fact(n){ var r = 1; for (var i = 2; i <= n; i++) r *= i; return r; }
    function draw(){
      var S = setup(cv), g = S.g, w = S.w, h = S.h, o = F[sel.value], n = +rng.value;
      var x0 = o.r[0], x1 = o.r[1], y0 = o.r[2], y1 = o.r[3];
      var X = function(x){ return (x - x0) / (x1 - x0) * w; }, Y = function(y){ return h - (y - y0) / (y1 - y0) * h; };
      g.fillStyle = col('--paper'); g.fillRect(0, 0, w, h); axes(g, w, h, X, Y, x0, x1, y0, y1);
      curve(g, o.f, X, Y, x0, x1, col('--ink3'), 4, y0, y1);
      curve(g, function(x){ var s = 0, p = 1; for (var k = 0; k <= n; k++) { s += o.c(k) * p; p *= x; } return s; }, X, Y, x0, x1, col('--red'), 2.4, y0, y1);
      var terms = []; for (var k = 0; k <= n; k++) { var c = o.c(k); if (c) terms.push((c > 0 && terms.length ? '+' : c < 0 ? '−' : '') + (Math.abs(c) === 1 && k ? '' : fmtc(Math.abs(c))) + (k ? 'x' + (k > 1 ? sup(k) : '') : '')); }
      out.textContent = o.name + ' ≈ ' + (terms.join(' ') || '0') + '   (회색: 진짜 함수, 빨강: ' + n + '차 근사)';
    }
    function fmtc(c){ var inv = 1 / c; if (Math.abs(inv - Math.round(inv)) < 1e-9) return '1/' + Math.round(inv); return (+c.toFixed(4)).toString(); }
    function sup(k){ return String(k).split('').map(function(d){ return '⁰¹²³⁴⁵⁶⁷⁸⁹'[+d]; }).join(''); }
    sel.addEventListener('change', draw); rng.addEventListener('input', draw); redraws.push(draw); draw();
  });

  // 2×2 행렬 변환 위젯
  document.querySelectorAll('.wg[data-w="matrix"]').forEach(function(box){
    var cv = box.querySelector('canvas'), ins = box.querySelectorAll('input[type=number]'), out = box.querySelector('.out'), pre = box.querySelector('select');
    function draw(){
      var S = setup(cv), g = S.g, w = S.w, h = S.h;
      var a = +ins[0].value || 0, b = +ins[1].value || 0, c = +ins[2].value || 0, d = +ins[3].value || 0;
      var R = 4, s = Math.min(w, h) / (2 * R), cx = w / 2, cy = h / 2;
      var X = function(x){ return cx + x * s; }, Y = function(y){ return cy - y * s; };
      g.fillStyle = col('--paper'); g.fillRect(0, 0, w, h);
      g.strokeStyle = col('--grid'); g.lineWidth = 1; g.beginPath();
      for (var k = -10; k <= 10; k++) { g.moveTo(X(k), 0); g.lineTo(X(k), h); g.moveTo(0, Y(k)); g.lineTo(w, Y(k)); } g.stroke();
      g.strokeStyle = col('--pen'); g.globalAlpha = .45; g.beginPath();
      for (k = -8; k <= 8; k++) { g.moveTo(X(a * k - b * 12), Y(c * k - d * 12)); g.lineTo(X(a * k + b * 12), Y(c * k + d * 12)); g.moveTo(X(-a * 12 + b * k), Y(-c * 12 + d * k)); g.lineTo(X(a * 12 + b * k), Y(c * 12 + d * k)); }
      g.stroke(); g.globalAlpha = 1;
      g.fillStyle = col('--fill1'); g.beginPath(); g.moveTo(X(0), Y(0)); g.lineTo(X(a), Y(c)); g.lineTo(X(a + b), Y(c + d)); g.lineTo(X(b), Y(d)); g.closePath(); g.fill();
      var tr = a + d, det = a * d - b * c, disc = tr * tr - 4 * det, txt = 'det = ' + r2(det) + ' (넓이 배율' + (det < 0 ? ', 뒤집힘' : '') + ')   tr = ' + r2(tr);
      if (disc >= -1e-12) {
        var l1 = (tr + Math.sqrt(Math.max(disc, 0))) / 2, l2 = (tr - Math.sqrt(Math.max(disc, 0))) / 2; txt += '   고윳값 ' + r2(l1) + ', ' + r2(l2);
        [l1, l2].forEach(function(l){ var vx, vy; if (Math.abs(b) > 1e-9) { vx = b; vy = l - a; } else if (Math.abs(c) > 1e-9) { vx = l - d; vy = c; } else { if (Math.abs(l - a) < 1e-9) { vx = 1; vy = 0; } else { vx = 0; vy = 1; } }
          var n = Math.hypot(vx, vy) || 1; vx /= n; vy /= n; g.strokeStyle = col('--red'); g.setLineDash([6, 5]); g.lineWidth = 2; g.beginPath(); g.moveTo(X(-vx * 10), Y(-vy * 10)); g.lineTo(X(vx * 10), Y(vy * 10)); g.stroke(); g.setLineDash([]); });
      } else txt += '   고윳값 허수 (회전 성분 있음 → 안 꺾이는 방향 없음)';
      arrow(g, X(0), Y(0), X(a), Y(c), col('--pen')); arrow(g, X(0), Y(0), X(b), Y(d), col('--green'));
      out.textContent = txt;
    }
    function r2(v){ return (Math.round(v * 100) / 100).toString(); }
    function arrow(g, x0, y0, x1, y1, c){ g.strokeStyle = c; g.fillStyle = c; g.lineWidth = 3; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke(); var an = Math.atan2(y1 - y0, x1 - x0); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x1 - 11 * Math.cos(an - .4), y1 - 11 * Math.sin(an - .4)); g.lineTo(x1 - 11 * Math.cos(an + .4), y1 - 11 * Math.sin(an + .4)); g.fill(); }
    ins.forEach(function(i){ i.addEventListener('input', draw); });
    if (pre) pre.addEventListener('change', function(){ var v = pre.value.split(','); for (var i = 0; i < 4; i++) ins[i].value = v[i]; draw(); });
    redraws.push(draw); draw();
  });

  // 리만 합 위젯
  document.querySelectorAll('.wg[data-w="riemann"]').forEach(function(box){
    var cv = box.querySelector('canvas'), rng = box.querySelector('input[type=range]'), out = box.querySelector('.out');
    var f = function(x){ return 1 + Math.sin(x) + x * x / 8; }, A = 0, B = 4, exact = 4 + (1 - Math.cos(4)) + 64 / 24;
    function draw(){
      var S = setup(cv), g = S.g, w = S.w, h = S.h, n = +rng.value, x0 = -0.5, x1 = 4.5, y0 = -0.5, y1 = 4.5;
      var X = function(x){ return (x - x0) / (x1 - x0) * w; }, Y = function(y){ return h - (y - y0) / (y1 - y0) * h; };
      g.fillStyle = col('--paper'); g.fillRect(0, 0, w, h); axes(g, w, h, X, Y, x0, x1, y0, y1);
      var dx = (B - A) / n, s = 0; g.fillStyle = col('--fill1'); g.strokeStyle = col('--pen'); g.lineWidth = 1;
      for (var i = 0; i < n; i++) { var xm = A + (i + .5) * dx, y = f(xm); s += y * dx; g.fillRect(X(A + i * dx), Y(y), X(A + (i + 1) * dx) - X(A + i * dx), Y(0) - Y(y)); g.strokeRect(X(A + i * dx), Y(y), X(A + (i + 1) * dx) - X(A + i * dx), Y(0) - Y(y)); }
      curve(g, f, X, Y, x0, x1, col('--red'), 2.6, y0, y1);
      out.textContent = '직사각형 ' + n + '개 합 = ' + s.toFixed(5) + '   진짜 넓이(적분) = ' + exact.toFixed(5) + '   오차 = ' + Math.abs(s - exact).toExponential(2);
    }
    rng.addEventListener('input', draw); redraws.push(draw); draw();
  });

  // 방향장 위젯: 클릭한 점을 지나는 해곡선
  document.querySelectorAll('.wg[data-w="field"]').forEach(function(box){
    var cv = box.querySelector('canvas'), sel = box.querySelector('select'), clr = box.querySelector('button'), seeds = [];
    var FS = { a: function(x, y){ return y - x; }, b: function(x, y){ return x * y; }, c: function(x, y){ return y * (2 - y); }, d: function(x, y){ return -x / (y || 1e-9); } };
    var x0 = -3, x1 = 3, y0 = -2.5, y1 = 3.5;
    function draw(){
      var S = setup(cv), g = S.g, w = S.w, h = S.h, f = FS[sel.value];
      var X = function(x){ return (x - x0) / (x1 - x0) * w; }, Y = function(y){ return h - (y - y0) / (y1 - y0) * h; };
      g.fillStyle = col('--paper'); g.fillRect(0, 0, w, h); axes(g, w, h, X, Y, x0, x1, y0, y1);
      g.strokeStyle = col('--sfield'); g.lineWidth = 1.2; g.beginPath();
      for (var i = 0; i <= 24; i++) for (var j = 0; j <= 20; j++) { var x = x0 + (x1 - x0) * i / 24, y = y0 + (y1 - y0) * j / 20, m = f(x, y); if (!isFinite(m)) continue; var vx = w / (x1 - x0), vy = m * h / (y1 - y0), L = Math.hypot(vx, vy); g.moveTo(X(x) - vx / L * 6, Y(y) + vy / L * 6); g.lineTo(X(x) + vx / L * 6, Y(y) - vy / L * 6); }
      g.stroke();
      seeds.forEach(function(sd){ g.strokeStyle = col('--red'); g.lineWidth = 2.4; [1, -1].forEach(function(dir){ var x = sd[0], y = sd[1], hh = dir * 0.01; g.beginPath(); g.moveTo(X(x), Y(y)); for (var k = 0; k < 800; k++) { var k1 = f(x, y), k2 = f(x + hh / 2, y + hh * k1 / 2), k3 = f(x + hh / 2, y + hh * k2 / 2), k4 = f(x + hh, y + hh * k3); y += hh * (k1 + 2 * k2 + 2 * k3 + k4) / 6; x += hh; if (!isFinite(y) || y < y0 - 1 || y > y1 + 1 || x < x0 || x > x1) break; g.lineTo(X(x), Y(y)); } g.stroke(); }); g.fillStyle = col('--red'); g.beginPath(); g.arc(X(sd[0]), Y(sd[1]), 4, 0, 7); g.fill(); });
    }
    cv.addEventListener('click', function(e){ var r = cv.getBoundingClientRect(); seeds.push([x0 + (e.clientX - r.left) / r.width * (x1 - x0), y1 - (e.clientY - r.top) / r.height * (y1 - y0)]); draw(); });
    sel.addEventListener('change', function(){ seeds = []; draw(); }); clr.addEventListener('click', function(){ seeds = []; draw(); });
    seeds = [[0, 0.5], [0, -1], [-2, 1.5]]; redraws.push(draw); draw();
  });
})();
