import { createFileRoute } from "@tanstack/react-router";
import { estiloEAtitudeConfig } from "@/config/estilo-atitude.config";
import { buildThemeCss } from "@/config/theme";
import { BarberLanding } from "./index";

export const Route = createFileRoute("/estilo-atitude")({
  head: () => ({
    meta: [
      { title: estiloEAtitudeConfig.seo.title },
      { name: "description", content: estiloEAtitudeConfig.seo.description },
      { property: "og:title", content: estiloEAtitudeConfig.seo.title },
      { property: "og:description", content: estiloEAtitudeConfig.seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: estiloEAtitudeConfig.theme.fonts.stylesheetUrl }],
    styles: [{ children: buildThemeCss(estiloEAtitudeConfig.theme, '[data-barber-theme="estilo-atitude"]') }],
  }),
  component: EstiloAtitudePage,
});

function EstiloAtitudePage() {
  return <BarberLanding config={estiloEAtitudeConfig} themeId="estilo-atitude" />;
}

