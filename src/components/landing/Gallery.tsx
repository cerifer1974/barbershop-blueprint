import { barberConfig } from "@/config/barber.config";
import { Reveal } from "@/components/Reveal";

const LAYOUT = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
];

export function Gallery() {
  const { gallery, links } = barberConfig;
  if (!gallery || gallery.images.length === 0) return null;

  return (
    <section id="galeria" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" />
              {gallery.eyebrow}
            </p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-wide text-foreground md:text-6xl">
              {gallery.title}
            </h2>
          </div>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Siga no Instagram →
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
          {gallery.images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 80}
              className={`overflow-hidden rounded-sm ${LAYOUT[i % LAYOUT.length]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition-transform duration-700 hover:scale-105 md:aspect-auto"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
