import { whatsappUrl } from "../data";
import { IconWhatsApp } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-lg hover:bg-[#0E6F63] md:inline-flex"
      aria-label="Hablar por WhatsApp con Fanery Ospina"
    >
      <IconWhatsApp className="h-7 w-7" />
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
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-3 py-3 text-sm font-bold text-white"
        >
          <IconWhatsApp className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
