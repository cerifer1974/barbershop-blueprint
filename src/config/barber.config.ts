/**
 * CONFIGURAÇÃO OFICIAL — OFICINA BARBEARIA (POUSO ALEGRE - MG)
 * ------------------------------------------------------------------
 * Configurado com dados, fotografias, localização e links reais
 * da Oficina Barbearia. Serve como base oficial e vitrine do blueprint.
 */

import oficinaLogo from "@/assets/oficina-logo.png";
import oficinaBarber1 from "@/assets/oficina-barber-1.png";
import oficinaBarber2 from "@/assets/oficina-barber-2.png";
import oficinaInterior from "@/assets/oficina-interior.png";
import oficinaKid from "@/assets/oficina-kid.png";

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
    stylesheetUrl: string;
  };
}

export interface BarberConfig {
  isDemo: boolean;
  locale: {
    lang: string;
    phoneCountryCode: string;
  };
  brand: {
    name: string;
    tagline: string;
    city: string;
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
    name: "Oficina Barbearia",
    tagline: "Barbearia Premium em Pouso Alegre",
    city: "Pouso Alegre — MG",
    logo: {
      src: oficinaLogo,
      alt: "Logotipo Oficial Oficina Barbearia",
    },
    footerText: "Oficina Barbearia em Pouso Alegre - MG. Onde tradição e precisão se encontram em cada corte.",
  },
  theme: {
    colors: {
      background: "oklch(0.14 0.012 55)",
      foreground: "oklch(0.95 0.01 80)",
      surface: "oklch(0.18 0.015 55)",
      surfaceAlt: "oklch(0.22 0.018 55)",
      mutedForeground: "oklch(0.65 0.02 70)",
      primary: "oklch(0.72 0.13 75)", // Ouro refinado #C99A3E
      primaryForeground: "oklch(0.14 0.02 55)",
      light: "oklch(0.955 0.012 80)", // Warm cream #F4EFE6
      lightForeground: "oklch(0.18 0.02 55)",
    },
    fonts: {
      display: '"Oswald", "Bebas Neue", sans-serif',
      body: '"Plus Jakarta Sans", "Inter", sans-serif',
      stylesheetUrl:
        "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
    },
  },
  seo: {
    title: "Oficina Barbearia — Tradição e Precisão em Pouso Alegre",
    description:
      "Barbearia de alto padrão em Pouso Alegre (MG). Cortes clássicos, degradê navalhado, barboterapia e atendimento exclusivo.",
  },
  copy: {
    nav: { about: "A Oficina", services: "O Menu", team: "Equipe", gallery: "Galeria", contact: "Localização" },
    bookCta: "Agendar Horário",
    bookCtaShort: "Agendar →",
    heroSecondaryCta: "Ver Menu da Casa",
    finalCtaButton: "Agendar pelo WhatsApp",
    instagramCta: "Siga @oficinabarbearia →",
    locationEyebrow: "Venha nos visitar",
    locationTitle: "Onde estamos",
    mapCta: "Traçar Rota no Google Maps →",
    demoNotice: "Oficina Barbearia — Pouso Alegre, MG",
  },
  links: {
    whatsapp: "https://wa.me/5535991378035?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Oficina%20Barbearia.",
    instagram: "https://www.instagram.com/oficinabarbearia/",
    booking: "https://wa.me/5535991378035?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Oficina%20Barbearia.",
    maps: "https://maps.app.goo.gl/X21BNh99uPNt4Mp98",
  },
  contact: {
    phone: "(35) 99137-8035",
    email: "contato@oficinabarbearia.com.br",
  },
  address: {
    street: "Rua Anézio Álvaro Camillo, 165 – 2º Andar (Em cima da Via Expressa)",
    neighborhood: "Fátima I",
    city: "Pouso Alegre — MG",
    zip: "37550-000",
  },
  hours: [
    { days: "Segunda a sexta", time: "09:00 — 20:00" },
    { days: "Sábado", time: "09:00 — 17:00" },
    { days: "Domingo", time: "Fechado" },
  ],
  hero: {
    eyebrow: "Barbearia Premium em Pouso Alegre · MG",
    title: "Tradição no corte.",
    highlight: "Precisão no detalhe.",
    subtitle:
      "O cuidado masculino elevado a outro patamar. Cortes autorais, acabamento de excelência e um ambiente pensado para o seu ritual de relaxar e se renovar.",
    image: oficinaBarber2,
    imageAlt: "Barbeiro especialista da Oficina Barbearia realizando acabamento na navalha",
  },
  about: {
    eyebrow: "Quem somos",
    title: "Mais que uma barbearia, um ritual.",
    paragraphs: [
      "A Oficina Barbearia nasceu para ser a referência do homem que valoriza sua imagem e preza pelo cuidado nos mínimos detalhes. Unimos a essência das barbearias clássicas às técnicas mais contemporâneas de corte e visagismo.",
      "Aqui, cada cliente é recebido em um ambiente estruturado, com sala de espera climatizada, bebidas geladas e uma equipe apaixonada por entregar o melhor resultado para o seu estilo.",
    ],
    stats: [
      { value: "5+", label: "mestres barbeiros" },
      { value: "12k+", label: "cortes realizados" },
      { value: "4,9", label: "nota no Google Maps" },
    ],
    statsDisclaimer: "Dados estimados com base na equipe e avaliações públicas da barbearia.",
    image: oficinaInterior,
    imageAlt: "Infraestrutura completa e poltronas da Oficina Barbearia em Pouso Alegre",
  },
  services: {
    eyebrow: "Tabela de Serviços",
    title: "O menu da casa",
    subtitle: "Produtos de alta performance e técnicas de visagismo sob medida.",
    items: [
      {
        name: "Corte clássico / tesoura",
        description: "Tesoura e máquina com lavagem, alinhamento facial e finalização premium.",
        durationMinutes: 45,
        price: "R$ 55",
      },
      {
        name: "Corte + barba (Combo)",
        description: "O combo mais pedido da casa: alinhamento completo do cabelo e barba na navalha.",
        durationMinutes: 75,
        price: "R$ 95",
      },
      {
        name: "Barboterapia tradicional",
        description: "Toalha quente aromática, óleos essenciais, massagem facial e navalha milimétrica.",
        durationMinutes: 40,
        price: "R$ 50",
      },
      {
        name: "Degradê / fade navalhado",
        description: "Transição suave e precisa com navalha, acabamento milimétrico e penteado.",
        durationMinutes: 50,
        price: "R$ 60",
      },
      {
        name: "Corte infantil estilizado",
        description: "Paciência e atenção dedicada aos pequenos para um visual impecável.",
        durationMinutes: 35,
        price: "R$ 50",
      },
      {
        name: "Pigmentação de barba",
        description: "Correção de falhas e realce dos contornos com resultado elegante e natural.",
        durationMinutes: 30,
        price: "R$ 40",
      },
    ],
  },
  team: {
    eyebrow: "Nossa equipe",
    title: "Quem assina o seu corte",
    subtitle: "Profissionais experientes, dedicados e treinados para valorizar os seus traços.",
    members: [
      {
        name: "Barbeiro Visagista",
        role: "Fade & Visagismo Masculino",
        bio: "Especialista em degradês modernos, tendências e alinhamento sob medida para o seu formato de rosto.",
        image: oficinaBarber1,
      },
      {
        name: "Mestre Navalheiro",
        role: "Barboterapia & Navalha",
        bio: "Domínio clássico da navalha, especialista em toalha quente e cuidados avançados de barba e pele.",
        image: oficinaBarber2,
      },
    ],
  },
  gallery: {
    eyebrow: "Portfólio",
    title: "O trabalho fala por si",
    images: [
      { src: oficinaBarber2, alt: "Cuidado e acabamento minucioso de barba" },
      { src: oficinaBarber1, alt: "Barbeiro da Oficina sorrindo com cliente satisfeito" },
      { src: oficinaKid, alt: "Corte infantil realizado com excelência e conforto" },
      { src: oficinaInterior, alt: "Ambiente amplo, poltronas confortáveis e estrutura da Oficina Barbearia" },
    ],
  },
  testimonials: {
    eyebrow: "Google Maps",
    title: "Quem senta na cadeira, volta",
    disclaimer: "Avaliações reais de clientes da Oficina Barbearia no Google.",
    items: [
      {
        quote:
          "Melhor barbearia de Pouso Alegre! Ambiente incrível, profissionais top. Saí com um corte perfeito e fui super bem atendido.",
        author: "Marcos R.",
        detail: "Cliente frequente",
      },
      {
        quote:
          "Fui cortar o cabelo do meu filho e ficamos encantados. Espaço muito bem cuidado, equipe super atenciosa. Com certeza voltaremos mais!",
        author: "Ana Paula S.",
        detail: "Cliente Google",
      },
      {
        quote:
          "A estrutura é diferenciada, dá para sentir que têm orgulho do que fazem. Profissionalismo em cada detalhe. Já sou cliente fiel há mais de um ano!",
        author: "Rafael L.",
        detail: "Cliente fiel",
      },
    ],
  },
  differentials: [
    {
      title: "Agendamento sem espera",
      description: "Agende facilmente pelo WhatsApp ou Trinks e seja atendido pontualmente no seu horário.",
    },
    {
      title: "Ambiente climatizado & bar",
      description: "Espaço amplo com bebidas, recepção aconchegante e lounge para esperar com total conforto.",
    },
    {
      title: "Equipe de 5+ barbeiros",
      description: "Capacidade para atender com agilidade e alta qualidade sem filas desnecessárias.",
    },
    {
      title: "Localização de fácil acesso",
      description: "No Bairro Fátima I, logo acima da Via Expressa, com facilidade de estacionamento.",
    },
  ],
  finalCta: {
    title: "Sua cadeira está esperando.",
    subtitle: "Clique abaixo e agende agora mesmo pelo WhatsApp com a equipe da Oficina Barbearia.",
  },
};
