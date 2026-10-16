import { createFileRoute } from "@tanstack/react-router";
import { barberConfig } from "@/config/barber.config";
import type { BarberConfig } from "@/config/barber.config";
import { BarberConfigContext } from "@/config/barber-context";
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

const { title, description } = barberConfig.seo;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <BarberLanding config={barberConfig} />;
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
