  /* -- Modo demo para grabar el video --------------------------------------
     Se activa con ?demo al final de la URL. Recorre la página solo, con las
     pausas cronometradas según CONTEST-VIDEO-SCRIPT.md, para que la captura
     de pantalla salga estable y repetible. Invisible para un visitante
     normal: sin el parámetro no ocurre nada.                              */
  function initDemo() {
    var q = location.search;
    if (!/[?&]demo\b/.test(q)) return;

    /* El recorrido cruza las dos páginas. Como cambiar de página recarga todo,
       el punto por el que va y el tiempo acumulado viajan en la propia URL:
       `?demo=<paso>&t=<segundos>`. Así el cronómetro no se reinicia y la toma
       sale de una sola pasada, sin costuras que montar después. */
    var paso = +( /[?&]demo=(\d+)/.exec(q) || [] )[1] || 0;
    var yaVan = +( /[?&]t=(\d+)/.exec(q) || [] )[1] || 0;

    /* el cronómetro, igual en las dos páginas */
    var hud = el('div', 'demo-hud');
    document.body.appendChild(hud);
    var t0 = Date.now() - yaVan * 1000;
    function transcurrido() { return (Date.now() - t0) / 1000; }
    setInterval(function () {
      var t = transcurrido();
      hud.textContent = 'DEMO · ' + Math.floor(t / 60) + ':' +
        String(Math.floor(t % 60)).padStart(2, '0');
      hud.classList.toggle('is-over', t > 180);   /* pasado el límite de 3 min */
    }, 250);

    var cine = initCine();

    /* --- la subpágina: se deja ver y vuelve sola ------------------------- */
    if (!$('#top')) {
      if (cine) {
        [['.cap:nth-child(1)', 'Computer Society', 6],
         ['.cap:nth-child(5)', 'RAS', 11],
         ['.cap:nth-child(9)', 'WIE', 15]].forEach(function (p) {
          setTimeout(function () { cine.posar(p[0], p[1]); }, p[2] * 1000);
        });
      }
      setTimeout(function () {
        if (cine) cine.hoja();
        location.href = 'index.html?demo=5&t=' + Math.round(transcurrido()) +
          (cine ? '&cine' : '');
      }, 20000);
      return;
    }

    /* --- la portada ------------------------------------------------------ */
    /* [sección, segundos de pausa antes de seguir]

       Los tiempos son los de CONTEST-VIDEO-SCRIPT.md, para que la narración
       encaje sin tener que cortar. Suma: 136 s de pausas + los viajes + los
       20 s de capítulos ≈ 2:46, por debajo del tope de 3:00. Si añades una
       parada, quítale el tiempo a otra. */
    var GUION = [
      ['top',           16, []],
      ['manifiesto',    18, [['.factlist', 'la ficha de datos', 0, 6]]],
      ['directiva',     16, [['.member:nth-child(1)', 'Chair', 0, 4],
                             ['.member:nth-child(2)', 'Vice Chair', 6, 4]]],
      ['oportunidades', 44, [['.precio', 'el precio', 0, 7],
                             ['.opp:nth-child(1)', 'IEEEXtreme', 9, 6],
                             ['.opp:nth-child(4)', 'membresía', 17, 5],
                             ['.capsdoor', 'puerta a capítulos', 25, 6]]],
      ['recursos',      18, [['.recurso:nth-child(1)', 'IEEE Xplore', 1, 5],
                             ['.recurso:nth-child(2)', 'IEEE Spectrum', 8, 5]]],
      ['trayectoria',   16, [['.tl:nth-child(1)', 'el primer hito', 1, 5]]],
      ['contacto',       8, [['.foot__mail', 'el correo', 1, 4]]]
    ];
    var TRAS_RECURSOS = 4;                  /* después de esta parada, capítulos */
    var VIAJE = 1600;                       /* duración de cada desplazamiento */

    function irA(y, ms, done) {
      var y0 = window.scrollY, dy = y - y0, t = null, listo = false;
      function fin() { if (listo) return; listo = true; window.scrollTo(0, y); done(); }
      /* Si la pestaña deja de estar visible, requestAnimationFrame se congela y
         el recorrido se quedaría a medias. Este seguro lo desatasca. */
      setTimeout(fin, ms + 1200);
      if (ms <= 0) return fin();
      (function avance(now) {
        if (listo) return;
        if (t === null) t = now;
        var p = Math.min(1, (now - t) / ms);
        var e = p < 0.5 ? 4 * p * p * p                       /* easeInOutCubic */
                        : 1 - Math.pow(-2 * p + 2, 3) / 2;
        window.scrollTo(0, y0 + dy * e);
        if (p < 1) requestAnimationFrame(avance); else fin();
      })(performance.now());
    }

    var i = paso;
    (function siguiente() {
      if (i >= GUION.length) { hud.textContent = 'DEMO · fin'; if (cine) cine.hoja(); return; }
      var sec = document.getElementById(GUION[i][0]);
      var espera = GUION[i][1] * 1000;
      /* Al volver de capítulos se arranca en el paso 5, así que por el 4 no
         se vuelve a pasar: no hace falta más guardia que esta. */
      var tocaCapitulos = (i === TRAS_RECURSOS);
      i++;
      if (!sec) return siguiente();
      var y = sec.getBoundingClientRect().top + window.scrollY -
              (sec.id === 'top' ? 0 : 40);
      var posadas = GUION[i - 1][2] || [];
      irA(y, (i - 1) === paso ? 0 : VIAJE, function () {
        /* el puntero se posa donde el guion habla, con su retardo propio */
        if (cine) {
          posadas.forEach(function (p) {
            setTimeout(function () { cine.posar(p[0], p[1], p[1] === 'IEEEXtreme'); }, p[2] * 1000);
            setTimeout(function () { cine.soltar(); }, (p[2] + p[3]) * 1000);
          });
        }
        setTimeout(function () {
          if (tocaCapitulos) {
            if (cine) cine.hoja();
            location.href = 'capitulos.html?demo=cine&t=' + Math.round(transcurrido());
            return;
          }
          siguiente();
        }, espera);
      });
    })();
  }

  /* -- Rodaje: cursor dibujado y paradas ------------------------------------
     `?demo=cine` añade al recorrido un puntero que se mueve solo, se posa en
     los elementos que menciona el guion y hace un clic visible. Sirve para
     grabar sin que salga el ratón real temblando, y deja el material listo
     para meterle voz y efectos encima.

     No se hace zoom aquí a propósito. Escalar la página rompe las cajas de los
     elementos `position:fixed` —la barra y el lomo dejarían de estar fijos— y
     además reflota el texto, que en vídeo se nota como un salto. El zoom se
     hace en el montaje sobre una captura a doble resolución, que además queda
     más nítido. Para eso está la hoja de marcas: `initCine` la imprime en la
     consola con el segundo exacto y el punto de pantalla de cada parada. */
  function initCine() {
    if (!/[?&]demo=cine\b/.test(location.search) &&
        !/[?&]cine\b/.test(location.search)) return null;

    var cur = el('div', 'cursor',
      '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M5 2l14 8.5-6.2 1.3L9.8 19z" fill="#fff" stroke="#0E1113" stroke-width="1.4" stroke-linejoin="round"/>' +
      '</svg><span class="cursor__eco"></span>');
    document.body.appendChild(cur);

    var marcas = [];
    var t0 = Date.now();

    function mover(x, y) {
      cur.style.transform = 'translate3d(' + (x - 4) + 'px,' + (y - 3) + 'px,0)';
    }
    function clic() {
      cur.classList.remove('is-click');
      void cur.offsetWidth;                 /* reinicia la animación */
      cur.classList.add('is-click');
    }

    /* Lleva el puntero al centro de `sel`, lo posa (clase espejo del :hover) y
       apunta la marca para la hoja de zooms. */
    function posar(sel, etiqueta, clicar) {
      var n = typeof sel === 'string' ? $(sel) : sel;
      if (!n) return;
      /* Si el objetivo no está en la franja central de la pantalla, la cámara
         lo acerca antes de posar el puntero: en el vídeo se lee como una
         panorámica, y evita que el cursor se vaya a un punto que no se ve. */
      var caja = n.getBoundingClientRect();
      var centro = caja.top + caja.height / 2;
      if (centro < window.innerHeight * 0.18 || centro > window.innerHeight * 0.82) {
        window.scrollTo({
          top: caja.top + window.scrollY - window.innerHeight / 2 + caja.height / 2,
          behavior: 'smooth'
        });
      }
      var r = n.getBoundingClientRect();
      var x = Math.round(r.left + r.width / 2);
      var y = Math.round(Math.min(Math.max(r.top + r.height / 2, 60), window.innerHeight - 60));
      mover(x, y);
      setTimeout(function () {
        $$('.is-cursor').forEach(function (o) { o.classList.remove('is-cursor'); });
        n.classList.add('is-cursor');
        if (clicar) clic();
      }, 1050);
      marcas.push({
        t: Math.round((Date.now() - t0) / 100) / 10,
        x: x, y: y,
        w: Math.round(r.width), h: Math.round(r.height),
        que: etiqueta || (typeof sel === 'string' ? sel : n.className)
      });
    }
    function soltar() {
      $$('.is-cursor').forEach(function (o) { o.classList.remove('is-cursor'); });
    }
    function hoja() {
      if (!marcas.length) return;
      var txt = marcas.map(function (m) {
        var mm = Math.floor(m.t / 60), ss = (m.t % 60).toFixed(1).padStart(4, '0');
        return mm + ':' + ss + '  centro ' + m.x + ',' + m.y +
               '  caja ' + m.w + '×' + m.h + '  · ' + m.que;
      }).join('\n');
      console.log('%c HOJA DE MARCAS PARA EL ZOOM ', 'background:#00629B;color:#fff',
                  '\n\n' + txt + '\n\nZoom sugerido: 1,35× centrado en cada punto, ' +
                  'entrando 0,6 s antes de la marca y saliendo 1,2 s después.');
    }
    return { posar: posar, soltar: soltar, mover: mover, clic: clic, hoja: hoja };
  }

