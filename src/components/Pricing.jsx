import { included, plans, specRows } from "../data";
import Container from "./Container";
import { IconCheck } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function QuoteButton({ plan, onSelect, solid }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(plan.id)}
      className={`inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-bold ${
        solid
          ? "bg-brand text-white hover:bg-brand-dark"
          : "bg-white text-navy ring-1 ring-navy/15 hover:bg-paper"
      }`}
    >
      Cotizar este plan
    </button>
  );
}

export default function Pricing({ onSelect }) {
  return (
    <section id="tarifas" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Tarifas"
            title="Tres formas de subir la marca al bus."
            text="Precios claros, en pesos colombianos. En los tres planes entran el diseño, la instalación, el mantenimiento y la renovación de cada mes."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:hidden">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.id}
              as="article"
              delay={index * 90}
              className={`rounded-3xl p-6 ring-1 transition duration-300 hover:-translate-y-1 ${
                plan.featured ? "order-first bg-navy text-white ring-navy" : "bg-white text-ink ring-slate-200"
              }`}
            >
              {plan.badge ? (
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                  {plan.badge}
                </p>
              ) : null}
              <h3 className={`text-xl font-extrabold ${plan.badge ? "mt-4" : ""} ${plan.featured ? "text-white" : "text-navy"}`}>
                {plan.name}
              </h3>
              <p className={`mt-3 text-4xl font-extrabold tracking-tight tabular-nums ${plan.featured ? "text-white" : "text-navy"}`}>
                {plan.price}
              </p>
              <p className={`mt-1 text-sm ${plan.featured ? "text-white/75" : "text-slate-500"}`}>{plan.period}</p>
              <p className={`mt-4 text-sm leading-relaxed ${plan.featured ? "text-white/80" : "text-slate-600"}`}>{plan.blurb}</p>
              <dl className="mt-5 space-y-2 text-sm">
                {specRows.map((row) => (
                  <div key={row.key} className="flex items-start justify-between gap-4 border-t border-current/10 pt-2">
                    <dt className={plan.featured ? "text-white/65" : "text-slate-500"}>{row.label}</dt>
                    <dd className="text-right font-semibold">{plan.specs[row.key]}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <QuoteButton plan={plan} onSelect={onSelect} solid={plan.featured} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 hidden overflow-hidden rounded-3xl ring-1 ring-slate-200 lg:block">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Comparación de planes de publicidad en buses</caption>
            <thead>
              <tr>
                <th scope="col" className="bg-paper px-5 py-6 align-bottom font-semibold text-slate-500">
                  Comparar
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    scope="col"
                    className={`px-5 py-6 align-bottom ${plan.featured ? "bg-navy text-white" : "bg-paper text-navy"}`}
                  >
                    {plan.badge ? (
                      <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                        {plan.badge}
                      </span>
                    ) : (
                      <span className="mb-3 block h-[26px]" aria-hidden="true" />
                    )}
                    <span className="block text-lg font-extrabold">{plan.name}</span>
                    <span className="mt-2 block text-3xl font-extrabold tabular-nums tracking-tight">{plan.price}</span>
                    <span className={`mt-1 block text-xs font-semibold ${plan.featured ? "text-white/70" : "text-slate-500"}`}>
                      {plan.period}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specRows.map((row, index) => (
                <tr key={row.key}>
                  <th
                    scope="row"
                    className={`px-5 py-3.5 font-semibold text-slate-500 ${index % 2 ? "bg-paper" : "bg-white"}`}
                  >
                    {row.label}
                  </th>
                  {plans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`px-5 py-3.5 font-semibold ${
                        plan.featured
                          ? "bg-navy/[0.06] text-navy"
                          : index % 2
                            ? "bg-paper text-ink"
                            : "bg-white text-ink"
                      }`}
                    >
                      {plan.specs[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row" className="bg-white px-5 py-5 font-semibold text-slate-500">
                  Siguiente paso
                </th>
                {plans.map((plan) => (
                  <td key={plan.id} className={`px-5 py-5 ${plan.featured ? "bg-navy" : "bg-white"}`}>
                    <QuoteButton plan={plan} onSelect={onSelect} solid={plan.featured} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>

        <Reveal className="mt-6 rounded-3xl bg-paper p-6 ring-1 ring-slate-200 sm:p-8">
          <p className="text-base font-bold text-navy">Incluido en los tres planes, sin costo adicional</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy text-white">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
            Valores en pesos colombianos. Los tres planes son para cinco buses. El espacio individual y
            la flota 100% se cobran por mes; la flota lleva un espacio individual en cada uno de esos
            cinco. La pauta compartida es el paquete de $800.000, con la mitad del espacio. Cada bus
            tiene 10 espacios; el plan individual reserva uno por vehículo.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
