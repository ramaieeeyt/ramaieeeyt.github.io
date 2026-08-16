# web extra and test

Todo lo que **no es la página**. Vive aquí para que la raíz del repositorio sea
el sitio y nada más, y para que su historial se lea como lo que debe ser: el
registro de mantenimiento de la web.

## Qué hay

```
web extra and test/
├── concurso/
│   ├── CONTEST-ARTICLE-V3-PLANTILLA.docx  ← el artículo, lo que se entrega
│   ├── CONTEST-ARTICLE-V3.md              ← ese mismo texto, de referencia
│   ├── CONTEST-ENTREGA.md                 ← qué se sube y qué no, leído del PDF
│   └── CONTEST-VIDEO-SCRIPT.md            ← el guion del vídeo de 3 minutos
└── rodaje/                    ← el recorrido automático `?demo`, ya retirado
    ├── rodaje.js              ← initDemo() e initCine()
    ├── rodaje.css             ← el cronómetro y el cursor dibujado
    └── espejos-is-cursor.css  ← las 20 reglas gemelas de :hover
```

## Por qué está separado

El *IEEE R9 Student Website Contest* puntúa **Website Management and
Sustainability** con 25 de los 100 puntos del artículo, y lo que se enseña como
prueba de mantenimiento es el historial público de commits. Si en ese historial
se mezclan «tercera versión del artículo» y «arreglado el menú en móvil», deja
de leerse.

Así que a partir del **16 de agosto de 2026** la regla es:

- **Un commit que toca la página no toca esta carpeta**, y al revés.
- Los mensajes de los commits de la raíz hablan de la página: qué cambió, para
  quién y por qué.
- Lo de aquí dentro puede ser tan desordenado como haga falta.

## Una nota sobre el historial anterior

Los commits del 1 al 16 de agosto de 2026 sí están mezclados: la web y el
concurso se hicieron a la vez. **No se reescribió el historial a propósito.**
Reescribirlo habría cambiado todos los identificadores, y el artículo entregado
apunta a `github.com/ramaieeeyt/ramaieeeyt.github.io` precisamente como prueba de
que cada cambio está fechado y es atribuible. Romper eso para que quedara bonito
habría sido romper la prueba.

De aquí en adelante sí queda separado.

## El modo de rodaje también salió

`?demo` y `?demo=cine` vivían dentro de `js/main.js` y `css/style.css`. Con el
vídeo ya grabado se retiraron: 205 líneas de JavaScript, 31 de CSS y 20 reglas
gemelas `.is-cursor`. El código está en `rodaje/`, con instrucciones para volver
a montarlo. La página quedó comprobada después, sección por sección.
