# Portada · prompt de diseño

Basado en el boceto de Bernardo ("La web, versión Macaco", oct 2026). Sirve para explicar
la portada a otra persona o para pedírsela a una herramienta de IA.

## Prompt

> Diseña la portada del portfolio de Mario Alejandro Arias, Filmmaker, Director and Creative Consultant.
> Es **una sola pantalla**, sin scroll, sin menú superior y sin pie: fondo negro cálido y
> texto claro color papel.
>
> - **Arriba a la izquierda:** el nombre, "MARIO ALEJANDRO ARIAS", en mayúsculas, tipografía
>   condensada y pesada (Big Shoulders Display), tamaño mediano. Debajo del nombre,
>   y más pequeño, "Filmmaker, Director and Creative Consultant" en verde (#A3CC65). Debajo, una frase corta
>   en blanco. El nombre es también el enlace a inicio.
>   Arriba a la derecha, discreto, el selector de idioma **ES / EN**.
> - **Centro, en una sola fila:** cinco secciones, sin separadores:
>   **CINE, VIDEO, FOTO, FASHION FILMS, PUBLICIDAD**. Debajo de cada palabra, una imagen pequeña
>   apaisada (4:3) del mismo ancho que su columna: un fotograma o foto representativa de
>   esa sección. Las cinco columnas tienen el mismo ancho y el mismo hueco entre ellas.
>   Las imágenes van algo desaturadas y recuperan el color al pasar el cursor; la palabra
>   cambia al verde de acento (#A3CC65).
> - **Abajo a la derecha:** "BIO Y CONTACTO", mismo estilo que las secciones, enlaza a la bio.
> - Mucho aire: el contenido respira entre los tres bloques (nombre, fila, contacto) y
>   el resto de la pantalla queda negro.
> - **Móvil:** las secciones pasan a dos columnas (todas del mismo tamaño; la quinta queda sola a la izquierda),
>   el rol baja debajo del nombre; "Bio y Contacto" abajo se mantiene.
> - Versión en inglés: FILM, VIDEO, PHOTO, FASHION FILMS, COMMERCIALS y BIO & CONTACT.

## Dónde se cambia

- Secciones, etiquetas e imágenes: `content/site.js` → `SITE.home.sections`.
- Estilos: `assets/styles.css`, bloque "Inicio".
- "Bio y Contacto"/"Bio & Contact": `content/ui.js` → etiqueta de `bio` en `nav`.
