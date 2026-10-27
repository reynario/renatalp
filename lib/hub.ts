import { HUB_FORM_ID } from "./constants";

export type Contato = { nome: string; whatsapp: string; tipo: string; mensagem: string };

type CampoHub = { id: string; type?: string; label?: string; internalLabel?: string; options?: { id: string; label: string }[] };

const rotulo = (c: CampoHub) => String(c.internalLabel || c.label || "").toLowerCase();

// Liga cada campo do site ao campo do formulário do Hub pelo tipo ou pelo rótulo,
// para o Hub reconhecer nome e telefone e criar o lead do cliente 35.
function montarDados(campos: CampoHub[], c: Contato): Record<string, string> {
  const achar = (teste: (f: CampoHub) => boolean) => campos.find(teste);
  const dados: Record<string, string> = {};
  const nome = achar((f) => f.type === "name" || /^nome/.test(rotulo(f)));
  const fone = achar((f) => f.type === "phone" || /whats|telefone|celular/.test(rotulo(f)));
  const tipo = achar((f) => /tipo|projeto|ambiente/.test(rotulo(f)) && f !== nome && f !== fone);
  const msg = achar((f) => /conte|espa|mensagem|detalhe/.test(rotulo(f)) && f !== tipo);
  if (nome) dados[nome.id] = c.nome;
  if (fone) dados[fone.id] = c.whatsapp;
  if (tipo) {
    const opcao = tipo.options?.find((o) => o.label.toLowerCase() === c.tipo.toLowerCase());
    dados[tipo.id] = opcao ? opcao.id : c.tipo;
  }
  if (msg && c.mensagem) dados[msg.id] = c.mensagem;
  if (!nome || !fone) throw new Error("Formulário do Hub sem campo de nome ou telefone");
  return dados;
}

function utm(): Record<string, string> | null {
  const p = new URLSearchParams(location.search);
  const out: Record<string, string> = {};
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"]) {
    const v = p.get(k);
    if (v) out[k] = v;
  }
  return Object.keys(out).length ? out : null;
}

function gaClientId(): string | null {
  const m = document.cookie.match(/(?:^|; )_ga=GA\d\.\d\.(\d+\.\d+)/);
  return m ? m[1] : null;
}

// Envia para o Hub pelo próprio domínio do site (o worker.js repassa).
// Retorna false quando não há formulário configurado.
export async function enviarAoHub(c: Contato): Promise<boolean> {
  if (!HUB_FORM_ID) return false;
  const form = await fetch(`/api/public/forms/${HUB_FORM_ID}`).then((r) => {
    if (!r.ok) throw new Error(`Hub ${r.status}`);
    return r.json();
  });
  const resp = await fetch(`/api/forms/${HUB_FORM_ID}/submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: montarDados(form.fields || [], c),
      utm: utm(),
      partial: false,
      consent_lgpd: true,
      ga_client_id: gaClientId(),
    }),
  });
  if (!resp.ok) throw new Error(`Hub ${resp.status}`);
  return true;
}
