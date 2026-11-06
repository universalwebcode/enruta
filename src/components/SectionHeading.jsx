export default function SectionHeading({ eyebrow, title, text, light = false, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] ${
          centered ? "justify-center" : ""
        } ${light ? "text-white" : "text-navy"}`}
      >
        <span className="h-px w-8 bg-brand" aria-hidden="true" />
        {eyebrow}
        {centered ? <span className="h-px w-8 bg-brand" aria-hidden="true" /> : null}
      </p>
      <h2
        className={`mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/80" : "text-slate-600"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
