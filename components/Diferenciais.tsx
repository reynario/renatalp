"use client";

const cards = [
  {
    numero: "01",
    titulo: "Sofisticação sem exagero",
    descricao:
      "Um projeto de alto padrão não precisa gritar. A elegância está nos detalhes, nas proporções, na harmonia que você sente ao entrar no cômodo.",
  },
  {
    numero: "02",
    titulo: "Sensação real de acolhimento",
    descricao:
      "Seu lar deve abraçar quem entra nele. Cada decisão de projeto é guiada por como o espaço vai fazer você se sentir — não apenas parecer bonito.",
  },
  {
    numero: "03",
    titulo: "Pensado para o seu dia a dia",
    descricao:
      "Materiais que suportam a rotina. Móveis no lugar certo. Layout que facilita o fluxo. Um projeto que funciona de verdade, não só na planta.",
  },
  {
    numero: "04",
    titulo: "Valorização do imóvel",
    descricao:
      "Um interior bem projetado eleva o padrão percebido do imóvel — e do estilo de vida de quem vive nele. É um investimento que se vê e se sente.",
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="py-32"
      style={{ backgroundColor: "#E7DDD1" }}
    >
      <div
        className="px-6 lg:px-12"
        style={{ maxWidth: "1152px", margin: "0 auto" }}
      >
        {/* Cabeçalho */}
        <div className="mb-16">
          <div className="h-px w-10 mb-6" style={{ backgroundColor: "#6B4F3D" }} />
          <p
            className="text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "#6B4F3D", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
          >
            Por que Renata Fidelis
          </p>
          <h2
            className="font-light leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#2F2A26",
            }}
          >
            O que torna este projeto
            <br />
            <em style={{ color: "#6B4F3D" }}>diferente dos outros</em>
          </h2>
        </div>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1" style={{ backgroundColor: "#C8B5A0" }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="p-10 transition-all duration-400 group cursor-default"
              style={{ backgroundColor: "#E7DDD1" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#F6F2EC";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#E7DDD1";
              }}
            >
              <span
                className="block mb-5 font-light"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "3.5rem",
                  color: "#C8B5A0",
                  lineHeight: 1,
                }}
              >
                {card.numero}
              </span>
              <h3
                className="mb-4 font-medium leading-snug"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  color: "#2F2A26",
                }}
              >
                {card.titulo}
              </h3>
              <p
                className="text-sm leading-loose"
                style={{ color: "#6B5A4E", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
              >
                {card.descricao}
              </p>

              {/* Linha de hover */}
              <div
                className="mt-6 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: "#B08A63" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
