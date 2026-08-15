# IEEE R9 Student Website Contest 2026 — Article

**Cómo usar este archivo:** cada bloque de abajo corresponde a una sección de
`IEEE Website Contest - Article - Template.docx`. Pega el texto dentro del
.docx **respetando sus estilos** (no pegues con formato: usa *Pegar sin
formato* / ⌘⇧V) y exporta a PDF.

**El tope son 4 páginas y pasarse cuesta 5 puntos por página.** El texto son
2.258 palabras, unas 2,3 páginas en formato IEEE a dos columnas; con cinco
figuras la estimación queda en 3,8. Cabe, pero con poco margen, así que:

- pon las figuras **a una columna**, no a doble ancho — una figura a doble
  columna ocupa el triple;
- **cuenta las páginas del PDF antes de enviarlo**, no confíes en esta
  estimación;
- si se pasa, quita primero la **Figura 3** (la Directiva ya se nombra en el
  texto). Las Figuras 2 y 5 son las que no deben caer: respaldan *Content and
  Opportunities* (40 pts) y el requisito de diseño adaptable.

---

## TÍTULO

```
IEEE Yachay Tech University Student Branch
A Website Built as an Archive
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
Imbabura, Ecuador) rebuilt its web presence to solve that specific problem.
The site at ramaieeeyt.github.io was designed around three commitments: every
historical claim is traceable to a public IEEE source, every piece of editable
content lives in a single file, and the site is owned by a GitHub organization
rather than by a person. The result is a site built with plain HTML, CSS and
JavaScript — no frameworks, no build step, no third-party requests, no cookies
— presenting the branch's identity, its 2026 officers, eight opportunities open
to IEEE student members, its ten technical chapters and affinity groups, and a
fact-checked timeline reaching back to the branch's founding in late 2019.
Three factual errors were found and corrected in our own historical record
during development. The site is responsive from 375 px to desktop, follows
accessibility practices, and is prepared for automated synchronization with the
branch's Instagram account.
```

## KEYWORDS

```
Keywords — Student Branch, website, IEEE branding, accessibility,
sustainability, R9.
```

---

## I. INTRODUCTION

```
The IEEE Yachay Tech University Student Branch was formally constituted before
IEEE in late 2019 [1]. In the years since, it has organized national congresses,
competed in IEEEXtreme, founded a Women in Engineering affinity group, and won
the branch fair at the 2023 National Student Branch Meeting [2]. Almost none of
that was visible online.

The problem is not unique to our branch, and it is not really a design problem.
Student branch websites are typically built by one enthusiastic volunteer,
hosted on a personal account, and abandoned when that volunteer graduates. The
information they contain ages badly because updating it requires the original
author. Prospective members searching for the branch find either nothing or
something three administrations out of date.

Our objective was therefore narrower and more demanding than "make a website".
We set out to build a site that (i) presents the branch and its officers
accurately, (ii) makes the concrete opportunities of IEEE membership visible to
students who do not yet know they exist, (iii) records the branch's history in a
way that can be independently verified, and (iv) can be maintained and handed
over by people who did not build it.

The deliverable is a public, responsive, single-page site at
https://ramaieeeyt.github.io, together with the maintenance infrastructure
described in Section V.
```

## II. METHODOLOGY

```
The work followed four stages.

Source gathering. Content was drawn from the branch's Instagram account
(@ramaieeeyt), the IEEE Ecuador Section, IEEE vTools Events records, and the
branch's page on edu.ieee.org. Photographs of the 2026 officers were taken from
the branch's own published carousel and re-cropped to a uniform 4:5 frame with
an automated pipeline, so that every portrait shares the same head size and eye
line.

Brand compliance. Colour, typography and logo usage follow the IEEE Brand
Identity Guidelines (Q1 2025). The full IEEE palette is declared as CSS
variables with the exact hexadecimal values from the guidelines; IEEE Blue
(#00629B) anchors the design. Open Sans is used as IEEE's preferred web
typeface, and Adobe Caslon Pro — IEEE's secondary typeface, permitted for
headlines — appears in italic accents, drop caps and the signature, with an
open-source Caslon revival as fallback. The official branch lockup is used in
the header and as the page title.

Verification. Every historical claim on the site was checked against a public
source before publication, and the source is recorded as a comment beside the
data. Every outbound link was tested for a valid response.

Implementation. The site was built with plain HTML, CSS and JavaScript, with no
frameworks and no build step, deliberately: a future maintainer needs only a
text editor and a browser.
```

