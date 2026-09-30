import React, { useState } from 'react';
import { ArrowDown, Layers, Info } from 'lucide-react';
import {
  SUPPLY_CHAIN_COMBUSTION,
  SUPPLY_CHAIN_ELECTRIC,
  SupplyChainNode,
} from '../data/scientificData';

export const Section04IndirectImpact: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<SupplyChainNode>(SUPPLY_CHAIN_ELECTRIC[2]); // Default: Batería

  return (
    <section id="impacto-indirecto" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            04 · IMPACTO INDIRECTO
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-3">
            Lo que no vemos también cuenta.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Detrás de cada kilómetro recorrido existe una inmensa cadena industrial de extracción, refino, ensamblaje y transporte de energía.
          </p>
        </div>

        {/* Dual Interactive Chains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Combustion Chain */}
          <div className="bg-[#101720] border border-[#263241] rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#263241]">
              <span className="text-xs font-mono-numbers text-[#F97316] uppercase tracking-wider font-semibold">
                Cadena del Combustible (Well-to-Wheel)
              </span>
              <span className="text-xs text-[#94A3B8]">5 etapas</span>
            </div>

            <div className="flex flex-col gap-2">
              {SUPPLY_CHAIN_COMBUSTION.map((node, i) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => setSelectedNode(node)}
                      className={`text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#21140e] border-[#F97316] shadow-sm'
                          : 'bg-[#080C12] border-[#263241] hover:border-[#F97316]/40 hover:bg-[#121820]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl sm:text-2xl">{node.icon}</span>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-[#F1F5F9]">
                            {node.name}
                          </div>
                          <div className="text-[11px] font-mono-numbers text-[#94A3B8]">
                            Paso 0{i + 1}
                          </div>
                        </div>
                      </div>
                      {isSelected && (
                        <span className="text-xs font-mono-numbers text-[#F97316]">ACTIVO</span>
                      )}
                    </button>
                    {i < SUPPLY_CHAIN_COMBUSTION.length - 1 && (
                      <div className="flex justify-center text-[#263241] my-[-3px]">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Electric Chain */}
          <div className="bg-[#101720] border border-[#263241] rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#263241]">
              <span className="text-xs font-mono-numbers text-[#22D3EE] uppercase tracking-wider font-semibold">
                Cadena Eléctrica y Baterías
              </span>
              <span className="text-xs text-[#94A3B8]">5 etapas</span>
            </div>

            <div className="flex flex-col gap-2">
              {SUPPLY_CHAIN_ELECTRIC.map((node, i) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => setSelectedNode(node)}
                      className={`text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#0e2126] border-[#22D3EE] shadow-sm'
                          : 'bg-[#080C12] border-[#263241] hover:border-[#22D3EE]/40 hover:bg-[#121820]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl sm:text-2xl">{node.icon}</span>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-[#F1F5F9]">
                            {node.name}
                          </div>
                          <div className="text-[11px] font-mono-numbers text-[#94A3B8]">
                            Paso 0{i + 1}
                          </div>
                        </div>
                      </div>
                      {isSelected && (
                        <span className="text-xs font-mono-numbers text-[#22D3EE]">ACTIVO</span>
                      )}
                    </button>
                    {i < SUPPLY_CHAIN_ELECTRIC.length - 1 && (
                      <div className="flex justify-center text-[#263241] my-[-3px]">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Node In-Depth Inspection Card */}
        <div className="bg-[#101720] border border-[#263241] rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{selectedNode.icon}</span>
            <div>
              <div className="text-xs font-mono-numbers text-[#94A3B8] uppercase">
                {selectedNode.category === 'electric' ? '⚡ Cadena Eléctrica' : '⛽ Cadena Combustión'}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F1F5F9]">
                {selectedNode.name}
              </h3>
            </div>
          </div>

          <p className="text-base text-[#F1F5F9] leading-relaxed mb-4">
            {selectedNode.description}
          </p>

          <div className="bg-[#080C12] p-4 rounded-xl border border-[#263241] flex items-start gap-3">
            <Info className={`w-5 h-5 shrink-0 mt-0.5 ${selectedNode.category === 'electric' ? 'text-[#22D3EE]' : 'text-[#F97316]'}`} />
            <div>
              <div className="text-xs font-mono-numbers text-[#94A3B8] uppercase mb-0.5">
                Factor clave de impacto
              </div>
              <div className="text-sm text-[#F1F5F9] leading-snug">
                {selectedNode.impactFactor}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
