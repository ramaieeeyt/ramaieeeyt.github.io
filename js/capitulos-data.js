/* ===========================================================================
   CONTENIDO DE LAS MINI-PÁGINAS DE CAPÍTULO
   ---------------------------------------------------------------------------
   Todo lo editable de las diez páginas vive aquí. La estructura la pone
   `capitulo.js`, que es el mismo para todas: aquí solo se cambian colores,
   fotos y texto.

   REGLA IMPORTANTE — las secciones vacías no se dibujan.
   Si un capítulo todavía no tiene directiva, o trayectoria, o fotos, deja el
   array vacío `[]` y esa sección desaparece de la página. Nunca queda un hueco
   ni un «próximamente». Una página corta y verdadera es mejor que una larga a
   medio llenar: en los concursos de R9, el contenido inactivo descuenta.

   EL COLOR sale de la paleta oficial IEEE declarada en style.css. No inventes
   colores: la marca solo permite los suyos, y son los únicos que están medidos
   contra el papel y contra el campo oscuro.

   Para añadir un capítulo: una entrada aquí + copiar cualquier .html de
   `capitulos/` cambiando el <title>, la descripción y `data-cap`.
   =========================================================================== */

var CAPS = {

  'computer-society': {
    t:     'IEEE Computer Society',
    corto: 'Computer Society',
    k:     'Capítulo técnico',
    img:   'computer-society.png',
    u:     'https://www.computer.org/',
    color: 'var(--ieee-cyan)',
    lede:  'Computación, software, inteligencia artificial, ciberseguridad y arquitectura del computador.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],

    /* Las cinco piezas de la directiva 2026 que publicó el capítulo. Sin pie:
       los nombres van impresos en la imagen y transcribirlos sin comprobarlos
       sería inventarlos. */
    fotos: [
      { f:'1.jpg' },
      { f:'2.jpg' },
      { f:'3.jpg' },
      { f:'4.jpg' },
      { f:'5.jpg' }
    ]
  },

  'embs': {
    t:     'IEEE EMBS',
    corto: 'EMBS',
    k:     'Capítulo técnico',
    img:   'embs.png',
    u:     'https://www.embs.org/',
    color: 'var(--ieee-red)',
    lede:  'Bioingeniería: dispositivos médicos, neurociencias y procesamiento de señales fisiológicas.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],

    /* Las cinco piezas de la directiva 2026 que publicó el capítulo. Sin pie:
       los nombres van impresos en la imagen y transcribirlos sin comprobarlos
       sería inventarlos. */
    fotos: [
      { f:'1.jpg' },
      { f:'2.jpg' },
      { f:'3.jpg' },
      { f:'4.jpg' },
      { f:'5.jpg' }
    ]
  },

  'eps': {
    t:     'IEEE Electronics Packaging Society',
    corto: 'Electronics Packaging',
    k:     'Capítulo técnico',
    img:   'eps.png',
    u:     'https://eps.ieee.org/',
    color: 'var(--ieee-orange)',
    lede:  'Microchips, ensamblaje, empaque y manufactura electrónica — el hardware que todo lo demás da por sentado.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],

    /* Las cinco piezas de la directiva 2026 que publicó el capítulo. Sin pie:
       los nombres van impresos en la imagen y transcribirlos sin comprobarlos
       sería inventarlos. */
    fotos: [
      { f:'1.jpg' },
      { f:'2.jpg' },
      { f:'3.jpg' },
      { f:'4.jpg' },
      { f:'5.jpg' }
    ]
  },

  'cas': {
    t:     'IEEE Circuits and Systems Society',
    corto: 'Circuits and Systems',
    k:     'Capítulo técnico',
    img:   'cas.png',
    u:     'https://ieee-cas.org/',
    color: 'var(--ieee-purple)',
    lede:  'Diseño de circuitos, nanoelectrónica y teoría de redes.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],

    /* Las cinco piezas de la directiva 2026 que publicó el capítulo. Sin pie:
       los nombres van impresos en la imagen y transcribirlos sin comprobarlos
       sería inventarlos. */
    fotos: [
      { f:'1.jpg' },
      { f:'2.jpg' },
      { f:'3.jpg' },
      { f:'4.jpg' },
      { f:'5.jpg' }
    ]
  },

  'ras': {
    t:     'IEEE Robotics and Automation Society',
    corto: 'Robotics and Automation',
    k:     'Capítulo técnico',
    img:   'ras.png',
    u:     'https://www.ieee-ras.org/',
    color: 'var(--ieee-teal)',
    lede:  'Robótica, automatización, manufactura avanzada y drones.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],

    /* Las cinco piezas de la directiva 2026 que publicó el capítulo. Sin pie:
       los nombres van impresos en la imagen y transcribirlos sin comprobarlos
       sería inventarlos. */
    fotos: [
      { f:'1.jpg' },
      { f:'2.jpg' },
      { f:'3.jpg' },
      { f:'4.jpg' },
      { f:'5.jpg' }
    ]
  },

  'grss': {
    t:     'IEEE Geoscience and Remote Sensing',
    corto: 'Geoscience and Remote Sensing',
    k:     'Capítulo técnico',
    img:   'grss.png',
    u:     'https://www.grss-ieee.org/',
    color: 'var(--ieee-green)',
    lede:  'Teledetección, SIG, observación de la Tierra y sensores satelitales.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],

    /* Las cinco piezas de la directiva 2026 que publicó el capítulo. Sin pie:
       los nombres van impresos en la imagen y transcribirlos sin comprobarlos
       sería inventarlos. */
    fotos: [
      { f:'1.jpg' },
      { f:'2.jpg' },
      { f:'3.jpg' },
      { f:'4.jpg' },
      { f:'5.jpg' }
    ]
  },

  'cis': {
    t:     'IEEE Computational Intelligence Society',
    corto: 'Computational Intelligence',
    k:     'Capítulo técnico',
    img:   'cis.png',
    u:     'https://cis.ieee.org/',
    color: 'var(--ieee-dark-teal)',
    lede:  'Redes neuronales, lógica difusa y algoritmos evolutivos.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],

    /* Las cinco piezas de la directiva 2026 que publicó el capítulo. Sin pie:
       los nombres van impresos en la imagen y transcribirlos sin comprobarlos
       sería inventarlos. */
    fotos: [
      { f:'1.jpg' },
      { f:'2.jpg' },
      { f:'3.jpg' },
      { f:'4.jpg' },
      { f:'5.jpg' }
    ]
  },

  'nano': {
    t:     'IEEE Nanotechnology Council',
    corto: 'Nanotechnology Council',
    k:     'Capítulo técnico',
    img:   'nano.png',
    u:     'https://ieeenano.org/',
    color: 'var(--ieee-dark-blue)',
    lede:  'Nanotecnología: nanomateriales, nanodispositivos y nanomedicina.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],

    /* Las cinco piezas de la directiva 2026 que publicó el capítulo. Sin pie:
       los nombres van impresos en la imagen y transcribirlos sin comprobarlos
       sería inventarlos. */
    fotos: [
      { f:'1.jpg' },
      { f:'2.jpg' },
      { f:'3.jpg' },
      { f:'4.jpg' },
      { f:'5.jpg' }
    ]
  },

  'wie': {
    t:     'IEEE Women in Engineering',
    corto: 'Women in Engineering',
    k:     'Grupo de afinidad',
    img:   'wie.png',
    u:     'https://wie.ieee.org/',
    color: 'var(--ieee-yellow)',
    lede:  'Comunidad de mujeres en ingeniería: mentoría, divulgación y diversidad. La membresía del grupo es gratuita.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],

    /* Las cinco piezas de la directiva 2026 que publicó el capítulo. Sin pie:
       los nombres van impresos en la imagen y transcribirlos sin comprobarlos
       sería inventarlos. */
    fotos: [
      { f:'1.jpg' },
      { f:'2.jpg' },
      { f:'3.jpg' },
      { f:'4.jpg' },
      { f:'5.jpg' }
    ]
  },

  'sight': {
    t:     'IEEE SIGHT',
    corto: 'SIGHT',
    k:     'Grupo de afinidad',
    img:   'sight.png',
    u:     'https://sight.ieee.org/',
    color: 'var(--ieee-dark-green)',
    lede:  'Tecnología puesta al servicio del desarrollo humanitario y social.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],

    /* Las cinco piezas de la directiva 2026 que publicó el capítulo. Sin pie:
       los nombres van impresos en la imagen y transcribirlos sin comprobarlos
       sería inventarlos. */
    fotos: [
      { f:'1.jpg' },
      { f:'2.jpg' },
      { f:'3.jpg' },
      { f:'4.jpg' },
      { f:'5.jpg' }
    ]
  }

};
