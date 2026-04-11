"use client";
import { useState } from "react";

const projetos = [
  {
    ambiente: "Sala de Estar",
    descricao: "Tons neutros e madeira natural",
    cor: "#C8B5A0",
    placeholder: "Sala",
  },
  {
    ambiente: "Quarto Master",
    descricao: "Minimalismo e acolhimento",
    cor: "#B08A63",
    placeholder: "Quarto",
  },
  {
    ambiente: "Cozinha Integrada",
    descricao: "Funcionalidade com elegância",
    cor: "#A8927D",
    placeholder: "Cozinha",
  },
  {
    ambiente: "Home Office",
    descricao: "Produtividade e conforto",
    cor: "#6B4F3D",
    placeholder: "Home Office",
  },
  {
    ambiente: "Banheiro",
    descricao: "Luxo nos detalhes",
    cor: "#8C7260",
    placeholder: "Banheiro",
  },
  {
    ambiente: "Varanda Gourmet",
    descricao: "Extensão natural da vida",
    cor: "#9E8470",
    placeholder: "Varanda",
  },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      className="py-32"
      style={{ backgroundColor: "#F6F2EC" }}
    >
      <div
        className="px-6 lg:px-12"
        style={{ maxWidth: "1152px", margin: "0 auto" }}
      >
        {/* Cabeçalho */}
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
            href="#"
            className="text-xs tracking-[0.25em] uppercase pb-1 transition-colors duration-300 self-start sm:self-auto"
            style={{
              color: "#6B4F3D",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 500,
              borderBottom: "1px solid #B08A63",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#B08A63";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#6B4F3D";
            }}
          >
            Ver mais projetos →
          </a>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projetos.map((projeto, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Placeholder de imagem */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundColor: projeto.cor }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "4rem",
                      color: "#F6F2EC",
                      fontStyle: "italic",
                    }}
                  >
                    {projeto.placeholder}
                  </span>
                </div>
                {/* Instrução para substituir por next/image */}
                {/* <Image src={`/projetos/${projeto.placeholder.toLowerCase()}.jpg`} fill alt={projeto.ambiente} style={{ objectFit: 'cover' }} /> */}
              </div>

              {/* Overlay hover */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                  backgroundColor: "rgba(47, 42, 38, 0.75)",
                  opacity: hoveredIndex === i ? 1 : 0,
                }}
              />

              {/* Label hover */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-400 p-6 text-center"
                style={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  transform: hoveredIndex === i ? "translateY(0)" : "translateY(10px)",
                }}
              >
                <div className="h-px w-8 mb-4" style={{ backgroundColor: "#B08A63" }} />
                <p
                  className="font-light"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.5rem",
                    color: "#F6F2EC",
                    fontStyle: "italic",
                  }}
                >
                  {projeto.ambiente}
                </p>
                <p
                  className="mt-2 text-xs tracking-wider"
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
                  color: "rgba(246,242,236,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* CTA portfólio */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase transition-colors duration-300"
            style={{ color: "#6B4F3D", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#B08A63";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#6B4F3D";
            }}
          >
            <span>Ver projeto completo no Instagram</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
