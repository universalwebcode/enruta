import { clients, gallery } from "../data";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function Clients() {
  return (
    <section id="casos" className="scroll-mt-32 bg-paper py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Casos de éxito"
          title="Marcas que ya ocuparon el respaldo."
          text="El caso principal es B&M Construcciones. Más abajo, otras marcas que pautaron con EnRuta y piezas instaladas en los buses."
        />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <figure className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-3xl bg-navy sm:block" aria-hidden="true" />
              <video
                poster="/assets/videos/caso-bm-poster.jpg"
                width="720"
                height="984"
                controls
                playsInline
                preload="metadata"
                aria-label="Caso de éxito de B&M Construcciones con Publicidad EnRuta"
                className="relative aspect-[720/984] w-full rounded-3xl bg-navy object-cover shadow-2xl"
              >
                <source src="/assets/videos/caso-bm.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="mt-4 text-sm leading-snug text-slate-600">
              B&M Construcciones cuenta cómo les fue con la pauta. El video tiene audio.
            </figcaption>
          </figure>
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-navy">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Caso principal
            </p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">B&M Construcciones</h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Una constructora del Valle explica, en sus palabras, por qué pautó en los buses y qué pasó
              después: personas de otros municipios los conocieron por la pieza y los visitaron. Recomiendan
              el formato.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
              En el video también presentan sus proyectos. Esos precios son de B&M, no de la pauta.
            </p>
          </div>
        </div>

        <h3 className="mt-16 text-xl font-extrabold tracking-tight text-navy">Marcas que pautaron con EnRuta</h3>
        <ul className="mt-6 flex flex-wrap justify-center gap-4">
          {clients.map((client) => (
            <li
              key={client.name}
              className="flex h-28 w-[calc(50%-0.5rem)] min-w-0 items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-slate-200 sm:h-32 sm:w-64 sm:p-4"
            >
              <img
                src={client.src}
                alt={client.name}
                width="640"
                height="360"
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <h3 className="text-xl font-extrabold tracking-tight text-navy">Así se ve la pauta instalada</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Fundas impresas sobre el respaldo. El pasajero las tiene al frente durante el recorrido, no en
            un panel que se ve de refilón al subir.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {gallery.map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200">
                <img
                  src={shot.src}
                  width="768"
                  height="1024"
                  alt={shot.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
                <figcaption className="px-4 py-4 text-sm leading-relaxed text-slate-600">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
