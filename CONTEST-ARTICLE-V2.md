# IEEE R9 Student Website Contest 2026 — Article, second version

> **Esta es una segunda versión, no un reemplazo.** `CONTEST-ARTICLE.md` sigue
> intacto. Elige una de las dos y entrega solo esa.
>
> **Qué cambia respecto de la primera:** esta versión habla únicamente de lo que
> hay en la página hoy. Fuera la sincronización con Instagram como pilar de la
> Sección V (está escrita pero inactiva, y presentarla como logro es prometer),
> fuera HERBIEEE, fuera el calendario de eventos. Lo que era especulación pasó a
> un párrafo corto de mejoras futuras al final, que es donde la plantilla lo
> pide. Y a cambio, la Sección IV creció: cada bloque de la página dice ahora
> **qué pregunta del visitante responde**.
>
> También sigue la plantilla más de cerca: la Tabla 1 usa los criterios de
> evaluación que la propia plantilla imprime, y frente a cada uno pone lo que el
> sitio ofrece.
>
> **Son 2.689 palabras**, prácticamente las mismas que la primera (2.730). No es
> más corta: lo que se fue en promesas volvió en contenido. Sigue apretando
> contra el tope de 4 páginas, así que al final tienes una **lista de recortes
> por orden** para cuando veas el PDF montado.
>
> Los tres archivos salen de este `.md` con `scripts/articulo-v2.py`. Si cambias
> el texto, vuelve a lanzarlo y se regeneran el `.docx` y el `.txt`.

**Cómo usar este archivo:** ya no hace falta pegar nada.
`CONTEST-ARTICLE-V2-PLANTILLA.docx` **es la plantilla oficial con este texto
dentro**, hecha con `scripts/rellenar-plantilla.py`. Ábrela, mete tus capturas y
exporta a PDF. Los otros dos formatos (`.docx` suelto y `.txt`) siguen ahí por si
prefieres pegar a mano.

---

## POR QUÉ SALÍAN 6 PÁGINAS

Medido sobre la plantilla, no estimado:

| | Lo que trae la plantilla |
|---|---|
| Página | **A4** (no Carta) |
| Columnas | 2, de 3,42″ cada una |
| Cuerpo de las secciones I–VI | **12 pt** |
| Resumen y palabras clave | 10 pt |
| Referencias | 9 pt |
| Interlineado | sencillo |
| Margen superior | 1,14″ |
| Margen inferior del cuerpo | **3,00″** |

Las bases **no fijan tamaño de letra ni interlineado**: la plantilla es la
especificación, y su cuerpo viene a 12 pt. A 12 pt, 2.689 palabras son seis
páginas. Los dos culpables son ese 12 pt y ese margen inferior de tres pulgadas,
que se come un cuarto de cada página y que además **la plantilla se contradice a
sí misma**: arriba deja 1,14″ y abajo 3,00″.

`rellenar-plantilla.py` corrige las dos cosas:

- **cuerpo a 10 pt**, que es el estándar de artículo IEEE y el que la propia
  plantilla ya usa en su resumen. Los títulos se quedan en 12 pt negrita y las
  referencias en 9 pt, como venían;
- **margen inferior igualado al superior** (1,14″). Si prefieres no tocar nada de
  la plantilla, pon `MARGEN_INFERIOR = None` en el script y vuelve a lanzarlo.

Todo lo demás queda intacto: A4, las dos columnas, los estilos, la numeración de
las secciones, el hueco de la Figura 1 y la Tabla 1.

---

## TÍTULO

```
IEEE Yachay Tech University Student Branch
Rebuilding the Branch Website
```

## BLOQUE DE AUTORES

```
IEEE Yachay Tech University Student Branch — ieee@yachaytech.edu.ec
Andrés Aveiga (Web Master) — andres.aveiga@yachaytech.edu.ec
Ismael Cifuentes (Chair) — ismaelcifuentes@ieee.org
```

## ABSTRACT

