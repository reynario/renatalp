import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucao from "@/components/Solucao";
import Diferenciais from "@/components/Diferenciais";
import Portfolio from "@/components/Portfolio";
import ParaQuemE from "@/components/ParaQuemE";
import ComoFunciona from "@/components/ComoFunciona";
import Depoimentos from "@/components/Depoimentos";
import CTAFinal from "@/components/CTAFinal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problema />
      <Solucao />
      <Diferenciais />
      <Portfolio />
      <ParaQuemE />
      <ComoFunciona />
      <Depoimentos />
      <CTAFinal />
    </main>
  );
}
