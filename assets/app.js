/* ================================================================
   Mario Alejandro Arias · app.js
   Pinta la web a partir de content/site.js y content/ui.js.
   Para cambiar textos o fotos NO hace falta tocar este archivo.

   Direcciones (todo va detrás de #, así funciona en cualquier hosting):
     #/                     inicio en español      #/en          inicio en inglés
     #/cine                 listado de películas   #/en/cine     ...en inglés
     #/cine/<slug>          ficha de una película
     #/fotografia/<album>   un álbum de fotos
   ================================================================ */
(function () {
  'use strict'

  var SITE = window.SITE
  var UI = window.UI
  var LANGS = ['es', 'en']   // el primero es el idioma principal
  var lang = 'es'

  // ---------- utilidades --------------------------------------
  // t(): elige el idioma de un texto { es, en } (o lo devuelve tal cual)
  function t(value) {
    if (value && typeof value === 'object' && !Array.isArray(value) && ('es' in value || 'en' in value)) {
      return value[lang] != null ? value[lang] : value.es
    }
    return value
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  }
  function href(path) { return '#/' + (lang === LANGS[0] ? '' : lang + (path ? '/' : '')) + (path || '') }
  function hrefIn(l, path) { return '#/' + (l === LANGS[0] ? '' : l + (path ? '/' : '')) + (path || '') }
  function pad(n) { return String(n).padStart(2, '0') }
  function $(sel, root) { return (root || document).querySelector(sel) }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)) }
  function navLabel(path) {
    var item = UI.nav.filter(function (n) { return n.path === path })[0]
    return item ? t(item.label) : ''
  }

  // Bloque de título común a todas las páginas (ver styles.css §4)
  function head(opts) {
    var level = opts.level || 1
    var cls = level === 1 ? 'page-title' : 'section-title'
    return '<header class="head"><div class="head__top">' +
      (opts.label ? '<p class="label">' + opts.label + '</p>' : '') +
      '<h' + level + ' class="' + cls + '">' + esc(opts.title) + '</h' + level + '>' +
      '</div>' +
      (opts.lede ? '<p class="lede' + (opts.ledeClass ? ' ' + opts.ledeClass : '') + '">' + esc(opts.lede) + '</p>' : '') +
      '</header>'
  }

  // Datos cortos (año, género, duración) separados por espacio, sin puntos medios
  function meta(items) {
    return '<p class="meta label">' + items.filter(Boolean).map(function (x) { return '<span>' + esc(x) + '</span>' }).join('') + '</p>'
  }

  function img(src, alt, extra) {
    extra = extra || ''
    var lazy = extra.indexOf('loading=') === -1 ? ' loading="lazy"' : ''
    return '<img src="' + esc(src) + '" alt="' + esc(alt || '') + '"' + lazy + ' decoding="async"' + extra + '>'
  }
  function pending() {
    return '<div class="pending"><span class="label">' + esc(t(UI.imagePending)) + '</span></div>'
  }

  // Reproductor: muestra imagen + botón; el iframe solo se carga al pulsar.
  function player(o) {
    var embed = o.provider === 'file' ? o.src
      : o.provider === 'vimeo'
      ? 'https://player.vimeo.com/video/' + o.id + '?autoplay=1&transparent=0&dnt=1'
      : 'https://www.youtube-nocookie.com/embed/' + o.id + '?autoplay=1&rel=0'
    var poster = o.poster || (o.provider === 'youtube' ? 'https://i.ytimg.com/vi/' + o.id + '/hqdefault.jpg' : '')
    var watch = o.provider === 'file' ? o.src
      : o.provider === 'vimeo' ? 'https://vimeo.com/' + o.id : 'https://www.youtube.com/watch?v=' + o.id
    var style = o.aspect ? ' style="aspect-ratio:' + esc(o.aspect) + '"' : ''
    return '<div class="player"' + style + '>' +
      '<div class="player__fallback"><strong>' + esc(o.title) + '</strong>' +
      (o.subtitle ? '<span class="label">' + esc(o.subtitle) + '</span>' : '') + '</div>' +
      // Es un enlace al vídeo: si la web está dentro de otra página que no deja incrustar
      // reproductores (p. ej. una vista previa), se abre en YouTube/Vimeo en otra pestaña.
      '<a class="player__start" href="' + esc(watch) + '" target="_blank" rel="noopener" data-embed="' + esc(embed) + '"' + (o.provider === 'file' ? ' data-file' : '') + ' data-title="' + esc(o.title) + '">' +
      (poster ? img(poster, '', ' onerror="this.remove()"') : '') +
      '<span class="play"><span class="visually-hidden">' + esc(t(UI.play)) + ' ' + esc(o.title) + '</span></span>' +
      '</a></div>'
  }
  function watchLink(provider, id) {
    var url = provider === 'vimeo' ? 'https://vimeo.com/' + id : 'https://www.youtube.com/watch?v=' + id
    var name = provider === 'vimeo' ? 'Vimeo' : 'YouTube'
    return '<a class="ext" href="' + url + '" target="_blank" rel="noopener">' + esc(t(UI.watchOn)) + ' ' + name + ' ↗</a>'
  }

  // ---------- páginas -----------------------------------------
  var pages = {}

  // Portada: una sola pantalla. Nombre arriba a la izquierda, secciones
  // en fila (etiqueta + miniatura) y "Contacto" abajo a la derecha.
  // Vídeo de una miniatura de la portada: uno en bucle, o varios que se suceden en bucle
  function homeVideo(list, poster, calm) {
    return '<video src="' + esc(list[0]) + '" poster="' + esc(poster || '') + '"' +
      (calm ? ' preload="none"' : ' autoplay preload="auto"') +
      (list.length > 1 ? ' data-playlist="' + esc(list.join('|')) + '"' : ' loop') +
      ' muted playsinline aria-hidden="true"></video>'
  }
  // Fotos de una miniatura de la portada que se alternan cada 3 s (fundido)
  var slidesTimer
  function homeSlides(list) {
    clearInterval(slidesTimer)
    slidesTimer = setInterval(nextSlide, 3000)
    return '<span class="home__slides">' + list.map(function (src, i) {
      return img(src, '', i === 0 ? ' class="is-active" loading="eager"' : '')
    }).join('') + '</span>'
  }
  function nextSlide() {
    var boxes = document.querySelectorAll('.home__slides')
    if (!boxes.length) return clearInterval(slidesTimer)
    Array.prototype.forEach.call(boxes, function (box) {
      var cur = box.querySelector('img.is-active'), next = (cur && cur.nextElementSibling) || box.firstElementChild
      if (cur) cur.classList.remove('is-active')
      next.classList.add('is-active')
    })
  }

  // al terminar un vídeo con lista, pasa al siguiente (y vuelve al primero)
  document.addEventListener('ended', function (e) {
    var v = e.target, list = v.dataset && v.dataset.playlist
    if (!list) return
    list = list.split('|')
    v.src = list[(list.indexOf(v.getAttribute('src')) + 1) % list.length]
    v.play().catch(function () {})
  }, true)

  pages.home = function () {
    // con «reducir movimiento» el vídeo se queda en su fotograma (poster)
    var calm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var p = SITE.profile
    var cats = SITE.home.sections.map(function (sec) {
      return '<li><a class="home__cat" href="' + href(sec.path) + '">' +
        '<span class="home__label">' + esc(t(sec.label)) + '</span>' +
        '<span class="home__thumb">' + (sec.video
          ? homeVideo([].concat(sec.video), sec.image, calm)
          : sec.images && !calm ? homeSlides(sec.images)
          : sec.image ? img(sec.image, '') : pending()) + '</span>' +
        '</a></li>'
    }).join('')
    return '<section class="home">' +
      '<div class="home__top"><div class="home__intro">' +
      '<div class="home__headline"><h1 class="home__name"><a href="' + href('') + '">' + esc(p.name) + '</a></h1>' +
      '<p class="home__role">' + esc(t(SITE.home.role)) + '</p></div>' +
      '<p class="home__tagline">' + esc(t(SITE.home.tagline)) + '</p></div></div>' +
      '<nav aria-label="' + esc(t(UI.homeSections)) + '"><ul class="home__cats">' + cats + '</ul></nav>' +
      // abajo: idioma a la izquierda, Bio y Contacto a la derecha (la portada no tiene pie)
      '<div class="home__bottom"><div class="lang" data-lang-switch></div>' +
      '<a class="home__contact" href="' + href('bio') + '">' + esc(navLabel('bio')) + '</a></div>' +
      '</section>'
  }

  pages.cine = function (slug) {
    if (slug) return filmPage(slug)
    var films = SITE.films.map(function (f) {
      return '<a class="card" href="' + href('cine/' + f.slug) + '">' +
        '<div class="frame">' + img(f.still, '') + '</div>' +
        '<div class="card__text"><h2 class="card__title">' + esc(t(f.title)) + '</h2>' +
        meta([f.year, t(f.genre), f.duration]) + '</div></a>'
    }).join('')
    var dev = SITE.inDevelopment.map(function (d) {
      var tag = d.slug ? 'a' : 'article'
      return '<' + tag + ' class="card"' + (d.slug ? ' href="' + href('cine/' + d.slug) + '"' : '') + '>' +
        '<div class="frame">' + (d.image ? img(d.image, '') : pending()) + '</div>' +
        '<div class="card__text"><h3 class="card__title">' + esc(t(d.title)) + '</h3>' +
        '<p class="label">' + esc(t(d.kind)) + '</p>' +
        '<p class="label">' + esc(t(d.status)) + '</p></div>' +
        '<p class="card__body">' + esc(t(d.text)) + '</p></' + tag + '>'
    }).join('')
    return '<section class="section">' +
      head({ title: navLabel('cine') }) +
      '<div class="cards">' + films + '</div></section>' +
      '<section class="section">' + head({ level: 2, title: t(UI.inDevelopment) }) +
      '<div class="cards">' + dev + '</div></section>'
  }

  // Ficha de un proyecto: tabla de dos columnas (etiqueta | dato) con
  // líneas finas entre filas, como en la web anterior.
  function filmPage(slug) {
    function row(label, value) {
      return '<div class="sheet__row"><dt class="label">' + esc(label) + '</dt><dd>' + value + '</dd></div>'
    }
    var f = SITE.films.filter(function (x) { return x.slug === slug })[0]
    if (!f) return devPage(slug, row)
    var rows = [
      row(t(UI.synopsis), esc(t(f.synopsis))),
      row(t(UI.duration), esc(f.duration)),
      row(t(UI.genre), esc(t(f.genre))),
      row(t(UI.year), esc(f.year)),
    ].concat(f.credits.map(function (c) { return row(t(c.role), esc(c.name)) }))
    if (f.festivals.length) {
      rows.push(row(t(UI.festivals), '<ul>' + f.festivals.map(function (x) { return '<li>' + esc(x) + '</li>' }).join('') + '</ul>'))
    }
    var posters = f.posters.length
      ? '<div class="block"><h2 class="label">' + esc(t(UI.posters)) + '</h2><div class="posters">' +
        f.posters.map(function (src, i) {
          return '<button type="button" data-viewer="posters" data-index="' + i + '">' +
            img(src, t(UI.posters) + ' · ' + t(f.title)) + '</button>'
        }).join('') + '</div></div>'
      : ''
    return '<article class="film">' +
      '<a class="back label" href="' + href('cine') + '">' + esc(t(UI.allFilms)) + '</a>' +
      head({ title: t(f.title) }) +
      '<div class="block">' +
      player({ provider: 'vimeo', id: f.vimeoId, title: t(f.title), poster: f.still, aspect: f.aspect }) +
      watchLink('vimeo', f.vimeoId) + '</div>' +
      '<dl class="sheet">' + rows.join('') + '</dl>' +
      posters + '</article>'
  }

  // Ficha de un proyecto en desarrollo: imagen fija (aún no hay película) y la misma tabla.
  function devPage(slug, row) {
    var d = SITE.inDevelopment.filter(function (x) { return x.slug === slug })[0]
    if (!d) return pages.notFound()
    var rows = [row(t(UI.synopsis), esc(t(d.text)))]
    if (d.duration) rows.push(row(t(UI.duration), esc(d.duration)))
    if (d.genre) rows.push(row(t(UI.genre), esc(t(d.genre))))
    ;(d.credits || []).forEach(function (c) { rows.push(row(t(c.role), esc(c.name))) })
    rows.push(row(t(UI.status), esc(t(d.status))))
    if (d.labs && d.labs.length) {
      rows.push(row(t(UI.labs), '<ul>' + d.labs.map(function (x) { return '<li>' + esc(x) + '</li>' }).join('') + '</ul>'))
    }
    return '<article class="film">' +
      '<a class="back label" href="' + href('cine') + '">' + esc(t(UI.allFilms)) + '</a>' +
      head({ title: t(d.title) }) +
      (d.image ? '<div class="block"><div class="frame">' + img(d.image, t(d.title)) + '</div></div>' : '') +
      '<dl class="sheet">' + rows.join('') + '</dl></article>'
  }

  function videoCards(list, getTitle, getSub, getBody) {
    return '<div class="cards">' + list.map(function (v) {
      return '<article class="card">' +
        (v.video
          ? player({ provider: 'file', src: v.video, poster: v.poster, title: getTitle(v) })
          : player({ provider: 'youtube', id: v.youtubeId, title: getTitle(v), subtitle: [].concat(getSub(v)).join(', ') })) +
        '<div class="card__text"><h2 class="card__title">' + esc(getTitle(v)) + '</h2>' +
        meta([].concat(getSub(v)).filter(Boolean)) +
        (getBody && getBody(v) ? '<p class="card__body">' + getBody(v) + '</p>' : '') + '</div></article>'
    }).join('') + '</div>'
  }

  pages.videoclips = function () {
    return '<section class="section">' +
      head({ title: navLabel('videoclips') }) +
      videoCards(SITE.videoclips, function (v) { return v.title }, function (v) { return v.artist }) +
      '</section>'
  }

  pages['fashion-films'] = function () {
    return '<section class="section">' +
      head({ title: navLabel('fashion-films') }) +
      videoCards(SITE.fashionFilms, function (v) { return t(v.title) }, function (v) {
        return [v.brand, v.year, v.duration]
      }, function (v) {
        // rol en una línea y el nombre debajo, entero en otra
        return v.credits ? esc(t(v.credits.role)) + '<br><span class="nowrap">' + esc(v.credits.name) + '</span>' : ''
      }) + '</section>'
  }

  // Publicidad: la pestaña lista los proyectos (marcas/campañas); cada uno abre su
  // página con todos sus vídeos agrupados por formato (horizontal, cuadrado, vertical).
  pages.publicidad = function (slug) {
    function count(a) { return a.groups.reduce(function (n, g) { return n + g.videos.length }, 0) }
    if (!slug) {
      var body = SITE.ads.length
        ? '<div class="cards">' + SITE.ads.map(function (a) {
            return '<a class="card" href="' + href('publicidad/' + a.slug) + '">' +
              '<div class="frame">' + img(a.cover, '') + '</div>' +
              '<div class="card__text"><h2 class="card__title">' + esc(t(a.title)) + '</h2>' +
              meta([count(a) + ' ' + t(count(a) === 1 ? UI.video : UI.videos), a.year]) + '</div></a>'
          }).join('') + '</div>'
        : '<div class="cards"><article class="card"><div class="frame">' + pending() + '</div>' +
          '<div class="card__text"><h2 class="card__title">' + esc(t(UI.comingSoon)) + '</h2></div></article></div>'
      return '<section class="section">' + head({ title: navLabel('publicidad') }) + body + '</section>'
    }
    var ad = SITE.ads.filter(function (a) { return a.slug === slug })[0]
    if (!ad) return pages.notFound()
    // Título y créditos a la izquierda, fijos al hacer scroll; los vídeos a la derecha.
    var c = ad.credits || {}
    var credits = [[UI.client, c.client], [UI.concept, c.concept], [UI.duration, c.duration], [UI.directionEditing, c.direction]]
      .map(function (r) {
        return '<div class="sheet__row"><dt class="label">' + esc(t(r[0])) + '</dt><dd>' + (t(r[1]) ? esc(t(r[1])) : '—') + '</dd></div>'
      }).join('')
    return '<section class="ad">' +
      '<div class="ad__info">' +
      '<a class="back label" href="' + href('publicidad') + '">' + esc(t(UI.allProjects)) + '</a>' +
      head({ title: t(ad.title) }) + meta([count(ad) + ' ' + t(count(ad) === 1 ? UI.video : UI.videos), ad.year]) +
      '<dl class="sheet ad__credits">' + credits + '</dl>' +
      '</div><div class="ad__videos">' +
      ad.groups.map(function (g) {
        return '<div class="block"><h2 class="label">' + esc(t(g.label)) + ' · ' + g.videos.length + '</h2>' +
          // un único vídeo horizontal ocupa todo el ancho de la columna
          '<div class="cards' + (g.aspect === '16 / 9' ? (g.videos.length === 1 ? ' cards--single' : '') : ' cards--narrow') + '">' + g.videos.map(function (v) {
            return '<article class="card">' +
              // vídeo alojado en la web (video) o en Vimeo (vimeoId); el fotograma (poster) es el mismo
              player({ provider: v.vimeoId ? 'vimeo' : 'file', id: v.vimeoId, src: v.video, poster: v.poster, title: t(ad.title) + (v.title ? ' · ' + t(v.title) : '') + (v.lang ? ' (' + v.lang + ')' : ''), aspect: g.aspect }) +
              // el nombre del vídeo es opcional: sin `title` solo se ven sus datos (idioma, duración)
              '<div class="card__text">' + (v.title ? '<h3 class="card__title">' + esc(t(v.title)) + '</h3>' : '') +
              meta([v.lang, v.duration].filter(Boolean)) + '</div></article>'
          }).join('') + '</div></div>'
      }).join('') + '</div></section>'
  }

  pages.fotografia = function (slug) {
    var total = SITE.albums.reduce(function (n, a) { return n + a.photos.length }, 0)
    if (!slug) {
      return '<section class="section">' +
        head({ title: navLabel('fotografia') }) +
        '<div class="cards cards--small">' + SITE.albums.map(function (a) {
          return '<a class="card" href="' + href('fotografia/' + a.slug) + '">' +
            // tres copias apiladas: la primera foto delante y dos asomando detrás
            '<div class="frame frame--square frame--stack">' + a.photos.slice(0, 3).reverse().map(function (p) {
              return '<span class="stack__print">' + img(p.src, '') + '</span>'
            }).join('') + '</div>' +
            '<div class="card__text"><h2 class="card__title">' + esc(t(a.name)) + '</h2>' +
            meta([a.photos.length + ' ' + t(UI.photos), t(a.note)]) + '</div></a>'
        }).join('') + '</div></section>'
    }
    var album = SITE.albums.filter(function (a) { return a.slug === slug })[0]
    if (!album) return pages.notFound()
    var years = album.photos.map(function (p) { return p.year }).filter(function (y, i, arr) { return arr.indexOf(y) === i }).sort()
    var yearLabel = years.length > 1 ? years[0] + '-' + years[years.length - 1] : years[0]
    return '<section class="section">' +
      '<a class="back label" href="' + href('fotografia') + '">' + esc(t(UI.allAlbums)) + '</a>' +
      head({ title: t(album.name) }) + meta([album.photos.length + ' ' + t(UI.photos), yearLabel, t(album.note)]) +
      '<nav class="album-nav" aria-label="' + esc(t(UI.albums)) + '">' + SITE.albums.map(function (a) {
        return '<a href="' + href('fotografia/' + a.slug) + '"' + (a.slug === slug ? ' aria-current="page"' : '') + '>' + esc(t(a.name)) + '</a>'
      }).join('') + '</nav>' +
      '<div class="album-grid">' + albumColumns(album) + '</div></section>'
  }

  function columnCount() { return window.innerWidth > 1100 ? 3 : window.innerWidth > 600 ? 2 : 1 }
  function albumColumns(album) {
    var n = columnCount()
    var cols = []
    for (var c = 0; c < n; c++) cols.push('')
    album.photos.forEach(function (p, i) {
      cols[i % n] += '<button type="button" data-viewer="album" data-index="' + i + '">' + img(p.src, t(p.title)) + '</button>'
    })
    return cols.map(function (c) { return '<div class="album-col">' + c + '</div>' }).join('')
  }
  var lastCols = columnCount()
  window.addEventListener('resize', function () {
    var n = columnCount()
    if (n === lastCols) return
    lastCols = n
    var grid = $('.album-grid')
    var album = SITE.albums.filter(function (a) { return a.slug === route.rest })[0]
    if (grid && album) grid.innerHTML = albumColumns(album)
  })

  // Logos de las plataformas de escucha (paths de simple-icons, MIT; las marcas son de sus dueños
  // y aquí solo identifican el enlace). Inline y con fill currentColor para que tomen el verde.
  var PLATFORM_ICONS = {
    youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    apple: 'M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z',
    tidal: 'M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z',
    deezer: 'M.693 10.024c.381 0 .693-1.256.693-2.807 0-1.55-.312-2.807-.693-2.807C.312 4.41 0 5.666 0 7.217s.312 2.808.693 2.808ZM21.038 1.56c-.364 0-.684.805-.91 2.096C19.765 1.446 19.184 0 18.526 0c-.78 0-1.464 2.036-1.784 5-.312-2.158-.788-3.536-1.325-3.536-.745 0-1.386 2.704-1.62 6.472-.442-1.932-1.083-3.145-1.793-3.145s-1.35 1.213-1.793 3.145c-.242-3.76-.874-6.463-1.628-6.463-.537 0-1.013 1.378-1.325 3.535C6.938 2.036 6.262 0 5.474 0c-.658 0-1.247 1.447-1.602 3.665-.217-1.291-.546-2.105-.91-2.105-.675 0-1.221 2.807-1.221 6.272 0 3.466.546 6.273 1.221 6.273.277 0 .537-.476.736-1.273.32 2.928.996 4.938 1.776 4.938.606 0 1.143-1.204 1.507-3.11.251 3.622.875 6.195 1.602 6.195.46 0 .875-1.023 1.187-2.677C10.142 21.6 11 24 12.004 24c1.005 0 1.863-2.4 2.235-5.822.312 1.654.727 2.677 1.186 2.677.728 0 1.352-2.573 1.603-6.195.364 1.906.9 3.11 1.507 3.11.78 0 1.455-2.01 1.775-4.938.208.797.46 1.273.737 1.273.675 0 1.22-2.807 1.22-6.273-.008-3.457-.553-6.272-1.23-6.272ZM23.307 10.024c.381 0 .693-1.256.693-2.807 0-1.55-.312-2.807-.693-2.807-.381 0-.693 1.256-.693 2.807s.312 2.808.693 2.808Z',
    spotify: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
  }

  pages.musica = function () {
    var m = SITE.music
    return '<section class="section">' +
      head({ title: navLabel('musica'), lede: t(m.intro), ledeClass: 'lede--plain' }) +
      '<div class="cards cards--small cards--music">' + m.releases.map(function (r) {
        var links = m.platforms.filter(function (pl) { return r.links[pl.key] }).map(function (pl, i) {
          var name = t(UI.musicListen) + ' ' + pl.label + ': ' + r.title
          var icon = PLATFORM_ICONS[pl.key]
            ? '<svg class="platforms__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="' + PLATFORM_ICONS[pl.key] + '"/></svg>'
            : esc(pl.label)
          return '<a class="platforms__link" style="--i:' + i + '" href="' + esc(r.links[pl.key]) + '" target="_blank" rel="noopener" aria-label="' + esc(name) + '" title="' + esc(name) + '">' + icon + '</a>'
        }).join('')
        return '<article class="card">' +
          '<div class="frame frame--square">' + img(r.cover, r.title) + '</div>' +
          '<div class="card__text"><h2 class="card__title">' + esc(r.title) + '</h2>' +
          meta([r.type, r.year, t(r.duration)]) +
          '<p class="card__body">' + esc(r.artists) + '</p></div>' +
          '<nav class="platforms" aria-label="' + esc(r.title) + '">' + links + '</nav>' +
          '</article>'
      }).join('') + '</div></section>'
  }

  // Convierte en enlace la primera aparición de cada palabra de `links` ({ texto: url }).
  function linkify(html, links) {
    Object.keys(links || {}).forEach(function (word) {
      html = html.replace(esc(word), '<a href="' + esc(links[word]) + '" target="_blank" rel="noopener">' + esc(word) + '</a>')
    })
    return html
  }

  pages.bio = function () {
    var p = SITE.profile
    var company = p.company && p.company.url
      ? '<a href="' + esc(p.company.url) + '" target="_blank" rel="noopener">' + esc(p.company.name) + '</a>'
      : esc(p.company ? p.company.name : '')
    return '<section class="section">' +
      head({ title: navLabel('bio'), lede: t(p.roles) }) +
      '<div class="bio">' +
      '<figure class="bio__photo">' + img(p.photo, p.name, ' loading="eager"') + '</figure>' +
      '<div class="bio__text">' +
      '<div class="prose">' + t(p.bio).map(function (para) { return '<p>' + linkify(esc(para), p.bioLinks) + '</p>' }).join('') + '</div>' +
      '<section class="section">' + head({ level: 2, title: t(UI.contact) }) +
      '<div class="contact">' +
      '<div class="contact__row"><span class="label">' + esc(t(UI.email)) + '</span>' +
      '<a class="contact__value" href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a>' +
      '<button class="copy-btn" type="button" data-copy="' + esc(p.email) + '">' + esc(t(UI.copy)) + '</button></div>' +
      '<div class="contact__row"><span class="label">Instagram</span>' +
      '<a class="contact__value" href="https://instagram.com/' + esc(p.instagram) + '" target="_blank" rel="noopener">@' + esc(p.instagram) + '</a></div>' +
      (company ? '<div class="contact__row"><span class="label">' + esc(t(UI.company)) + '</span><span class="contact__value">' + company + '</span></div>' : '') +
      '</div></section></div></div></section>'
  }

  pages.notFound = function () {
    return '<section class="section">' + head({ title: '404', lede: t(UI.notFound) }) +
      '<a class="back label" href="' + href('') + '">' + esc(t(UI.goHome)) + '</a></section>'
  }

  // ---------- cabecera y pie -----------------------------------
  function renderChrome(section, rest) {
    var path = section + (rest ? '/' + rest : '')
    $('#brand').setAttribute('href', href(''))
    $('#brand').textContent = SITE.profile.name
    $('#nav-list').innerHTML = UI.nav.map(function (n) {
      return '<li><a href="' + href(n.path) + '"' + (n.path === section ? ' aria-current="page"' : '') + '>' + esc(t(n.label)) + '</a></li>'
    }).join('')
    var langLinks = LANGS.map(function (l) {
      return '<a href="' + hrefIn(l, path) + '" lang="' + l + '" hreflang="' + l + '" title="' + esc(UI.langName[l]) + '"' +
        (l === lang ? ' aria-current="true"' : '') + '>' + l.toUpperCase() + '</a>'
    }).join('')
    $all('[data-lang-switch]').forEach(function (el) {
      el.innerHTML = langLinks
      el.setAttribute('aria-label', t(UI.switchTo))
    })
    $('#menu-toggle').textContent = t(UI.menu)
    $('#skip').textContent = t(UI.skip)
    var p = SITE.profile
    $('#footer-name').textContent = '© ' + new Date().getFullYear() + ' ' + p.name
    $('#footer-links').innerHTML =
      '<li><a href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a></li>' +
      '<li><a href="https://instagram.com/' + esc(p.instagram) + '" target="_blank" rel="noopener">Instagram</a></li>'
  }

  // ---------- router -------------------------------------------
  var current = null
  var route = { lang: 'es', section: 'home', rest: '' }
  function parse(hash) {
    var parts = (hash || '').replace(/^#\/?/, '').split('/').filter(Boolean)
    var l = LANGS[0]
    if (parts[0] && LANGS.indexOf(parts[0]) > 0) l = parts.shift()
    return { lang: l, section: parts[0] || 'home', rest: parts.slice(1).join('/') }
  }

  function render(hash, keepScroll) {
    var r = parse(hash)
    var key = r.lang + '|' + r.section + '|' + r.rest
    if (key === current) return
    var sameLangSwitch = current && current.split('|').slice(1).join('|') === r.section + '|' + r.rest
    current = key
    route = r
    lang = r.lang
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch (e) {}

    var page = pages[r.section] || pages.notFound
    document.body.classList.toggle('is-home', r.section === 'home')
    var main = $('#main')
    main.innerHTML = page(r.rest)
    main.classList.remove('page-enter'); void main.offsetWidth; main.classList.add('page-enter')
    renderChrome(r.section, r.rest)
    closeMenu()

    var title = r.section === 'home' ? '' : (navLabel(r.section) || '404')
    if (r.section === 'cine' && r.rest) {
      var f = SITE.films.filter(function (x) { return x.slug === r.rest })[0]
      if (f) title = t(f.title)
    }
    if (r.section === 'fotografia' && r.rest) {
      var a = SITE.albums.filter(function (x) { return x.slug === r.rest })[0]
      if (a) title = t(a.name) + ' · ' + navLabel('fotografia')
    }
    document.title = (title ? title + ' · ' : '') + SITE.profile.name
    if (!keepScroll && !sameLangSwitch) window.scrollTo(0, 0)
    if (!keepScroll) { try { main.focus({ preventScroll: true }) } catch (e) {} }
  }

  function go(hash) {
    try { if (location.hash !== hash) history.pushState(null, '', hash) } catch (e) {}
    render(hash)
  }

  // ---------- visor de fotos y pósters --------------------------
  var viewer = { list: [], index: 0, kind: '' }
  function viewerItems(kind) {
    var r = route
    if (kind === 'album') {
      var album = SITE.albums.filter(function (a) { return a.slug === r.rest })[0]
      return album ? album.photos.map(function (p) {
        return { src: p.src, title: t(p.title), facts: [p.year, t(p.film), t(UI.printSize) + ': ' + t(p.size)], print: true }
      }) : []
    }
    var film = SITE.films.filter(function (f) { return f.slug === r.rest })[0]
    return film ? film.posters.map(function (src) { return { src: src, title: t(film.title), facts: [t(UI.posters)] } }) : []
  }
  function openViewer(kind, index) {
    viewer.kind = kind
    viewer.list = viewerItems(kind)
    if (!viewer.list.length) return
    viewer.index = index
    var d = $('#viewer')
    paintViewer()
    if (d.showModal) d.showModal(); else d.setAttribute('open', '')
  }
  function paintViewer() {
    var item = viewer.list[viewer.index]
    var n = viewer.list.length
    $('#viewer-img').onload = fitViewer
    $('#viewer-img').src = item.src
    if ($('#viewer-img').complete) fitViewer()
    $('#viewer-img').alt = item.title
    $('#viewer-count').textContent = pad(viewer.index + 1) + ' / ' + pad(n)
    $('#viewer-title').textContent = item.title
    $('#viewer-facts').innerHTML = item.facts.filter(Boolean).map(function (f) { return '<span class="label">' + esc(f) + '</span>' }).join('') +
      (item.print ? '<span class="label">' + esc(t(UI.buyPrint)) + ' ' + esc(SITE.profile.email) + '</span>' : '')
    $('#viewer-close').textContent = t(UI.close)
    $('#viewer-prev').setAttribute('aria-label', t(UI.prev))
    $('#viewer-next').setAttribute('aria-label', t(UI.next))
    $('#viewer-prev').hidden = $('#viewer-next').hidden = n < 2
    // precarga la siguiente
    if (n > 1) { var pre = new Image(); pre.src = viewer.list[(viewer.index + 1) % n].src }
  }
  function step(d) {
    var n = viewer.list.length
    viewer.index = (viewer.index + d + n) % n
    paintViewer()
  }
  // En escritorio, una foto vertical se centra en la pantalla (ver .viewer--portrait).
  function fitViewer() {
    var i = $('#viewer-img'), d = $('#viewer')
    var portrait = i.naturalHeight > i.naturalWidth && window.innerWidth > 860
    d.classList.toggle('viewer--portrait', portrait)
    if (portrait) d.style.setProperty('--img-w', Math.round(i.getBoundingClientRect().height * i.naturalWidth / i.naturalHeight) + 'px')
  }
  window.addEventListener('resize', function () { if ($('#viewer').open) fitViewer() })
  function closeViewer() { var d = $('#viewer'); if (d.close) d.close(); else d.removeAttribute('open') }

  // ---------- menú móvil ----------------------------------------
  function closeMenu() {
    $('#nav').classList.remove('is-open')
    $('#menu-toggle').setAttribute('aria-expanded', 'false')
  }

  // ---------- eventos ------------------------------------------
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#/"]')
    if (a && !e.metaKey && !e.ctrlKey && !e.shiftKey) { e.preventDefault(); go(a.getAttribute('href')); return }

    var start = e.target.closest('.player__start')
    // vídeo propio: siempre se reproduce en la página (también en vistas previas)
    if (start && start.hasAttribute('data-file') && !e.metaKey && !e.ctrlKey) {
      e.preventDefault()
      var video = document.createElement('video')
      video.src = start.getAttribute('data-embed')
      video.controls = true
      video.autoplay = true
      video.playsInline = true
      video.setAttribute('aria-label', start.getAttribute('data-title'))
      start.replaceWith(video)
      video.play().catch(function () {})
      return
    }
    // YouTube/Vimeo: el reproductor se carga dentro de la página. Si la página donde está la web
    // no deja incrustar reproductores (lo avisa con un securitypolicyviolation), se vuelve a poner
    // la imagen y el siguiente clic abre el vídeo en YouTube/Vimeo.
    if (start && !start.hasAttribute('data-noembed') && !e.metaKey && !e.ctrlKey) {
      e.preventDefault()
      var frame = document.createElement('iframe')
      frame.src = start.getAttribute('data-embed')
      frame.title = start.getAttribute('data-title')
      frame.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media'
      frame.allowFullscreen = true
      frame._start = start
      start.replaceWith(frame)
      return
    }
    var v = e.target.closest('[data-viewer]')
    if (v) { openViewer(v.getAttribute('data-viewer'), +v.getAttribute('data-index')); return }

    var copy = e.target.closest('[data-copy]')
    if (copy) {
      var text = copy.getAttribute('data-copy')
      var done = function () { copy.textContent = t(UI.copied); setTimeout(function () { copy.textContent = t(UI.copy) }, 1600) }
      try {
        navigator.clipboard.writeText(text).then(done, function () { selectText(copy.previousElementSibling) })
      } catch (err) { selectText(copy.previousElementSibling) }
      return
    }
    if (e.target.closest('#menu-toggle')) {
      var open = $('#nav').classList.toggle('is-open')
      $('#menu-toggle').setAttribute('aria-expanded', String(open))
    }
  })
  document.addEventListener('securitypolicyviolation', function (e) {
    document.querySelectorAll('.player iframe').forEach(function (frame) {
      if (!frame._start || !e.blockedURI || frame.src.indexOf(e.blockedURI) !== 0) return
      frame._start.setAttribute('data-noembed', '')
      frame.replaceWith(frame._start)
    })
  })
  function selectText(el) {
    var range = document.createRange(); range.selectNodeContents(el)
    var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range)
  }

  $('#viewer-close').addEventListener('click', closeViewer)
  $('#viewer-prev').addEventListener('click', function () { step(-1) })
  $('#viewer-next').addEventListener('click', function () { step(1) })
  document.addEventListener('keydown', function (e) {
    if (!$('#viewer').open) { if (e.key === 'Escape') closeMenu(); return }
    if (e.key === 'ArrowLeft') step(-1)
    if (e.key === 'ArrowRight') step(1)
  })
  // deslizar con el dedo en el visor
  var touchX = null
  $('#viewer').addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX }, { passive: true })
  $('#viewer').addEventListener('touchend', function (e) {
    if (touchX == null) return
    var dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
    touchX = null
  })

  function onHash() {
    // #main (saltar al contenido) y otras anclas no son páginas
    if (location.hash && location.hash.indexOf('#/') !== 0) return
    render(location.hash)
  }
  window.addEventListener('hashchange', onHash)
  window.addEventListener('popstate', onHash)

  // ---------- arranque -----------------------------------------
  // Sin idioma en la dirección: español, salvo que el visitante ya
  // hubiera elegido inglés antes en este navegador.
  var start = location.hash.indexOf('#/') === 0 ? location.hash : ''
  if (!/^#\/en(\/|$)/.test(start)) {
    var saved = null
    try { saved = localStorage.getItem('lang') } catch (e) {}
    if (saved === 'en') {
      var r0 = parse(start)
      start = hrefIn('en', r0.section === 'home' ? '' : r0.section + (r0.rest ? '/' + r0.rest : ''))
      try { history.replaceState(null, '', start) } catch (e) {}
    }
  }
  render(start, true)
})()
