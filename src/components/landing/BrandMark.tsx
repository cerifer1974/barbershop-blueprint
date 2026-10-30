import { Scissors } from "lucide-react";
import { useBarberConfig } from "@/config/barber-context";

/** Logotipo + nome. Exibe o logo oficial da marca com destaque nítido. */
export function BrandMark({ size = "default" }: { size?: "default" | "large" }) {
  const { brand } = useBarberConfig();
  const isLarge = size === "large";

  return (
    <span className="flex items-center gap-3">
      {brand.logo ? (
        <img
          src={brand.logo.src}
          alt={brand.logo.alt}
          className={`w-auto object-contain rounded-full border border-primary/40 shadow-sm transition-transform hover:scale-105 ${
            isLarge ? "h-14 md:h-16" : "h-10 md:h-12"
          }`}
        />
      ) : (
        <span className="flex size-10 items-center justify-center rounded-sm bg-primary text-primary-foreground shadow-sm">
          <Scissors className="size-5" />
        </span>
      )}
      <span className={`font-display tracking-wider text-foreground uppercase ${isLarge ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
        {brand.name}
      </span>
    </span>
  );
}
