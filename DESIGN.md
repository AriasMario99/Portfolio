---
version: alpha
name: Mario Alejandro Arias portfolio
description: "Portfolio oscuro de un director audiovisual. Fondo negro cálido (#0e0d0b), texto color papel (#ece5d8) y un único verde (#a3cc65) para todo el texto secundario, los enlaces activos, el foco y el botón de reproducir. Títulos en Big Shoulders Display 700/800 en mayúsculas, texto en Inter 400, datos cortos en IBM Plex Mono en mayúsculas. Sin sombras ni esquinas redondeadas: la jerarquía la dan el tamaño de letra, el espacio y líneas finas. Las imágenes (fotogramas, fotos en 35 mm, pósters) son el protagonista."
colors:
  canvas: "#0e0d0b"        # fondo de toda la web
  surface: "#181613"       # fondo de imágenes que cargan y recuadros pendientes
  hairline: "#2c2924"      # líneas finas decorativas (filas de la ficha, cabecera)
  hairline-strong: "#6e675c" # borde de botones (3.5:1 sobre canvas)
  ink: "#ece5d8"           # texto principal
  ink-secondary: "#a3cc65" # texto secundario: etiquetas, metadatos, pie
  accent: "#a3cc65"        # mismo verde: enlace activo, hover, foco, "Reproducir"
  on-accent: "#0e0d0b"     # texto sobre el verde
