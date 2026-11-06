import { routes } from "../data";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function Routes() {
  return (
    <section id="rutas" className="scroll-mt-32 bg-paper py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Cobertura"
          title="Cuatro corredores donde la gente se mueve todos los días."
          text="Rutas urbanas en Cali y corredores intermunicipales del Valle. La pauta viaja con el bus, no en un aviso que se pasa de largo."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {routes.map((route) => (
            <article key={route.code} className="overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200">
              <div className="flex items-center justify-between bg-navy px-5 py-3 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em]">Ruta {route.code}</p>
                <p className="text-xs font-semibold text-white/75">{route.type}</p>
              </div>
              <div className="border-b border-dashed border-slate-200" />
              <div className="p-5 sm:p-6">
                <h3 className="text-2xl font-extrabold tracking-tight text-navy">{route.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-700">{route.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {route.operators.map((operator) => (
                    <li
                      key={operator}
                      className="rounded-full bg-paper px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy ring-1 ring-slate-200"
                    >
                      {operator}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{route.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
