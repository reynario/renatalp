import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const title = "Renata Fidelis — Design de Interiores";
const description =
  "Elegância, conforto e funcionalidade no espaço certo. Projetos de interiores sofisticados e acolhedores para quem valoriza o bem-estar em casa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Renata Fidelis — Design de Interiores",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        // Preview exibido ao compartilhar o link (WhatsApp, Instagram etc.).
        // Usa a mesma foto do hero: public/images/hero.jpg
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Renata Fidelis — Design de Interiores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
