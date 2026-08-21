/* ===========================================================================
   TRANSICIÓN A LA PÁGINA DE UN CAPÍTULO
   ---------------------------------------------------------------------------
   Un velo con una matriz de puntos 5×5 que cubre el salto de `capitulos.html`
   a `capitulos/<slug>.html`.

   Dos animaciones, alternadas:

   · NEON DRIFT   — reproducida de dotmatrix.zzzzshawn.cloud, leyendo su CSS.
                    Barrido diagonal: `path = (fila − col + 4) / 8` reparte el
                    retardo a lo largo de la diagonal y `parity = (fila+col) % 2`
                    manda las diagonales alternas medio ciclo por detrás.
   · STROBE STACK — reconstruida. La original va por estado de React y no se
                    pudo muestrear, así que se copian sus tres niveles de
                    opacidad (.08 apagado, .52 medio, 1 pico) y su lectura: un
                    punto encendido que baja por cada columna dejando rastro.

   POR QUÉ NO HAY SORTEO NI MEMORIA: alternan por la posición del capítulo en
   la lista. Guardar cuál tocó exigiría localStorage, y el sitio no usa
   almacenamiento — es una afirmación del artículo del concurso y de la CSP.

   POR QUÉ NO ES UNA ESPERA FALSA: el velo entra, la navegación ocurre debajo y
   la página nueva lo retira al cargar. Añade ~600 ms reales, no simula carga.

   Con `prefers-reduced-motion` no se dibuja nada y el enlace va directo.
   =========================================================================== */
(function () {
  'use strict';

  var QUIETO = window.matchMedia &&
               window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ESPERA = 620;                     /* lo que el velo se sostiene antes de saltar */

  /* -- la rejilla, común a las dos ---------------------------------------- */
  function rejilla(modo) {
    var g = document.createElement('div');
    g.className = 'velo__grid velo__grid--' + modo;
    for (var r = 0; r < 5; r++) {
      for (var c = 0; c < 5; c++) {
        var p = document.createElement('span');
        p.className = 'velo__punto';
        if (modo === 'neon') {
          /* el retardo exacto del original */
          p.style.setProperty('--path',   ((r - c + 4) / 8).toFixed(3));
          p.style.setProperty('--parity', (r + c) % 2);
        } else {
          /* columna a columna, y dentro de cada una de arriba abajo */
          p.style.setProperty('--orden', c * 5 + r);
        }
        g.appendChild(p);
      }
    }
    return g;
  }

  function velo(modo, color) {
    var v = document.createElement('div');
    v.className = 'velo';
    v.setAttribute('role', 'status');
    v.setAttribute('aria-live', 'polite');
    v.setAttribute('aria-label', 'Cargando');
    if (color) v.style.setProperty('--cap', color);
    v.appendChild(rejilla(modo));
    return v;
  }

  /* -- salida: se pulsa una tarjeta de capítulo ---------------------------- */
  function initSalida() {
    var tarjetas = document.querySelectorAll('#caps .cap');
    if (!tarjetas.length || QUIETO) return;

    Array.prototype.forEach.call(tarjetas, function (a, i) {
      a.addEventListener('click', function (e) {
        /* respeta abrir en pestaña nueva, y no secuestra el clic del medio */
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        var destino = a.getAttribute('href');
        var v = velo(i % 2 ? 'strobe' : 'neon',
                     getComputedStyle(a).getPropertyValue('--c').trim());
        document.body.appendChild(v);
        requestAnimationFrame(function () { v.classList.add('is-on'); });
        setTimeout(function () { location.href = destino; }, ESPERA);
      });
    });
  }

  /* -- entrada: la mini-página se retira el velo al estar lista ------------ */
  function initEntrada() {
    if (!document.body.classList.contains('cappage') || QUIETO) return;
    /* Solo si se viene de la lista: entrar directo por la URL no lo enseña. */
    if (!/\/capitulos\.html/.test(document.referrer)) return;

    var v = velo('neon');
    v.classList.add('is-on', 'velo--salida');
    document.body.appendChild(v);
    window.addEventListener('load', function () {
      setTimeout(function () {
        v.classList.remove('is-on');
        setTimeout(function () { v.remove(); }, 420);
      }, 90);
    });
  }

  function boot() { initSalida(); initEntrada(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else { boot(); }
})();
