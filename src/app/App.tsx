import { useState, useEffect } from "react";
import { Linkedin, Github, Instagram, MessageCircle, ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = ["INÍCIO", "SOBRE", "HABILIDADES", "PROJETOS", "CONTATO"];
const NAV_HREFS = ["#inicio", "#sobre", "#habilidades", "#projetos", "#contato"];

const SKILLS = [
  { num: "01", name: "HTML5", desc: "Estruturação semântica e organizada de páginas e aplicações web." },
  { num: "02", name: "CSS3", desc: "Interfaces modernas, responsivas, animações e layouts personalizados." },
  { num: "03", name: "JavaScript", desc: "Interatividade e comportamento para experiências web dinâmicas." },
  { num: "04", name: "Responsividade", desc: "Projetos adaptados para desktop, tablets e dispositivos móveis." },
  { num: "05", name: "UI / UX", desc: "Interfaces que unem estética, clareza e usabilidade." },
  { num: "06", name: "Design Gráfico", desc: "Identidade visual, composição e criação gráfica." },
  { num: "07", name: "Git & GitHub", desc: "Versionamento e organização dos projetos desenvolvidos." },
  { num: "08", name: "Agentes de IA", desc: "Configuração de soluções de atendimento com inteligência artificial." },
];

const PROJECTS = [
  {
    num: "01",
    category: "LANDING PAGE • ESTÉTICA",
    title: "Clínica de Estética",
    desc: "Landing page moderna para apresentação de procedimentos e geração de contatos.",
    img: "photo-1570172619644-dfd03ed5d881",
    dark: false,
  },
  {
    num: "02",
    category: "LANDING PAGE • SAÚDE",
    title: "Pérola Baby",
    desc: "Projeto para apresentar serviços de furo humanizado e facilitar o contato.",
    img: "photo-1555252333-9f8e92e65df9",
    dark: false,
  },
  {
    num: "03",
    category: "WEBSITE • GASTRONOMIA",
    title: "Restaurante & Pizzaria",
    desc: "Website para apresentar cardápio, serviços e facilitar pedidos e contato.",
    img: "photo-1517248135467-4c7edcad34c4",
    dark: false,
  },
  {
    num: "04",
    category: "WEBSITE • BARBEARIA",
    title: "Barbearia Clássica",
    desc: "Site moderno para barbearia com agendamento online e portfólio de cortes.",
    img: "photo-1503951914875-452162b0f3f1",
    dark: true,
  },
  {
    num: "05",
    category: "WEBSITE • INDÚSTRIA",
    title: "Mecânica Industrial",
    desc: "Portfólio institucional para empresa de manutenção industrial e mecânica.",
    img: "photo-1581092918056-0c4c3acd3789",
    dark: true,
  },
  {
    num: "06",
    category: "WEBSITE • ARQUITETURA",
    title: "Studio Arquitetura",
    desc: "Portfolio minimalista para escritório de arquitetura e design de interiores.",
    img: "photo-1486325212027-8081e485255e",
    dark: true,
  },
];

const JOURNEY = [
  {
    phase: "INÍCIO",
    title: "Design Gráfico",
    desc: "Primeiro contato com criação visual, Photoshop, CorelDRAW e fundamentos de design.",
  },
  {
    phase: "EVOLUÇÃO",
    title: "Desenvolvimento Front-End",
    desc: "Início dos estudos em HTML, CSS e JavaScript e criação de interfaces modernas.",
  },
  {
    phase: "PROJETOS",
    title: "Desenvolvimento Web",
    desc: "Criação de landing pages, websites e soluções para diferentes segmentos.",
  },
  {
    phase: "HOJE",
    title: "Evolução contínua",
    desc: "Aprimorando conhecimentos em Front-End e construindo novos projetos para evoluir.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="bg-background text-foreground min-h-screen"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 h-14 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("#inicio")} className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-primary rounded-sm flex-shrink-0" />
            <span className="text-foreground font-medium text-base tracking-wide">Developer</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((label, i) => (
              <button
                key={label}
                onClick={() => scrollTo(NAV_HREFS[i])}
                className="text-[11px] font-medium tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => scrollTo("#contato")}
            className="hidden md:flex items-center gap-1.5 px-5 py-2 bg-primary text-primary-foreground rounded-full text-[11px] font-semibold tracking-[0.08em] hover:opacity-90 transition-opacity"
          >
            FALE COMIGO <ArrowDown size={12} />
          </button>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-8 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((label, i) => (
              <button
                key={label}
                onClick={() => scrollTo(NAV_HREFS[i])}
                className="text-xs tracking-widest text-left text-muted-foreground hover:text-foreground"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contato")}
              className="mt-1 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold tracking-wider"
            >
              FALE COMIGO
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
        {/* Subtle dark vignette glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(212,165,32,0.04)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-8 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left */}
          <div>
            <p
              className="text-xs tracking-[0.2em] text-primary mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              FRONT-END DEVELOPER • PORTFÓLIO
            </p>
            <h1
              className="text-6xl md:text-7xl leading-[1.05] mb-6 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              José{" "}
              <em className="text-primary not-italic" style={{ fontStyle: "italic" }}>
                Aldemir.
              </em>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 leading-snug mb-4 font-light">
              Desenvolvendo experiências digitais modernas,{" "}
              funcionais e responsivas.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm">
              Desenvolvedor{" "}
              <span className="text-primary">Front-End</span> em constante evolução, focado na criação de
              interfaces modernas, responsivas e com boa experiência para o usuário.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => scrollTo("#projetos")}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold tracking-widest hover:opacity-90 transition-opacity"
              >
                VER MEUS PROJETOS <ArrowDown size={12} />
              </button>
              <button
                onClick={() => scrollTo("#contato")}
                className="flex items-center gap-2 px-6 py-2.5 border border-border rounded-full text-xs font-semibold tracking-widest text-foreground hover:border-primary/40 transition-colors"
              >
                ENTRAR EM CONTATO
              </button>
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: <Linkedin size={16} />, href: "https://linkedin.com" },
                { icon: <Github size={16} />, href: "https://github.com" },
                { icon: <Instagram size={16} />, href: "https://instagram.com" },
              ].map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — photo card */}
          <div className="hidden md:flex justify-end">
            <div className="relative w-[420px] h-[480px] rounded-2xl overflow-hidden bg-muted border border-border/30">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=840&h=960&fit=crop&auto=format"
                alt="Front-End Developer"
                className="w-full h-full object-cover grayscale"
              />
              {/* Badge */}
              <div className="absolute bottom-5 left-5 bg-card/90 backdrop-blur-sm border border-border rounded-xl px-4 py-2.5 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="text-xs font-semibold text-foreground leading-none mb-0.5">
                    Front-End Developer
                  </p>
                  <p className="text-[10px] tracking-widest text-muted-foreground">
                    HTML • CSS • JAVASCRIPT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-primary text-sm font-semibold">02</span>
              <span className="text-[11px] tracking-[0.2em] text-muted-foreground">SOBRE MIM</span>
            </div>
            <h2
              className="text-4xl md:text-5xl leading-tight mb-8 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Design, código e{" "}
              <em className="text-primary" style={{ fontStyle: "italic" }}>
                experiências digitais.
              </em>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Sou <span className="text-primary font-medium">Seu Nome</span>, Desenvolvedor Front-End{" "}
              <span className="text-primary">focado em criar interfaces modernas, responsivas e funcionais.</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              <span className="text-primary">
                Minha trajetória na tecnologia começou através do Design Gráfico, onde desenvolvi uma base
                forte em composição visual, criatividade e comunicação.
              </span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              <span className="text-primary">
                Hoje desenvolvo interfaces utilizando principalmente HTML, CSS e JavaScript,
              </span>{" "}
              sempre buscando evoluir através de projetos práticos, com atenção à responsividade,
              organização do código e detalhes visuais.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Front-End", sub: "DESENVOLVIMENTO" },
                { label: "UI / UX", sub: "INTERFACES" },
                { label: "Git & GitHub", sub: "VERSIONAMENTO" },
              ].map(({ label, sub }) => (
                <div
                  key={label}
                  className="border border-border rounded-lg px-4 py-2.5 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-[10px] tracking-widest text-muted-foreground mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:block">
            <div className="w-full aspect-[4/5] rounded-2xl bg-muted border border-border/30 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=1000&fit=crop&auto=format"
                alt="Design e código"
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HABILIDADES ── */}
      <section id="habilidades" className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-sm font-semibold">03</span>
            <span className="text-[11px] tracking-[0.2em] text-muted-foreground">TECNOLOGIAS & HABILIDADES</span>
          </div>
          <h2
            className="text-4xl md:text-5xl leading-tight mb-4 text-foreground max-w-xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ferramentas que fazem parte{" "}
            <em className="text-primary" style={{ fontStyle: "italic" }}>
              do meu trabalho.
            </em>
          </h2>
          <p className="text-sm text-muted-foreground mb-14 max-w-md">
            Tecnologias e conhecimentos utilizados na criação de interfaces, projetos web e soluções digitais.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.num}
                className="border border-border rounded-xl p-5 hover:border-primary/25 transition-colors bg-card/40"
              >
                <p
                  className="text-xs text-primary mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {skill.num}
                </p>
                <h3
                  className="text-base font-semibold text-foreground mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {skill.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETOS ── */}
      <section id="projetos" className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-sm font-semibold">04</span>
            <span className="text-[11px] tracking-[0.2em] text-muted-foreground">PROJETOS SELECIONADOS</span>
          </div>
          <h2
            className="text-4xl md:text-5xl leading-tight mb-4 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Alguns trabalhos que{" "}
            <em className="text-primary" style={{ fontStyle: "italic" }}>
              desenvolvi.
            </em>
          </h2>
          <p className="text-sm text-muted-foreground mb-14 max-w-md">
            Projetos desenvolvidos para praticar, criar soluções reais e fortalecer minha experiência em
            desenvolvimento.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {PROJECTS.map((proj) => (
              <div
                key={proj.num}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/25 transition-all bg-card"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-muted">
                  <img
                    src={`https://images.unsplash.com/${proj.img}?w=600&h=416&fit=crop&auto=format`}
                    alt={proj.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      proj.dark ? "brightness-75" : "grayscale-[20%]"
                    }`}
                  />
                  {/* Arrow badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} className="text-foreground" />
                  </div>
                  {/* Number for dark cards */}
                  {proj.dark && (
                    <span className="absolute top-3 left-3 text-xs text-foreground/60 font-medium">
                      {proj.num}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-[10px] tracking-widest text-primary mb-1.5 font-medium">
                    {proj.category}
                  </p>
                  <h3
                    className="text-lg font-semibold text-foreground mb-2 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JORNADA ── */}
      <section id="jornada" className="py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary text-sm font-semibold">05</span>
            <span className="text-[11px] tracking-[0.2em] text-muted-foreground">MINHA JORNADA</span>
          </div>
          <h2
            className="text-4xl md:text-5xl leading-tight mb-16 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Construindo experiência{" "}
            <em className="text-primary" style={{ fontStyle: "italic" }}>
              projeto após projeto.
            </em>
          </h2>

          {/* Timeline horizontal */}
          <div className="grid md:grid-cols-4 gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[10px] left-[12.5%] right-[12.5%] h-px bg-border" />

            {JOURNEY.map((step, i) => (
              <div key={i} className="relative px-4 mb-8 md:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-5 h-5 rounded-full border border-primary bg-background flex-shrink-0 z-10 relative" />
                  <span className="text-[10px] tracking-[0.18em] text-muted-foreground">{step.phase}</span>
                </div>
                <h3
                  className="text-base font-semibold text-foreground mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-32 border-t border-border relative overflow-hidden">
        {/* Radial gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(212,165,32,0.06)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center relative">
            {/* Circular badge */}
            <div className="hidden md:flex absolute right-0 top-8 w-24 h-24 rounded-full border border-border items-center justify-center">
              <span className="text-[9px] tracking-[0.18em] text-muted-foreground text-center leading-loose">
                GET IN<br />TOUCH
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-primary text-sm font-semibold">06</span>
              <span className="text-[11px] tracking-[0.2em] text-muted-foreground">VAMOS CONVERSAR?</span>
            </div>

            <h2
              className="text-5xl md:text-7xl leading-tight mb-6 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tem um projeto{" "}
              <br />
              <em className="text-primary" style={{ fontStyle: "italic" }}>
                em mente?
              </em>
            </h2>

            <p className="text-sm text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
              Estou aberto a oportunidades como Desenvolvedor Front-End, projetos e conexões profissionais.{" "}
              Fale comigo pelo WhatsApp ou Instagram.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href="https://wa.me/5585987154528"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-widest hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={14} /> WHATSAPP
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-7 py-3 border border-border rounded-full text-xs font-semibold tracking-widest text-foreground hover:border-primary/40 transition-colors"
              >
                @SEU.INSTAGRAM
              </a>
            </div>

            <div className="flex items-center justify-center gap-5">
              {[
                { icon: <Linkedin size={16} />, href: "https://linkedin.com" },
                { icon: <Github size={16} />, href: "https://github.com" },
                { icon: <Instagram size={16} />, href: "https://instagram.com" },
              ].map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs text-muted-foreground tracking-wider">© 2026 — SEU NOME</p>
        </div>
      </footer>
    </div>
  );
}
