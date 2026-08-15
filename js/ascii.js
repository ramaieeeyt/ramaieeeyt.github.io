/* ============================================================================
   ascii.js — medieval ASCII field
   ----------------------------------------------------------------------------
   Renders a breathing "heraldic diaper" lattice (the diagonal diamond grid that
   fills the background of medieval coats of arms) into a <pre> element. On the
   hero the lattice is stamped with the Yachay Tech icon: the plate burns at
   full strength and the monogram stays empty, so the mark reads as a device
   held on a diapered field — which is exactly how a coat of arms works.

   One textContent write per frame — no per-glyph DOM, no canvas.
   Pauses when off-screen, when the tab is hidden, and under reduced-motion.
   ========================================================================== */
(function (global) {
  'use strict';

  var RAMP    = ' ·:+';          // sparse filler, used very rarely
  var LATT_A  = '\\';                 // heraldic diaper, first diagonal
  var LATT_B  = '/';                  // second diagonal
  var NODE    = '◇';             // where the diagonals cross
  var MOTIF_A = '✦';             // the motif inside each lozenge —
  var MOTIF_B = '❖';             // alternating, as in a real diaper
  var ICON    = '·:+*◇✦❖/\\';  // the icon shimmers through these

  /* The Yachay Tech icon, sampled square from the official mark: 1 is the
     solid plate, 0 the knocked-out monogram and everything outside it.
     The renderer stretches x by the measured character aspect, so the
     icon stays square whatever the monospace font turns out to be.
     Regenerate from logo YT AZUL.png if the mark ever changes. */
  var YT_N = 52;
  var YT =
    '0011111111111111111111111111111111100001111111111110' +
    '0111111111111111111111111111111111100001111111111111' +
    '1111111111111111111111111111111111100001111111111111' +
    '1111111111111111111111111111111111100001111111111111' +
    '1111111111111111111111111111111111100001111111111111' +
    '1111111111111100011111111111111111100001111111111111' +
    '1111111111111000001111111111111111100001111111111111' +
    '1111111111111000001111111111111111100001111111111111' +
    '1111111111111000001111111111111111100001111111111111' +
    '1111111111111000011111111111111111100001111111111111' +
    '1111111111111000011111111111111111100001111111111111' +
    '1111111111111000000111111111111111100001111111111111' +
    '1111111111111000000001111111111111100001111111111111' +
    '1111111111111000000000011111111111000001111111111111' +
    '1111111111111100000000000111111110000001111111111111' +
    '1111111111111111000000000011111000000001111111111111' +
    '1111111111111111110000000000000000000011111111111111' +
    '1111111111111111111100000000000000001111111111111111' +
    '1111111111111111111111000000000000111111111111111111' +
    '1111111111111111111111000000000011111111111111111111' +
    '1111111111111111111100000000001111111111111111111111' +
    '1111111111111111110000000000111111111111111111111111' +
    '1111111111111111000000000011111111100001111111111111' +
    '1111111111111100000000001111111111100001111111111111' +
    '1111111111111000000000011111111111000001111111111111' +
    '1111111111111000000001111111111100000001111111111111' +
    '1111111111111000000111111111110000000001111111111111' +
    '1111111111111000011111111111000000000011111111111111' +
    '1111111111111100011111111100000000001111111111111111' +
    '1111111111111111111111110000000000111111111111111111' +
    '1111111111111111111111000000000011111111111111111111' +
    '1111111111111111111100000000001111111111111111111111' +
    '1111111111111111110000000000001111111111111111111111' +
    '1111111111111111000000000000000011111111111111111111' +
    '1111111111111100000000000000000000111111111111111111' +
    '1111111111111000000000111000000000001111111111111111' +
    '1111111111111000000011111110000000000011111111111111' +
    '1111111111111000001111111111100000000001111111111111' +
    '1111111111111000011111111111111000000001111111111111' +
    '1111111111111000011111111111111110000001111111111111' +
    '1111111111111000011111111111111111100001111111111111' +
    '1111111111111000011111111111111111100001111111111111' +
    '1111111111111000011111111111111111000001111111111111' +
    '1111111111111000011111111111111111000001111111111111' +
    '1111111111111000011111111111111111000001111111111111' +
    '1111111111111000011111111111111111100011111111111111' +
    '1111111111111000011111111111111111111111111111111111' +
    '1111111111111000011111111111111111111111111111111111' +
    '1111111111111000011111111111111111111111111111111111' +
    '1111111111111000011111111111111111111111111111111111' +
    '0111111111111000011111111111111111111111111111111110' +
    '0000000000000000000000000000000000000000000000000000';

  var reduced = global.matchMedia &&
                global.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* measure one monospace cell inside `el` so cols/rows match the real font */
  function cell(el) {
    var probe = document.createElement('span');
    probe.textContent = 'M'.repeat(50);
    probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre';
    el.appendChild(probe);
    var r = probe.getBoundingClientRect();
    el.removeChild(probe);
    var w = r.width / 50 || 7.2;
    var h = r.height || 12;
    return { w: w, h: h };
  }

  function Field(el, opt) {
    opt = opt || {};
    this.el      = el;
    this.speed   = opt.speed   != null ? opt.speed   : 1;
    this.density = opt.density != null ? opt.density : 0.5;  // 0..1
    this.pitch   = opt.pitch   != null ? opt.pitch   : 16;   // lattice spacing
    this.icon    = !!opt.icon;
    this.cols = 0; this.rows = 0; this.t = 0;
    this.visible = true; this.raf = null; this.last = 0;

    this.resize();
    this.frame(0);

    var self = this;
    this._onResize = function () { self.resize(); self.frame(self.t); };
    global.addEventListener('resize', this._onResize, { passive: true });

    if ('IntersectionObserver' in global) {
      this.io = new IntersectionObserver(function (es) {
        self.visible = es[0].isIntersecting;
        self.visible ? self.start() : self.stop();
      }, { rootMargin: '120px' });
      this.io.observe(el);
    }
    document.addEventListener('visibilitychange', function () {
      document.hidden ? self.stop() : (self.visible && self.start());
    });

    if (!reduced) this.start();
  }

  Field.prototype.resize = function () {
    /* the <pre> is absolutely positioned, so measure the wrapper it fills */
    var host = this.el.parentElement || this.el;
    var box  = host.getBoundingClientRect();
    var c    = cell(this.el);
    this.cols = Math.max(8, Math.min(220, Math.ceil(box.width  / c.w) + 1));
    this.rows = Math.max(6, Math.min(120, Math.ceil(box.height / c.h) + 1));

    /* A character cell is taller than it is wide, so the icon needs more
       columns than rows to come out square. Use the measured ratio rather
       than assuming one. */
    var aspect = c.h / c.w;

    /* Cuánto del campo ocupa el icono. Con pocas columnas el dibujo pierde
       resolución y se emborrona; con demasiadas se come la pantalla. En
       vertical se le da algo más de ancho que en apaisado, pero no todo. */
    var vertical = box.width / Math.max(1, box.height) < 0.9;
    var fx = vertical ? 0.62 : 0.40;
    var sy = Math.max(0.25, Math.min((this.rows * 0.46) / YT_N,
                                     (this.cols * fx) / (YT_N * aspect)));
    this.isy = sy;
    this.isx = sy * aspect;

    /* La máscara mide 52×52 y el icono se dibuja en las celdas que quepan. En
       un teléfono salen unas veinte filas: cada celda cubre dos filas y media
       del original, se pierden los trazos finos del monograma y lo que queda
       no parece el logotipo sino un borrón. En vez de dibujarlo mal, no se
       dibuja: por debajo de 27 filas el campo se queda con su enrejado, que a
       ese tamaño es lo que se lee bien.

       El número que manda es la ALTURA del campo, no el ancho: una tableta en
       horizontal es ancha pero baja, y sale con tan pocas filas como un
       teléfono. Medido: 29 filas en un escritorio de 1440×900 —donde el icono
       se ve bien—, 23 en una tableta apaisada de 1600×755 y 21 en un teléfono.
       El umbral queda en medio a propósito. */
    this.pinta = this.icon && (YT_N * sy) >= 27;
    this.ix0 = (this.cols - YT_N * this.isx) / 2;

    /* Centrado da igual en apaisado, pero en un teléfono el centro del campo es
       justo donde va el lockup y el titular: el icono quedaba escondido detrás
       del contenido y no se veía nada. En vertical sube al tercio superior, que
       es la zona que queda despejada. */
    /* En apaisado va al medio. En vertical sube, porque el medio de la
       pantalla de un teléfono es donde están el lockup y el titular y el icono
       quedaría detrás. Y para que no se vea torcido, la máscara del campo
       sube con él: es un degradado radial, y si el icono se sale de su centro
       se desvanece por un lado y no por el otro. El CSS mueve ese centro al
       26 % en pantallas estrechas — los dos números van juntos. */
    this.iy0 = (this.rows - YT_N * this.isy) * (vertical ? 0.17 : 0.5);
  };

  /* one frame of the field, as a single string */
  Field.prototype.build = function (t) {
    var cols = this.cols, rows = this.rows, pitch = this.pitch;
    var cx = cols / 2, cy = rows / 2;
    var out = new Array(rows);
    var dens = this.density;

    for (var y = 0; y < rows; y++) {
      var line = new Array(cols);

      for (var x = 0; x < cols; x++) {
        /* slow interference field — decides where the ornament is "lit" */
        var v =
          Math.sin(x * 0.055 + t * 0.5) * Math.sin(y * 0.10 - t * 0.36) +
          Math.sin((x * 0.5 + y) * 0.05 + t * 0.28);
        v = (v + 2) / 4;                                    // → 0..1

        /* heraldic diaper: two diagonal families of lozenges. y is doubled
           because a character cell is roughly twice as tall as it is wide,
           so the lozenges come out square on screen. */
        var u = (((x + 2 * y) % pitch) + pitch) % pitch;
        var w = (((x - 2 * y) % pitch) + pitch) % pitch;
        var onA = u < 1, onB = w < 1;
        var half = pitch >> 1;
        /* the middle of a lozenge, where a diaper carries its motif */
        var atMotif = Math.abs(u - half) < 1 && Math.abs(w - half) < 1;

        var ch = ' ';
        if (onA && onB)       ch = NODE;                    // lattice crossing
        else if (atMotif)     ch = (((x + y) >> 2) & 1) ? MOTIF_A : MOTIF_B;
        else if (onA)         ch = LATT_A;
        else if (onB)         ch = LATT_B;

        /* the field gilds and un-gilds the ornament rather than adding noise */
        if (ch !== ' ' && v < 0.30) ch = ' ';
        else if (ch === ' ' && v > 0.90 && ((x * 7 + y * 13) % 11 === 0)) {
          ch = RAMP[1 + (((x + y) >> 1) % (RAMP.length - 1))];
        }

        /* the Yachay Tech icon, stamped out of the diaper: inside the plate
           the ornament burns at full strength, the monogram stays empty */
        if (this.pinta) {
          var ix = (x - this.ix0) / this.isx;
          var iy = (y - this.iy0) / this.isy;
          if (ix >= 0 && ix < YT_N && iy >= 0 && iy < YT_N) {
            if (YT.charCodeAt((iy | 0) * YT_N + (ix | 0)) === 49) {
              /* the plate never dims — it just keeps changing glyph */
              var k = (v * 6 + t * 1.6 + x * 0.13 + y * 0.21) | 0;
              ch = ICON.charAt(((k % ICON.length) + ICON.length) % ICON.length);
            } else {
              ch = ' ';
            }
          }
        }

        line[x] = ch;
      }
      out[y] = line.join('');
    }
    return out.join('\n');
  };

  Field.prototype.frame = function (t) {
    this.el.textContent = this.build(t);
  };

  Field.prototype.start = function () {
    if (this.raf || reduced) return;
    var self = this;
    var step = function (now) {
      self.raf = requestAnimationFrame(step);
      if (now - self.last < 90) return;            // ~11fps is plenty for texture
      self.last = now;
      self.t += 0.038 * self.speed;
      self.frame(self.t);
    };
    this.raf = requestAnimationFrame(step);
  };

  Field.prototype.stop = function () {
    if (this.raf) { cancelAnimationFrame(this.raf); this.raf = null; }
  };

  /* ----------------------------------------------------- static ornaments */
  global.Ascii = {
    mount: function (el, opt) { return new Field(el, opt); },
    reduced: reduced
  };
})(window);
