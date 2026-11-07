import { useEffect, useRef } from "react";
import { corridors, whatsappUrl } from "../data";
import Container from "./Container";
import { IconArrow, IconWhatsApp } from "./Icons";

const facts = ["10 espacios por bus", "5:30 a. m. – 9:00 p. m.", "Trayectos de 1 a 3 horas"];

function silence(video) {
  if (!video) return;
  video.defaultMuted = true;
  if (!video.muted) video.muted = true;
  if (video.volume !== 0) video.volume = 0;
}

function SalonVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const keepQuiet = () => silence(video);
    video.addEventListener("volumechange", keepQuiet);
    video.addEventListener("play", keepQuiet);
    silence(video);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      video.autoplay = false;
    }
    return () => {
      video.removeEventListener("volumechange", keepQuiet);
      video.removeEventListener("play", keepQuiet);
    };
  }, []);

  return (
    <video
      ref={(node) => {
        videoRef.current = node;
        silence(node);
      }}
      poster="/assets/videos/recorrido-poster.jpg"
      width="576"
      height="1024"
      muted
      defaultMuted
      playsInline
      loop
      autoPlay
      controls
      preload="metadata"
      onPlay={(event) => silence(event.currentTarget)}
      onVolumeChange={(event) => silence(event.currentTarget)}
      aria-label="Recorrido por el interior de un bus con la publicidad de EnRuta en cada respaldo"
      className="relative aspect-[3/4] w-full rounded-3xl bg-navy object-cover shadow-2xl"
    >
      <source src="/assets/videos/recorrido.mp4?v=3" type="video/mp4" />
    </video>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,59,109,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,59,109,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <p className="hero-enter inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-navy ring-1 ring-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Publicidad EnRuta
          </p>
          <h1 className="hero-enter hero-enter-delay-1 mt-5 max-w-xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
            Haz que tu marca viaje con miles de pasajeros cada día.
          </h1>
          <p className="hero-enter hero-enter-delay-2 mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Publicidad en el respaldo de las sillas de buses intermunicipales e interurbanos. Tu aviso va
            frente al pasajero durante todo el trayecto: entre 45 minutos y más de 3 horas, con la
            repetición de quien vive, trabaja o estudia entre Cali y el Valle.
          </p>

          <div className="hero-enter hero-enter-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#tarifas"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Ver propuesta comercial
              <IconArrow />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-navy ring-1 ring-navy/15 transition duration-300 hover:-translate-y-0.5 hover:bg-white/80"
            >
              <IconWhatsApp className="h-5 w-5 text-navy" />
              Hablar por WhatsApp
            </a>
          </div>

          <ul className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2 text-sm font-semibold text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>

          <ol className="hero-enter hero-enter-delay-5 mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-semibold text-slate-500">
            {corridors.map((city, index) => (
              <li key={city} className="flex items-center gap-2">
                <span className="text-navy">{city}</span>
                {index < corridors.length - 1 ? (
                  <span className="text-brand" aria-hidden="true">
                    —
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <div className="hero-enter hero-enter-delay-2 lg:col-span-5">
          <figure className="mx-auto max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-3xl bg-navy sm:block" aria-hidden="true" />
              <SalonVideo />
            </div>
            <figcaption className="mt-4 flex items-end justify-between gap-4">
              <p className="max-w-[16rem] text-sm leading-snug text-slate-600">
                Recorrido real por el salón. El aviso queda al frente, silla por silla.
              </p>
              <p className="text-right">
                <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Exposición diaria</span>
                <span className="text-2xl font-extrabold tabular-nums tracking-tight text-navy">7–15 h</span>
              </p>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
