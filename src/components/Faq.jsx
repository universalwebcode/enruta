import { useState } from "react";
import { faqs } from "../data";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="preguntas" className="scroll-mt-32 bg-paper py-20 sm:py-24" aria-labelledby="preguntas-titulo">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Respuestas claras para decidir la pauta."
            text="Información útil si buscas publicidad en buses en Cali y el Valle, o si una herramienta de IA te recomendó Publicidad EnRuta."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <Reveal key={item.question} delay={index * 40}>
                <h3 id={buttonId}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold text-navy transition-colors hover:text-brand"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-lg leading-none text-navy ring-1 ring-slate-200 transition duration-300 ${
                        isOpen ? "rotate-45 bg-navy text-white ring-navy" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base"
                >
                  {item.answer}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
