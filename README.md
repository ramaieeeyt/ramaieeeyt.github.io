# IEEE Yachay Tech · Rama Estudiantil

Sitio-portafolio de una sola página para la Rama Estudiantil IEEE de la
Universidad Yachay Tech (Urcuquí — Imbabura, Ecuador).

> **¿Retomando el proyecto, o trabajando con una IA?** Empieza por
> [CONTEXTO.md](CONTEXTO.md): datos verificados con su fuente, decisiones
> técnicas y los errores ya cometidos, para no repetirlos.

**Para verlo: doble clic en `index.html`.** No necesita servidor, ni internet,
ni instalar nada. Todo está dentro de esta carpeta.

---

## El concepto

Las referencias, y qué toma de cada una:

| Referencia | Qué aporta |
|---|---|
| [cosmos.so](https://www.cosmos.so/) | Aire, tipografía editorial enorme, hover discreto, una sola tinta de acento |
| [ieee.org](https://www.ieee.org/) | IEEE Blue, Open Sans, estructura institucional, la cometa siempre presente |
| [specia1ne.com](https://specia1ne.com/) | El papel cálido (`#FAF9F6`) en vez del blanco clínico |
| [olivergareis.com](https://www.olivergareis.com/) | Bloques de texto pequeños y asimétricos flotando en mucho vacío |
| [paulkalkbrenner.net](https://www.paulkalkbrenner.net/) | **HERBIEEE**: el nombre ocupando el ancho entero como única imagen de la sección |
| ASCII medieval | Un *diaper* heráldico (la retícula de rombos que rellena los escudos medievales) animado de fondo, capitulares iluminadas, marginalia vertical |

En el hero, el *diaper* va **timbrado con el icono de Yachay Tech**: la placa
cambia de carácter continuamente y el monograma queda en negativo, que es
literalmente cómo funciona un escudo de armas — un mueble sobre campo diaprado.
La máscara está muestreada **cuadrada** del logo oficial y vive en `js/ascii.js`
(`YT`, 52 × 52); el renderizador estira las columnas según el ancho real de
carácter que mida, así que el icono sale cuadrado con cualquier tipografía
monoespaciada. Para cambiar su tamaño, toca el `0.46` de `Field.prototype.resize`
(fracción de la altura del campo). Si cambia el logo, hay que regenerar la
máscara desde `logo YT AZUL.png`.

La tensión se resuelve en una idea: **la rama como scriptorium**. Un códice
iluminado de ingeniería. Por eso la capitular del manifiesto y la marginalia
vertical en los márgenes — y sobre todo el hecho de que el rombo del *diaper*
medieval sea exactamente la misma forma que la cometa de IEEE.

---

## Estructura

```
IEEE YT webpage/
├── index.html              ← la página
├── css/
│   ├── style.css           ← todo el diseño (tokens IEEE arriba del archivo)
│   └── fonts.css           ← @font-face (generado, ver nota de tipografía)
├── js/
│   ├── ascii.js            ← el motor ASCII medieval + ornamentos
│   └── main.js             ← CONTENIDO EDITABLE + interacciones
└── assets/
    ├── logo/               ← lockup oficial de la Rama (ieee-yt-*.png) +
    │                         IEEE Master Brand en azul, negro, blanco y currentColor
    ├── fonts/              ← Open Sans + Libre Caslon (woff2)
    └── img/
        ├── directiva/      ← retratos recortados de la Directiva 2026
        ├── archivo/        ← las piezas de Instagram completas
        ├── rama-general-2026.jpg
        └── call-for-volunteers.jpg   ← fondo de «Únete a la Rama»

LOGOS IEEE YT/             ← tus originales a 5000 px (fuente, no la usa el sitio)
```

Los logos que usa la página salen de ahí, recortados al alfa y exportados a
tamaño web: `ieee-yt-blue.png` (ficha de «Qué es la Rama»), `ieee-yt-white.png`
y `ieee-yt-black.png` de repuesto, y `yachay-tech-icon.png` (el icono suelto).
Si cambias el original, hay que volver a exportarlos.

El **título del hero** no es una imagen del lockup apilado: es el mismo montaje
horizontal de la barra superior (cometa + filete + descriptor) a escala de
titular, para que ambos digan lo mismo. Se arma solo al cargar — la cometa entra,
el filete se dibuja hacia abajo y el descriptor sale de detrás; nada de eso
ocurre si el sistema pide *reduce motion*.

---

## Editar el contenido

Casi todo el texto vive en un solo lugar: el objeto `DATA` al inicio de
[`js/main.js`](js/main.js). Ahí están la directiva, las cifras, la trayectoria
y el archivo. Cambia un nombre o una frase ahí y la página se reconstruye sola.

```js
var DATA = {
  board: [
    { n:'I', slug:'ismael-cifuentes', name:'Ismael Cifuentes',
      role:'Chair · Presidente', ig:'cifuentes1721',
      quote:'Por una rama más activa, unida y reconocida.' },
    ...
```

El texto largo (el manifiesto, los encabezados de sección, el pie) está
directamente en `index.html`, bien señalizado con comentarios.

### Cambiar una foto de la directiva

Reemplaza el archivo en `assets/img/directiva/` conservando el nombre
(`slug` + `.jpg`). Formato ideal: **vertical 4:5, 720 × 900 px**, encuadre a la
altura de los ojos ~40 % desde arriba. Las tarjetas salen en blanco y negro y
recuperan el color al pasar el cursor.

### Cambiar la foto de «Únete a la Rama»

Reemplaza `assets/img/call-for-volunteers.jpg`. Va de fondo al 30 % de opacidad
bajo dos degradados que oscurecen el lado del texto, así que conviene una foto
**apaisada y con gente hacia la derecha** — el lado izquierdo queda tapado.

### Añadir a la trayectoria

Agrega un objeto a `DATA.timeline`. Se ordenan como los escribas: en el orden en
que los pongas.

### Sincronizar el Archivo con Instagram

El **Archivo** puede alimentarse solo de [@ramaieeeyt](https://www.instagram.com/ramaieeeyt/).
Lo hace [`.github/workflows/instagram.yml`](.github/workflows/instagram.yml)
una vez al día: llama a la API, **descarga** las imágenes al repo, las recorta a
4:5 y escribe `assets/img/instagram/index.json`.

Se descargan en vez de enlazarse porque **las URLs que sirve Meta van firmadas y
caducan en días** — enlazarlas en vivo rompería el archivo solo. Además así el
sitio sobrevive a que la API cambie: deja de traer novedades, pero no se cae.

El sitio lo consume con repliegue: si el manifiesto existe, el Archivo pasa a ser
el de Instagram; si no —o si abriste `index.html` con doble clic, donde `file://`
bloquea el `fetch`— se queda con la lista fija de `DATA.archive`. Las dos rutas
están probadas.

**Para activarlo** hacen falta dos cosas:

1. **@ramaieeeyt en modo Profesional** (Creator o Business). Ya lo está.
2. Una app en [developers.facebook.com](https://developers.facebook.com) con el
   producto *Instagram*, generar un token de larga duración, y guardarlo como
   secret **`IG_TOKEN`** en Settings → Secrets and variables → Actions.

Opcionalmente, un secret **`GH_PAT`** (fine-grained PAT con permiso
*Secrets: write* sobre este repo): con él la Action **renueva sola** el token
cada día. Sin él funciona igual, pero el token caduca a los 60 días y hay que
cambiarlo a mano — la Action avisa en el log cuántos días quedan.

Probar en local sin esperar al cron:

```bash
IG_TOKEN=xxx python3 scripts/sync_instagram.py --dry-run
```

### HERBIEEE — el archivo de memes

Deja los archivos en `assets/img/herbieee/` y añádelos al array `memes` de
`js/main.js`:

```js
memes: [
  { f:'lo-que-sea.jpg', c:'pie opcional' },
  { f:'otro.png' }
],
```

Cualquier proporción sirve: la rejilla es de mampostería. **Mientras el array
esté vacío la sección solo muestra su portada y la palabra «Próximamente»** — no
se rompe ni se ve a medio hacer. Hay un `LEEME.txt` con lo mismo dentro de la
carpeta.

### Capítulos y grupos de afinidad

Viven en `DATA.caps` y se pintan en **`capitulos.html`**. Desde la portada se
llega por la tarjeta que hay bajo Oportunidades.

Son **diez**: ocho capítulos técnicos (Computer Society, EMBS, EPS, CAS, RAS,
GRSS, CIS y Nanotechnology Council) y dos grupos de afinidad (WIE y SIGHT). La
lista sale del **manual de marca de la rama**, no de la web pública, que está
desactualizada.

Los logotipos de `assets/img/capitulos/` se recortaron de las hojas SVG de ese
manual (`LOGOS/Logos capitulos y grupos/`), quitando el fondo verde con una
tolerancia estrecha para no dañar los verdes propios de CAS y WIE. Son las
versiones **del capítulo**, con el lockup «Yachay Tech University / IEEE Student
Branch» incluido.

El manual trae además MTT-S, Photonics, NPSS y ComSoc, que no aparecen en
`logos color.png`. Quedaron fuera a propósito: confirma antes de añadirlos.

---

## Marca

Todo lo tomado de las [IEEE Brand Identity Guidelines (Q1 2025)](https://brand-experience.ieee.org/wp-content/uploads/2025/03/24-MSD-3-051-IEEEBrandIdentityGuidelineUpdate-FNL-Interactive.pdf).

### Color

La paleta completa está declarada como variables CSS al inicio de `style.css`:

| | HEX | Pantone |
|---|---|---|
| **IEEE Blue** (primario) | `#00629B` | 3015 C |
| Dark Blue | `#002855` | 295 C |
| Cyan | `#00B5E2` | Cyan |
| Teal | `#009CA6` | 320 C |
| Dark Teal | `#007377` | 322 C |
| Green | `#78BE20` | 368 C |
| Purple | `#772583` | 2612 C |
| Gray | `#75787B` | Cool Gray 9 C |

Los grises de fondo (`--paper-2`, `--paper-3`) son tintes de Cool Gray 9 C, que
las guías permiten explícitamente.

### Tipografía

- **Open Sans** — la fuente web preferida por IEEE. Todo el cuerpo y la interfaz.
- **Adobe Caslon Pro** — tipografía secundaria de IEEE, «solo para titulares».
  Aquí aparece en los acentos en cursiva, el *anno*, las capitulares y la firma.

Adobe Caslon Pro es de pago, así que la cascada es:

```css
--font-caslon: "Adobe Caslon Pro", "ACaslonPro", "Libre Caslon Display", …
```

**Si tienes Adobe Caslon Pro activada en Creative Cloud, el sitio la usa
automáticamente.** Si no, cae en Libre Caslon, que es una revival de Caslon de
código abierto y se le parece mucho.

> **Nota sobre `css/fonts.css`:** las variantes `latin` van incrustadas en
> base64. No es capricho: Chrome se niega a cargar *archivos* de fuente por
> `file://` (política CORS), así que sin esto la página perdería su tipografía
> al abrirla con doble clic. Las `latin-ext` quedan como referencias normales
> —el español no las necesita— y cargan solas si algún día subes el sitio a un
> servidor. Si regeneras el archivo, vuelve a incrustarlas.

### Logo

`assets/logo/` trae el IEEE Master Brand en azul, negro y blanco, más una
versión con `fill="currentColor"` para recolorear por CSS. Las guías permiten
**solo** esos tres colores, y prohíben separar la cometa de las letras,
rotarlo, deformarlo o meterlo en una caja. El lockup del nav (cometa + filete +
«Yachay Tech University / IEEE Student Branch») está construido en HTML/CSS
siguiendo el bloque oficial de la rama.

---

## Detalles técnicos

- HTML, CSS y JavaScript planos. Cero dependencias, cero build, cero red.
- El fondo ASCII se dibuja escribiendo **una** cadena por fotograma en un
  `<pre>` (~11 fps). Se detiene solo cuando sale de pantalla, cuando cambias de
  pestaña, y no arranca si el sistema pide *reduce motion*.
- Accesibilidad: navegación por teclado en el mosaico, `aria-*` en el menú y el
  lightbox, foco visible, y respeto por `prefers-reduced-motion`.
- Responsive de 375 px en adelante. Hay hoja de impresión.
- Probado en Chromium. Peso total ≈ 1,9 MB (la mayoría son las fotos).

### Publicarlo en GitHub Pages

La carpeta ya está preparada: hay `.gitignore` (deja fuera los originales de
5000 px, que el sitio no usa) y `.nojekyll` (para que Pages sirva los archivos
tal cual y no los pase por Jekyll). **Todas las rutas del sitio son relativas**,
así que funciona igual en la raíz de un dominio que en `usuario.github.io/repo/`.

```bash
cd "/Users/dez/Desktop/IEEE YT webpage"
git add -A
git commit -m "Sitio de la Rama Estudiantil IEEE Yachay Tech"
git branch -M main
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```

Después, en el repo: **Settings → Pages → Source: Deploy from a branch →
main / (root)**. En un par de minutos queda en
`https://USUARIO.github.io/REPO/`.

Si el repo se llama `USUARIO.github.io`, la URL es directamente
`https://USUARIO.github.io` sin subcarpeta.

> Vale la pena crear una **organización de GitHub para la rama** en vez de
> colgarlo de una cuenta personal: así el sitio sobrevive a los cambios de
> directiva y la URL puede ser `ramaieeeyt.github.io`.

Alternativas igual de válidas sin dominio propio: **Netlify** (arrastras la
carpeta, sin git) y **Cloudflare Pages**. GitHub gana si además vas a
sincronizar Instagram, porque las GitHub Actions ya están ahí.

---

## Fuentes del contenido

- [@ramaieeeyt](https://www.instagram.com/ramaieeeyt/) — Directiva 2026: nombres,
  cargos, frases y fotografías.
- [edu.ieee.org/ec-ytu](https://edu.ieee.org/ec-ytu/) — descripción de la rama,
  WIE, CEJI22, contacto.
- [ieee.org](https://www.ieee.org/) — cifras globales de IEEE.
- **IEEE vTools Events** — los dos eventos de 2025:
  [Feria IEEE YT 2025](https://events.vtools.ieee.org/m/470014) ·
  [RNR 2025](https://events.vtools.ieee.org/m/526371)
- [Wikipedia — Universidad Yachay Tech](https://es.wikipedia.org/wiki/Universidad_Yachay_Tech)
  — la fundación de la rama a finales de 2019 y la tabla de resultados de
  IEEEXtreme 13.0 (YTCodex 1.º nacional, puesto 258 global; SoftDomitas,
  YTScript y OverflowYt).
- [IEEE Sección Ecuador — RNR 2023](https://r9.ieee.org/ecuador/reunion-nacional-de-ramas-estudiantiles-ieee-2023/)
  — campeonas de la feria de ramas junto a ESPOCH, y la delegación de Ibarra
  (con la UTN) campeona en la feria de ciudades.
- [edu.ieee.org/ec-ytu](https://edu.ieee.org/ec-ytu/) — el Concurso de
  Biodispositivos Biomédicos de 2021.

Cada entrada de **Trayectoria** está contrastada con una fuente pública, y las
fuentes están anotadas en el propio `DATA.timeline` de `js/main.js`. Regla de la
casa: **no añadas un hito que no puedas enlazar.**

Tres cosas que estaban mal y se corrigieron el 31/07/2026:

| Decía | Es |
|---|---|
| RNR 2025 «organizada desde Yachay Tech», 28–30 nov | **RNR Ibarra 2025**, 26–28 sep, en la **Universidad Técnica del Norte**. La rama participó, no la organizó |
| «La rama entra al grupo Mentor» (2023) | Sin fuente. **Eliminado** |
| 51 miembros inscritos en 2023 | Fue el **19–20 de diciembre de 2019**, la inscripción fundacional |
| Biodispositivos 2021 «organizado desde la rama junto al capítulo EMBS» | La fuente lo acredita a **Rosemary Davies, vicepresidenta**. Lo de EMBS lo inventé yo |

El origen del error del RNR: en vTools hay dos registros. [m/497568](https://events.vtools.ieee.org/m/497568)
es el evento real (UTN, septiembre) y [m/526371](https://events.vtools.ieee.org/m/526371)
es el **reporte de participación** que subió el capítulo EPS de Yachay Tech —
y el campo «host organization» de un reporte es quien lo redacta, no quien
organizó el evento. Cuidado con ese campo si vuelves a usar vTools como fuente.

---

*Diseño y desarrollo — Aveiga Design.*