```
A student branch website usually dies the moment its author graduates. This
article describes how the IEEE Yachay Tech University Student Branch (Urcuquí,
Ecuador) rebuilt its web presence around that problem. The site, public at
ramaieeeyt.github.io, is organized around the questions a student actually
arrives with: what the branch is, who to write to, what IEEE membership costs
and what it opens, which IEEE tools a member can use today, and where to fit in.
It presents six 2026 officers each with a direct contact, eight concrete routes
into IEEE, six IEEE tools, ten chapters and affinity groups with their official
lockups, and ten milestones, all ten traceable to a public source. It was built
with plain HTML, CSS and JavaScript: no framework, no build step, no cookies, no
third-party request. Every piece of content that changes between administrations
lives in one file, and the repository belongs to the branch's GitHub
organization rather than to a person, so the site can be handed over instead of
inherited. Sourcing the timeline surfaced and corrected three errors in the
branch's own record.
```

## KEYWORDS

```
Keywords — Student Branch, website, IEEE branding, accessibility,
sustainability, R9.
```

---

## I. INTRODUCTION

```
The IEEE Yachay Tech University Student Branch was constituted before IEEE in
late 2019, enrolling fifty-one members that December [1]. Since then it has
organized national congresses, competed in IEEEXtreme, founded a Women in
Engineering affinity group, and won the branch fair at the 2023 National Student
Branch Meeting [2]. Almost none of that was visible online, and the page a
search engine returned was three administrations out of date.

The failure is common and it is not a design failure. Student branch websites
are built by one enthusiastic volunteer, hosted on a personal account, and
abandoned when that volunteer graduates; what they contain ages badly because
updating it requires the original author. A student looking for the branch finds
either nothing or something wrong, and a wrong page is worse than no page: it
tells a prospective member the branch is inactive.

Our objective was therefore narrower and more demanding than "make a website".
We set out to build a site that (i) presents the branch and its officers
accurately, (ii) makes the concrete opportunities of IEEE membership visible to
students who do not know they exist, and states what membership costs,
(iii) records the branch's history so that any reader can verify it
independently, and (iv) can be maintained and handed over by people who did not
build it. The deliverable is a public, responsive site at
https://ramaieeeyt.github.io, described in Section IV.
```

## II. METHODOLOGY

```
The work followed four stages.

What the page owes a visitor. Before writing any code we listed the questions
students actually ask the branch — what is this, who do I talk to, what do I get,
what does it cost, where do I fit, what have you done — and made each question a
section. Nothing was added that did not answer one of them, which is why there
is no news feed and no blog: we had no sustainable way to keep either honest.

Source gathering. Content was drawn from the branch's membership guide, its
Instagram account (@ramaieeeyt), the IEEE Ecuador Section, IEEE vTools Events
records, and the branch's page on edu.ieee.org. Photographs of the 2026 officers
come from the branch's own published carousel, re-cropped to a uniform 4:5 frame
so that every portrait shares the same head size and eye line.

Brand compliance. Colour, typography and logo usage follow the IEEE Brand
Identity Guidelines, Q1 2025 [3]. The IEEE palette is declared as CSS variables
with the exact hexadecimal values from the guidelines, anchored on IEEE Blue
(#00629B). Open Sans is used as IEEE's preferred web typeface, and Adobe Caslon
Pro — IEEE's secondary typeface, permitted for headlines — in italic accents and
drop caps. The official branch lockup identifies the header, and each chapter
carries its own official lockup.

Verification and implementation. Every historical claim was checked against a
public source before publication, and the source recorded beside the data in the
code, so the next editor sees the evidence and not only the assertion. Every
outbound link was opened and read, not merely pinged. The site was built with
plain HTML, CSS and JavaScript, with no framework and no build step,
deliberately: a successor needs a text editor and a browser, nothing else.
```

## III. IMPLEMENTATION

