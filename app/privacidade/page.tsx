import type { Metadata } from "next";
import BlogShell from "@/components/BlogShell";
import { AUTORA, EMAIL, SITE_URL, TELEFONE } from "@/lib/constants";

const ATUALIZADA_EM = "13 de novembro de 2026";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como ${AUTORA} Design de Interiores trata os dados enviados pelo site, em linha com a LGPD.`,
  alternates: { canonical: `${SITE_URL}/privacidade` },
};

// Texto-base em linguagem simples, alinhado à LGPD (Lei 13.709/2018).
// Revisar com a Renata sempre que mudar ferramenta de atendimento ou de medição.
export default function Privacidade() {
  return (
    <BlogShell>
      <article>
        <p className="rotulo">Privacidade</p>
        <h1>Política de Privacidade</h1>
        <p className="meta">Atualizada em {ATUALIZADA_EM}</p>

        <p>
          Este site é de {AUTORA}, designer de interiores em Feira de Santana, BA. Aqui está, de
          forma direta, quais dados são coletados, para que servem e como você pode pedir acesso,
          correção ou exclusão, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).
        </p>

        <h2>Quais dados coletamos</h2>
        <p>
          <strong>Dados que você envia:</strong> no formulário de contato, nome, número de
          WhatsApp, tipo de projeto e a descrição do seu espaço. Se você nos chama pelo WhatsApp,
          recebemos também o seu número e as mensagens da conversa.
        </p>
        <p>
          <strong>Dados de navegação:</strong> páginas visitadas, origem da visita (por exemplo, um
          anúncio ou uma busca no Google), tipo de aparelho e navegador, e cookies de medição. Esses
          dados não identificam você pelo nome.
        </p>

        <h2>Para que usamos</h2>
        <p>
          Para responder ao seu contato, enviar orçamento e conduzir o projeto, se você contratar.
          Os dados de navegação servem para entender quais páginas e anúncios funcionam melhor e
          melhorar o site. Não vendemos seus dados e não enviamos mensagens sem que você tenha
          entrado em contato antes.
        </p>
        <p>
          A base legal é o seu consentimento, dado ao marcar a caixa do formulário, e os
          procedimentos preliminares a um contrato que você pediu (o orçamento).
        </p>

        <h2>Com quem compartilhamos</h2>
        <p>
          Os dados ficam em ferramentas que nos ajudam a atender: o sistema de gestão de contatos
          usado pela equipe de marketing que presta serviço para {AUTORA}, o WhatsApp e as
          ferramentas de medição e de anúncios, como Google Analytics, Google Tag Manager e Meta
          (Facebook e Instagram). Cada uma trata os dados apenas para a finalidade descrita aqui.
        </p>

        <h2>Cookies</h2>
        <p>
          Usamos cookies para medir visitas e o resultado dos anúncios. Você pode bloqueá-los ou
          apagá-los nas configurações do seu navegador; o site continua funcionando normalmente.
        </p>

        <h2>Por quanto tempo guardamos</h2>
        <p>
          Os dados de contato ficam guardados enquanto houver conversa ou projeto em andamento e
          por até 2 anos depois do último contato, salvo quando a lei exigir prazo maior (por
          exemplo, dados de contrato e nota fiscal).
        </p>

        <h2>Seus direitos</h2>
        <p>
          Você pode, a qualquer momento, pedir para saber quais dados temos sobre você, corrigir,
          apagar, retirar o consentimento ou pedir que paremos de usar seus dados. Basta escrever
          para <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ou chamar no WhatsApp{" "}
          <a href={`https://wa.me/${TELEFONE.replace(/\D/g, "")}`}>(75) 98305-5400</a>. Respondemos
          em até 15 dias.
        </p>

        <h2>Contato</h2>
        <p>
          Responsável pelo tratamento dos dados: {AUTORA}, Feira de Santana, BA. E-mail:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </article>
    </BlogShell>
  );
}
