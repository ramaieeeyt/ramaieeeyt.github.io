# IEEE R9 Student Website Contest 2026 — Article

> **Lo que se entrega es `CONTEST-ARTICLE-V3-PLANTILLA.docx`.** Este archivo es
> el texto de referencia: para acordarse de por qué dice lo que dice, y para
> tener de dónde copiar si hay que rehacer algo en Word. Si editas aquí, el
> .docx **no** se entera: los cambios hay que hacerlos también allí.
>
> Fue la tercera de tres versiones. La primera vendía cosas que no están en la
> página, la segunda las quitó, y esta se reescribió contra los **cinco puntos
> que las bases piden** para la documentación (§3.2), en ese orden y con esas
> mismas palabras al principio de cada bloque, para que un jurado que va
> tachando la lista los encuentre sin buscar:
>
> | Lo que piden las bases | Dónde está |
> |---|---|
> | Overview and objectives of the website | **I**, párrafos 2 y 3 |
> | Description of the main sections and resources | **IV**, «Main sections and resources» |
> | Content strategy, including opportunities | **IV**, «Content strategy» |
> | Branding and communication strategy | **II**, «Branding and communication strategy» |
> | Website maintenance, sustainability, and future improvements | **V**, entera |
>
> «Future improvements» se movió de las conclusiones a la Sección V, porque las
> bases lo agrupan con mantenimiento y sostenibilidad, no con las conclusiones.
>
> Y en las oportunidades se nombran **las seis categorías que las bases usan
> como ejemplo** —becas, travel grants, concursos, eventos, voluntariado y
> programas IEEE— porque nuestras ocho tarjetas las cubren todas.
>
> **2.209 palabras**, frente a 2.689 de la segunda: **un 18 % menos**. Casi todo
> el recorte salió de la Sección III, que cuenta las dificultades y **no es
> ninguno de los cinco puntos**: pasó de 517 palabras a 237. Lo que las bases sí
> piden creció o se quedó igual.
>
> Si con la segunda salían 5 páginas, esta debería caer sobre **4,0**. Va justo,
> así que al final tienes una lista de recortes medida, ordenada de lo que menos
> duele a lo que más.
>
> **Del formato de la plantilla**, por si hay que rehacerlo: es **A4** a dos
> columnas de 3,42″, y su cuerpo viene a **12 pt**, que es lo que hacía que
> salieran seis páginas. En el .docx entregado el cuerpo está a **10 pt** —el
> estándar de artículo IEEE, y el que la propia plantilla usa en su resumen— y el
> margen inferior del cuerpo bajó de 3,00″ a 1,14″, igualándolo al superior,
> porque la plantilla se contradecía a sí misma. Títulos a 12 pt negrita y
> referencias a 9 pt, como venían.

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
arrives with, and presents six 2026 officers each with a direct contact, eight
routes into IEEE covering scholarships, travel grants, competitions, events,
volunteering and IEEE programmes, six IEEE tools, ten chapters and affinity
groups with their official lockups, and ten milestones all traceable to a public
source. It follows the IEEE Brand Identity Guidelines, was built with plain
HTML, CSS and JavaScript with no framework and no third-party request, keeps
every editable item in a single file, and belongs to the branch's GitHub
organization rather than to a person, so it can be handed over instead of
inherited. Sourcing the timeline corrected three errors in the branch's own
record.
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
search engine returned was three administrations out of date. The failure is
common and it is not a design failure: branch websites are built by one
volunteer, hosted on a personal account, and abandoned at graduation. A wrong
page is worse than none, because it tells a prospective member the branch is
inactive.

Overview. The deliverable is a public, responsive site at
https://ramaieeeyt.github.io: one scrolling page with nine sections and a
dedicated page for the branch's chapters and affinity groups, in Spanish for
Ecuadorian undergraduates, with IEEE programme names kept in their official
English form.

Objectives. The site had to (i) present the branch and its officers accurately,
with a direct way to reach each of them; (ii) make the concrete opportunities of
IEEE membership visible to students who do not know they exist, and state what
membership costs; (iii) record the branch's history so that any reader can
verify it independently; and (iv) be maintainable and transferable by people who
did not build it.
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
Instagram account, the IEEE Ecuador Section, IEEE vTools Events records and the
branch's page on edu.ieee.org. Officer photographs come from the branch's own
published carousel, re-cropped to a uniform frame.

