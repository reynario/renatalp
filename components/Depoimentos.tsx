import Reveal from "@/components/Reveal";
import { INSTAGRAM_URL } from "@/lib/constants";

const depoimentos = [
  {
    texto:
      "A Renata entendeu exatamente o que eu queria — mesmo quando eu mesma não sabia explicar. O resultado ficou muito acima do que eu imaginava. A sala ficou completamente transformada.",
    nome: "Camila R.",
    cidade: "São Paulo, SP",
    iniciais: "CR",
  },
  {
    texto:
      "Já tentei fazer a decoração sozinha por anos e nunca ficava certo. Com a Renata, em três meses o apartamento ficou com cara de revista — mas sem perder a minha identidade.",
    nome: "Fernanda M.",
    cidade: "Belo Horizonte, MG",
    iniciais: "FM",
  },
  {
    texto:
      "O que mais me surpreendeu foi a atenção aos detalhes que eu nunca teria pensado. Cada escolha tem uma razão, e isso se reflete na qualidade do resultado final.",
    nome: "Beatriz L.",
    cidade: "Curitiba, PR",
    iniciais: "BL",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-32" style={{ backgroundColor: "#E7DDD1" }}>
      <div className="px-6 lg:px-12" style={{ maxWidth: "1152px", margin: "0 auto" }}>
        {/* Cabeçalho */}
        <Reveal>
          <div className="mb-14">
            <div className="h-px w-10 mb-6" style={{ backgroundColor: "#6B4F3D" }} />
            <p
              className="text-xs tracking-[0.35em] uppercase mb-4"
              style={{ color: "#6B4F3D", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
            >
              Depoimentos
            </p>
            <h2
              className="font-light leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#2F2A26",
              }}
            >
              O que dizem
              <em style={{ color: "#6B4F3D" }}> quem viveu o processo</em>
            </h2>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map((dep, i) => (
            <Reveal key={dep.nome} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col justify-between bg-[#F6F2EC] p-8 transition-colors duration-300 hover:bg-[#FAF8F4]">
                {/* Aspas decorativas */}
                <div
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "4rem",
                    color: "#D4C5B0",
                    lineHeight: 0.7,
                  }}
                >
                  &ldquo;
                </div>

                <p
                  className="flex-1 text-sm leading-loose mb-8"
                  style={{ color: "#4A3B32", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
                >
                  {dep.texto}
                </p>

                {/* Autora */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#B08A63" }}
                  >
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-montserrat)", color: "#F6F2EC", fontWeight: 500 }}
                    >
                      {dep.iniciais}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ fontFamily: "var(--font-montserrat)", color: "#2F2A26" }}
                    >
                      {dep.nome}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "#A8927D", fontFamily: "var(--font-montserrat)" }}
                    >
                      {dep.cidade}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Nota vídeo */}
        <Reveal>
          <p
            className="mt-8 text-center text-xs"
            style={{ color: "#A8927D", fontFamily: "var(--font-montserrat)" }}
          >
            Depoimentos em vídeo disponíveis no{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-[#6B4F3D] transition-colors duration-300 hover:text-[#B08A63]"
            >
              Instagram
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
