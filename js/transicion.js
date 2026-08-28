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

  function velo(modo, cap) {
    var v = document.createElement('div');
    v.className = 'velo';
    v.setAttribute('role', 'status');
    v.setAttribute('aria-live', 'polite');
    v.setAttribute('aria-label', 'Cargando');
    /* El fondo es el degradado de las propias piezas del capítulo, muestreado
       de su portada; los puntos van encima en la tinta que mejor lee sobre él.
       Sin datos, el velo cae al campo oscuro del sitio. */
    if (cap && cap.grad) {
      v.style.setProperty('--velo-a', cap.grad[0]);
      v.style.setProperty('--velo-b', cap.grad[1]);
      v.classList.add('velo--punto-' + (cap.punto || 'papel'));
    }
    v.appendChild(rejilla(modo));
    return v;
  }

  /* -- quitar un velo: se apaga y luego se borra --------------------------- */
  function retirar(v, espera) {
    if (!v || v.dataset.yendose) return;
    v.dataset.yendose = '1';
    setTimeout(function () {
      v.classList.remove('is-on');
      setTimeout(function () { if (v.parentNode) v.remove(); }, 460);
    }, espera || 0);
  }

  function retirarTodos(espera) {
    Array.prototype.forEach.call(document.querySelectorAll('.velo'),
      function (v) { retirar(v, espera); });
  }

  /* -- volver atrás -------------------------------------------------------
     El navegador guarda la página en la bfcache tal como la dejaste: si te
     fuiste con el velo puesto, al volver reaparece con el velo puesto y
     animando, y ni `DOMContentLoaded` ni `load` se disparan otra vez. Ese era
     el atasco. `pageshow` con `persisted` sí avisa de esa vuelta.

     Y ya que el velo está ahí, se aprovecha: se deja ver un instante y se
     retira. Volver atrás también enseña la pantalla, que es lo que pidió
     Andrés. */
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) retirarTodos(260);
  });

  /* -- salida: se pulsa una tarjeta de capítulo ---------------------------- */
  function initSalida() {
    var tarjetas = document.querySelectorAll('#caps .cap');
    if (!tarjetas.length || QUIETO) return;

    Array.prototype.forEach.call(tarjetas, function (a, i) {
      a.addEventListener('click', function (e) {
        /* respeta abrir en pestaña nueva, y no secuestra el clic del medio */
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        /* Si la tarjeta lleva fuera del sitio no hay nada que cubrir: el velo
           es para la transición entre nuestras páginas. */
        if (a.hasAttribute('data-externo')) return;
        e.preventDefault();
        var destino = a.getAttribute('href');
        var slug = (destino.match(/([a-z-]+)\.html$/) || [])[1];
        var cap = (typeof CAPS !== 'undefined') ? CAPS[slug] : null;
        var v = velo(i % 2 ? 'strobe' : 'neon', cap);
        document.body.appendChild(v);
        requestAnimationFrame(function () { v.classList.add('is-on'); });
        setTimeout(function () { location.href = destino; }, ESPERA);
        /* Cinturón: si por lo que sea seguimos aquí, el velo se va solo. Nunca
           debe quedar una pantalla de carga tapando una página que ya está. */
        setTimeout(function () { retirar(v); }, ESPERA + 4000);
      });
    });
  }

  /* -- entrada: la mini-página se retira el velo al estar lista ------------ */
  function initEntrada() {
    if (!document.body.classList.contains('cappage') || QUIETO) return;
    /* Solo si se viene de la lista: entrar directo por la URL no lo enseña. */
    if (!/\/capitulos\.html/.test(document.referrer)) return;

    var slug = document.body.getAttribute('data-cap');
    var v = velo('neon', (typeof CAPS !== 'undefined') ? CAPS[slug] : null);
    v.classList.add('is-on', 'velo--salida');
    document.body.appendChild(v);

    /* Si la página ya terminó de cargar, `load` no se dispara otra vez y el
       velo se quedaría puesto. Se comprueba el estado en lugar de confiar en
       el evento. */
    if (document.readyState === 'complete') { retirar(v, 90); }
    else { window.addEventListener('load', function () { retirar(v, 90); }); }

    /* El mismo cinturón que en la salida. */
    setTimeout(function () { retirar(v); }, 4000);
  }

  function boot() { initSalida(); initEntrada(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else { boot(); }
})();
