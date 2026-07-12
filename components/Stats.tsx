import Reveal from "@/components/Reveal";

const stats = [
  { valor: "+1.000", legenda: "Projetos entregues" },
  { valor: "+20", legenda: "Anos de experiência" },
];

export default function Stats() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: "#26221E", borderTop: "1px solid #3D3530", borderBottom: "1px solid #3D3530" }}
    >
      <Reveal>
        <div
          className="grid grid-cols-1 gap-12 px-6 sm:grid-cols-2 lg:px-12"
          style={{ maxWidth: "768px", margin: "0 auto" }}
        >
          {stats.map((stat) => (
            <div key={stat.legenda} className="text-center">
              <p
                className="font-light leading-none"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  color: "#B08A63",
                }}
              >
                {stat.valor}
              </p>
              <p
                className="mt-3 text-xs tracking-[0.3em] uppercase"
                style={{ color: "#A8927D", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
              >
                {stat.legenda}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