## III. IMPLEMENTATION

```
Four problems dominated the execution phase.

Verification was harder than expected. The branch's own recollection of its
history did not survive contact with the sources. Three errors were found and
corrected. First, the 2025 National Student Branch Meeting (RNR Ibarra 2025) was
initially recorded as organized by our branch; the IEEE vTools record shows it
was held 26–28 September 2025 at Universidad Técnica del Norte [3], and our
branch participated. The confusion arose because a separate vTools entry is a
participation report filed by our chapter, whose "host organization" field names
the author of the report, not the organizer of the event. Second, an enrolment
of 51 members had been attributed to 2023; the vTools record dates it to 19–20
December 2019 [4], immediately after the branch was founded. Third, a claim
about joining a university mentoring programme had no traceable source and was
removed. We consider finding these errors a result of the project, not an
obstacle to it.

Typography over the file system. The site is designed to open directly from
disk, without a server, so that any officer can review it before publishing.
Browsers refuse to load font files over the file:// protocol, which silently
replaced the whole typographic system with fallbacks. The Latin subsets are
therefore embedded in the stylesheet as base64 data URIs, which always resolve;
the rendering was then measured to confirm the real typefaces were in use.

Content longevity. Instagram image URLs are signed and expire within days, so
the synchronization described in Section V downloads and re-crops images into
the repository rather than linking to them.

Imagery and intellectual property. When we illustrated the Opportunities
section, the obvious approach was to reuse the preview image each destination
page publishes. Inspecting them showed why that was the wrong approach: the IEEE
Foundation page exposes a photograph of identifiable award recipients, and the
IEEE WIE page a licensed stock photograph. Republishing either would have meant
hosting third-party material we have no right to redistribute. We adopted a
narrower rule instead — official IEEE programme marks, which an IEEE
organizational unit may legitimately display, and photographs the branch itself
owns. Seven cards use official marks, one uses our own photograph, and none
reuses third-party imagery.

Weight, measured rather than assumed. Reviewing performance, the animated
background was the obvious suspect and the wrong one: a frame costs 0.66 ms to
write and 0.61 ms to build at about eleven frames per second — roughly one per
cent of a processor core — and it stops when off screen. The weight was in the
images. The chapter lockups were stored at 900 px and displayed at 124 px, or at
42 px on the home page: three megabytes for marks a few pixels tall. Rescaled to
the size they are actually shown at and reduced to an indexed palette, the set
fell from 3.0 MB to 216 kB, a factor of 13.7, with no difference visible when
old and new are compared side by side at twice their displayed size. Two font
preloads were also removed — they pointed at files no font rule uses, costing
58 kB per visit for nothing — and two endless animations were paused while off
screen. In each case the measurement came first, and it redirected the effort
away from what looked expensive towards what was.
```

## IV. RESULTS

