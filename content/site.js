// ================================================================
//  CONTENIDO DEL PORTFOLIO · Mario Alejandro Arias
//  Todo lo que se ve en la web sale de este archivo.
//
//  Textos en dos idiomas:   { es: 'Texto en español', en: 'English text' }
//  Textos iguales en ambos: 'Texto'   (una cadena sola sirve para los dos)
//
//  Las líneas marcadas con TODO son contenido pendiente de Mario.
//  Guía completa: README.md, sección "Editar contenido".
// ================================================================

window.SITE = {}

// ---- PERFIL / BIO -----------------------------------------------
SITE.profile = {
  name: 'Mario Alejandro Arias',
  email: 'ariasmario199@gmail.com',
  instagram: 'ariomariassilva',
  photo: 'images/perfil/retrato.jpg',
  roles: 'Filmmaker, Director and Creative Consultant', // subtítulo de Bio y Contacto (igual que en la portada)
  based: 'Madrid · Quito',
  // Palabras de la bio que se convierten en enlace (en los dos idiomas).
  bioLinks: {
    'Filmin': 'https://www.filmin.es/direccion/mario-alejandro-arias?origin=searcher&origin-query=secondary',
  },
  // Bio revisada por Bernardo (14 oct 2026). La versión en inglés es una
  // traducción nuestra: pendiente de revisar con Mario.
  bio: {
    es: [
      'Mario Alejandro Arias (Quito, 1999) es un director de cine y creativo audiovisual ecuatoriano, con más de diez años de trayectoria en distintas disciplinas artísticas. Su trabajo se desarrolla entre el cine, la dirección creativa, la publicidad, la moda y la música, combinando una mirada autoral con una sólida formación cinematográfica en Europa.',
      'Becado para estudiar Cine Documental en la ECAM (Escuela de Cinematografía y del Audiovisual de la Comunidad de Madrid), se graduó como primero de su promoción. Su trabajo final de carrera fue la dirección, producción y montaje de un largometraje documental que se estrenó en el Festival de Málaga en 2022. Sus proyectos han recorrido festivales como D\'A Barcelona, Atlàntida Film Fest, EDOC, ABYCine, Curtocircuíto, Alcances y Ull Nu Andorra, donde obtuvo el Premio del Público. Tres de sus películas forman parte del catálogo permanente de Filmin.',
      'En el ámbito comercial, su trabajo abarca desde colaboraciones con artistas independientes emergentes hasta proyectos para grandes compañías como Warner Music, además de piezas audiovisuales para marcas de moda independientes latinoamericanas. En 2025 cofundó +BIEN, una productora audiovisual internacional de carácter autoral, especializada en publicidad, fashion films, videoclips y dirección creativa.',
      'Su lenguaje visual se caracteriza por una sensibilidad conceptual precisa, una estética minimalista y una búsqueda constante de nuevas formas de narrar. A través de imágenes elegantes y narrativas memorables, transforma ideas complejas en experiencias visuales accesibles, evocadoras y con identidad propia.',
      'Trabaja en español e inglés y mantiene una práctica creativa abierta a colaboraciones internacionales.',
    ],
    en: [
      'Mario Alejandro Arias (Quito, 1999) is an Ecuadorian film director and audiovisual creative with more than ten years of experience across artistic disciplines. His work moves between film, creative direction, advertising, fashion and music, combining an auteur’s eye with solid film training in Europe.',
      'He received a scholarship to study Documentary Film at ECAM (the Madrid Film School) and graduated first in his class. His graduation project was directing, producing and editing a feature documentary that premiered at the Málaga Film Festival in 2022. His projects have screened at festivals such as D\'A Barcelona, Atlàntida Film Fest, EDOC, ABYCine, Curtocircuíto, Alcances and Ull Nu Andorra, where he won the Audience Award. Three of his films are part of Filmin’s permanent catalogue.',
      'In commercial work, his projects range from collaborations with emerging independent artists to work for major companies such as Warner Music, as well as audiovisual pieces for independent Latin American fashion brands. In 2025 he co-founded +BIEN, an international, auteur-driven production company specialising in commercials, fashion films, music videos and creative direction.',
      'His visual language is defined by precise conceptual sensitivity, a minimalist aesthetic and a constant search for new ways of telling stories. Through elegant images and memorable narratives, he turns complex ideas into visual experiences that are accessible, evocative and distinctly his own.',
      'He works in Spanish and English and keeps a creative practice open to international collaboration.',
    ],
  },
  company: { name: '+BIEN', url: null }, // TODO: web o Instagram de +BIEN
}

// ---- INICIO -----------------------------------------------------
// La portada es una sola pantalla (boceto de Bernardo, oct 2026):
// nombre arriba a la izquierda, las secciones en fila con una imagen
// pequeña debajo de cada una y "Contacto" abajo a la derecha.
// sections: orden, etiqueta corta y miniatura de cada sección.
//   path = página a la que lleva (ver el menú en content/ui.js).
//   image: null muestra un recuadro "imagen pendiente".
SITE.home = {
  // Texto bajo el nombre (pedido por Bernardo, oct 2026)
  role: 'Filmmaker, Director and Creative Consultant',
  tagline: {
    es: 'Explorando el encuentro entre el cine, la moda y la publicidad a través de una mirada conceptual, minimalista y profundamente visual.',
    en: 'Exploring where film, fashion and advertising meet, through a conceptual, minimalist and deeply visual eye.',
  },
  sections: [
    { path: 'cine', label: { es: 'Cine', en: 'Film' }, image: 'images/home/yev.jpg', video: 'videos/home/yev.mp4' }, // fragmento de YEV
    { path: 'videoclips', label: { es: 'Videoclips', en: 'Music videos' }, image: 'images/home/azul.jpg', video: 'videos/home/azul.mp4' }, // fragmento de Azul
    // images: varias fotos que se van alternando cada 3 segundos (en este orden)
    { path: 'fotografia', label: { es: 'Fotografía', en: 'Photography' }, image: 'images/fotos/porto/porto-01.jpg', images: [
      'images/fotos/porto/porto-01.jpg',
      'images/fotos/editorial/editorial-05.jpg',
      'images/fotos/ecuador/ecuador-01.jpg',
      'images/fotos/ecuador/ecuador-03.jpg',
      'images/fotos/ecuador/ecuador-04.jpg',
      'images/fotos/ecuador/ecuador-17.jpg',
      'images/fotos/ecuador/ecuador-20.jpg',
      'images/fotos/sevilla/sevilla-04.jpg',
      'images/fotos/sevilla/sevilla-11.jpg',
      'images/fotos/paris/paris-03.jpg',
      'images/fotos/italia/italia-01.jpg',
    ] },
    { path: 'fashion-films', label: 'Fashion Films', image: 'images/home/sakafilm.jpg', video: 'videos/home/sakafilm.mp4' }, // fragmento de SAKAFILM
    // video: se reproduce solo, sin sonido y en bucle al entrar en la portada (image es su fotograma de reserva).
    // Con una lista de vídeos se reproducen uno tras otro y vuelve a empezar.
    { path: 'publicidad', label: { es: 'Publicidad', en: 'Commercials' }, image: 'images/home/estudio-septiembre.jpg', video: 'videos/home/estudio-septiembre.mp4' }, // Estudio Septiembre
  ],
}

