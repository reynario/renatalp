"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#como-funciona", label: "Processo" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#2F2A26]/95 backdrop-blur-sm shadow-[0_1px_0_rgba(176,138,99,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1152px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a href="#" className="leading-none" onClick={() => setMenuOpen(false)}>
          <span
            className="block text-lg italic font-light text-[#F6F2EC]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Renata Fidelis
          </span>
          <span
            className="block text-[0.55rem] tracking-[0.3em] uppercase text-[#B08A63]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Design de Interiores
          </span>
        </a>

        {/* Links desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase text-[#E7DDD1] transition-colors duration-300 hover:text-[#B08A63]"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 400 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#B08A63] px-5 py-2 text-xs tracking-[0.2em] uppercase text-[#B08A63] transition-colors duration-300 hover:bg-[#B08A63] hover:text-[#2F2A26]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
          >
            Quero meu projeto
          </a>
        </div>

        {/* Botão hamburguer mobile */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-px w-6 bg-[#B08A63] transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[#B08A63] transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="border-t border-[#3D3530] px-6 pb-8 pt-4 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.2em] uppercase text-[#E7DDD1] transition-colors duration-300 hover:text-[#B08A63]"
                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 300 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block border border-[#B08A63] px-5 py-3 text-center text-xs tracking-[0.2em] uppercase text-[#B08A63] transition-colors duration-300 hover:bg-[#B08A63] hover:text-[#2F2A26]"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 500 }}
              onClick={() => setMenuOpen(false)}
            >
              Quero meu projeto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
