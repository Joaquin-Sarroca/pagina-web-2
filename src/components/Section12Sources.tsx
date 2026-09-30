import React, { useState } from 'react';
import { SOURCES } from '../data/scientificData';
import { ExternalLink, BookOpen, FileText, CheckCircle } from 'lucide-react';

export const Section12Sources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sources' | 'methodology'>('sources');

  return (
    <section id="fuentes" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            12 · TRANSPARENCIA CIENTÍFICA
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-3">
            Fuentes y metodología
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Todos los valores expuestos provienen de publicaciones de acceso público de agencias internacionales y entidades gubernamentales.
          </p>
        </div>

        {/* Tab switch between Sources and Methodology */}
        <div className="flex items-center gap-2 mb-8 p-1 bg-[#101720] border border-[#263241] rounded-xl max-w-xs">
          <button
            onClick={() => setActiveTab('sources')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'sources'
                ? 'bg-[#22D3EE] text-[#080C12] font-bold'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            Bibliografía (5)
          </button>
          <button
            onClick={() => setActiveTab('methodology')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeTab === 'methodology'
                ? 'bg-[#22D3EE] text-[#080C12] font-bold'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            Metodología ACV
          </button>
        </div>

        {activeTab === 'sources' ? (
          /* Sources Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SOURCES.map((source, index) => (
              <div
                key={index}
                className="bg-[#101720] border border-[#263241] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#94A3B8]/40 transition-colors"
              >
                <div>
                  <div className="text-xs font-mono-numbers text-[#A5B4FC] tracking-wider uppercase mb-1">
                    {source.institution}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F1F5F9] mb-2 leading-snug">
                    {source.title}
                  </h3>
                  <div className="text-xs font-mono-numbers text-[#94A3B8] mb-3">
                    Año de publicación: {source.year}
                  </div>
                  <div className="p-3 bg-[#080C12] rounded-xl border border-[#263241] mb-4">
                    <span className="text-[11px] font-mono-numbers text-[#22D3EE] block mb-1 uppercase">
                      ¿Qué información usamos?
                    </span>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {source.scope}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#263241] flex items-center justify-between text-xs font-mono-numbers text-[#94A3B8]">
                  <span>{source.urlText}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#22D3EE]" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Methodology Details */
          <div className="bg-[#101720] border border-[#263241] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#263241] pb-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#F1F5F9] mb-1">
                Límites y supuestos de la modelización
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8]">
                En un Análisis de Ciclo de Vida (ACV / LCA), pequeños cambios en las variables de partida alteran el resultado final. A continuación se detallan los supuestos adoptados en este trabajo:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#080C12] rounded-xl border border-[#263241]">
                <strong className="text-[#22D3EE] block mb-1 font-mono-numbers text-xs uppercase">
                  1. Vehículos analizados
                </strong>
                <p className="text-[#94A3B8] leading-relaxed">
                  Turismo mediano (Segmento C, ej. VW Golf nafta 1.4 TSI vs VW ID.3 eléctrico 58-60 kWh), con peso en orden de marcha de ~1.350 kg y ~1.750 kg respectivamente.
                </p>
              </div>

              <div className="p-4 bg-[#080C12] rounded-xl border border-[#263241]">
                <strong className="text-[#22D3EE] block mb-1 font-mono-numbers text-xs uppercase">
                  2. Vida útil estimada
                </strong>
                <p className="text-[#94A3B8] leading-relaxed">
                  Línea de base fijada en 150.000 kilómetros totales, con un horizonte de reemplazo o degradación de batería menor al 25%.
                </p>
              </div>

              <div className="p-4 bg-[#080C12] rounded-xl border border-[#263241]">
                <strong className="text-[#22D3EE] block mb-1 font-mono-numbers text-xs uppercase">
                  3. Unidades y métrica
                </strong>
                <p className="text-[#94A3B8] leading-relaxed">
                  Gramos de CO₂ equivalente por kilómetro (g CO₂e/km) y toneladas totales (t CO₂e), considerando el potencial de calentamiento global GWP a 100 años (IPCC AR6).
                </p>
              </div>

              <div className="p-4 bg-[#080C12] rounded-xl border border-[#263241]">
                <strong className="text-[#22D3EE] block mb-1 font-mono-numbers text-xs uppercase">
                  4. Diferencias entre estudios
                </strong>
                <p className="text-[#94A3B8] leading-relaxed">
                  Algunos estudios consideran que la batería se recicla completamente recuperando energía; otros asumen una matriz fósil china en la celda. Por eso los valores varían entre 15.000 y 60.000 km de punto de cruce.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#080C12] rounded-xl border border-[#263241] flex items-center gap-3 text-xs text-[#94A3B8]">
              <CheckCircle className="w-5 h-5 text-[#4ADE80] shrink-0" />
              <span>
                Todos los datos han sido cotejados para preservar neutralidad y evitar sesgos de patrocinio comercial de fabricantes o petroleras.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
