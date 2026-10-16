import { createFileRoute } from "@tanstack/react-router";
import { horizonteConfig } from "@/config/horizonte.config";
import { buildThemeCss } from "@/config/theme";
import { BarberLanding } from "./index";

export const Route = createFileRoute("/horizonte")({
  head: () => ({
    meta: [
      { title: horizonteConfig.seo.title },
      { name: "description", content: horizonteConfig.seo.description },
      { property: "og:title", content: horizonteConfig.seo.title },
      { property: "og:description", content: horizonteConfig.seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: horizonteConfig.theme.fonts.stylesheetUrl }],
    styles: [{ children: buildThemeCss(horizonteConfig.theme, '[data-barber-theme="horizonte"]') }],
  }),
  component: Horizonte,
});

function Horizonte() {
  return <BarberLanding config={horizonteConfig} themeId="horizonte" />;
}