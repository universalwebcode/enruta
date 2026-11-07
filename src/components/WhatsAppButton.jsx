import { whatsappUrl } from "../data";
import { IconWhatsApp } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float fixed bottom-24 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition duration-300 hover:scale-105 hover:bg-[#1ebe57] md:bottom-5"
      aria-label="Hablar por WhatsApp con Fanery Ospina"
    >
      <span className="wa-pulse" aria-hidden="true" />
      <IconWhatsApp className="relative z-10 h-8 w-8" />
    </a>
  );
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-3 md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="#tarifas"
          className="inline-flex items-center justify-center rounded-full px-3 py-3 text-sm font-bold text-navy ring-1 ring-navy/15"
        >
          Ver tarifas
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-sm font-bold text-white"
        >
          <IconWhatsApp className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
