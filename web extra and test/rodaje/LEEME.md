# El modo de rodaje, retirado del sitio

Aquí está el código del recorrido automático que se usó para grabar el vídeo del
concurso. **Ya no está en la página**: se sacó el 16 de agosto de 2026, con el
vídeo grabado, para que `js/main.js` y `css/style.css` contengan solo lo que le
sirve a un visitante.

Estos ficheros no están enchufados a nada. Están por si algún año hace falta
grabar otro vídeo.

## Qué hacía

| URL | Qué pasaba |
|---|---|
| `?demo` | La página se recorría sola, con las paradas y los tiempos del guion, y enseñaba un cronómetro abajo a la derecha que se ponía rojo al pasar de 3:00 |
| `?demo=cine` | Lo mismo, más un puntero dibujado que se posaba en lo que se estaba nombrando, disparaba los estados de hover de verdad y hacía un clic visible en IEEEXtreme. Además imprimía en la consola una hoja de marcas con el segundo y el punto de pantalla de cada parada, para montar los zooms después |

Sin el parámetro en la URL no ocurría nada, así que un visitante normal nunca lo
veía. Se quitó igualmente: código que no sirve al visitante no debería estar en
la página.

## Qué hay aquí

```
rodaje/
├── rodaje.js               ← initDemo() e initCine(), tal cual salieron de main.js
├── rodaje.css              ← el cronómetro (.demo-hud) y la sección 15b del cursor
└── espejos-is-cursor.css   ← las 20 reglas que llevaban el espejo .is-cursor
```

Lo de `espejos-is-cursor.css` necesita explicación. **CSS no deja disparar
`:hover` desde JavaScript**, así que cada regla de hover que el puntero tenía que
provocar llevaba al lado una gemela con `.is-cursor`, y el JS ponía y quitaba esa
clase. Al retirar el rodaje se podaron esas 20 alternativas de sus selectores;
las reglas `:hover` se quedaron intactas.

## Cómo volver a montarlo

1. Pega el contenido de `rodaje.js` en `js/main.js`, justo antes del comentario
   `/* ===== 5. BOOT */`, y añade `initDemo();` al final de `boot()`.
2. Pega `rodaje.css` al final de `css/style.css`.
3. En cada selector de `espejos-is-cursor.css`, vuelve a añadir la alternativa
   `.is-cursor` a la regla `:hover` que le corresponde en `css/style.css`.
4. Sube la versión de `?v=` de los dos ficheros en el HTML, o el navegador
   servirá los viejos durante diez minutos.

El guion con los tiempos está en `../concurso/CONTEST-VIDEO-SCRIPT.md`.

## Lo que se comprobó al quitarlo

Con la página servida en local y cargada en el navegador: las diez secciones
presentes, 6 cargos, 8 oportunidades, 6 recursos, 10 hitos, 7 piezas del
archivo, los 10 capítulos con sus logotipos, el campo ASCII corriendo, el lomo
con sus 7 enlaces, cero peticiones fallidas, y las reglas `:hover` de `.opp`,
`.member`, `.cap` y `.tile` intactas en el CSSOM. Ni `.demo-hud` ni `.cursor`
aparecen ya en ninguna de las dos páginas.
