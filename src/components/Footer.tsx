import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-4 sm:px-6 bg-[#05080c] border-t border-[#263241]/80 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#F1F5F9] mb-1">
          ¿QUÉ TANTO CONTAMINAN LOS AUTOS?
        </h4>

        {/* Year and Scope */}
        <p className="text-xs font-mono-numbers text-[#94A3B8] mb-4">
          Investigación científica escolar · 2026
        </p>

        {/* Quick Footer Links */}
        <div className="flex items-center gap-4 text-xs font-mono-numbers text-[#22D3EE] mb-6">
          <button
            onClick={() => scrollTo('fuentes')}
            className="hover:underline cursor-pointer"
          >
            [ Fuentes ]
          </button>
          <button
            onClick={() => scrollTo('fuentes')}
            className="hover:underline cursor-pointer"
          >
            [ Metodología ]
          </button>
          <button
            onClick={() => scrollTo('el-problema')}
            className="hover:underline cursor-pointer"
          >
            [ Ciclo de Vida ]
          </button>
        </div>

        {/* School Exhibition Subtext */}
        <div className="text-[11px] text-[#94A3B8]/70 border-t border-[#263241]/40 pt-4 w-full max-w-xs">
          Realizado para exposición escolar de ciencias y sustentabilidad.
        </div>
      </div>
    </footer>
  );
};
