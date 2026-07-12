import Reveal from "@/components/Reveal";

const perfis = [
  "Você valoriza estética, mas não quer abrir mão do conforto no dia a dia",
  "Sente que seu espaço não reflete quem você é — e isso te incomoda",
  "Quer tomar decisões com segurança, sem ficar perdida em referências infinitas",
  "Busca um projeto duradouro, não modas que envelhecem em dois anos",
];

export default function ParaQuemE() {
  return (
    <section
      id="para-quem"
      className="py-32"
      style={{ backgroundColor: "#2F2A26" }}
    >
      <div
        className="px-6 lg:px-12"
        style={{ maxWidth: "1152px", margin: "0 auto" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Texto esquerdo */}
          <Reveal>
          <div>
            <div className="h-px w-10 mb-6" style={{ backgroundColor: "#B08A63" }} />
            <p
              className="text-xs tracking-[0.35em] uppercase mb-4"
              style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
            >
              Para quem é
            </p>
            <h2
              className="font-light leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#F6F2EC",
              }}
            >
              Você que quer
              <br />
              <em style={{ color: "#B08A63" }}>uma casa mais elegante</em>
              <br />e bem resolvida
            </h2>
            <p
              className="text-sm leading-loose"
              style={{ color: "#A8927D", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
            >
              Não precisa ter um orçamento milionário, nem saber exatamente o que quer.
              Precisa querer um espaço que funcione para a sua vida — com beleza e intenção.
            </p>
          </div>
          </Reveal>

          {/* Lista de perfis */}
          <Reveal delay={120}>
          <div className="space-y-6">
            {perfis.map((perfil, i) => (
              <div
                key={i}
                className="flex items-start gap-5 pb-6"
                style={{ borderBottom: i < perfis.length - 1 ? "1px solid #3D3530" : "none" }}
              >
                <div
                  className="mt-1 shrink-0 w-6 h-6 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: "#3D3530", border: "1px solid #6B4F3D" }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#B08A63" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <p
                  className="text-sm leading-loose"
                  style={{ color: "#D4C5B0", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
                >
                  {perfil}
                </p>
              </div>
            ))}

            {/* Nota de inclusão */}
            <p
              className="mt-4 font-light"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.1rem",
                color: "#6B4F3D",
                fontStyle: "italic",
              }}
            >
              Se você se viu em ao menos um desses pontos — este projeto pode ser seu.
            </p>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
