/**
 * CONFIGURAÇÃO CENTRAL — TEMPLATE DE LANDING PAGE PARA BARBEARIA
 * ------------------------------------------------------------------
 * Para personalizar este template para um novo cliente, edite APENAS
 * este arquivo. Nenhum componente contém dados fixos da barbearia.
 *
 * - Para ocultar uma seção opcional, defina seu conteúdo como `null`
 *   (ex.: `testimonials: null`) ou deixe a lista vazia.
 * - Todos os textos abaixo são FICTÍCIOS e servem apenas de demonstração.
 */

import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import barber1Img from "@/assets/barber-1.jpg";
import barber2Img from "@/assets/barber-2.jpg";
import gallery1Img from "@/assets/gallery-1.jpg";
import gallery2Img from "@/assets/gallery-2.jpg";
import gallery3Img from "@/assets/gallery-3.jpg";
import gallery4Img from "@/assets/gallery-4.jpg";

export interface ServiceItem {
  name: string;
  description: string;
  durationMinutes: number;
  price: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  detail: string;
}

export interface ThemeConfig {
  /** Cores em qualquer formato CSS válido (oklch, hex, rgb). */
  colors: {
    background: string;
    foreground: string;
    surface: string;
    surfaceAlt: string;
    mutedForeground: string;
    primary: string;
    primaryForeground: string;
    light: string;
    lightForeground: string;
  };
  fonts: {
    display: string;
    body: string;
    /** URL do Google Fonts (ou outro CSS de fontes) que carrega as famílias acima. */
    stylesheetUrl: string;
  };
}

export interface BarberConfig {
  /** true = página exibe avisos de que os dados são demonstrativos. */
  isDemo: boolean;
  locale: {
    lang: string;
    phoneCountryCode: string;
  };
  brand: {
    name: string;
    tagline: string;
    city: string;
    /** Imagem do logotipo. Se null, usa o ícone de tesoura padrão. */
    logo: { src: string; alt: string } | null;
    footerText: string;
  };
  theme: ThemeConfig;
  seo: {
    title: string;
    description: string;
  };
  copy: {
    nav: { about: string; services: string; team: string; gallery: string; contact: string };
    bookCta: string;
    bookCtaShort: string;
    heroSecondaryCta: string;
    finalCtaButton: string;
    instagramCta: string;
    locationEyebrow: string;
    locationTitle: string;
    mapCta: string;
    demoNotice: string;
  };
  links: {
    whatsapp: string;
    instagram: string;
    booking: string;
    maps: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  address: {
    street: string;
    neighborhood: string;
    city: string;
    zip: string;
  };
  /** Lista vazia oculta o bloco de horários. */
  hours: Array<{ days: string; time: string }>;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    /** Estatísticas opcionais. Use apenas números reais; lista vazia oculta o bloco. */
    stats: Array<{ value: string; label: string }>;
    statsDisclaimer: string | null;
    image: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  } | null;
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    members: TeamMember[];
  } | null;
  gallery: {
    eyebrow: string;
    title: string;
    images: GalleryImage[];
  } | null;
  testimonials: {
    eyebrow: string;
    title: string;
    items: Testimonial[];
    disclaimer: string;
  } | null;
  /** Lista vazia oculta os diferenciais. */
  differentials: Array<{ title: string; description: string }>;
  finalCta: {
    title: string;
    subtitle: string;
  };
}