```
The site is public at https://ramaieeeyt.github.io. A single scrolling page
carries eight sections — branch identity, IEEE at global scale, the 2026 Board,
Opportunities, Resources, a visual Archive, a sourced Timeline, Join the Branch
and Contact — and a dedicated page presents the branch's chapters and affinity
groups.

Content. The Opportunities section presents eight concrete routes into IEEE for
students: IEEEXtreme, IEEE Foundation scholarships, IEEE WIE travel grants,
student membership benefits, R9 SAC contests, IEEE Day, volunteering within the
branch's chapters, and the National Student Branch Meeting. Each card carries
the official mark of the programme it leads to and links to the corresponding
IEEE page. Joining is reduced to three actions in one place: obtain an IEEE
membership, read the branch's membership guide, or write to the branch. The
Board section presents all six 2026 officers with role, photograph, personal
statement and contact. The Timeline records ten milestones from 2019 to 2026,
tagged as award, milestone or meeting.

Opportunities and Resources answer two different questions, and the site keeps
them apart. Opportunities is what a student applies to; Resources is what a
member already uses — IEEE Xplore, IEEE Spectrum, Collabratec, IEEE Standards,
IEEE Access and the conference calendar. Both say plainly that most of what they
list requires IEEE membership, and Opportunities carries the price: roughly USD
28 a year, about half that when enrolling after March, plus USD 1 to 13 for each
technical society. A student deciding whether to join should not have to hunt
for the cost, and the figures are attributed to the branch's own membership
guide with a link to IEEE for the current rate. The Chapters page presents the branch's
eight technical chapters — Computer Society, EMBS, Electronics Packaging,
Circuits and Systems, Robotics and Automation, Geoscience and Remote Sensing,
Computational Intelligence and the Nanotechnology Council — together with its
two affinity groups, Women in Engineering and SIGHT, each with the official
chapter lockup from the branch's own brand manual and a link to its society.

Navigation. Section links and page links were separated once the menu grew past
what a single bar carries comfortably. Links that move within the page live in a
fixed spine along the left edge, folded to a strip of marks that expands on
hover, keyboard focus or tap; links that lead elsewhere stay in the top bar. The
spine also acts as a position indicator, marking the section currently in view.

Verifiability. Ten of ten timeline entries are traceable to a named public
source, recorded in the source code beside the data. All outbound links were
tested and resolve to their intended pages. One resource was dropped during that
check: the IEEE Learning Network answers HTTP 200, but the page it serves is a
login wall, so to a visitor who is not yet a member it reads as a dead link. A
status code is not a working link.

Technical. Weight and accessibility were measured, not assumed, and both
produced corrections. The chapter marks were being served at 900 px for a 124 px
slot, and the home page downloaded 1.8 MB of them for six 42 px stamps; rescaled
to their real size they fell from 3.0 MB to 216 kB — a factor of 13.7 — with no
visible difference when compared side by side at twice their display size. Two
font preload tags were fetching 58 kB per visit that no @font-face ever used.
Labels set at 42 % ink measured 2.76:1 against paper, below the 4.5:1 that WCAG
AA asks of small text, and were raised to a measured 5.23:1. Officer statements
lived only in a hover state and were therefore invisible on every phone; they
now show by default where there is no pointer. Between 861 and 1099 px the
layout offered neither the spine nor the hamburger menu, so eight links crowded
the bar and spilled off the right edge — precisely where a tablet in landscape
lands; the two thresholds now meet.

The page spacing follows a Fibonacci scale — 8, 13, 21, 34, 55, 89, 144 px, each
step about 1.618 times the last — so that the distances between blocks hold a
constant relation instead of being chosen one by one.

A first visit transfers 497 kB, from a single origin. The site sets
no cookies, uses no local storage, and makes no request to any third party — no
analytics, no CDN, no embedded widgets — which was verified in production. It is
responsive from 320 px to desktop with no horizontal overflow at any width, and
was checked at the common phone, tablet and desktop sizes. Accessibility
measures include alternative text on images, ARIA attributes on the menu,
lightbox and spine, full keyboard navigation, visible focus states, a minimum
label size and touch targets sized for a finger on small screens, and compliance
with prefers-reduced-motion, which disables all animation for users who request
it. Content that depends on hovering is shown by default on devices without a
pointer.
```

**Tabla sugerida (reemplaza la Table 1 del template):**

| Section | Purpose for the visitor |
| :--- | :--- |
| What the Branch is | Identity, mission, key facts |
| IEEE worldwide | Scale and credibility of IEEE |
| Board 2026 | Officers, roles and direct contact |
| **Opportunities** | Scholarships, grants, competitions — and what membership costs |
| **Resources** | IEEE tools a member can open today |
| Chapters and affinity groups | The ten units students can join |
| Archive | Recent published activity |
| Timeline | Verified history, 2019–2026 |
| Join the Branch | Membership guide and enrolment |

## V. CLOSING REMARKS

```
Replicability was a design requirement, not an afterthought.

Ownership. The site is hosted on GitHub Pages under a GitHub organization owned
by the branch, not by an individual. Officers are added as owners, so access
transfers with the role rather than with a person. This directly addresses the
failure mode described in Section I.

Editability. All content that changes between administrations — officers,
opportunities, timeline entries, archive items — is defined in a single
JavaScript object at the top of one file. Changing a name or adding a milestone
requires editing one line, and can be done from a browser through GitHub's web
editor, with no software installed and from any computer.

Automation. A scheduled GitHub Action is in place to synchronize the Archive
with the branch's Instagram account: it retrieves new posts once a day,
downloads and re-crops the images into the repository, and regenerates the
index. Because the images become repository files, the archive does not decay
when Instagram's signed URLs expire, and the site continues to function if the
API changes. The workflow is written and tested; it activates once the branch
provides an access token.

Documentation. The repository includes a maintenance guide in Spanish covering
how to change photographs, add timeline entries, publish, and regenerate assets,
written for a successor who did not build the site. A second document records
the decisions that are not obvious from the code — why the fonts are embedded,
why the chapter marks sit on light plates over the dark field, why each
threshold is where it is — together with the errors made during development, so
that a successor does not repeat them.

Maintenance record. Because the repository is public, the commit history is
itself the maintenance record: every change is dated, described and attributable,
and it is open to inspection by the evaluation committee at
github.com/ramaieeeyt/ramaieeeyt.github.io.
```

