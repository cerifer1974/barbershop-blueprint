import { Clock } from "lucide-react";
import { useBarberConfig } from "@/config/barber-context";
import { Reveal } from "@/components/Reveal";

export function Services() {
  const { services, links, copy } = useBarberConfig();
  if (!services || services.items.length === 0) return null;

  return (
    <section id="servicos" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {services.eyebrow}
          </p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide text-foreground md:text-6xl">
            {services.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{services.subtitle}</p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {services.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 2) * 100} className="bg-card">
              <div className="group flex h-full flex-col justify-between gap-6 p-7 transition-colors hover:bg-secondary md:p-9">
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl tracking-wide text-foreground">
                      {item.name}
                    </h3>
                    <span className="font-display text-3xl text-primary">{item.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                    <Clock className="size-3.5" />
                    {item.durationMinutes} min
                  </span>
                  <a
                    href={links.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary transition-opacity md:opacity-0 md:group-hover:opacity-100"
                  >
                    {copy.bookCtaShort}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
