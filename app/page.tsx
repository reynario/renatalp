import { Fraunces, Inter } from "next/font/google";
import LandingV2 from "@/components/LandingV2";
import { AUTORA, EMAIL, INSTAGRAM_URL, SITE_NAME, SITE_URL, TELEFONE } from "@/lib/constants";

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

// Cadastro de negócio local: Feira de Santana como sede, atendimento online
// para o resto do Brasil. Endereço só com a cidade (atende em área de serviço).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#negocio`,
  name: SITE_NAME,
  description:
    "Projetos de interiores que unem sofisticação e acolhimento, em Feira de Santana e online para todo o Brasil. Mais de 20 anos de experiência e mais de 1.000 ambientes projetados.",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero-og.jpg`,
  telephone: TELEFONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Feira de Santana",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Feira de Santana" },
    { "@type": "State", name: "Bahia" },
    { "@type": "Country", name: "Brasil" },
  ],
  founder: { "@type": "Person", name: AUTORA, jobTitle: "Designer de Interiores" },
  sameAs: [INSTAGRAM_URL],
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
