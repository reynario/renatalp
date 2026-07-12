import Reveal from "@/components/Reveal";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <>
      {/* CTA Final */}
      <section id="cta" className="py-32 text-center" style={{ backgroundColor: "#6B4F3D" }}>
        <Reveal>
          <div className="px-6" style={{ maxWidth: "672px", margin: "0 auto" }}>
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-12" style={{ backgroundColor: "#B08A63" }} />
              <span
                className="text-xs tracking-[0.35em] uppercase"
                style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)" }}
              >
                Próximo passo
              </span>
              <div className="h-px w-12" style={{ backgroundColor: "#B08A63" }} />
            </div>

            <h2
              className="font-light leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                color: "#F6F2EC",
              }}
            >
              Pronta para ter
              <br />
              <em style={{ color: "#E7DDD1" }}>o espaço que você merece?</em>
            </h2>

            <p
              className="text-sm leading-loose mb-12 max-w-md mx-auto"
              style={{ color: "#D4C5B0", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
            >
              Vamos conversar sobre o seu projeto. Sem compromisso,
              sem julgamento — só clareza sobre o que é possível para o seu espaço.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#F6F2EC] px-12 py-5 text-sm tracking-[0.15em] uppercase text-[#2F2A26] transition-colors duration-300 hover:bg-[#2F2A26] hover:text-[#F6F2EC]"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero uma conversa
            </a>
          </div>
        </Reveal>
      </section>

      {/* Rodapé */}
      <footer className="py-12" style={{ backgroundColor: "#2F2A26" }}>
        <div className="px-6 lg:px-12" style={{ maxWidth: "1152px", margin: "0 auto" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo/Nome */}
            <div>
              <p
                className="font-light italic"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  color: "#F6F2EC",
                }}
              >
                Renata Fidelis
              </p>
              <p
                className="text-xs tracking-[0.25em] uppercase mt-1"
                style={{ color: "#6B4F3D", fontFamily: "var(--font-montserrat)" }}
              >
                Design de Interiores
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-xs">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#A8927D] transition-colors duration-300 hover:text-[#B08A63]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                {INSTAGRAM_HANDLE}
              </a>

              <div className="h-3 w-px hidden sm:block" style={{ backgroundColor: "#3D3530" }} />

              <a
                href={`mailto:${EMAIL}`}
                className="text-[#A8927D] transition-colors duration-300 hover:text-[#B08A63]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div
            className="mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
            style={{ borderTop: "1px solid #3D3530" }}
          >
            <p style={{ color: "#4A3B32", fontFamily: "var(--font-montserrat)" }}>
              © {new Date().getFullYear()} Renata Fidelis Design de Interiores. Todos os direitos reservados.
            </p>
            <p style={{ color: "#4A3B32", fontFamily: "var(--font-montserrat)" }}>
              Elegância. Conforto. Funcionalidade.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