## VI. CONCLUSIONS

```
The objectives set out in Section I were met. The site presents the branch and
its 2026 officers accurately; it makes eight concrete IEEE opportunities visible
with direct links to official pages and states what membership costs; it lists
six resources a member can use today; it presents the branch's ten chapters and
affinity groups with their official lockups; it records ten verified milestones
with traceable sources; and it is structured, owned and documented so that it
can be maintained by people who did not build it.

The most valuable outcome was unplanned. Requiring a public source for every
historical claim surfaced three errors in our own record, one of which
attributed to our branch an event organized by another university. A student
branch website is, in practice, the public memory of the organizational unit,
and treating it with the same evidentiary discipline expected of an IEEE
publication seems to us the correct standard.

The same discipline applied to the technical work. Every performance and
accessibility claim was measured before it was acted on, and measurement
repeatedly redirected the effort. The animated background looked like the
expensive part and cost 1.3 ms a frame; the images nobody suspected cost 1.8 MB
on the home page alone. A link that returned HTTP 200 turned out to be a login
wall. A contrast that looked fine measured 2.76:1. In each case the number, not
the impression, decided what to do.

For future editions we intend to activate the Instagram synchronization —
written and tested, waiting only on an access token — add an upcoming events
calendar, and restore HERBIEEE, the branch's informal archive, which is built
and hidden until there is enough material to justify a section rather than a
placeholder.
```

## REFERENCES

```
[1] Wikipedia, "Universidad Yachay Tech", 2026. [Online]. Available:
https://es.wikipedia.org/wiki/Universidad_Yachay_Tech [Accessed: August 3, 2026].

[2] IEEE Ecuador Section, "Reunión Nacional de Ramas Estudiantiles IEEE 2023",
2023. [Online]. Available:
https://r9.ieee.org/ecuador/reunion-nacional-de-ramas-estudiantiles-ieee-2023/
[Accessed: August 3, 2026].

[3] IEEE vTools Events, "RNR IBARRA 2025", 2025. [Online]. Available:
https://events.vtools.ieee.org/m/497568 [Accessed: August 3, 2026].

[4] IEEE vTools Events, "Inscripción de nuevos miembros a la Rama Estudiantil
Yachay Tech", 2019. [Online]. Available:
https://events.vtools.ieee.org/m/216744 [Accessed: August 3, 2026].

[5] IEEE, "IEEE Brand Identity Guidelines", Q1 2025. [Online]. Available:
https://brand-experience.ieee.org/ [Accessed: August 3, 2026].
```

---

## FIGURAS

El criterio *Supporting Evidence* vale 10 puntos y pide pruebas visuales.
Cinco figuras, elegidas para respaldar el criterio que más pesa en cada caso:

- **Figura 1** — la portada con el lockup oficial y la barra.
  *Fig. 1. Home page, showing the official branch lockup and IEEE Blue as the anchor colour.*
- **Figura 2** — Oportunidades, con las ocho tarjetas.
  *Fig. 2. Opportunities section, presenting eight routes into IEEE with direct links to official pages.*
- **Figura 3** — la Directiva 2026.
  *Fig. 3. The 2026 Board, with role, statement and direct contact for each officer.*
- **Figura 4** — la página de capítulos y grupos.
  *Fig. 4. Chapters and affinity groups page, with the official lockup of each of the ten units.*
- **Figura 5** — la misma página en móvil y tableta, una junto a otra.
  *Fig. 5. The same content at 390 px and 768 px; the site is responsive from 375 px with no horizontal overflow.*

Si el espacio aprieta, la que primero sobra es la Figura 3: los cargos ya se
nombran en el texto. Las Figuras 2 y 5 no deberían caer — respaldan los dos
criterios de más peso.
