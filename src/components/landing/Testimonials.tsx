import { barberConfig } from "@/config/barber.config";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  const { testimonials, differentials } = barberConfig;
  const hasDiff = differentials.length > 0;
  const hasTestimonials = !!testimonials && testimonials.items.length > 0;
  if (!hasDiff && !hasTestimonials) return null;

  return (
    <section className="bg-cream text-cream-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        {hasDiff && (
          <div className={`grid gap-10 sm:grid-cols-2 lg:grid-cols-4 ${hasTestimonials ? "border-b border-cream-foreground/15 pb-16" : ""}`}>
            {differentials.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <p className="font-display text-5xl text-primary">0{i + 1}</p>
                <h3 className="mt-3 text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">{d.description}</p>
              </Reveal>
            ))}
          </div>
        )}

        {testimonials && hasTestimonials && (
          <div className={hasDiff ? "pt-16" : ""}>
            <Reveal className="mb-12">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                <span className="h-px w-8 bg-primary" />
                {testimonials.eyebrow}
              </p>
              <h2 className="font-display text-5xl leading-[0.95] tracking-wide md:text-6xl">
                {testimonials.title}
              </h2>
            </Reveal>
            <div className="grid gap-10 md:grid-cols-3">
              {testimonials.items.map((t, i) => (
                <Reveal key={t.author} delay={i * 100}>
                  <blockquote>
                    <p className="font-display text-6xl leading-none text-primary">“</p>
                    <p className="-mt-4 text-lg leading-relaxed">{t.quote}</p>
                    <footer className="mt-5 text-sm">
                      <span className="font-semibold">{t.author}</span>
                      <span className="opacity-60"> · {t.detail}</span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
            <p className="mt-12 text-xs opacity-60">{testimonials.disclaimer}</p>
          </div>
        )}
      </div>
    </section>
  );
}
