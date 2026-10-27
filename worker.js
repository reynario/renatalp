/**
 * Worker do site renatafidelis.com.br.
 * Serve o export estático (./out) e repassa ao RN Hub só as chamadas do
 * formulário 17 (form-lp-renata, cliente 35). Como o navegador fala com o
 * próprio domínio do site, não há CORS. Mesmo padrão do worker da LP
 * "Empresa de Filtro" no repositório do Hub (cloudflare-lp/).
 */
const UPSTREAM = "https://rnhub.rndigitalmidia.com.br";

// Só o que o formulário usa (evita virar proxy aberto do Hub).
const API_ALLOW = [/^\/api\/public\/forms\/17$/, /^\/api\/forms\/17\/submissions$/];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);

    if (!API_ALLOW.some((re) => re.test(url.pathname))) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }
    const headers = new Headers(request.headers);
    // Sem Origin/Referer o Hub aceita a chamada pública; endpoints públicos não usam cookie.
    headers.delete("Origin");
    headers.delete("Referer");
    headers.delete("Cookie");
    const ip = request.headers.get("CF-Connecting-IP");
    if (ip) headers.set("X-Forwarded-For", ip);
    headers.set("X-Forwarded-Host", url.hostname);
    const init = { method: request.method, headers, redirect: "manual" };
    if (request.method !== "GET" && request.method !== "HEAD") init.body = request.body;
    const resp = await fetch(UPSTREAM + url.pathname + url.search, init);
    return new Response(resp.body, { status: resp.status, headers: resp.headers });
  },
};
