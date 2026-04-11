"use client";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ backgroundColor: "#2F2A26", minHeight: "90svh", paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      {/* Textura sutil de fundo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 40%, #B08A63 0%, transparent 60%),
                            radial-gradient(ellipse at 70% 70%, #6B4F3D 0%, transparent 55%)`,
        }}
      />

      {/* Grade decorativa */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#B08A63 1px, transparent 1px),
                            linear-gradient(90deg, #B08A63 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ornamento superior */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 animate-fade-in">
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
            className="px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              backgroundColor: "#6B4F3D",
              color: "#F6F2EC",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 500,
              letterSpacing: "0.15em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#B08A63";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#6B4F3D";
            }}
          >
            Quero meu projeto
          </a>
          <a
            href="#portfolio"
            className="px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              border: "1px solid #B08A63",
              color: "#B08A63",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 500,
              letterSpacing: "0.15em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#B08A63";
              (e.currentTarget as HTMLAnchorElement).style.color = "#2F2A26";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#B08A63";
            }}
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
