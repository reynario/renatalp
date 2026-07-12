import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático: `next build` gera o site pronto em ./out,
  // servido pelo Cloudflare Workers via static assets (ver wrangler.jsonc).
  output: "export",
  images: {
    // Otimização de imagem do Next exige servidor Node; no export estático
    // as imagens são servidas como estão.
    unoptimized: true,
  },
};

export default nextConfig;
