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
    /* Los dos extremos del degradado de sus propias piezas, muestreados de
       la portada. El punto va claro u oscuro según cuál lea mejor: medido
       contra el punto medio del degradado. */
    grad:  ['#EF9D01', '#4A6303'],
    punto: 'tinta',
    lede:  'Computación, software, inteligencia artificial, ciberseguridad y arquitectura del computador.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board: [
      { f:'1.jpg', name:'Aldrin Chávez', role:'Chair', curso:'9no - Computation' },
      { f:'2.jpg', name:'Kevin Sánchez', role:'Vice Chair', curso:'7mo - Computation' },
      { f:'3.jpg', name:'Pamela Crespo', role:'Secretaria', curso:'5to - Computation' },
      { f:'4.jpg', name:'Giannirley Calderón', role:'Tesorera', curso:'5to - Computation' },
      { f:'5.jpg', name:'Jhonny Peñaherrera', role:'Web Master', curso:'7mo - Computation' }
    ],
    timeline: [],

    fotos: []
  },

  'embs': {
    t:     'IEEE EMBS',
    corto: 'EMBS',
    k:     'Capítulo técnico',
    img:   'embs.png',
    u:     'https://www.embs.org/',
    blanco: true,
    color: 'var(--ieee-red)',
    /* Los dos extremos del degradado de sus propias piezas, muestreados de
       la portada. El punto va claro u oscuro según cuál lea mejor: medido
       contra el punto medio del degradado. */
    /* Su foto tiene la cabeza del más alto pegada al borde: el encuadre
       baja para que no se le corte. El resto va al 34 % por defecto. */
    foco:  '10%',
    grad:  ['#A169B0', '#7484CF'],
    punto: 'tinta',
    lede:  'Bioingeniería: dispositivos médicos, neurociencias y procesamiento de señales fisiológicas.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board: [
      { f:'1.jpg', name:'Calero Julian', role:'Chair', curso:'8vo - Biomed' },
      { f:'2.jpg', name:'Karen Shuguli', role:'Vice Chair', curso:'8vo - Biomed' },
      { f:'3.jpg', name:'Angelly Gómez', role:'Secretaria', curso:'5to - Biomed' },
      { f:'4.jpg', name:'Jade Mayorga', role:'Tesorera', curso:'8vo - Biomed' },
      { f:'5.jpg', name:'Camila Alvarado', role:'Web Master', curso:'6to - Biomed' }
    ],
    timeline: [],

    fotos: []
  },

  'eps': {
    t:     'IEEE Electronics Packaging Society',
    corto: 'Electronics Packaging',
    k:     'Capítulo técnico',
    img:   'eps.png',
    u:     'https://eps.ieee.org/',
    blanco: true,
    color: 'var(--ieee-orange)',
    /* Los dos extremos del degradado de sus propias piezas, muestreados de
       la portada. El punto va claro u oscuro según cuál lea mejor: medido
       contra el punto medio del degradado. */
    grad:  ['#2776AD', '#A9A0DF'],
    punto: 'tinta',
    lede:  'Microchips, ensamblaje, empaque y manufactura electrónica — el hardware que todo lo demás da por sentado.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board: [
      { f:'1.jpg', name:'Brittany Jiménez', role:'Chair', curso:'5to - Nanotech' },
      { f:'2.jpg', name:'Luis Ruiz', role:'Vice Chair', curso:'5to - Biomed' },
      { f:'3.jpg', name:'Mateo Jiménez', role:'Secretario', curso:'5to - Computation' },
      { f:'4.jpg', name:'Domenica Morillo', role:'Tesorera', curso:'5to - Biomed' },
      { f:'5.jpg', name:'Alexandra Suquillo', role:'Web Master', curso:'3ro - Biomed' }
    ],
    timeline: [],

    fotos: []
  },

  'cas': {
    t:     'IEEE Circuits and Systems Society',
    corto: 'Circuits and Systems',
    k:     'Capítulo técnico',
    img:   'cas.png',
    u:     'https://ieee-cas.org/',
    blanco: true,
    color: 'var(--ieee-purple)',
    /* Los dos extremos del degradado de sus propias piezas, muestreados de
       la portada. El punto va claro u oscuro según cuál lea mejor: medido
       contra el punto medio del degradado. */
    grad:  ['#0F7345', '#6AAC45'],
    punto: 'tinta',
    lede:  'Diseño de circuitos, nanoelectrónica y teoría de redes.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board: [
      { f:'1.jpg', name:'Vanessa García', role:'Chair', curso:'5to - Biomed' },
      { f:'2.jpg', name:'Daniela Fernandez', role:'Vice Chair', curso:'7mo - Biomed' },
      { f:'3.jpg', name:'Martin Carrión', role:'Secretario', curso:'5to - Physics' },
      { f:'4.jpg', name:'Kevin Bravo', role:'Tesorero', curso:'5to - Physics' },
      { f:'5.jpg', name:'Keyla Soria', role:'Web Master', curso:'6to - Biomed' }
    ],
    timeline: [],

    fotos: []
  },

  'ras': {
    t:     'IEEE Robotics and Automation Society',
    corto: 'Robotics and Automation',
    k:     'Capítulo técnico',
    img:   'ras.png',
    u:     'https://www.ieee-ras.org/',
    blanco: true,
    color: 'var(--ieee-teal)',
    /* Los dos extremos del degradado de sus propias piezas, muestreados de
       la portada. El punto va claro u oscuro según cuál lea mejor: medido
       contra el punto medio del degradado. */
    grad:  ['#69255F', '#8F3C4B'],
    punto: 'papel',
    lede:  'Robótica, automatización, manufactura avanzada y drones.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board: [
      { f:'1.jpg', name:'Willmer Illescas', role:'Chair', curso:'8vo - Agroindustry' },
      { f:'2.jpg', name:'Jean Wand', role:'Vice Chair', curso:'4to - Agroindustry' },
      { f:'3.jpg', name:'Ángeles Guaranga', role:'Secretaria', curso:'6to - Agroindustry' },
      { f:'4.jpg', name:'Jodie Carrera', role:'Tesorera', curso:'6to - Agroindustry' },
      { f:'5.jpg', name:'Daniela Käslin', role:'Web Master', curso:'5to - Agroindustry' }
    ],
    timeline: [],

    fotos: []
  },

  'grss': {
    t:     'IEEE Geoscience and Remote Sensing',
    corto: 'Geoscience and Remote Sensing',
    k:     'Capítulo técnico',
    img:   'grss.png',
    u:     'https://www.grss-ieee.org/',
    blanco: true,
    color: 'var(--ieee-green)',
    /* Los dos extremos del degradado de sus propias piezas, muestreados de
       la portada. El punto va claro u oscuro según cuál lea mejor: medido
       contra el punto medio del degradado. */
    grad:  ['#B8CDE1', '#165793'],
    punto: 'tinta',
    lede:  'Teledetección, SIG, observación de la Tierra y sensores satelitales.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board: [
      { f:'1.jpg', name:'Darío Maldonado', role:'Chair' },
      { f:'2.jpg', name:'Soledad Sandoval', role:'Vice Chair' },
      { f:'3.jpg', name:'Mateo Salas', role:'Secretario' },
      { f:'4.jpg', name:'Alejandra Vega', role:'Tesorera' },
      { f:'5.jpg', name:'Angélica Romero', role:'Web Master' }
    ],
    timeline: [],

    fotos: []
  },

  'cis': {
    t:     'IEEE Computational Intelligence Society',
    corto: 'Computational Intelligence',
    k:     'Capítulo técnico',
    img:   'cis.png',
    u:     'https://cis.ieee.org/',
    blanco: true,
    color: 'var(--ieee-dark-teal)',
    /* Los dos extremos del degradado de sus propias piezas, muestreados de
       la portada. El punto va claro u oscuro según cuál lea mejor: medido
       contra el punto medio del degradado. */
    grad:  ['#29B5E5', '#3469A6'],
    punto: 'tinta',
    lede:  'Redes neuronales, lógica difusa y algoritmos evolutivos.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board: [
      { f:'1.jpg', name:'Manuel Muñoz', role:'Chair', curso:'9no - Computation' },
      { f:'2.jpg', name:'Joseph Tipan', role:'Vice Chair', curso:'9no - Computation' },
      { f:'3.jpg', name:'Eimi Sevilla', role:'Secretaria', curso:'5to - Computation' },
      { f:'4.jpg', name:'Carlos Castro', role:'Tesorero', curso:'9no - Computation' },
      { f:'5.jpg', name:'Ariel Pincay', role:'Web Master', curso:'8vo - Computation' }
    ],
    timeline: [],

    fotos: []
  },

  'nano': {
    t:     'IEEE Nanotechnology Council',
    corto: 'Nanotechnology Council',
    k:     'Capítulo técnico',
    img:   'nano.png',
    u:     'https://ieeenano.org/',
    blanco: true,
    color: 'var(--ieee-dark-blue)',
    /* Los dos extremos del degradado de sus propias piezas, muestreados de
       la portada. El punto va claro u oscuro según cuál lea mejor: medido
       contra el punto medio del degradado. */
    grad:  ['#2A486C', '#638595'],
    punto: 'papel',
    lede:  'Nanotecnología: nanomateriales, nanodispositivos y nanomedicina.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board: [
      { f:'1.jpg', name:'Shirley Criollo', role:'Chair', curso:'9no - Biomed' },
      { f:'2.jpg', name:'Isaac Gavilanes', role:'Vice Chair', curso:'7mo - Biomed' },
      { f:'3.jpg', name:'Ethan Guevara', role:'Secretario', curso:'7mo - Biomed' },
      { f:'4.jpg', name:'Emiliy Perez', role:'Tesorera', curso:'4to - Biomed' },
      { f:'5.jpg', name:'Melanie Landázuri', role:'Web Master', curso:'3ro - Geology' }
    ],
    timeline: [],

    fotos: []
  },

  'wie': {
    t:     'IEEE Women in Engineering',
    corto: 'Women in Engineering',
    k:     'Grupo de afinidad',
    img:   'wie.png',
    u:     'https://wie.ieee.org/',
    blanco: true,
    color: 'var(--ieee-yellow)',
    /* Los dos extremos del degradado de sus propias piezas, muestreados de
       la portada. El punto va claro u oscuro según cuál lea mejor: medido
       contra el punto medio del degradado. */
    grad:  ['#AA7EB4', '#90A3F7'],
    punto: 'tinta',
    lede:  'Comunidad de mujeres en ingeniería: mentoría, divulgación y diversidad. La membresía del grupo es gratuita.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board: [
      { f:'1.jpg', name:'Cristina Lema', role:'Chair', curso:'9no - Biomed' },
      { f:'2.jpg', name:'Diana Reina', role:'Vice Chair', curso:'9no - Biology' },
      { f:'3.jpg', name:'Wendy Guasgua', role:'Secretaria', curso:'7mo - Chemistry' },
      { f:'4.jpg', name:'Ismael Paredes', role:'Tesorero', curso:'6to - Computation' },
      { f:'5.jpg', name:'Camila Garcés', role:'Web Master', curso:'5to - Biomed' }
    ],
    timeline: [],

    fotos: []
  },

  'sight': {
    t:     'IEEE SIGHT',
    corto: 'SIGHT',
    k:     'Grupo de afinidad',
    img:   'sight.png',
    u:     'https://sight.ieee.org/',
    blanco: true,
    color: 'var(--ieee-dark-green)',
    /* Los dos extremos del degradado de sus propias piezas, muestreados de
       la portada. El punto va claro u oscuro según cuál lea mejor: medido
       contra el punto medio del degradado. */
    grad:  ['#E0C288', '#F2A9ED'],
    punto: 'tinta',
    lede:  'Tecnología puesta al servicio del desarrollo humanitario y social.',

    /* Vacíos = la sección no se dibuja. Rellénalos cuando haya material. */
    resumen:  [],
    hacemos:  [],
    board: [
      { f:'1.jpg', name:'Domenica Vaca', role:'Chair', curso:'4to - Chemistry' },
      { f:'2.jpg', name:'Mateo Zhunio', role:'Vice Chair', curso:'3ro - Biology' },
      { f:'3.jpg', name:'Ainhoa Campoverde', role:'Secretaria', curso:'7mo - Biomed' },
      { f:'4.jpg', name:'Matheo Ponce', role:'Tesorero', curso:'4to - Biomed' },
      { f:'5.jpg', name:'Madelyn Calderón', role:'Web Master', curso:'4to - Computation' }
    ],
    timeline: [],

    fotos: []
  },

  'comsoc': {
    t:     'IEEE Communications Society',
    corto: 'Communications',
    k:     'Capítulo técnico',
    img:   'comsoc.png',
    u:     'https://www.comsoc.org/',
    blanco: true,
    color: 'var(--ieee-dark-teal)',
    /* Sin portada propia todavía: el velo cae al campo oscuro del sitio y el
       hero no lleva foto. En cuanto Andrés pase la pieza de su directiva, se
       muestrean los dos extremos como en los otros diez. */
    lede:  'Redes y telecomunicaciones: sistemas inalámbricos, protocolos y transmisión de datos.',

    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],
    fotos:    []
  },

  'mtts': {
    t:     'IEEE Microwave Theory and Technology Society',
    corto: 'Microwave Theory and Technology',
    k:     'Capítulo técnico',
    img:   'mtts.png',
    u:     'https://mtt.org/',
    blanco: true,
    color: 'var(--ieee-orange)',
    /* Sin portada propia todavía: el velo cae al campo oscuro del sitio y el
       hero no lleva foto. En cuanto Andrés pase la pieza de su directiva, se
       muestrean los dos extremos como en los otros diez. */
    lede:  'Microondas y radiofrecuencia: antenas, radar y comunicaciones de alta frecuencia.',

    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],
    fotos:    []
  },

  'npss': {
    t:     'IEEE Nuclear and Plasma Sciences Society',
    corto: 'Nuclear and Plasma Sciences',
    k:     'Capítulo técnico',
    img:   'npss.png',
    u:     'https://ieee-npss.org/',
    blanco: true,
    color: 'var(--ieee-red)',
    /* Sin portada propia todavía: el velo cae al campo oscuro del sitio y el
       hero no lleva foto. En cuanto Andrés pase la pieza de su directiva, se
       muestrean los dos extremos como en los otros diez. */
    lede:  'Ciencias nucleares y de plasmas: instrumentación, detectores y aplicaciones médicas de la radiación.',

    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],
    fotos:    []
  },

  'photonics': {
    t:     'IEEE Photonics Society',
    corto: 'Photonics',
    k:     'Capítulo técnico',
    img:   'photonics.png',
    u:     'https://ieeephotonics.org/',
    blanco: true,
    color: 'var(--ieee-yellow)',
    /* Sin portada propia todavía: el velo cae al campo oscuro del sitio y el
       hero no lleva foto. En cuanto Andrés pase la pieza de su directiva, se
       muestrean los dos extremos como en los otros diez. */
    lede:  'Fotónica y óptica: láseres, fibra óptica y dispositivos optoelectrónicos.',

    resumen:  [],
    hacemos:  [],
    board:    [],
    timeline: [],
    fotos:    []
  }

};
