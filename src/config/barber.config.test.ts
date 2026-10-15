import { describe, expect, it } from "vitest";
import { barberConfig } from "./barber.config";
import { validateBarberConfig } from "./validate-config";

describe("barber.config", () => {
  it("passa na validação sem nenhum problema", () => {
    expect(validateBarberConfig(barberConfig)).toEqual([]);
  });

  it("aponta campos obrigatórios vazios", () => {
    const broken = structuredClone(barberConfig);
    broken.brand.name = "";
    broken.contact.phone = "   ";
    broken.links.whatsapp = "http://inseguro.com";
    const issues = validateBarberConfig(broken);
    expect(issues.map((i) => i.path)).toEqual(
      expect.arrayContaining(["brand.name", "contact.phone", "links.whatsapp"]),
    );
  });

  it("exige aviso de demonstração quando isDemo é true", () => {
    const broken = structuredClone(barberConfig);
    broken.copy.demoNotice = "";
    const issues = validateBarberConfig(broken);
    expect(issues.map((i) => i.path)).toContain("copy.demoNotice");
  });

  it("exige disclaimer de estatísticas fictícias quando há stats no modo demo", () => {
    const broken = structuredClone(barberConfig);
    broken.about.statsDisclaimer = null;
    const issues = validateBarberConfig(broken);
    expect(issues.map((i) => i.path)).toContain("about.statsDisclaimer");
  });

  it("bloqueia depoimentos fictícios quando isDemo é false", () => {
    const broken = structuredClone(barberConfig);
    broken.isDemo = false;
    const issues = validateBarberConfig(broken);
    expect(issues.map((i) => i.path)).toContain("testimonials.items");
  });

  it("valida itens de serviço incompletos", () => {
    const broken = structuredClone(barberConfig);
    const items = broken.services!.items;
    items[0]!.price = "";
    items[1]!.durationMinutes = 0;
    const issues = validateBarberConfig(broken);
    expect(issues.map((i) => i.path)).toEqual(
      expect.arrayContaining(["services.items[0].price", "services.items[1].durationMinutes"]),
    );
  });
});
