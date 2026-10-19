# Mario Alejandro Arias · portfolio

Portfolio web de Mario Alejandro Arias (cine, videoclips, fotografía, fashion films y música).
Español como idioma principal, versión completa en inglés y selector de idioma.

*English version of this guide below: [English](#english).*

---

## En una frase

Es una web **estática sin dependencias**: HTML, CSS y JavaScript sin instalar nada, sin
`npm`, sin compilar. Todo el contenido está en **dos archivos** dentro de `content/`.

## Abrirla en tu ordenador

Doble clic en `index.html` y se abre en el navegador. Así de simple.

Si prefieres un servidor local (recomendado para probar como en internet):

```bash
python3 -m http.server 8000      # luego abre http://localhost:8000
```

## Estructura

```
index.html            esqueleto de la página (cabecera, pie, visor de fotos)
content/
  site.js             TODO el contenido: bio, películas, videoclips, fotos, música
  ui.js               textos de la interfaz: menú, botones, etiquetas
assets/
  styles.css          estilos. Empieza leyendo la sección 1 (tokens)
  app.js              la lógica que pinta las páginas (no hace falta tocarla)
images/
  fotos/<album>/      fotografías (1400 px de lado mayor)
  fotogramas/         fotogramas de las películas para el listado de Cine
  posters/            pósters de las películas
  portadas/           portadas de los discos
  perfil/             retrato de la bio
  publicidad/<proyecto>/  fotograma de portada de cada vídeo de publicidad
videos/
  publicidad/<proyecto>/  vídeos de publicidad alojados en la web (MP4 H.264, sin YouTube)
CONTENIDO-PENDIENTE.md  lo que falta pedirle a Mario
docs/prompt-portada.md  descripción (prompt) del diseño de la portada
DESIGN.md             guía de estilo: colores, tipografías, espaciado y reglas
```

Páginas (la dirección va detrás de `#`, así funciona en cualquier hosting):

| Dirección | Página |
|---|---|
| `#/` | Inicio (una sola pantalla, ver `docs/prompt-portada.md`) |
| `#/cine` · `#/cine/<slug>` | Listado de películas · ficha de una película |
| `#/videoclips` | Videoclips |
| `#/fotografia` · `#/fotografia/<album>` | Álbumes · un álbum con visor |
| `#/fashion-films` | Fashion films |
| `#/publicidad` | Publicidad |
| `#/musica` | Discografía de Silva, del Pozo |
| `#/bio` | Bio y Contacto |

La versión inglesa es la misma dirección con `en/` delante: `#/en/cine`, `#/en/bio`...

## Editar contenido (el 90 % del trabajo)

Abre `content/site.js` con cualquier editor de texto. Cada texto traducible tiene esta forma:

```js
synopsis: {
  es: 'Emilio y Mia se conocen en la primavera madrileña...',
  en: 'Emilio and Mia meet during a Madrid spring...',
},
```

- **Cambiar un texto:** edita lo que hay entre comillas en `es` y en `en`.
- **Un texto igual en los dos idiomas** (un nombre, un título original): basta una cadena
  sola, `title: 'Tener tiempo'`. Si algún día necesita traducción, conviértelo en `{ es, en }`.
- **Si falta el `en`**, la web muestra el español. Nunca se rompe.
- **Comillas:** si el texto lleva un apóstrofo, escríbelo así: `'It\'s Just a Burning Memory'`
  o usa el apóstrofo tipográfico `’`.
- Las líneas con `// TODO` son contenido pendiente.

Tareas habituales:

| Quiero... | Haz esto |
|---|---|
| Añadir una película | Copia un bloque de `SITE.films`, cambia `slug` (sin espacios ni tildes), `vimeoId` (el número de `vimeo.com/123456`), textos, y pon su fotograma en `images/fotogramas/` y sus pósters en `images/posters/`. |
| Añadir un videoclip | Añade `{ artist, title, youtubeId }` en `SITE.videoclips`. El `youtubeId` es lo que va tras `youtu.be/`. El orden de la lista es el orden en la web. |
| Añadir fotos a un álbum | Guarda el JPG en `images/fotos/<album>/` y añade su entrada en `photos` en el lugar que le toca. **El orden lo manda la lista, no el nombre del archivo.** |
| Crear un álbum nuevo | Copia un bloque de `SITE.albums` con otro `slug` y crea su carpeta en `images/fotos/`. |
| Cambiar las secciones o miniaturas de la portada | `SITE.home.sections` (orden, etiqueta corta e imagen). |
| Añadir una pieza de publicidad | Añade un bloque en `SITE.ads` (mismo formato que los fashion films). |
| Cambiar menú, botones o etiquetas | `content/ui.js`. |
| Añadir un tercer idioma | Añade el código en `LANGS` al inicio de `assets/app.js` (por ejemplo `['es', 'en', 'fr']`) y escribe `fr:` en los textos. Los que no lo tengan se verán en español. |

**Imágenes nuevas:** JPG de unos 1400 px en el lado mayor y menos de 400 KB. En macOS:
`sips -Z 1400 foto.jpg`. Con ImageMagick: `magick foto.jpg -auto-orient -resize 1400x1400 -quality 76 foto.jpg`.
No enlaces imágenes de otras webs; todo se sirve desde `images/`.

## Diseño y espaciado

Todo sale de las variables de la sección 1 de `assets/styles.css`:

- **Colores:** fondo negro cálido, texto color papel y un único
  verde (#A3CC65) para texto secundario, enlaces activos, foco y "Reproducir".
- **Tipografías (Google Fonts):** Big Shoulders Display para títulos, Inter para el
  texto, IBM Plex Mono para etiquetas (años, duraciones, película), como los códigos impresos
  en el borde del negativo.
- **Espaciado:** una sola escala, `--space-1` a `--space-9`. Ningún componente usa números sueltos.
  La relación entre título, subtítulo y contenido está fijada en cinco variables:

  | Variable | Hueco entre... |
  |---|---|
  | `--gap-eyebrow` | etiqueta pequeña → título |
  | `--gap-title` | título → subtítulo / entradilla |
  | `--gap-content` | bloque de título → contenido |
  | `--gap-section` | una sección y la siguiente |
  | `--gap-items` | tarjetas de una lista |

  Los títulos no llevan márgenes: el hueco lo pone el contenedor (`gap`). Si quieres más aire
  en toda la web, cambia una de esas variables y todo se ajusta igual.

## Publicar

Al ser una web estática, sirve cualquier hosting gratuito. **No hay variables de entorno,
claves ni base de datos.**

- **Vercel o Netlify (recomendado):** importa el repositorio de GitHub. Framework: "Other",
  sin comando de build, carpeta de salida: la raíz (`.`). Cada push a `main` publica solo.
  También puedes arrastrar la carpeta a https://app.netlify.com/drop para una prueba rápida.
- **GitHub Pages (el que se usa):** repositorio `AriasMario99/Portfolio`, Settings › Pages ›
  Deploy from a branch › `main` / root. El archivo `CNAME` le dice a GitHub que el dominio es
  **marioalejandroarias.com**.
- **Dominio propio:** en el DNS del dominio, 4 registros A para `@` (185.199.108.153,
  185.199.109.153, 185.199.110.153, 185.199.111.153) y un CNAME `www` → `ariasmario99.github.io`.
  Cuando GitHub lo verifique, marca "Enforce HTTPS".
- **Vista previa al compartir:** `images/compartir.jpg` (1200×630) y las etiquetas `og:` de
  `index.html`, con la dirección completa del dominio. Si cambia el dominio, cámbialas también.

Antes de publicar, abre la web en el navegador y revisa a ancho de escritorio y de móvil
(en las herramientas de desarrollo, 390 px) que no aparezca scroll horizontal.

## Traspasar el proyecto

1. Repositorio: transfiere el repo de GitHub a la cuenta de Mario (Settings › Transfer
   ownership) o invita al nuevo responsable como colaborador.
2. Hosting: crea el proyecto en la cuenta del nuevo responsable importando el repo, o
   transfiérelo desde el panel de Vercel/Netlify.
3. Dominio: si existe, que quede a nombre de Mario.
4. Este README y `CONTENIDO-PENDIENTE.md` son todo lo que necesita quien siga.

## Notas para quien lo mantenga

- Los vídeos usan una "fachada": se ve el fotograma y el reproductor de Vimeo/YouTube
  solo se carga al pulsar. La web carga rápido y no mete cookies hasta que alguien reproduce.
  El vídeo se reproduce dentro de la página, sin ir a YouTube. Solo si la web está metida en
  otra página que prohíbe incrustar reproductores, el segundo clic abre el vídeo en YouTube/Vimeo.
  Si el dueño de un vídeo desactivó "Permitir insertar" en YouTube, el reproductor dirá que no
  está disponible: hay que activarlo en YouTube Studio.
- Las miniaturas de los videoclips vienen de YouTube (`i.ytimg.com`). Si no cargan, la tarjeta
  muestra el título en grande.
- Mario no quiere reproductores incrustados de Spotify: en Música solo hay portadas y enlaces,
  y Spotify va al final a propósito.
- El texto en inglés de sinopsis, créditos y etiquetas es una traducción para revisar con Mario.
  La bio en inglés es la suya.
- Para enlazar una palabra de la bio (como "Filmin"), añádela a `profile.bioLinks` en
  `content/site.js` con su dirección. Se enlaza la primera vez que aparece, en los dos idiomas.
- Origen del contenido: portfolio anterior de Mario (React/Vite), que ya tenía textos,
  fotos ordenadas y enlaces revisados. Esta web es nueva y más simple; no depende de él.

---

### Añadir un proyecto de publicidad

La pestaña Publicidad lista proyectos; cada uno abre su página con todos sus vídeos,
agrupados por formato (horizontal, cuadrado, vertical). Los vídeos van en la propia web:

1. Convierte cada vídeo a MP4 H.264 (por ejemplo
   `ffmpeg -i entrada.mov -vf scale=1280:-2 -c:v libx264 -crf 24 -pix_fmt yuv420p -movflags +faststart salida.mp4`;
   `scale=1080:-2` para cuadrados y `scale=720:-2` para verticales) y guárdalo en `videos/publicidad/<proyecto>/`.
2. Saca un fotograma como portada (`ffmpeg -ss 2 -i entrada.mov -frames:v 1 portada.jpg`) en `images/publicidad/<proyecto>/`.
3. Añade el proyecto a `SITE.ads` en `content/site.js` copiando el bloque de Dr. You y rellena
   `credits` (`client`, `concept`, `duration`, `direction`); lo que quede vacío se ve como "—".

Si un vídeo está en Vimeo, en lugar de `video: '...mp4'` pon `vimeoId: '123456'` (el número de
`vimeo.com/123456`) y deja su `poster`: se reproduce dentro de la página con el reproductor de Vimeo,
con mejor calidad. Así está la versión larga de Estudio Septiembre.

### Poner un vídeo en una miniatura de la portada

Una sección de la portada puede reproducir un vídeo corto (sin sonido, en bucle) en lugar de la foto.
Conviértelo ligero y sin audio:
`ffmpeg -i corto.mp4 -an -vf scale=960:-2 -c:v libx264 -crf 26 -pix_fmt yuv420p -movflags +faststart videos/home/<nombre>.mp4`,
saca un fotograma a `images/home/<nombre>.jpg` y en `home.sections` añade `video: 'videos/home/<nombre>.mp4'`
junto a `image` (la imagen se ve mientras carga y si el visitante tiene activado "reducir movimiento").

## English

Portfolio site for Mario Alejandro Arias (film, music videos, photography, fashion films, music).
Spanish is the main language; there is a full English version and a language switch.

**What it is:** a static site with **no dependencies and no build step**: HTML, CSS and plain
JavaScript. All content lives in **two files** in `content/`.

**Run it:** double-click `index.html`, or `python3 -m http.server 8000` and open
http://localhost:8000.

**Structure:** see the tree above. `content/site.js` holds all portfolio content,
`content/ui.js` holds interface labels, `assets/styles.css` holds the design tokens,
`assets/app.js` renders the pages and does not need editing for content changes.

**URLs:** `#/cine`, `#/fotografia/ecuador`, etc. The English version is the same address with
`en/` in front: `#/en/cine`.

**Editing content in both languages:** every translatable field looks like
`{ es: 'Spanish text', en: 'English text' }`. A plain string is used for both languages
(names, original titles). If `en` is missing, Spanish is shown, so nothing breaks.
Lines marked `// TODO` are content still needed from Mario. The table "Tareas habituales" above
covers adding a film, music video, photo or album. Photo order comes from the list in
`site.js`, not from file names. New images: JPG around 1400 px on the long side.

**Spacing:** one scale (`--space-1` … `--space-9`) and five rules for title, subtitle and
content (`--gap-eyebrow`, `--gap-title`, `--gap-content`, `--gap-section`, `--gap-items`) at the
top of `assets/styles.css`. Headings carry no margins; containers set the gaps.

**Deploy:** any static host. On Vercel or Netlify import the GitHub repo with framework
"Other", no build command, output directory `.` (root). GitHub Pages: deploy from `main`, root.
No environment variables, keys or database.

**Handing over:** transfer the GitHub repo (Settings › Transfer ownership) or add the new
maintainer as a collaborator, recreate or transfer the hosting project, keep any domain in
Mario's name, and share this README plus `CONTENIDO-PENDIENTE.md`.
