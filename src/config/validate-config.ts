/**
 * VALIDAÇÃO DA CONFIGURAÇÃO
 * ------------------------------------------------------------------
 * Verifica se os campos obrigatórios do template estão preenchidos e
 * se os dados demonstrativos permanecem identificados como fictícios.
 * Executada pelos testes em `barber.config.test.ts` e pode ser chamada
 * manualmente com `validateBarberConfig(barberConfig)`.
 */

import type { BarberConfig } from "./barber.config";

export interface ConfigIssue {
  /** Caminho do campo, ex.: "brand.name" ou "services.items[2].price". */
  path: string;
  message: string;
}

const isBlank = (value: string | null | undefined): boolean =>
  value == null || value.trim().length === 0;

function requireString(issues: ConfigIssue[], path: string, value: string | null | undefined) {
  if (isBlank(value)) {
    issues.push({ path, message: "Campo obrigatório vazio ou ausente." });
  }
}

function requireUrl(issues: ConfigIssue[], path: string, value: string | null | undefined) {
  if (isBlank(value)) {
    issues.push({ path, message: "URL obrigatória vazia ou ausente." });
    return;
  }
  if (!/^https:\/\//.test(value!)) {
    issues.push({ path, message: "URL deve começar com https://." });
  }
}

export function validateBarberConfig(config: BarberConfig): ConfigIssue[] {
  const issues: ConfigIssue[] = [];

  // Marca e identidade
  requireString(issues, "brand.name", config.brand.name);
  requireString(issues, "brand.tagline", config.brand.tagline);
  requireString(issues, "brand.city", config.brand.city);
  requireString(issues, "brand.footerText", config.brand.footerText);

  // Tema
  for (const [key, value] of Object.entries(config.theme.colors)) {
    requireString(issues, `theme.colors.${key}`, value);
  }
  requireString(issues, "theme.fonts.display", config.theme.fonts.display);
  requireString(issues, "theme.fonts.body", config.theme.fonts.body);
  requireUrl(issues, "theme.fonts.stylesheetUrl", config.theme.fonts.stylesheetUrl);

  // SEO
  requireString(issues, "seo.title", config.seo.title);
  requireString(issues, "seo.description", config.seo.description);

  // Contato, endereço e links
  requireString(issues, "contact.phone", config.contact.phone);
  requireString(issues, "contact.email", config.contact.email);
  requireString(issues, "address.street", config.address.street);
  requireString(issues, "address.city", config.address.city);
  requireUrl(issues, "links.whatsapp", config.links.whatsapp);
  requireUrl(issues, "links.instagram", config.links.instagram);
  requireUrl(issues, "links.booking", config.links.booking);
  requireUrl(issues, "links.maps", config.links.maps);

  // Hero e chamada final
  requireString(issues, "hero.title", config.hero.title);
  requireString(issues, "hero.subtitle", config.hero.subtitle);
  requireString(issues, "hero.image", config.hero.image);
  requireString(issues, "finalCta.title", config.finalCta.title);

  // Serviços (seção opcional, mas se existir precisa estar completa)
  if (config.services) {
    if (config.services.items.length === 0) {
      issues.push({ path: "services.items", message: "Seção de serviços existe mas está vazia; use null para ocultá-la." });
    }
    config.services.items.forEach((item, i) => {
      requireString(issues, `services.items[${i}].name`, item.name);
      requireString(issues, `services.items[${i}].price`, item.price);
      if (!(item.durationMinutes > 0)) {
        issues.push({ path: `services.items[${i}].durationMinutes`, message: "Duração deve ser maior que zero." });
      }
    });
  }

  // Equipe (opcional)
  if (config.team) {
    config.team.members.forEach((member, i) => {
      requireString(issues, `team.members[${i}].name`, member.name);
      requireString(issues, `team.members[${i}].role`, member.role);
      requireString(issues, `team.members[${i}].image`, member.image);
    });
  }

  // Galeria (opcional)
  if (config.gallery) {
    config.gallery.images.forEach((img, i) => {
      requireString(issues, `gallery.images[${i}].src`, img.src);
      requireString(issues, `gallery.images[${i}].alt`, img.alt);
    });
  }

  // Identificação de dados demonstrativos
  if (config.isDemo) {
    requireString(issues, "copy.demoNotice", config.copy.demoNotice);
    if (config.about.stats.length > 0) {
      requireString(issues, "about.statsDisclaimer", config.about.statsDisclaimer);
    }
    if (config.testimonials && config.testimonials.items.length > 0) {
      requireString(issues, "testimonials.disclaimer", config.testimonials.disclaimer);
    }
  } else {
    // Site real: não pode exibir dados fictícios
    if (config.testimonials && config.testimonials.items.length > 0) {
      issues.push({
        path: "testimonials.items",
        message: "isDemo é false, mas há depoimentos cadastrados. Substitua por avaliações reais ou esvazie a lista.",
      });
    }
    if (config.about.stats.length > 0 && config.about.statsDisclaimer) {
      issues.push({
        path: "about.statsDisclaimer",
        message: "isDemo é false, mas o aviso de números fictícios ainda está presente. Use números reais e remova o aviso.",
      });
    }
  }

  return issues;
}
