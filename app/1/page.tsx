import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problema from "@/components/Problema";
import Solucao from "@/components/Solucao";
import Diferenciais from "@/components/Diferenciais";
import Portfolio from "@/components/Portfolio";
import CTAMeio from "@/components/CTAMeio";
import ParaQuemE from "@/components/ParaQuemE";
import ComoFunciona from "@/components/ComoFunciona";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
// Versão anterior da landing, mantida oculta: sem links internos
// apontando para cá e fora dos buscadores.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problema />
        <Solucao />
        <Diferenciais />
        <Portfolio />
        <CTAMeio />
        <ParaQuemE />
        <ComoFunciona />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <WhatsAppFloat />
    </>
  );
}
