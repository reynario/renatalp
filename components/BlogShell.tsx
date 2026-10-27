import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import { WHATSAPP_URL } from "@/lib/constants";

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

// Moldura das páginas do blog, com a paleta Argila & Linho da landing.
export default function BlogShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`blog ${fraunces.variable} ${inter.variable}`}>
      <header className="topo">
        <div className="wrap nav">
          <Link href="/" className="logo">
            Renata <span>Fidelis</span>
          </Link>
          <Link href="/blog" className="link">
            Blog
          </Link>
        </div>
      </header>
      <main className="wrap">{children}</main>
      <section className="cta">
        <div className="wrap">
          <p className="rotulo">Projeto de interiores</p>
          <h2>Quer conversar sobre o seu ambiente?</h2>
          <p>Conte como é o seu espaço e receba um retorno em até 24 horas úteis.</p>
          <a className="btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </section>
      <footer className="rodape">
        <div className="wrap">
          Renata Fidelis · Design de Interiores · Feira de Santana, BA e online para todo o Brasil
        </div>
      </footer>
      <style>{CSS}</style>
    </div>
  );
}

const CSS = `
.blog{--linho:#F4EEE4;--cacau:#3B322B;--taupe:#8C7B6B;--terracota:#B5623C;--bronze:#A67C52;--branco:#FDFBF7;
  --display:var(--font-fraunces),Georgia,serif;--body:var(--font-inter),system-ui,sans-serif;
  background:var(--linho);color:var(--cacau);font-family:var(--body);min-height:100vh;font-size:17px;line-height:1.7}
.blog .wrap{max-width:760px;margin:0 auto;padding:0 20px}
.blog .topo{border-bottom:1px solid rgba(59,50,43,.1);background:var(--linho)}
.blog .nav{display:flex;align-items:center;justify-content:space-between;height:72px;max-width:1180px}
.blog .logo{font-family:var(--display);font-size:21px;font-weight:500}
.blog .logo span{color:var(--terracota)}
.blog .link{font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:var(--taupe)}
.blog main.wrap{padding:56px 20px 72px}
.blog h1{font-family:var(--display);font-weight:400;font-size:clamp(32px,5vw,46px);line-height:1.15;margin:0 0 16px}
.blog h2{font-family:var(--display);font-weight:400;font-size:clamp(24px,3.4vw,30px);line-height:1.25;margin:44px 0 12px}
.blog p{margin:0 0 18px}
.blog .rotulo{font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:var(--bronze);font-weight:500;margin-bottom:14px}
.blog .meta{color:var(--taupe);font-size:14px;margin-bottom:36px}
.blog .lista{list-style:none;padding:0;margin:32px 0 0;display:grid;gap:18px}
.blog .lista a{display:block;background:var(--branco);border:1px solid rgba(59,50,43,.08);border-radius:2px;padding:26px 28px}
.blog .lista h2{margin:0 0 8px;font-size:24px}
.blog .lista p{margin:0;color:var(--taupe);font-size:15.5px}
.blog article p a{text-decoration:underline;color:var(--terracota)}
.blog .faq{margin-top:48px;border-top:1px solid rgba(59,50,43,.12);padding-top:8px}
.blog .faq h3{font-family:var(--display);font-weight:500;font-size:20px;margin:26px 0 6px}
.blog .cta{background:var(--cacau);color:var(--linho);padding:64px 0;text-align:center}
.blog .cta h2{margin:0 0 10px;color:var(--linho)}
.blog .cta .rotulo{color:var(--bronze)}
.blog .btn{display:inline-block;margin-top:10px;background:var(--terracota);color:var(--branco);padding:15px 30px;border-radius:2px;font-size:14.5px;font-weight:500;letter-spacing:.03em}
.blog .rodape{padding:28px 0;font-size:13px;color:var(--taupe);text-align:center}
`;
