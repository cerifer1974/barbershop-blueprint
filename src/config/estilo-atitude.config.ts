/**
 * CONFIGURAÇÃO — ESTILO & ATITUDE BARBERSHOP (POUSO ALEGRE - MG)
 * ------------------------------------------------------------------
 * Dados reais extraídos do Booksy, Instagram (@eeabarbershop) e Google Maps.
 * Fotografias reais do salão, fachada e clientes da barbearia.
 */

import type { BarberConfig } from "./barber.config";

import logoImg from "@/assets/estilo-atitude.jpeg";
import fachadaImg from "@/assets/fachada-estilo-atitude.jpeg";
import salaoImg from "@/assets/estilo-e-atitude-barbershop-salao.jpeg";
import barbeiroImg from "@/assets/estilo-e-atitude-barbershop.jpeg";
import cliente1Img from "@/assets/estilo-e-atitude-barbershop-cliente.jpeg";
import cliente2Img from "@/assets/estilo-e-atitude-barbershop-cliente-1.jpeg";
import cliente3Img from "@/assets/estilo-e-atitude-barbershop-cliente-2.jpeg";

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
    logo: {
      src: logoImg,
      alt: "Logotipo Oficial Estilo e Atitude Barbershop",
    },
    footerText: "Estilo & Atitude Barbershop em Pouso Alegre. Qualidade, pontualidade e estilo em cada atendimento.",
  },
  theme: {
    colors: {
      background: "oklch(0.15 0.01 45)",
      foreground: "oklch(0.95 0.01 80)",
      surface: "oklch(0.19 0.012 45)",
      surfaceAlt: "oklch(0.23 0.015 45)",
      mutedForeground: "oklch(0.68 0.02 65)",
      primary: "oklch(0.70 0.14 65)",
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
    nav: { about: "A Barbearia", services: "Serviços", team: "Profissional", gallery: "Trabalhos", contact: "Localização" },
    bookCta: "Agendar Horário",
    bookCtaShort: "Agendar →",
    heroSecondaryCta: "Ver Serviços e Preços",
    finalCtaButton: "Agendar no Booksy / WhatsApp",
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
      "Agende seu horário na Estilo & Atitude Barbershop. Cortes modernos, barba alinhada e atendimento com padrão de excelência em Pouso Alegre.",
    image: fachadaImg,
    imageAlt: "Fachada da Estilo e Atitude Barbershop no Jardim Noronha em Pouso Alegre",
  },
  about: {
    eyebrow: "Nossa casa",
    title: "Mais que um corte, a sua melhor versão.",
    paragraphs: [
      "Na Estilo & Atitude Barbershop, acreditamos que o corte de cabelo e o alinhamento da barba são extensões da sua confiança e identidade pessoal.",
      "Criamos um espaço acolhedor e dinâmico na Av. Dr. Artur Ribeiro Guimarães para você ser atendido com agilidade, sem atrasos e com profissionais dedicados a valorizar o seu estilo.",
    ],
    stats: [
      { value: "5.0", label: "estrelas de avaliação" },
      { value: "100%", label: "pontualidade" },
      { value: "Booksy", label: "agendamento 24h" },
    ],
    statsDisclaimer: "Informações públicas e avaliações de clientes.",
    image: salaoImg,
    imageAlt: "Ambiente interno e cadeiras da Estilo e Atitude Barbershop",
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
        description: "Alinhamento das costeletas e nuca para manter o corte sempre alinhado.",
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
    eyebrow: "Quem atende",
    title: "Quem cuida do seu estilo",
    subtitle: "Profissionais prontos para entregar a melhor experiência na cadeira.",
    members: [
      {
        name: "Barbeiro Responsável",
        role: "Fade & Visagismo Masculino",
        bio: "Especialista em degradês modernos, barba na navalha e atendimento de alta precisão.",
        image: barbeiroImg,
      },
      {
        name: "Ambiente & Cuidado",
        role: "Estrutura do Salão",
        bio: "Ambiente equipado com as melhores ferramentas e produtos do mercado.",
        image: salaoImg,
      },
    ],
  },
  gallery: {
    eyebrow: "Galeria de Clientes",
    title: "Confira nossos resultados reais",
    images: [
      { src: cliente1Img, alt: "Corte degradê navalhado realizado na Estilo e Atitude" },
      { src: cliente2Img, alt: "Alinhamento e corte em cliente na barbearia" },
      { src: cliente3Img, alt: "Corte estilizado e barba alinhada" },
      { src: salaoImg, alt: "Visão interna do salão Estilo e Atitude" },
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