// ---- CINE --------------------------------------------------------
// Orden = orden de aparición. slug = dirección de la ficha (#/cine/slug).
// vimeoId: número del enlace vimeo.com/<id>. still: fotograma del listado.
// posters: 0, 1 o varios. aspect (opcional): proporción del vídeo.
SITE.films = [
  {
    slug: 'ya-estan-viniendo',
    title: 'Ya están viniendo',
    year: '2025',
    genre: { es: 'Terror', en: 'Horror' },
    duration: '20 min',
    vimeoId: '1195644270',
    still: 'images/fotogramas/ya-estan-viniendo.jpg',
    posters: ['images/posters/ya-estan-viniendo.jpg'],
    synopsis: {
      es: 'Un grupo de amigos viaja a la montaña para probar hongos alucinógenos y escapar de las ansiedades y decepciones de la adultez temprana.',
      en: 'A group of friends travel to the mountains to try magic mushrooms and escape the anxieties and disappointments of early adulthood.',
    },
    credits: [
      {
        role: { es: 'Guion y dirección', en: 'Written and directed by' },
        name: 'Mario Alejandro Arias · Miguel Guindos',
      },
    ],
    festivals: [],
  },
  {
    slug: 'que-calor-hara-sin-vos-en-verano',
    title: 'Qué calor hará sin vos en verano',
    year: '2024',
    genre: 'Drama',
    duration: '22 min',
    vimeoId: '1195638556',
    still: 'images/fotogramas/que-calor.jpg',
    posters: ['images/posters/que-calor-a.jpg', 'images/posters/que-calor-b.jpg'],
    synopsis: {
      es: 'Emilio y Mia se conocen en la primavera madrileña. Mientras más se conocen más se enamoran, haciendo que su inevitable separación sea aún más dolorosa.',
      en: 'Emilio and Mia meet during a Madrid spring. The more they get to know each other, the more they fall in love, which makes their inevitable separation even more painful.',
    },
    credits: [
      {
        role: { es: 'Guion y dirección', en: 'Written and directed by' },
        name: 'Mario Alejandro Arias',
      },
    ],
    festivals: [
      'Cinemajove Festival Internacional de Cine',
      'Festival International de Courts Métrages d\'Aix-en-Provence',
    ],
  },
  {
    slug: 'its-just-a-burning-memory',
    title: 'It\'s Just a Burning Memory',
    year: '2022',
    genre: { es: 'Documental / ficción', en: 'Documentary / fiction' },
    duration: '14 min',
    vimeoId: '677462969',
    still: 'images/fotogramas/burning-memory.jpg',
    posters: ['images/posters/burning-memory.jpg'],
    synopsis: {
      es: 'Décadas después de aquel primer romance, después de aquel error que le costó todo, el antropólogo recibe una carta en su buzón: una invitación a un funeral.',
      en: 'Decades after that first romance, after the mistake that cost him everything, the anthropologist finds a letter in his mailbox: an invitation to a funeral.',
    },
    credits: [
      {
        role: { es: 'Guion, dirección y montaje', en: 'Written, directed and edited by' },
        name: 'Mario Alejandro Arias',
      },
    ],
    festivals: [
      'Curtocircuíto Festival Internacional de Cinema',
      'EDOC',
      'Márgenes Madrid IFF',
      'ABYCine',
      'Alcances Festival de Cine Documental',
    ],
  },
  {
    slug: 'tener-tiempo',
    title: 'Tener tiempo',
    year: '2021',
    genre: { es: 'Documental', en: 'Documentary' },
    duration: '77 min',
    vimeoId: '1195634710',
    aspect: '960 / 487',
    still: 'images/fotogramas/tener-tiempo.jpg',
    posters: ['images/posters/tener-tiempo-a.jpg', 'images/posters/tener-tiempo-b.jpg'],
    synopsis: {
      es: 'Madrid. 2021. Los parques están vacíos. Hay elecciones regionales. Y exámenes finales. Mientras tanto, Pedro, Kiko y Jesús aceptan participar en una película sobre sus vidas.',
      en: 'Madrid. 2021. The parks are empty. There are regional elections. And final exams. Meanwhile, Pedro, Kiko and Jesús agree to take part in a film about their lives.',
    },
    credits: [
      { role: { es: 'Producción', en: 'Produced by' }, name: 'Mario Alejandro Arias · ECAM' },
      {
        role: { es: 'Guion, dirección y montaje', en: 'Written, directed and edited by' },
        name: 'Mario Alejandro Arias · Gabriela Alma · Nicolás Martín Ruiz',
      },
    ],
    festivals: [
      'Festival de Málaga',
      'Atlàntida Film Fest',
      'D\'A Barcelona',
      'Dock of the Bay',
      'Ull Nu Andorra (Premi del Públic)',
    ],
  },
  {
    slug: 'capsula-del-tiempo',
    title: 'Cápsula del tiempo',
    year: '2021',
    genre: { es: 'Documental', en: 'Documentary' },
    duration: '8 min',
    vimeoId: '572092214',
    still: 'images/fotogramas/capsula.jpg',
    posters: ['images/posters/capsula.jpg'],
    synopsis: { es: 'Enero, 2021. Madrid.', en: 'January 2021. Madrid.' },
    credits: [
      {
        role: { es: 'Guion, dirección, cámara y montaje', en: 'Written, directed, shot and edited by' },
        name: 'Mario Alejandro Arias',
      },
    ],
    festivals: [],
  },
  {
    slug: 'gamines',
    title: 'Gamínes',
    year: '2019',
    genre: { es: 'Documental', en: 'Documentary' },
    duration: '12 min',
    vimeoId: '689061890',
    still: 'images/fotogramas/gamines.jpg',
    posters: [],
    synopsis: {
      es: 'Es la despedida de Esteban: se va a estudiar al extranjero. Invitó a nueve chicas y a nueve chicos. Llegaron siete chicos. Al ver esto, los presentes deciden ahogar sus penas en alcohol y salir a la calle.',
      en: 'It is Esteban’s farewell party: he is leaving to study abroad. He invited nine girls and nine boys. Seven boys showed up. Seeing this, those present decide to drown their sorrows in alcohol and take to the streets.',
    },
    credits: [
      {
        role: { es: 'Dirección y montaje', en: 'Directed and edited by' },
        name: 'Mario Alejandro Arias',
      },
    ],
    festivals: [],
  },
  {
    slug: 'condenado-a-escuchar',
    title: 'Condenado a escuchar',
    year: '2019',
    genre: { es: 'Documental', en: 'Documentary' },
    duration: '9 min',
    vimeoId: '572097681',
    still: 'images/fotogramas/condenado.jpg',
    posters: [],
    synopsis: {
      es: 'Octubre 2019, la violencia, los heridos y los muertos crecen conforme la manifestación indígena se acerca a Quito. En Madrid, después de varias noches de insomnio, un cineasta decide apagar el celular e ir a caminar al parque.',
      en: 'October 2019. Violence, injuries and deaths grow as the Indigenous protest approaches Quito. In Madrid, after several sleepless nights, a filmmaker decides to switch off his phone and go for a walk in the park.',
    },
    credits: [
      {
        role: {
          es: 'Dirección, cámara, montaje y edición de sonido',
          en: 'Directed, shot, edited and sound edited by',
        },
        name: 'Mario Alejandro Arias',
      },
    ],
    festivals: [],
  },
]

