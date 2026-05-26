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
  BarChart3,
  Sparkles,
  Smartphone,
  MousePointerClick,
  Search,
  PenTool,
  Palette,
  Rocket,
  CheckCircle2,
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
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroMockup from "@/assets/hero-mockup.jpg";

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
  "https://wa.me/5500000000000?text=Quero%20uma%20landing%20page%20que%20venda%20mais";

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
      <Process />
      <Authority />
      <ForWho />
      <Objection />
      <FinalCTA />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Zap className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-bold tracking-tight">
            VOC<span className="text-primary">.</span>
            <span className="font-normal text-muted-foreground">Comunicações</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#beneficios" className="transition hover:text-foreground">
            Benefícios
          </a>
          <a href="#processo" className="transition hover:text-foreground">
            Processo
          </a>
          <a href="#faq" className="transition hover:text-foreground">
            FAQ
          </a>
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
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Agência especialista em conversão
          </div>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Transforme cliques em clientes com uma{" "}
            <span className="relative inline-block text-primary">
              Landing Page
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary/40" />
            </span>{" "}
            feita para vender
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Na <strong className="text-foreground">VOC Comunicações</strong>, criamos landing pages
            estratégicas para campanhas de tráfego pago, captação de leads e aumento de conversão —
            ajudando sua empresa a aproveitar melhor cada real investido em anúncios.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar com a VOC
              </a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {["Foco em conversão", "Pronta para tráfego pago", "Entrega rápida"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute inset-0 -z-10 rounded-3xl opacity-50 blur-3xl"
            style={{ background: "var(--gradient-accent)" }}
          />
          <img
            src={heroMockup}
            alt="Mockup de landing page em desktop e celular"
            width={1536}
            height={1024}
            className="rounded-2xl border border-border/60 shadow-2xl"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
        </div>
      </div>
    </section>
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
    <section className="border-b border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="O problema"
          title={
            <>
              Seu anúncio pode estar funcionando.{" "}
              <span className="text-primary">O problema pode estar na página.</span>
            </>
          }
          description="Muitas empresas investem em tráfego pago, recebem cliques, mas não conseguem transformar visitantes em contatos, orçamentos ou vendas. Isso acontece quando a página não tem mensagem clara, não gera confiança ou não conduz o usuário até a ação."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="group relative rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:bg-card/80"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <X className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
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
    <section className="border-b border-border/40 bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeader
          eyebrow="O que é"
          title={<>O que é uma Landing Page de alta conversão?</>}
          description="Uma landing page é uma página criada com um único objetivo: fazer o visitante tomar uma ação. Pode ser chamar no WhatsApp, preencher um formulário, solicitar orçamento, agendar uma reunião ou comprar um produto. Diferente de um site comum, ela é pensada para remover distrações e guiar o cliente até a decisão."
          centered
        />
        <div className="mt-12 inline-block rounded-2xl border border-primary/30 bg-primary/5 px-8 py-6">
          <p className="text-xl font-bold tracking-tight md:text-2xl">
            Menos distração. <span className="text-primary">Mais clareza.</span> Mais conversão.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */
function Benefits() {
  const items = [
    { icon: TrendingUp, t: "Aumenta a conversão dos anúncios" },
    { icon: Target, t: "Reduz desperdício no tráfego pago" },
    { icon: Sparkles, t: "Explica melhor sua oferta" },
    { icon: Shield, t: "Gera mais confiança no visitante" },
    { icon: MessageCircle, t: "Facilita o contato pelo WhatsApp" },
    { icon: BarChart3, t: "Ajuda a mensurar resultados" },
    { icon: Zap, t: "Valoriza sua marca" },
    { icon: Rocket, t: "Cria uma jornada objetiva até a compra" },
  ];
  return (
    <section id="beneficios" className="border-b border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Benefícios"
          title={<>Como uma boa Landing Page melhora suas vendas</>}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
    <section className="border-b border-border/40 bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Comparação"
          title={
            <>
              Página comum <span className="text-muted-foreground">×</span>{" "}
              <span className="text-primary">Landing Page estratégica</span>
            </>
          }
          centered
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
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
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { icon: Search, t: "Diagnóstico", d: "Entendemos seu negócio e o objetivo da campanha." },
    { icon: Target, t: "Estratégia", d: "Definimos a oferta e a estrutura da página." },
    { icon: PenTool, t: "Copywriting", d: "Criamos textos persuasivos que conduzem à ação." },
    { icon: Palette, t: "Design responsivo", d: "Layout impecável em celular e desktop." },
    { icon: Smartphone, t: "Implementação", d: "Botões, formulário e WhatsApp integrados." },
    { icon: Rocket, t: "Entrega", d: "Página pronta para receber tráfego e converter." },
  ];
  return (
    <section id="processo" className="border-b border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Processo"
          title={<>Como funciona o processo com a VOC Comunicações</>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, t, d }, i) => (
            <div
              key={t}
              className="relative rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <span className="text-4xl font-black tracking-tighter text-muted-foreground/20">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold">{t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AUTHORITY ---------- */
function Authority() {
  return (
    <section className="border-b border-border/40 bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeader
          eyebrow="Autoridade"
          title={
            <>
              Não criamos apenas páginas.{" "}
              <span className="text-primary">Criamos estruturas para conversão.</span>
            </>
          }
          description="A VOC Comunicações une estratégia de marketing, design e comunicação persuasiva para desenvolver landing pages que ajudam empresas a vender melhor. Cada seção é pensada para responder dúvidas, quebrar objeções e aproximar o visitante da decisão."
          centered
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { n: "+R$ 1Mi", l: "em mídia paga otimizada" },
            { n: "3×", l: "média de aumento em conversão" },
            { n: "7 dias", l: "para sua página no ar" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-background p-6">
              <div className="text-3xl font-bold tracking-tight text-primary">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
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
    <section className="border-b border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const nome = form.get("nome");
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success(`Obrigado, ${nome}! Entraremos em contato em breve.`);
    }, 700);
  }

  return (
    <section id="orcamento" className="relative overflow-hidden border-b border-border/40 py-20 md:py-28">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-2">
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
              <li key={t} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t}
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
              <Input id="whatsapp" name="whatsapp" required placeholder="(00) 00000-0000" />
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
              {loading ? "Enviando..." : "Solicitar orçamento agora"}
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

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "O que é uma landing page?",
      a: "É uma página única e estratégica, criada com um objetivo claro: converter o visitante em lead, contato ou cliente — sem as distrações de um site tradicional.",
    },
    {
      q: "Landing page serve para qualquer tipo de negócio?",
      a: "Sim. Clínicas, lojas, infoprodutores, prestadores de serviço, escolas, consultorias e negócios locais — qualquer empresa que queira vender mais e captar leads se beneficia.",
    },
    {
      q: "Preciso ter site para ter uma landing page?",
      a: "Não. A landing page é independente e pode funcionar sozinha, especialmente para campanhas de tráfego pago.",
    },
    {
      q: "A landing page funciona com tráfego pago?",
      a: "Sim — é feita justamente para isso. Cada elemento é pensado para que o investimento em anúncios gere o máximo de conversão.",
    },
    {
      q: "Vocês fazem o texto e o design?",
      a: "Sim. Cuidamos de toda a estratégia: copywriting persuasivo, design moderno e responsivo, e implementação dos botões e formulários.",
    },
    {
      q: "A página funciona no celular?",
      a: "Sim. Todas as nossas páginas são 100% responsivas e otimizadas para a melhor experiência em qualquer dispositivo.",
    },
    {
      q: "Quanto tempo leva para ficar pronta?",
      a: "Em média, entregamos entre 5 e 10 dias úteis, dependendo da complexidade do projeto e do retorno das informações.",
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
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <Zap className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-foreground">VOC Comunicações</span>
        </div>
        <p>© {new Date().getFullYear()} VOC Comunicações. Estratégia, design e conversão.</p>
      </div>
    </footer>
  );
}

/* ---------- WHATSAPP FAB ---------- */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
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
