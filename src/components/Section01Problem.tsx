import React, { useState } from 'react';
import { ArrowDown, Info, CheckCircle2 } from 'lucide-react';
import { LIFECYCLE_STAGES } from '../data/scientificData';

export const Section01Problem: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('fabricacion');

  const selectedStage = LIFECYCLE_STAGES.find((s) => s.id === selectedStageId) || LIFECYCLE_STAGES[1];

  return (
    <section id="el-problema" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            01 · EL PROBLEMA
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-4">
            Un auto no contamina solamente cuando circula.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Para conocer el impacto ambiental de un automóvil es necesario observar más que las emisiones producidas durante su uso.
          </p>
        </div>

        {/* Life Cycle Stages Chain */}
        <div className="bg-[#101720] border border-[#263241] rounded-2xl p-5 sm:p-8 mb-8 shadow-sm">
          <div className="text-xs font-mono-numbers text-[#94A3B8] uppercase tracking-wider mb-5 flex items-center justify-between">
            <span>Las 6 etapas del ciclo de vida</span>
            <span className="text-[11px] text-[#22D3EE] hidden sm:inline">Tocá una etapa para ver su rol</span>
          </div>

          {/* Interactive Flow Grid / Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {LIFECYCLE_STAGES.map((stage, index) => {
              const isSelected = stage.id === selectedStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`group relative text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[92px] ${
                    isSelected
                      ? 'bg-[#162230] border-[#22D3EE] shadow-md shadow-cyan-950/30'
                      : 'bg-[#0b1017] border-[#263241] hover:border-[#94A3B8]/50 hover:bg-[#121a24]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-[11px] font-mono-numbers text-[#94A3B8]">
                      0{index + 1}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F1F5F9] leading-tight">
                    {stage.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile stage selector guidance */}
          <div className="sm:hidden text-center mt-3 text-[11px] text-[#94A3B8] font-mono-numbers">
            Tocá cualquier etapa para desplegar detalles
          </div>

          {/* Detail Card of Selected Stage */}
          <div className="mt-6 pt-6 border-t border-[#263241] flex flex-col sm:flex-row gap-4 items-start bg-[#080C12]/50 p-4 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/30 flex items-center justify-center shrink-0 text-[#22D3EE]">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono-numbers text-[#22D3EE] uppercase tracking-wider mb-1">
                ETAPA SELECCIONADA
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#F1F5F9] mb-1">
                {selectedStage.name}
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {selectedStage.shortDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Highlighted Concept Banner */}
        <div className="border-l-2 border-[#4ADE80] bg-[#101720] p-5 sm:p-6 rounded-r-xl">
          <div className="text-xs font-mono-numbers text-[#4ADE80] uppercase tracking-wider mb-1">
            Principio Metodológico Fundamental
          </div>
          <p className="text-base sm:text-lg text-[#F1F5F9] font-medium leading-relaxed">
            «Para comparar tecnologías, hay que observar su ciclo de vida completo (LCA · Life Cycle Assessment).»
          </p>
        </div>
      </div>
    </section>
  );
};
