"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { WA_MSG, waLink } from "@/lib/constants";

// Cozinha do Real 101126: planta, vista cotada, render e foto da obra do mesmo
// projeto (uso autorizado pela Renata em 2026-11-11). Render é projeto, foto é
// obra: o rótulo de cada imagem diz qual é qual.
const etapas = [
  {
    n: "01",
    titulo: "Planta baixa",
    texto: "Medidas do espaço, circulação e a posição de cada eletro, ponto elétrico e hidráulico.",
    rotulo: "Prancha · Planta baixa",
    img: "/images/projeto-obra/planta.webp",
    alt: "Planta baixa cotada de cozinha planejada, prancha do projeto de Renata Fidelis",
    prancha: true,
  },
  {
    n: "02",
    titulo: "Vista cotada",
    texto: "Cada módulo com medida, material e acabamento. É a folha que a marcenaria usa para fabricar sem retrabalho.",
    rotulo: "Prancha · Elevação, vista A",
    img: "/images/projeto-obra/vista.webp",
    alt: "Elevação cotada da parede principal da cozinha, com materiais e medidas para a marcenaria",
    prancha: true,
  },
  {
    n: "03",
    titulo: "Render 3D",
    texto: "Você vê o ambiente com luz e materiais antes de cortar a primeira chapa, e ajusta o que quiser.",
    rotulo: "Render 3D",
    img: "/images/projeto-obra/render.webp",
    alt: "Render 3D da cozinha planejada com ripado em madeira, cristaleira iluminada e torre de fornos",
    prancha: false,
  },
  {
    n: "04",
    titulo: "Obra pronta",
    texto: "A mesma cozinha, executada a partir do projeto: ripado, cristaleira iluminada e torre quente no lugar.",
    rotulo: "Foto da obra",
    img: "/images/projeto-obra/obra.webp",
    alt: "Foto da cozinha executada: ripado iluminado, geladeira inox, torre de fornos e cristaleira de vidro",
    prancha: false,
  },
];

export default function ProjetoObra() {
  const [ativa, setAtiva] = useState(0);
  const passos = useRef<(HTMLLIElement | null)[]>([]);

  // A etapa que cruza o meio da tela vira a ativa (imagem fixa à direita no desktop).
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setAtiva(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    passos.current.forEach((p) => p && io.observe(p));
    return () => io.disconnect();
  }, []);

  function irPara(i: number) {
    setAtiva(i);
    passos.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section className="po" id="projeto-a-obra">
      <div className="wrap">
        <div className="sec-head t-stagger" data-reveal>
          <span className="eyebrow t-stagger-line t-stagger-line--1">Do projeto à obra · Cozinha planejada</span>
          <h2 className="t-stagger-line t-stagger-line--2">
            O que você vê no projeto é o que <em>fica pronto</em>.
          </h2>
          <p className="t-stagger-line t-stagger-line--3">
            Uma cozinha real, do primeiro desenho até a obra executada. Role para acompanhar cada etapa.
          </p>
        </div>

        <div className="po-grid">
          <ol className="po-passos">
            {etapas.map((e, i) => (
              <li
                key={e.n}
                data-i={i}
                ref={(el) => {
                  passos.current[i] = el;
                }}
                className={`po-passo${ativa === i ? " on" : ""}`}
              >
                <button type="button" className="po-tit" onClick={() => irPara(i)} aria-current={ativa === i ? "step" : undefined}>
                  <span className="po-n">{e.n}</span>
                  {e.titulo}
                </button>
                <p>{e.texto}</p>
                {/* No celular cada etapa leva a própria imagem */}
                <figure className={`po-mob${e.prancha ? " prancha" : ""}`}>
                  <Image src={e.img} alt={e.alt} fill sizes="100vw" />
                  <figcaption>{e.rotulo}</figcaption>
                </figure>
              </li>
            ))}
            <li className="po-fim">
              <a
                className="btn btn-primary"
                href={waLink(WA_MSG.projetoObra)}
                data-origem="projeto_obra"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero o meu projeto assim
              </a>
            </li>
          </ol>

          <div className="po-quadro" aria-hidden="true">
            <div className="po-moldura">
              {etapas.map((e, i) => (
                <div key={e.n} className={`po-img${e.prancha ? " prancha" : ""}${ativa === i ? " on" : ""}`}>
                  <Image src={e.img} alt="" fill sizes="(max-width: 960px) 1px, 50vw" />
                </div>
              ))}
              <span className="po-rotulo">{etapas[ativa].rotulo}</span>
              <span className="po-cont">
                {etapas[ativa].n} / 04
              </span>
            </div>
            <div className="po-barra">
              <span style={{ transform: `scaleX(${(ativa + 1) / etapas.length})` }} />
            </div>
          </div>
        </div>
      </div>
      <style>{css}</style>
    </section>
  );
}

