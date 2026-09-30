import React, { useState } from 'react';
import { REFLECTION_FACTORS } from '../data/scientificData';
import { Check, Sparkles } from 'lucide-react';

export const Section11Reflection: React.FC = () => {
  const [selectedFactors, setSelectedFactors] = useState<string[]>(['elec', 'bat']);

  const toggleFactor = (id: string) => {
    setSelectedFactors((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const activeInsights = REFLECTION_FACTORS.filter((f) => selectedFactors.includes(f.id));

  return (
    <section id="reflexion" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Kicker */}
        <div className="text-xs font-mono-numbers text-[#4ADE80] tracking-widest uppercase mb-3">
          11 · REFLEXIÓN INDIVIDUAL
        </div>

        {/* Big Reflective Title */}
        <h2 className="text-2xl sm:text-5xl font-extrabold text-[#F1F5F9] tracking-tight leading-tight mb-4">
          AHORA QUE CONOCÉS LOS DATOS...
        </h2>

        <p className="text-base sm:text-xl text-[#94A3B8] max-w-xl mx-auto mb-8">
          ¿Qué factores considerás más importantes para comparar ambos tipos de vehículos?
        </p>

        {/* Interactive Factor Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-2xl mx-auto">
          {REFLECTION_FACTORS.map((factor) => {
            const isSelected = selectedFactors.includes(factor.id);

            return (
              <button
                key={factor.id}
                onClick={() => toggleFactor(factor.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#22D3EE] text-[#080C12] shadow-md shadow-cyan-950/30 font-bold scale-105'
                    : 'bg-[#101720] text-[#94A3B8] border border-[#263241] hover:border-[#94A3B8]/60 hover:text-[#F1F5F9]'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                <span>{factor.label.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* Visitor's Priority Synthesis Box */}
        <div className="bg-[#101720] border border-[#263241] rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-left mb-12 shadow-sm">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#263241]">
            <span className="text-xs font-mono-numbers text-[#22D3EE] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tu ponderación de prioridades</span>
            </span>
            <span className="text-xs font-mono-numbers text-[#94A3B8]">
              {selectedFactors.length} de {REFLECTION_FACTORS.length} seleccionados
            </span>
          </div>

          {activeInsights.length > 0 ? (
            <div className="space-y-3">
              {activeInsights.map((factor) => (
                <div key={factor.id} className="text-xs sm:text-sm text-[#F1F5F9] flex items-start gap-2.5">
                  <span className="text-[#22D3EE] font-mono-numbers mt-0.5">•</span>
                  <span>
                    <strong className="text-[#22D3EE]">{factor.label}:</strong> {factor.insight}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-[#94A3B8] italic text-center py-2">
              Tocá uno o más factores arriba para armar tu criterio de análisis.
            </p>
          )}
        </div>

        {/* Final Conclusion Quote */}
        <div className="py-6">
          <p className="text-xl sm:text-3xl font-light text-[#94A3B8] leading-relaxed mb-3">
            Los datos están disponibles.
          </p>
          <p className="text-2xl sm:text-4xl font-extrabold text-[#F1F5F9] tracking-tight">
            La conclusión es tuya.
          </p>
        </div>
      </div>
    </section>
  );
};
