import { Fraunces, Inter } from "next/font/google";
import LandingV2 from "@/components/LandingV2";
import { INSTAGRAM_URL, SITE_URL } from "@/lib/constants";

// Fontes desta versão da landing (a anterior, em /1, usa Cormorant/Montserrat).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

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
      <LandingV2 fontVars={`${fraunces.variable} ${inter.variable}`} />
    </>
  );
}
