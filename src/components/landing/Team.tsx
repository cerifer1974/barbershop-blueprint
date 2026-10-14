import { barberConfig } from "@/config/barber.config";
import { Reveal } from "@/components/Reveal";

export function Team() {
  const { team } = barberConfig;
  if (!team || team.members.length === 0) return null;

  return (
    <section id="equipe" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <Reveal className="md:sticky md:top-32 md:self-start">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" />
              {team.eyebrow}
            </p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-wide text-foreground md:text-6xl">
              {team.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{team.subtitle}</p>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-2">
            {team.members.map((m, i) => (
              <Reveal key={m.name} delay={i * 120} className={i % 2 === 1 ? "sm:mt-16" : ""}>
                <figure className="group">
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={m.image}
                      alt={`Retrato de ${m.name}`}
                      width={768}
                      height={960}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">{m.role}</p>
                    <h3 className="mt-1 font-display text-3xl tracking-wide text-foreground">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