// Crossfade com cross-blur nos tokens do transitions.dev (--duration-slow,
// --ease-in-out, --blur-small); a barra de progresso usa --ease-smooth-out.
const css = `
.lp2 .po{background:var(--linho)}
.lp2 .po-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:start}
.lp2 .po-passos{list-style:none;margin:0;padding:0}
.lp2 .po-passo{min-height:62vh;display:flex;flex-direction:column;justify-content:center;border-left:1px solid rgba(59,50,43,.15);padding:0 0 0 30px;opacity:.38;transition:opacity var(--duration-slow) var(--ease-in-out)}
.lp2 .po-passo.on{opacity:1}
.lp2 .po-passo:first-child{min-height:48vh;justify-content:flex-start;padding-top:8px}
.lp2 .po-tit{all:unset;cursor:pointer;display:flex;align-items:baseline;gap:16px;font-family:var(--display);font-size:clamp(26px,2.6vw,34px);line-height:1.2;color:var(--cacau)}
.lp2 .po-tit:focus-visible{outline:2px solid var(--terracota);outline-offset:4px}
.lp2 .po-n{font-family:var(--display);font-style:italic;font-size:16px;color:var(--terracota)}
.lp2 .po-passo p{color:var(--taupe);font-weight:300;margin-top:12px;max-width:400px}
.lp2 .po-fim{padding:40px 0 0 30px}
.lp2 .po-mob{display:none}
.lp2 .po-quadro{position:sticky;top:calc(50vh - min(19vw,250px));}
.lp2 .po-moldura{position:relative;aspect-ratio:4/3;background:#FDFBF7;border:1px solid rgba(59,50,43,.1);border-radius:2px;overflow:hidden}
.lp2 .po-img{position:absolute;inset:0;opacity:0;filter:blur(var(--blur-small));transform:scale(1.02);transition:opacity var(--duration-slow) var(--ease-in-out),filter var(--duration-slow) var(--ease-in-out),transform var(--duration-slow) var(--ease-smooth-out)}
.lp2 .po-img.on{opacity:1;filter:blur(0);transform:scale(1)}
.lp2 .po-img img{object-fit:cover}
.lp2 .po-img.prancha img{object-fit:contain;padding:14px}
.lp2 .po-rotulo,.lp2 .po-cont{position:absolute;bottom:16px;z-index:2;font-size:11px;letter-spacing:.2em;text-transform:uppercase;background:rgba(253,251,247,.92);color:var(--cacau);padding:7px 12px;border-radius:2px}
.lp2 .po-rotulo{left:16px}
.lp2 .po-cont{right:16px;font-family:var(--display);font-style:italic;letter-spacing:.05em;text-transform:none;font-size:14px}
.lp2 .po-barra{height:2px;background:rgba(59,50,43,.12);margin-top:18px;overflow:hidden}
.lp2 .po-barra span{display:block;height:100%;background:var(--terracota);transform-origin:left;transition:transform var(--duration-slow) var(--ease-smooth-out)}
@media(max-width:960px){
  .lp2 .po-grid{grid-template-columns:1fr;gap:0}
  .lp2 .po-quadro{display:none}
  .lp2 .po-passo,.lp2 .po-passo:first-child{min-height:0;opacity:1;border-left:none;padding:0 0 44px}
  .lp2 .po-tit{font-size:26px}
  .lp2 .po-mob{display:block;position:relative;aspect-ratio:4/3;margin:20px 0 0;background:#FDFBF7;border:1px solid rgba(59,50,43,.1);border-radius:2px;overflow:hidden}
  .lp2 .po-mob img{object-fit:cover}
  .lp2 .po-mob.prancha img{object-fit:contain;padding:8px}
  .lp2 .po-mob figcaption{position:absolute;left:12px;bottom:12px;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;background:rgba(253,251,247,.92);color:var(--cacau);padding:6px 10px;border-radius:2px}
  .lp2 .po-fim{padding:0}
}
@media(prefers-reduced-motion:reduce){
  .lp2 .po-img,.lp2 .po-passo,.lp2 .po-barra span{transition:none}
}
`;