// ---- CINE · EN DESARROLLO -----------------------------------------
// image: null muestra un recuadro "imagen pendiente".
SITE.inDevelopment = [
  {
    // Con slug, la tarjeta abre una ficha propia (#/cine/<slug>).
    slug: 'gamines-largometraje',
    title: 'GAMÍNES',
    kind: { es: 'Largometraje de ficción · ópera prima', en: 'Fiction feature · debut film' },
    status: { es: 'En proceso de escritura del guion', en: 'Screenplay in progress' },
    text: {
      es: 'Quito, 2016. Quedan días para terminar el último año del colegio. Tres amigos de toda la vida se enfrentan al final de su amistad ante un futuro marcado por el dinero, el apellido y la clase social.',
      en: 'Quito, 2016. Only days remain until the end of their final year of high school. Three lifelong friends face the end of their friendship and a future shaped by money, surnames and social class.',
    },
    duration: '90 min',
    genre: { es: 'Comedia, drama', en: 'Comedy, drama' },
    credits: [
      { role: { es: 'Guion y dirección', en: 'Written and directed by' }, name: 'Mario Alejandro Arias' },
    ],
    labs: ['OFF Escac'],
    image: 'images/desarrollo/gamines.jpg',
  },
  {
    slug: 'bolon-de-verde',
    title: 'Bolón de Verde',
    kind: { es: 'Cortometraje', en: 'Short film' },
    status: { es: 'En proceso de financiación', en: 'Seeking financing' },
    text: {
      es: 'Emilio está a un paso de terminar su odisea burocrática. En la interminable cola de la oficina de extranjería de Madrid conoce a Brayan, otro migrante ecuatoriano que también intenta volver a casa. Estadísticamente, solo uno de los dos conseguirá el documento que necesita. Al otro… lo espera la catapulta.',
      en: 'Emilio is one step away from the end of his bureaucratic odyssey. In the endless queue at Madrid’s immigration office he meets Brayan, another Ecuadorian migrant who is also trying to get back home. Statistically, only one of them will get the document he needs. The other one… the catapult awaits.',
    },
    duration: '20 min',
    genre: { es: 'Comedia', en: 'Comedy' },
    credits: [
      { role: { es: 'Guion y dirección', en: 'Written and directed by' }, name: 'Mario Alejandro Arias' },
    ],
    labs: ['AFTER ECAM 2025'],
    image: 'images/desarrollo/bolon-de-verde.jpg',
  },
]

// ---- VIDEOCLIPS --------------------------------------------------
// youtubeId: lo que va después de youtu.be/ o de watch?v=.
// El orden lo eligió Mario (lo mejor primero), no es cronológico.
SITE.videoclips = [
  { artist: 'Cristóbal Espinosa', title: 'Azul', youtubeId: 'oEjGuhBYyaI' },
  { artist: 'Mauro Samaniego', title: 'El Elegido', youtubeId: 'QcMhw7SYz_M' },
  { artist: 'ROSSA', title: 'lo que brilla', youtubeId: 'dqe_zwxGE4c' },
  { artist: 'ROSSA', title: 'presa', youtubeId: 'z66Xgy05g_s' },
  { artist: 'ROSSA', title: 'ni me miro a la cara', youtubeId: 'MJt8wbU6WDc' },
  { artist: 'Toxic Chamán', title: 'Toxic Mantra', youtubeId: 'RK4KHySvWAI' },
  { artist: 'Santa Engracia 103', title: 'Live Sesh', youtubeId: 'Gfs_tCz9o4c' },
  { artist: 'MATEO2', title: 'Andrew\'s', youtubeId: 'C-eMz195_h4' },
  { artist: 'MATEO2', title: 'Henson', youtubeId: 'Mp2_z1HqWOQ' },
  { artist: 'MATEO2', title: 'Lo Mejor', youtubeId: 'geTl47_NwlE' },
  { artist: 'Silva, Del Pozo', title: 'Estas cosas de quererse', youtubeId: '5ODwXzicbbs' },
  { artist: 'Silva, Del Pozo', title: 'Una Hormiga', youtubeId: 'wzshgQsHmsU' },
  { artist: 'ARIAM', title: 'Cayena', youtubeId: 'tJpCFMi3Qdw' },
  { artist: 'BRONCO', title: 'Nueve Tildes', youtubeId: 'z_UYg31cJSE' },
  { artist: 'BRONCO', title: 'Y si sí 2', youtubeId: '-PjxgdSseqY' },
]

// ---- FASHION FILMS -----------------------------------------------
SITE.fashionFilms = [
  {
    brand: 'SAKAWA',
    title: 'no pienso en tí, solo te siento (1)',
    year: '2025',
    duration: '1 min',
    credits: {
      role: { es: 'Dirección y montaje:', en: 'Directed and edited by' },
      name: 'Mario Alejandro Arias',
    },
    youtubeId: 'k5rYVhh7skE',
  },
  {
    brand: 'SAKAWA',
    title: 'no pienso en tí, solo te siento (2)',
    year: '2025',
    duration: '1 min',
    credits: {
      role: { es: 'Dirección y montaje:', en: 'Directed and edited by' },
      name: 'Mario Alejandro Arias',
    },
    youtubeId: 'LDXNFJg3FRI',
  },
  {
    brand: 'SAKAWA',
    title: 'no pienso en tí, solo te siento (3)',
    year: '2025',
    duration: '1 min',
    credits: {
      role: { es: 'Dirección y montaje:', en: 'Directed and edited by' },
      name: 'Mario Alejandro Arias',
    },
    youtubeId: 'nl_BWIiB0K4',
  },
  {
    brand: 'SAKAWA',
    title: 'no pienso en tí, solo te siento (4)',
    year: '2025',
    duration: '2 min',
    credits: {
      role: { es: 'Dirección y montaje:', en: 'Directed and edited by' },
      name: 'Mario Alejandro Arias',
    },
    youtubeId: 'H5T42PkZ5aM',
  },
]

