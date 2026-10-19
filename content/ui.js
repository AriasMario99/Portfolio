// ================================================================
//  TEXTOS DE LA INTERFAZ (menú, botones, etiquetas)
//  Cada entrada tiene su versión en español (es) y en inglés (en).
//  El contenido del portfolio (películas, fotos, bio...) está en site.js.
// ================================================================

window.UI = {
  // Menú principal. "path" es la dirección de la página: no lo traduzcas.
  nav: [
    { path: 'cine', label: { es: 'Cine', en: 'Film' } },
    { path: 'videoclips', label: { es: 'Videoclips', en: 'Music videos' } },
    { path: 'fotografia', label: { es: 'Fotografía', en: 'Photography' } },
    { path: 'fashion-films', label: { es: 'Fashion films', en: 'Fashion films' } },
    { path: 'publicidad', label: { es: 'Publicidad', en: 'Commercials' } },
    { path: 'musica', label: { es: 'Música', en: 'Music' } },
    { path: 'bio', label: { es: 'Bio y Contacto', en: 'Bio & Contact' } },
  ],

  langName: { es: 'Español', en: 'English' },
  switchTo: { es: 'View in English', en: 'Ver en español' },
  menu: { es: 'Menú', en: 'Menu' },
  close: { es: 'Cerrar', en: 'Close' },
  skip: { es: 'Saltar al contenido', en: 'Skip to content' },
  back: { es: 'Volver', en: 'Back' },

  // Inicio
  homeSections: { es: 'Secciones', en: 'Sections' },

  // Cine
  cineLede: {
    es: 'Cortometrajes y largometrajes, de ficción y documental.',
    en: 'Short and feature films, fiction and documentary.',
  },
  inDevelopment: { es: 'En desarrollo', en: 'In development' },
  status: { es: 'Estado', en: 'Status' },
  labs: { es: 'Laboratorios / residencias', en: 'Labs / residencies' },
  synopsis: { es: 'Sinopsis', en: 'Synopsis' },
  duration: { es: 'Duración', en: 'Running time' },
  genre: { es: 'Género', en: 'Genre' },
  year: { es: 'Año', en: 'Year' },
  credits: { es: 'Créditos', en: 'Credits' },
  festivals: { es: 'Festivales', en: 'Festivals' },
  posters: { es: 'Pósters', en: 'Posters' },
  play: { es: 'Reproducir', en: 'Play' },
  watchOn: { es: 'Ver en', en: 'Watch on' },
  imagePending: { es: 'Imagen pendiente', en: 'Image to come' },
  allFilms: { es: 'Todas las películas', en: 'All films' },
  titles: { es: 'títulos', en: 'titles' },

  // Videoclips y fashion films
  clipsLede: {
    es: 'Videoclips dirigidos por Mario Alejandro Arias.',
    en: 'Music videos directed by Mario Alejandro Arias.',
  },
  fashionLede: {
    es: 'Fashion films dirigidos y montados por Mario Alejandro Arias.',
    en: 'Fashion films directed and edited by Mario Alejandro Arias.',
  },

  adsLede: {
    es: 'Publicidad y piezas de marca.',
    en: 'Commercials and branded work.',
  },
  comingSoon: { es: 'Próximamente', en: 'Coming soon' },

  // Fotografía
  photoLede: {
    es: 'Fotografía analógica en 35 mm. Todas las fotos están disponibles como copia impresa.',
    en: '35 mm film photography. Every photograph is available as a print.',
  },
  photos: { es: 'fotos', en: 'photos' },
  albums: { es: 'Álbumes', en: 'Albums' },
  allAlbums: { es: 'Todos los álbumes', en: 'All albums' },
  allProjects: { es: 'Todos los proyectos', en: 'All projects' },
  client: { es: 'Cliente', en: 'Client' },
  concept: { es: 'Concepto', en: 'Concept' },
  directionEditing: { es: 'Dirección y montaje', en: 'Direction & editing' },
  videos: { es: 'vídeos', en: 'videos' },
  video: { es: 'vídeo', en: 'video' },
  printSize: { es: 'Tamaño de copia', en: 'Print size' },
  filmStock: { es: 'Película', en: 'Film' },
  buy: { es: 'Comprar', en: 'Buy' },
  // Correo que se abre al pulsar "Comprar" en el visor ({title} y {album} se rellenan solos)
  buySubject: { es: 'Compra de fotografía — "{title}"', en: 'Print purchase — "{title}"' },
  buyBody: {
    es: 'Hola Mario,\n\nMe interesa comprar la fotografía "{title}" ({album}).\n\nGracias.',
    en: 'Hi Mario,\n\nI would like to buy the photograph "{title}" ({album}).\n\nThank you.',
  },
  prev: { es: 'Anterior', en: 'Previous' },
  next: { es: 'Siguiente', en: 'Next' },

  // Música
  musicListen: { es: 'Escuchar en', en: 'Listen on' },
  releases: { es: 'lanzamientos', en: 'releases' },

  // Bio
  contact: { es: 'Contacto', en: 'Contact' },
  email: { es: 'Correo', en: 'Email' },
  copy: { es: 'Copiar correo', en: 'Copy email' },
  copied: { es: 'Copiado', en: 'Copied' },
  company: { es: 'Productora', en: 'Production company' },

  notFound: { es: 'Esta página no existe.', en: 'This page does not exist.' },
  goHome: { es: 'Volver al inicio', en: 'Back to home' },
}
