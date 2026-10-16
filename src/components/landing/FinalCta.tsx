import { ArrowRight } from "lucide-react";
import { useBarberConfig } from "@/config/barber-context";

export function FinalCta() {
  const { finalCta, links, about, copy } = useBarberConfig();

  return (
    <section className="relative overflow-hidden">
      <img
        src={about.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
        <h2 className="font-display text-6xl leading-[0.95] tracking-wide text-foreground md:text-8xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground">{finalCta.subtitle}</p>
        <a
          href={links.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-9 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          {copy.finalCtaButton}
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