typography:
  display-home:  { fontFamily: Big Shoulders Display, fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", fontWeight: 700, lineHeight: 1, letterSpacing: 0.03em, textTransform: uppercase }
  page-title:    { fontFamily: Big Shoulders Display, fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: 0.01em, textTransform: uppercase }
  section-title: { fontFamily: Big Shoulders Display, fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", fontWeight: 700, lineHeight: 1, textTransform: uppercase }
  card-title:    { fontFamily: Big Shoulders Display, fontSize: 1.375rem, fontWeight: 700, lineHeight: 1.1, letterSpacing: 0.02em, textTransform: uppercase }
  lede:          { fontFamily: Inter, fontSize: 1.375rem, fontWeight: 400, lineHeight: 1.45 }
  body:          { fontFamily: Inter, fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.6 }
  sheet-value:   { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  label:         { fontFamily: IBM Plex Mono, fontSize: 0.75rem, fontWeight: 400, letterSpacing: 0.08em, textTransform: uppercase }
rounded: { none: 0 }
spacing: { 1: 4px, 2: 8px, 3: 12px, 4: 16px, 5: 24px, 6: 32px, 7: 48px, 8: 72px, 9: 112px }
components:
  site-header:   { backgroundColor: "{colors.canvas}", borderBottom: "1px {colors.hairline}", height: 68px }
  nav-link:      { typography: "{typography.label}", textColor: "{colors.ink}" }
  nav-link-active: { textColor: "{colors.accent}", borderBottom: "1px {colors.accent}" }
  lang-switch:   { typography: "{typography.label}", border: "1px {colors.hairline-strong}", textColor: "{colors.ink-secondary}" }
  lang-switch-active: { backgroundColor: "{colors.ink}", textColor: "{colors.canvas}" }
  button-play:   { backgroundColor: "{colors.accent}", textColor: "{colors.on-accent}", typography: "{typography.label}", padding: 12px 16px, rounded: "{rounded.none}" }
  button-outline: { border: "1px {colors.hairline-strong}", typography: "{typography.label}", padding: 8px 12px }
  card:          { gap: 16px, image: "16:9 (cine, vídeo) o 1:1 (álbumes, discos)", title: "{typography.card-title}", meta: "{typography.label}" }
  film-sheet-row: { borderBottom: "1px {colors.hairline}", columns: "9.5rem 1fr", label: "{typography.label}", value: "{typography.sheet-value}" }
  placeholder:   { backgroundColor: "{colors.surface}", pattern: "rayas diagonales 135°", border: "1px dashed {colors.hairline}" }
---

# DESIGN.md · Mario Alejandro Arias

Cómo debe verse la web. Si cambias o añades algo, sigue este archivo. Los valores reales viven en
`assets/styles.css` (sección 1, tokens); aquí se explica qué es cada uno y dónde se usa.

## Overview

Una hoja de contactos de película: negro cálido, texto color papel y un solo color, el verde
`#a3cc65`. El trabajo de Mario (fotogramas, fotos en 35 mm, pósters) es lo que da color a la página;
la interfaz se queda quieta alrededor.

**Key Characteristics**
- Un solo tema, oscuro. No hay modo claro.
- Un único color: el verde, para todo lo secundario y lo interactivo.
- Títulos condensados en mayúsculas; texto en Inter; datos cortos en mono, como el borde del negativo.
- Sin sombras, sin esquinas redondeadas, sin degradados.
- Separación con espacio y líneas finas, nunca con cajas.
- Portada de una sola pantalla según el boceto de Bernardo (ver `docs/prompt-portada.md`).

## Colors

| Token | Valor | Uso |
|---|---|---|
| `--bg` canvas | `#0e0d0b` | Fondo de todas las páginas. |
| `--surface` | `#181613` | Fondo mientras carga una imagen y recuadros "imagen pendiente". |
| `--line` hairline | `#2c2924` | Líneas decorativas: filas de la ficha, cabecera, pie. |
| `--line-strong` | `#6e675c` | Borde de botones (idioma, menú, copiar, cerrar). |
| `--text` ink | `#ece5d8` | Títulos y texto principal. |
| `--muted` ink-secondary | `#a3cc65` | Rol de la portada, etiquetas, metadatos, pie. |
| `--accent` | `#a3cc65` | Enlace activo, hover, foco, botón "Reproducir". |

Contraste: texto 15.5:1, verde 10.5:1 sobre el fondo; bordes de botón 3.5:1. Todo pasa WCAG AA.

## Typography

| Rol | Familia | Tamaño | Peso | Notas |
|---|---|---|---|---|
| Título de página (h1) | Big Shoulders Display | clamp(3rem, 8vw, 6rem) | 800 | Mayúsculas, interlineado 0.9 |
| Secciones de la portada, h2 | Big Shoulders Display | clamp(1.75rem, 3.2vw, 2.5rem) | 700 | Mayúsculas |
| Título de tarjeta | Big Shoulders Display | 1.375rem | 700 | Mayúsculas |
| Entradilla | Inter | 1.375rem (1.125rem en móvil) | 400 | Solo en Música, color texto |
| Texto | Inter | 1.125rem | 400 | Máx. 38rem de ancho |
| Dato de ficha | Inter | 1rem | 400 | Color papel |
| Etiqueta / metadato | IBM Plex Mono | 0.75rem | 400 | Mayúsculas, tracking 0.08em, en verde |

Fuentes desde Google Fonts. Una sola escala de tamaños (`--text-xs` a `--text-3xl`): no inventes otros.

## Layout

- Ancho máximo 90rem, margen lateral `clamp(1rem, 4vw, 3rem)`.
- Escala de espacio única `--space-1` a `--space-9` (4, 8, 12, 16, 24, 32, 48, 72, 112 px).
- Reglas fijas entre título, subtítulo y contenido: `--gap-eyebrow`, `--gap-title`, `--gap-content`,
  `--gap-section`, `--gap-items`, `--gap-item-text`. Los títulos no llevan márgenes; los huecos los
  pone el contenedor con `gap`.
- Rejillas de tarjetas con `auto-fill` (mín. 22rem para cine/vídeo, 15rem para álbumes y discos).
- Fotos de un álbum en columnas que respetan el orden de `site.js` (3, 2 o 1 según el ancho).

## Elevation & Depth

No hay sombras. La profundidad es el contraste entre `--bg` y `--surface` y la propia fotografía.

## Shapes

Todo en ángulo recto (`border-radius: 0`). Única excepción: el botón de play redondo de los vídeos, como en el portfolio anterior.

## Components

- **Cabecera**: nombre a la izquierda, menú en mono a la derecha, selector ES / EN. En móvil, botón "Menú".
- **Portada**: nombre con el rol "Filmmaker, Director and Creative Consultant" en verde debajo (tamaño de texto pequeño), y la frase en
  blanco debajo; fila CINE, VIDEOCLIPS, FOTOGRAFÍA, FASHION FILMS, PUBLICIDAD (sin puntos, títulos a tamaño subtítulo) con miniatura 4:3 debajo, centrada en la pantalla
  (en su color original, sin efecto al pasar el cursor); abajo, ES · EN a la izquierda y BIO Y CONTACTO a la derecha.
  El selector de idioma solo está abajo (pie de cada página y parte inferior de la portada), no en la cabecera.
  Una miniatura puede ser un vídeo corto (`video` en `home.sections`, o una lista de vídeos que se suceden): sin sonido, en bucle, sin controles; con "reducir movimiento" se queda en su fotograma (`image`).
  Fotografía alterna varias fotos (`images`) cada 3 s con un fundido; con "reducir movimiento" muestra solo la primera.
- **Cabecera de sección**: solo el título. Únicamente Música lleva una frase, en color texto y en una línea en escritorio.
- **Tarjeta**: imagen, título y metadatos separados por espacio (sin puntos medios).
- **Colores de tarjeta** (todas las secciones): título en verde; datos (año, duración, marca…) y descripción en blanco. Al pasar el cursor el título pasa a blanco.
- **Proyecto de publicidad**: la pestaña lista proyectos (tarjeta con portada y nº de vídeos); la página del proyecto agrupa los vídeos por formato con una etiqueta mono ("HORIZONTAL · 8"), marcos 16:9, 1:1 o 9:16; en móvil los cuadrados y verticales van de dos en dos.
- **Navegación entre álbumes (Fotografía)**: fila de nombres en mono mayúsculas, en color texto; solo el álbum actual (y el que tiene el cursor) va en verde.
- **Plataformas (Música)**: fila de logos en verde bajo una línea fina, pegados a la izquierda (YouTube, Apple Music, Tidal, Deezer, Spotify; los que faltan no dejan hueco), área de toque de 44 px (en móvil, logos de 24 px y área de 48 px). Mientras el cursor está sobre una canción, sus logos saltan uno tras otro de izquierda a derecha (ola), sin interrumpirse al pasar por un logo; el logo bajo el cursor pasa a blanco. En táctil y con movimiento reducido, sin animación. Las tarjetas de Música no son enlaces: sin zoom ni cambio de color del título.
- **Proyecto de publicidad**: en escritorio (≥1024 px) dos columnas: a la izquierda (22rem) volver, título, nº de vídeos y año, y créditos (Cliente, Concepto, Duración, Dirección y montaje) en tabla de líneas finas, fijos al hacer scroll (sticky bajo la cabecera); a la derecha los vídeos por formato, 2 por fila los horizontales (uno solo ocupa todo el ancho) y 3 los verticales/cuadrados. En tableta y móvil, una columna (créditos arriba, vídeos debajo). Un crédito vacío se ve como "—".
- **Ficha de película**: reproductor y debajo una tabla etiqueta | dato con líneas finas
  (Sinopsis, Duración, Género, Año, créditos, festivales), como la web anterior. Pósters debajo.
- **Reproductor**: muestra el fotograma y un círculo oscuro translúcido con el triángulo de play (verde al pasar el cursor); el vídeo solo se carga al pulsar.
- **Visor de fotos**: pantalla completa, flechas, teclado y deslizar. En escritorio, como en una galería: la foto a la izquierda y la ficha a la derecha (las fotos verticales, centradas en la pantalla con la ficha a su lado); en móvil, la ficha debajo. Título en verde, datos (año, película, tamaño de copia) en blanco y un botón "Comprar" que abre el correo con el mensaje ya redactado.
- **Tarjetas de álbum (Fotografía)**: cuadradas como el resto, con las tres primeras fotos apiladas como copias; al pasar el cursor se abren en abanico; en pantallas táctiles se abren y cierran solas, despacio (salvo con movimiento reducido).
- **Recuadro pendiente**: rayas diagonales y la etiqueta "Imagen pendiente".

## Do's and Don'ts

**Sí**
- Usar solo los tokens de color y espacio de `styles.css`.
- Mantener el verde como único color de acento.
- Escribir cada texto en `{ es, en }`.
- Dejar que la imagen mande: la interfaz no compite con ella.

**No**
- Añadir un segundo color, degradados, sombras o esquinas redondeadas.
- Poner etiquetas pequeñas encima de cada título ni encadenar datos con puntos medios.
- Usar rayas largas (—) en los textos visibles; para rangos, guion normal (2023-2024).
- Usar márgenes sueltos en títulos o números de espacio fuera de la escala.

## Responsive Behavior

- 960px: la bio pasa a una columna.
- 860px: el menú se pliega en "Menú"; la portada pasa a dos columnas (todas las tarjetas del mismo tamaño), la frase al ancho del rol, alineada a la izquierda, a 16 px (igual que el rol) con letter-spacing 0.04em para que su primera línea llegue al borde del rol, con más aire entre textos (space-5) y antes de las secciones (space-8), y Bio y Contacto justo debajo con ES · EN debajo, a la derecha.
- 560px: las filas de la ficha apilan etiqueta y dato.
- Botones con al menos 32px de alto; el visor usa 44px.
- Se respeta `prefers-reduced-motion`.

## Iteration Guide

1. Contenido nuevo: `content/site.js`; textos de interfaz: `content/ui.js`.
2. Estilo nuevo: primero un token en la sección 1 de `styles.css`, después el componente.
3. Comprueba en 1440px y 390px que no haya scroll horizontal ni errores en consola.

## Known Gaps

- Faltan imágenes para Fashion Films, Publicidad y los proyectos en desarrollo (ver `CONTENIDO-PENDIENTE.md`).
- Las miniaturas de los videoclips vienen de YouTube; si no cargan se ve el título sobre fondo oscuro.
- Las fuentes cargan desde Google Fonts; para producción se podrían alojar en el propio sitio.
