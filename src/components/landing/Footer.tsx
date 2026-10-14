import { Instagram, MessageCircle, Scissors } from "lucide-react";
import { barberConfig } from "@/config/barber.config";

export function Footer() {
  const { brand, links, address, contact } = barberConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[2fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <Scissors className="size-4.5" />
            </span>
            <span className="font-display text-2xl tracking-wide text-foreground">{brand.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {brand.tagline} em {brand.city}. Corte, barba e cuidado com padrão de excelência.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold text-foreground">Contato</p>
          <p className="text-muted-foreground">{address.street}</p>
          <p className="text-muted-foreground">{address.city}</p>
          <p className="mt-2 text-muted-foreground">{contact.phone}</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold text-foreground">Redes</p>
          <div className="flex gap-3">
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground md:px-8">
          © {year} {brand.name}. Site de demonstração — todas as informações são fictícias.
        </p>
      </div>
    </footer>
  );
}
