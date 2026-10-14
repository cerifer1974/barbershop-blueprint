import type { ThemeConfig } from "./barber.config";

/**
 * Converte o tema da configuração em variáveis CSS (:root).
 * Os componentes usam apenas tokens semânticos (bg-primary, text-foreground…),
 * então trocar as cores aqui atualiza toda a página de forma consistente.
 */
export function buildThemeCss({ colors: c, fonts }: ThemeConfig): string {
  const vars: Record<string, string> = {
    "--background": c.background,
    "--foreground": c.foreground,
    "--card": c.surface,
    "--card-foreground": c.foreground,
    "--popover": c.surface,
    "--popover-foreground": c.foreground,
    "--secondary": c.surfaceAlt,
    "--secondary-foreground": c.foreground,
    "--muted": c.surfaceAlt,
    "--muted-foreground": c.mutedForeground,
    "--primary": c.primary,
    "--primary-foreground": c.primaryForeground,
    "--accent": c.primary,
    "--accent-foreground": c.primaryForeground,
    "--brand": c.primary,
    "--brand-foreground": c.primaryForeground,
    "--ring": c.primary,
    "--cream": c.light,
    "--cream-foreground": c.lightForeground,
    "--font-display-family": fonts.display,
    "--font-body-family": fonts.body,
  };
  const body = Object.entries(vars)
    .map(([k, v]) => `${k}:${v.replace(/[<>{}]/g, "")};`)
    .join("");
  return `:root{${body}}`;
}
