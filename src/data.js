// =====================================================================
//  EDITA SOLO ESTE ARCHIVO para personalizar tu portafolio.
//  No necesitas tocar App.jsx ni App.css para cambiar tu información.
// =====================================================================

export const perfil = {
  nombre: "Fernando Castro",
  // Nombre grande del inicio, en dos líneas (la 2ª va resaltada).
  nombreLinea1: "Fernando André",
  nombreLinea2: "Castro Cornejo",
  // Kicker pequeño arriba del nombre.
  kicker: "Hola, yo soy",
  // Roles bajo el nombre (el 2º va resaltado).
  rolPrincipal: "Tecnólogo en Desarrollo de Software",
  rolSecundario: "Desarrollador Full-Stack",
  // Línea de estado.
  disponible: "Disponible para proyectos",
  experienciaResumen: "3 pasantías profesionales",
  // Bio del inicio. Usa **texto** para resaltar en negrita.
  bio:
    "Tecnólogo en Desarrollo de Software en Ecuador, con experiencia práctica en desarrollo web y móvil adquirida en pasantías en **CENTROSUR, ARACNO y Fundación NIGMA**. Enfocado en transformar requerimientos en **soluciones de software eficientes**, con versatilidad técnica en frontend y backend para aportar **valor inmediato en cualquier equipo**.",
  ubicacion: "Ecuador",
  email: "fernando.castro@email.com",
  telefono: "+593 99 999 9999",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
  twitter: "",
  instagram: "",
  // CV en /public. Se abre dentro del portafolio en un visor.
  cv: "/fernandoCv.pdf",
  // Tu foto: archivo en /public.
  foto: "/fernando.png",
  // Lista con check de la tarjeta "Sobre mí".
  areasInteres: [
    "Desarrollo Frontend",
    "Desarrollo Backend",
    "Bases de datos",
    "APIs",
    "Redes",
    "Ciberseguridad",
  ],
  // "Mi forma de trabajar". icono: book | target | chat
  formaTrabajar: [
    { titulo: "Aprendizaje", texto: "Aprendo nuevas tecnologías rápidamente.", icono: "book" },
    { titulo: "Resolución", texto: "Busco soluciones prácticas y escalables.", icono: "target" },
    { titulo: "Comunicación", texto: "Trabajo de forma clara y colaborativa.", icono: "chat" },
  ],
};

// Iconos que aparecen en la tira "Tecnologías con las que trabajo" del hero.
// Valores válidos: html, css, js, ts, react, node, git, python, docker,
// postgres, mongo, tailwind, express, java, sql
export const tecnologiasHero = ["html", "css", "js", "ts", "react", "node", "git"];

// Experiencia en desarrollo de software (línea de tiempo, lo más reciente arriba).
//  - periodo: texto corto para la etiqueta (ej: "2026", "Feb–May 2026").
//  - contexto: la línea bajo el título (empresa / cliente / lugar).
//  - descripcion: 1–2 frases, resumen breve (estilo tarjeta compacta).
//  - logo: opcional, logo de la empresa en /public (ej: "/logo-centrosur.png").
//  - logoZoom: opcional, agranda el logo dentro del recuadro (1 = normal, 1.3 = 30% más).
//  - imagen: opcional, captura del proyecto en /public (se usa si no hay logo).
export const experiencia = [
  {
    puesto: "Pasante de Desarrollo de Software",
    contexto: "CENTROSUR · Cuenca, Ecuador",
    periodo: "Feb 2026 – May 2026",
    logo: "/logo-centrosur.png",
    imagen: "",
    descripcion:
      "Desarrollo y pruebas de una funcionalidad para la aplicación José Luz que automatiza la solicitud y autorización de eventos, junto con un sistema de reservas de salas de capacitación con registro de requerimientos logísticos.",
  },
  {
    puesto: "Pasante de Desarrollo de Software",
    contexto: "ARACNO CÍA. LTDA. · Ecuador",
    periodo: "Abr 2025 – May 2025",
    logo: "/aracno_group_logo.jpg",
    logoZoom: 1.5,
    imagen: "",
    descripcion:
      "Desarrollo y mantenimiento de páginas web de la empresa en frontend y backend: corrección de errores, mejora de funcionalidades existentes y solución de incidencias durante el proceso de desarrollo.",
  },
  {
    puesto: "Pasante de Desarrollo de Aplicaciones Móviles",
    contexto: "FUNDACIÓN NIGMA · App móvil Ubica",
    periodo: "Oct 2025 – Ene 2026",
    logo: "/logo-nigma.png",
    imagen: "",
    descripcion:
      "Desarrollo de la app móvil Ubica: diseño y estructuración de la interfaz para dispositivos móviles, implementación de la lógica y mejora de componentes para una experiencia de usuario fluida, en trabajo de equipo.",
  },
];

// Texto breve que explica la sección de Skills.
export const skillsIntro =
  "Estas son las tecnologías con las que trabajo a diario para construir aplicaciones web completas: de la interfaz al servidor y la base de datos.";

