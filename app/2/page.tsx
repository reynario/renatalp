import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import LandingV2 from "./LandingV2";

// Fontes exclusivas desta versão de teste (a oficial usa Cormorant/Montserrat).
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

export const metadata: Metadata = {
  title: "Renata Fidelis · Design de Interiores",
  description:
    "Projetos de interiores de alto padrão — estética refinada, materiais quentes e marcenaria autoral.",
  // Versão de teste: não deve competir com a página oficial nos buscadores.
  robots: { index: false, follow: false },
};

export default function Page() {
  return <LandingV2 fontVars={`${fraunces.variable} ${inter.variable}`} />;
}
