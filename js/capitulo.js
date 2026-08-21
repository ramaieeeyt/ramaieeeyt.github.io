/* ===========================================================================
   LA MINI-PÁGINA DE UN CAPÍTULO
   ---------------------------------------------------------------------------
   Un solo renderizador para las diez. Lee `data-cap` del <body>, busca esa
   entrada en CAPS (js/capitulos-data.js) y construye la página.

   Cada sección se dibuja SOLO si tiene contenido. Un capítulo sin trayectoria
   no enseña una trayectoria vacía: enseña una página más corta. Es
   deliberado — ver la nota de arriba de capitulos-data.js.
   =========================================================================== */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* La última palabra en Caslon itálica, como en «Qué es la *Rama*» de la
     portada. Con dos palabras o menos no se parte: «IEEE EMBS» e «IEEE SIGHT»
     son siglas y en cursiva quedan raras. */
  function caslon(txt) {
    var w = String(txt).trim().split(/\s+/);
    if (w.length < 3) return esc(txt);
    var ultima = w.pop();
    return esc(w.join(' ')) + ' <span class="caslon">' + esc(ultima) + '</span>';
  }

  /* ¿hay algo que dibujar? un array con elementos, o un texto no vacío */
  function hay(x) {
    return Array.isArray(x) ? x.length > 0 : !!(x && String(x).trim());
  }

  /* Añade una sección solo si `contenido` da algo. Devuelve true si la puso. */
  function seccion(destino, id, kicker, titulo, contenido) {
    if (!hay(contenido)) return false;
    var s = el('section', 'capsec');
    s.id = id;
    s.innerHTML =
      '<div class="shell">' +
        '<header class="capsec__head">' +
          '<span class="capsec__k">' + esc(kicker) + '</span>' +
          '<h2 class="capsec__t">' + caslon(titulo) + '</h2>' +
        '</header>' +
        '<div class="capsec__body"></div>' +
      '</div>';
    destino.appendChild(s);
    return $('.capsec__body', s);
  }

  function boot() {
    var slug = document.body.getAttribute('data-cap');
    var c = (typeof CAPS !== 'undefined') && CAPS[slug];

    if (!c) {
      console.error('No hay datos para el capítulo "' + slug + '" en CAPS.');
      return;
    }

    /* El acento va en el <body>, no en :root. `.cappage` declara `--cap` y
       esa clase vive en el body: si lo escribiéramos más arriba, la del body
       lo taparía y todo saldría azul IEEE. Con estilo en línea, gana este. */
    document.body.style.setProperty('--cap', c.color || 'var(--ieee-blue)');

    document.title = c.t + ' · IEEE Yachay Tech';

    /* ------------------------------------------------------------- PORTADA */
    var hero = $('.caphero');
    if (hero) {
      /* De fondo, la foto de su directiva con el banderín del capítulo,
         recortada de la portada que publicaron. El campo ASCII se queda
         debajo, apagándose bajo la foto. */
      hero.style.setProperty('--foto',
        'url("../assets/img/capitulos/hero/' + slug + '.jpg")');
      if (hay(c.foco)) hero.style.setProperty('--foco', c.foco);
      hero.classList.add('caphero--foto');
      hero.innerHTML =
        '<div class="ascii-field" aria-hidden="true">' +
          '<pre class="ascii" id="ascii-caps"></pre></div>' +
        '<div class="shell caphero__in"><div class="caphero__col">' +
          '<a class="volver" href="../capitulos.html">' +
            '<span aria-hidden="true">←</span> Capítulos y grupos</a>' +
          '<span class="caphero__logo" data-nav-umbral>' +
            '<img src="../assets/img/capitulos/' + esc(c.img) +
            '" alt="Logotipo de ' + esc(c.t) + '"></span>' +
          '<span class="caphero__k">' + esc(c.k) + '</span>' +
          '<h1 class="caphero__t">' + caslon(c.t) + '</h1>' +
          (hay(c.lede) ? '<p class="caphero__lede">' + esc(c.lede) + '</p>' : '') +
          /* El enlace a la sociedad, aquí arriba. Abajo estaba sobre papel
             claro con el estilo fantasma, que es blanco sobre transparente, y
             no se leía. Sobre la foto oscura sí. */
          '<a class="btn btn--ghost caphero__btn" href="' + esc(c.u) + '" ' +
            'target="_blank" rel="noopener noreferrer">La sociedad en IEEE ' +
            '<span class="btn__arrow" aria-hidden="true">↗</span></a>' +
        '</div></div>';
    }

    var main = $('#cap-main');
    if (!main) return;

    /* ----------------------------------------------------------- QUÉ SOMOS */
    var b = seccion(main, 'somos', 'Qué es', c.corto || c.t, c.resumen);
    if (b) {
      c.resumen.forEach(function (p) {
        b.appendChild(el('p', 'capsec__p', esc(p)));
      });
    }

    /* --------------------------------------------------------- QUÉ HACEMOS */
    b = seccion(main, 'hacemos', 'Actividad', 'Qué es lo que hacemos', c.hacemos);
    if (b) {
      var rej = el('div', 'caphace');
      c.hacemos.forEach(function (h) {
        rej.appendChild(el('article', 'caphace__i',
          '<h3>' + esc(h.t) + '</h3><p>' + esc(h.d) + '</p>'));
      });
      b.appendChild(rej);
    }

    /* ----------------------------------------------------------- DIRECTIVA */
    b = seccion(main, 'directiva', 'Quiénes', 'Quiénes la dirigen', c.board);
    if (b) {
      var g = el('div', 'capboard');
      c.board.forEach(function (m) {
        var foto = hay(m.f)
          ? '<img src="../assets/img/capitulos/' + esc(slug) + '/' + esc(m.f) +
            '" alt="' + esc(m.name) + ' — ' + esc(m.role) + '" loading="lazy">'
          : '<span class="capboard__ini" aria-hidden="true">' +
            esc((m.name || '?').trim().charAt(0)) + '</span>';
        var ig = hay(m.ig)
          ? '<a class="capboard__ig" href="https://www.instagram.com/' + esc(m.ig) +
            '/" target="_blank" rel="noopener noreferrer">@' + esc(m.ig) + '</a>'
          : '';
        g.appendChild(el('article', 'capboard__i',
          '<span class="capboard__foto">' + foto + '</span>' +
          '<h3>' + esc(m.name) + '</h3>' +
          '<span class="capboard__rol">' + esc(m.role) + '</span>' +
          (hay(m.curso) ? '<span class="capboard__curso">' + esc(m.curso) +
                          '</span>' : '') + ig));
      });
      b.appendChild(g);
    }

    /* --------------------------------------------------------- TRAYECTORIA */
    b = seccion(main, 'trayectoria', 'Historia', 'Nuestra trayectoria', c.timeline);
    if (b) {
      var ol = el('ol', 'captime');
      c.timeline.forEach(function (h) {
        ol.appendChild(el('li', 'captime__i',
          '<span class="captime__y">' + esc(h.y) + '</span>' +
          '<div class="captime__c">' +
            '<h3>' + esc(h.t) + '</h3>' +
            (hay(h.d) ? '<p>' + esc(h.d) + '</p>' : '') +
            (hay(h.tag) ? '<span class="captime__tag">' + esc(h.tag) + '</span>' : '') +
          '</div>'));
      });
      b.appendChild(ol);
    }

    /* --------------------------------------------------------------- FOTOS */
    b = seccion(main, 'fotos', 'Archivo', 'El archivo del capítulo', c.fotos);
    if (b) {
      var m2 = el('div', 'capfotos');
      c.fotos.forEach(function (f) {
        m2.appendChild(el('figure', 'capfotos__i',
          '<img src="../assets/img/capitulos/' + esc(slug) + '/' + esc(f.f) +
          '" alt="' + esc(f.c || '') + '" loading="lazy">' +
          (hay(f.c) ? '<figcaption>' + esc(f.c) + '</figcaption>' : '')));
      });
      b.appendChild(m2);
    }

    /* ---------------------------------------------------------------- PIE
       Este siempre va: es la salida hacia la sociedad y hacia la Rama. */
    var cierre = el('section', 'capcierre');
    cierre.id = 'unete';
    cierre.innerHTML =
      '<div class="shell">' +
        '<h2 class="capsec__t">¿Te interesa ' + esc(c.corto || c.t) + '?</h2>' +
        '<p class="capsec__p">Escríbenos y te contamos cómo entrar. Para ser ' +
        'parte de un capítulo hace falta ser miembro de IEEE.</p>' +
        '<div class="capcierre__btns">' +
          /* Azul, no blanco: el cierre va sobre papel y un botón blanco ahí
             desaparece. */
          '<a class="btn btn--blue" href="../index.html#unete">Únete a la Rama ' +
            '<span class="btn__arrow" aria-hidden="true">↗</span></a>' +
        '</div>' +
      '</div>';
    main.appendChild(cierre);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