```
Four problems dominated the execution phase.

Verification was harder than expected. The branch's recollection of its own
history did not survive contact with the sources, and three errors were
corrected. The 2025 National Student Branch Meeting had been recorded as ours;
the IEEE vTools record shows it was held 26–28 September 2025 at Universidad
Técnica del Norte [4], with our branch participating. The confusion had a
traceable cause: a separate vTools entry is a participation report filed by our
own chapter, and its "host organization" field names whoever wrote the report,
not whoever organized the event. An enrolment of fifty-one members had been
attributed to 2023; the record dates it to December 2019 [1]. A claim about a
university mentoring programme had no traceable source and was removed. We
consider finding these a result of the project rather than an obstacle to it.

Typography over the file system. The site is designed to open directly from
disk, without a server, so that any officer can review a change before it is
published. Browsers refuse to load font files over the file:// protocol, which
replaced the entire typographic system with fallbacks — silently, which is the
difficult part, because the page still looked finished. The Latin subsets are
therefore embedded in the stylesheet as base64 data URIs, which always resolve,
and the rendered text was measured to confirm the real typefaces were in use.

Imagery and intellectual property. Illustrating the Opportunities section, the
obvious approach was to reuse the preview image each destination page publishes.
Inspecting those images showed why it was the wrong one: the IEEE Foundation
page exposes a photograph of identifiable award recipients, and the IEEE WIE
page a licensed stock photograph. Republishing either would have meant hosting
third-party material we have no right to redistribute. We adopted a narrower
rule — official IEEE programme marks, which an IEEE organizational unit may
legitimately display, and photographs the branch owns. Seven cards use official
marks, one our own photograph, and none reuses third-party imagery. For the same
reason the Archive keeps its images as files in the repository rather than
linking to Instagram, whose image URLs are signed and expire within days.

Weight, measured rather than assumed. The animated background was the obvious
suspect and the wrong one: a frame costs about 1.3 ms at eleven frames per
second — roughly one per cent of a processor core — and it stops when off screen.
The weight was in the images. The chapter lockups were stored at 900 px and
displayed at 124 px, or at 42 px on the home page: three megabytes for marks a
few pixels tall. Rescaled to the size they are actually shown at, the set fell
from 3.0 MB to 216 kB — a factor of 13.7 — with no difference visible side by
side at twice their displayed size. Two font preloads were also removed: they
pointed at files no font rule uses, costing 58 kB per visit for nothing. The
measurement came first in each case, and it moved the effort from what looked
expensive to what was.
```

## IV. RESULTS

```
The site is public at https://ramaieeeyt.github.io [5]. One scrolling page
carries nine blocks and a dedicated page carries the chapters. Each block exists
to answer one question, and this section reports what each one contains.

Who we are, and who to write to. An identity block states the branch's mission,
and a fact panel carries university, location, IEEE Region and branch code
without scrolling or searching. The Board section presents all six 2026 officers
— Chair, Vice Chair, Secretary, Treasurer, Web Master and Membership — each with
a photograph, a personal statement and a direct email address. A visitor reaches
the person responsible for what they need instead of a generic inbox, which is
the difference between an answer in a day and no answer at all.

What membership opens, and what it costs. Opportunities is the section we
consider most important, and it opens with the number a student actually wants:
membership costs roughly USD 28 a year, about half that when enrolling after
March, plus USD 1 to 13 for each technical society. The figures are attributed
to the branch's membership guide and linked to IEEE for the current rate. Eight
concrete routes follow — IEEEXtreme, IEEE Foundation scholarships, IEEE WIE
travel grants, student membership benefits, the R9 SAC contests, IEEE Day,
volunteering inside the branch's chapters, and the National Student Branch
Meeting — each carrying the official mark of the programme and linking to its
IEEE page. The section states plainly that most of what it lists requires
membership, because a student who discovers that after applying does not come
back.

What a member can use today. Opportunities and Resources answer two different
questions and the site keeps them apart: Opportunities is what a student applies
to, Resources is what a member already uses — IEEE Xplore, IEEE Spectrum,
Collabratec, IEEE Standards, IEEE Access and the IEEE conference calendar, with
membership requirements marked per item.

Where a student fits. A dedicated page presents the ten units working inside the
branch: eight technical chapters — Computer Society, EMBS, Electronics
Packaging, Circuits and Systems, Robotics and Automation, Geoscience and Remote
Sensing, Computational Intelligence and the Nanotechnology Council — and two
affinity groups, Women in Engineering and SIGHT, each with its official lockup
and a link to its society. This page alone answers the question every first-year
student asks. Joining is then reduced to three actions in one place: obtain an
IEEE membership, read the branch's membership guide, or write to the branch.

What the branch has done. The Timeline records ten milestones from 2019 to 2026,
tagged as award, milestone or meeting, among them first place nationally at
IEEEXtreme 13.0. Ten of ten are traceable to a named public source, recorded in
the code beside the entry. An Archive of published pieces accompanies it.

Navigation. Section links and page links were separated once the menu outgrew a
single bar. Links that move within the page live in a fixed spine along the left
edge, folded to a strip of marks that expands on hover, keyboard focus or tap;
links that lead elsewhere stay in the top bar. The spine doubles as a position
indicator, marking the section in view.

Checking produced corrections. Every outbound link was opened, and one resource
was dropped: the IEEE Learning Network answers HTTP 200 while serving a login
wall, which to a non-member reads as a dead link. Labels set at 42 % ink measured
2.76:1 against paper, below the 4.5:1 WCAG AA asks of small text, and were raised
to a measured 5.23:1. Officer statements lived only in a hover state and were
therefore invisible on every phone; they now show by default where there is no
pointer. Between 861 and 1099 px the layout offered neither the spine nor the
hamburger menu and eight links spilled off the right edge — exactly where a
tablet in landscape lands; the two thresholds now meet.

The initial load transfers about 350 kB from a single origin, with photographs
fetched only as the reader reaches them. The site sets no cookies, uses no local
storage and makes no request to any third party — no analytics, no CDN, no
embedded widgets — verified in production. It is responsive from 320 px upward
with no horizontal overflow at any width. Accessibility measures include
alternative text on images, ARIA attributes on the menu, lightbox and spine, full
keyboard navigation, visible focus states, touch targets sized for a finger, and
prefers-reduced-motion, which disables every animation for readers who ask for
it. The site is written in Spanish because its readers are Ecuadorian
undergraduates, with IEEE programme names kept in their official English form.
```

