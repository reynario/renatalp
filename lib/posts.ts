// Artigos do blog, com publicado: true. Datas em AAAA-MM-DD. Um parágrafo pode
// trazer link no formato [texto](/caminho), que a página do artigo transforma em link.
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

export const posts: Post[] = [
  {
    slug: "quanto-custa-projeto-de-interiores",
    titulo: "Quanto custa um projeto de interiores em Feira de Santana",
    descricao:
      "Projeto de interiores a partir de R$ 497 por ambiente, entregue em 24 horas, ou R$ 3.000 o imóvel completo. Veja o que inclui e como pedir o seu.",
    palavraChave: "quanto custa projeto de interiores",
    publicadoEm: "2026-11-12",
    publicado: true,
    introducao: [
      "Se você está pensando em reformar, mobiliar ou planejar um ambiente, é natural querer saber quanto custa projeto de interiores antes de qualquer conversa. Faz sentido. Você quer comparar, entender o que recebe e decidir com calma.",
      "Neste artigo, eu explico o que entra em um projeto, a diferença entre projetar um ambiente ou o imóvel inteiro, os valores com que trabalho e os prazos de entrega. Também conto por que o projeto costuma pagar a si mesmo na hora da marcenaria.",
      "Sou a Renata Fidelis, designer de interiores e projetista de móveis planejados em Feira de Santana. São 23 anos dentro da marcenaria e mais de 1.000 ambientes projetados. Atendo aqui na cidade e também online, para todo o Brasil.",
    ],
    secoes: [
      {
        titulo: "O que está incluído em um projeto de interiores",
        paragrafos: [
          "Um projeto de interiores é o desenho completo de como o seu ambiente vai funcionar e como ele vai ficar. Ele organiza a circulação, os móveis, a luz e os materiais antes de qualquer obra começar.",
          "Na prática, você recebe a planta com o layout, que é a distribuição dos móveis no espaço. Recebe também as imagens em 3D, chamadas de renders, que mostram o ambiente pronto com cores, texturas e iluminação.",
          "Quando há móveis planejados, o projeto traz o detalhamento da marcenaria. Detalhamento é o conjunto de desenhos técnicos com divisões internas, portas, gavetas e acabamentos. É esse material que o marceneiro usa para orçar e produzir.",
          "Também entram as escolhas de acabamento: o padrão do MDF, as ferragens, a bancada e a iluminação. Como tenho pós-graduação em Iluminação e em Neurodesign, olho com cuidado para a luz e para a sensação que o espaço provoca em quem vive nele.",
          "O objetivo é simples. Você sabe exatamente o que vai receber antes de gastar com obra e móveis.",
        ],
      },
      {
        titulo: "Projeto de 1 ambiente ou imóvel completo: qual escolher",
        paragrafos: [
          "A escolha depende do tamanho da mudança que você quer fazer.",
          "O projeto de 1 ambiente é ideal quando o foco está em um espaço específico. Pode ser a cozinha que não funciona, o quarto que precisa de armário ou a sala que pede uma nova composição. Você resolve o ponto que mais incomoda, com atenção total a ele.",
          "O imóvel completo faz mais sentido quando você está mudando de casa, recebendo um apartamento novo ou reformando vários cômodos de uma vez. Aqui, o ganho está na unidade. Cores, materiais e marcenaria conversam entre si, e a casa inteira ganha a mesma linguagem.",
          "Uma boa forma de decidir é perguntar: o que eu vou mexer nos próximos meses? Se a resposta é um cômodo, comece por ele. Se são vários, pensar no conjunto evita retrabalho e escolhas que não combinam depois.",
          "Você pode conhecer o formato do [projeto de 1 ambiente](/#um-ambiente) na página inicial do site.",
        ],
      },
      {
        titulo: "Quanto custa: a partir de R$ 497 por ambiente e R$ 3.000 o imóvel completo",
        paragrafos: [
          "Chegamos à pergunta principal: quanto custa projeto de interiores comigo.",
          "O projeto de 1 ambiente começa a partir de R$ 497. O projeto do imóvel completo começa a partir de R$ 3.000.",
          "Uso a expressão \"a partir de\" porque cada casa tem a sua realidade. O valor final depende do tamanho do espaço, da quantidade de marcenaria e do nível de detalhamento que o seu caso pede. Antes de começar, você recebe o valor fechado, sem surpresa no meio do caminho.",
          "Quando você pesquisa projeto de interiores preço, vai encontrar formatos muito diferentes. Alguns cobram por metro quadrado, outros por hora, outros por etapa. Por isso, mais do que comparar números soltos, vale comparar o que está incluído em cada proposta.",
          "Pergunte sempre: o projeto traz detalhamento de marcenaria? Traz imagens em 3D? Indica os materiais? Essas respostas dizem mais sobre o valor real do que o preço sozinho.",
        ],
      },
      {
        titulo: "Por que o projeto economiza na marcenaria",
        paragrafos: [
          "Pode parecer que o projeto é um gasto a mais. Na prática, ele costuma proteger o investimento maior, que é a marcenaria.",
          "Móvel planejado é feito sob medida. Depois de produzido, qualquer erro custa caro para corrigir. Um nicho que não comporta a geladeira, uma porta que bate no puxador do armário vizinho ou uma tomada escondida atrás de um módulo são problemas que aparecem quando já é tarde.",
          "O projeto resolve tudo isso no papel, onde mudar custa pouco. Cada eletrodoméstico entra com a medida que o fabricante indica na ficha técnica. Cada porta é desenhada com o espaço de abertura previsto.",
          "Há também um ganho na hora de orçar. Com o detalhamento em mãos, você leva o mesmo projeto a mais de um marceneiro e compara propostas iguais. Sem projeto, cada profissional imagina uma solução diferente, e a comparação fica impossível.",
          "Minha trajetória ajuda aqui. Foram 23 anos dentro da marcenaria antes e durante a carreira no design. Eu desenho pensando em como o móvel vai ser cortado, montado e usado no dia a dia.",
        ],
      },
      {
        titulo: "Prazo: 24 horas para 1 ambiente, 7 dias para o completo",
        paragrafos: [
          "Prazo importa, principalmente quando a obra já tem data ou o marceneiro está esperando o desenho.",
          "O projeto de 1 ambiente é entregue em 24 horas. O projeto do imóvel completo é entregue em 7 dias.",
          "Esses prazos contam a partir do momento em que tenho as informações necessárias. Isso inclui as medidas do espaço, fotos, a lista de eletrodomésticos e uma boa conversa sobre como você usa cada cômodo.",
          "Quanto mais claro o seu pedido, mais fiel o projeto fica à sua rotina. Por isso, a conversa inicial é parte essencial do trabalho. É nela que eu entendo quem mora na casa, o que incomoda hoje e o que você quer sentir ao entrar no ambiente.",
        ],
      },
      {
        titulo: "Como pedir o seu, em Feira de Santana ou online",
        paragrafos: [
          "Se você procura uma designer de interiores em Feira de Santana, podemos conversar e, quando fizer sentido, visitar o espaço.",
          "Se você mora em outra cidade, o atendimento online funciona muito bem. Você envia as medidas, as fotos e as suas referências. Eu devolvo o projeto completo, pronto para levar ao marceneiro da sua região.",
          "O caminho é simples:",
          "1. Você me chama no WhatsApp e conta o que quer mudar.",
          "2. Combinamos o formato: 1 ambiente ou imóvel completo.",
          "3. Você envia medidas, fotos e a lista do que precisa caber no espaço.",
          "4. Eu desenvolvo o projeto e entrego no prazo combinado.",
          "Se tiver dúvida sobre como medir, eu oriento. Não precisa chegar com tudo pronto.",
        ],
      },
      {
        titulo: "Conclusão",
        paragrafos: [
          "Saber quanto custa projeto de interiores é o primeiro passo. O segundo é entender o que esse valor entrega: um ambiente pensado para a sua rotina, uma marcenaria sem erro e a tranquilidade de saber como tudo vai ficar antes de começar.",
          "Comigo, o projeto de 1 ambiente começa a partir de R$ 497, com entrega em 24 horas. O imóvel completo começa a partir de R$ 3.000, com entrega em 7 dias. Em Feira de Santana ou online, para todo o Brasil.",
        ],
      },
    ],
    perguntas: [
      {
        pergunta: "Quanto custa um projeto de interiores de 1 ambiente?",
        resposta: "A partir de R$ 497, com entrega em 24 horas depois de receber as informações do espaço.",
      },
      {
        pergunta: "O projeto do imóvel completo leva quanto tempo?",
        resposta: "7 dias, contados a partir do envio das medidas, fotos e referências.",
      },
      {
        pergunta: "Vocês atendem fora de Feira de Santana?",
        resposta:
          "Sim. O atendimento online vale para todo o Brasil, e o projeto sai pronto para o marceneiro da sua cidade.",
      },
    ],
  },
];

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
