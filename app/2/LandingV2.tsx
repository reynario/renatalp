"use client";

import { useEffect, useState } from "react";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

const TELEFONE_EXIBICAO = "(75) 98305-5400";

const filtros = [
  { id: "todos", label: "Todos" },
  { id: "salas", label: "Salas" },
  { id: "quartos", label: "Quartos" },
  { id: "cozbanho", label: "Cozinha & Banho" },
] as const;

type FiltroId = (typeof filtros)[number]["id"];

const projetos: { cat: FiltroId; nome: string; descricao: string; img: string }[] = [
  { cat: "salas", nome: "Sala de Estar", descricao: "Tons neutros e madeira natural", img: "/images/portfolio/sala.webp" },
  { cat: "salas", nome: "Sala de Jantar", descricao: "Convívio com elegância", img: "/images/portfolio/sala-jantar.webp" },
  { cat: "cozbanho", nome: "Cozinha", descricao: "Funcionalidade com sofisticação", img: "/images/portfolio/cozinha-1.webp" },
  { cat: "quartos", nome: "Quarto do Casal", descricao: "Minimalismo e acolhimento", img: "/images/portfolio/quarto-casal.webp" },
  { cat: "quartos", nome: "Quarto Infantil", descricao: "Imaginação nos detalhes", img: "/images/portfolio/quarto-menina.webp" },
  { cat: "cozbanho", nome: "Banheiro", descricao: "Luxo nos detalhes", img: "/images/portfolio/banheiro.webp" },
];

const depoimentos = [
  {
    texto:
      "A Renata entendeu exatamente o que eu queria, mesmo quando eu mesma não sabia explicar. O resultado ficou muito acima do que eu imaginava.",
    nome: "Camila R.",
    cidade: "São Paulo, SP",
    iniciais: "CR",
  },
  {
    texto:
      "Já tentei fazer a decoração sozinha por anos e nunca ficava certo. Com a Renata, em três meses o apartamento ficou com cara de revista.",
    nome: "Fernanda M.",
    cidade: "Belo Horizonte, MG",
    iniciais: "FM",
  },
  {
    texto:
      "O que mais me surpreendeu foi a atenção aos detalhes que eu nunca teria pensado. Cada escolha tem uma razão, e isso se reflete no resultado.",
    nome: "Beatriz L.",
    cidade: "Curitiba, PR",
    iniciais: "BL",
  },
];

