import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { barberConfig } from "./barber.config";
import { horizonteConfig } from "./horizonte.config";
import { BarberConfigContext } from "./barber-context";
import { validateBarberConfig } from "./validate-config";
import { buildThemeCss } from "./theme";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Team } from "@/components/landing/Team";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { Location } from "@/components/landing/Location";
import { FinalCta } from "@/components/landing/FinalCta";

function renderBrand(config = horizonteConfig) {
  return renderToStaticMarkup(
    <BarberConfigContext.Provider value={config}>
      <Header /><Hero /><About /><Services /><Team /><Gallery />
      <Testimonials /><Location /><FinalCta /><Footer />
    </BarberConfigContext.Provider>,
  );
}

describe("Independent Horizonte demo", () => {
  it("passes the same mandatory and demonstration validation", () => {
    expect(validateBarberConfig(horizonteConfig)).toEqual([]);
  });
  it("contains none of the original brand, people, contacts or assets", () => {
    const config = JSON.stringify(horizonteConfig);
    const markup = renderBrand();
    for (const oldValue of [barberConfig.brand.name, barberConfig.contact.phone,
      barberConfig.contact.email, barberConfig.address.street, barberConfig.hero.image,
      barberConfig.about.image, ...barberConfig.team?.members.map(m => m.name) ?? []]) {
      expect(config).not.toContain(oldValue);
      expect(markup).not.toContain(oldValue);
    }
    expect(markup).toContain(horizonteConfig.brand.name);
    expect(markup).toContain(horizonteConfig.copy.demoNotice);
  });
  it("renders configured destinations and no invented reviews or statistics", () => {
    const markup = renderBrand();
    const document = new DOMParser().parseFromString(markup, "text/html");
    const destinations = Array.from(document.querySelectorAll("a"), a => a.getAttribute("href"));
    for (const url of Object.values(horizonteConfig.links)) expect(destinations).toContain(url);
    expect(horizonteConfig.testimonials).toBeNull();
    expect(horizonteConfig.about.stats).toEqual([]);
    expect(markup).not.toContain("nota média");
  });
  it("does not mutate the original and preserves default consumers", () => {
    const before = JSON.stringify(barberConfig);
    renderBrand();
    expect(JSON.stringify(barberConfig)).toBe(before);
    expect(renderBrand(barberConfig)).toContain("Navalha &amp; Nó");
    expect(renderToStaticMarkup(<Hero />)).toContain(barberConfig.hero.title);
  });
  it("scopes the second brand theme without changing root CSS", () => {
    const css = buildThemeCss(horizonteConfig.theme, '[data-barber-theme="horizonte"]');
    expect(css).toMatch(/^\[data-barber-theme="horizonte"\]\{/);
    expect(css).not.toContain(":root");
    expect(css).toContain(horizonteConfig.theme.colors.primary);
    expect(buildThemeCss(barberConfig.theme)).toMatch(/^:root\{/);
  });
});