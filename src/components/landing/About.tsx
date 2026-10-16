import { useBarberConfig } from "@/config/barber-context";
import { Reveal } from "@/components/Reveal";

export function About() {
  const { about } = useBarberConfig();

  return (
    <section id="sobre" className="bg-cream text-cream-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <img
            src={about.image}
            alt={about.imageAlt}
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {about.eyebrow}
          </p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide md:text-6xl">
            {about.title}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 leading-relaxed opacity-80">
              {p}
            </p>
          ))}
          {about.stats.length > 0 && (
            <div className="mt-10 border-t border-cream-foreground/15 pt-8">
              <div className="grid grid-cols-3 gap-6">
                {about.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-4xl text-primary md:text-5xl">{s.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider opacity-70">{s.label}</p>
                  </div>
                ))}
              </div>
              {about.statsDisclaimer && (
                <p className="mt-4 text-xs opacity-60">{about.statsDisclaimer}</p>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