**Tabla 1 — pégala donde la plantilla pone su Table 1:**

Table 1

| Criteria | Points | What the site provides |
| :--- | :---: | :--- |
| Content Strategy and Relevance | 40 | 8 opportunities with official marks and links, 6 IEEE tools, 10 chapters and affinity groups, 6 officers, 10 sourced milestones, membership cost stated up front |
| Branding and IEEE Identity | 20 | IEEE Brand Identity Guidelines Q1 2025: exact palette on IEEE Blue #00629B, Open Sans, Adobe Caslon Pro, official branch and chapter lockups |
| Information Accessibility and Navigation | 15 | Fixed section spine with position indicator, separate page links, full keyboard navigation, contrast measured at 5.23:1 |
| Member Engagement and Recruitment | 15 | Price before the pitch, three ways to join in one place, a named contact for every officer |
| Technical Quality and Accessibility | 10 | ~350 kB from a single origin, responsive from 320 px, no cookies and no third-party request, prefers-reduced-motion honoured |

*Evaluation criteria and the site's response to each.*

## V. CLOSING REMARKS

```
Replicability was a design requirement, not an afterthought, and it is the part
of this project most worth copying.

Ownership. The site is hosted on GitHub Pages under a GitHub organization owned
by the branch rather than by an individual. Officers are added as owners, so
access transfers with the role. This addresses the failure described in
Section I directly: there is no personal account to lose.

Editability. All content that changes between administrations — officers,
opportunities, resources, timeline entries, archive items — is defined in a
single JavaScript object at the top of one file. Changing a name or adding a
milestone means editing one line, and it can be done from a browser through
GitHub's web editor: no software installed, no build to run, from any computer.
A successor does not need to understand the site in order to update it.

Documentation. The repository includes a maintenance guide in Spanish covering
how to change photographs, add timeline entries, publish and regenerate assets,
written for someone who did not build the site. A second document records the
decisions that are not visible in the code, together with the mistakes made
during development, so a successor does not repeat them.

Maintenance record. Because the repository is public, its commit history is the
maintenance record: every change dated, described and attributable, open to
inspection at github.com/ramaieeeyt/ramaieeeyt.github.io. No separate reporting
had to be invented, and none can fall out of date.

Cost. The project used no budget: hosting, domain and every tool involved are
free. That matters for replication — any student branch in the Region can
reproduce this arrangement without asking its section for funding.
```

## VI. CONCLUSIONS

