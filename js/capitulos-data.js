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
    resumen: [
      'La sociedad más grande de IEEE, y la que más se parece a lo que ya ' +
        'estudias si vienes de Computación. Cubre desde la arquitectura del ' +
        'procesador hasta la ingeniería de software, pasando por seguridad, ' +
        'sistemas distribuidos e inteligencia artificial. ',
      'Es el capítulo natural para quien programa, pero no solo: la ' +
        'computación atraviesa todas las carreras de Yachay, y aquí se ' +
        'cruza con quien hace simulación en Física, tratamiento de datos en ' +
        'Biomedicina o modelos en Matemática Aplicada. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'Computer',
        d:'La revista insignia de la sociedad, con panorámicas del estado del campo escritas para leerse, no para especialistas.' },
      { t:'Las Transactions',
        d:'Una veintena de revistas por área: computadores, software, seguridad, patrones, visión.' },
      { t:'Concursos y congresos',
        d:'La sociedad organiza competencias estudiantiles y respalda congresos donde un trabajo de pregrado tiene sitio.' }
    ],
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
    resumen: [
      'Ingeniería aplicada a la medicina y la biología: dispositivos ' +
        'médicos, procesamiento de señales fisiológicas, imagen médica, ' +
        'neurociencia computacional y biomecánica. Donde el ' +
        'electrocardiograma deja de ser un dibujo y pasa a ser una señal ' +
        'que se filtra, se mide y se interpreta. ',
      'Es el capítulo con más terreno común en Yachay: Biomedicina de ' +
        'entrada, pero también Computación cuando toca procesar, Física ' +
        'cuando toca instrumentar y Química cuando toca sensar. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'IEEE Pulse',
        d:'La revista de divulgación de la sociedad: casos reales de ingeniería biomédica contados de forma legible.' },
      { t:'Transactions on Biomedical Engineering',
        d:'La referencia del área, y el sitio donde se publica lo que luego acaba en un hospital.' },
      { t:'EMBC',
        d:'El congreso anual de la sociedad, uno de los mayores del mundo en el campo, con vía propia para estudiantes.' }
    ],
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
    resumen: [
      'El hardware que todo lo demás da por sentado. Empaque electrónico ' +
        'es cómo un chip se conecta, se protege, se enfría y sobrevive: ' +
        'sustratos, soldadura, disipación térmica, fiabilidad y ' +
        'manufactura. ',
      'Es el capítulo más físico de los técnicos, y el que más se toca ' +
        'con Nanotecnología y Materiales. Si te interesa que las cosas se ' +
        'puedan fabricar de verdad y no solo simular, este es el sitio. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'Transactions on Components, Packaging and Manufacturing Technology',
        d:'La revista del área, del componente a la línea de montaje.' },
      { t:'ECTC',
        d:'El congreso de referencia en empaque electrónico, donde la industria enseña lo que viene.' },
      { t:'Puente con la industria',
        d:'De las sociedades con vínculo más directo con fabricantes: es un campo donde se contrata.' }
    ],
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
    resumen: [
      'Circuitos y sistemas: el diseño de lo analógico y lo digital, la ' +
        'teoría de redes, el procesamiento de señales en silicio y la ' +
        'nanoelectrónica. La capa donde las matemáticas se convierten en un ' +
        'circuito que funciona. ',
      'Vive entre Física y Computación, y es de los capítulos más ' +
        'teóricos: aquí las herramientas son el álgebra lineal y la ' +
        'transformada, no el destornillador. Buen sitio para quien disfruta ' +
        'de que las cuentas cuadren antes de encender nada. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'Transactions on Circuits and Systems',
        d:'Dividida en dos: teoría y fundamentos por un lado, sistemas y aplicaciones por otro.' },
      { t:'ISCAS',
        d:'El simposio internacional de la sociedad, con presencia estudiantil fuerte.' },
      { t:'Cursos y escuelas',
        d:'La sociedad mantiene escuelas de verano y material formativo abierto sobre diseño de circuitos.' }
    ],
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
    resumen: [
      'Robótica y automatización: percepción, control, planificación de ' +
        'movimiento, manipulación, vehículos autónomos y sistemas de ' +
        'manufactura. Es de los campos más visibles de la ingeniería, y de ' +
        'los que más rápido pasan del papel al prototipo. ',
      'En Yachay tira sobre todo de Agroindustria y Computación, que es ' +
        'una mezcla poco común y muy aprovechable: la automatización ' +
        'agrícola es un problema real, local y todavía abierto. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'IEEE Robotics & Automation Magazine',
        d:'La revista de la sociedad, más cercana al proyecto que al paper.' },
      { t:'ICRA e IROS',
        d:'Los dos grandes congresos de robótica del mundo, ambos con competiciones y talleres para estudiantes.' },
      { t:'Retos estudiantiles',
        d:'La sociedad respalda competencias donde se compite con robots construidos por el propio equipo.' }
    ],
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
    resumen: [
      'Observar la Tierra desde lejos y entender lo que se ve: ' +
        'teledetección, satélites, radar, sistemas de información ' +
        'geográfica y análisis de imagen sobre datos que llegan del ' +
        'espacio. ',
      'Es el capítulo con más sentido geográfico de todos: Ecuador tiene ' +
        'volcanes, glaciares, deforestación y agricultura, y todo eso se ' +
        'mide desde órbita. Cruza Geología, Física, Computación y ' +
        'Agroindustria. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'Transactions on Geoscience and Remote Sensing',
        d:'La revista de referencia del área.' },
      { t:'IGARSS',
        d:'El simposio anual, con datos abiertos y concursos de análisis de imagen satelital.' },
      { t:'Datos abiertos',
        d:'La sociedad promueve conjuntos de datos públicos con los que se puede trabajar sin presupuesto.' }
    ],
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
    resumen: [
      'Inteligencia computacional: redes neuronales, lógica difusa y ' +
        'computación evolutiva. Es la rama de la IA que viene de la ' +
        'ingeniería más que de la informática teórica, y la que se ocupa de ' +
        'problemas donde no hay una fórmula cerrada. ',
      'Es el capítulo más transversal de todos, porque casi cualquier ' +
        'carrera de Yachay acaba teniendo un problema de optimización o de ' +
        'clasificación encima de la mesa. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'IEEE Computational Intelligence Magazine',
        d:'Divulgación de calidad sobre el campo, sin la barrera de entrada del paper.' },
      { t:'Transactions on Neural Networks and Learning Systems',
        d:'De las revistas más citadas del área.' },
      { t:'Competiciones',
        d:'La sociedad organiza competencias abiertas de optimización y aprendizaje donde se participa con código.' }
    ],
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
    resumen: [
      'Women in Engineering es la red de IEEE para promover la ' +
        'participación de las mujeres en ingeniería y ciencia: mentoría, ' +
        'visibilidad, formación y comunidad. No es un capítulo técnico, es ' +
        'un grupo de afinidad, y esa diferencia importa — su terreno son ' +
        'las personas, no un área de conocimiento. ',
      'Está abierto a cualquier carrera y a cualquier persona: se es ' +
        'parte de WIE por apoyar el objetivo, no por el género. Y su ' +
        'membresía es gratuita, que es el único grupo del que se puede ' +
        'decir eso. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'Membresía sin coste',
        d:'A diferencia de las sociedades técnicas, afiliarse a WIE no añade nada a la cuota.' },
      { t:'WIE International Leadership Summit',
        d:'Encuentros regionales de liderazgo, varios de ellos en América Latina.' },
      { t:'Travel grants',
        d:'La red WIE convoca ayudas de viaje para asistir a congresos, y están en Oportunidades.' }
    ],
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
    resumen: [
      'SIGHT es el grupo de tecnología humanitaria de IEEE: aplicar ' +
        'ingeniería a problemas de comunidades concretas, trabajando con ' +
        'ellas y no sobre ellas. Agua, energía, salud, conectividad y ' +
        'desastres. ',
      'Es el grupo menos técnico en su enunciado y el más exigente en la ' +
        'práctica, porque obliga a salir del campus y a medir el resultado ' +
        'en algo que le sirva a alguien. Abierto a todas las carreras, y ' +
        'probablemente el sitio donde una idea de Agroindustria o Química ' +
        'encuentra antes su aplicación. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'Financiación de proyectos',
        d:'SIGHT convoca fondos para proyectos de grupos locales, pensados para presupuestos pequeños.' },
      { t:'Red de grupos',
        d:'Cientos de grupos SIGHT en el mundo, con proyectos documentados que sirven de punto de partida.' },
      { t:'IEEE HTC',
        d:'La conferencia de tecnología humanitaria, donde se presentan proyectos de este tipo.' }
    ],
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

    resumen: [
      'Comunicaciones: redes, protocolos, sistemas inalámbricos, óptica ' +
        'de transmisión y todo lo que hace que un dato salga de un sitio y ' +
        'llegue a otro. Es la infraestructura invisible sobre la que corre ' +
        'lo demás. ',
      'Terreno natural para Computación, y con puente hacia Física en la ' +
        'parte de propagación y medio. En un país con geografía difícil, la ' +
        'conectividad es un problema de ingeniería con consecuencias. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'IEEE Communications Magazine',
        d:'De las revistas más leídas de todo IEEE, escrita para entenderse.' },
      { t:'Transactions on Communications',
        d:'El archivo técnico del área.' },
      { t:'ICC y GLOBECOM',
        d:'Los dos congresos anuales de la sociedad, con programa estudiantil propio.' }
    ],
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

    resumen: [
      'Microondas y radiofrecuencia: antenas, guías de onda, radar, ' +
        'circuitos de alta frecuencia y las comunicaciones que dependen de ' +
        'ellos. Donde el cable deja de comportarse como un cable y hay que ' +
        'pensar en ondas. ',
      'Es de los capítulos más exigentes en física, y precisamente por ' +
        'eso encaja con Física y con Nanotecnología. También es la puerta a ' +
        'un campo que sigue creciendo con cada generación de redes móviles. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'IEEE Microwave Magazine',
        d:'La revista de la sociedad, con buen material introductorio.' },
      { t:'Transactions on Microwave Theory and Techniques',
        d:'La referencia histórica del campo.' },
      { t:'IMS',
        d:'El simposio internacional de microondas, con concursos de diseño para estudiantes.' }
    ],
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

    resumen: [
      'Ciencias nucleares y de plasmas: instrumentación de radiación, ' +
        'detectores, física de plasmas, fusión y las aplicaciones médicas e ' +
        'industriales de todo ello. Desde el detector de un tomógrafo hasta ' +
        'el confinamiento en un reactor. ',
      'Es el capítulo más ligado a Física de los técnicos, con salida ' +
        'hacia Biomedicina en la parte de imagen médica y dosimetría. Un ' +
        'campo pequeño en número y grande en instrumentación. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'Transactions on Nuclear Science',
        d:'La revista clásica del área, muy centrada en instrumentación.' },
      { t:'Transactions on Plasma Science',
        d:'La otra mitad de la sociedad: descargas, fusión y aplicaciones.' },
      { t:'NSS-MIC',
        d:'El congreso conjunto de ciencia nuclear e imagen médica, con cursos cortos para quien empieza.' }
    ],
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

    resumen: [
      'Fotónica: láseres, fibra óptica, dispositivos optoelectrónicos, ' +
        'espectroscopía y sensores ópticos. La luz usada como herramienta ' +
        'de medida, de transmisión y de fabricación. ',
      'Cruza Física, Nanotecnología y Química, y es de los campos donde ' +
        'un laboratorio de pregrado puede hacer cosas de verdad: mucha ' +
        'óptica se monta sobre una mesa y se ve con los ojos. '
    ],

    /* Hechos de la sociedad, no actividades de este capítulo: se pueden
       afirmar sin preguntarle a nadie. `hacemos` sigue vacío hasta que
       haya actividades reales que contar. */
    abre: [
      { t:'IEEE Photonics Journal',
        d:'Revista de acceso abierto, así que se lee sin depender de la suscripción de la universidad.' },
      { t:'Photonics Technology Letters',
        d:'Artículos cortos: buen formato para un primer trabajo publicable.' },
      { t:'Capítulos estudiantiles activos',
        d:'La sociedad financia actividades de capítulo estudiantil mediante convocatorias propias.' }
    ],
    hacemos:  [],
    board:    [],
    timeline: [],
    fotos:    []
  }

};