// ---- PUBLICIDAD -------------------------------------------------
// Anuncios y piezas de marca. Mismo formato que los fashion films:
//   { brand: 'Marca', title: 'Título', year: '2025', duration: '30 s',
//     credits: { es: 'Dirección: ...', en: 'Directed by ...' }, youtubeId: '...' }
// Mientras la lista esté vacía, la página muestra un aviso de "próximamente".
// Publicidad: cada proyecto (marca/campaña) tiene su página con todos sus vídeos,
// agrupados por formato. Los vídeos están alojados en la propia web (no en YouTube):
// MP4 H.264 en videos/publicidad/<proyecto>/ y su fotograma en images/publicidad/<proyecto>/.
// Origen de Dr. You: "Videos Ads.zip" de Bernardo (oct 2026).
SITE.ads = [
  {
    slug: 'dr-you',
    title: 'Dr. You',
    year: '2026',
    credits: {
      client: 'Dr. You',
      concept: {
        es: 'Propuesta audiovisual completa para la marca de productos de bienestar. Múltiples materiales audiovisuales verticales, cuadrados y horizontales para redes sociales y para su web. Retratos de cada producto nuevo de la marca.',
        en: 'A complete audiovisual proposal for the wellness products brand. Multiple vertical, square and horizontal pieces for social media and the website. Portraits of each of the brand’s new products.',
      },
      duration: '< 1 min',
      direction: 'Mario Alejandro Arias', // TODO: confirmar
    },
    cover: 'images/publicidad/dr-you/h-general-web-horizontal-es.jpg',
    groups: [
    {
      label: { es: 'Horizontal', en: 'Horizontal' },
      aspect: '16 / 9', // marco común del grupo; el vídeo se ve entero al reproducir
      videos: [
        { duration: '8 s', aspect: '1280 / 718', video: 'videos/publicidad/dr-you/h-general-web-horizontal-es.mp4', poster: 'images/publicidad/dr-you/h-general-web-horizontal-es.jpg' },
        { duration: '7 s', aspect: '1280 / 704', video: 'videos/publicidad/dr-you/h-performance-horizontal-es.mp4', poster: 'images/publicidad/dr-you/h-performance-horizontal-es.jpg' },
        { duration: '5 s', aspect: '1280 / 712', video: 'videos/publicidad/dr-you/h-best-sellers-horizontal-es.mp4', poster: 'images/publicidad/dr-you/h-best-sellers-horizontal-es.jpg' },
        { duration: '6 s', aspect: '1280 / 476', video: 'videos/publicidad/dr-you/h-cellular-beauty-horizontal-es.mp4', poster: 'images/publicidad/dr-you/h-cellular-beauty-horizontal-es.jpg' },
      ],
    },
    {
      label: { es: 'Cuadrado', en: 'Square' },
      aspect: '1 / 1', // marco común del grupo; el vídeo se ve entero al reproducir
      videos: [
        { duration: '6 s', aspect: '1080 / 1080', video: 'videos/publicidad/dr-you/c-joshua-redes.mp4', poster: 'images/publicidad/dr-you/c-joshua-redes.jpg' },
        { duration: '7 s', aspect: '1080 / 1080', video: 'videos/publicidad/dr-you/c-mar-redes-pauta-web.mp4', poster: 'images/publicidad/dr-you/c-mar-redes-pauta-web.jpg' },
        { duration: '7 s', aspect: '1080 / 1080', video: 'videos/publicidad/dr-you/c-sleep-manuela-redes-web.mp4', poster: 'images/publicidad/dr-you/c-sleep-manuela-redes-web.jpg' },
        { duration: '8 s', aspect: '1080 / 1080', video: 'videos/publicidad/dr-you/c-sofi-redes-1.mp4', poster: 'images/publicidad/dr-you/c-sofi-redes-1.jpg' },
      ],
    },
    {
      label: { es: 'Vertical', en: 'Vertical' },
      aspect: '9 / 16', // marco común del grupo; el vídeo se ve entero al reproducir
      videos: [
        { duration: '6 s', aspect: '720 / 1280', video: 'videos/publicidad/dr-you/v-sofia-general-web-es.mp4', poster: 'images/publicidad/dr-you/v-sofia-general-web-es.jpg' },
        { duration: '4 s', aspect: '720 / 1280', video: 'videos/publicidad/dr-you/v-mar-general-web-es.mp4', poster: 'images/publicidad/dr-you/v-mar-general-web-es.jpg' },
        { duration: '7 s', aspect: '720 / 1280', video: 'videos/publicidad/dr-you/v-performance-video-es.mp4', poster: 'images/publicidad/dr-you/v-performance-video-es.jpg' },
        { duration: '6 s', aspect: '720 / 1280', video: 'videos/publicidad/dr-you/v-gut-balance-es.mp4', poster: 'images/publicidad/dr-you/v-gut-balance-es.jpg' },
      ],
    },
    ],
  },
  {
    slug: 'spectators-chroma',
    title: 'Spectator’s Chroma', // cliente: JAMB (sus archivos siguen en jamb/)
    year: '2026',
    credits: {
      client: 'JAMB',
      concept: { es: 'Un reel vertical para redes sociales y un “home movie” horizontal que resuma y conmemore la exposición del fotógrafo.', en: 'A vertical reel for social media and a horizontal home movie that sums up and commemorates the photographer’s exhibition.' },
      duration: '46 s / 1 min 25 s',
      direction: 'Mario Alejandro Arias', // TODO: confirmar
    },
    cover: 'images/publicidad/jamb/horizontal-29.jpg', // fotograma del 00:29
    groups: [
      {
        label: { es: 'Vertical', en: 'Vertical' },
        aspect: '9 / 16',
        videos: [
          { duration: '46 s', aspect: '1080 / 1920', video: 'videos/publicidad/jamb/vertical.mp4', poster: 'images/publicidad/jamb/vertical.jpg' },
        ],
      },
      {
        label: { es: 'Horizontal', en: 'Horizontal' },
        aspect: '16 / 9',
        videos: [
          { duration: '1 min 25 s', aspect: '1920 / 1080', video: 'videos/publicidad/jamb/horizontal.mp4', poster: 'images/publicidad/jamb/horizontal-29.jpg' },
        ],
      },
    ],
  },
  {
    slug: 'el-pulso-de-la-creacion',
    title: 'El Pulso de la Creación', // cliente: BAKKER (sus archivos siguen en bakker/)
    year: '2026',
    credits: {
      client: 'BAKKER',
      concept: { es: 'Un reel vertical para redes sociales que resuma y conmemore la exposición del artista.', en: 'A vertical reel for social media that sums up and commemorates the artist’s exhibition.' },
      duration: '1 min 8 s',
      direction: 'Mario Alejandro Arias', // TODO: confirmar
    },
    cover: 'images/publicidad/bakker/vertical.jpg',
    groups: [
      {
        label: { es: 'Vertical', en: 'Vertical' },
        aspect: '9 / 16',
        videos: [
          { duration: '1 min 8 s', aspect: '1080 / 1920', video: 'videos/publicidad/bakker/vertical.mp4', poster: 'images/publicidad/bakker/vertical.jpg' },
        ],
      },
    ],
  },
  {
    slug: 'un-dia-en-el-estudio',
    title: 'Un día en el estudio', // cliente: Estudio Septiembre (sus archivos siguen en estudio-septiembre/)
    year: '2025',
    credits: {
      client: 'Estudio Septiembre',
      concept: { es: 'Un día completo en el Estudio Septiembre visto únicamente a través de las manos.', en: 'A full day at Estudio Septiembre, seen only through hands.' },
      duration: '2 min',
      direction: 'Mario Alejandro Arias', // TODO: confirmar
    },
    cover: 'images/publicidad/estudio-septiembre/un-dia-en-el-estudio.jpg',
    groups: [
      {
        label: { es: 'Horizontal', en: 'Horizontal' },
        aspect: '16 / 9',
        videos: [
          { duration: '2 min', aspect: '1920 / 1080', vimeoId: '1235993243', poster: 'images/publicidad/estudio-septiembre/un-dia-en-el-estudio.jpg' },
        ],
      },
    ],
  },
  {
    slug: 'espejos-en-el-cielo',
    title: 'Espejos en el Cielo', // EEEC
    year: '2024',
    credits: {
      client: 'Mateo2',
      concept: {
        es: 'Tres reels para redes sociales que anuncien el lanzamiento de la nueva canción del artista. Un primer reel “teaser” que siembre misterio y dos reels con la fecha de salida del tema.',
        en: 'Three social media reels announcing the release of the artist’s new song: a first teaser reel that builds mystery and two reels with the release date.',
      },
      duration: '< 1 min',
      direction: 'Mario Alejandro Arias', // TODO: confirmar
    },
    cover: 'images/publicidad/eeec/portada.jpg', // recorte horizontal de la Promo 1 (segundo 4); el vídeo usa el fotograma del 00:34
    groups: [
      {
        label: { es: 'Vertical', en: 'Vertical' },
        aspect: '9 / 16',
        videos: [
          { title: { es: 'Promo 1', en: 'Promo 1' }, duration: '39 s', aspect: '1080 / 1920', video: 'videos/publicidad/eeec/promo-1.mp4', poster: 'images/publicidad/eeec/promo-1-34.jpg' },
          { title: { es: 'Promo 2', en: 'Promo 2' }, duration: '6 s', aspect: '1080 / 1920', video: 'videos/publicidad/eeec/promo-2.mp4', poster: 'images/publicidad/eeec/promo-2.jpg' },
          { title: { es: 'Promo 3', en: 'Promo 3' }, duration: '15 s', aspect: '1080 / 1920', video: 'videos/publicidad/eeec/promo-3.mp4', poster: 'images/publicidad/eeec/promo-3.jpg' },
        ],
      },
    ],
  },
]

