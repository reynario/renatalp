export const WHATSAPP_URL =
  "https://wa.me/5575983055400?text=Ol%C3%A1%20Renata!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20interiores.";

export const TELEFONE = "+5575983055400";

// Link de WhatsApp com mensagem própria de cada ponto do site. A mensagem muda
// conforme a origem (seção 1 ambiente, lojas, contato...) para a Renata saber
// de onde a pessoa veio; o atributo data-origem no link leva a mesma origem
// para o dataLayer (ver RastreioContato).
export function waLink(texto: string): string {
  return `https://wa.me/5575983055400?text=${encodeURIComponent(texto)}`;
}

export const WA_MSG = {
  contato: "Olá, Renata! Vim pelo site e gostaria de conversar sobre um projeto de interiores.",
  formulario: "Olá, Renata! Vim pelo site e quero solicitar um orçamento de projeto.",
  flutuante: "Olá, Renata! Estou no seu site e gostaria de tirar uma dúvida sobre projeto de interiores.",
  umAmbiente: "Olá, Renata! Vim pelo site e quero saber mais sobre o projeto de 1 ambiente.",
  lojas: "Olá, Renata! Vim pelo site. Tenho uma loja ou marcenaria e quero saber sobre os projetos online.",
  blog: "Olá, Renata! Li um artigo no seu site e gostaria de conversar sobre o meu espaço.",
} as const;

export const INSTAGRAM_URL = "https://www.instagram.com/renatafidelis80/";

export const INSTAGRAM_HANDLE = "@renatafidelis80";

export const EMAIL = "renatafidelis80@gmail.com";

export const SITE_URL = "https://renatafidelis.com.br";

export const SITE_NAME = "Renata Fidelis | Design de Interiores";

export const AUTORA = "Renata Fidelis";

// Formulário 17 do RN Hub (form-lp-renata, cliente 35). O envio passa pelo worker.js,
// que repassa só este formulário para o Hub. Com 0, o site manda para o WhatsApp.
export const HUB_FORM_ID = 17;
