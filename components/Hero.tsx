export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ backgroundColor: "#2F2A26", minHeight: "100svh", paddingTop: "6rem", paddingBottom: "4rem" }}
    >
      {/* Imagem de fundo — salve a foto em public/images/hero.jpg.
          Se o arquivo não existir, o fundo escuro com textura continua aparecendo. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        aria-hidden="true"
      />

      {/* Overlay escuro para legibilidade do texto sobre a foto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(47,42,38,0.82) 0%, rgba(47,42,38,0.62) 50%, rgba(47,42,38,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Textura sutil de fundo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 40%, #B08A63 0%, transparent 60%),
                            radial-gradient(ellipse at 70% 70%, #6B4F3D 0%, transparent 55%)`,
        }}
      />

      {/* Ornamento superior */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 flex items-center gap-4 animate-fade-in">
        <div className="h-px w-16" style={{ backgroundColor: "#B08A63" }} />
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)" }}
        >
          Design de Interiores
        </span>
        <div className="h-px w-16" style={{ backgroundColor: "#B08A63" }} />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 px-6 w-full max-w-3xl mx-auto">
        <p
          className="animate-fade-up text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)", animationDelay: "0.1s" }}
        >
          Renata Fidelis
        </p>

        <h1
          className="animate-fade-up font-light leading-[1.1] mb-6"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            color: "#F6F2EC",
            animationDelay: "0.2s",
          }}
        >
          O lar que você imagina,
          <br />
          <em style={{ color: "#B08A63" }}>projetado com intenção.</em>
        </h1>

        <p
          className="animate-fade-up text-sm tracking-wide leading-loose max-w-xl mx-auto mb-12"
          style={{ color: "#E7DDD1", fontFamily: "var(--font-montserrat)", fontWeight: 300, animationDelay: "0.35s" }}
        >
          Projetos de interiores que unem sofisticação e acolhimento —
          pensados para a vida real, não apenas para a fotografia.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#cta"
            className="bg-[#6B4F3D] px-10 py-4 text-sm tracking-[0.15em] uppercase text-[#F6F2EC] transition-colors duration-300 hover:bg-[#B08A63]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
          >
            Quero meu projeto
          </a>
          <a
            href="#portfolio"
            className="border border-[#B08A63] px-10 py-4 text-sm tracking-[0.15em] uppercase text-[#B08A63] transition-colors duration-300 hover:bg-[#B08A63] hover:text-[#2F2A26]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
          >
            Ver portfólio
          </a>
        </div>
      </div>

      {/* Seta de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <line x1="10" y1="0" x2="10" y2="25" stroke="#B08A63" strokeWidth="1" />
          <polyline points="4,18 10,26 16,18" stroke="#B08A63" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </section>
  );
}
