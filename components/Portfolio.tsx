"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { INSTAGRAM_URL } from "@/lib/constants";

/*
  IMAGENS DO PORTFÓLIO
  As fotos ficam em public/images/portfolio/ (formato WebP).
  Cada ambiente é um carrossel: adicione ou remova caminhos no array
  `imagens` conforme a quantidade de fotos de cada projeto.
  Se uma foto não existir, o cartão mostra o bloco de cor como fallback.
*/
const projetos = [
  {
    ambiente: "Sala de Estar",
    descricao: "Tons neutros e madeira natural",
    cor: "#C8B5A0",
    imagens: ["/images/portfolio/sala.webp"],
  },
  {
    ambiente: "Sala de Jantar",
    descricao: "Convívio com elegância",
    cor: "#9E8470",
    imagens: ["/images/portfolio/sala-jantar.webp"],
  },
  {
    ambiente: "Cozinha",
    descricao: "Funcionalidade com sofisticação",
    cor: "#A8927D",
    imagens: ["/images/portfolio/cozinha-1.webp", "/images/portfolio/cozinha-2.webp"],
  },
  {
    ambiente: "Quarto do Casal",
    descricao: "Minimalismo e acolhimento",
    cor: "#B08A63",
    imagens: ["/images/portfolio/quarto-casal.webp"],
  },
  {
    ambiente: "Quartos Infantis",
    descricao: "Imaginação nos detalhes",
    cor: "#6B4F3D",
    imagens: ["/images/portfolio/quarto-menina.webp", "/images/portfolio/quarto-menino.webp"],
  },
  {
    ambiente: "Banheiro",
    descricao: "Luxo nos detalhes",
    cor: "#8C7260",
    imagens: ["/images/portfolio/banheiro.webp"],
  },
];

function CarrosselProjeto({ projeto, indice }: { projeto: (typeof projetos)[number]; indice: number }) {
  const [atual, setAtual] = useState(0);
  const total = projeto.imagens.length;

  const anterior = () => setAtual((i) => (i - 1 + total) % total);
  const proxima = () => setAtual((i) => (i + 1) % total);

  return (
    <div className="group relative aspect-[4/5] overflow-hidden">
      {/* Fallback de cor enquanto as fotos não existem */}
      <div className="absolute inset-0" style={{ backgroundColor: projeto.cor }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span
            className="italic"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "3rem", color: "#F6F2EC" }}
          >
            {projeto.ambiente}
          </span>
        </div>
      </div>

      {/* Slides — background-image fica transparente se o arquivo não existir */}
      {projeto.imagens.map((src, i) => (
        <div
          key={src}
          role="img"
          aria-label={`${projeto.ambiente} — foto ${i + 1} de ${total}`}
          aria-hidden={i !== atual}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{ backgroundImage: `url('${src}')`, opacity: i === atual ? 1 : 0 }}
        />
      ))}

      {/* Gradiente inferior para legibilidade do rótulo */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(47,42,38,0.85) 100%)" }}
      />

      {/* Rótulo do ambiente */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
        <p
          className="italic font-light"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", color: "#F6F2EC" }}
        >
          {projeto.ambiente}
        </p>
        <p
          className="mt-1 text-xs tracking-wider"
          style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)" }}
        >
          {projeto.descricao}
        </p>
      </div>

      {/* Número sobreposto */}
      <div
        className="absolute top-4 left-4 text-xs"
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "rgba(246,242,236,0.5)",
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
        }}
      >
        {String(indice + 1).padStart(2, "0")}
      </div>

      {total > 1 && (
        <>
          {/* Setas */}
          <button
            type="button"
            onClick={anterior}
            aria-label={`Foto anterior de ${projeto.ambiente}`}
            className="absolute left-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#2F2A26]/50 text-[#F6F2EC] opacity-70 transition-all duration-300 hover:bg-[#2F2A26]/80 md:opacity-0 md:group-hover:opacity-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={proxima}
            aria-label={`Próxima foto de ${projeto.ambiente}`}
            className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#2F2A26]/50 text-[#F6F2EC] opacity-70 transition-all duration-300 hover:bg-[#2F2A26]/80 md:opacity-0 md:group-hover:opacity-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-[4.5rem] left-1/2 flex -translate-x-1/2">
            {projeto.imagens.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setAtual(i)}
                aria-label={`Ir para a foto ${i + 1} de ${projeto.ambiente}`}
                className="flex h-7 w-7 items-center justify-center"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
                  style={{ backgroundColor: i === atual ? "#B08A63" : "rgba(246,242,236,0.45)" }}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32" style={{ backgroundColor: "#F6F2EC" }}>
      <div className="px-6 lg:px-12" style={{ maxWidth: "1152px", margin: "0 auto" }}>
        {/* Cabeçalho */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <div>
              <div className="h-px w-10 mb-6" style={{ backgroundColor: "#B08A63" }} />
              <p
                className="text-xs tracking-[0.35em] uppercase mb-4"
                style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
              >
                Portfólio
              </p>
              <h2
                className="font-light leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#2F2A26",
                }}
              >
                Projetos que
                <em style={{ color: "#6B4F3D" }}> falam por si</em>
              </h2>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start pb-1 text-xs tracking-[0.25em] uppercase text-[#6B4F3D] transition-colors duration-300 hover:text-[#B08A63] sm:self-auto"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500, borderBottom: "1px solid #B08A63" }}
            >
              Ver mais projetos →
            </a>
          </div>
        </Reveal>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projetos.map((projeto, i) => (
            <Reveal key={projeto.ambiente} delay={(i % 3) * 100}>
              <CarrosselProjeto projeto={projeto} indice={i} />
            </Reveal>
          ))}
        </div>

        {/* CTA portfólio */}
        <Reveal>
          <div className="mt-12 text-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#6B4F3D] transition-colors duration-300 hover:text-[#B08A63]"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
            >
              <span>Ver projeto completo no Instagram</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
