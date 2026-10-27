import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogShell from "@/components/BlogShell";
import { AUTORA, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { dataPorExtenso, postsPublicados } from "@/lib/posts";

export const dynamicParams = false;

// O export estático exige ao menos um slug. Sem artigo publicado, gera só
// /blog/em-breve/, que cai no 404 e não entra no sitemap.
export function generateStaticParams() {
  const slugs = postsPublicados().map((p) => ({ slug: p.slug }));
  return slugs.length ? slugs : [{ slug: "em-breve" }];
}

function buscar(slug: string) {
  return postsPublicados().find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = buscar((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: `${post.titulo} | Renata Fidelis`,
    description: post.descricao,
    alternates: { canonical: url },
    authors: [{ name: AUTORA }],
    openGraph: {
      type: "article",
      url,
      title: post.titulo,
      description: post.descricao,
      siteName: SITE_NAME,
      locale: "pt_BR",
      publishedTime: post.publicadoEm,
      modifiedTime: post.atualizadoEm || post.publicadoEm,
      authors: [AUTORA],
      images: [post.imagem || "/images/hero-og.jpg"],
    },
  };
}

export default async function Artigo({ params }: { params: Promise<{ slug: string }> }) {
  const post = buscar((await params).slug);
  if (!post) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.titulo,
      description: post.descricao,
      keywords: post.palavraChave,
      datePublished: post.publicadoEm,
      dateModified: post.atualizadoEm || post.publicadoEm,
      inLanguage: "pt-BR",
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      image: `${SITE_URL}${post.imagem || "/images/hero-og.jpg"}`,
      author: { "@type": "Person", name: AUTORA, jobTitle: "Designer de Interiores", url: SITE_URL },
      publisher: { "@id": `${SITE_URL}/#negocio` },
    },
    ...(post.perguntas.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.perguntas.map((q) => ({
              "@type": "Question",
              name: q.pergunta,
              acceptedAnswer: { "@type": "Answer", text: q.resposta },
            })),
          },
        ]
      : []),
  ];

  return (
    <BlogShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <p className="rotulo">
          <Link href="/blog">Blog</Link>
        </p>
        <h1>{post.titulo}</h1>
        <p className="meta">
          Por {AUTORA}, designer de interiores ·{" "}
          <time dateTime={post.publicadoEm}>{dataPorExtenso(post.publicadoEm)}</time>
          {post.atualizadoEm ? (
            <>
              {" "}· atualizado em <time dateTime={post.atualizadoEm}>{dataPorExtenso(post.atualizadoEm)}</time>
            </>
          ) : null}
        </p>
        {post.introducao.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
        {post.secoes.map((s) => (
          <section key={s.titulo}>
            <h2>{s.titulo}</h2>
            {s.paragrafos.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </section>
        ))}
        <p>
          Quer saber como isso fica no seu espaço? <a href={WHATSAPP_URL}>Fale comigo pelo WhatsApp</a>{" "}
          ou veja os <Link href="/#projetos">projetos no portfólio</Link>.
        </p>
        {post.perguntas.length ? (
          <section className="faq">
            <h2>Perguntas frequentes</h2>
            {post.perguntas.map((q) => (
              <div key={q.pergunta}>
                <h3>{q.pergunta}</h3>
                <p>{q.resposta}</p>
              </div>
            ))}
          </section>
        ) : null}
      </article>
    </BlogShell>
  );
}