export const barberConfig: BarberConfig = {
  isDemo: true,
  locale: {
    lang: "pt-BR",
    phoneCountryCode: "55",
  },
  brand: {
    name: "Navalha & Nó",
    tagline: "Barbearia Premium",
    city: "São Paulo",
    logo: null,
    footerText: "Barbearia Premium em São Paulo. Corte, barba e cuidado com padrão de excelência.",
  },
  theme: {
    colors: {
      background: "oklch(0.16 0.015 60)",
      foreground: "oklch(0.94 0.01 80)",
      surface: "oklch(0.2 0.018 60)",
      surfaceAlt: "oklch(0.24 0.02 60)",
      mutedForeground: "oklch(0.68 0.02 70)",
      primary: "oklch(0.72 0.13 75)",
      primaryForeground: "oklch(0.16 0.02 60)",
      light: "oklch(0.955 0.012 80)",
      lightForeground: "oklch(0.2 0.02 60)",
    },
    fonts: {
      display: '"Bebas Neue", "Archivo", sans-serif',
      body: '"Archivo", system-ui, sans-serif',
      stylesheetUrl:
        "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Bebas+Neue&display=swap",
    },
  },
  seo: {
    title: "Navalha & Nó — Barbearia Premium em São Paulo",
    description:
      "Cortes clássicos e contemporâneos, barba na navalha e um ritual de cuidado pensado para o homem moderno.",
  },
  copy: {
    nav: { about: "A casa", services: "Serviços", team: "Equipe", gallery: "Galeria", contact: "Contato" },
    bookCta: "Agendar horário",
    bookCtaShort: "Agendar →",
    heroSecondaryCta: "Ver serviços",
    finalCtaButton: "Agendar pelo WhatsApp",
    instagramCta: "Siga no Instagram →",
    locationEyebrow: "Visite",
    locationTitle: "Onde estamos",
    mapCta: "Abrir no mapa →",
    demoNotice: "Site de demonstração — todas as informações são fictícias.",
  },
  links: {
    whatsapp: "https://wa.me/5511999990000?text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio.",
    instagram: "https://instagram.com/navalhaeno",
    booking: "https://wa.me/5511999990000?text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio.",
    maps: "https://maps.google.com/?q=Rua+Oscar+Freire+1200+Sao+Paulo",
  },
  contact: {
    phone: "(11) 99999-0000",
    email: "contato@navalhaeno.com.br",
  },
  address: {
    street: "Rua Oscar Freire, 1200",
    neighborhood: "Jardins",
    city: "São Paulo — SP",
    zip: "01426-001",
  },
  hours: [
    { days: "Segunda a sexta", time: "09h — 20h" },
    { days: "Sábado", time: "08h — 18h" },
    { days: "Domingo", time: "Fechado" },
  ],
  hero: {
    eyebrow: "Barbearia premium nos Jardins",
    title: "Tradição no corte.",
    highlight: "Precisão no detalhe.",
    subtitle:
      "Cortes clássicos e contemporâneos, barba na navalha e um ritual de cuidado pensado para o homem moderno. Agende seu horário e viva a experiência.",
    image: heroImg,
    imageAlt: "Barbeiro finalizando um corte com máquina em ambiente escuro e sofisticado",
  },
  about: {
    eyebrow: "A casa",
    title: "Mais que uma barbearia, um ritual.",
    paragraphs: [
      "Nascemos da vontade de resgatar a barbearia clássica e elevá-la a outro padrão: ambiente impecável, atendimento sem pressa e profissionais que tratam cada corte como assinatura.",
      "Aqui, o tempo é seu. Café passado, cerveja gelada, boa música e a certeza de sair da cadeira exatamente como você imaginou — ou melhor.",
    ],
    stats: [
      { value: "12+", label: "anos de ofício" },
      { value: "18k", label: "cortes realizados" },
      { value: "4,9", label: "nota média" },
    ],
    statsDisclaimer: "Números fictícios, apenas para demonstração.",
    image: interiorImg,
    imageAlt: "Interior da barbearia com cadeiras de couro e iluminação quente",
  },
  services: {
    eyebrow: "Serviços",
    title: "O menu da casa",
    subtitle: "Preços de demonstração — personalize na configuração do template.",
    items: [
      {
        name: "Corte clássico",
        description: "Tesoura e máquina, finalização com pomada e lavagem.",
        durationMinutes: 45,
        price: "R$ 85",
      },
      {
        name: "Corte + barba",
        description: "O combo completo: corte sob medida e barba desenhada na navalha.",
        durationMinutes: 75,
        price: "R$ 140",
      },
      {
        name: "Barba terapia",
        description: "Toalha quente, navalha, óleos essenciais e massagem facial.",
        durationMinutes: 40,
        price: "R$ 70",
      },
      {
        name: "Degradê / fade",
        description: "Transição precisa, acabamento na navalha e styling.",
        durationMinutes: 50,
        price: "R$ 95",
      },
      {
        name: "Sobrancelha",
        description: "Alinhamento na navalha para um olhar marcante.",
        durationMinutes: 15,
        price: "R$ 30",
      },
      {
        name: "Pigmentação",
        description: "Disfarce de falhas e fios brancos com resultado natural.",
        durationMinutes: 30,
        price: "R$ 60",
      },
    ],
  },
  team: {
    eyebrow: "Os mestres",
    title: "Quem assina o seu corte",
    subtitle: "Profissionais com anos de estrada e obsessão por detalhe.",
    members: [
      {
        name: "Rafael Duarte",
        role: "Fundador & Master Barber",
        bio: "12 anos de cadeira. Especialista em cortes clássicos e barboterapia.",
        image: barber1Img,
      },
      {
        name: "Thiago Leme",
        role: "Barber & Fade Specialist",
        bio: "Referência em degradês e visagismo. Precisão cirúrgica na máquina.",
        image: barber2Img,
      },
    ],
  },
  gallery: {
    eyebrow: "Galeria",
    title: "O trabalho fala por si",
    images: [
      { src: gallery1Img, alt: "Barbear tradicional com toalha quente e navalha" },
      { src: gallery2Img, alt: "Acabamento de barba com máquina de precisão" },
      { src: gallery3Img, alt: "Ferramentas clássicas de barbeiro sobre madeira" },
      { src: gallery4Img, alt: "Cliente sorrindo após corte degradê finalizado" },
    ],
  },
  testimonials: {
    eyebrow: "Avaliações",
    title: "Quem senta na cadeira, volta",
    disclaimer: "Depoimentos fictícios exibidos apenas para demonstração do template.",
    items: [
      {
        quote:
          "Melhor experiência que já tive em barbearia. Ambiente impecável e o corte saiu exatamente como pedi.",
        author: "Marcos V.",
        detail: "Cliente desde 2023",
      },
      {
        quote:
          "A barba terapia virou ritual mensal. Toalha quente, navalha e aquele atendimento sem pressa.",
        author: "André P.",
        detail: "Cliente desde 2024",
      },
      {
        quote:
          "Levei meu filho para o primeiro corte e o cuidado da equipe foi impressionante. Recomendo de olhos fechados.",
        author: "Felipe R.",
        detail: "Cliente desde 2022",
      },
    ],
  },
  differentials: [
    {
      title: "Agendamento sem espera",
      description: "Horário marcado é horário cumprido. Seu tempo vale ouro.",
    },
    {
      title: "Produtos premium",
      description: "Trabalhamos apenas com linhas profissionais de barbearia.",
    },
    {
      title: "Ambiente exclusivo",
      description: "Cerveja gelada, café passado e playlist sob medida.",
    },
    {
      title: "Higiene certificada",
      description: "Esterilização hospitalar em todas as ferramentas.",
    },
  ],
  finalCta: {
    title: "Sua cadeira está esperando.",
    subtitle: "Agende em menos de um minuto pelo WhatsApp e garanta seu horário.",
  },
};
