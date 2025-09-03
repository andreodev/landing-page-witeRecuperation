import { motion } from "framer-motion";
import logoWhite from "../assets/iconNav.png";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // Tornar o nav posicionado sobre o conteúdo no local atual: usar container relativo no pai e nav absoluto
    <div className="relative">
      <nav className="absolute inset-x-0 top-0 z-50 w-full pt-4 sm:pt-[42px] px-4 sm:px-0 pointer-events-auto">
        {/* container centralizado com largura máxima */}
        <div className="mx-auto max-w-[1240px] px-0 sm:px-0">
          {/* barra principal */}
          <div className="relative bg-white border border-[#E1E8F1] text-[#707478] h-12 sm:h-14 rounded-full flex items-center justify-between px-3 sm:pl-3 sm:pr-3">
            {/* logo + links (links só em >= lg) */}
            <div className="flex items-center min-w-0">
              {/* Logo com animação de entrada */}
              <motion.img
                src={logoWhite}
                alt="Logo"
                className="h-8 w-8 mr-3 sm:h-10 sm:w-10 sm:mr-5"
                initial={{ opacity: 0, scale: 0.5 }} // Inicia pequeno e invisível
                animate={{ opacity: 1, scale: 1 }} // Finaliza com escala 1 e opacidade 1
                transition={{ duration: 0.8, ease: "easeOut" }} // Animação suave
              />
              <ul className="hidden lg:flex items-center gap-4 text-sm">
                <li>
                  <a className="hover:text-black transition-colors" href="#API">
                    Agente IA
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-black transition-colors"
                    href="#COMPLIANCE"
                  >
                    Integração WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-black transition-colors"
                    href="#tecnologiaPix"
                  >
                    Perguntas frequentes
                  </a>
                </li>
              </ul>
            </div>

            {/* ações desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <motion.button
                className="border cursor-pointer  border-[#01AEA4] text-[#01AEA4] py-2 px-4 rounded-full hover:bg-black/5 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://painel.witerecuperation.com/login?callbackUrl=%2F">
                  Entrar
                </a>
              </motion.button>
              <motion.button
                className="bg-[#01AEA4] cursor-pointer text-white py-2 px-5 rounded-full hover:opacity-90 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://painel.witerecuperation.com/registro">
                  Criar conta
                </a>
              </motion.button>
            </div>

            {/* botão hambúrguer (mobile/tablet) */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-black/5 transition"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Abrir menu</span>
              {/* ícone simples em SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 stroke-current"
                strokeWidth={2}
                strokeLinecap="round"
              >
                {open ? (
                  <>
                    <path d="M6 6L18 18" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* menu mobile */}
          {open && (
            <div
              id="mobile-nav"
              className="lg:hidden mt-2 rounded-2xl bg-white text-[#707478] p-3 shadow-sm"
              aria-hidden={!open}
            >
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    className="block rounded-lg px-3 py-2 hover:bg-black/5"
                    href="#API"
                  >
                    Agente IA
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-lg px-3 py-2 hover:bg-black/5"
                    href="#COMPLIANCE"
                  >
                    Integração WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    className="block rounded-lg px-3 py-2 hover:bg-black/5"
                    href="#tecnologiaPix"
                  >
                    Perguntas frequentes
                  </a>
                </li>
              </ul>

              <div className="mt-3 flex gap-2">
                <motion.button
                  className="flex-1 border border-[#01AEA4] text-[#01AEA4] py-2 px-4 rounded-xl hover:bg-black/5 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="https://painel.witerecuperation.com/login?callbackUrl=%2F">
                    Entrar
                  </a>
                </motion.button>
                <motion.button
                  className="flex-1 cursor-pointer bg-[#01AEA4] text-white py-2 px-4 rounded-xl hover:opacity-90 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="https://painel.witerecuperation.com/registro">
                    Criar conta
                  </a>
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
