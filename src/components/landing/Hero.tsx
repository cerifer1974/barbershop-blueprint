import { ArrowRight } from "lucide-react";
import { useBarberConfig } from "@/config/barber-context";

export function Hero() {
  const { hero, links, copy, services, brand } = useBarberConfig();

  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-28 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-14 md:px-8 md:pb-24 md:pt-40">
        <div>
          {/* Selo oficial com o Logo da Barbearia */}
          {brand.logo && (
            <div className="mb-6 inline-flex items-center gap-3.5 rounded-full border border-primary/30 bg-card/60 px-4 py-2 backdrop-blur-sm">
              <img
                src={brand.logo.src}
                alt={brand.logo.alt}
                className="size-11 rounded-full border border-primary/40 object-cover shadow-md"
              />
              <div className="flex flex-col text-left">
                <span className="font-display text-sm tracking-wider uppercase text-foreground">
                  {brand.name}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-widest text-primary">
                  {brand.city}
                </span>
              </div>
            </div>
          )}

          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-6xl leading-[0.95] tracking-wide text-foreground md:text-8xl">
            {hero.title}
            <br />
            <span className="text-primary">{hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {copy.bookCta}
              <ArrowRight className="size-4" />
            </a>
            {!!services?.items.length && (
              <a
                href="#servicos"
                className="rounded-sm border border-border px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {copy.heroSecondaryCta}
              </a>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-sm border border-primary/40 md:block" />
          <img
            src={hero.image}
            alt={hero.imageAlt}
            width={1024}
            height={1280}
            fetchPriority="high"
            className="relative aspect-[4/5] w-full rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
