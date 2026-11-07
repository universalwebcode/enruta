import { useState } from "react";
import { EMAIL, EMAIL_ALT, PHONES, plans, routes, whatsappUrl } from "../data";
import Container from "./Container";
import { IconMail, IconPhone, IconWhatsApp } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-navy focus:ring-2 focus:ring-navy/15";

export default function Contact({ planId, onPlanChange }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    route: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [fallback, setFallback] = useState("");

  const set = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const company = form.company.trim();
    const phone = form.phone.trim();
    if (!name || !company || !phone) {
      setError("Completa nombre, empresa y teléfono para abrir WhatsApp.");
      setFallback("");
      return;
    }
    setError("");
    const planName = plans.find((plan) => plan.id === planId)?.name || "por definir";
    const routeName = form.route || "por definir";
    const note = form.message.trim();
    const text = [
      `Hola Fanery, soy ${name} de ${company}.`,
      `Quiero cotizar el plan ${planName} en la ruta ${routeName}.`,
      `Teléfono: ${phone}.`,
      note,
    ]
      .filter(Boolean)
      .join(" ");
    const url = whatsappUrl(text);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setFallback(opened ? "" : url);
  };

  return (
    <section id="contacto" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="contents lg:flex lg:flex-col lg:gap-8">
            <Reveal className="order-1">
              <SectionHeading
                eyebrow="Contacto comercial"
                title="Solicite una propuesta con Fanery Ospina."
                text="Indique la empresa, la ruta y el plan de interés. Respondemos con disponibilidad de buses y el detalle para salir a circulación."
              />
            </Reveal>

            <Reveal delay={80} className="order-3">
              <form onSubmit={submit} className="rounded-3xl bg-paper p-5 ring-1 ring-slate-200 sm:p-7" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-navy">
                    Nombre
                    <input className={fieldClass} name="name" autoComplete="name" value={form.name} onChange={set("name")} required />
                  </label>
                  <label className="block text-sm font-semibold text-navy">
                    Empresa
                    <input className={fieldClass} name="organization" autoComplete="organization" value={form.company} onChange={set("company")} required />
                  </label>
                  <label className="block text-sm font-semibold text-navy">
                    Teléfono
                    <input className={fieldClass} name="tel" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={set("phone")} required />
                  </label>
                  <label className="block text-sm font-semibold text-navy">
                    Ruta de interés
                    <select className={fieldClass} value={form.route} onChange={set("route")}>
                      <option value="">Aún no la defino</option>
                      {routes.map((route) => (
                        <option key={route.code} value={route.title}>
                          {route.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm font-semibold text-navy sm:col-span-2">
                    Plan
                    <select className={fieldClass} value={planId} onChange={(event) => onPlanChange(event.target.value)}>
                      <option value="">Quiero que me asesoren</option>
                      {plans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name} · {plan.price}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm font-semibold text-navy sm:col-span-2">
                    Mensaje
                    <textarea className={`${fieldClass} min-h-28 resize-y`} value={form.message} onChange={set("message")} />
                  </label>
                </div>

                {error ? (
                  <p role="alert" className="mt-4 text-sm font-semibold text-brand-dark">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
                >
                  <IconWhatsApp />
                  Enviar por WhatsApp
                </button>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("Cotización de campaña EnRuta")}`}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-white"
                >
                  <IconMail className="h-4 w-4" />
                  Escribir al correo
                </a>

                {fallback ? (
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    El navegador bloqueó la ventana.{" "}
                    <a href={fallback} target="_blank" rel="noopener noreferrer" className="font-bold text-navy underline">
                      Abrir WhatsApp con el mensaje
                    </a>
                    .
                  </p>
                ) : null}
              </form>
            </Reveal>
          </div>

          <div className="contents lg:block">
            <Reveal as="aside" delay={120} className="order-2 rounded-3xl bg-navy p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Contacto comercial</p>
              <p className="mt-2 text-3xl font-extrabold tracking-tight">Fanery Ospina</p>
              <p className="mt-1 text-white/80">Publicidad EnRuta</p>
              <ul className="mt-6 space-y-3">
                {PHONES.map((phone) => (
                  <li key={phone.tel}>
                    <a href={`tel:${phone.tel}`} className="inline-flex items-center gap-3 text-lg font-bold transition-colors hover:text-white/80">
                      <IconPhone className="h-5 w-5 text-brand" />
                      {phone.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${EMAIL}`} className="inline-flex items-start gap-3 font-semibold break-all transition-colors hover:text-white/80">
                    <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL_ALT}`} className="inline-flex items-start gap-3 text-sm font-medium break-all text-white/80 transition-colors hover:text-white">
                    <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {EMAIL_ALT}
                  </a>
                </li>
              </ul>
              <SocialLinks
                className="mt-6 flex items-center gap-3"
                linkClassName="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand"
              />
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                <IconWhatsApp />
                Hablar por WhatsApp
              </a>
            </Reveal>

            <Reveal as="figure" delay={180} className="order-4 overflow-hidden rounded-3xl ring-1 ring-slate-200 lg:mt-6">
              <img
                src="/assets/equipo.jpg"
                width="768"
                height="1024"
                alt="Equipo de Publicidad EnRuta en una terraza, con la camiseta de la marca."
                loading="lazy"
                className="h-80 w-full object-cover object-[center_30%] sm:h-[26rem]"
              />
              <figcaption className="bg-paper px-4 py-3 text-sm text-slate-600">
                Equipo EnRuta.
              </figcaption>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
