import React, { useState } from 'react';
import { Wind, AlertTriangle, Check, ShieldAlert } from 'lucide-react';

export const Section03DirectImpact: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'combustion' | 'electric'>('combustion');

  return (
    <section id="impacto-directo" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            03 · IMPACTO DIRECTO
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-3">
            ¿Qué ocurre mientras circulan?
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Al acelerar por una avenida o carretera urbana, las consecuencias inmediatas en el aire que respiramos difieren según la propulsión.
          </p>
        </div>

        {/* Interactive Mode Toggle */}
        <div className="flex items-center justify-center p-1 bg-[#101720] border border-[#263241] rounded-xl max-w-md mx-auto mb-8">
          <button
            onClick={() => setActiveMode('combustion')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeMode === 'combustion'
                ? 'bg-[#F97316] text-white shadow-md'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            <span>⛽ Combustión</span>
          </button>
          <button
            onClick={() => setActiveMode('electric')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeMode === 'electric'
                ? 'bg-[#22D3EE] text-[#080C12] shadow-md font-bold'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            <span>⚡ Eléctrico</span>
          </button>
        </div>

        {/* Dynamic Simulation Canvas */}
        <div className="bg-[#101720] border border-[#263241] rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden">
          {activeMode === 'combustion' ? (
            <div>
              {/* Combustion Visual Motion */}
              <div className="relative h-44 sm:h-52 bg-[#080C12] rounded-xl border border-[#263241]/70 p-4 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono-numbers text-[#F97316]">
                  <span>VEHÍCULO A COMBUSTIÓN EN RODAJE</span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#F97316] animate-ping" />
                    EMISIÓN DE ESCAPE ACTIVA
                  </span>
                </div>

                {/* Car and Exhaust Animation Representation */}
                <div className="relative flex items-center justify-between my-auto py-2">
                  {/* Left: Exhaust cloud emitter */}
                  <div className="flex items-center gap-2 text-xs font-mono-numbers text-[#94A3B8]">
                    <div className="flex flex-col gap-1 items-end opacity-90 animate-pulse">
                      <span className="bg-[#F97316]/20 border border-[#F97316]/50 text-[#F97316] px-2 py-0.5 rounded text-[11px] font-semibold">
                        💨 CO₂ (Dióxido de Carbono)
                      </span>
                      <span className="bg-amber-950/40 border border-amber-600/50 text-amber-300 px-2 py-0.5 rounded text-[11px]">
                        NOₓ (Óxidos de Nitrógeno)
                      </span>
                      <span className="bg-stone-800/80 border border-stone-600 text-stone-300 px-2 py-0.5 rounded text-[11px]">
                        PM2.5 / PM10 (Hollín)
                      </span>
                    </div>
                  </div>

                  {/* Flow arrow */}
                  <div className="flex items-center text-[#F97316] px-2">
                    <span className="text-xl font-bold animate-pulse">← 💨</span>
                  </div>

                  {/* Vehicle icon / chassis */}
                  <div className="relative">
                    <div className="text-4xl sm:text-5xl">🚗</div>
                    <div className="text-[10px] font-mono-numbers text-center text-[#94A3B8] mt-1">
                      Motor térmico
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#94A3B8] border-t border-[#263241]/50 pt-2 flex items-center justify-between">
                  <span>Impacto: Calidad del aire local y calentamiento global</span>
                  <span className="text-[#F97316] font-mono-numbers">Gases directos</span>
                </div>
              </div>

              {/* Emission Breakdown Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                <div className="p-3 bg-[#080C12] border border-[#263241] rounded-xl text-left">
                  <div className="text-xs font-mono-numbers text-[#F97316] mb-1 font-bold">CO₂</div>
                  <div className="text-xs text-[#94A3B8]">Gas de efecto invernadero principal causante del calentamiento global.</div>
                </div>
                <div className="p-3 bg-[#080C12] border border-[#263241] rounded-xl text-left">
                  <div className="text-xs font-mono-numbers text-[#F97316] mb-1 font-bold">NOₓ</div>
                  <div className="text-xs text-[#94A3B8]">Óxidos de nitrógeno generadores de smog y problemas respiratorios.</div>
                </div>
                <div className="p-3 bg-[#080C12] border border-[#263241] rounded-xl text-left">
                  <div className="text-xs font-mono-numbers text-[#F97316] mb-1 font-bold">PM 2.5 / 10</div>
                  <div className="text-xs text-[#94A3B8]">Micropartículas de hollín que penetran los alvéolos pulmonares.</div>
                </div>
                <div className="p-3 bg-[#080C12] border border-[#263241] rounded-xl text-left">
                  <div className="text-xs font-mono-numbers text-[#F97316] mb-1 font-bold">CO y COVs</div>
                  <div className="text-xs text-[#94A3B8]">Monóxido de carbono e hidrocarburos volátiles de combustión incompleta.</div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Electric Visual Motion */}
              <div className="relative h-44 sm:h-52 bg-[#080C12] rounded-xl border border-[#22D3EE]/30 p-4 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono-numbers text-[#22D3EE]">
                  <span>VEHÍCULO ELÉCTRICO EN RODAJE</span>
                  <span className="flex items-center gap-1.5 text-[#4ADE80]">
                    <Check className="w-4 h-4" />
                    CERO EMISIONES POR EL ESCAPE
                  </span>
                </div>

                {/* Car and Clean Trail Representation */}
                <div className="relative flex items-center justify-between my-auto py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-numbers text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/30 px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <Wind className="w-4 h-4" />
                      0 g CO₂ / 0 g NOₓ / 0 g Hollín (Escape)
                    </span>
                  </div>

                  <div className="text-3xl text-[#22D3EE] font-mono-numbers">
                    ⚡
                  </div>

                  <div className="relative">
                    <div className="text-4xl sm:text-5xl">🚗</div>
                    <div className="text-[10px] font-mono-numbers text-center text-[#22D3EE] mt-1">
                      Motor eléctrico
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#94A3B8] border-t border-[#263241]/50 pt-2 flex items-center justify-between">
                  <span>Calidad de aire urbano: Beneficio inmediato en la calle</span>
                  <span className="text-[#22D3EE] font-mono-numbers">Silencioso y limpio</span>
                </div>
              </div>

              {/* Electric Key Statement */}
              <div className="p-4 bg-[#080C12] border border-[#22D3EE]/40 rounded-xl mt-6 text-center">
                <p className="text-base sm:text-lg font-semibold text-[#F1F5F9]">
                  «Durante el funcionamiento, un vehículo eléctrico no produce emisiones de escape.»
                </p>
                <p className="text-xs text-[#94A3B8] mt-1">
                  (Nota técnica: persisten emisiones menores por desgaste de neumáticos y asfalto, comunes a ambos vehículos).
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Critical Caveat Leading to Section 04 */}
        <div className="p-5 sm:p-6 bg-[#101720] border-l-4 border-[#22D3EE] rounded-r-xl">
          <div className="text-xs font-mono-numbers text-[#22D3EE] uppercase tracking-wider mb-1">
            Advertencia de rigor científico
          </div>
          <p className="text-lg sm:text-xl font-bold text-[#F1F5F9] leading-snug">
            Esto no significa que su impacto ambiental sea cero.
          </p>
          <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
            Para saber si realmente es más limpio, tenemos que mirar aguas arriba: cómo se fabricó y de dónde provino la energía.
          </p>
        </div>
      </div>
    </section>
  );
};
