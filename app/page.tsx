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
import { INSTAGRAM_URL, SITE_URL } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Renata Fidelis — Design de Interiores",
  description:
    "Projetos de interiores que unem sofisticação e acolhimento. Mais de 20 anos de experiência e mais de 1.000 projetos entregues.",
  url: SITE_URL,
  telephone: "+5575983055400",
  sameAs: [INSTAGRAM_URL],
  areaServed: "Brasil",
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
