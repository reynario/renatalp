import Reveal from "@/components/Reveal";

export default function Solucao() {
  return (
    <section id="sobre" className="py-32" style={{ backgroundColor: "#F6F2EC" }}>
      <div className="px-6 lg:px-12" style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Foto da Renata */}
          <Reveal>
            <div className="relative">
              <div
                className="w-full aspect-[3/4] relative overflow-hidden"
                style={{ backgroundColor: "#E7DDD1" }}
              >
                {/* Placeholder (fica atrás da foto) */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ backgroundColor: "#D4C5B0" }}
                >
                  <div
                    className="w-24 h-24 rounded-full mb-4 flex items-center justify-center"
                    style={{ backgroundColor: "#B08A63" }}
                  >
                    <span
                      className="italic"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "2rem",
                        color: "#F6F2EC",
                      }}
                    >
                      RF
                    </span>
                  </div>
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#6B4F3D", fontFamily: "var(--font-montserrat)" }}
                  >
                    Foto da Renata
                  </span>
                </div>

                {/* Foto real por cima do placeholder */}
                <div
                  role="img"
                  aria-label="Renata Fidelis, designer de interiores"
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/renata.webp')" }}
                />
              </div>

              {/* Detalhe decorativo */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 -z-10"
                style={{ backgroundColor: "#E7DDD1" }}
              />
              <div
                className="absolute -top-4 -left-4 w-20 h-20 -z-10"
                style={{ border: "1px solid #B08A63" }}
              />
            </div>
          </Reveal>

          {/* Texto */}
          <Reveal delay={120}>
            <div>
              <div className="h-px w-10 mb-6" style={{ backgroundColor: "#B08A63" }} />

              <p
                className="text-xs tracking-[0.35em] uppercase mb-4"
                style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
              >
                Sobre mim
              </p>

              <h2
                className="font-light leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#2F2A26",
                }}
              >
                Renata Fidelis
                <br />
                <em style={{ color: "#6B4F3D" }}>Designer de Interiores</em>
              </h2>

              <div
                className="space-y-4 text-sm leading-loose"
                style={{ color: "#5A4A40", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
              >
                <p>
                  Há mais de 20 anos transformando espaços, acredito que um lar bem
                  projetado tem o poder de transformar rotinas, melhorar
                  relacionamentos e trazer leveza para o dia a dia.
                </p>
                <p>
                  Minha abordagem une estética refinada com funcionalidade real,
                  porque beleza que não serve para viver não é beleza, é cenário.
                </p>
                <p>
                  Cada projeto começa por uma escuta profunda: quem você é, como você
                  vive, o que te faz sentir em casa. Só depois vem a caneta.
                </p>
              </div>

              <blockquote
                className="mt-8 pl-5 font-light italic leading-snug"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.4rem",
                  color: "#2F2A26",
                  borderLeft: "2px solid #B08A63",
                }}
              >
                &ldquo;Elegância, conforto e funcionalidade, no espaço certo para você.&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
