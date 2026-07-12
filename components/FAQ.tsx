"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

const perguntas = [
  {
    pergunta: "Quanto custa um projeto de interiores?",
    resposta:
      "O valor depende do tamanho do espaço e do escopo do projeto. Cada orçamento é feito de forma personalizada, sem tabela engessada. Me chame no WhatsApp com as informações do seu espaço e eu envio uma proposta sob medida.",
  },
  {
    pergunta: "Você atende projetos online ou em outras cidades?",
    resposta:
      "Sim. Além dos atendimentos presenciais, trabalho com projetos 100% online, com reuniões por vídeo, projeto 3D e acompanhamento à distância. A qualidade e o cuidado são os mesmos.",
  },
  {
    pergunta: "Quanto tempo demora um projeto?",
    resposta:
      "Varia conforme a complexidade e a quantidade de ambientes. Em geral, um projeto completo leva de algumas semanas a poucos meses, do primeiro encontro à entrega final. No nosso primeiro contato já consigo te dar uma estimativa realista.",
  },
  {
    pergunta: "Preciso reformar tudo para contratar o projeto?",
    resposta:
      "Não. Muitos projetos são apenas de decoração e reorganização do que já existe, sem quebra-quebra. O projeto se adapta à sua realidade, não o contrário.",
  },
  {
    pergunta: "Posso aproveitar móveis que eu já tenho?",
    resposta:
      "Com certeza. Peças com história e significado enriquecem o projeto. Avalio o que pode ser aproveitado, ressignificado ou reposicionado antes de sugerir qualquer compra nova.",
  },
  {
    pergunta: "Posso executar o projeto aos poucos?",
    resposta:
      "Sim. O projeto é entregue completo e organizado por etapas, para que você possa executar no seu ritmo e dentro do seu orçamento, sem perder a coerência do resultado final.",
  },
];

export default function FAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32" style={{ backgroundColor: "#F6F2EC" }}>
      <div className="px-6 lg:px-12" style={{ maxWidth: "896px", margin: "0 auto" }}>
        {/* Cabeçalho */}
        <Reveal>
          <div className="mb-14">
            <div className="h-px w-10 mb-6" style={{ backgroundColor: "#B08A63" }} />
            <p
              className="text-xs tracking-[0.35em] uppercase mb-4"
              style={{ color: "#B08A63", fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
            >
              Perguntas frequentes
            </p>
            <h2
              className="font-light leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#2F2A26",
              }}
            >
              Ainda tem
              <em style={{ color: "#6B4F3D" }}> alguma dúvida?</em>
            </h2>
          </div>
        </Reveal>

        {/* Acordeão */}
        <Reveal>
          <div style={{ borderTop: "1px solid #D4C5B0" }}>
            {perguntas.map((item, i) => {
              const estaAberta = aberta === i;
              return (
                <div key={i} style={{ borderBottom: "1px solid #D4C5B0" }}>
                  <button
                    type="button"
                    onClick={() => setAberta(estaAberta ? null : i)}
                    aria-expanded={estaAberta}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className="font-light"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.35rem",
                        color: "#2F2A26",
                      }}
                    >
                      {item.pergunta}
                    </span>
                    <span
                      className={`shrink-0 transition-transform duration-300 ${estaAberta ? "rotate-45" : ""}`}
                      style={{ color: "#B08A63", fontSize: "1.5rem", lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-400"
                    style={{ gridTemplateRows: estaAberta ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="pb-6 pr-10 text-sm leading-loose"
                        style={{ color: "#6B5A4E", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
                      >
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Fechamento */}
        <Reveal>
          <p
            className="mt-10 text-center text-sm"
            style={{ color: "#6B5A4E", fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
          >
            Não encontrou a sua pergunta?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-[#6B4F3D] transition-colors duration-300 hover:text-[#B08A63]"
            >
              Me chame no WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
