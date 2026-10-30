import { createFileRoute } from "@tanstack/react-router";
import { getActiveBrand } from "@/config/active-brand";
import type { BarberConfig } from "@/config/barber.config";
import { BarberConfigContext } from "@/config/barber-context";
import { buildThemeCss } from "@/config/theme";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Team } from "@/components/landing/Team";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { Location } from "@/components/landing/Location";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => {
    const { config, themeId } = getActiveBrand();
    const { title, description } = config.seo;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "stylesheet", href: config.theme.fonts.stylesheetUrl }],
      styles: themeId
        ? [{ children: buildThemeCss(config.theme, `[data-barber-theme="${themeId}"]`) }]
        : [{ children: buildThemeCss(config.theme) }],
    };
  },
  component: Index,
});

function Index() {
  const { config, themeId } = getActiveBrand();
  return <BarberLanding config={config} themeId={themeId} />;
}

export function BarberLanding({ config, themeId }: { config: BarberConfig; themeId?: string }) {
  return (
    <BarberConfigContext.Provider value={config}>
      <div data-barber-theme={themeId} className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Team />
          <Gallery />
          <Testimonials />
          <Location />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </BarberConfigContext.Provider>
  );
}
