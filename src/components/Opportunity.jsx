import { metrics, steps } from "../data";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Opportunity() {
  return (
    <section id="servicios" className="scroll-mt-32 bg-navy py-20 text-white sm:py-24">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading
            light
            eyebrow="Cómo funciona"
            title="Una audiencia cautiva, sin cambiar de pantalla."
            text="En publicidad en buses, el anuncio no compite con el scroll. Está en el respaldo de adelante, a la altura de los ojos, durante todo el viaje."
          />
          <p className="text-base leading-relaxed text-white/75 lg:pb-1">
            Trabajadores, estudiantes y familias de Cali y los municipios vecinos lo ven de ida y de
            regreso. Es un medio con tiempo de atención real: de 45 minutos a más de 3 horas, en un
            asiento donde la marca no se puede saltar con un clic.
          </p>
        </Reveal>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 80} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <dt className="text-sm font-medium text-white/70">{metric.label}</dt>
              <dd className="mt-3 text-4xl font-extrabold tracking-tight tabular-nums">{metric.value}</dd>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{metric.detail}</p>
            </Reveal>
          ))}
        </dl>

        <ol className="mt-4 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              as="li"
              delay={index * 100}
              className="rounded-2xl border-t-4 border-brand bg-white p-6 text-ink"
            >
              <p className="text-sm font-bold tabular-nums text-navy">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
