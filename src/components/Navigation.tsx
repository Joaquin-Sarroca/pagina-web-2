import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { NAV_SECTIONS } from '../data/scientificData';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSectionObj = NAV_SECTIONS.find(s => s.id === activeSection) || NAV_SECTIONS[0];
  const sectionIndex = NAV_SECTIONS.findIndex(s => s.id === activeSection);
  const displayIndex = sectionIndex > 0 ? `${String(sectionIndex).padStart(2, '0')} / 12` : '00 / 12';

  return (
    <>
      {/* Top Bar Navigation (Clean 3-zone contract) */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#080C12]/90 backdrop-blur-md border-b border-[#263241]/70 transition-all duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Zone 1: Wordmark */}
          <button
            onClick={() => handleScrollTo('inicio')}
            className="text-left text-sm sm:text-base font-bold tracking-tight text-[#F1F5F9] hover:text-[#22D3EE] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span className="text-[#22D3EE] font-mono-numbers">⚡</span>
            <span>¿QUÉ TANTO CONTAMINAN?</span>
          </button>

          {/* Zone 2: Navigation Links (hidden on mobile, visible on desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-mono-numbers text-[#94A3B8]">
            {NAV_SECTIONS.slice(1, 7).map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleScrollTo(sec.id)}
                className={`px-2 py-1 transition-colors hover:text-[#F1F5F9] ${
                  activeSection === sec.id ? 'text-[#22D3EE] font-medium' : ''
                }`}
              >
                {sec.number} {sec.shortTitle}
              </button>
            ))}
            <span className="text-[#263241] mx-1">|</span>
            {NAV_SECTIONS.slice(7, 13).map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleScrollTo(sec.id)}
                className={`px-2 py-1 transition-colors hover:text-[#F1F5F9] ${
                  activeSection === sec.id ? 'text-[#22D3EE] font-medium' : ''
                }`}
              >
                {sec.number} {sec.shortTitle}
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Active section ticker for mobile/compact */}
            <span className="text-xs font-mono-numbers text-[#94A3B8] px-2 py-0.5 rounded bg-[#101720] border border-[#263241]">
              {displayIndex}
            </span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#F1F5F9] hover:text-[#22D3EE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Drawer Menu for Mobile / Touch as defined in Blueprint */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#080C12] flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#263241]">
            <div className="text-xs font-mono-numbers tracking-widest text-[#94A3B8]">
              INVESTIGACIÓN CIENTÍFICA ESCOLAR
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#94A3B8] hover:text-[#F1F5F9] rounded-lg border border-[#263241] active:bg-[#101720]"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-4">
            <div className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-3">
              Índice de Secciones
            </div>
            <div className="flex flex-col gap-1.5">
              {NAV_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className={`text-left py-2.5 px-3 rounded-lg flex items-center justify-between transition-colors ${
                    activeSection === section.id
                      ? 'bg-[#101720] text-[#22D3EE] border border-[#22D3EE]/30'
                      : 'text-[#F1F5F9] hover:bg-[#101720]/60 hover:text-[#22D3EE]'
                  }`}
                >
                  <span className="text-sm font-medium">
                    <span className="font-mono-numbers text-xs text-[#94A3B8] mr-3">
                      {section.number}
                    </span>
                    {section.title}
                  </span>
                  {activeSection === section.id && (
                    <span className="text-xs text-[#22D3EE] font-mono-numbers">ACTUAL</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-[#263241] text-xs text-[#94A3B8] flex items-center justify-between">
            <span>Exposición Escolar 2026</span>
            <span className="font-mono-numbers text-[#22D3EE]">LCA · ACV</span>
          </div>
        </div>
      )}

      {/* Floating Bottom Tracker & Back to Top Button */}
      {showBackToTop && (
        <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 bg-[#101720]/90 backdrop-blur border border-[#263241] px-3 py-1.5 rounded-full text-xs text-[#94A3B8] font-mono-numbers shadow-lg">
            <span>{currentSectionObj.number}</span>
            <span className="text-[#F1F5F9]">{currentSectionObj.shortTitle}</span>
          </div>
          <button
            onClick={() => handleScrollTo('inicio')}
            className="w-10 h-10 rounded-full bg-[#101720] border border-[#263241] text-[#F1F5F9] hover:text-[#22D3EE] hover:border-[#22D3EE] transition-all flex items-center justify-center shadow-lg active:scale-95"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
};
