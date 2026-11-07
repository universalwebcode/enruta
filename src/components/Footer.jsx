import { EMAIL, EMAIL_ALT, NAV, PHONES, routes } from "../data";
import Container from "./Container";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t-4 border-brand bg-navy-dark text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-xl bg-white px-3 py-2">
            <Logo className="h-11 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Publicidad EnRuta. Publicidad en medios de transporte y publicidad en buses en Cali y el Valle
            del Cauca. Campañas para empresas, con audiencia cautiva en rutas urbanas e intermunicipales.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-white/55">
            Cali, Valle del Cauca, Colombia · publicidadenruta.com
          </p>
          <SocialLinks
            className="mt-5 flex items-center gap-3"
            linkClassName="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-white"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Mapa del sitio</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="text-sm font-semibold text-white/85 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Rutas</p>
          <ul className="mt-4 space-y-2">
            {routes.map((route) => (
              <li key={route.code} className="text-sm text-white/85">
                {route.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Contacto directo</p>
          <p className="mt-4 text-base font-bold">Fanery Ospina</p>
          <p className="text-sm text-white/75">Publicidad EnRuta</p>
          <ul className="mt-3 space-y-1.5 text-sm font-semibold">
            {PHONES.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="transition-colors hover:text-white/80">
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-white/80">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL_ALT}`} className="break-all font-medium text-white/70 transition-colors hover:text-white">
                {EMAIL_ALT}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} Publicidad EnRuta. Cali, Valle del Cauca.</p>
          <p>Marcas que viajan lejos.</p>
        </Container>
      </div>
    </footer>
  );
}
