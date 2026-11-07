import { SOCIAL } from "../data";
import { IconInstagram, IconLinkedIn } from "./Icons";

const ICONS = {
  instagram: IconInstagram,
  linkedin: IconLinkedIn,
};

export default function SocialLinks({ className = "", linkClassName = "", label = "Síguenos en redes" }) {
  return (
    <nav className={className} aria-label={label}>
      {SOCIAL.map((item) => {
        const Icon = ICONS[item.id];
        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={linkClassName}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </nav>
  );
}