// ---- MÚSICA (Silva, del Pozo) ------------------------------------
// Sin reproductores incrustados a propósito: solo portada y enlaces.
// platforms marca el orden de los enlaces (Spotify al final, a pedido de Mario).
SITE.music = {
  artist: 'Silva, del Pozo',
  intro: {
    es: 'Además del audiovisual, Mario hace música bajo el nombre Silva, del Pozo.',
    en: 'Alongside his film work, Mario makes music as Silva, del Pozo.',
  },
  platforms: [
    { key: 'youtube', label: 'YouTube' },
    { key: 'apple', label: 'Apple Music' },
    { key: 'tidal', label: 'Tidal' },
    { key: 'deezer', label: 'Deezer' },
    { key: 'spotify', label: 'Spotify' },
  ],
  releases: [
    {
      title: 'I\'m Glad',
      year: '2025',
      type: 'Single',
      duration: '3:55',
      artists: 'Silva, del Pozo',
      cover: 'images/portadas/im-glad.jpg',
      links: {
        youtube: 'https://www.youtube.com/watch?v=SNca1R_BZYk',
        apple: 'https://music.apple.com/es/album/im-glad-single/1868472816',
        tidal: 'https://listen.tidal.com/track/489401827',
        deezer: 'https://www.deezer.com/track/3771940422',
        spotify: 'https://open.spotify.com/track/2WWkhVhMJpFQTqtiPvFiXY',
      },
    },
    {
      title: 'INAMOVIBLE.',
      year: '2025',
      type: 'Single',
      duration: '3:32',
      artists: 'Silva, del Pozo · mateo2',
      cover: 'images/portadas/inamovible.jpg',
      links: {
        youtube: 'https://www.youtube.com/watch?v=5_LNZCVTOVA',
        apple: 'https://music.apple.com/es/album/inamovible-single/1817421823',
        tidal: 'https://listen.tidal.com/track/438932357',
        deezer: 'https://www.deezer.com/track/3390583951',
        spotify: 'https://open.spotify.com/track/3yYR6tplR9CUfVa88JU58F',
      },
    },
    {
      title: 'GOYENCHE',
      year: '2025',
      type: 'Single',
      duration: '3:53',
      artists: 'Silva, del Pozo · mateo2',
      cover: 'images/portadas/goyenche.jpg',
      links: {
        youtube: 'https://www.youtube.com/watch?v=umbHig3PZ-U',
        apple: 'https://music.apple.com/es/album/goyenche-single/1788569001',
        tidal: 'https://listen.tidal.com/track/409220817',
        deezer: 'https://www.deezer.com/track/3169610581',
        spotify: 'https://open.spotify.com/track/295jHbbZw41wFmlT8mdzkA',
      },
    },
    {
      title: 'Tristes Teorías',
      year: '2025',
      type: 'Single',
      duration: '3:32',
      artists: 'Felipe Zapata · JGG · Silva, del Pozo',
      cover: 'images/portadas/tristes-teorias.jpg',
      links: {
        youtube: 'https://www.youtube.com/watch?v=Ox_cW4gnTgI',
        tidal: 'https://listen.tidal.com/track/453546733',
        deezer: 'https://www.deezer.com/track/3504081061',
        spotify: 'https://open.spotify.com/track/3ioAzWQs782P7dgkdMbevg',
      },
    },
    {
      title: 'bobi',
      year: '2024',
      type: 'Single',
      duration: '3:28',
      artists: 'Silva, del Pozo · yoyo · mateo2',
      cover: 'images/portadas/bobi.jpg',
      links: {
        youtube: 'https://www.youtube.com/watch?v=ngd71kOxPc0',
        apple: 'https://music.apple.com/es/album/bobi-single/1771005838',
        tidal: 'https://listen.tidal.com/track/389991051',
        deezer: 'https://www.deezer.com/track/3019333521',
        spotify: 'https://open.spotify.com/track/7xzZ0kFKRnA8qvBWGFbgyD',
      },
    },
    {
      title: 'tal vez vuelvo a rezar',
      year: '2024',
      type: 'Single',
      duration: '3:25',
      artists: 'blantx · Silva, del Pozo · mateo2',
      cover: 'images/portadas/tal-vez-vuelvo-a-rezar.jpg',
      links: {
        youtube: 'https://www.youtube.com/watch?v=JTkoMagIeuE',
        apple: 'https://music.apple.com/es/album/tal-vez-vuelvo-a-rezar-single/1759260250',
        tidal: 'https://listen.tidal.com/track/377187269',
        deezer: 'https://www.deezer.com/track/2912411821',
        spotify: 'https://open.spotify.com/track/4ok3rypfF28d2m6sOf3app',
      },
    },
    {
      title: 'ESTAS COSAS DE QUERERSE',
      year: '2024',
      type: 'Single',
      duration: '3:47',
      artists: 'Silva, del Pozo · Bronco · mateo2',
      cover: 'images/portadas/estas-cosas-de-quererse.jpg',
      links: {
        youtube: 'https://www.youtube.com/watch?v=5ODwXzicbbs',
        apple: 'https://music.apple.com/es/album/estas-cosas-de-quererse-single/1738034730',
        tidal: 'https://listen.tidal.com/track/353682089',
        deezer: 'https://www.deezer.com/track/2723349042',
        spotify: 'https://open.spotify.com/track/4dzhPEyWtISL5jjRGsu03Y',
      },
    },
    {
      title: 'ANDREW´S',
      year: '2023',
      type: 'Single',
      duration: '3:48',
      artists: 'mateo2 · Silva, del Pozo',
      cover: 'images/portadas/andrews.jpg',
      links: {
        youtube: 'https://www.youtube.com/watch?v=ffQsUG4rC2g',
        apple: 'https://music.apple.com/es/album/andrews-feat-silva-del-pozo-single/1713227564',
        tidal: 'https://listen.tidal.com/track/323649818',
        deezer: 'https://www.deezer.com/track/2512776251',
        spotify: 'https://open.spotify.com/track/4Epf8uTHLxCk42RElLwCtc',
      },
    },
    {
      title: 'Ya no hacemos castillos de arena',
      year: '2022',
      type: 'EP',
      duration: { es: '4 temas · 21:10', en: '4 tracks · 21:10' },
      artists: 'Silva, del Pozo · Gold Sirope · contente',
      cover: 'images/portadas/castillos-de-arena.jpg',
      links: {
        apple: 'https://music.apple.com/es/album/ya-no-hacemos-castillos-de-arena-feat-gold-sirope-ep/1643917267',
        tidal: 'https://listen.tidal.com/album/247122061',
        spotify: 'https://open.spotify.com/album/78EYur16LE2CSe8orCHAoq',
      },
    },
    {
      title: 'Una Hormiga',
      year: '2022',
      type: 'Single',
      duration: '4:16',
      artists: 'Silva, del Pozo · Gold Sirope',
      cover: 'images/portadas/una-hormiga.jpg',
      links: {
        youtube: 'https://www.youtube.com/watch?v=wzshgQsHmsU',
        apple: 'https://music.apple.com/es/album/una-hormiga-single/1634761316',
        tidal: 'https://listen.tidal.com/track/238051899',
        spotify: 'https://open.spotify.com/track/16g6QtmYL9kuxZcnv2MPdU',
      },
    },
  ],
}

