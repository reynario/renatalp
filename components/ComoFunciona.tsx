"use client";

const passos = [
  {
    numero: "01",
    titulo: "Entendimento",
    subtitulo: "Espaço e necessidades",
    descricao:
      "Conversa aprofundada para entender quem você é, como vive, o que te incomoda e o que te encanta. O projeto começa aqui.",
  },
  {
    numero: "02",
    titulo: "Desenvolvimento",
    subtitulo: "Projeto completo",
    descricao:
      "Plantas, layout, paleta de materiais, mobiliário, iluminação e todos os detalhes que fazem um projeto coerente e bonito.",
  },
  {
    numero: "03",
    titulo: "Apresentação",
    subtitulo: "E ajustes",
    descricao:
      "Você vê o projeto em 3D antes de qualquer compra. Refinamos juntos até que fique exatamente como você imaginou.",
  },
  {
    numero: "04",
    titulo: "Execução",
    subtitulo: "Com acompanhamento",
    descricao:
      "Supervisão do processo de execução para garantir que o que foi projetado seja entregue com fidelidade e qualidade.",
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="py-32"
      style={{ backgroundColor: "#F6F2EC" }}
    >
      <div
        className="px-6 lg:px-12"
        style={{ maxWidth: "1152px", margin: "0 auto" }}
      >
        {/* Cabeçalho */}
        <div className="mb-16">
          <div className="h-px w-10 mb-6" style={{ backgroundColor: "#B08A63" }} />
          <p
            className="text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
          >
            Processo
          </p>
          <h2
            className="font-light leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#2F2A26",
            }}
          >
            Como funciona
            <br />
            <em style={{ color: "#6B4F3D" }}>do começo ao fim</em>
          </h2>
        </div>

        {/* Timeline — desktop horizontal / mobile vertical */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          {/* Linha de conexão */}
          <div
            className="absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ backgroundColor: "#D4C5B0" }}
          />

          {passos.map((passo, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6 relative">
              {/* Círculo numerado */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 transition-colors duration-300"
                style={{ backgroundColor: "#E7DDD1", border: "1px solid #B08A63" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.1rem",
                    color: "#6B4F3D",
                    fontStyle: "italic",
                  }}
                >
                  {passo.numero}
                </span>
              </div>

              <h3
                className="mb-1 font-medium"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", color: "#2F2A26" }}
              >
                {passo.titulo}
              </h3>
              <p
                className="text-xs tracking-wide mb-4"
                style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
              >
                {passo.subtitulo}
              </p>
              <p
                className="text-xs leading-loose"
                style={{ color: "#6B5A4E", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
              >
                {passo.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="flex flex-col gap-0 md:hidden">
          {passos.map((passo, i) => (
            <div key={i} className="flex gap-6 relative">
              {/* Linha vertical */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#E7DDD1", border: "1px solid #B08A63" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1rem",
                      color: "#6B4F3D",
                      fontStyle: "italic",
                    }}
                  >
                    {passo.numero}
                  </span>
                </div>
                {i < passos.length - 1 && (
                  <div className="w-px flex-1 mt-2 mb-2" style={{ backgroundColor: "#D4C5B0", minHeight: "40px" }} />
                )}
              </div>

              <div className="pb-10">
                <h3
                  className="mb-1 font-medium"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", color: "#2F2A26" }}
                >
                  {passo.titulo}
                </h3>
                <p
                  className="text-xs tracking-wide mb-3"
                  style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
                >
                  {passo.subtitulo}
                </p>
                <p
                  className="text-sm leading-loose"
                  style={{ color: "#6B5A4E", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
                >
                  {passo.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