export default function LandingV2({ fontVars }: { fontVars: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [filtro, setFiltro] = useState<FiltroId>("todos");

  useEffect(() => {
    const aoRolar = () => setScrolled(window.scrollY > 10);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <div className={`lp2 ${fontVars}`}>
      <style>{css}</style>

      <header id="topo" className={scrolled ? "scrolled" : undefined}>
        <div className="wrap nav">
          <a href="#topo" className="logo">
            Renata Fidelis<span>.</span>
          </a>
          <ul className={`nav-links${menuAberto ? " open" : ""}`} onClick={() => setMenuAberto(false)}>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#processo">Processo</a></li>
            <li><a href="#contato" className="nav-cta">Solicitar projeto</a></li>
          </ul>
          <button
            className="burger"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* 1 · HERO */}
      <div className="hero">
        <div className="hero-text">
          <span className="eyebrow">Design de Interiores · Residencial &amp; Comercial</span>
          <h1>
            Ambientes que acolhem, <em>valorizam</em> e refletem quem vive ali.
          </h1>
          <p>
            Projetos de alto padrão com estética refinada, materiais quentes e marcenaria autoral —
            sofisticação na medida certa, sem excessos.
          </p>
          <div className="hero-actions">
            <a href="#contato" className="btn btn-primary">Quero meu projeto</a>
            <a href="#projetos" className="btn btn-ghost">Ver projetos</a>
          </div>
        </div>
        <div
          className="hero-visual"
          role="img"
          aria-label="Projeto em destaque — living integrado assinado por Renata Fidelis"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(59,50,43,.35), rgba(59,50,43,0) 45%), url('/images/hero.webp')",
          }}
        >
          <span className="hero-scroll">Role para explorar</span>
          <div className="hero-tag">
            <span className="num">Prancha 01 — Living integrado</span>
          </div>
        </div>
      </div>

      {/* 2 · ASSINATURA / BIO */}
      <section className="assinatura" id="sobre">
        <div className="wrap assinatura-grid">
          <div
            className="retrato"
            role="img"
            aria-label="Retrato de Renata Fidelis"
            style={{ backgroundImage: "url('/images/renata.webp')" }}
          />
          <div>
            <span className="eyebrow">A assinatura</span>
            <p className="quote">
              &ldquo;Eu projeto ambientes para serem sentidos — não apenas admirados.&rdquo;
            </p>
            <p>
              Renata Fidelis desenvolve projetos de interiores com uma linguagem contemporânea,
              sensorial e acolhedora. Cada ambiente nasce do equilíbrio entre proporção, materiais
              nobres e luz quente — resultando em espaços com presença, conforto e valor percebido.
            </p>
            <p>
              Da leitura do espaço à marcenaria autoral, cada decisão é pensada para valorizar o
              imóvel e a forma como você vive nele.
            </p>
            <ul className="materiais">
              <li>Madeira natural</li>
              <li>Tons quentes</li>
              <li>Luz 3000K</li>
              <li>Texturas suaves</li>
              <li>Marcenaria autoral</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3 · PORTFÓLIO */}
      <section className="portfolio" id="projetos">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Portfólio</span>
            <h2>
              Projetos com presença, <em>sem exagero</em>.
            </h2>
            <p>Uma seleção de ambientes desenvolvidos com atenção a cada detalhe.</p>
          </div>
          <div className="filtros">
            {filtros.map((f) => (
              <button
                key={f.id}
                className={`filtro${filtro === f.id ? " ativo" : ""}`}
                onClick={() => setFiltro(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid-proj">
            {projetos.map((p) => (
              <article
                key={p.nome}
                className="card"
                style={{ display: filtro === "todos" || filtro === p.cat ? undefined : "none" }}
              >
                <div
                  className="ph"
                  role="img"
                  aria-label={`${p.nome} — ${p.descricao}`}
                  style={{ backgroundImage: `url('${p.img}')` }}
                />
                <div className="info">
                  <small>{p.descricao}</small>
                  <h3>{p.nome}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="ver-todos">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Ver projeto completo no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* 4 · SERVIÇOS */}
      <section className="servicos" id="servicos">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Serviços</span>
            <h2>
              Do primeiro traço à <em>entrega final</em>.
            </h2>
          </div>
          <div className="grid-serv">
            <div className="serv">
              <div className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 9.5V21h14V9.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Projeto Residencial</h3>
              <p>
                Apartamentos e casas completas ou por ambiente — layout, materiais, iluminação e
                marcenaria pensados para o seu dia a dia.
              </p>
            </div>
            <div className="serv">
              <div className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <path d="M4 7h16M4 7l1.5-4h13L20 7M4 7v13h16V7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 20v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Projeto Comercial</h3>
              <p>
                Espaços que traduzem a identidade da sua marca e criam experiências memoráveis para
                clientes e equipe.
              </p>
            </div>
            <div className="serv">
              <div className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <path d="M3 21l3.5-1 13-13-2.5-2.5-13 13L3 21z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.5 6.5l2.5 2.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Consultoria &amp; Marcenaria Autoral</h3>
              <p>
                Direcionamento pontual de composição, acabamentos e mobiliário sob medida para
                valorizar o que você já tem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · PROCESSO */}
      <section className="processo" id="processo">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Como funciona</span>
            <h2>
              Um processo claro, do briefing à <em>entrega</em>.
            </h2>
          </div>
          <div className="passos">
            <div className="passo">
              <span className="n">Etapa um</span>
              <h3>Briefing</h3>
              <p>Entendimento do espaço, das necessidades e do seu estilo de vida.</p>
            </div>
            <div className="passo">
              <span className="n">Etapa dois</span>
              <h3>Conceito</h3>
              <p>Direção estética, paleta de materiais e primeiras propostas de layout.</p>
            </div>
            <div className="passo">
              <span className="n">Etapa três</span>
              <h3>Projeto executivo</h3>
              <p>Detalhamento técnico completo: marcenaria, iluminação e especificações.</p>
            </div>
            <div className="passo">
              <span className="n">Etapa quatro</span>
              <h3>Acompanhamento</h3>
              <p>Direcionamento na execução para que o resultado saia exatamente como projetado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · PROVA SOCIAL */}
      <section className="prova">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Depoimentos</span>
            <h2>
              Quem viveu a <em>transformação</em>.
            </h2>
          </div>
          <div className="depo-grid">
            {depoimentos.map((d) => (
              <div className="depo" key={d.nome}>
                <p className="txt">&ldquo;{d.texto}&rdquo;</p>
                <div className="quem">
                  <div className="avatar" aria-hidden="true">{d.iniciais}</div>
                  <div>
                    <b>{d.nome}</b>
                    <small>{d.cidade}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="numeros">
            <div className="num-item">
              <div className="valor">+1.000</div>
              <div className="rot">Projetos entregues</div>
            </div>
            <div className="num-item">
              <div className="valor">+20</div>
              <div className="rot">Anos de experiência</div>
            </div>
            <div className="num-item">
              <div className="valor">100%</div>
              <div className="rot">Projetos personalizados</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · CONTATO */}
      <section className="contato" id="contato">
        <div className="wrap contato-grid">
          <div className="contato-info">
            <span className="eyebrow">Contato</span>
            <h2>
              Seu ambiente não precisa continuar <em>do jeito que está</em>.
            </h2>
            <p>
              Conte um pouco sobre o seu espaço e receba um retorno em até 24h úteis. Se preferir,
              fale agora mesmo pelo WhatsApp.
            </p>
            <div className="dados">
              <div className="dado">
                <small>WhatsApp</small>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{TELEFONE_EXIBICAO}</a>
              </div>
              <div className="dado">
                <small>E-mail</small>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="dado">
                <small>Instagram</small>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE}</a>
              </div>
            </div>
          </div>
          <div>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Versão de teste — formulário ainda não conectado.");
              }}
            >
              <div>
                <label htmlFor="lp2-nome">Nome</label>
                <input id="lp2-nome" type="text" placeholder="Seu nome" required />
              </div>
              <div>
                <label htmlFor="lp2-whats">WhatsApp</label>
                <input id="lp2-whats" type="tel" placeholder="(00) 00000-0000" required />
              </div>
              <div>
                <label htmlFor="lp2-tipo">Tipo de projeto</label>
                <select id="lp2-tipo" required defaultValue="">
                  <option value="" disabled>Selecione…</option>
                  <option>Residencial</option>
                  <option>Comercial</option>
                  <option>Consultoria</option>
                </select>
              </div>
              <div>
                <label htmlFor="lp2-msg">Conte sobre seu espaço</label>
                <textarea id="lp2-msg" placeholder="Ex.: apartamento de 90m², quero integrar sala e cozinha…" />
              </div>
              <label className="lgpd">
                <input type="checkbox" required /> Autorizo o contato e concordo com a{" "}
                <a href="#" style={{ textDecoration: "underline" }}>Política de Privacidade</a>.
              </label>
              <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
                Solicitar orçamento
              </button>
              <div className="ou">ou</div>
              <a className="btn btn-whats" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* 8 · RODAPÉ */}
      <footer>
        <div className="wrap foot">
          <div>
            <div className="logo">
              Renata Fidelis<span style={{ color: "#D2977A" }}>.</span>
            </div>
            <small>Design de interiores · Residencial &amp; Comercial</small>
          </div>
          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
          </nav>
          <small>© {new Date().getFullYear()} Renata Fidelis Design de Interiores</small>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a className="zap" aria-label="Falar no WhatsApp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.9 1 4 1.6 6.2 1.6h.5c6.6 0 12-5.3 12-11.9C30 8.3 24.6 3 16 3zm7 16.9c-.3.8-1.7 1.6-2.4 1.7-.6.1-1.4.1-2.2-.1-.5-.2-1.2-.4-2-.8-3.6-1.6-5.9-5.2-6.1-5.4-.2-.2-1.5-2-1.5-3.7 0-1.8 1-2.7 1.3-3 .3-.4.7-.5 1-.5h.7c.2 0 .5-.1.8.6.3.8 1 2.7 1.1 2.9.1.2.2.4 0 .7-.1.3-.2.4-.4.7l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.4 2.8 1.8 3.2 2 .4.2.6.1.8-.1.2-.3 1-1.1 1.2-1.5.3-.4.5-.3.9-.2.3.1 2.2 1 2.6 1.2.4.2.6.3.7.5.1.1.1.9-.1 1.8z" />
        </svg>
      </a>
    </div>
  );
}

/*
  CSS do modelo, escopado à rota /2. Fica fora de @layer de propósito:
  assim vence os estilos base do globals.css (que vivem em @layer base).
  Vars de fonte vêm do next/font aplicado no wrapper .lp2.
*/
const css = `
.lp2{
  --linho:#F4EEE4;
  --areia:#E4D8C7;
  --cacau:#3B322B;
  --taupe:#8C7B6B;
  --terracota:#B5623C;
  --terracota-hover:#9E5231;
  --bronze:#A67C52;
  --salvia:#8A9078;
  --branco:#FDFBF7;
  --display:var(--font-fraunces),Georgia,serif;
  --body:var(--font-inter),sans-serif;
  font-family:var(--body);
  background:var(--linho);
  color:var(--cacau);
  line-height:1.7;
  font-size:16px;
  min-height:100vh;
  -webkit-font-smoothing:antialiased;
}
.lp2 img{max-width:100%;display:block}
.lp2 a{color:inherit;text-decoration:none}
.lp2 p,.lp2 span,.lp2 a,.lp2 li,.lp2 button,.lp2 input,.lp2 select,.lp2 textarea{font-family:var(--body)}
.lp2 h1,.lp2 h2,.lp2 h3{font-family:var(--display)}
.lp2 .wrap{max-width:1180px;margin:0 auto;padding:0 6vw}

/* Eyebrow técnico (assinatura visual: rótulo de prancha) */
.lp2 .eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:var(--bronze);font-weight:500;margin-bottom:22px}
.lp2 .eyebrow::before{content:'';width:38px;height:1px;background:var(--bronze)}

/* Header */
.lp2 header{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(244,238,228,.92);backdrop-filter:blur(10px);border-bottom:1px solid rgba(59,50,43,.08);transition:box-shadow .3s}
.lp2 header.scrolled{box-shadow:0 2px 24px rgba(59,50,43,.07)}
.lp2 .nav{display:flex;align-items:center;justify-content:space-between;height:78px}
.lp2 .logo{font-family:var(--display);font-size:21px;font-weight:500;letter-spacing:.02em}
.lp2 .logo span{color:var(--terracota)}
.lp2 .nav-links{display:flex;gap:38px;align-items:center;list-style:none;margin:0;padding:0}
.lp2 .nav-links a{font-size:13.5px;font-weight:500;letter-spacing:.04em;color:var(--taupe);transition:color .25s}
.lp2 .nav-links a:not(.nav-cta){display:inline-block;padding:10px 0}
.lp2 .nav-links a:hover{color:var(--cacau)}
.lp2 .nav-cta{background:var(--terracota);color:var(--branco)!important;padding:11px 24px;border-radius:2px;font-weight:500;transition:background .25s}
.lp2 .nav-cta:hover{background:var(--terracota-hover)}
/* padding generoso = área de toque >=44px sem mudar o desenho do ícone */
.lp2 .burger{display:none;background:none;border:none;cursor:pointer;flex-direction:column;gap:5px;padding:14px 12px;margin-right:-12px}
.lp2 .burger span{width:24px;height:1.5px;background:var(--cacau)}

/* Hero */
.lp2 .hero{min-height:100vh;display:grid;grid-template-columns:1.05fr .95fr;align-items:stretch;padding-top:78px}
.lp2 .hero-text{display:flex;flex-direction:column;justify-content:center;padding:80px 6vw 80px calc((100vw - 1180px)/2 + 6vw)}
@media(max-width:1180px){.lp2 .hero-text{padding-left:6vw}}
.lp2 .hero h1{font-weight:400;font-size:clamp(38px,4.6vw,62px);line-height:1.12;letter-spacing:-.01em;margin-bottom:26px}
.lp2 .hero h1 em{font-style:italic;color:var(--terracota)}
.lp2 .hero-text>p{font-size:17px;color:var(--taupe);max-width:480px;margin-bottom:38px;font-weight:300}
.lp2 .hero-actions{display:flex;gap:16px;flex-wrap:wrap}
.lp2 .btn{display:inline-flex;align-items:center;gap:10px;padding:16px 32px;border-radius:2px;font-size:14.5px;font-weight:500;letter-spacing:.03em;transition:all .25s;border:1px solid transparent;cursor:pointer;font-family:var(--body)}
.lp2 .btn-primary{background:var(--terracota);color:var(--branco)}
.lp2 .btn-primary:hover{background:var(--terracota-hover);transform:translateY(-1px)}
.lp2 .btn-ghost{border-color:var(--cacau);color:var(--cacau);background:transparent}
.lp2 .btn-ghost:hover{background:var(--cacau);color:var(--linho)}
.lp2 .hero-visual{position:relative;background-size:cover;background-position:center;background-color:#A98D6F}
.lp2 .hero-tag{position:absolute;left:34px;bottom:34px;color:var(--branco);text-shadow:0 1px 8px rgba(43,34,27,.5)}
.lp2 .hero-tag .num{font-family:var(--display);font-size:15px;font-style:italic;opacity:.9}
.lp2 .hero-scroll{position:absolute;left:34px;top:110px;writing-mode:vertical-rl;font-size:10px;letter-spacing:.35em;text-transform:uppercase;color:rgba(253,251,247,.8);text-shadow:0 1px 6px rgba(43,34,27,.5)}

/* Seções */
.lp2 section{padding:110px 0}
.lp2 .sec-head{max-width:640px;margin-bottom:64px}
.lp2 h2{font-weight:400;font-size:clamp(30px,3.4vw,44px);line-height:1.18;letter-spacing:-.01em}
.lp2 h2 em{font-style:italic;color:var(--terracota)}
.lp2 .sec-head p{margin-top:18px;color:var(--taupe);font-weight:300}

/* Assinatura / bio */
.lp2 .assinatura{background:var(--linho)}
.lp2 .assinatura-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:center}
.lp2 .retrato{aspect-ratio:4/5;background-size:cover;background-position:center top;background-color:#B49A7E;border-radius:2px}
.lp2 .quote{font-family:var(--display);font-size:clamp(24px,2.6vw,33px);font-weight:400;line-height:1.35;font-style:italic;margin-bottom:28px}
.lp2 .assinatura-grid p{color:var(--taupe);font-weight:300;margin-bottom:16px}
.lp2 .quote{color:var(--cacau)}
.lp2 .materiais{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px;padding:0}
.lp2 .materiais li{list-style:none;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--cacau);border:1px solid rgba(59,50,43,.2);padding:8px 16px;border-radius:20px}

/* Portfólio */
.lp2 .portfolio{background:var(--areia)}
.lp2 .filtros{display:flex;gap:10px;margin-bottom:48px;flex-wrap:wrap}
.lp2 .filtro{background:transparent;border:1px solid rgba(59,50,43,.25);color:var(--cacau);padding:10px 26px;border-radius:24px;font-size:13px;letter-spacing:.05em;cursor:pointer;transition:all .25s}
.lp2 .filtro.ativo,.lp2 .filtro:hover{background:var(--cacau);color:var(--linho);border-color:var(--cacau)}
.lp2 .grid-proj{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
.lp2 .card{position:relative;border-radius:2px;overflow:hidden;cursor:pointer;aspect-ratio:4/5}
.lp2 .card .ph{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform .6s cubic-bezier(.22,.61,.36,1)}
.lp2 .card:hover .ph{transform:scale(1.045)}
.lp2 .card .info{position:absolute;left:0;right:0;bottom:0;padding:22px;background:linear-gradient(0deg,rgba(43,34,27,.78),rgba(43,34,27,0));color:var(--branco)}
.lp2 .card .info small{font-size:10px;letter-spacing:.25em;text-transform:uppercase;opacity:.8}
.lp2 .card .info h3{font-weight:400;font-size:20px;margin-top:4px}
.lp2 .ver-todos{margin-top:52px;text-align:center}

/* Serviços */
.lp2 .servicos{background:var(--linho)}
.lp2 .grid-serv{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
.lp2 .serv{background:var(--branco);border:1px solid rgba(59,50,43,.08);border-radius:2px;padding:42px 34px;transition:transform .3s,box-shadow .3s}
.lp2 .serv:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(59,50,43,.08)}
.lp2 .serv .ico{width:44px;height:44px;border:1px solid var(--bronze);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:26px;color:var(--bronze)}
.lp2 .serv h3{font-weight:500;font-size:22px;margin-bottom:12px}
.lp2 .serv p{color:var(--taupe);font-size:14.5px;font-weight:300}

/* Processo */
.lp2 .processo{background:var(--cacau);color:var(--linho)}
.lp2 .processo .eyebrow{color:var(--salvia)}
.lp2 .processo .eyebrow::before{background:var(--salvia)}
.lp2 .processo h2 em{color:#D2977A}
.lp2 .passos{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid rgba(244,238,228,.16)}
.lp2 .passo{padding:40px 28px 10px 0;border-right:1px solid rgba(244,238,228,.16)}
.lp2 .passo:last-child{border-right:none}
.lp2 .passo .n{font-family:var(--display);font-style:italic;font-size:16px;color:#D2977A;margin-bottom:16px;display:block}
.lp2 .passo h3{font-weight:400;font-size:21px;margin-bottom:12px}
.lp2 .passo p{font-size:14px;color:rgba(244,238,228,.65);font-weight:300}

/* Prova social */
.lp2 .prova{background:var(--areia)}
.lp2 .depo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
.lp2 .depo{background:var(--branco);padding:38px 32px;border-radius:2px;border:1px solid rgba(59,50,43,.07)}
.lp2 .depo .txt{font-family:var(--display);font-style:italic;font-size:18px;line-height:1.5;margin-bottom:24px}
.lp2 .depo .quem{display:flex;align-items:center;gap:14px}
.lp2 .depo .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(140deg,#C3A98A,#8F7458);display:flex;align-items:center;justify-content:center;color:var(--branco);font-size:13px;font-weight:600;flex-shrink:0}
.lp2 .depo .quem b{display:block;font-size:14px;font-weight:600}
.lp2 .depo .quem small{color:var(--taupe);font-size:12.5px}
.lp2 .numeros{display:flex;gap:70px;margin-top:70px;flex-wrap:wrap;justify-content:center}
.lp2 .num-item{text-align:center}
.lp2 .num-item .valor{font-family:var(--display);font-size:46px;font-weight:400;color:var(--terracota)}
.lp2 .num-item .rot{font-size:11.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--taupe);margin-top:4px}

/* Contato */
.lp2 .contato{background:var(--linho)}
.lp2 .contato-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
.lp2 .form{display:grid;gap:18px;background:var(--branco);padding:44px;border-radius:2px;border:1px solid rgba(59,50,43,.08)}
.lp2 .form label{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--taupe);font-weight:500;display:block;margin-bottom:8px}
/* 16px evita o zoom automático do iOS ao focar o campo */
.lp2 .form input,.lp2 .form select,.lp2 .form textarea{width:100%;padding:14px 16px;border:1px solid rgba(59,50,43,.18);border-radius:2px;background:var(--linho);font-size:16px;color:var(--cacau);transition:border-color .25s}
.lp2 .form input:focus,.lp2 .form select:focus,.lp2 .form textarea:focus{outline:2px solid transparent;border-color:var(--terracota)}
.lp2 .form textarea{resize:vertical;min-height:96px}
.lp2 .lgpd{display:flex;gap:10px;align-items:flex-start;font-size:12.5px;color:var(--taupe);text-transform:none;letter-spacing:normal}
.lp2 .lgpd input{width:18px;height:18px;min-width:18px;padding:0;margin-top:2px;accent-color:var(--terracota)}
.lp2 .ou{display:flex;align-items:center;gap:16px;color:var(--taupe);font-size:12px;letter-spacing:.2em;text-transform:uppercase;margin:16px 0 0}
.lp2 .ou::before,.lp2 .ou::after{content:'';flex:1;height:1px;background:rgba(59,50,43,.15)}
.lp2 .btn-whats{background:#1FA855;color:#fff;width:100%;justify-content:center}
.lp2 .btn-whats:hover{background:#178B45}
.lp2 .contato-info h2{margin-bottom:20px}
.lp2 .contato-info>p{color:var(--taupe);font-weight:300;margin-bottom:34px;max-width:420px}
.lp2 .dados{display:grid;gap:22px}
.lp2 .dado small{font-size:10.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--bronze);display:block;margin-bottom:4px}
/* padding com margin negativa amplia o toque sem alterar o espaçamento */
.lp2 .dado a{display:inline-block;font-family:var(--display);font-size:19px;transition:color .25s;padding:10px 0;margin:-10px 0}
.lp2 .dado a:hover{color:var(--terracota)}

/* Rodapé */
.lp2 footer{background:var(--cacau);color:rgba(244,238,228,.7);padding:56px 0 40px}
.lp2 .foot{display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap}
.lp2 .foot .logo{color:var(--linho)}
.lp2 .foot small{font-size:12.5px;font-weight:300}
.lp2 .foot nav{display:flex;gap:26px;font-size:13px}
.lp2 .foot nav a{display:inline-block;padding:12px 0;margin:-12px 0}
.lp2 .foot nav a:hover{color:var(--linho)}

/* WhatsApp flutuante */
.lp2 .zap{position:fixed;right:22px;bottom:22px;z-index:120;width:58px;height:58px;border-radius:50%;background:#1FA855;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(31,168,85,.4);transition:transform .25s}
.lp2 .zap:hover{transform:scale(1.07)}
.lp2 .zap svg{width:30px;height:30px;fill:#fff}

/* Responsivo */
@media(max-width:960px){
  .lp2 .hero{grid-template-columns:1fr;min-height:auto}
  .lp2 .hero-visual{min-height:62vw}
  .lp2 .hero-scroll{display:none}
  .lp2 .assinatura-grid,.lp2 .contato-grid{grid-template-columns:1fr;gap:48px}
  .lp2 .grid-proj,.lp2 .grid-serv,.lp2 .depo-grid{grid-template-columns:1fr 1fr}
  .lp2 .passos{grid-template-columns:1fr 1fr}
  .lp2 .passo{border-right:none;border-bottom:1px solid rgba(244,238,228,.16);padding:32px 0 26px}
  .lp2 .nav-links{position:fixed;inset:78px 0 auto 0;background:var(--linho);flex-direction:column;padding:20px 6vw 32px;gap:6px;border-bottom:1px solid rgba(59,50,43,.1);transform:translateY(-130%);transition:transform .35s;align-items:stretch}
  .lp2 .nav-links.open{transform:translateY(0)}
  .lp2 .nav-links li{width:100%}
  .lp2 .nav-links a:not(.nav-cta){display:block;padding:13px 0;font-size:15px}
  .lp2 .nav-cta{display:inline-block;margin-top:14px;text-align:center;padding:15px 24px}
  .lp2 .burger{display:flex}
}
@media(max-width:600px){
  .lp2 section{padding:76px 0}
  .lp2 .grid-proj,.lp2 .grid-serv,.lp2 .depo-grid,.lp2 .passos{grid-template-columns:1fr}
  .lp2 .form{padding:30px 22px}
  .lp2 .numeros{gap:36px}
}
@media(prefers-reduced-motion:reduce){
  .lp2 *{transition:none!important;animation:none!important}
}
`;