```
The objectives set out in Section I were met. The site presents the branch and
its six officers accurately, each with a direct contact; it makes eight IEEE
opportunities visible with links to official pages and states what membership
costs before asking for a decision; it lists six resources a member can open
today and ten chapters and affinity groups to join; it records ten milestones,
all ten traceable to a public source; and it is owned, structured and documented
so that people who did not build it can maintain it.

The most valuable outcome was unplanned. Requiring a public source for every
historical claim surfaced three errors in the branch's own record, one of which
credited us with an event organized by another university. A student branch
website is, in practice, the public memory of the organizational unit, and
holding it to the evidentiary standard expected of an IEEE publication seems to
us the correct bar — the alternative is a page that repeats its own mistakes to
every future reader.

The same discipline governed the technical work: the number, not the impression,
decided what to do. What looked expensive was cheap, the images nobody suspected
were not, a link returning HTTP 200 was a login wall, and a contrast that looked
fine measured 2.76:1.

For the next edition we intend to add published records of branch activities to
the Archive as they occur, keep the officer section current with each incoming
administration, and automate the Archive's synchronization with the branch's
Instagram account — the workflow is written and waits only on an access token.
These extend the site; they are not required for it to serve its readers today.
```

## REFERENCES

```
[1] IEEE vTools Events, "Inscripción de nuevos miembros a la Rama Estudiantil
Yachay Tech", 2019. [Online]. Available:
https://events.vtools.ieee.org/m/216744 [Accessed: August 15, 2026].

[2] IEEE Ecuador Section, "Reunión Nacional de Ramas Estudiantiles IEEE 2023",
2023. [Online]. Available:
https://r9.ieee.org/ecuador/reunion-nacional-de-ramas-estudiantiles-ieee-2023/
[Accessed: August 15, 2026].

[3] IEEE, "IEEE Brand Identity Guidelines", Q1 2025. [Online]. Available:
https://brand-experience.ieee.org/ [Accessed: August 15, 2026].

[4] IEEE vTools Events, "RNR IBARRA 2025", 2025. [Online]. Available:
https://events.vtools.ieee.org/m/497568 [Accessed: August 15, 2026].

[5] IEEE Yachay Tech University Student Branch, "Sitio web de la Rama", 2026.
[Online]. Available: https://ramaieeeyt.github.io [Accessed: August 15, 2026].
```

---

## FIGURAS

La plantilla pone la Figura 1 dentro de **III. Implementation**. Cinco figuras,
cada una respaldando el criterio que más pesa en su sitio:

- **Figura 1** — la portada con el lockup oficial y la barra. *(va en III)*
  *Fig. 1. Home page, showing the official branch lockup and IEEE Blue as the anchor colour.*
- **Figura 2** — Oportunidades, con el precio y las ocho tarjetas.
  *Fig. 2. Opportunities: membership cost stated first, then eight routes into IEEE, each linking to its official page.*
- **Figura 3** — la Directiva 2026.
  *Fig. 3. The 2026 Board: role, statement and a direct contact for each of the six officers.*
- **Figura 4** — la página de capítulos y grupos.
  *Fig. 4. Chapters and affinity groups, each with its official lockup.*
- **Figura 5** — la misma página en móvil y tableta, una junto a otra.
  *Fig. 5. The same content at 412 px and 834 px; responsive from 320 px with no horizontal overflow.*

Ponlas **a una columna**, no a doble ancho: a doble columna ocupan el triple.

---

## SI SE PASA DE 4 PÁGINAS

**Cuenta las páginas del PDF montado. No te fíes de ninguna estimación, ni de la
mía.** Con el cuerpo a 10 pt y el margen igualado, 2.689 palabras deberían caber
en unas 3,4 páginas contando la cabecera, la Tabla 1 y el hueco de la Figura 1.
Eso deja sitio para **tres o cuatro figuras**, no para cinco. Si vas a poner las
cinco, cuenta con recortar.

Recorta en este orden, comprobando el PDF después de cada paso:

| # | Qué quitas | Cuánto libera |
|---|---|---|
| 1 | La **Figura 3** (Directiva). Los seis cargos ya se nombran en el texto | ~0,2 pág |
| 2 | En **III**, el párrafo *Typography over the file system* entero | 90 palabras |
| 3 | En **IV**, el párrafo *Navigation* entero | 65 palabras |
| 4 | En **III**, de *Weight*: desde «Two font preloads» hasta el final | 40 palabras |
| 5 | En **V**, el párrafo *Cost* entero | 35 palabras |

**Lo que no debe caer, pase lo que pase:** los párrafos de contenido de la
Sección IV, la Tabla 1, *Ownership* y *Editability* de la Sección V, y las
Figuras 2 y 5. Son los que responden a los dos criterios que más pesan.

**No cites métricas de visitas.** No hay analíticas instaladas y las bases piden
veracidad.
