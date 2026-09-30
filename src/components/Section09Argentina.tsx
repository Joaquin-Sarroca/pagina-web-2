import React, { useState } from 'react';
import { ARGENTINA_FACTS } from '../data/scientificData';
import { ChevronDown, ChevronUp, Zap, Car, Cable } from 'lucide-react';

export const Section09Argentina: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const icons = [Zap, Car, Cable];

  return (
    <section id="argentina" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            09 · REALIDAD LOCAL
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-3 flex items-center gap-2.5">
            <span>🇦🇷</span>
            <span>¿Qué ocurre en Argentina?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Las matrices energéticas de Europa, China o Norteamérica no son extrapolables directamente a nuestro país.
          </p>
        </div>

        {/* Argentina Clean Energy Graphic Card */}
        <div className="relative mb-8 rounded-2xl overflow-hidden border border-[#263241] bg-[#101720]">
          <div className="relative h-48 sm:h-56 w-full overflow-hidden">
            <img
              src="/src/assets/images/argentina_energy_matrix_1790340734570.jpg"
              alt="Infraestructura energética y matriz de generación en Argentina"
              className="w-full h-full object-cover opacity-35 hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Zero-broken-image policy fallback
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101720] via-[#101720]/60 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-mono-numbers text-[#22D3EE] uppercase tracking-wider block mb-1">
                Datos del Sistema Interconectado Nacional (CAMMESA)
              </span>
              <p className="text-sm sm:text-base font-semibold text-[#F1F5F9]">
                Factor de emisión medio argentino: ~330 - 360 g CO₂ / kWh
              </p>
            </div>
          </div>
        </div>

        {/* 3 Interactive Cards */}
        <div className="space-y-4 mb-8">
          {ARGENTINA_FACTS.map((fact, idx) => {
            const Icon = icons[idx] || Zap;
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={fact.id}
                className="bg-[#101720] border border-[#263241] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#131c27] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="p-2.5 rounded-xl bg-[#080C12] border border-[#263241] text-[#22D3EE] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#F1F5F9] mb-1">
                        {fact.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#94A3B8]">
                        {fact.summary}
                      </p>
                    </div>
                  </div>
                  <span className="p-1 rounded text-[#94A3B8] shrink-0 mt-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#263241]/70 bg-[#080C12]/40 text-xs sm:text-sm text-[#F1F5F9] leading-relaxed animate-in fade-in duration-150">
                    <div className="p-4 bg-[#101720] rounded-xl border border-[#263241]">
                      {fact.details}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Takeaway */}
        <div className="p-5 sm:p-6 bg-[#101720] border-l-4 border-[#A5B4FC] rounded-r-xl">
          <div className="text-xs font-mono-numbers text-[#A5B4FC] uppercase tracking-wider mb-1">
            Conclusión Contextual
          </div>
          <p className="text-base sm:text-lg text-[#F1F5F9] font-medium leading-relaxed">
            «Los resultados obtenidos en otros países no necesariamente representan las condiciones de Argentina.»
          </p>
        </div>
      </div>
    </section>
  );
};
