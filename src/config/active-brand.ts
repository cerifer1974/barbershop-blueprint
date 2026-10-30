import type { BarberConfig } from "./barber.config";
import { barberConfig } from "./barber.config";
import { estiloEAtitudeConfig } from "./estilo-atitude.config";
import { horizonteConfig } from "./horizonte.config";

export const allBrands: Record<string, BarberConfig> = {
  oficina: barberConfig,
  "oficina-barbearia": barberConfig,
  "estilo-atitude": estiloEAtitudeConfig,
  estiloatitude: estiloEAtitudeConfig,
  horizonte: horizonteConfig,
};

/**
 * Resolve qual barbearia deve ser servida na raiz (/)
 * 1. Prioridade 1: Variável de ambiente VITE_BRAND no build/deploy da Vercel.
 * 2. Prioridade 2: Detecção automática no navegador pelo hostname do domínio (ex: se o domínio tiver 'estilo' ou 'atitude').
 * 3. Fallback: barberConfig (Oficina Barbearia).
 */
export function getActiveBrand(): { config: BarberConfig; themeId?: string } {
  const envBrand = (import.meta.env.VITE_BRAND || "").toLowerCase().trim();
  if (envBrand && allBrands[envBrand]) {
    return {
      config: allBrands[envBrand],
      themeId: envBrand.includes("oficina") ? undefined : envBrand,
    };
  }

  // Detecção automática por hostname (ex: estilo-atitude.vercel.app)
  if (typeof window !== "undefined") {
    const host = window.location.hostname.toLowerCase();
    if (host.includes("estilo") || host.includes("atitude")) {
      return { config: estiloEAtitudeConfig, themeId: "estilo-atitude" };
    }
    if (host.includes("horizonte")) {
      return { config: horizonteConfig, themeId: "horizonte" };
    }
  }

  return { config: barberConfig, themeId: undefined };
}
