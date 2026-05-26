import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  X,
  Zap,
  Target,
  TrendingUp,
  Shield,
  MessageCircle,
  Sparkles,
  Smartphone,
  MousePointerClick,
  CheckCircle2,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { saveLead } from "@/lib/leads";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroGrid1 from "@/assets/hero-grid-1.png";
import heroGrid2 from "@/assets/hero-grid-2.png";
import heroGrid3 from "@/assets/hero-grid-3.png";
import heroGrid4 from "@/assets/hero-grid-4.png";
import heroGrid5 from "@/assets/hero-grid-5.png";
import landingPagesShowcase from "@/assets/landing-pages-showcase.png";
import vocLogo from "@/assets/voc-logo-white.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VOC Comunicações — Landing Pages de Alta Conversão" },
      {
        name: "description",
        content:
          "Criamos landing pages estratégicas para tráfego pago, captação de leads e aumento de vendas. Pare de perder dinheiro com páginas ruins.",
      },
      { property: "og:title", content: "VOC Comunicações — Landing Pages que Vendem" },
      {
        property: "og:description",
        content:
          "Transforme cliques em clientes. Landing pages feitas para converter campanhas de tráfego pago.",
      },
    ],
  }),
});

const WHATSAPP_URL =
  "https://wa.me/5517991966086?text=Quero%20uma%20landing%20page%20que%20venda%20mais";