Branding and communication strategy. Colour, typography and logo usage follow
the IEEE Brand Identity Guidelines, Q1 2025 [3]: the palette is declared as CSS
variables with the exact hexadecimal values from the guidelines, anchored on
IEEE Blue (#00629B), and Open Sans is used as IEEE's preferred web typeface. The
official branch lockup identifies the site and each chapter carries its own
official lockup, so a visitor can tell at a glance that this is an IEEE
organizational unit. Communication is deliberately many-doored rather than
centralized: every officer publishes a direct address next to their role, the
branch address and its Instagram account close the page, and each opportunity
links to the official IEEE page that owns it, so the site routes people onward
instead of becoming a bottleneck.

Verification and implementation. Every historical claim was checked against a
public source before publication, and the source recorded beside the data in the
code, so the next editor sees the evidence and not only the assertion. Every
outbound link was opened and read, not merely pinged. The site was built with
plain HTML, CSS and JavaScript, with no framework and no build step: a successor
needs a text editor and a browser, nothing else.
```

## III. IMPLEMENTATION

```
Three problems dominated the execution phase.

Verification was harder than expected. The branch's recollection of its own
history did not survive contact with the sources, and three errors were
corrected: the 2025 National Student Branch Meeting had been recorded as ours
when the vTools record shows it was hosted by Universidad Técnica del Norte with
our branch participating [4]; an enrolment of fifty-one members had been dated to
2023 instead of December 2019 [1]; and a claim about a mentoring programme had no
traceable source and was removed. We consider finding these a result of the
project rather than an obstacle to it.

Imagery and intellectual property. Illustrating the opportunities, the obvious
approach was to reuse the preview image each destination page publishes.
Inspecting them showed why it was wrong: one exposes a photograph of
identifiable award recipients, another a licensed stock photograph, and
republishing either would have meant hosting third-party material we have no
right to redistribute. We adopted a narrower rule — official IEEE programme
marks, which an organizational unit may legitimately display, and photographs
the branch owns.

Weight, measured rather than assumed. The animated background looked like the
expensive part and costs about one per cent of a processor core. The weight was
in the images: chapter lockups stored at 900 px and displayed at 124 px, which
rescaled to their real size fell from 3.0 MB to 216 kB with no visible
difference.
```

## IV. RESULTS

```
Main sections and resources. The site is public at https://ramaieeeyt.github.io
[5]. An identity block states the mission and carries university, location, IEEE
Region and branch code without scrolling. The Board section presents all six 2026
officers — Chair, Vice Chair, Secretary, Treasurer, Web Master and Membership —
each with a photograph, a personal statement and a direct email address, so a
visitor reaches the person responsible instead of a generic inbox. Resources
lists six IEEE tools a member can open today: IEEE Xplore, IEEE Spectrum,
Collabratec, IEEE Standards, IEEE Access and the conference calendar, with
membership requirements marked per item. A dedicated page presents the ten units
working inside the branch — eight technical chapters and the Women in
Engineering and SIGHT affinity groups — each with its official lockup and a link
to its society. The Timeline records ten milestones from 2019 to 2026, among
them first place nationally at IEEEXtreme 13.0, all traceable to a named public
source. An Archive of published pieces and a Join section close the page.

Content strategy. Opportunities is the section we consider most important, and
it opens with the number a student actually wants: membership costs roughly
USD 28 a year, about half that when enrolling after March, plus USD 1 to 13 per
technical society, attributed to the branch's membership guide and linked to
IEEE for the current rate. Eight routes follow, and between them they cover every
category the contest names: scholarships (IEEE Foundation), travel grants (IEEE
WIE), competitions (IEEEXtreme and the R9 SAC contests), events (IEEE Day and the
National Student Branch Meeting), volunteer opportunities (the branch's own
chapters) and IEEE programmes (student membership benefits). Each card carries
the official mark of the programme and links to its IEEE page. The section states
plainly that most of what it lists requires membership, because a student who
discovers that after applying does not come back. Opportunities and Resources
answer two different questions and the site keeps them apart: one is what you
apply to, the other what you already use. Joining is then reduced to three
actions in one place — obtain an IEEE membership, read the branch's membership
guide, or write to the branch.

Navigation and accessibility. Section links live in a fixed spine along the left
edge that doubles as a position indicator; links leading elsewhere stay in the
top bar. Checking produced corrections: one resource was dropped because it
answers HTTP 200 while serving a login wall, labels measuring 2.76:1 against
paper were raised to 5.23:1, and officer statements that lived only in a hover
state — invisible on every phone — now show by default where there is no pointer.

Technical results. The initial load transfers about 350 kB from a single origin,
with photographs fetched only as the reader reaches them. The site sets no
cookies, uses no local storage and makes no request to any third party — no
analytics, no CDN, no embedded widgets — verified in production. It is responsive
from 320 px upward with no horizontal overflow at any width, and carries
alternative text, ARIA attributes, visible focus states and
prefers-reduced-motion support.
```

**Tabla 1 — pégala donde la plantilla pone su Table 1:**

Table 1

| Criteria | Points | What the site provides |
| :--- | :---: | :--- |
| Content and Opportunities | 40 | 8 opportunities covering all six categories the contest names, 6 IEEE tools, 10 chapters and affinity groups, 6 officers, 10 sourced milestones, membership cost stated up front |
| Branding and IEEE Identity | 20 | IEEE Brand Identity Guidelines Q1 2025: exact palette on IEEE Blue #00629B, Open Sans, official branch and chapter lockups |
| Information Accessibility and Navigation | 15 | Fixed section spine with position indicator, separate page links, full keyboard navigation, contrast measured at 5.23:1 |
| Member Engagement and Recruitment | 15 | Price before the pitch, three ways to join in one place, a named contact for every officer |
| Technical Quality and Accessibility | 10 | ~350 kB from a single origin, responsive from 320 px, no cookies and no third-party request, prefers-reduced-motion honoured |

*Website evaluation criteria and the site's response to each.*

## V. CLOSING REMARKS

```
Maintenance and sustainability were design requirements, not afterthoughts, and
they are the part of this project most worth copying.

Ownership. The site is hosted on GitHub Pages under a GitHub organization owned
by the branch rather than by an individual. Officers are added as owners, so
access transfers with the role. There is no personal account to lose, which
addresses the failure described in Section I directly.

Editability. All content that changes between administrations — officers,
opportunities, resources, timeline entries, archive items — is defined in a
single object at the top of one file. Changing a name or adding a milestone means
editing one line, and it can be done from a browser through GitHub's web editor:
no software installed, no build to run, from any computer. A successor does not
need to understand the site in order to update it.

Documentation. The repository includes a maintenance guide in Spanish covering
how to change photographs, add entries, publish and regenerate assets, written
for someone who did not build the site, together with a record of the decisions
that are not visible in the code and of the mistakes made during development.

Maintenance record. Because the repository is public, its commit history is the
maintenance record: every change dated, described and attributable, open to
inspection at github.com/ramaieeeyt/ramaieeeyt.github.io. No separate reporting
had to be invented, and none can fall out of date. The project also used no
budget, which matters for replication: any branch in the Region can reproduce it
without asking its section for funding.

Future improvements. Four are planned, and they share one condition: nothing is
published that cannot keep itself current. An upcoming-events section will be
generated from the branch's own IEEE vTools Events records by a scheduled job,
so that it stays accurate without anyone remembering to update it, and renders
nothing when there is nothing to show rather than displaying an empty calendar.
Synchronization with the branch's Instagram account — already written, waiting
only on an access token — will feed both that section and the Archive with the
images the branch already publishes, stored as repository files so that they
outlive the expiry of Instagram's signed URLs. HERBIEEE, a section collecting
the branch's own visual culture, is built and stays hidden until there is enough
material to justify a section rather than a placeholder. Last, a short student
magazine: Section II records that a blog was left out because we had no
sustainable way to keep it honest, and that remains the condition — a named
editor in each administration and a fixed cadence come before the first issue,
not after it.
```

## VI. CONCLUSIONS

```
The objectives of Section I were met. The site presents the branch and its six
officers accurately, each with a direct contact; it makes eight IEEE
opportunities visible with links to official pages and states what membership
costs before asking for a decision; it lists six resources and ten units to join;
it records ten milestones, all traceable to a public source; and it is owned,
structured and documented so that people who did not build it can maintain it.

The most valuable outcome was unplanned. Requiring a public source for every
historical claim surfaced three errors in the branch's own record, one of which
credited us with an event organized by another university. A student branch
website is the public memory of the organizational unit, and holding it to the
evidentiary standard expected of an IEEE publication seems to us the correct bar:
the alternative is a page that repeats its own mistakes to every future reader.
The same discipline governed the technical work, where the number and not the
impression decided what to do.
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

La plantilla pone la Figura 1 dentro de **III. Implementation**.

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
*Supporting Evidence* son 10 puntos y pide pruebas visuales, así que las figuras
no son adorno: no las quites antes que el texto.

---

## SI SE PASA DE 4 PÁGINAS

**Cuenta las páginas del PDF montado.** Pasarse sale en las dos listas de las
bases: como **eliminación** en §4.4 y como −5 por página en §4.5. Se contradicen;
trátalo como eliminación.

Recorta en este orden y comprueba el PDF después de cada paso. Va ordenado de lo
que menos duele a lo que más, midiendo el daño contra **los cinco puntos que
piden las bases**:

| # | Qué quitas | Libera | Por qué duele poco |
|---|---|---|---|
| 1 | La **Figura 3** (Directiva) | ~0,2 pág | Los seis cargos ya se nombran en el texto |
| 2 | En **III**, *Weight, measured rather than assumed* entero | 57 palabras | Rendimiento no es ninguno de los cinco puntos |
| 3 | En **II**, *Source gathering* entero | 41 palabras | Tampoco lo es; las fuentes se ven en las referencias |
| 4 | En **IV**, *Navigation and accessibility* entero | 79 palabras | Puntúa en el sitio, no en el artículo |
| 5 | En **V**, *Documentation* entero | 50 palabras | Esto **sí** es mantenimiento: solo si no queda otra |

Los cuatro primeros suman 177 palabras más la figura: sobra para bajar media
página larga.

**Lo que no debe caer:** *Main sections and resources* y *Content strategy* de la
Sección IV, *Branding and communication strategy* de la II, *Ownership*,
*Editability* y *Future improvements* de la V, la Tabla 1, y las Figuras 2 y 5.
Ahí están los cinco puntos y los dos criterios que más pesan.

**No cites métricas de visitas.** No hay analíticas instaladas y las bases piden
veracidad.
