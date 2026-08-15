/* ============================================================================
   main.js — content model + interactions
   ----------------------------------------------------------------------------
   Everything editable lives in DATA at the top. Change a name, a quote or a
   year there and the page rebuilds itself — no markup surgery needed.
   ========================================================================== */
(function () {
  'use strict';

  /* ======================================================== 1. CONTENT */

  var DATA = {

    /* --- Directiva 2026 — Rama General ------------------------------------
       Source: @ramaieeeyt, "Directiva 2026" carousel.
       Photos live in assets/img/directiva/<slug>.jpg                        */
    board: [
      { n:'I',   slug:'ismael-cifuentes',  name:'Ismael Cifuentes',
        role:'Chair · Presidente',            ig:'cifuentes1721',
        quote:'Por una rama más activa, unida y reconocida.' },
      { n:'II',  slug:'salome-verdugo',    name:'Salomé Verdugo',
        role:'Vice Chair · Vicepresidenta',   ig:'salito_mileto',
        quote:'Estrategia, seguimiento y colaboración.' },
      { n:'III', slug:'adalys-samaniego',  name:'Adalys Samaniego',
        role:'Secretaria',                    ig:'adlssss._',
        quote:'Orden, claridad y accesibilidad.' },
      { n:'IV',  slug:'mateo-acero',       name:'Mateo Acero',
        role:'Tesorero',                      ig:'mateojoeldd',
        quote:'Controles claros: límites de gasto y reportes visibles.' },
      { n:'V',   slug:'andres-aveiga',     name:'Andrés Aveiga',
        role:'Web Master',                    ig:'a.dres_',
        quote:'Contenido técnico de forma visual y accesible.' },
      { n:'VI',  slug:'naomi-macanchi',    name:'Naomi Macanchí',
        role:'Coordinadora de Membresías',    ig:'nao_jmc',
        quote:'Haciendo de nuestra rama, tu mejor red de apoyo.' }
    ],

    /* --- Cifras de IEEE a nivel global ----------------------------------- */
    stats: [
      { n:420000, suf:'+', label:'Miembros en el mundo' },
      { n:160,    suf:'+', label:'Países' },
      { n:38,     suf:'',  label:'Sociedades técnicas' },
      { n:1,      suf:'',  label:'Rama en Urcuquí' }
    ],

    /* --- Oportunidades ------------------------------------------------------
       Lo que un miembro de la rama puede aprovechar. Todos los enlaces se
       comprobaron uno por uno: si añades otro, compruébalo antes.          */
    opps: [
      { k:'Competencia', c:'var(--ieee-blue)',
        img:'ieeextreme.jpg',
        t:'IEEEXtreme',
        d:'Veinticuatro horas seguidas de programación competitiva, en equipos de ' +
          'miembros estudiantes, contra el resto del mundo. La rama ya compitió en ' +
          'la edición 13.0 y quedó primera del país.',
        u:'https://ieeextreme.org/' },
      { k:'Becas', c:'var(--ieee-green)',
        img:'foundation.jpg',
        t:'Becas y subvenciones IEEE Foundation',
        d:'Programas de financiamiento para estudiantes y jóvenes profesionales: ' +
          'becas de investigación, apoyo económico y reconocimientos.',
        u:'https://www.ieeefoundation.org/students-and-young-professionals/' },
      { k:'Travel grant', c:'var(--ieee-purple)',
        img:'wie.jpg',
        t:'Travel Grants de IEEE WIE',
        d:'Ayudas para que miembros de Women in Engineering asistan y presenten en ' +
          'congresos patrocinados por IEEE.',
        u:'https://wie.ieee.org/grants-scholarships/travel-grants/' },
      { k:'Membresía', c:'var(--ieee-teal)',
        img:'membresia.jpg',
        t:'Beneficios de la membresía estudiantil',
        d:'Acceso a IEEE Xplore, cursos de IEEE Learning Network, descuentos en ' +
          'congresos y a las 38 sociedades técnicas — con tarifa de estudiante.',
        u:'https://www.ieee.org/membership/students/index.html' },
      { k:'Concursos', c:'var(--ieee-orange)',
        img:'r9-sac.jpg',
        t:'Concursos del R9 Student Activities Committee',
        d:'Convocatorias anuales de la Región 9 para ramas estudiantiles: sitios web, ' +
          'proyectos, videos y reconocimientos a la labor voluntaria.',
        u:'https://r9.ieee.org/sac/' },
      { k:'Comunidad', c:'var(--ieee-cyan)',
        img:'ieee-day.jpg',
        t:'IEEE Day',
        d:'Cada octubre, ramas de todo el mundo celebran el día en que IEEE se fundó ' +
          'con actividades abiertas. Un buen primer evento para acercarse.',
        u:'https://ieeeday.org/' },
      { k:'Voluntariado', c:'var(--ieee-red)',
        img:'voluntariado.jpg',
        t:'Ser voluntario en la Rama',
        d:'Los capítulos y grupos de afinidad —Computer Society, EMBS y Women in ' +
          'Engineering— abren convocatorias cada semestre. Escríbenos y te contamos ' +
          'cuál encaja contigo.',
        u:'https://www.instagram.com/ramaieeeyt/' },
      { k:'Encuentro', c:'var(--ieee-dark-teal)',
        img:'rnr.jpg',
        t:'Reunión Nacional de Ramas',
        d:'El encuentro anual de las ramas estudiantiles del Ecuador. La rama ' +
          'participa cada año; en 2023 fue campeona de la feria de ramas.',
        u:'https://r9.ieee.org/' }
    ],

    /* --- Capítulos y grupos de afinidad -------------------------------------
       Los DIEZ que aparecen en el manual de marca de la rama (`logos color.png`
       y las hojas SVG de LOGOS/). Ocho capítulos técnicos y dos grupos de
       afinidad. Los logotipos se recortaron de esas hojas: son las versiones
       oficiales del capítulo, con el lockup «Yachay Tech University / IEEE
       Student Branch» incluido.

       CORRECCIÓN: antes aquí había cuatro y se decía que CAS no existía. Sí
       existe. La lista buena es esta.                                        */
    /* Herramientas de IEEE que un estudiante puede abrir hoy mismo. No es lo
       mismo que Oportunidades: allí van cosas a las que se postula —becas,
       concursos, ayudas—; aquí, cosas que ya se usan.

       Cada ficha describe qué es el recurso y adónde lleva. Deliberadamente NO
       se promete qué incluye la membresía: eso depende del tipo de socio y de
       lo que tenga contratado la universidad, y afirmarlo sin comprobarlo es
       justo la clase de dato que luego resulta falso. Para el detalle está el
       enlace de beneficios al final de la sección.

       Todos verificados el 14-08-2026: responden y llevan a donde dicen. */
    recursos: [
      { k:'Biblioteca',
        t:'IEEE Xplore',
        d:'La biblioteca digital de IEEE: artículos de revista, ponencias de ' +
          'congreso, normas y libros. El sitio donde acaba publicada casi toda ' +
          'la ingeniería que se cita en una tesis.',
        u:'https://ieeexplore.ieee.org/' },
      /* Aquí estaba IEEE Learning Network, y lo quitamos: iln.ieee.org devuelve
         200 pero su título es «Login». Es un muro de acceso, así que a quien
         todavía no es miembro —que es medio público de esta sección— le parece
         un enlace roto. Spectrum es público, se lee sin cuenta y es de lo que
         más engancha a un estudiante. */
      { k:'Lectura',
        t:'IEEE Spectrum',
        d:'La revista de IEEE, abierta y sin cuenta: qué se está construyendo ' +
          'ahora mismo en robótica, energía, computación o telecomunicaciones, ' +
          'contado por quien lo construye.',
        u:'https://spectrum.ieee.org/' },
      { k:'Red profesional',
        t:'IEEE Collabratec',
        d:'La red donde los miembros se encuentran por tema: grupos de trabajo, ' +
          'colaboraciones y contactos con gente que hace lo que tú quieres hacer.',
        u:'https://ieee-collabratec.ieee.org/' },
      { k:'Normas',
        t:'IEEE Standards',
        d:'Las normas que rigen medio mundo técnico —del wifi al punto flotante—, ' +
          'con su historia y sus grupos de trabajo abiertos.',
        u:'https://standards.ieee.org/' },
      { k:'Publicar',
        t:'IEEE Access',
        d:'Revista de acceso abierto y revisión por pares, pensada para publicar ' +
          'rápido. Una vía realista para un primer artículo.',
        u:'https://ieeeaccess.ieee.org/' },
      { k:'Congresos',
        t:'Conferencias IEEE',
        d:'El calendario mundial de congresos de IEEE, con sus convocatorias de ' +
          'ponencias. Los miembros pagan menos inscripción.',
        u:'https://conferences.ieee.org/conferences_events/' }
    ],

    caps: [
      { img:'computer-society.png', k:'Capítulo técnico', t:'IEEE Computer Society',
        d:'La sociedad más grande de IEEE. Computación, software, arquitectura de ' +
          'sistemas e inteligencia artificial.',
        u:'https://www.computer.org/' },
      { img:'embs.png', k:'Capítulo técnico', t:'IEEE EMBS',
        d:'Engineering in Medicine and Biology Society. Ingeniería aplicada a la ' +
          'salud: instrumentación biomédica y señales fisiológicas.',
        u:'https://www.embs.org/' },
      { img:'eps.png', k:'Capítulo técnico', t:'IEEE Electronics Packaging Society',
        d:'Empaquetado electrónico: cómo se integra, protege e interconecta el ' +
          'hardware que todo lo demás da por sentado.',
        u:'https://eps.ieee.org/' },
      { img:'cas.png', k:'Capítulo técnico', t:'IEEE Circuits and Systems Society',
        d:'Circuitos y sistemas: del diseño analógico y digital al procesamiento ' +
          'de señales y los sistemas embebidos.',
        u:'https://ieee-cas.org/' },
      { img:'ras.png', k:'Capítulo técnico', t:'IEEE Robotics and Automation Society',
        d:'Robótica y automatización: percepción, control, manipulación y los ' +
          'sistemas autónomos que salen de ahí.',
        u:'https://www.ieee-ras.org/' },
      { img:'grss.png', k:'Capítulo técnico', t:'IEEE Geoscience and Remote Sensing',
        d:'Teledetección y geociencia: observar el planeta desde satélites, ' +
          'radares y sensores, y sacar información de ello.',
        u:'https://www.grss-ieee.org/' },
      { img:'cis.png', k:'Capítulo técnico', t:'IEEE Computational Intelligence Society',
        d:'Redes neuronales, computación evolutiva y sistemas difusos — la ' +
          'inteligencia computacional en su sentido más amplio.',
        u:'https://cis.ieee.org/' },
      { img:'nano.png', k:'Capítulo técnico', t:'IEEE Nanotechnology Council',
        d:'Nanotecnología: materiales, dispositivos y sistemas en la escala donde ' +
          'la física deja de comportarse como esperamos.',
        u:'https://ieeenano.org/' },
      { img:'wie.png', k:'Grupo de afinidad', t:'IEEE Women in Engineering',
        d:'Creado en abril de 2022 para promover a mujeres ingenieras y ' +
          'científicas, e inspirar a jóvenes a seguir una carrera STEM.',
        u:'https://wie.ieee.org/' },
      { img:'sight.png', k:'Grupo de afinidad', t:'IEEE SIGHT',
        d:'Special Interest Group on Humanitarian Technology. Ingeniería puesta ' +
          'al servicio de necesidades concretas de la comunidad.',
        u:'https://sight.ieee.org/' }
    ],

    /* --- Trayectoria -------------------------------------------------------
       k: 'premio' | 'hito' | 'encuentro' — sale como etiqueta en la tarjeta.

       Cada entrada está contrastada con una fuente pública. No añadas nada
       aquí que no puedas enlazar:
         2019 fundación e IEEEXtreme 13.0 .. es.wikipedia.org/wiki/Universidad_Yachay_Tech
         2019 los 51 miembros ............. events.vtools.ieee.org/m/216744
         2021 biodispositivos ............. edu.ieee.org/ec-ytu (acreditado ahí
                                            a Rosemary Davies, vicepresidenta)
         2022 CEJI22 y WIE ................ edu.ieee.org/ec-ytu
         2023 RNR, feria de ramas ......... r9.ieee.org/ecuador/reunion-nacional-
                                            de-ramas-estudiantiles-ieee-2023
         2025 Feria IEEE YT ............... events.vtools.ieee.org/m/470014
         2025 RNR Ibarra .................. events.vtools.ieee.org/m/497568
         2026 Directiva ................... instagram.com/ramaieeeyt              */
    timeline: [
      { y:'2019', k:'hito', t:'Se constituye la Rama Estudiantil IEEE-YT',
        d:'A finales de 2019, con la coordinación del vicerrectorado y un grupo de ' +
          'estudiantes con ánimo investigador, la rama queda oficialmente conformada ' +
          'ante IEEE. Todo lo que viene después arranca aquí.' },
      { y:'2019', k:'hito', t:'51 miembros en la primera inscripción',
        d:'El 19 y 20 de diciembre, en el Bloque B del campus, y con ayuda de ' +
          'financiamiento, se inscriben 51 miembros. Es la base con la que la rama ' +
          'echa a andar.' },
      { y:'2019', k:'premio', t:'IEEEXtreme 13.0 — primer lugar nacional',
        d:'Cuatro equipos de Yachay Tech entraron a las 24 horas de programación. ' +
          'YTCodex terminó primero del país y dentro del top 10 % mundial —puesto 258 ' +
          'global—, seguido por SoftDomitas, YTScript y OverflowYt.' },
      { y:'2021', k:'encuentro', t:'Primer Concurso de Biodispositivos Biomédicos del Ecuador',
        d:'Organizado desde la vicepresidencia de la rama: el primer certamen del país ' +
          'dedicado a dispositivos biomédicos hechos por estudiantes.' },
      { y:'2022', k:'encuentro', t:'CEJI22 — Primer Congreso Ecuatoriano de Jóvenes Investigadores',
        d:'Más de 60 trabajos científicos repartidos en 9 simposios, conferencias ' +
          'magistrales, un taller de investigación y actividades culturales. ' +
          'Un evento de estudiantes para estudiantes.' },
      { y:'2022', k:'hito', t:'Nace IEEE Women in Engineering Yachay Tech',
        d:'En abril se crea el grupo de afinidad WIE. En sus primeros ocho meses: ' +
          'divulgación STEM en dos unidades educativas de Urcuquí, un conversatorio ' +
          'por el día de la mujer en la ingeniería, cuatro formaciones en habilidades ' +
          'blandas y un taller de LaTeX.' },
      { y:'2023', k:'premio', t:'RNR 2023 — campeonas de la feria de ramas',
        d:'En la Reunión Nacional de Ramas, la rama de Yachay se alzó campeona de la ' +
          'feria de ramas junto a la de ESPOCH; y la delegación de Ibarra, que ' +
          'integramos con la UTN, ganó la feria de ciudades. Cuatro becas para el ' +
          'ETCM 2023 salieron de ahí.' },
      { y:'2025', k:'encuentro', t:'Feria IEEE YT 2025 y posesión de directivas',
        d:'El 26 de febrero, en el edificio de la SENESCYT en Urcuquí, la Rama y sus ' +
          'capítulos abrieron sus puertas a toda la comunidad universitaria: qué es ' +
          'IEEE, qué hace cada capítulo y cómo entrar. La jornada incluyó la ' +
          'posesión de las directivas de la Rama y de cada capítulo, y se ' +
          'autofinanció con venta de comida.' },
      { y:'2025', k:'encuentro', t:'RNR Ibarra 2025 — Reunión Nacional de Ramas',
        d:'Del 26 al 28 de septiembre, en el Auditorio de Posgrado de la Universidad ' +
          'Técnica del Norte, las ramas estudiantiles del país se dieron cita para ' +
          'hablar de gestión, buenas prácticas y actividades técnicas. La rama ' +
          'participó, a media hora de casa.' },
      { y:'2026', k:'hito', t:'Directiva 2026 de la Rama General',
        d:'El núcleo que conecta a todos los capítulos y sociedades, impulsando la ' +
          'colaboración, la innovación y el liderazgo estudiantil.' }
    ],

    /* --- HERBIEEE — el archivo de memes de la rama --------------------------
       Deja los archivos en assets/img/herbieee/ y añádelos aquí. Cualquier
       proporción sirve: la rejilla es de mampostería. Si el array queda vacío
       la sección muestra su portada y nada más, sin romperse.               */
    memes: [
      { f:'error-404-herbieee.jpg',
        c:'Error 404 · Seriedad Not Found — la portada de este semestre' },
      { f:'error-404-alerta.jpg',
        c:'Error 404 · Seriedad Not Found — la versión anterior' }
    ],

    /* --- Archivo visual -----------------------------------------------------
       Esta lista es el punto de partida. Si existe
       assets/img/instagram/index.json —lo genera la GitHub Action— el archivo
       se sustituye por lo que haya traído de @ramaieeeyt. Al abrir el sitio con
       doble clic ese fetch falla (file:// bloquea la lectura) y se queda con
       esta lista, que es justo lo que queremos.                              */
    archive: [
      { f:'rama-general',                c:'Rama General · Directiva 2026' },
      { f:'chair-ismael-cifuentes',      c:'Chair · Ismael Cifuentes' },
      { f:'vice-chair-salome-verdugo',   c:'Vice Chair · Salomé Verdugo' },
      { f:'secretaria-adalys-samaniego', c:'Secretaria · Adalys Samaniego' },
      { f:'tesorero-mateo-acero',        c:'Tesorero · Mateo Acero' },
      { f:'webmaster-andres-aveiga',     c:'Web Master · Andrés Aveiga' },
      { f:'membresias-naomi-macanchi',   c:'Membresías · Naomi Macanchí' }
    ]
  };

  /* ========================================================= 2. HELPERS */

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
    });
  }

  /* Las piezas fijas viven en assets/img/archivo/<f>.jpg; las que trae la
     sincronización ya llegan con su nombre de archivo completo. */
  function pathOf(a) {
    return a.ig ? 'assets/img/instagram/' + a.f
                : 'assets/img/archivo/' + a.f + '.jpg';
  }

  /* Si la Action ya dejó su manifiesto, el archivo pasa a ser el de Instagram.
     Si no —o si la página se abrió desde el disco— no pasa nada: se queda con
     la lista de DATA.archive. */
  function loadInstagram() {
    var wrap = $('#mosaic');
    if (!wrap || !window.fetch || location.protocol === 'file:') return;
    fetch('assets/img/instagram/index.json', { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || !data.posts || !data.posts.length) return;
        DATA.archive = data.posts.map(function (p) {
          return { f: p.f, c: p.c, ig: true };
        });
        wrap.innerHTML = '';
        renderArchive();
        $$('#mosaic [data-reveal]').forEach(function (n) { n.classList.add('is-in'); });
      })
      .catch(function () { /* el archivo local ya está pintado */ });
  }

  /* ========================================================= 3. RENDER */

  /* -- Directiva ---------------------------------------------------------- */
  function renderBoard() {
    var wrap = $('#board');
    if (!wrap) return;
    DATA.board.forEach(function (m, i) {
      var a = el('a', 'member');
      a.href = 'https://www.instagram.com/' + m.ig + '/';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('data-reveal', '');
      a.setAttribute('data-delay', String((i % 3) + 1));
      a.innerHTML =
        '<div class="member__frame">' +
          '<span class="member__rank">' + esc(m.n) + '</span>' +
          '<img src="assets/img/directiva/' + m.slug + '.jpg" alt="' + esc(m.name) +
              '" loading="lazy" width="720" height="900">' +
          '<p class="member__quote">“' + esc(m.quote) + '”</p>' +
        '</div>' +
        '<div class="member__body">' +
          '<span class="member__role">' + esc(m.role) + '</span>' +
          '<span class="member__name">' + esc(m.name) + '</span>' +
          '<span class="member__ig">@' + esc(m.ig) + '</span>' +
        '</div>';
      wrap.appendChild(a);
    });
  }

  /* -- Cifras ------------------------------------------------------------- */
  function renderStats() {
    var wrap = $('#stats');
    if (!wrap) return;
    DATA.stats.forEach(function (s, i) {
      var d = el('div', 'stat');
      d.setAttribute('data-reveal', '');
      d.setAttribute('data-delay', String(i + 1));
      d.innerHTML =
        '<div class="stat__n" data-count="' + s.n + '">0' +
          (s.suf ? '<sup>' + s.suf + '</sup>' : '') + '</div>' +
        '<div class="stat__l">' + esc(s.label) + '</div>';
      wrap.appendChild(d);
    });
  }

  /* -- Oportunidades ------------------------------------------------------- */
  function renderOpps() {
    var wrap = $('#opps');
    if (!wrap) return;
    DATA.opps.forEach(function (o, i) {
      var a = el('a', 'opp');
      a.href = o.u; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.style.setProperty('--c', o.c);
      a.setAttribute('data-reveal', '');
      a.setAttribute('data-delay', String((i % 4) + 1));
      a.innerHTML =
        '<span class="opp__cover"><img src="assets/img/oportunidades/' + o.img +
          '" alt="" loading="lazy" width="640" height="360"></span>' +
        '<span class="opp__k">' + esc(o.k) + '</span>' +
        '<h3>' + esc(o.t) + '</h3>' +
        '<p>' + esc(o.d) + '</p>' +
        '<span class="opp__go">Ver más <i aria-hidden="true">↗</i></span>';
      wrap.appendChild(a);
    });
  }

  /* -- Recursos ------------------------------------------------------------
     Sin imágenes: son herramientas, no programas con su propia marca, y una
     rejilla de logotipos ajenos aquí sería justo lo que la guía no quiere. */
  function renderRecursos() {
    var wrap = $('#recursos-lista');
    if (!wrap) return;
    DATA.recursos.forEach(function (r, i) {
      var a = el('a', 'recurso');
      a.href = r.u; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.setAttribute('data-reveal', '');
      a.setAttribute('data-delay', String((i % 3) + 1));
      a.innerHTML =
        '<span class="recurso__k">' + esc(r.k) + '</span>' +
        '<h3>' + esc(r.t) + '</h3>' +
        '<p>' + esc(r.d) + '</p>' +
        '<span class="recurso__go">Abrir <i aria-hidden="true">↗</i></span>';
      wrap.appendChild(a);
    });
  }

  /* -- Capítulos y grupos (capitulos.html) ---------------------------------
     Las tarjetas aparecen desde el centro hacia afuera: el retardo de cada una
     se calcula por su distancia al centro de la rejilla, no por su orden. */
  function renderCaps() {
    var wrap = $('#caps');
    if (!wrap) return;
    DATA.caps.forEach(function (c) {
      var a = el('a', 'cap');
      a.href = c.u; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.innerHTML =
        '<span class="cap__logo"><img src="assets/img/capitulos/' + c.img +
          '" alt="Logotipo de ' + esc(c.t) + '" loading="lazy"></span>' +
        '<span class="cap__k">' + esc(c.k) + '</span>' +
        '<span class="cap__t">' + esc(c.t) + '</span>' +
        '<span class="cap__d">' + esc(c.d) + '</span>';
      wrap.appendChild(a);
    });
    escalonarDesdeElCentro(wrap);
  }

  function escalonarDesdeElCentro(wrap) {
    var caja = wrap.getBoundingClientRect();
    var cx = caja.left + caja.width / 2, cy = caja.top + caja.height / 2;
    var items = $$('.cap', wrap).map(function (n) {
      var r = n.getBoundingClientRect();
      return { n: n, d: Math.hypot(r.left + r.width / 2 - cx, r.top + r.height / 2 - cy) };
    });
    var max = Math.max.apply(null, items.map(function (i) { return i.d; })) || 1;
    items.forEach(function (i) {
      i.n.style.setProperty('--wait', (i.d / max * 0.55).toFixed(3) + 's');
    });
    /* El título aterriza primero; las tarjetas entran después.
       requestAnimationFrame se congela si la pestaña no está visible, así que
       si alguien abre la página en segundo plano las tarjetas no aparecerían
       nunca. El temporizador lo desatasca. */
    var arrancar = function () { wrap.classList.add('is-live'); };
    requestAnimationFrame(arrancar);
    setTimeout(arrancar, 120);
  }

  /* -- Trayectoria -------------------------------------------------------- */
  function renderTimeline() {
    var wrap = $('#timeline');
    if (!wrap) return;
    DATA.timeline.forEach(function (t, i) {
      var d = el('div', 'tl');
      d.setAttribute('data-reveal', '');
      d.setAttribute('data-delay', String((i % 3) + 1));
      if (t.k) d.setAttribute('data-kind', t.k);
      var KIND = { premio:'Premio', hito:'Hito', encuentro:'Encuentro' };
      d.innerHTML =
        '<span class="tl__y">' + esc(t.y) + '</span>' +
        '<div class="tl__t">' +
          (t.k ? '<span class="tl__k">' + esc(KIND[t.k] || t.k) + '</span>' : '') +
          '<h3>' + esc(t.t) + '</h3>' +
        '</div>' +
        '<p>' + esc(t.d) + '</p>';
      wrap.appendChild(d);
    });
  }

  /* -- Archivo ------------------------------------------------------------ */
  function renderArchive() {
    var wrap = $('#mosaic');
    if (!wrap) return;
    DATA.archive.forEach(function (a, i) {
      var f = el('figure', 'tile');
      f.setAttribute('data-i', String(i));
      f.setAttribute('data-reveal', '');
      f.setAttribute('tabindex', '0');
      f.setAttribute('role', 'button');
      f.setAttribute('aria-label', 'Ampliar: ' + a.c);
      f.innerHTML =
        '<img src="' + esc(pathOf(a)) + '" alt="' + esc(a.c) +
            '" loading="lazy" width="864" height="1080">' +
        '<figcaption>' + esc(a.c) + '</figcaption>';
      wrap.appendChild(f);
    });
  }

  /* -- HERBIEEE ----------------------------------------------------------- */
  function renderMemes() {
    var wrap = $('#memes');
    if (!wrap) return;
    var section = wrap.closest('.section');
    if (!DATA.memes.length) {
      if (section) section.classList.add('is-empty');
      return;
    }
    if (section) section.classList.remove('is-empty');
    DATA.memes.forEach(function (m, i) {
      var f = el('figure', 'meme');
      f.setAttribute('data-reveal', '');
      f.setAttribute('data-delay', String((i % 3) + 1));
      f.innerHTML =
        '<img src="assets/img/herbieee/' + m.f + '" alt="' + esc(m.c || '') +
            '" loading="lazy">' +
        (m.c ? '<figcaption>' + esc(m.c) + '</figcaption>' : '');
      wrap.appendChild(f);
    });
  }

  /* ==================================================== 4. INTERACTIONS */

  /* -- reveal on scroll --------------------------------------------------- */
  function initReveal() {
    var items = $$('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (n) { n.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(function (n) { io.observe(n); });
  }

  /* -- animated counters -------------------------------------------------- */
  function initCounters() {
    var nodes = $$('[data-count]');
    if (!nodes.length) return;

    function fmt(v) { return Math.round(v).toLocaleString('es-EC'); }

    function run(node) {
      var target = parseFloat(node.getAttribute('data-count')) || 0;
      var sup    = node.querySelector('sup');
      var supHTML = sup ? sup.outerHTML : '';
      var t0 = null, dur = 1500;
      function step(now) {
        if (t0 === null) t0 = now;
        var p = Math.min(1, (now - t0) / dur);
        var e = 1 - Math.pow(1 - p, 3);                 // easeOutCubic
        node.innerHTML = fmt(target * e) + supHTML;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (window.Ascii && window.Ascii.reduced) {
      nodes.forEach(function (n) {
        var sup = n.querySelector('sup');
        n.innerHTML = fmt(parseFloat(n.getAttribute('data-count'))) +
                      (sup ? sup.outerHTML : '');
      });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        run(e.target); io.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* -- nav ---------------------------------------------------------------- */
  function initNav() {
    var nav = $('#nav'), burger = $('#burger');
    var hero = $('#top');
    /* En las subpáginas no hay hero oscuro debajo, así que la barra va en su
       estado sólido desde el principio y no debe volver a transparente. */
    if (!hero) {
      /* Subpágina clara: la barra va sólida desde el principio, porque debajo
         solo hay papel. */
      if (!document.body.classList.contains('subpage--dark')) {
        nav.classList.add('is-stuck');
        document.body.classList.add('nav-stuck');
        return;
      }
      /* Subpágina oscura: arranca transparente sobre la cabecera, pero en
         cuanto algo empieza a pasar por debajo tiene que ganar cuerpo o el
         contenido se le mezcla. Se pega igual que en la portada, solo que su
         estado sólido es oscuro (lo pinta el CSS bajo `.subpage--dark`). No se
         toca `body.nav-stuck`: esa clase es para el lomo, y aquí no hay. */
      var pegar = function () { nav.classList.toggle('is-stuck', window.scrollY > 28); };
      pegar();
      window.addEventListener('scroll', pegar, { passive: true });
      if (burger) {
        burger.addEventListener('click', function () {
          var abierto = document.body.classList.toggle('menu-open');
          burger.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        });
      }
      $$('.nav__links a').forEach(function (a) {
        a.addEventListener('click', function () {
          document.body.classList.remove('menu-open');
          if (burger) burger.setAttribute('aria-expanded', 'false');
        });
      });
      return;
    }
    /* Un solo umbral para las dos barras —la de arriba y el lomo—, y no es un
       número fijo: se opacan justo cuando el lockup grande del hero llega a
       tocarlas. Antes de eso no hay nada que separar y conviene que el campo
       azul se vea entero; a partir de ahí sí, o las dos marcas se pisan.

       Se mide una vez y al cambiar el tamaño, no en cada scroll: leer la
       posición de un elemento obliga al navegador a recalcular la maquetación,
       y el hero no se mueve. */
    /* Las barras se opacan cuando el lockup del hero llega a tocarlas. Por
       encima de él ya no hay texto —la procedencia bajó y la firma se quedó
       solo en el pie—, así que hasta ese punto lo único que le pasa por debajo
       a la barra es el campo ASCII, y ahí conviene verlo entero.

       Se mide una vez y al cambiar el tamaño, nunca en cada scroll: leer la
       posición de un elemento obliga a recalcular la maquetación. */
    var lockup = $('.hero__lockup');
    var umbral = 24;
    function medirUmbral() {
      if (!lockup) { umbral = 24; return; }
      var r = lockup.getBoundingClientRect();
      umbral = Math.max(24, Math.round(r.top + window.scrollY - nav.offsetHeight));
    }
    function onScroll() {
      var pegada = window.scrollY > umbral;
      nav.classList.toggle('is-stuck', pegada);
      document.body.classList.toggle('nav-stuck', pegada);
    }
    medirUmbral();
    window.addEventListener('resize', function () { medirUmbral(); onScroll(); }, { passive: true });
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (burger) {
      burger.addEventListener('click', function () {
        var open = document.body.classList.toggle('menu-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    $$('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
        if (burger) burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -- El lomo: navegación lateral de secciones ----------------------------
     Se construye a partir de los enlaces internos que ya están en la barra
     superior, así que hay una sola fuente de verdad: en la barra quedan solo
     los que llevan a otra página, y los de esta misma página viven aquí.
     Por debajo de 1100 px el lomo se oculta y el menú hamburguesa recupera la
     lista completa. */
  function initLomo() {
    var nav = $('#nav-links');
    if (!nav) return;
    var internos = $$('a[href^="#"]', nav);
    if (!internos.length) return;

    var lomo = el('nav', 'lomo');
    lomo.setAttribute('aria-label', 'Secciones de esta página');

    /* Cerrado solo se ven las marcas y la palabra en vertical, como el título
       en el lomo de un libro. La pestaña es un botón de verdad para que
       también se abra con el teclado y con el dedo, donde no hay «hover». */
    var pestana = el('button', 'lomo__tab', '<span>Secciones</span>');
    pestana.type = 'button';
    pestana.setAttribute('aria-expanded', 'false');
    pestana.setAttribute('aria-controls', 'lomo-list');

    var dentro = el('div', 'lomo__in');
    var cap = el('span', 'lomo__cap', 'Secciones');
    cap.setAttribute('aria-hidden', 'true');
    dentro.appendChild(cap);

    var lista = el('ul', 'lomo__list');
    lista.id = 'lomo-list';
    internos.forEach(function (a) {
      var li = el('li');
      var b = el('a', a.classList.contains('nav__cta') ? 'lomo__link is-cta' : 'lomo__link');
      b.href = a.getAttribute('href');
      b.innerHTML = '<i aria-hidden="true"></i><span>' + esc(a.textContent.trim()) + '</span>';
      li.appendChild(b);
      lista.appendChild(li);
    });
    dentro.appendChild(lista);
    lomo.appendChild(pestana);
    lomo.appendChild(dentro);
    /* Detrás de la barra, no al final del <body>: va fijo, así que la posición
       en el DOM no cambia nada visual pero sí el orden del tabulador. */
    var barra = $('#nav');
    if (barra && barra.parentNode) barra.parentNode.insertBefore(lomo, barra.nextSibling);
    else document.body.appendChild(lomo);
    document.body.classList.add('has-lomo');

    /* Abrir y cerrar. El «hover» lo lleva el CSS; esto es para el clic, el
       teclado y el dedo. */
    function abrir(si) {
      lomo.classList.toggle('is-open', si);
      pestana.setAttribute('aria-expanded', si ? 'true' : 'false');
    }
    pestana.addEventListener('click', function () {
      abrir(!lomo.classList.contains('is-open'));
    });
    lista.addEventListener('click', function () { abrir(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') abrir(false);
    });
    /* Con el teclado lo abre el CSS (:focus-within); esto solo mantiene el
       aria a la par y lo cierra cuando el foco se va. */
    document.addEventListener('focusin', function (e) {
      abrir(lomo.contains(e.target));
    });

    /* Marcar la sección que se está viendo. Con un IntersectionObserver hay
       tramos —los de las secciones que no están en la lista— donde no se
       marca ninguna y el lomo se queda apagado. Así en cambio siempre hay
       exactamente una: la última cuyo inicio ya pasó la mitad de la pantalla.
       El cálculo va colgado de requestAnimationFrame para no medir de más. */
    var enlaces  = $$('.lomo__link', lomo);
    var destinos = enlaces.map(function (a) { return document.querySelector(a.getAttribute('href')); });
    var pedido = false;

    function marcar() {
      pedido = false;
      /* -1 mientras se está en el hero: allí todavía no hay sección */
      var mitad = window.innerHeight * 0.5, cual = -1;
      destinos.forEach(function (d, i) {
        if (d && d.getBoundingClientRect().top <= mitad) cual = i;
      });
      enlaces.forEach(function (a, i) { a.classList.toggle('is-here', i === cual); });
    }
    function alDesplazar() {
      if (pedido) return;
      pedido = true;
      requestAnimationFrame(marcar);
    }
    marcar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
    window.addEventListener('resize', alDesplazar);
  }

  /* -- Bucles: parar lo que gira eternamente cuando no se ve ---------------
     La cinta y el barrido de HERBIEEE son `animation: ... infinite`. El
     navegador las sigue pintando aunque estén a tres pantallas de distancia:
     la cinta es un `transform` y sale barata, pero el barrido repinta texto
     con `background-clip`, y eso cuesta en cada fotograma para siempre. Se
     paran al salir de pantalla y se reanudan al volver, que a la vista es
     exactamente lo mismo. */
  function initBucles() {
    var giran = $$('[data-loop]');
    if (!giran.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle('is-paused', !e.isIntersecting); });
    }, { rootMargin: '150px' });
    giran.forEach(function (n) {
      n.classList.add('is-paused');       /* de salida, parado */
      io.observe(n);
    });
  }

  /* -- Ornamento de los márgenes -------------------------------------------
     Marginalia del códice: remates ASCII del mismo alfabeto que el enrejado
     del fondo, en el canal que queda entre la columna de texto y el borde.

     Van DENTRO de cada sección, no fijos en la ventana. Fijos tendrían que
     valer para el papel y para el campo oscuro con un solo color, y no hay
     ninguno que se lea bien en los dos: dentro, cada sección les da el suyo.

     Decoración: `aria-hidden`, sin eventos, por debajo del contenido, y el
     CSS los apaga por debajo de 1100 px y con `prefers-reduced-motion`. */
  var REMATES = [
    '   ✦\n ◇ ❖ ◇\n   ✦',
    ' \\ ✦ /\n◇ ❖ ◇\n / ✦ \\',
    '  ❖\n✧ ✦ ✧\n  ❖',
    ' ✦\n◇ ❖\n ✦',
    '  ✧\n◇ ❖ ◇\n  ✧'
  ];

  function initOrnamento() {
    var zonas = $$('.section, .hero');
    if (!zonas.length) return;
    zonas.forEach(function (sec, i) {
      if (sec.hasAttribute('hidden')) return;
      /* dos por sección, una a cada lado, alternando la altura para que no
         formen una fila */
      [['izq', 18 + (i % 3) * 14], ['der', 58 + (i % 4) * 9]].forEach(function (par, k) {
        var m = el('pre', 'ornamento__marca ornamento__marca--' + par[0]);
        m.setAttribute('aria-hidden', 'true');
        m.textContent = REMATES[(i * 2 + k) % REMATES.length];
        m.style.top = par[1] + '%';
        m.style.setProperty('--dur', (19 + ((i * 5 + k * 3) % 11)) + 's');
        m.style.setProperty('--retardo', '-' + ((i * 4 + k * 7) % 17) + 's');
        sec.appendChild(m);
      });
    });
  }

  /* -- mosaic: cursor badge + lightbox ------------------------------------ */
  function initMosaic() {
    var mosaic = $('#mosaic');
    if (!mosaic) return;

    /* cosmos-style cursor badge */
    var peek = el('div', 'peek', 'Ver');
    document.body.appendChild(peek);
    var fine = window.matchMedia('(pointer:fine)').matches;
    if (fine && !(window.Ascii && window.Ascii.reduced)) {
      mosaic.addEventListener('mousemove', function (e) {
        peek.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY +
                               'px) translate(-50%,-50%) scale(1)';
      });
      mosaic.addEventListener('mouseenter', function () { peek.classList.add('is-on'); });
      mosaic.addEventListener('mouseleave', function () {
        peek.classList.remove('is-on');
        peek.style.transform = 'translate(-50%,-50%) scale(0)';
      });
    }

    /* lightbox */
    var lb   = $('#lightbox');
    var lbImg = $('#lightbox-img');
    var lbCap = $('#lightbox-cap');
    var idx = 0;

    function show(i) {
      idx = (i + DATA.archive.length) % DATA.archive.length;
      var a = DATA.archive[idx];
      lbImg.src = pathOf(a);
      lbImg.alt = a.c;
      lbCap.textContent = a.c;
    }
    function open(i) {
      show(i);
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      peek.classList.remove('is-on');
    }
    function close() {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    mosaic.addEventListener('click', function (e) {
      var t = e.target.closest('.tile');
      if (t) open(parseInt(t.getAttribute('data-i'), 10));
    });
    mosaic.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var t = e.target.closest('.tile');
      if (t) { e.preventDefault(); open(parseInt(t.getAttribute('data-i'), 10)); }
    });
    $('#lb-close').addEventListener('click', close);
    $('#lb-prev').addEventListener('click', function (e) { e.stopPropagation(); show(idx - 1); });
    $('#lb-next').addEventListener('click', function (e) { e.stopPropagation(); show(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  /* -- ASCII layers ------------------------------------------------------- */
  function initAscii() {
    var hero = $('#ascii-hero');
    if (hero) window.Ascii.mount(hero, { speed: 1, density: .55, pitch: 24, icon: true });

    /* la subpágina de capítulos lleva el mismo campo que el hero, con el
       icono de Yachay Tech estampado */
    var caps = $('#ascii-caps');
    if (caps) window.Ascii.mount(caps, { speed: 1, density: .55, pitch: 24, icon: true });

    /* la franja de «IEEE en el mundo»: más suelto y sin icono, que ahí es
       ornamento de fondo y no hay altura para dibujar nada */
    var mundo = $('#ascii-mundo');
    if (mundo) window.Ascii.mount(mundo, { speed: .5, density: .34, pitch: 18 });

    var foot = $('#ascii-foot');
    if (foot) window.Ascii.mount(foot, { speed: .6, density: .4, pitch: 20 });
  }

  /* -- misc --------------------------------------------------------------- */
  function initMisc() {
    var y = $('#year');
    if (y) y.textContent = new Date().getFullYear();

    /* graceful fallback if a portrait or archive image is missing.
       Only for images that actually declare a source — the lightbox <img>
       starts empty on purpose and must never be hidden by this. */
    document.addEventListener('error', function (e) {
      var t = e.target;
      if (!t || t.tagName !== 'IMG' || t.id === 'lightbox-img') return;
      if (!t.getAttribute('src')) return;
      t.style.visibility = 'hidden';
      if (t.parentElement) t.parentElement.style.background = 'var(--paper-3)';
    }, true);
  }

  /* -- Modo demo para grabar el video --------------------------------------
     Se activa con ?demo al final de la URL. Recorre la página solo, con las
     pausas cronometradas según CONTEST-VIDEO-SCRIPT.md, para que la captura
     de pantalla salga estable y repetible. Invisible para un visitante
     normal: sin el parámetro no ocurre nada.                              */
  function initDemo() {
    if (!/[?&]demo\b/.test(location.search)) return;

    /* [sección, segundos de pausa antes de seguir] */
    var GUION = [
      ['top',           18],
      ['manifiesto',    20],
      ['oportunidades', 42],
      ['directiva',     25],
      ['archivo',       13],
      ['trayectoria',   12],
      ['unete',         20],
      ['contacto',      10]
    ];
    var VIAJE = 2200;                       /* duración de cada desplazamiento */

    var hud = el('div', 'demo-hud', 'DEMO · 0:00');
    document.body.appendChild(hud);
    var t0 = Date.now();
    setInterval(function () {
      var t = (Date.now() - t0) / 1000;
      hud.textContent = 'DEMO · ' + Math.floor(t / 60) + ':' +
        String(Math.floor(t % 60)).padStart(2, '0');
      hud.classList.toggle('is-over', t > 180);   /* pasado el límite de 3 min */
    }, 250);

    function irA(y, ms, done) {
      var y0 = window.scrollY, dy = y - y0, t = null, listo = false;
      function fin() { if (listo) return; listo = true; window.scrollTo(0, y); done(); }
      /* Si la pestaña deja de estar visible, requestAnimationFrame se congela y
         el recorrido se quedaría a medias. Este seguro lo desatasca. */
      setTimeout(fin, ms + 1200);
      if (ms <= 0) return fin();
      (function paso(now) {
        if (listo) return;
        if (t === null) t = now;
        var p = Math.min(1, (now - t) / ms);
        var e = p < 0.5 ? 4 * p * p * p                       /* easeInOutCubic */
                        : 1 - Math.pow(-2 * p + 2, 3) / 2;
        window.scrollTo(0, y0 + dy * e);
        if (p < 1) requestAnimationFrame(paso); else fin();
      })(performance.now());
    }

    var i = 0;
    (function siguiente() {
      if (i >= GUION.length) { hud.textContent = 'DEMO · fin'; return; }
      var sec = document.getElementById(GUION[i][0]);
      var espera = GUION[i][1] * 1000;
      i++;
      if (!sec) return siguiente();
      var y = sec.getBoundingClientRect().top + window.scrollY -
              (sec.id === 'top' ? 0 : 40);
      irA(y, i === 1 ? 0 : VIAJE, function () {
        setTimeout(siguiente, espera);
      });
    })();
  }

  /* ============================================================ 5. BOOT */
  function boot() {
    renderBoard();
    renderStats();
    renderOpps();
    renderRecursos();
    renderCaps();
    renderTimeline();
    renderArchive();
    renderMemes();
    initAscii();
    initNav();
    initLomo();
    initOrnamento();
    initBucles();
    initMosaic();
    initCounters();
    initReveal();
    initMisc();
    loadInstagram();
    initDemo();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