// Lenguajes y tecnologías (se muestran en el carrusel de "Skills").
// "categoria": Frontend | Backend | Bases de Datos | Herramientas | Lenguaje
// "icono" usa los mismos valores que tecnologiasHero.
export const stack = [
  { nombre: "HTML", categoria: "Frontend", icono: "html" },
  { nombre: "CSS", categoria: "Frontend", icono: "css" },
  { nombre: "JavaScript", categoria: "Frontend", icono: "js" },
  { nombre: "React", categoria: "Frontend", icono: "react" },
  { nombre: "TypeScript", categoria: "Frontend", icono: "ts" },
  { nombre: "Tailwind CSS", categoria: "Frontend", icono: "tailwind" },
  { nombre: "Node.js", categoria: "Backend", icono: "node" },
  { nombre: "Express", categoria: "Backend", icono: "express" },
  { nombre: "Python", categoria: "Backend", icono: "python" },
  { nombre: "REST API", categoria: "Backend", icono: "restapi" },
  { nombre: "PostgreSQL", categoria: "Bases de Datos", icono: "postgres" },
  { nombre: "MongoDB", categoria: "Bases de Datos", icono: "mongo" },
  { nombre: "Git", categoria: "Herramientas", icono: "git" },
  { nombre: "GitHub", categoria: "Herramientas", icono: "github" },
  { nombre: "VS Code", categoria: "Herramientas", icono: "vscode" },
  { nombre: "Postman", categoria: "Herramientas", icono: "postman" },
  { nombre: "XAMPP", categoria: "Herramientas", icono: "xampp" },
  { nombre: "Netlify", categoria: "Herramientas", icono: "netlify" },
  { nombre: "Docker", categoria: "Herramientas", icono: "docker" },
];

// Texto breve que explica la sección de Proyectos.
export const proyectosIntro =
  "Una selección de aplicaciones web que he construido de principio a fin —del modelo de datos y la lógica de negocio hasta la interfaz—, todas en producción y disponibles para probar en vivo.";

// Tus proyectos.
//  - sitio: enlace del botón "Visitar sitio".
//  - imagen: captura del sitio en /public (vista previa de la tarjeta).
//  - repo: opcional, enlace al repositorio.
export const proyectos = [
  {
    id: "p1",
    nombre: "Reserva de Salas — CENTROSUR",
    descripcion:
      "Plataforma web para reservar las salas de capacitación de CENTROSUR: catálogo de espacios, sala divisible configurable, inicio de sesión y gestión de reservas. Desarrollada durante mi pasantía.",
    tecnologias: ["React", "Vite", "JavaScript", "Tailwind CSS", "REST API", "Git", "Vercel"],
    sitio: "https://react-app-main-main.vercel.app/",
    imagen: "/proj-react-app.png",
    repo: "",
  },
  {
    id: "p2",
    nombre: "Su Market — Punto de Venta",
    descripcion:
      "Sistema de punto de venta para un minimarket: escaneo de productos (lector USB o cámara), carrito y cobro con varios métodos de pago, más inventario, historial de ventas, análisis y gestión de clientes y usuarios.",
    tecnologias: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Auth / RLS", "Vercel"],
    sitio: "https://sumarket-khaki.vercel.app/",
    imagen: "/proj-sumarket.png",
    repo: "",
  },
  {
    id: "p3",
    nombre: "XADIS Decoraciones",
    descripcion:
      "Aplicación para una tienda de cerámica, porcelanato y acabados para piso: catálogo de referencias de producto y panel con autenticación segura. Proyecto de tesis.",
    tecnologias: ["React", "TypeScript", "Node.js", "Express", "REST API", "JWT", "Vercel"],
    sitio: "https://tesis-blond-seven.vercel.app/",
    imagen: "/proj-tesis.png",
    repo: "",
  },
];

// Certificados y cursos. "credencial" puede ser una URL o un PDF en /public.
export const certificados = [
  {
    nombre: "CCNA: Fundamentos de Conmutación, Enrutamiento y Redes Inalámbricas",
    institucion: "Cisco Networking Academy · Tecnológico Sudamericano",
    fecha: "Ago 2026",
    credencial: "/cert-ccna-srwe.pdf",
  },
  {
    nombre: "Certificado de Prácticas Profesionales",
    institucion: "CENTROSUR · Empresa Eléctrica Regional Centro Sur",
    fecha: "Abr 2026",
    credencial: "/centrosurcertificado.jpeg",
  },
  {
    nombre: "CCNA: Introducción a las Redes",
    institucion: "Cisco Networking Academy · Tecnológico Sudamericano",
    fecha: "Feb 2026",
    credencial: "/cert-ccna-itn.pdf",
  },
  {
    nombre: "Hacker Ético (Ethical Hacker)",
    institucion: "Cisco Networking Academy · Tecnológico Sudamericano",
    fecha: "Feb 2026",
    credencial: "/cert-ethical-hacker.pdf",
  },
  {
    nombre: "IT Essentials: PC Hardware and Software",
    institucion: "Cisco Networking Academy",
    fecha: "Jul 2024",
    credencial: "/cert-it-essentials.pdf",
  },
];

// Testimonio ("Lo que dicen de mí"). Deja texto: "" para ocultarlo.
export const testimonio = {
  texto:
    "Fue un gusto haber trabajado contigo en este proyecto. Destaco mucho tu compromiso, creatividad y atención a cada detalle. El resultado superó mis expectativas y sin duda recomendaría tu trabajo.",
  autor: "Nombre del cliente",
  cargo: "Cargo · Empresa",
  foto: "",
  // Enlace a la publicación de LinkedIn (deja "" para ocultar el botón).
  linkedin: "",
};
