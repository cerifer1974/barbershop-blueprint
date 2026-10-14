import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { barberConfig } from "@/config/barber.config";
import { Reveal } from "@/components/Reveal";

export function Location() {
  const { address, hours, contact, links, copy, locale } = barberConfig;
  const phoneHref = `tel:+${locale.phoneCountryCode}${contact.phone.replace(/\D/g, "")}`;

  return (
    <section id="contato" className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-3 md:px-8 md:py-28">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {copy.locationEyebrow}
          </p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide text-foreground md:text-6xl">
            {copy.locationTitle}
          </h2>
        </Reveal>

        <Reveal delay={100} className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-foreground">{address.street}</p>
              <p className="text-muted-foreground">
                {address.neighborhood} · {address.city}
              </p>
              <p className="text-muted-foreground">CEP {address.zip}</p>
              <a
                href={links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {copy.mapCta}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="mt-1 size-5 shrink-0 text-primary" />
            <a href={phoneHref} className="text-foreground hover:text-primary">
              {contact.phone}
            </a>
          </div>
          <div className="flex gap-4">
            <Mail className="mt-1 size-5 shrink-0 text-primary" />
            <a href={`mailto:${contact.email}`} className="break-all text-foreground hover:text-primary">
              {contact.email}
            </a>
          </div>
        </Reveal>

        {hours.length > 0 && (
        <Reveal delay={200}>
          <div className="flex gap-4">
            <Clock className="mt-1 size-5 shrink-0 text-primary" />
            <dl className="w-full divide-y divide-border">
              {hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 py-3 first:pt-0">
                  <dt className="text-muted-foreground">{h.days}</dt>
                  <dd className="font-semibold text-foreground">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
        )}
      </div>
    </section>
  );
}
