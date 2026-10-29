/**
 * CONFIGURAÇÃO — ESTILO & ATITUDE BARBERSHOP (POUSO ALEGRE - MG)
 * ------------------------------------------------------------------
 * Dados extraídos do Booksy, Instagram (@eeabarbershop) e Google Maps.
 */

import type { BarberConfig } from "./barber.config";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import barber1Img from "@/assets/barber-1.jpg";
import barber2Img from "@/assets/barber-2.jpg";
import gallery1Img from "@/assets/gallery-1.jpg";
import gallery2Img from "@/assets/gallery-2.jpg";
import gallery3Img from "@/assets/gallery-3.jpg";
import gallery4Img from "@/assets/gallery-4.jpg";

export const estiloEAtitudeConfig: BarberConfig = {
  isDemo: true,
  locale: {
    lang: "pt-BR",
    phoneCountryCode: "55",
  },
  brand: {
    name: "Estilo & Atitude Barbershop",
    tagline: "Sua identidade, nosso compromisso",
    city: "Pouso Alegre — MG",
    logo: null,
    footerText: "Estilo & Atitude Barbershop em Pouso Alegre. Qualidade, pontualidade e estilo em cada atendimento.",
  },
  theme: {
    colors: {
      background: "oklch(0.15 0.01 45)",
      foreground: "oklch(0.95 0.01 80)",
      surface: "oklch(0.19 0.012 45)",
      surfaceAlt: "oklch(0.23 0.015 45)",
      mutedForeground: "oklch(0.68 0.02 65)",
      primary: "oklch(0.70 0.14 65)", // Tom âmbar/cobre moderno
      primaryForeground: "oklch(0.15 0.01 45)",
      light: "oklch(0.96 0.01 80)",
      lightForeground: "oklch(0.18 0.015 45)",
    },
    fonts: {
      display: '"Oswald", "Bebas Neue", sans-serif',
      body: '"Plus Jakarta Sans", "Inter", sans-serif',
      stylesheetUrl:
        "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
    },
  },
  seo: {
    title: "Estilo & Atitude Barbershop — Pouso Alegre, MG",
    description:
      "Agende seu corte e barba na Estilo & Atitude Barbershop em Pouso Alegre. Atendimento pontual e especializado.",
  },
  copy: {
    nav: { about: "A Barbearia", services: "Serviços", team: "Equipe", gallery: "Trabalhos", contact: "Localização" },
    bookCta: "Agendar Horário",
    bookCtaShort: "Agendar →",
    heroSecondaryCta: "Ver Serviços e Preços",
    finalCtaButton: "Agendar pelo Booksy / WhatsApp",
    instagramCta: "Siga @eeabarbershop →",
    locationEyebrow: "Venha nos visitar",
    locationTitle: "Onde estamos",
    mapCta: "Abrir no Google Maps →",
    demoNotice: "Estilo & Atitude Barbershop — Demonstração exclusiva.",
  },
  links: {
    whatsapp: "https://wa.me/5535988122656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Estilo%20e%20Atitude.",
    instagram: "https://www.instagram.com/eeabarbershop/",
    booking: "https://booksy.com/pt-br/20901_estilo-e-atitude-barbershop_barbearias_519894_pouso-alegre",
    maps: "https://maps.app.goo.gl/WhAgjhtUwD2hFoZz5",
  },
  contact: {
    phone: "(35) 98812-2656",
    email: "contato@eeabarbershop.com.br",
  },
  address: {
    street: "Avenida Doutor Artur Ribeiro Guimarães, 158",
    neighborhood: "Jardim Noronha",
    city: "Pouso Alegre — MG",
    zip: "37551-017",
  },
  hours: [
    { days: "Segunda a sexta", time: "09:00 — 19:30" },
    { days: "Sábado", time: "08:30 — 17:00" },
    { days: "Domingo", time: "Fechado" },
  ],
  hero: {
    eyebrow: "Jardim Noronha · Pouso Alegre – MG",
    title: "Estilo único.",
    highlight: "Atitude em cada detalhe.",
    subtitle:
      "Agende seu horário na Estilo & Atitude Barbershop. Cortes modernos, barba alinhada e atendimento de primeira em Pouso Alegre.",
    image: heroImg,
    imageAlt: "Barbeiro executando corte degradê na Estilo e Atitude Barbershop",
  },
  about: {
    eyebrow: "Nossa história",
    title: "Mais que um corte, a sua melhor versão.",
    paragraphs: [
      "Na Estilo & Atitude Barbershop, acreditamos que o corte de cabelo e o alinhamento da barba são extensões da sua confiança e personalidade.",
      "Criamos um espaço acolhedor e dinâmico no Jardim Noronha para você ser atendido sem atrasos, com produtos de qualidade e barbeiros que entendem exatamente o que você procura.",
    ],
    stats: [
      { value: "5.0", label: "estrelas de avaliação" },
      { value: "100%", label: "pontualidade" },
      { value: "Booksy", label: "agendamento 24h" },
    ],
    statsDisclaimer: "Informações públicas e avaliações de clientes.",
    image: interiorImg,
    imageAlt: "Interior da Estilo & Atitude Barbershop",
  },
  services: {
    eyebrow: "Cardápio de Serviços",
    title: "Tabela de Serviços",
    subtitle: "Valores oficiais praticados no Booksy da Estilo & Atitude.",
    items: [
      {
        name: "Corte de Cabelo Masculino",
        description: "Degradê, fade navalhado ou clássico na tesoura com finalização.",
        durationMinutes: 40,
        price: "R$ 65",
      },
      {
        name: "Barba Completa",
        description: "Desenho da barba na navalha com toalha quente e pós-barba refrescante.",
        durationMinutes: 35,
        price: "R$ 45",
      },
      {
        name: "Combo Corte + Barba",
        description: "Renovação completa do visual com desconto especial no pacote.",
        durationMinutes: 70,
        price: "R$ 95",
      },
      {
        name: "Perfil / Pezinho",
        description: "Alinhamento das costeletas e nuca para manter o corte em dia.",
        durationMinutes: 15,
        price: "R$ 20",
      },
      {
        name: "Design de Sobrancelhas",
        description: "Limpeza e alinhamento preservando a masculinidade dos traços.",
        durationMinutes: 15,
        price: "R$ 20",
      },
      {
        name: "Epilação Nasal",
        description: "Remoção rápida e higiênica com cera própria para a região.",
        durationMinutes: 10,
        price: "R$ 20",
      },
    ],
  },
  team: {
    eyebrow: "Bancada",
    title: "Quem cuida do seu estilo",
    subtitle: "Profissionais prontos para entregar a melhor experiência na cadeira.",
    members: [
      {
        name: "Equipe Estilo & Atitude",
        role: "Mestres Barbeiros",
        bio: "Especialistas em degradês modernos, barba na navalha e visagismo.",
        image: barber1Img,
      },
      {
        name: "Atendimento Premium",
        role: "Barba & Acabamentos",
        bio: "Precisão na navalha e cuidado para clientes exigentes.",
        image: barber2Img,
      },
    ],
  },
  gallery: {
    eyebrow: "Galeria",
    title: "Confira nossos resultados",
    images: [
      { src: gallery1Img, alt: "Corte degradê de alta precisão" },
      { src: gallery2Img, alt: "Alinhamento de barba na navalha" },
      { src: gallery3Img, alt: "Equipamentos profissionais e ambiente limpo" },
      { src: gallery4Img, alt: "Cliente satisfeito após atendimento" },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "O que os clientes dizem",
    disclaimer: "Avaliações registradas no Google e Booksy.",
    items: [
      {
        quote: "Atendimento impecável! O agendamento pelo app funciona perfeitamente, sem atrasos. Corte top!",
        author: "Lucas M.",
        detail: "Cliente Booksy",
      },
      {
        quote: "Melhor atendimento da região do Noronha. Ambiente muito bom e os barbeiros são feras.",
        author: "Gabriel S.",
        detail: "Avaliação Google",
      },
      {
        quote: "Corte e barba no capricho. Virei cliente fixo desde a primeira vez.",
        author: "Matheus C.",
        detail: "Cliente Recorrente",
      },
    ],
  },
  differentials: [
    {
      title: "Agendamento Online 24h",
      description: "Reserve em segundos pelo Booksy ou tire dúvidas no WhatsApp.",
    },
    {
      title: "Pontualidade Garantida",
      description: "Respeito total ao seu tempo e compromisso com o horário marcado.",
    },
    {
      title: "Localização no Noronha",
      description: "Na Av. Dr. Artur Ribeiro Guimarães, de fácil acesso e estacionamento.",
    },
    {
      title: "Produtos de Primeira",
      description: "Linhas consagradas para hidratação e fixação de cabelo e barba.",
    },
  ],
  finalCta: {
    title: "Chegou a hora de renovar seu estilo.",
    subtitle: "Garanta seu horário na Estilo & Atitude Barbershop agora mesmo.",
  },
};
