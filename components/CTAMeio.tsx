import Reveal from "@/components/Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CTAMeio() {
  return (
    <section className="py-20" style={{ backgroundColor: "#2F2A26" }}>
      <Reveal>
        <div
          className="flex flex-col items-center gap-8 px-6 text-center md:flex-row md:justify-between md:text-left lg:px-12"
          style={{ maxWidth: "1152px", margin: "0 auto" }}
        >
          <div>
            <p
              className="font-light leading-snug"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                color: "#F6F2EC",
              }}
            >
              Gostou do que viu?{" "}
              <em style={{ color: "#B08A63" }}>O próximo projeto pode ser o seu.</em>
            </p>
            <p
              className="mt-2 text-sm"
              style={{ color: "#A8927D", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
            >
              Uma conversa sem compromisso é o primeiro passo.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#6B4F3D] px-10 py-4 text-sm tracking-[0.15em] uppercase text-[#F6F2EC] transition-colors duration-300 hover:bg-[#B08A63]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
          >
            Falar com a Renata
          </a>
        </div>
      </Reveal>
    </section>
  );
}
