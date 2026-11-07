import { useEffect, useState } from "react";
import { NAV, PHONES, EMAIL } from "../data";
import Container from "./Container";
import { IconClose, IconMenu } from "./Icons";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + 170;
      let current = "";
      for (const item of NAV) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = item.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-white sm:block">
        <Container className="flex h-9 items-center justify-between text-xs font-medium">
          <p>Cali · Valle del Cauca</p>
          <div className="flex items-center gap-4">
            {PHONES.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className="transition-colors hover:text-white/80">
                {phone.display}
              </a>
            ))}
            <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white/80">
              {EMAIL}
            </a>
            <SocialLinks
              className="ml-1 flex items-center gap-2 border-l border-white/20 pl-4"
              linkClassName="inline-flex items-center justify-center text-white/85 transition duration-300 hover:scale-110 hover:text-white"
            />
          </div>
        </Container>
      </div>

      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
            <a href="#inicio" className="shrink-0" onClick={close}>
            <Logo className="h-12 w-auto sm:h-14" />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative text-sm font-semibold transition-colors ${
                  active === item.id
                    ? "text-navy after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand"
                    : "text-slate-600 hover:text-navy"
                }`}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark lg:inline-flex"
            >
              Solicitar cotización
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy ring-1 ring-slate-200 lg:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </Container>

        {open ? (
          <div id="menu-movil" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
            <Container className="flex flex-col py-3">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={close}
                  className="border-b border-slate-100 py-3 text-base font-semibold text-navy"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={close}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-bold text-white"
              >
                Solicitar cotización
              </a>
              <div className="mt-4 flex flex-col gap-2 pb-3 text-sm font-semibold text-slate-600">
                {PHONES.map((phone) => (
                  <a key={phone.tel} href={`tel:${phone.tel}`}>
                    {phone.display}
                  </a>
                ))}
              </div>
              <SocialLinks
                className="mt-2 flex items-center gap-3 pb-4"
                linkClassName="inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper text-navy ring-1 ring-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-navy hover:text-white hover:ring-navy"
              />
            </Container>
          </div>
        ) : null}
      </div>
    </header>
  );
}
