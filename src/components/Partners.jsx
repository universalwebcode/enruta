import { partners } from "../data";
import Container from "./Container";

export default function Partners() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20" aria-labelledby="operadores-titulo">
      <Container>
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            Empresas de transporte
          </p>
          <h2 id="operadores-titulo" className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            La pauta circula con operadores de la región.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Coodetrans, Sultana del Valle, Transcalima y Transflorida. En Cali, también en rutas urbanas
            de Recreativos y La Ermita.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <li key={partner.name} className="rounded-2xl bg-white/5 px-5 py-6 ring-1 ring-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">Operador</p>
              <p className="mt-2 text-xl font-extrabold tracking-tight">{partner.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{partner.corridor}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