const CONTACT_PHONE = "+55 17 99196-6086";
const CONTACT_PHONE_URL = "tel:+5517991966086";
const CONTACT_EMAIL = "communicationsvoc@gmail.com";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Toaster theme="dark" position="top-center" />
      <Nav />
      <Hero />
      <Pain />
      <Explanation />
      <Benefits />
      <Comparison />
      <ForWho />
      <Objection />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex h-14 items-center gap-2 overflow-visible">
          <img
            src={vocLogo}
            alt="VOC Comunicações"
            width={238}
            height={79}
            className="h-14 w-auto max-w-[220px]"
          />
        </a>
        <nav className="hidden items-center gap-2 text-xs font-semibold text-muted-foreground lg:flex">
          {[
            { label: "Problema", href: "#problema" },
            { label: "O que é?", href: "#o-que-e" },
            { label: "Benefícios", href: "#beneficios" },
            { label: "Comparação", href: "#comparacao" },
            { label: "Para quem", href: "#para-quem" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md border border-transparent px-3 py-2 transition hover:border-border hover:bg-secondary/60 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="font-semibold">
          <a href="#orcamento">
            Orçamento <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/40"
    >
      <HeroAnimatedBackground />
      <div className="absolute inset-0 bg-background/58 backdrop-blur-[0.5px]" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, oklch(0.16 0.005 270 / 0.78) 74%)" }}
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center lg:py-28">
        <div className="flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Agência especialista em conversão
          </div>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Transforme cliques em clientes com uma{" "}
            <span className="relative inline-block text-primary drop-shadow-[0_0_22px_oklch(0.58_0.28_264_/_0.85)]">
              Landing Page
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary/70 shadow-[0_0_18px_oklch(0.58_0.28_264_/_0.75)]" />
            </span>{" "}
            feita para vender
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A <strong className="text-foreground">VOC Comunicações</strong> cria landing pages
            estratégicas para campanhas de tráfego pago, ajudando sua empresa a captar mais leads,
            gerar mais orçamentos e aproveitar melhor cada real investido em anúncios.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6 text-base font-semibold">
              <a href="#orcamento">
                Quero uma Landing Page que venda mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-border bg-secondary/50 px-6 text-base font-semibold hover:bg-secondary"
            >
              <a href="#orcamento">
                <MessageCircle className="mr-2 h-4 w-4" />
                Solicitar diagnóstico da minha campanha
              </a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["Foco em conversão", "Pronta para tráfego pago", "Entrega rápida"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroAnimatedBackground() {
  const columns = [
    [heroGrid1, heroGrid3, heroGrid5, heroGrid1, heroGrid3, heroGrid5],
    [heroGrid2, heroGrid4, heroGrid1, heroGrid2, heroGrid4, heroGrid1],
    [heroGrid3, heroGrid5, heroGrid2, heroGrid3, heroGrid5, heroGrid2],
    [heroGrid4, heroGrid1, heroGrid3, heroGrid4, heroGrid1, heroGrid3],
  ];

  return (
    <div className="absolute inset-0 opacity-75">
      <div className="hero-image-grid mx-auto grid h-full max-w-7xl grid-cols-4 gap-3 px-4 py-4 md:gap-4 md:px-8">
        {columns.map((images, columnIndex) => (
          <div key={columnIndex} className="hero-image-column overflow-hidden">
            <div
              className={
                columnIndex % 2 === 0
                  ? "hero-image-track hero-image-track-up"
                  : "hero-image-track hero-image-track-down"
              }
            >
              {images.map((src, imageIndex) => (
                <img
                  key={`${columnIndex}-${imageIndex}`}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="hero-image-card rounded-md border border-border/40 object-cover shadow-[var(--shadow-card)]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- PAIN ---------- */
function Pain() {
  const problems = [
    { icon: MousePointerClick, t: "Muitos cliques e poucos contatos" },
    { icon: Zap, t: "Página lenta ou confusa" },
    { icon: Target, t: "Falta de uma oferta clara" },
    { icon: MessageCircle, t: "Visitantes abandonando sem chamar no WhatsApp" },
    { icon: TrendingUp, t: "Campanhas caras com baixo retorno" },
    { icon: Sparkles, t: "Site bonito, mas sem estratégia de conversão" },
  ];
  return (
    <section id="problema" className="border-b border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="O problema"
          title={
            <>
              Seu anúncio pode estar funcionando.{" "}
              <span className="text-primary">O problema pode estar na página.</span>
            </>
          }
          description="Você pode ter um bom anúncio, uma boa oferta e mesmo assim perder vendas se a página de destino não estiver preparada para converter. Quando o cliente clica e encontra uma página confusa, lenta ou genérica, ele simplesmente sai. E cada saída custa dinheiro."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="group relative rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-destructive/50 hover:bg-card/80"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition group-hover:bg-destructive group-hover:text-destructive-foreground">
                <X className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-destructive" />
                <p className="text-base font-medium">{t}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPLANATION ---------- */
function Explanation() {
  return (
    <section
      id="o-que-e"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        backgroundImage: `url(${landingPagesShowcase})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-background/78 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,oklch(0.16_0.005_270_/_0.92))]" />
      <div className="absolute inset-x-0 -bottom-px h-56 bg-gradient-to-b from-transparent via-background/95 to-background" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <SectionHeader
          eyebrow="O que é?"
          title={<>O que é uma Landing Page de alta conversão?</>}
          description="É uma página criada com um objetivo específico, como captar leads, vender um produto, divulgar um serviço ou gerar contatos pelo WhatsApp. Diferente de um site comum, ela é pensada para remover distrações e guiar o cliente até a decisão."
          centered
        />
        <div className="mt-12 inline-block rounded-2xl border border-primary/30 bg-background/70 px-8 py-6 shadow-[var(--shadow-card)] backdrop-blur-md">
          <p className="text-xl font-bold tracking-tight md:text-2xl">
            Criamos uma página com mensagem clara, design profissional e estrutura persuasiva para
            conduzir o visitante até a ação.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */
function Benefits() {
  const items = [
    { icon: TrendingUp, t: "Mais conversão nos anúncios" },
    { icon: Sparkles, t: "Mais clareza na apresentação da oferta" },
    { icon: Shield, t: "Mais confiança para quem chega pela primeira vez" },
    { icon: MessageCircle, t: "Mais contatos qualificados" },
    { icon: Target, t: "Menos desperdício no tráfego pago" },
    { icon: Smartphone, t: "Uma experiência profissional no celular e no computador" },
  ];
  return (
    <section id="beneficios" className="border-b border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Benefícios"
          title={<>Como uma boa Landing Page melhora suas campanhas</>}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <p className="text-base font-semibold leading-snug">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPARISON ---------- */
function Comparison() {
  const common = [
    "Muitas distrações",
    "Mensagem genérica",
    "Pouco foco em conversão",
    "Não acompanha a campanha",
    "Dificulta a decisão do cliente",
  ];
  const landing = [
    "Foco em uma ação principal",
    "Texto persuasivo",
    "Estrutura pensada para vender",
    "Alinhada ao tráfego pago",
    "Conduz o visitante até o contato",
  ];
  return (
    <section id="comparacao" className="border-b border-border/40 bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Comparação"
          title={
            <>
              <span className="text-primary">Landing Page estratégica</span>{" "}
              <span className="text-muted-foreground">×</span> Página comum
            </>
          }
          centered
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="relative rounded-2xl border border-primary/40 bg-background p-8 shadow-[var(--shadow-glow)]">
            <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              Recomendado
            </div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Check strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold">Landing Page estratégica</h3>
            </div>
            <ul className="space-y-4">
              {landing.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span className="font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <X strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold">Página comum</h3>
            </div>
            <ul className="space-y-4">
              {common.map((c) => (
                <li key={c} className="flex items-start gap-3 text-muted-foreground">
                  <X className="mt-1 h-4 w-4 shrink-0 text-destructive" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOR WHO ---------- */
function ForWho() {
  const items = [
    "Você quer anunciar no Google, Instagram ou Facebook",
    "Você já investe em tráfego, mas recebe poucos leads",
    "Você quer divulgar um serviço, produto, evento ou lançamento",
    "Você precisa captar contatos qualificados",
    "Você quer uma página profissional para apresentar sua oferta",
    "Você quer vender mais sem depender apenas do improviso",
  ];
  return (
    <section id="para-quem" className="texture-dots relative overflow-hidden border-b border-border/40 py-20 md:py-28">
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Para quem é"
          title={<>Esse serviço é ideal para você se...</>}
          centered
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {items.map((t) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </div>
              <p className="text-base font-medium leading-snug">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- OBJECTION ---------- */
function Objection() {
  return (
    <section className="border-b border-border/40 bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeader
          eyebrow="Objeção"
          title={<>Por que não usar apenas o Instagram ou um site comum?</>}
          description="O Instagram ajuda a gerar atenção, mas nem sempre conduz o cliente até a decisão. Um site comum pode ter muitas informações e distrações. A landing page cria um caminho direto: o cliente entra, entende a oferta, confia na empresa e toma uma ação."
          centered
        />
      </div>
    </section>
  );
}

/* ---------- FINAL CTA + FORM ---------- */
function FinalCTA() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const nome = String(form.get("nome") ?? "");
    const whatsapp = String(form.get("whatsapp") ?? "");
    const empresa = String(form.get("empresa") ?? "");
    const objetivo = String(form.get("objetivo") ?? "");
    const message = [
      "Quero uma landing page que venda mais.",
      `Nome: ${nome}`,
      `WhatsApp: ${whatsapp}`,
      empresa ? `Empresa: ${empresa}` : "",
      objetivo ? `Objetivo da campanha: ${objetivo}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const leadResult = await saveLead({ nome, whatsapp, empresa, objetivo });
      setLoading(false);
      formElement.reset();
      if (leadResult.status === "skipped") {
        console.warn("Lead storage skipped: configure Supabase environment variables.");
      }
      toast.success(`Obrigado, ${nome}! Vamos te direcionar para o WhatsApp.`);
      window.open(`https://wa.me/5517991966086?text=${encodeURIComponent(message)}`, "_blank");
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Não foi possível salvar seus dados, mas vamos abrir o WhatsApp.");
      window.open(`https://wa.me/5517991966086?text=${encodeURIComponent(message)}`, "_blank");
    }
  }

  return (
    <section id="orcamento" className="relative overflow-hidden border-b border-border/40 py-20 md:py-28">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />
      <AudioWaveTexture />
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Solicite seu orçamento
          </div>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Pronto para transformar seus acessos em{" "}
            <span className="text-primary">oportunidades reais</span>?
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Se você vai investir em tráfego pago, sua página precisa estar preparada para converter.
            Fale com a VOC Comunicações e solicite uma landing page estratégica para sua campanha.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Resposta em até 24h",
              "Diagnóstico gratuito da sua oferta",
              "Sem compromisso",
            ].map((t) => (
              <li key={t} className="flex">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-black shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
        >
          <h3 className="text-xl font-bold">Solicite seu orçamento</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Preencha e nossa equipe entra em contato.
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="nome" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Nome
              </label>
              <Input id="nome" name="nome" required placeholder="Seu nome" />
            </div>
            <div>
              <label htmlFor="whatsapp" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                WhatsApp
              </label>
              <Input id="whatsapp" name="whatsapp" required placeholder="(17) 99196-6086" />
            </div>
            <div>
              <label htmlFor="empresa" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Empresa
              </label>
              <Input id="empresa" name="empresa" placeholder="Nome da sua empresa" />
            </div>
            <div>
              <label htmlFor="objetivo" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Objetivo da campanha
              </label>
              <Textarea
                id="objetivo"
                name="objetivo"
                rows={3}
                placeholder="Ex.: captar leads para clínica odontológica"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="h-12 w-full text-base font-bold"
            >
              {loading ? "Enviando..." : "Solicitar diagnóstico da minha campanha"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Seus dados estão seguros e não serão compartilhados.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function AudioWaveTexture() {
  const columns = Array.from({ length: 34 }, (_, columnIndex) => columnIndex);
  const rowCounts = [
    15, 12, 16, 10, 14, 17, 11, 15, 13, 16, 12, 14, 10, 9, 9, 9, 9, 9, 9, 9, 10, 13, 11,
    16, 14, 12, 17, 10, 15, 13, 16, 11, 14, 17,
  ];

  return (
    <div className="audio-wave-texture" aria-hidden="true">
      {columns.map((column) => (
        <div
          key={column}
          className="audio-wave-column"
          style={
            {
              "--column-delay": `${((column * 11) % 23) * -0.13}s`,
              "--column-duration": `${2.2 + ((column * 7) % 9) * 0.21}s`,
            } as React.CSSProperties
          }
        >
          {Array.from({ length: rowCounts[column] }, (_, row) => (
            <span
              key={row}
              className="audio-wave-cell"
              style={
                {
                  "--cell-delay": `${row * 0.055 + ((column * 5) % 7) * 0.025}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "O que é uma landing page?",
      a: "É uma página criada com um objetivo específico, como captar leads, vender um produto, divulgar um serviço ou gerar contatos pelo WhatsApp.",
    },
    {
      q: "Preciso ter um site?",
      a: "Não. A landing page pode funcionar de forma independente, especialmente para campanhas de tráfego pago.",
    },
    {
      q: "Ela funciona para qualquer negócio?",
      a: "Sim, desde que exista uma oferta clara. Funciona muito bem para serviços, clínicas, cursos, imóveis, eventos, consultorias, lojas e negócios locais.",
    },
    {
      q: "Vocês criam o texto também?",
      a: "Sim. A estrutura da página inclui texto persuasivo, organização das informações e chamadas para ação.",
    },
    {
      q: "A página funciona no celular?",
      a: "Sim. A landing page é criada para funcionar bem principalmente no celular, onde acontece grande parte dos acessos vindos dos anúncios.",
    },
  ];
  return (
    <section id="faq" className="border-b border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="FAQ" title={<>Perguntas frequentes</>} centered />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-border bg-card px-5 last:border-b"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const footerLinks = [
    { label: "Início", href: "#top" },
    { label: "Problema", href: "#problema" },
    { label: "O que é?", href: "#o-que-e" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Comparação", href: "#comparacao" },
    { label: "Para quem", href: "#para-quem" },
    { label: "Orçamento", href: "#orcamento" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="border-t border-border/40 bg-card/30 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center overflow-visible">
            <img
              src={vocLogo}
              alt="VOC Comunicações"
              width={260}
              height={86}
              className="h-16 w-auto max-w-[250px]"
            />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Landing pages estratégicas para campanhas de tráfego pago, captação de leads e aumento
            de conversão.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram da VOC Comunicações"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn da VOC Comunicações"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da VOC Comunicações"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Navegação</h3>
          <nav className="mt-5 grid gap-3 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-primary">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Contato</h3>
          <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
            <a
              href={CONTACT_PHONE_URL}
              className="flex items-center gap-3 transition hover:text-primary"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {CONTACT_PHONE}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 transition hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-primary"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-border/40 px-6 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} VOC Comunicações. Estratégia, design e conversão.</p>
        <a href="#top" className="transition hover:text-primary">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}

/* ---------- HELPERS ---------- */
function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
