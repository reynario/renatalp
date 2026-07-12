import Reveal from "@/components/Reveal";

const dores = [
  {
    titulo: "Tela fantasma",
    descricao:
      "Você entra no cômodo e sente que algo está errado, mas não consegue apontar o quê.",
  },
  {
    titulo: "Meses sem identidade",
    descricao:
      "A decoração foi se acumulando aos poucos, sem um fio condutor. O resultado não te representa.",
  },
  {
    titulo: "Comum demais",
    descricao:
      "Você quer algo diferente, mas tudo que encontra parece igual: genérico, sem alma.",
  },
  {
    titulo: "Projeto que paralisa",
    descricao:
      "As decisões parecem complexas demais. E enquanto isso, você adia viver plenamente o seu espaço.",
  },
];

export default function Problema() {
  return (
    <section id="problema" className="py-32" style={{ backgroundColor: "#2F2A26" }}>
      <div className="px-6 lg:px-12" style={{ maxWidth: "1152px", margin: "0 auto" }}>
        {/* Cabeçalho */}
        <Reveal>
          <div className="mb-16">
            <div className="h-px w-10 mb-6" style={{ backgroundColor: "#B08A63" }} />
            <h2
              className="font-light leading-tight mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#F6F2EC",
              }}
            >
              Você reconhece
              <em style={{ color: "#B08A63" }}> alguma dessas situações?</em>
            </h2>
            <p
              className="text-sm leading-loose"
              style={{ color: "#A8927D", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
            >
              A maioria das pessoas que chegam até mim passou por pelo menos uma delas.
            </p>
          </div>
        </Reveal>

        {/* Dores */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "#3D3530" }}>
            {dores.map((dor, i) => (
              <div
                key={dor.titulo}
                className="bg-[#2F2A26] p-8 transition-colors duration-300 hover:bg-[#3D3530]"
              >
                <div
                  className="mb-4"
                  style={{ color: "#8C7260", fontFamily: "var(--font-cormorant)", fontSize: "1.5rem" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="mb-3 font-light italic"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.4rem",
                    color: "#E7DDD1",
                  }}
                >
                  {dor.titulo}
                </h3>
                <p
                  className="text-sm leading-loose"
                  style={{ color: "#A8927D", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
                >
                  {dor.descricao}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Fechamento */}
        <Reveal>
          <div className="mt-14 pt-10" style={{ borderTop: "1px solid #3D3530" }}>
            <p
              className="font-light leading-relaxed"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                color: "#F6F2EC",
              }}
            >
              O problema não é o espaço.{" "}
              <em style={{ color: "#B08A63" }}>
                É a falta de um projeto que te dê clareza e liberdade para finalmente viver.
              </em>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
