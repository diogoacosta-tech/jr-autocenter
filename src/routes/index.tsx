import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Wrench,
  Sparkles,
  Volume2,
  CircleDot,
  ShieldCheck,
  Gauge,
  Users,
  BadgeDollarSign,
  Layers,
  Star,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Menu,
  MessageCircle,
  Navigation,
} from "lucide-react";
import heroAsset from "@/assets/hero-fachada.png.asset.json";
import teamAsset from "@/assets/equipe.jpg.asset.json";
import g1 from "@/assets/g_Captura_de_tela_2026-08-20_085509.png_.asset.json";
import g2 from "@/assets/g_487240834_18153793108360874_574602109275842465_n.jpg_.asset.json";
import g3 from "@/assets/g_568682438_18174380404360874_7671363694067516714_n.jpg_.asset.json";
import g4 from "@/assets/g_Captura_de_tela_2026-08-20_085441.png_.asset.json";
import g5 from "@/assets/g_CIVIC.png_.asset.json";
import g6 from "@/assets/g_488940867_18154578664360874_1702957836857660786_n.jpg_.asset.json";
import g7 from "@/assets/g_MOTO.png_.asset.json";
import g8 from "@/assets/g_Captura_de_tela_2026-08-20_085552.png_.asset.json";
import g9 from "@/assets/g_defender.jpg.asset.json";

const GALLERY = [
  { src: g1.url, alt: "Mustang em frente à fachada da Jr Auto Center" },
  { src: g2.url, alt: "Golf GTI preto no showroom com parede de rodas" },
  { src: g3.url, alt: "Mercedes-Benz prata dentro da loja Jr Auto Center" },
  { src: g4.url, alt: "Lavagem detalhada com espuma em SUV branca" },
  { src: g5.url, alt: "Honda Civic prata rebaixado na frente da oficina" },
  { src: g6.url, alt: "Caminhão Scania azul atendido na Jr Auto Center" },
  { src: g7.url, alt: "Motos Honda CBX sobre reboque na oficina" },
  { src: g8.url, alt: "Land Rover Discovery branca com rodas pretas" },
  { src: g9.url, alt: "Land Rover Defender em frente à fachada da Jr Auto Center" },
];

const WHATSAPP =
  "https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D554733196471&e=AUAmC-LQ_ytoYCZT-_bXvOds1GqpoAnZhZMVlelNxvHC1OBWCSDLMq5Q4qAjETpGYVnAw4V-BED31a1wRbBVSInjBSZ9H67e4CUWOJWXWKuMUVPBm4fPzN6XXUZ5ZzEvqoXFgccRXQ78WpT3AdNasA";
const PHONE = "tel:+554733196471";
const MAPS =
  "https://www.google.com/maps/dir/?api=1&destination=R.+Jos%C3%A9+Francisco+Laurindo,+900+-+S%C3%A3o+Domingos,+Navegantes+-+SC,+88370-603";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Equipe", href: "#equipe" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

const DIFF = [
  {
    icon: Gauge,
    title: "Diagnóstico Preciso",
    text: "Solucionamos problemas complexos que outras oficinas não resolvem.",
  },
  {
    icon: Users,
    title: "Equipe Qualificada",
    text: "Técnicos especialistas e apaixonados pelo setor automotivo.",
  },
  {
    icon: BadgeDollarSign,
    title: "Preço Justo",
    text: "Transparência total no orçamento antes de executar.",
  },
  {
    icon: Layers,
    title: "Serviço Completo",
    text: "Da mecânica pesada à estética de alto padrão.",
  },
];

