export const PHONES = [
  { display: "319 213 4129", tel: "+573192134129" },
  { display: "317 237 6562", tel: "+573172376562" },
];

export const EMAIL = "contacto@publicidadenruta.com";
export const EMAIL_ALT = "publicidad.enrutaco@gmail.com";
export const WHATSAPP = "573192134129";
export const SITE_URL = "https://publicidadenruta.com";
export const SITE_NAME = "Publicidad EnRuta";
export const SITE_TAGLINE = "Marcas que viajan lejos";
export const SITE_DESCRIPTION =
  "Publicidad en medios de transporte en Cali y el Valle del Cauca. Anuncios en el respaldo de sillas de buses urbanos e intermunicipales, con audiencia cautiva de 45 minutos a más de 3 horas. Diseño, instalación y mantenimiento incluidos.";

export const SOCIAL = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/publicidad_enruta/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/publicidad-enruta/",
  },
];

export function whatsappUrl(text) {
  const message =
    text ||
    "Hola Fanery, soy de una empresa y quiero cotizar una campaña de publicidad en buses con EnRuta.";
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { href: "#servicios", id: "servicios", label: "Servicios" },
  { href: "#rutas", id: "rutas", label: "Rutas" },
  { href: "#tarifas", id: "tarifas", label: "Tarifas" },
  { href: "#casos", id: "casos", label: "Casos de éxito" },
  { href: "#preguntas", id: "preguntas", label: "Preguntas" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

export const corridors = ["Cali", "Palmira", "Candelaria", "Lago Calima", "Dagua", "Restrepo", "Florida"];

export const metrics = [
  {
    value: "10",
    label: "Espacios por bus",
    detail: "Uno por cada pareja de sillas. El anuncio queda a la altura de los ojos del pasajero.",
  },
  {
    value: "5:30–21:00",
    label: "Operación del día",
    detail: "La pieza circula desde la primera salida hasta el último turno del servicio.",
  },
  {
    value: "1–3 h",
    label: "Por trayecto",
    detail: "Tiempo efectivo de lectura, de ida o de regreso, sin competir con otra pantalla.",
  },
  {
    value: "7–15 h",
    label: "Exposición al día",
    detail: "El mismo bus mantiene visible la marca durante toda la jornada de operación.",
  },
];

export const steps = [
  {
    title: "Elige la ruta",
    text: "Cali urbana, Palmira, Candelaria, Lago Calima o Florida. Definimos la cobertura donde está tu público objetivo.",
  },
  {
    title: "Producimos e instalamos",
    text: "Diseño, impresión, instalación y mantenimiento van incluidos en el plan. Sin costos ocultos para poner la campaña en circulación.",
  },
  {
    title: "La campaña se mantiene en ruta",
    text: "El material se renueva cada mes, sin costo adicional, mientras la inversión sigue activa.",
  },
];

export const routes = [
  {
    code: "01",
    type: "Urbana",
    title: "Cali",
    operators: ["Recreativos", "La Ermita"],
    summary: "Rutas urbanas con pasajeros recurrentes a lo largo de la semana.",
    detail:
      "Ideal para marcas con audiencia en la ciudad. El anuncio se encuentra con el mismo público de ida y de regreso, durante toda la jornada.",
  },
  {
    code: "02",
    type: "Intermunicipal",
    title: "Palmira y Candelaria",
    operators: ["Coodetrans", "Sultana del Valle"],
    summary: "Ruta entre Cali, Palmira y Candelaria.",
    detail:
      "Trayectos largos para comunicar una oferta completa. Alcanza trabajadores, estudiantes y familias que se desplazan entre la ciudad y estos municipios.",
  },
  {
    code: "03",
    type: "Intermunicipal",
    title: "Lago Calima, Dagua y Restrepo",
    operators: ["Transcalima"],
    summary: "Ruta de residentes y turismo hacia el lago.",
    detail:
      "Recorridos de una a tres horas. La pieza permanece frente al pasajero en un trayecto de alto tiempo de exposición.",
  },
  {
    code: "04",
    type: "Intermunicipal",
    title: "Florida, Valle",
    operators: ["Transflorida"],
    summary: "Ruta hacia Florida, al sur del Valle del Cauca.",
    detail:
      "Viajeros recurrentes de la ruta sur. Sirve a empresas con presencia comercial en esa zona y también en Cali.",
  },
];

export const specRows = [
  { key: "investment", label: "Inversión" },
  { key: "buses", label: "Buses" },
  { key: "format", label: "Formato" },
  { key: "design", label: "Diseño" },
  { key: "install", label: "Instalación" },
  { key: "maintenance", label: "Mantenimiento" },
  { key: "renewal", label: "Renovación mensual" },
];

export const plans = [
  {
    id: "individual",
    name: "Espacio individual",
    price: "$150.000",
    period: "COP / mes por bus",
    blurb: "Un respaldo completo en cinco buses de la ruta que elija su empresa.",
    featured: false,
    specs: {
      investment: "$150.000 / mes por bus",
      buses: "5 simultáneos",
      format: "1 espacio completo por bus",
      design: "Incluido",
      install: "Incluida",
      maintenance: "Incluido",
      renewal: "Incluida",
    },
  },
  {
    id: "compartida",
    name: "Pauta compartida",
    price: "$800.000",
    period: "COP · paquete de 5 buses",
    blurb: "Su marca ocupa la mitad del espacio, en cinco buses al mismo tiempo.",
    featured: false,
    specs: {
      investment: "$800.000 por el paquete",
      buses: "5 simultáneos",
      format: "Mitad del espacio",
      design: "Incluido",
      install: "Incluida",
      maintenance: "Incluido",
      renewal: "Incluida",
    },
  },
  {
    id: "flota",
    name: "Flota 100%",
    price: "$1.500.000",
    period: "COP / mes · 5 buses",
    blurb: "Cinco buses en circulación, con un espacio individual en cada uno.",
    featured: true,
    badge: "Mayor cobertura",
    specs: {
      investment: "$1.500.000 / mes",
      buses: "5 simultáneos",
      format: "Paquete de flota",
      design: "Incluido",
      install: "Incluida",
      maintenance: "Incluido",
      renewal: "Incluida",
    },
  },
];

export const partners = [
  { name: "Coodetrans", route: "Palmira y Candelaria" },
  { name: "Sultana del Valle", route: "Palmira y Candelaria" },
  { name: "Transcalima", route: "Lago Calima, Dagua y Restrepo" },
  { name: "Transflorida", route: "Florida, Valle" },
];

export const clients = [
  { name: "Suzuki", src: "/assets/clients/suzuki.png" },
  { name: "Supermercados Cañaveral", src: "/assets/clients/canaveral.png" },
  { name: "La Sevillana", src: "/assets/clients/sevillana.png" },
  { name: "Instituto Malla", src: "/assets/clients/malla.png" },
  { name: "CENAL", src: "/assets/clients/cenal.png" },
  { name: "Terra Instituto Villa", src: "/assets/clients/terra.png" },
  { name: "B&M Construcciones", src: "/assets/clients/bm.png" },
];

export const gallery = [
  {
    src: "/assets/bus-salon.jpg",
    alt: "Interior de un bus con publicidad de EnRuta en el respaldo de las sillas, visto hacia el frente del salón.",
    caption: "El anuncio viaja en el salón completo, de la primera fila a la última.",
  },
  {
    src: "/assets/ad-formato.jpg",
    alt: "Funda de respaldo con un aviso de venta de apartamentos, formato usado por Publicidad EnRuta.",
    caption: "Formato comercial: funda impresa, fija en el respaldo, con lectura cercana y prolongada.",
  },
  {
    src: "/assets/ad-calima.jpg",
    alt: "Aviso turístico de Lago Calima instalado en el respaldo de una silla de bus.",
    caption: "El mismo formato sirve para lanzamientos, destinos, retail o servicios B2C.",
  },
];

export const included = ["Diseño", "Instalación", "Mantenimiento", "Renovación mensual"];

export const faqs = [
  {
    question: "¿Qué es Publicidad EnRuta?",
    answer:
      "Publicidad EnRuta es una empresa de publicidad en medios de transporte en Cali y el Valle del Cauca. Ofrece publicidad en buses mediante anuncios en el respaldo de las sillas, frente al pasajero durante todo el trayecto.",
  },
  {
    question: "¿Dónde circula la publicidad en buses de EnRuta?",
    answer:
      "La pauta circula en Cali (rutas urbanas con Recreativos y La Ermita) y en rutas intermunicipales hacia Palmira, Candelaria, Lago Calima, Dagua, Restrepo y Florida, con operadores como Coodetrans, Sultana del Valle, Transcalima y Transflorida.",
  },
  {
    question: "¿Cuánto dura la exposición de cada anuncio?",
    answer:
      "Cada trayecto dura entre 45 minutos y más de 3 horas. El mismo bus opera aproximadamente de 5:30 a. m. a 9:00 p. m., así que la marca puede sumar entre 7 y 15 horas de exposición al día.",
  },
  {
    question: "¿Cuánto cuesta una campaña de publicidad en buses con EnRuta?",
    answer:
      "Hay tres planes en pesos colombianos: espacio individual desde $150.000 COP al mes por bus (mínimo 5 buses), pauta compartida por $800.000 COP en un paquete de 5 buses, y flota 100% por $1.500.000 COP al mes en 5 buses.",
  },
  {
    question: "¿Qué incluye el plan de publicidad?",
    answer:
      "En los tres planes entran el diseño, la impresión, la instalación, el mantenimiento y la renovación mensual del material, sin cobros adicionales para poner la campaña en circulación.",
  },
  {
    question: "¿Cómo solicita una empresa una cotización?",
    answer:
      "Puede escribir a Fanery Ospina por WhatsApp al +57 319 213 4129, llamar al +57 317 237 6562 o enviar un correo a contacto@publicidadenruta.com. Indique la empresa, la ruta de interés y el plan que desea evaluar.",
  },
];
