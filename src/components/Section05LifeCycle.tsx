import React, { useState } from 'react';
import { LIFECYCLE_STAGES } from '../data/scientificData';
import { ArrowDown, Wrench, Factory, Truck, Gauge, Recycle } from 'lucide-react';

export const Section05LifeCycle: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<'electric' | 'combustion'>('electric');

  const icons = [Factory, Factory, Truck, Gauge, Wrench, Recycle];

  return (
    <section id="ciclo-de-vida" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            05 · CICLO DE VIDA (ACV)
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-3">
            La historia de un auto empieza antes de la carretera.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Analizar únicamente el caño de escape equivale a evaluar una película viendo solamente la escena del medio.
          </p>
        </div>

        {/* Technology Selector Tabs */}
        <div className="flex items-center justify-center p-1 bg-[#101720] border border-[#263241] rounded-xl max-w-sm mx-auto mb-10">
          <button
            onClick={() => setSelectedTech('electric')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedTech === 'electric'
                ? 'bg-[#22D3EE] text-[#080C12] shadow-md font-bold'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            ⚡ ELÉCTRICO
          </button>
          <button
            onClick={() => setSelectedTech('combustion')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedTech === 'combustion'
                ? 'bg-[#F97316] text-white shadow-md'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            ⛽ COMBUSTIÓN
          </button>
        </div>

        {/* Vertical Timeline / Process Stages */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#263241] ml-4 sm:ml-6 space-y-8">
          {LIFECYCLE_STAGES.map((stage, idx) => {
            const IconComponent = icons[idx] || Factory;
            const isElectric = selectedTech === 'electric';
            const detailText = isElectric ? stage.electricDetails : stage.combustionDetails;

            return (
              <div key={stage.id} className="relative group">
                {/* Node indicator dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isElectric
                      ? 'bg-[#101720] border-[#22D3EE] text-[#22D3EE]'
                      : 'bg-[#101720] border-[#F97316] text-[#F97316]'
                  }`}
                >
                  <span className="text-[10px] font-mono-numbers font-bold">0{idx + 1}</span>
                </div>

                {/* Stage Content Card */}
                <div className="bg-[#101720] border border-[#263241] rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-[#94A3B8]/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#F1F5F9] flex items-center gap-2">
                      <IconComponent className={`w-4 h-4 ${isElectric ? 'text-[#22D3EE]' : 'text-[#F97316]'}`} />
                      <span>{stage.name}</span>
                    </h3>
                    <span className="text-xs font-mono-numbers text-[#94A3B8]">
                      {isElectric ? 'Fase EV' : 'Fase Combustión'}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#F1F5F9] leading-relaxed mb-3">
                    {detailText}
                  </p>

                  <div className="text-xs text-[#94A3B8] border-t border-[#263241]/60 pt-2 flex items-center justify-between">
                    <span>Definición estándar ACV:</span>
                    <span className="italic">{stage.shortDesc}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
