import type { Metadata } from "next";
import Link from "next/link";
import BlogShell from "@/components/BlogShell";
import { dataPorExtenso, postsPublicados } from "@/lib/posts";

const posts = postsPublicados();

export const metadata: Metadata = {
  title: "Blog | Renata Fidelis, Design de Interiores em Feira de Santana",
  description:
    "Artigos sobre projeto de interiores, móveis planejados e marcenaria, escritos pela designer Renata Fidelis.",
  alternates: { canonical: "/blog" },
  // Sem artigo publicado, a página fica fora do Google para não indexar página vazia.
  robots: posts.length ? undefined : { index: false, follow: true },
};

export default function Blog() {
  return (
    <BlogShell>
      <p className="rotulo">Blog</p>
      <h1>Projeto de interiores, do desenho à marcenaria</h1>
      <p>
        O que eu aprendi em mais de 20 anos desenhando móveis e ambientes, para você decidir com
        mais segurança antes de chamar o marceneiro.
      </p>
      {posts.length ? (
        <ul className="lista">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>
                <h2>{p.titulo}</h2>
                <p>
                  {dataPorExtenso(p.publicadoEm)} · {p.descricao}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="meta">Os primeiros artigos chegam em novembro.</p>
      )}
    </BlogShell>
  );
}
