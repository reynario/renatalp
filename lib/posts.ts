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
  {
    slug: "projeto-de-interiores-online",
    titulo: "Projeto de interiores online: como funciona e o que você recebe em 24 horas",
    descricao:
      "Veja como funciona o projeto de interiores online: o que enviar, o que você recebe e o prazo de 24 horas para 1 ambiente. A partir de R$ 497.",
    palavraChave: "projeto de interiores online",
    publicadoEm: "2026-11-19",
    publicado: true,
    introducao: [
      "Muita gente acha que projeto de interiores online é um projeto pela metade, feito sem conhecer a casa. Não é. Quando o processo é bem conduzido, você recebe o mesmo material de um atendimento presencial, sem depender de agenda de visita e morando em qualquer cidade.",
      "Neste artigo eu explico como funciona o meu atendimento online, o que você precisa me enviar, o que recebe de volta e em quanto tempo.",
      "Sou a Renata Fidelis, designer de interiores e projetista de móveis planejados em Feira de Santana. São 23 anos dentro da marcenaria e mais de 1.000 ambientes projetados, boa parte deles para clientes e lojas de outras cidades, sempre à distância.",
    ],
    secoes: [
      {
        titulo: "O que é um projeto de interiores online",
        paragrafos: [
          "É o projeto completo do seu ambiente, feito a partir das informações que você envia: medidas, fotos e uma conversa sobre a sua rotina. A diferença para o presencial está só em quem mede o espaço. No online, você mede com a minha orientação.",
          "O resultado é o mesmo. Você recebe a planta com a distribuição dos móveis, as imagens em 3D que mostram o ambiente pronto e o detalhamento técnico que o marceneiro usa para orçar e fabricar.",
        ],
      },
      {
        titulo: "O que você precisa me enviar",
        paragrafos: [
          "Quanto melhor a informação, mais fiel o projeto fica à sua casa. Eu peço quatro coisas.",
          "1. As medidas do ambiente: largura, comprimento e pé-direito, além da posição de portas, janelas, tomadas e pontos de água.",
          "2. Fotos de todos os lados do cômodo, com boa luz.",
          "3. A lista do que precisa caber ali: eletrodomésticos com modelo, móveis que ficam e o que você quer guardar.",
          "4. Referências do que você gosta e, tão importante quanto, do que não gosta.",
          "Não precisa chegar com tudo pronto. Se tiver dúvida de como medir, eu explico o passo a passo pelo WhatsApp. Uma trena e vinte minutos resolvem a maioria dos ambientes.",
        ],
      },
      {
        titulo: "Como é a conversa inicial",
        paragrafos: [
          "Antes de desenhar, eu preciso entender como você vive. Quem mora na casa, quem cozinha, onde cada um trabalha ou estuda, o que incomoda hoje e o que você quer sentir ao entrar no ambiente.",
          "Essa conversa acontece pelo WhatsApp, por mensagem ou por chamada, no horário que funcionar para você. É nela que o projeto deixa de ser um desenho bonito e passa a ser a solução para a sua rotina.",
        ],
      },
      {
        titulo: "O que você recebe",
        paragrafos: [
          "O projeto de 1 ambiente chega com três entregas.",
          "A primeira é a planta com o layout: onde fica cada móvel, as medidas de circulação e a posição dos pontos elétricos que o projeto pede.",
          "A segunda são as imagens em 3D, chamadas de renders. Elas mostram o ambiente pronto, com cores, materiais e iluminação. É o momento de ver, antes de gastar, se o resultado é o que você imagina.",
          "A terceira é o detalhamento da marcenaria: os desenhos técnicos com divisões internas, portas, gavetas, ferragens e acabamentos. Com ele, você pede orçamento a mais de um marceneiro e compara propostas iguais.",
          "Junto com o projeto vem a orientação das escolhas do ambiente: cor de parede, piso, bancada e iluminação. O olhar é o seu, do que funciona para a sua casa, e não o de quem precisa vender um produto.",
        ],
      },
      {
        titulo: "Em quanto tempo fica pronto",
        paragrafos: [
          "O projeto de 1 ambiente é entregue em 24 horas. O prazo conta a partir do momento em que tenho as medidas, as fotos e a conversa inicial feita.",
          "O projeto do imóvel completo é entregue em 7 dias.",
          "Consigo trabalhar com esses prazos porque passei 23 anos desenhando móveis planejados todos os dias. O processo já está organizado para que nada dependa de idas e vindas.",
        ],
      },
      {
        titulo: "Quanto custa",
        paragrafos: [
          "O projeto de 1 ambiente começa a partir de R$ 497. O imóvel completo começa a partir de R$ 3.000. O valor final depende do tamanho do espaço e da quantidade de marcenaria, e você recebe o valor fechado antes de começar.",
          "Expliquei os valores com mais detalhe no artigo [quanto custa um projeto de interiores](/blog/quanto-custa-projeto-de-interiores).",
        ],
      },
      {
        titulo: "O marceneiro da minha cidade consegue executar?",
        paragrafos: [
          "Consegue. O detalhamento é feito na linguagem da marcenaria, com as medidas e as especificações que qualquer profissional usa para cortar e montar. Você não fica preso a uma loja ou a um fornecedor.",
          "Se o marceneiro tiver dúvida durante a execução, ele pode falar comigo. Projeto bom é o que sai do papel sem retrabalho.",
        ],
      },
      {
        titulo: "Conclusão",
        paragrafos: [
          "Projeto de interiores online funciona quando três coisas estão bem feitas: as medidas, a conversa sobre a rotina e o detalhamento para a marcenaria. Com isso, a distância deixa de ser um problema.",
          "Comigo, o projeto de 1 ambiente começa a partir de R$ 497, com entrega em 24 horas, para qualquer cidade do Brasil. Você pode conhecer o formato do [projeto de 1 ambiente](/#um-ambiente) na página inicial.",
        ],
      },
    ],
    perguntas: [
      {
        pergunta: "Projeto de interiores online funciona de verdade?",
        resposta:
          "Sim. Com as medidas, as fotos e uma conversa sobre a rotina da casa, o projeto sai com planta, imagens em 3D e detalhamento, como no atendimento presencial.",
      },
      {
        pergunta: "Preciso contratar alguém para medir o ambiente?",
        resposta: "Não. Você mesmo mede com uma trena, com a minha orientação pelo WhatsApp.",
      },
      {
        pergunta: "Em quanto tempo recebo o projeto?",
        resposta:
          "O projeto de 1 ambiente é entregue em 24 horas depois do envio das informações. O imóvel completo, em 7 dias.",
      },
      {
        pergunta: "Posso usar o marceneiro da minha cidade?",
        resposta: "Sim. O detalhamento sai pronto para qualquer marceneiro orçar e fabricar.",
      },
    ],
  },
  {
    slug: "projeto-de-cozinha-planejada",
    titulo: "Projeto de cozinha planejada: o que definir antes de chamar o marceneiro",
    descricao: "Projeto de cozinha planejada: medidas dos eletrodomésticos, torre quente, ilha, tomadas e coifa. Veja o que definir antes de chamar o marceneiro.",
    palavraChave: "projeto de cozinha planejada",
    publicadoEm: "2026-11-17",
    publicado: true,
    introducao: [
      "Um bom projeto de cozinha planejada começa muito antes do primeiro orçamento de marcenaria. Ele começa quando você decide o que precisa caber, como você cozinha e por onde você circula no dia a dia.",
      "A cozinha é o ambiente com mais detalhes técnicos da casa. Tem água, gás, calor, eletricidade e muitos aparelhos. Por isso, é também onde um erro de medida mais aparece e mais custa para corrigir.",
      "Sou a Renata Fidelis, designer de interiores e projetista de móveis planejados em Feira de Santana, com 23 anos de marcenaria. Neste artigo, reúno o que eu defino com cada cliente antes de o marceneiro tirar a primeira medida."
    ],
    secoes: [
      {
        titulo: "As medidas dos eletrodomésticos vêm primeiro",
        paragrafos: [
          "Muita gente escolhe o armário e depois tenta encaixar a geladeira. O caminho certo é o inverso.",
          "Cada eletrodoméstico tem uma ficha técnica, o documento do fabricante com as dimensões do aparelho e o espaço que ele precisa em volta para ventilar e abrir a porta. É essa ficha que define o tamanho dos nichos, e não uma medida padrão.",
          "Por isso, eu peço a lista completa antes de desenhar: geladeira, fogão ou cooktop, forno, micro-ondas, lava-louças, depurador ou coifa. Se você ainda vai comprar algum, vale escolher o modelo antes do projeto, ou ao menos a faixa de tamanho.",
          "Quando falamos em medidas de cozinha planejada, o erro mais comum é o nicho da geladeira. A pessoa troca de modelo depois do móvel pronto, e a nova não entra ou fica sem ventilação. Com a ficha técnica no projeto, esse risco cai muito.",
          "Já vivi isso em um projeto. A cliente tinha escolhido uma geladeira duplex de 82 cm de largura, e eu deixei um espaço de 95 cm, já contando a ventilação e a abertura da porta. A cozinha estava praticamente pronta, com móveis planejados, bancadas de pedra, revestimentos e pontos elétricos instalados.",
          "Sem me avisar, ela comprou uma geladeira side by side, acreditando que caberia no mesmo espaço. O aparelho entrou, mas a porta batia na parede, não abria por completo e as gavetas não saíam.",
          "Para resolver, foi preciso desmontar parte dos móveis, refazer o armário superior, reduzir 50 cm da bancada da ilha, criar uma despensa vertical e mudar a tomada de lugar. A cozinha ficou pronta para a geladeira nova, mas com retrabalho, custo extra e atraso na obra.",
          "A lição é que não basta o eletrodoméstico caber no espaço. Ele precisa de ventilação e de folga para a porta abrir inteira. E qualquer troca de modelo durante a obra deve passar pelo profissional responsável antes da compra."
        ]
      },
      {
        titulo: "Torre quente, pia e cooktop: a ordem que poupa passos",
        paragrafos: [
          "Torre quente é a coluna de armário onde ficam o forno e o micro-ondas, um sobre o outro, na altura das mãos. Ela evita que você precise se abaixar para tirar uma assadeira do forno.",
          "A posição dela faz toda a diferença. Eu defendo a torre quente longe da pia e perto da bancada de preparo. Assim, você tira a travessa quente e apoia logo ao lado, sem atravessar a cozinha com ela nas mãos.",
          "Esse cuidado poupa as costas e deixa a rotina mais segura. Também evita que o vapor e o calor fiquem perto da área molhada.",
          "A lógica geral da cozinha segue o caminho dos alimentos. Primeiro você guarda, depois lava, depois prepara e por fim cozinha. Quando geladeira, pia, bancada e cooktop seguem essa sequência, você dá menos passos e cozinha com mais conforto.",
          "Entre a pia e o cooktop, o ideal é ter uma bancada livre para cortar e montar os pratos. É ali que a cozinha realmente acontece."
        ]
      },
      {
        titulo: "Ilha ou península: quando cada uma funciona",
        paragrafos: [
          "A cozinha planejada com ilha é um desejo frequente. Ilha é uma bancada solta no meio do ambiente, com acesso pelos quatro lados. Península é uma bancada presa à parede ou ao armário por uma das pontas.",
          "A ilha funciona bem quando há espaço para circular confortavelmente em volta dela. Ela pode receber o cooktop, a pia ou servir apenas como área de apoio e refeições rápidas.",
          "A península costuma ser a melhor solução em cozinhas mais estreitas ou integradas à sala. Ela entrega bancada extra e lugar para sentar, sem fechar a passagem.",
          "A pergunta que eu faço é: quantas pessoas usam a cozinha ao mesmo tempo? Se for comum ter duas ou mais cozinhando juntas, a circulação precisa ser pensada com ainda mais cuidado.",
          "Se a ilha receber cooktop ou pia, o projeto precisa prever a passagem de água, esgoto, gás e energia pelo piso. Isso é decidido antes da obra, não depois."
        ]
      },
      {
        titulo: "Tomadas, coifa e duto: o que costuma ser esquecido",
        paragrafos: [
          "Algumas decisões parecem pequenas e acabam sendo as mais difíceis de corrigir.",
          "A primeira são as tomadas. É comum o marceneiro instalar o módulo e a tomada ficar escondida atrás dele. No projeto, cada ponto elétrico é marcado no lugar certo: para os aparelhos embutidos, para a bancada e para os eletroportáteis do dia a dia.",
          "A segunda é a coifa. Coifa é o equipamento sobre o cooktop que puxa a fumaça e a gordura. Quando ela tem saída para fora, precisa de um duto, que é o tubo que leva o ar até o exterior.",
          "Muitas vezes, o armário aéreo é desenhado sem espaço para esse duto passar. O resultado é um armário cortado na obra ou uma coifa instalada de forma improvisada. Prever o caminho do duto no projeto resolve isso.",
          "A terceira é a abertura das portas. Uma porta de armário que bate no puxador vizinho, na geladeira ou na parede incomoda todos os dias. No projeto, eu confiro o giro de cada porta e de cada gaveta, especialmente nos cantos."
        ]
      },
      {
        titulo: "Materiais: MDF, ferragens e bancada",
        paragrafos: [
          "O MDF é a chapa de madeira reconstituída usada na maior parte dos móveis planejados. Ele vem com diferentes acabamentos e padrões, e cada um tem um comportamento na limpeza e no dia a dia. Na cozinha, que tem umidade e gordura, a escolha do acabamento merece atenção.",
          "As ferragens são as dobradiças, corrediças de gaveta e sistemas de abertura. São elas que fazem a porta fechar com suavidade e a gaveta deslizar com peso dentro. Uma marcenaria bonita com ferragem fraca perde qualidade rápido.",
          "A bancada é a superfície de trabalho, normalmente em pedra natural ou material industrializado. Ela define a altura de uso, a instalação da pia e do cooktop e boa parte da estética da cozinha.",
          "No projeto, esses três itens são escolhidos juntos. A cor do MDF conversa com a bancada, e as ferragens são indicadas de acordo com o peso e o uso de cada módulo.",
          "A iluminação embutida entra na mesma conta. Na cozinha, é comum ter fita de LED sob os armários aéreos ou dentro dos nichos. E aqui o barato pode sair muito caro.",
          "Em um dos meus projetos, já na fase final da instalação dos móveis, orientei o cliente sobre a compra das fitas de LED e indiquei fornecedores de confiança. Como o orçamento estava apertado, ele comprou um material muito mais barato, de procedência duvidosa.",
          "As fitas foram instaladas e tudo parecia funcionar bem. No fim do ano, a família viajou e, na volta, encontrou parte do painel da sala de TV queimada, com sinais de um princípio de incêndio.",
          "Foi preciso trocar o painel, desmontar móveis para retirar todas as fitas da casa, revisar a instalação elétrica e recuperar a pintura danificada. O que parecia economia virou um prejuízo muito maior, além do risco para a família.",
          "Por isso, no projeto, eu indico o material e o fornecedor da iluminação junto com o MDF e as ferragens. Qualidade de material e de instalação não é luxo. É segurança."
        ]
      },
      {
        titulo: "O que o marceneiro precisa receber",
        paragrafos: [
          "Quando o projeto de cozinha planejada está pronto, o marceneiro deve receber um material que não deixe espaço para adivinhação.",
          "Isso inclui:",
          "1. Planta com as medidas reais do ambiente, conferidas no local.",
          "2. Lista dos eletrodomésticos com modelo e ficha técnica.",
          "3. Detalhamento de cada módulo: portas, gavetas, prateleiras e divisões internas.",
          "4. Posição de tomadas, pontos de água, esgoto e gás.",
          "5. Caminho do duto da coifa, quando houver.",
          "6. Especificação do MDF, das ferragens e da bancada.",
          "7. Imagens em 3D para mostrar como a cozinha deve ficar.",
          "Com esse material, você também pode pedir orçamento a mais de um marceneiro e comparar propostas iguais. Se quiser entender os valores e prazos do projeto, eu explico em [quanto custa um projeto de interiores](/blog/quanto-custa-projeto-de-interiores)."
        ]
      },
      {
        titulo: "Conclusão",
        paragrafos: [
          "Um projeto de cozinha planejada bem feito é aquele que resolve tudo no papel. As medidas dos eletrodomésticos vêm primeiro, a torre quente fica no lugar que poupa passos, a ilha ou a península respeita a circulação e nenhuma tomada fica escondida.",
          "Assim, a marcenaria chega para executar, e não para improvisar. E você ganha uma cozinha que funciona do jeito que você cozinha.",
          "Atendo em Feira de Santana e online, para todo o Brasil."
        ]
      }
    ],
    perguntas: [
      {
        pergunta: "O que é torre quente na cozinha planejada?",
        resposta: "É a coluna de armário onde ficam forno e micro-ondas, um sobre o outro, na altura das mãos."
      },
      {
        pergunta: "Preciso comprar os eletrodomésticos antes do projeto?",
        resposta: "O ideal é ter os modelos definidos, porque a ficha técnica de cada um define o tamanho dos nichos."
      },
      {
        pergunta: "Ilha ou península: qual é melhor?",
        resposta: "A ilha pede espaço para circular em volta. A península costuma funcionar melhor em cozinhas estreitas ou integradas."
      }
    ]
  }
];

// Data de hoje no fuso de Feira de Santana, no momento do build. Artigo com
// publicadoEm no futuro fica fora do site até um build nesse dia ou depois.
// BLOG_HOJE=AAAA-MM-DD força a data (para conferir antes).
function hoje(): string {
  if (process.env.BLOG_HOJE) return process.env.BLOG_HOJE;
  return new Date().toLocaleDateString("en-CA", { timeZone: "America/Bahia" });
}

export function postsPublicados(): Post[] {
  const h = hoje();
  return posts
    .filter((p) => p.publicado && p.publicadoEm <= h)
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
