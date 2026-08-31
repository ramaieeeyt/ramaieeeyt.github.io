/* ===========================================================================
   EL VELO, YA EN EL PRIMER FOTOGRAMA
   ---------------------------------------------------------------------------
   Este fichero existe por un fallo que se vio grabando el vídeo de redes: entre
   que el navegador pintaba la página del capítulo y `transicion.js` le ponía el
   velo encima pasaban una o dos décimas, y en ese hueco se veía la página por
   debajo —el pie, si venías con la lista desplazada— antes de que la tapara.

   La causa era el orden. `transicion.js` es el último de los cinco scripts del
   final del <body> y monta el velo en DOMContentLoaded, o sea DESPUÉS del
   primer pintado. Nada de lo que se haga ahí llega a tiempo.

   Así que la tapadera se decide aquí, en el <head>, antes de que se pinte nada.
   No dibuja los puntos —de eso sigue encargándose transicion.js— solo pone el
   color del capítulo por encima de todo para que no se vea nada por debajo. El
   velo de verdad aterriza luego, un punto por encima, y la tapadera se queda
   detrás hasta que los dos se van juntos.

   POR QUÉ ES UN FICHERO Y NO UN <script> SUELTO EN LA PÁGINA: la
   Content-Security-Policy de estas páginas dice `script-src 'self'`, sin
   'unsafe-inline'. Un script escrito dentro del HTML no se ejecutaría. Y
   relajar la CSP para ahorrarse un fichero de treinta líneas no compensa.

   NECESITA `capitulos-data.js` CARGADO ANTES, también en el <head>: de ahí
   salen los dos colores. Se podrían haber copiado aquí y ahorrarse la carga,
   pero entonces los colores vivirían en dos sitios y algún día dejarían de
   coincidir.
   =========================================================================== */
(function () {
  'use strict';

  /* Las dos mismas condiciones que transicion.js, y por las mismas razones: el
     velo solo cubre el salto desde la lista, y quien pide menos movimiento no
     lo ve. Si aquí y allí no coincidieran, quedaría una tapadera de color sin
     ningún velo que la relevara. */
  try {
    if (!/\/capitulos\.html/.test(document.referrer)) return;
    if (window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  } catch (e) { return; }

  /* El <body> todavía no existe —estamos en el <head>—, así que el capítulo no
     se puede leer de `data-cap`. Sale de la URL, que ya está. */
  var slug = (location.pathname.match(/([a-z-]+)\.html$/) || [])[1];
  var cap  = (typeof CAPS !== 'undefined' && slug) ? CAPS[slug] : null;
  var raiz = document.documentElement;

  /* Sin datos del capítulo la tapadera cae al campo oscuro del sitio, igual que
     hace el velo. Se ve algo sobrio en vez de nada. */
  if (cap && cap.grad) {
    raiz.style.setProperty('--velo-a', cap.grad[0]);
    raiz.style.setProperty('--velo-b', cap.grad[1]);
  }
  raiz.className += ' velo-cubriendo';

  /* Cinturón propio, independiente del de transicion.js: si aquel no llegara a
     cargarse, la tapadera se quita sola. Nunca debe quedarse una pantalla de
     color tapando una página que ya está lista. */
  setTimeout(function () {
    raiz.classList.remove('velo-cubriendo');
  }, 4000);
})();