// ---- FOTOGRAFÍA --------------------------------------------------
// El orden de las fotos es el de esta lista (no el nombre del archivo).
// Los títulos de las fotos son nombres de obra: no se traducen,
// salvo las descripciones de Editorial.
SITE.albums = [
  {
    slug: 'ecuador',
    name: 'Ecuador',
    note: { es: 'color & b/n', en: 'colour & b/w' },
    photos: [
      {
        title: 'El árbol de Mañokó 1',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-01.jpg',
      },
      {
        title: 'Las niñas Secoyas 1',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: { es: 'Blanco y negro · 35 mm', en: 'Black and white · 35 mm' },
        src: 'images/fotos/ecuador/ecuador-02.jpg',
      },
      {
        title: 'Fedelina y el can',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-03.jpg',
      },
      {
        title: 'El backflip de Heinner',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-04.jpg',
      },
      {
        title: 'El árbol de Mañokó 2',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-05.jpg',
      },
      {
        title: 'La orquídea que viajó con nosotros',
        year: '2023',
        size: { es: '42 cm × 29,7 cm (A3)', en: '42 cm × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-06.jpg',
      },
      {
        title: 'Las niñas Secoyas 2',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 cm × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 cm × 29.7 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-07.jpg',
      },
      {
        title: 'La entrada a Lagartococha',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-08.jpg',
      },
      {
        title: 'Nada',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: { es: 'Blanco y negro · 35 mm', en: 'Black and white · 35 mm' },
        src: 'images/fotos/ecuador/ecuador-09.jpg',
      },
      {
        title: 'El árbol de Mañokó 3',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-10.jpg',
      },
      {
        title: 'Deeper',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: { es: 'Blanco y negro · 35 mm', en: 'Black and white · 35 mm' },
        src: 'images/fotos/ecuador/ecuador-11.jpg',
      },
      {
        title: 'Elisa llega',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-12.jpg',
      },
      {
        title: 'Los reyes del mundo',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-13.jpg',
      },
      {
        title: 'El machete de Segundo',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-14.jpg',
      },
      {
        title: 'Base camp',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: { es: 'Blanco y negro · 35 mm', en: 'Black and white · 35 mm' },
        src: 'images/fotos/ecuador/ecuador-15.jpg',
      },
      {
        title: 'El árbol de Mañokó 4',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-16.jpg',
      },
      {
        title: 'La nueva generación',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-17.jpg',
      },
      {
        title: 'Perlaza',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 cm × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 cm × 29.7 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-18.jpg',
      },
      {
        title: 'Atardecer en Lagartococha',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-19.jpg',
      },
      {
        title: 'Una boda en el hotel “La Misión”',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-20.jpg',
      },
      {
        title: 'Criatura',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: { es: 'Blanco y negro · 35 mm', en: 'Black and white · 35 mm' },
        src: 'images/fotos/ecuador/ecuador-21.jpg',
      },
      {
        title: 'Untitled',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-22.jpg',
      },
      {
        title: 'Casave',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-23.jpg',
      },
      {
        title: 'Autoretrato',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: { es: 'Blanco y negro · 35 mm', en: 'Black and white · 35 mm' },
        src: 'images/fotos/ecuador/ecuador-24.jpg',
      },
      {
        title: 'Rigobertita',
        year: '2023',
        size: { es: '42 cm × 29,7 cm (A3)', en: '42 cm × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-25.jpg',
      },
      {
        title: 'Fedelina escondida',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-26.jpg',
      },
      {
        title: 'Pirañas 1',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-27.jpg',
      },
      {
        title: 'Sam meditates',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: { es: 'Blanco y negro · 35 mm', en: 'Black and white · 35 mm' },
        src: 'images/fotos/ecuador/ecuador-28.jpg',
      },
      {
        title: 'La chamba',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-29.jpg',
      },
      {
        title: 'Hotel “La Misión”',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-30.jpg',
      },
      {
        title: 'Pirañas 2',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-31.jpg',
      },
      {
        title: 'Sam y el árbol',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-32.jpg',
      },
      {
        title: 'Selva',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-33.jpg',
      },
      {
        title: 'Hermanos',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: { es: 'Blanco y negro · 35 mm', en: 'Black and white · 35 mm' },
        src: 'images/fotos/ecuador/ecuador-34.jpg',
      },
      {
        title: 'Machete',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-35.jpg',
      },
      {
        title: 'Cris y los niños',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-36.jpg',
      },
      {
        title: 'Antigua',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-37.jpg',
      },
      {
        title: 'Niña',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-38.jpg',
      },
      {
        title: 'Diario de Rodaje',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-39.jpg',
      },
      {
        title: 'Manuel Pallares',
        year: '2023',
        size: { es: '42 cm × 29,7 cm (A3)', en: '42 cm × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-40.jpg',
      },
      {
        title: 'Sam on Lucy',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 cm × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 cm × 29.7 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-41.jpg',
      },
      {
        title: 'Niñas Secoyas',
        year: '2023',
        size: { es: '42 cm × 29,7 cm (A3)', en: '42 cm × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-42.jpg',
      },
      {
        title: 'Segundo',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-43.jpg',
      },
      {
        title: 'Segundo se va',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-44.jpg',
      },
      {
        title: 'Selva velada',
        year: '2023',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-45.jpg',
      },
      {
        title: 'El creador de máscaras',
        year: '2025',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-46.jpg',
      },
      {
        title: 'Untitled (Hombre Lynchiano)',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-47.jpg',
      },
      {
        title: 'Untitled 2',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-48.jpg',
      },
      {
        title: 'Untitled 3',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-49.jpg',
      },
      {
        title: 'Untitled 4',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-50.jpg',
      },
      {
        title: 'Untitled 5',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-51.jpg',
      },
      {
        title: 'Untitled 6',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/ecuador/ecuador-52.jpg',
      },
    ],
  },
  {
    slug: 'sevilla',
    name: { es: 'Sevilla', en: 'Seville' },
    note: { es: 'color', en: 'colour' },
    photos: [
      {
        title: 'Descubriendo a Dios',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-01.jpg',
      },
      {
        title: 'Dios',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-02.jpg',
      },
      {
        title: 'Encapuchados 1',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-03.jpg',
      },
      {
        title: 'Encapuchados 2',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-04.jpg',
      },
      {
        title: 'Untitled',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-05.jpg',
      },
      {
        title: 'Encapuchados 3',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-06.jpg',
      },
      {
        title: 'España',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-07.jpg',
      },
      {
        title: 'La sevillana 1',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-08.jpg',
      },
      {
        title: 'La sevillana 2',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-09.jpg',
      },
      {
        title: 'La sevillana 3',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-10.jpg',
      },
      {
        title: 'La sevillana 4',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-11.jpg',
      },
      {
        title: 'El naranjo',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-12.jpg',
      },
      {
        title: 'Un patio andaluz',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-13.jpg',
      },
      {
        title: 'Abuelo y nieto',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-14.jpg',
      },
      {
        title: 'Cisne',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-15.jpg',
      },
      {
        title: 'Untitled',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-16.jpg',
      },
      {
        title: 'Untitled',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-17.jpg',
      },
      {
        title: 'La flamenquita',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-18.jpg',
      },
      {
        title: 'Rojo vino',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-19.jpg',
      },
      {
        title: 'La tumba de Colón',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/sevilla/sevilla-20.jpg',
      },
    ],
  },
  {
    slug: 'paris',
    name: { es: 'París', en: 'Paris' },
    note: { es: 'color', en: 'colour' },
    photos: [
      {
        title: 'Cafe du Temple',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-01.jpg',
      },
      {
        title: 'Mains',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-02.jpg',
      },
      {
        title: 'The Senegalese Lion',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-03.jpg',
      },
      {
        title: 'Flower man',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-04.jpg',
      },
      {
        title: 'Untitled',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-05.jpg',
      },
      {
        title: 'Lovers',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-06.jpg',
      },
      {
        title: 'Detective',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-07.jpg',
      },
      {
        title: 'Metropolitain',
        year: '2024',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-08.jpg',
      },
      {
        title: 'City of Love',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-09.jpg',
      },
      {
        title: 'Amis',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-10.jpg',
      },
      {
        title: 'Untitled',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-11.jpg',
      },
      {
        title: 'Louvre',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-12.jpg',
      },
      {
        title: 'Untitled',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-13.jpg',
      },
      {
        title: 'Portrait of a stranger',
        year: '2024',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-14.jpg',
      },
      {
        title: 'Self portrait, by a stranger',
        year: '2024',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-15.jpg',
      },
      {
        title: 'City of love 2',
        year: '2024',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-16.jpg',
      },
      {
        title: 'City of love 3',
        year: '2024',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-17.jpg',
      },
      {
        title: 'The Senegalese Lion 2',
        year: '2024',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Gold · 35 mm',
        src: 'images/fotos/paris/paris-18.jpg',
      },
    ],
  },
  {
    slug: 'mallorca',
    name: 'Mallorca',
    note: { es: 'b/n', en: 'b/w' },
    photos: [
      {
        title: 'Inamovible',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-01.jpg',
      },
      {
        title: 'Hermanos',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-02.jpg',
      },
      {
        title: 'Tumba',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-03.jpg',
      },
      {
        title: 'Guardianes',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-04.jpg',
      },
      {
        title: 'Untitled',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-05.jpg',
      },
      {
        title: 'Rapunzel',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-06.jpg',
      },
      {
        title: 'Casa',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-07.jpg',
      },
      {
        title: 'Cala',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-08.jpg',
      },
      {
        title: 'Playa',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-09.jpg',
      },
      {
        title: 'Cala 2',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-10.jpg',
      },
      {
        title: 'Casa 2',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-11.jpg',
      },
      {
        title: 'Cala 3',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-12.jpg',
      },
      {
        title: 'Iglesia',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-13.jpg',
      },
      {
        title: 'Retrato',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-14.jpg',
      },
      {
        title: 'Muro',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-15.jpg',
      },
      {
        title: 'Can',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-16.jpg',
      },
      {
        title: 'Can 2',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Ilford HP5+ · 35 mm',
        src: 'images/fotos/mallorca/mallorca-17.jpg',
      },
    ],
  },
  {
    slug: 'grecia',
    name: { es: 'Grecia', en: 'Greece' },
    note: { es: 'color', en: 'colour' },
    photos: [
      {
        title: 'Un óleo',
        year: '2025',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-01.jpg',
      },
      {
        title: 'Michis',
        year: '2025',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-02.jpg',
      },
      {
        title: 'Una luz',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-03.jpg',
      },
      {
        title: 'Los templos de los maestros del aire 1',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-04.jpg',
      },
      {
        title: 'Los templos de los maestros del aire 2',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-05.jpg',
      },
      {
        title: 'Los templos de los maestros del aire 3',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-06.jpg',
      },
      {
        title: 'Los templos de los maestros del aire 4',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-07.jpg',
      },
      {
        title: 'Los templos de los maestros del aire 5',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-08.jpg',
      },
      {
        title: 'Los templos de los maestros del aire 6',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-09.jpg',
      },
      {
        title: 'Boris',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-10.jpg',
      },
      {
        title: 'Amantes',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-11.jpg',
      },
      {
        title: 'Untitled',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-12.jpg',
      },
      {
        title: 'Untitled',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-13.jpg',
      },
      {
        title: 'Untitled',
        year: '2025',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/grecia/grecia-14.jpg',
      },
    ],
  },
  {
    slug: 'italia',
    name: { es: 'Italia', en: 'Italy' },
    note: { es: 'color', en: 'colour' },
    photos: [
      {
        title: 'Padre e figlia',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/italia/italia-01.jpg',
      },
      {
        title: 'Pizzeria',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/italia/italia-02.jpg',
      },
      {
        title: 'Untitled',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/italia/italia-03.jpg',
      },
      {
        title: 'Firenze',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/italia/italia-04.jpg',
      },
      {
        title: 'Toscana',
        year: '2024',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/italia/italia-05.jpg',
      },
      {
        title: 'Ragazzi',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/italia/italia-06.jpg',
      },
      {
        title: 'Sorella',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/italia/italia-07.jpg',
      },
    ],
  },
  {
    slug: 'porto',
    name: 'Porto',
    note: { es: 'color', en: 'colour' },
    photos: [
      {
        title: 'Untitled',
        year: '2024',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-01.jpg',
      },
      {
        title: 'Cristo',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-02.jpg',
      },
      {
        title: 'Porto 1',
        year: '2024',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-03.jpg',
      },
      {
        title: 'Saudade',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-04.jpg',
      },
      {
        title: 'Fantasma',
        year: '2024',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-05.jpg',
      },
      {
        title: 'Mais barato',
        year: '2024',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-06.jpg',
      },
      {
        title: 'Porto 2',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-07.jpg',
      },
      {
        title: 'Doñita',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-08.jpg',
      },
      {
        title: 'El chisme',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-09.jpg',
      },
      {
        title: 'Anuncio no pagado',
        year: '2024',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-10.jpg',
      },
      {
        title: 'Fantasmas 2',
        year: '2024',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/porto/porto-11.jpg',
      },
    ],
  },
  {
    slug: 'aix',
    name: 'Aix-en-Provence',
    note: { es: 'color', en: 'colour' },
    photos: [
      {
        title: 'Shadowy Light 1',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/aix/aix-01.jpg',
      },
      {
        title: 'Organ player',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/aix/aix-02.jpg',
      },
      {
        title: 'Untitled 1',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/aix/aix-03.jpg',
      },
      {
        title: 'Untitled 2',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/aix/aix-04.jpg',
      },
      {
        title: 'Shadowy light 2',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/aix/aix-05.jpg',
      },
      {
        title: 'Virgin',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/aix/aix-06.jpg',
      },
      {
        title: 'Swimmer',
        year: '2024',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/aix/aix-07.jpg',
      },
      {
        title: 'Man in the sun',
        year: '2024',
        size: { es: '42 × 29,7 cm (A3)', en: '42 × 29.7 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/aix/aix-08.jpg',
      },
      {
        title: 'Virgin 2',
        year: '2024',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/aix/aix-09.jpg',
      },
    ],
  },
  {
    slug: 'amsterdam',
    name: { es: 'Ámsterdam', en: 'Amsterdam' },
    note: { es: 'color', en: 'colour' },
    photos: [
      {
        title: 'Biking',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Ultramax · 35 mm',
        src: 'images/fotos/amsterdam/amsterdam-01.jpg',
      },
      {
        title: 'Glass',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Ultramax · 35 mm',
        src: 'images/fotos/amsterdam/amsterdam-02.jpg',
      },
      {
        title: 'First Kiss',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Ultramax · 35 mm',
        src: 'images/fotos/amsterdam/amsterdam-03.jpg',
      },
      {
        title: 'Weeping man',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Ultramax · 35 mm',
        src: 'images/fotos/amsterdam/amsterdam-04.jpg',
      },
      {
        title: 'Parking',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Ultramax · 35 mm',
        src: 'images/fotos/amsterdam/amsterdam-05.jpg',
      },
      {
        title: 'Gerard',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Ultramax · 35 mm',
        src: 'images/fotos/amsterdam/amsterdam-06.jpg',
      },
      {
        title: 'Biking 2',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Ultramax · 35 mm',
        src: 'images/fotos/amsterdam/amsterdam-07.jpg',
      },
      {
        title: 'Old Love',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Ultramax · 35 mm',
        src: 'images/fotos/amsterdam/amsterdam-08.jpg',
      },
      {
        title: 'Untitled',
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: 'Kodak Ultramax · 35 mm',
        src: 'images/fotos/amsterdam/amsterdam-09.jpg',
      },
    ],
  },
  {
    slug: 'editorial',
    name: 'Editorial',
    note: { es: 'comisión', en: 'commissioned work' },
    photos: [
      {
        title: {
          es: 'Portada alternativa para “Estas cosas de Quererse” de Silva, del Pozo & Bronco',
          en: 'Alternate cover for “Estas cosas de Quererse” by Silva, del Pozo & Bronco',
        },
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/editorial/editorial-01.jpg',
      },
      {
        title: {
          es: 'Portada para “Estas cosas de Quererse” de Silva, del Pozo & Bronco',
          en: 'Cover for “Estas cosas de Quererse” by Silva, del Pozo & Bronco',
        },
        year: '2023',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/editorial/editorial-02.jpg',
      },
      {
        title: {
          es: 'Portada alternativa para “Goyenche” de Silva, del Pozo & Mateo2',
          en: 'Alternate cover for “Goyenche” by Silva, del Pozo & Mateo2',
        },
        year: '2024',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/editorial/editorial-03.jpg',
      },
      {
        title: {
          es: 'Portada alternativa para “Goyenche” de Silva, del Pozo & Mateo2',
          en: 'Alternate cover for “Goyenche” by Silva, del Pozo & Mateo2',
        },
        year: '2024',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/editorial/editorial-04.jpg',
      },
      {
        title: {
          es: 'Portada para “Goyenche” de Silva, del Pozo & Mateo2',
          en: 'Cover for “Goyenche” by Silva, del Pozo & Mateo2',
        },
        year: '2024',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/editorial/editorial-05.jpg',
      },
      {
        title: {
          es: 'Portada para “Espejos en el cielo” de Mateo2',
          en: 'Cover for “Espejos en el cielo” by Mateo2',
        },
        year: '2024',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/editorial/editorial-06.jpg',
      },
      {
        title: {
          es: 'Portada alternativa para “Espejos en el cielo” de Mateo2',
          en: 'Alternate cover for “Espejos en el cielo” by Mateo2',
        },
        year: '2024',
        size: { es: '29,7 × 42 cm (A3)', en: '29.7 × 42 cm (A3)' },
        film: '35 mm',
        src: 'images/fotos/editorial/editorial-07.jpg',
      },
      {
        title: {
          es: 'Portada para “tal Vez vuelvo a rezar” de Blantx, Silva, del Pozo & Mateo2',
          en: 'Cover for “tal Vez vuelvo a rezar” by Blantx, Silva, del Pozo & Mateo2',
        },
        year: '2024',
        size: {
          es: '42 cm × 59,4 cm (A2) / 29,7 × 42 cm (A3)',
          en: '42 cm × 59.4 cm (A2) / 29.7 × 42 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/editorial/editorial-08.jpg',
      },
      {
        title: 'Untitled',
        year: '2023',
        size: {
          es: '59,4 × 42 cm (A2) / 42 × 29,7 cm (A3)',
          en: '59.4 × 42 cm (A2) / 42 × 29.7 cm (A3)',
        },
        film: '35 mm',
        src: 'images/fotos/editorial/editorial-09.jpg',
      },
    ],
  },
]
