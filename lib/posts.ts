// Artigos do blog. Cada artigo só entra aqui depois da revisão da Renata
// (com 2 exemplos reais) e com publicado: true. Datas em AAAA-MM-DD.
export type Secao = { titulo: string; paragrafos: string[] };
export type Pergunta = { pergunta: string; resposta: string };

export type Post = {
  slug: string;
  titulo: string;
  descricao: string;
  palavraChave: string;
  publicadoEm: string;
  atualizadoEm?: string;
  publicado: boolean;
  imagem?: string;
  introducao: string[];
  secoes: Secao[];
  perguntas: Pergunta[];
};

export const posts: Post[] = [];

export function postsPublicados(): Post[] {
  return posts
    .filter((p) => p.publicado)
    .sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm));
}

export function dataPorExtenso(iso: string): string {
  const [a, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(a, m - 1, d)).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
