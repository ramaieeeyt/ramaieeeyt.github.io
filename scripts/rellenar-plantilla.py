# -*- coding: utf-8 -*-
"""Mete el texto de CONTEST-ARTICLE-V2.md dentro de la plantilla oficial.

Conserva la plantilla tal cual —A4, dos columnas, sus estilos, su tabla, su
hueco de figura— y solo cambia el texto de relleno por el nuestro. Así el
documento sigue siendo «la plantilla», que es criterio de eliminación.

Lo único que toca del formato es el tamaño del cuerpo: la plantilla trae 12 pt
y eso son 6 páginas. Se baja a 10 pt, que es el estándar de artículo IEEE y el
que la propia plantilla usa en su resumen.

    python3 scripts/rellenar-plantilla.py [plantilla.docx] [salida.docx]
"""
import io, os, re, sys, shutil, zipfile, tempfile

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLANTILLA = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser(
    '~/Downloads/IEEE Website Contest - Article - Template.docx')
SALIDA = sys.argv[2] if len(sys.argv) > 2 else os.path.join(
    BASE, 'CONTEST-ARTICLE-V2-PLANTILLA.docx')
CUERPO_PT = 10          # tamaño del cuerpo; la plantilla trae 12

# La plantilla deja el margen inferior del cuerpo en 4320 twips (3 pulgadas)
# mientras el superior es 1641 (1,14). Se contradice a si misma, y esas dos
# pulgadas de mas son un cuarto de cada pagina. Se igualan los dos. Pon None
# si prefieres no tocar nada de la plantilla.
MARGEN_INFERIOR = 1641

# ------------------------------------------------------------ el texto
src = io.open(os.path.join(BASE, 'CONTEST-ARTICLE-V2.md'), encoding='utf-8').read()

bloques = {}
for m in re.finditer(r'^## (.+?)\n(.*?)(?=^## |\Z)', src, re.S | re.M):
    titulo, resto = m.group(1).strip(), m.group(2)
    f = re.search(r'```\n(.*?)```', resto, re.S)
    if not f:
        continue
    cuerpo = f.group(1)
    if titulo in ('TÍTULO', 'BLOQUE DE AUTORES'):
        bloques[titulo] = [l.strip() for l in cuerpo.split('\n') if l.strip()]
    else:
        bloques[titulo] = [' '.join(x.split()) for x in cuerpo.split('\n\n') if x.strip()]

tabla = []
for linea in src[src.index('| Criteria |'):].split('\n'):
    if not linea.startswith('|'):
        break
    if '---' not in linea:
        tabla.append([c.strip() for c in linea.strip().strip('|').split('|')])

# la plantilla deja la tabla en una sola columna estrecha: dos columnas caben,
# tres no. Se juntan criterio y puntos.
TABLA2 = [['Criteria', 'What the site provides']] + \
         [['%s (%s)' % (f[0], f[1]), f[2]] for f in tabla[1:]]

REFS = bloques['REFERENCES']

def esc(t):
    return (t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))

# ------------------------------------------------------------ abrir el .docx
tmp = tempfile.mkdtemp()
with zipfile.ZipFile(PLANTILLA) as z:
    z.extractall(tmp)
ruta = os.path.join(tmp, 'word', 'document.xml')
doc = io.open(ruta, encoding='utf-8').read()

ini = doc.index('<w:body>') + len('<w:body>')
fin = doc.index('</w:body>')
cab, body, pie = doc[:ini], doc[ini:fin], doc[fin:]

# ------------------------------------------------------------ trocear el cuerpo
trozos = []          # (tipo, xml)
pos = 0
while pos < len(body):
    m = re.compile(r'<(w:p|w:tbl|w:sectPr)[ >]').search(body, pos)
    if not m:
        trozos.append(('cola', body[pos:]))
        break
    if m.start() > pos:
        trozos.append(('cola', body[pos:m.start()]))
    tag = m.group(1)
    cierre = body.index('</%s>' % tag, m.start()) + len(tag) + 3
    trozos.append((tag, body[m.start():cierre]))
    pos = cierre

parr = [i for i, (t, _) in enumerate(trozos) if t == 'w:p']

def texto_de(xml):
    return ''.join(re.findall(r'<w:t[^>]*>(.*?)</w:t>', xml, re.S))

def clonar(xml, textos, pt=None):
    """Devuelve len(textos) parrafos con el formato de xml y el texto nuevo."""
    ppr = re.search(r'<w:pPr>.*?</w:pPr>', xml, re.S)
    ppr = ppr.group(0) if ppr else ''
    run = re.search(r'<w:r[ >].*?</w:r>', xml, re.S)
    rpr = ''
    if run:
        r = re.search(r'<w:rPr>.*?</w:rPr>', run.group(0), re.S)
        rpr = r.group(0) if r else ''
    if pt:
        n = str(pt * 2)
        ppr = re.sub(r'<w:sz w:val="\d+"/>', '<w:sz w:val="%s"/>' % n, ppr)
        ppr = re.sub(r'<w:szCs w:val="\d+"/>', '<w:szCs w:val="%s"/>' % n, ppr)
        rpr = re.sub(r'<w:sz w:val="\d+"/>', '<w:sz w:val="%s"/>' % n, rpr)
        rpr = re.sub(r'<w:szCs w:val="\d+"/>', '<w:szCs w:val="%s"/>' % n, rpr)
    salida = []
    for t in textos:
        salida.append('<w:p>%s<w:r>%s<w:t xml:space="preserve">%s</w:t></w:r></w:p>'
                      % (ppr, rpr, esc(t)))
    return ''.join(salida)

