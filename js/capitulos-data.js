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

  /* --------------------------------------------------------- COMPUTER SOCIETY
     Esta entrada está completa a propósito: sirve de modelo. Lo que lleva
     [POR CONFIRMAR] es texto de relleno que hay que sustituir — no lo publiques
     tal cual. */
  'computer-society': {

    /* --- identidad: esto ya existe y está verificado --- */
    t:      'IEEE Computer Society',
    corto:  'Computer Society',
    k:      'Capítulo técnico',
    img:    'computer-society.png',
    u:      'https://www.computer.org/',
    color:  'var(--ieee-cyan)',

    /* --- una frase, la que va bajo el nombre en la portada --- */
    lede:   'Computación, software, inteligencia artificial, ciberseguridad y ' +
            'arquitectura del computador.',

    /* --- qué somos: uno o dos párrafos --- */
    resumen: [
      '[POR CONFIRMAR] Qué es el capítulo dentro de la Rama, desde cuándo ' +
      'funciona y a quién se dirige. Dos o tres frases bastan.',
      '[POR CONFIRMAR] Qué lo diferencia: en qué trabaja la gente que está ' +
      'aquí y qué se lleva alguien que entre.'
    ],

    /* --- qué hacemos: tarjetas cortas. Tres o cuatro, no más --- */
    hacemos: [
      { t:'[POR CONFIRMAR]', d:'Una línea explicando la actividad.' },
      { t:'[POR CONFIRMAR]', d:'Una línea explicando la actividad.' },
      { t:'[POR CONFIRMAR]', d:'Una línea explicando la actividad.' }
    ],

    /* --- la directiva del capítulo. Vacío = no se dibuja la sección ---
       `f` es el archivo de foto en assets/img/capitulos/directivas/, opcional:
       sin foto sale la inicial sobre el color del capítulo. */
    board: [
      { name:'[POR CONFIRMAR]', role:'Chair',      ig:'', f:'' },
      { name:'[POR CONFIRMAR]', role:'Vice Chair', ig:'', f:'' }
    ],

    /* --- trayectoria. Cada hito necesita FUENTE, como en la portada ---
       tag: 'hito' | 'premio' | 'encuentro' */
    timeline: [
      { y:'[AÑO]', t:'[POR CONFIRMAR]', tag:'hito',
        d:'Qué pasó, en una o dos frases.',
        fuente:'de dónde sale este dato — sin fuente, no va' }
    ],

    /* --- fotos. Van en assets/img/capitulos/computer-society/ --- */
    fotos: []
  }

  /* Las otras nueve se añaden aquí abajo con la misma forma. */

};
