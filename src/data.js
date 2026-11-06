export const PHONES = [
  { display: "319 213 4129", tel: "+573192134129" },
  { display: "317 237 6562", tel: "+573172376562" },
];

export const EMAIL = "contacto@publicidadenruta.com";
export const EMAIL_ALT = "publicidad.enrutaco@gmail.com";
export const WHATSAPP = "573192134129";

export function whatsappUrl(text) {
  const message =
    text ||
    "Hola Fanery, quiero cotizar una campaña de publicidad en buses con EnRuta.";
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { href: "#servicios", id: "servicios", label: "Servicios" },
  { href: "#rutas", id: "rutas", label: "Rutas" },
  { href: "#tarifas", id: "tarifas", label: "Tarifas" },
  { href: "#casos", id: "casos", label: "Casos de éxito" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

export const corridors = ["Cali", "Palmira", "Candelaria", "Lago Calima", "Dagua", "Restrepo", "Florida"];

export const metrics = [
  {
    value: "10",
    label: "Espacios por bus",
    detail: "Uno por cada pareja de sillas. El aviso queda a la altura de los ojos.",
  },
  {
    value: "5:30–21:00",
    label: "Operación del día",
    detail: "La pieza viaja desde la primera salida hasta el último turno.",
  },
  {
    value: "1–3 h",
    label: "Por trayecto",
    detail: "Tiempo real de lectura, de ida o de regreso, sin cambiar de pantalla.",
  },
  {
    value: "7–15 h",
    label: "Exposición al día",
    detail: "El mismo bus muestra la marca durante toda la jornada de servicio.",
  },
];

export const steps = [
  {
    title: "Elige el corredor",
    text: "Cali urbana, Palmira, Candelaria, Lago Calima o Florida. Armamos la presencia donde están tus clientes.",
  },
  {
    title: "Producimos e instalamos",
    text: "Diseño, impresión, instalación y mantenimiento van en el plan. No hay un cobro aparte por poner la pieza a andar.",
  },
  {
    title: "La marca se queda en ruta",
    text: "El material se renueva cada mes, sin costo adicional, mientras la campaña sigue en circulación.",
  },
];

export const routes = [
  {
    code: "01",
    type: "Urbana",
    title: "Cali",
    operators: ["Recreativos", "La Ermita"],
    summary: "Recorridos dentro de la ciudad, con pasajeros que repiten la ruta en la semana.",
    detail:
      "Trabajo, estudio y diligencias. El aviso se encuentra con la misma gente de ida y de regreso, a lo largo del día.",
  },
  {
    code: "02",
    type: "Intermunicipal",
    title: "Palmira y Candelaria",
    operators: ["Coodetrans", "Sultana del Valle"],
    summary: "Corredor entre Cali, Palmira y Candelaria.",
    detail:
      "Trayectos largos para leer una oferta completa. Viajan trabajadores, estudiantes y familias entre la ciudad y estos municipios.",
  },
  {
    code: "03",
    type: "Intermunicipal",
    title: "Lago Calima, Dagua y Restrepo",
    operators: ["Transcalima"],
    summary: "Vía de residentes y de turismo hacia el lago.",
    detail:
      "Recorridos de una a tres horas. La pieza permanece al frente en un viaje de paisaje, descanso y regreso a casa.",
  },
  {
    code: "04",
    type: "Intermunicipal",
    title: "Florida, Valle",
    operators: ["Transflorida"],
    summary: "Conexión con Florida, al sur del Valle del Cauca.",
    detail:
      "Viajeros recurrentes del corredor sur. Sirve a marcas que venden en esa zona y también en Cali.",
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
    blurb: "Un respaldo completo en cinco buses de la ruta que elijas.",
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
    blurb: "Tu marca ocupa la mitad del espacio, en cinco buses al mismo tiempo.",
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
  { name: "Coodetrans", corridor: "Palmira y Candelaria" },
  { name: "Sultana del Valle", corridor: "Palmira y Candelaria" },
  { name: "Transcalima", corridor: "Lago Calima, Dagua y Restrepo" },
  { name: "Transflorida", corridor: "Florida, Valle" },
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
    caption: "El aviso viaja en el salón completo, de la primera fila a la última.",
  },
  {
    src: "/assets/ad-formato.jpg",
    alt: "Funda de respaldo con un aviso de venta de apartamentos, formato usado por Publicidad EnRuta.",
    caption: "Formato real: una funda impresa, fija en el respaldo, lista para leerse de cerca.",
  },
  {
    src: "/assets/ad-calima.jpg",
    alt: "Aviso turístico de Lago Calima instalado en el respaldo de una silla de bus.",
    caption: "La misma pieza sirve para una oferta local, un destino o una marca de consumo.",
  },
];

export const included = ["Diseño", "Instalación", "Mantenimiento", "Renovación mensual"];
