"use client";

import { useEffect } from "react";

// Empurra para o dataLayer do GTM um evento "contact" a cada clique em link de
// WhatsApp, telefone ou e-mail, em qualquer página. No GTM vira o evento
// contact do GA4 e o Contact do Pixel.
export default function RastreioContato() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") || "";
      const canal = /wa\.me|whatsapp\.com/.test(href)
        ? "whatsapp"
        : href.startsWith("tel:")
          ? "telefone"
          : href.startsWith("mailto:")
            ? "email"
            : null;
      if (!canal) return;
      const w = window as unknown as { dataLayer?: object[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: "contact", contact_method: canal, page_path: location.pathname });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
