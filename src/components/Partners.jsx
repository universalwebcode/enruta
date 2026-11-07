import { partners } from "../data";
import Container from "./Container";
import Reveal from "./Reveal";

export default function Partners() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20" aria-labelledby="operadores-titulo">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            Empresas de transporte
          </p>
          <h2 id="operadores-titulo" className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            La campaña circula con operadores de la región.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Coodetrans, Sultana del Valle, Transcalima y Transflorida. En Cali, también en rutas urbanas
            de Recreativos y La Ermita. Aliados de transporte para campañas con cobertura real.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <Reveal
              key={partner.name}
              as="li"
              delay={index * 80}
              className="rounded-2xl bg-white/5 px-5 py-6 ring-1 ring-white/10 transition duration-300 hover:bg-white/10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">Operador</p>
              <p className="mt-2 text-xl font-extrabold tracking-tight">{partner.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{partner.route}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