const SERVICES = [
  {
    icon: Wrench,
    title: "Mecânica Geral & Elétrica",
    text: "Motor, suspensão, freios, injeção eletrônica e diagnósticos computadorizados.",
  },
  {
    icon: Sparkles,
    title: "Estética Automotiva & PPF",
    text: "Vitrificação de pintura, aplicação de PPF em black piano e polimento técnico.",
  },
  {
    icon: Volume2,
    title: "Películas & Som Automotivo",
    text: "Insulfilm de alta performance em todos os vidros e projetos de som.",
  },
  {
    icon: CircleDot,
    title: "Pneus, Rodas & Baterias",
    text: "Venda, troca, alinhamento, balanceamento e baterias multimarcas.",
  },
  {
    icon: ShieldCheck,
    title: "Acessórios Automotivos",
    text: "Equipamentos de segurança e personalização para seu carro.",
  },
];

const REVIEWS = [
  {
    text: "Parabéns pelo serviço no Astra! Depois de passar por 5 oficinas, o problema foi resolvido aqui com muita dedicação. Parabéns à equipe!",
    author: "Orlando Eletricista",
  },
  {
    text: "Serviço excelente e preço justo. Foram aplicadas películas em todos os vidros, vitrificação da pintura e PPF nos acabamentos black piano.",
    author: "Cliente Verificado",
  },
  {
    text: "Sem sombra de dúvida é a melhor oficina da cidade, serviço de altíssima qualidade e personalizado.",
    author: "Cliente Verificado",
  },
  {
    text: "Pessoal competente e o melhor preço comparado com o da região!!!!",
    author: "Cliente Verificado",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Jr Auto Center | Oficina Mecânica e Auto Center em Navegantes - SC",
      },
      {
        name: "description",
        content:
          "Mecânica geral, injeção eletrônica, estética automotiva, PPF, películas, pneus e acessórios em Navegantes - SC. 4,8/5 no Google. Agende pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Jr Auto Center | Oficina Mecânica em Navegantes - SC",
      },
      {
        property: "og:description",
        content:
          "Diagnóstico preciso, equipe qualificada e preço justo. Mecânica, estética automotiva, películas, pneus e acessórios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Stars() {
  return (
    <div className="flex gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav className="glass mx-auto flex max-w-6xl items-center gap-4 rounded-2xl px-4 py-3 sm:px-6">
        <a href="#inicio" className="font-display text-lg tracking-widest whitespace-nowrap">
          JR <span className="text-gradient-neon">AUTO CENTER</span>
        </a>
        <div className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-neon"
            >
              {n.label}
            </a>
          ))}
        </div>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="ml-auto hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-neon)] transition-transform hover:scale-105 sm:inline-flex lg:ml-0"
        >
          Agendar via WhatsApp
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto text-foreground lg:hidden"
        >
          {open ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-neon"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Agendar via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* HERO */}
      <section id="inicio" className="relative flex min-h-screen items-center pt-28 pb-20">
        <img
          src={heroAsset.url}
          alt="Fachada da Jr Auto Center iluminada ao anoitecer em Navegantes - SC"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-[80%_center] lg:object-[65%_60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/25 lg:from-background/95 lg:via-background/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_25%,color-mix(in_oklab,var(--neon)_14%,transparent),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-5">
          <div className="glass animate-float inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm">
            <Star className="h-4 w-4 fill-current text-gold" />
            <span className="text-foreground/90">
              4.8/5 Estrelas no Google (+150 Avaliações de Clientes)
            </span>
          </div>
          <h1 className="font-display animate-rise mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Sua Oficina Mecânica e Auto Center de{" "}
            <span className="text-gradient-neon">Confiança</span> em Navegantes
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Mecânica geral, injeção eletrônica, estética automotiva, pneus, películas e acessórios.
            A melhor qualidade e o preço mais justo da região.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-neon)] transition-transform hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar Serviço no WhatsApp
            </a>
            <a
              href={PHONE}
              className="glass glow-hover inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 font-semibold"
            >
              <Phone className="h-5 w-5 text-neon" />
              Ligar Agora: (47) 3319-6471
            </a>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">
              Conheça Quem <span className="text-gradient-neon">Cuidará</span> do Seu Veículo
            </h2>
            <p className="mt-5 text-muted-foreground">
              Somos a equipe Jr Auto Center e estamos aqui para fazer o melhor pelo seu carro,
              resolvendo seus problemas com esforço e dedicação total.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="glass rounded-full px-4 py-2 text-sm">Atendimento Rápido</span>
              <span className="glass rounded-full px-4 py-2 text-sm">Orçamento Transparente</span>
            </div>
          </div>
          <div className="glass glow-hover overflow-hidden rounded-3xl p-2">
            <img
              src={teamAsset.url}
              alt="Equipe Jr Auto Center na oficina"
              loading="lazy"
              width={1080}
              height={1382}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFF.map((d) => (
            <div key={d.title} className="glass glow-hover rounded-3xl p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--gradient-metal)] text-neon">
                <d.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-5 text-lg">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-center text-3xl sm:text-4xl">
          Nossos <span className="text-gradient-neon">Serviços</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Tudo o que seu veículo precisa em um só lugar.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="glass glow-hover group rounded-3xl p-7">
              <s.icon className="h-8 w-8 text-neon transition-transform group-hover:scale-110" />
              <h3 className="font-display mt-5 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="glow-hover grid place-items-center rounded-3xl bg-[var(--gradient-neon)] p-7 text-center font-semibold text-primary-foreground"
          >
            <span>
              Não achou o que procura?
              <br />
              Fale com a gente no WhatsApp
            </span>
          </a>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-center text-3xl sm:text-4xl">
          Conheça Mais <span className="text-gradient-neon">Nosso Trabalho</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Confira a qualidade dos nossos serviços em mecânica, estética, películas e detalhes
          automotivos.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((g) => (
            <div
              key={g.src}
              className="glass glow-hover group relative overflow-hidden rounded-3xl p-1.5"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="font-display text-center text-3xl sm:text-4xl">
          O Que Dizem <span className="text-gradient-neon">Nossos Clientes</span>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <div key={r.author + r.text.slice(0, 12)} className="glass glow-hover rounded-3xl p-7">
              <Stars />
              <p className="mt-4 text-foreground/90">“{r.text}”</p>
              <p className="mt-5 text-sm font-semibold text-neon">— {r.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-3xl">
              Onde <span className="text-gradient-neon">Estamos</span>
            </h2>
            <ul className="mt-7 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-neon" />
                <span className="min-w-0">
                  R. José Francisco Laurindo, 900 - São Domingos, Navegantes - SC, 88370-603
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-neon" />
                <span className="min-w-0">
                  Segunda a Sexta: 08:00 às 12:00 | 13:30 às 18:00
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-neon" />
                <a href={PHONE} className="hover:text-neon">
                  (47) 3319-6471
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={MAPS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-1"
              >
                <Navigation className="h-4 w-4" /> Como Chegar
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="glass glow-hover inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold"
              >
                <MessageCircle className="h-4 w-4 text-neon" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="glass glow-hover overflow-hidden rounded-3xl p-2">
            <iframe
              title="Mapa Jr Auto Center"
              src="https://maps.google.com/maps?q=R.%20Jos%C3%A9%20Francisco%20Laurindo%2C%20900%20-%20S%C3%A3o%20Domingos%2C%20Navegantes%20-%20SC%2C%2088370-603&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              className="h-[340px] w-full rounded-2xl border-0 grayscale-[0.4] contrast-125 lg:h-full"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center">
          <span className="font-display text-lg tracking-widest">
            JR <span className="text-gradient-neon">AUTO CENTER</span>
          </span>
          <a
            href="https://www.instagram.com/jr_aut0_center"
            target="_blank"
            rel="noreferrer"
            className="glass glow-hover inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm"
          >
            <Instagram className="h-4 w-4 text-neon" /> @jr_aut0_center
          </a>
          <p className="text-xs text-muted-foreground">
            © Jr Auto Center - Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="animate-pulse-glow fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.72_0.19_145)] text-[oklch(0.15_0.02_150)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
