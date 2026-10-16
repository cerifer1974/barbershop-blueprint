import { Scissors } from "lucide-react";
import { useBarberConfig } from "@/config/barber-context";

/** Logotipo + nome. Usa brand.logo da configuração ou o ícone padrão. */
export function BrandMark() {
  const { brand } = useBarberConfig();
  return (
    <span className="flex items-center gap-2.5">
      {brand.logo ? (
        <img src={brand.logo.src} alt={brand.logo.alt} className="h-9 w-auto" />
      ) : (
        <span className="flex size-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
          <Scissors className="size-4.5" />
        </span>
      )}
      <span className="font-display text-2xl tracking-wide text-foreground">{brand.name}</span>
    </span>
  );
}
