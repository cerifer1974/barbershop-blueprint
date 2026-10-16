import type { BarberConfig } from "./barber.config";
import hero from "@/assets/horizonte-hero.jpg";
import interior from "@/assets/horizonte-interior.jpg";
import mateus from "@/assets/horizonte-barber-1.jpg";
import clara from "@/assets/horizonte-barber-2.jpg";

/** Independent fictional brand. All names, prices, contacts and images are demo data. */
export const horizonteConfig: BarberConfig = {
  isDemo: true,
  locale: { lang: "pt-BR", phoneCountryCode: "55" },
  brand: {
    name: "Barbearia Horizonte",
    tagline: "Seu estilo, um novo olhar.",
    city: "Curitiba",
    logo: null,
    footerText: "Corte, barba e cuidado contemporâneo em Curitiba. Uma marca fictícia para demonstração.",
  },
  theme: {
    colors: {
      background: "#141613", foreground: "#F1EBDD", surface: "#1E221B",
      surfaceAlt: "#292F23", mutedForeground: "#B7BBAC",
      primary: "#929F6C", primaryForeground: "#141613",
      light: "#E8DFCD", lightForeground: "#252D1C",
    },
    fonts: {
      display: '"Barlow Condensed", sans-serif',
      body: '"DM Sans", system-ui, sans-serif',
      stylesheetUrl: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap",
    },
  },
  seo: {
    title: "Barbearia Horizonte — Cuidado contemporâneo | Demonstração",
    description: "Demonstração fictícia de uma barbearia contemporânea em Curitiba: cortes, barba e cuidado com um novo olhar.",
  },
  copy: {
    nav: { about: "O espaço", services: "Cuidados", team: "Pessoas", gallery: "Olhares", contact: "Encontre" },
    bookCta: "Reservar horário", bookCtaShort: "Reservar →", heroSecondaryCta: "Explorar cuidados",
    finalCtaButton: "Conversar no WhatsApp", instagramCta: "Nosso Instagram →",
    locationEyebrow: "Curitiba", locationTitle: "Encontre a Horizonte",
    mapCta: "Ver localização →",
    demoNotice: "Demonstração fictícia — nomes, preços, endereço, horários e contatos são ilustrativos; fotografias geradas por IA. Não aceita reservas reais.",
  },
  links: {
    whatsapp: "https://wa.me/5541900000000?text=Ol%C3%A1%2C%20Horizonte!%20Quero%20saber%20sobre%20os%20cuidados.",
    booking: "https://wa.me/5541900000000?text=Ol%C3%A1%2C%20Horizonte!%20Quero%20reservar%20um%20hor%C3%A1rio.",
    instagram: "https://www.instagram.com/barbearia.horizonte.demo/",
    maps: "https://www.google.com/maps/search/?api=1&query=Curitiba+PR",
  },
  contact: { phone: "(41) 90000-0000", email: "oi@horizonte.example" },
  address: { street: "Rua do Horizonte, 240 (fictícia)", neighborhood: "Centro", city: "Curitiba — PR", zip: "80000-000" },
  hours: [
    { days: "Terça a sexta", time: "10h — 19h" },
    { days: "Sábado", time: "09h — 17h" },
    { days: "Domingo e segunda", time: "Fechado" },
  ],
  hero: {
    eyebrow: "Seu estilo, um novo olhar.", title: "Barbearia", highlight: "Horizonte.",
    subtitle: "Linhas limpas, textura natural e cuidado no seu ritmo. Um espaço para renovar o visual sem deixar de ser você.",
    image: hero, imageAlt: "Fotografia gerada: corte em um espaço contemporâneo com paredes verde-oliva e luz natural",
  },
  about: {
    eyebrow: "O espaço", title: "Menos ruído. Mais você.",
    paragraphs: [
      "A Horizonte é uma proposta de barbearia contemporânea: luz natural, materiais simples e atenção ao que importa. Cada cuidado começa com uma conversa sobre seu estilo e sua rotina.",
      "Entre tons de oliva, areia e preto, o espaço convida a desacelerar. Corte e barba ganham um olhar leve, pessoal e sem excessos. Esta história e a marca são fictícias.",
    ],
    stats: [], statsDisclaimer: null,
    image: interior, imageAlt: "Fotografia gerada: cadeiras pretas, espelhos amplos e paredes oliva no espaço Horizonte",
  },
  services: {
    eyebrow: "Cuidados", title: "Seu próximo visual",
    subtitle: "Serviços e valores ilustrativos para demonstração. Não representam uma oferta real.",
    items: [
      { name: "Corte autoral", description: "Forma e textura pensadas para o seu dia a dia, com lavagem e finalização.", durationMinutes: 50, price: "R$ 90" },
      { name: "Corte e barba", description: "Um visual completo, com proporções equilibradas e acabamento cuidadoso.", durationMinutes: 80, price: "R$ 155" },
      { name: "Barba natural", description: "Desenho leve, alinhamento e hidratação para respeitar a textura dos fios.", durationMinutes: 35, price: "R$ 65" },
      { name: "Corte na tesoura", description: "Movimento e volume com uma finalização de aparência natural.", durationMinutes: 60, price: "R$ 110" },
    ],
  },
  team: {
    eyebrow: "Pessoas", title: "Novos olhares",
    subtitle: "Personagens fictícios e retratos gerados para apresentar o template.",
    members: [
      { name: "Mateus Costa", role: "Corte e textura", bio: "Personagem demonstrativo dedicado a formas leves e acabamento natural.", image: mateus },
      { name: "Clara Ribeiro", role: "Barba e estilo", bio: "Personagem demonstrativa com foco em proporção, detalhe e expressão pessoal.", image: clara },
    ],
  },
  gallery: {
    eyebrow: "Olhares", title: "Luz, forma e cuidado",
    images: [
      { src: hero, alt: "Imagem gerada: cuidado com o corte à luz do dia" },
      { src: interior, alt: "Imagem gerada: interior contemporâneo em oliva e areia" },
      { src: mateus, alt: "Retrato gerado do personagem Mateus Costa" },
      { src: clara, alt: "Retrato gerado da personagem Clara Ribeiro" },
    ],
  },
  testimonials: null,
  differentials: [
    { title: "Escuta primeiro", description: "Uma proposta de atendimento que começa pela sua rotina e preferências." },
    { title: "Textura natural", description: "Formas leves e acabamentos que valorizam a identidade de cada pessoa." },
    { title: "Tempo de cuidado", description: "Um ambiente pensado para uma pausa no ritmo da cidade." },
    { title: "Design essencial", description: "Luz natural, materiais simples e atenção aos pequenos detalhes." },
  ],
  finalCta: { title: "Um novo olhar.", subtitle: "Conheça a proposta Horizonte. Contato ilustrativo; este site não realiza agendamentos reais." },
};