# ------------------------------------------------------------ el plan
# Se localiza cada hueco por su texto de relleno, no por su posicion: si la
# plantilla cambia de orden el script falla en voz alta en vez de escribir el
# texto en el sitio equivocado.
# Se busca en orden de documento y hacia adelante, asi los fragmentos que se
# repiten ("IEEE Day" sale en el subtitulo y en las palabras clave) caen cada
# uno en su sitio.
_visto = [-1]
def hueco(fragmento):
    for k in parr:
        if k > _visto[0] and fragmento in texto_de(trozos[k][1]):
            _visto[0] = k
            return k
    raise AssertionError('no encuentro %r despues del hueco anterior' % fragmento)

titulo = bloques['TÍTULO']
FIG1 = ('Figure 1. Home page, showing the official branch lockup and IEEE Blue '
        'as the anchor colour.')

plan = [
    ('Name of the Student Branch',   [titulo[0]],                    None),
    ('IEEE Day',                     [titulo[1]],                    None),
    ('Abstract—This abstract',       bloques['ABSTRACT'],              10),
    ('Points that can be covered',   [],                             None),
    ('Keywords — IEEE Day',          bloques['KEYWORDS'],              10),
    ('The introduction should',      bloques['I. INTRODUCTION'], CUERPO_PT),
    ('Here one should detail',       bloques['II. METHODOLOGY'], CUERPO_PT),
    ('During the project execution', bloques['III. IMPLEMENTATION'], CUERPO_PT),
    ('Figure 1',                     [FIG1],                            9),
    ('In this part it is necessary', bloques['IV. RESULTS'],    CUERPO_PT),
    ('The results should show',      [],                             None),
    ('Article Evaluation Criteria',
     ["Website evaluation criteria and the site's response to each."],          9),
    ('After the event',              bloques['V. CLOSING REMARKS'], CUERPO_PT),
    ('This is the time to reason',   bloques['VI. CONCLUSIONS'], CUERPO_PT),
    ('R9 SAC Team',                  REFS,                              9),
]
for fragmento, textos, pt in plan:
    k = hueco(fragmento)
    trozos[k] = ('w:p', clonar(trozos[k][1], textos, pt) if textos else '')

# ------------------------------------------------------------ la tabla
tbl = [i for i, (t, _) in enumerate(trozos) if t == 'w:tbl']
assert len(tbl) == 2, 'esperaba 2 tablas, hay %d' % len(tbl)

# tabla de autores (la primera): una linea por autor
xml = trozos[tbl[0]][1]
celda = re.search(r'<w:tc>.*?</w:tc>', xml, re.S).group(0)
modelo = re.search(r'<w:p[ >].*?</w:p>', celda, re.S).group(0)
nueva = clonar(modelo, bloques['BLOQUE DE AUTORES'], 10)
celda2 = celda[:celda.index('<w:p')] + nueva + '</w:tc>'
trozos[tbl[0]] = ('w:tbl', xml[:xml.index('<w:tc>')] + celda2 +
                  xml[xml.index('</w:tc>') + 7:])

# tabla de criterios (la segunda)
xml = trozos[tbl[1]][1]
fila = re.search(r'<w:tr[ >].*?</w:tr>', xml, re.S).group(0)
celdas = re.findall(r'<w:tc>.*?</w:tc>', fila, re.S)
assert len(celdas) == 2, 'la tabla de criterios tiene %d columnas' % len(celdas)
modelo_p = re.search(r'<w:p[ >].*?</w:p>', celdas[0], re.S).group(0)

filas = []
for f in TABLA2:
    cs = []
    for j, txt in enumerate(f):
        base = celdas[j]
        cuerpo_celda = clonar(modelo_p, [txt], 9)
        cs.append(base[:base.index('<w:p')] + cuerpo_celda + '</w:tc>')
    filas.append(fila[:fila.index('<w:tc>')] + ''.join(cs) + '</w:tr>')
trozos[tbl[1]] = ('w:tbl', xml[:xml.index('<w:tr')] + ''.join(filas) + '</w:tbl>')

# ------------------------------------------------------------ guardar
nuevo = cab + ''.join(x for _, x in trozos) + pie
if MARGEN_INFERIOR:
    nuevo = nuevo.replace('w:bottom="4320"', 'w:bottom="%d"' % MARGEN_INFERIOR)
io.open(ruta, 'w', encoding='utf-8').write(nuevo)

if os.path.exists(SALIDA):
    os.remove(SALIDA)
zf = zipfile.ZipFile(SALIDA, 'w', zipfile.ZIP_DEFLATED)
for raiz, _, ficheros in os.walk(tmp):
    for f in ficheros:
        p = os.path.join(raiz, f)
        zf.write(p, os.path.relpath(p, tmp))
zf.close()
shutil.rmtree(tmp)

print('escrito :', os.path.basename(SALIDA))
print('cuerpo  :', CUERPO_PT, 'pt (la plantilla trae 12)')
print('margen  :', ('inferior %d twips (la plantilla trae 4320)' % MARGEN_INFERIOR)
                   if MARGEN_INFERIOR else 'sin tocar')
print('tabla   :', len(TABLA2), 'filas x 2 columnas')
