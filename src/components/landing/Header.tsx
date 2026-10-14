import { useEffect, useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { barberConfig } from "@/config/barber.config";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "A casa", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { brand, links } = barberConfig;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <Scissors className="size-4.5" />
          </span>
          <span className="font-display text-2xl tracking-wide text-foreground">
            {brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Agendar horário
          </a>
        </nav>

        <button
          className="flex size-10 items-center justify-center text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-sm bg-primary px-5 py-3.5 text-center text-base font-semibold text-primary-foreground"
            >
              Agendar horário
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
