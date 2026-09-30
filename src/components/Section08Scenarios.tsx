import React, { useState } from 'react';
import { SCENARIOS, ScenarioData } from '../data/scientificData';
import { Sliders, Sparkles, CheckCircle2, TrendingDown } from 'lucide-react';

export const Section08Scenarios: React.FC = () => {
  const [activeScenarioKey, setActiveScenarioKey] = useState<'A' | 'B' | 'C'>('B');
  const [odometerKm, setOdometerKm] = useState<number>(100000);

  const scenario = SCENARIOS[activeScenarioKey];

  // Dynamic calculations:
  // EV Total Lifecycle at odometerKm = Manufacturing (10.8t) + Use (evUsePerKm * km / 1e6) + EOL (0.8t)
  // ICE Total Lifecycle at odometerKm = Manufacturing (7.0t) + Use (iceUsePerKm * km / 1e6) + EOL (0.6t)
  const evTotalTonnes = +(10.8 + (scenario.evUsePerKm * odometerKm) / 1000000 + 0.8).toFixed(1);
  const iceTotalTonnes = +(7.0 + (scenario.iceUsePerKm * odometerKm) / 1000000 + 0.6).toFixed(1);

  // Maximum value for proportional width bar (scale to ~45 tonnes)
  const maxScaleTonnes = 45;
  const evBarPercent = Math.min(100, Math.max(10, (evTotalTonnes / maxScaleTonnes) * 100));
  const iceBarPercent = Math.min(100, Math.max(10, (iceTotalTonnes / maxScaleTonnes) * 100));

  const hasCrossedBreakEven = odometerKm >= scenario.breakEvenKm;

  return (
    <section id="escenarios" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            08 · MODELO DINÁMICO
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-3">
            ¿Qué pasa si cambiamos el escenario?
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Simulá en tiempo real cómo la matriz de generación eléctrica del país o región modifica la ecuación ambiental.
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {(['A', 'B', 'C'] as const).map((key) => {
            const sc = SCENARIOS[key];
            const isActive = activeScenarioKey === key;
            return (
              <button
                key={key}
                onClick={() => setActiveScenarioKey(key)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#162230] border-[#22D3EE] shadow-md shadow-cyan-950/20'
                    : 'bg-[#101720] border-[#263241] hover:border-[#94A3B8]/40 hover:bg-[#121a24]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-6 h-6 rounded-md flex items-center justify-center font-mono-numbers text-xs font-bold ${
                      isActive ? 'bg-[#22D3EE] text-[#080C12]' : 'bg-[#263241] text-[#94A3B8]'
                    }`}
                  >
                    {key}
                  </span>
                  <span className="text-[11px] font-mono-numbers text-[#94A3B8]">
                    {sc.carbonIntensityKwh} g CO₂/kWh
                  </span>
                </div>
                <div className="text-sm font-bold text-[#F1F5F9] leading-tight mb-1">
                  {key === 'A' && 'Alta Renovables'}
                  {key === 'B' && 'Matriz Mixta'}
                  {key === 'C' && 'Alta Fósil'}
                </div>
                <div className="text-[11px] text-[#94A3B8] line-clamp-2">
                  {sc.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Details & Interactive Simulation Deck */}
        <div className="bg-[#101720] border border-[#263241] rounded-2xl p-6 sm:p-8 mb-6">
          <div className="mb-6 pb-4 border-b border-[#263241]">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-mono-numbers text-[#22D3EE] uppercase tracking-wider">
                ESCENARIO SELECCIONADO: {scenario.name}
              </span>
              <span className="text-xs font-mono-numbers text-[#94A3B8] px-2 py-0.5 rounded bg-[#080C12] border border-[#263241]">
                Red: {scenario.carbonIntensityKwh} g CO₂/kWh
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {scenario.matrixDescription}
            </p>
          </div>

          {/* Interactive Distance Slider */}
          <div className="mb-8 p-4 bg-[#080C12] rounded-xl border border-[#263241]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <label htmlFor="distance-slider" className="text-xs sm:text-sm font-semibold text-[#F1F5F9] flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#22D3EE]" />
                <span>Distancia acumulada recorrida:</span>
              </label>
              <span className="font-mono-numbers text-base sm:text-lg font-bold text-[#22D3EE]">
                {odometerKm.toLocaleString('es-AR')} km
              </span>
            </div>

            <input
              id="distance-slider"
              type="range"
              min={10000}
              max={250000}
              step={5000}
              value={odometerKm}
              onChange={(e) => setOdometerKm(Number(e.target.value))}
              className="w-full h-2 bg-[#263241] rounded-lg appearance-none cursor-pointer accent-[#22D3EE]"
            />

            <div className="flex justify-between text-[11px] font-mono-numbers text-[#94A3B8] mt-2">
              <span>10.000 km (Uso breve)</span>
              <span>100.000 km (Promedio)</span>
              <span>250.000 km (Larga duración)</span>
            </div>
          </div>

          {/* Dynamic Comparison Bars */}
          <div className="space-y-6">
            {/* Electric Bar */}
            <div>
              <div className="flex items-center justify-between text-sm font-medium mb-1.5">
                <span className="flex items-center gap-2 text-[#22D3EE]">
                  <span>⚡</span>
                  <span className="font-semibold">Vehículo eléctrico (LCA acumulado)</span>
                </span>
                <span className="font-mono-numbers text-base font-bold text-[#F1F5F9]">
                  {evTotalTonnes} t CO₂e
                </span>
              </div>
              <div className="h-7 w-full bg-[#080C12] rounded-lg overflow-hidden border border-[#263241] flex">
                <div
                  style={{ width: `${evBarPercent}%` }}
                  className="bg-[#22D3EE] h-full transition-all duration-300 flex items-center justify-end pr-2 text-[11px] font-mono-numbers text-[#080C12] font-bold"
                >
                  {evTotalTonnes} t
                </div>
              </div>
              <div className="text-[11px] text-[#94A3B8] mt-1 flex justify-between">
                <span>Fabricación fija: 10.8 t · Uso: {((scenario.evUsePerKm * odometerKm) / 1e6).toFixed(1)} t</span>
                <span className="font-mono-numbers">{(scenario.evUsePerKm).toFixed(1)} g/km</span>
              </div>
            </div>

            {/* Combustion Bar */}
            <div>
              <div className="flex items-center justify-between text-sm font-medium mb-1.5">
                <span className="flex items-center gap-2 text-[#F97316]">
                  <span>⛽</span>
                  <span className="font-semibold">Vehículo a combustión (LCA acumulado)</span>
                </span>
                <span className="font-mono-numbers text-base font-bold text-[#F1F5F9]">
                  {iceTotalTonnes} t CO₂e
                </span>
              </div>
              <div className="h-7 w-full bg-[#080C12] rounded-lg overflow-hidden border border-[#263241] flex">
                <div
                  style={{ width: `${iceBarPercent}%` }}
                  className="bg-[#F97316] h-full transition-all duration-300 flex items-center justify-end pr-2 text-[11px] font-mono-numbers text-white font-bold"
                >
                  {iceTotalTonnes} t
                </div>
              </div>
              <div className="text-[11px] text-[#94A3B8] mt-1 flex justify-between">
                <span>Fabricación fija: 7.0 t · Uso: {((scenario.iceUsePerKm * odometerKm) / 1e6).toFixed(1)} t</span>
                <span className="font-mono-numbers">203.0 g/km</span>
              </div>
            </div>
          </div>

          {/* Break-even milestone point explanation */}
          <div className="mt-8 pt-5 border-t border-[#263241] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#080C12]/60 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <span className={`p-2 rounded-lg ${hasCrossedBreakEven ? 'bg-[#4ADE80]/15 text-[#4ADE80]' : 'bg-[#F97316]/15 text-[#F97316]'}`}>
                {hasCrossedBreakEven ? <CheckCircle2 className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
              </span>
              <div>
                <div className="text-xs font-mono-numbers text-[#94A3B8] uppercase">
                  Punto de cruce kilométrico (Break-even)
                </div>
                <div className="text-sm font-bold text-[#F1F5F9]">
                  {scenario.breakEvenKm.toLocaleString('es-AR')} km
                </div>
              </div>
            </div>

            <div className="text-xs text-[#94A3B8] max-w-sm">
              {hasCrossedBreakEven ? (
                <span className="text-[#4ADE80]">
                  Con {odometerKm.toLocaleString('es-AR')} km, el eléctrico ya compensó la mayor huella de fabricación de su batería en este escenario.
                </span>
              ) : (
                <span className="text-[#94A3B8]">
                  Por debajo de {scenario.breakEvenKm.toLocaleString('es-AR')} km, la deuda de carbono de producir la batería aún supera el ahorro en ruta.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Concluding scientific quote */}
        <div className="text-center p-4 bg-[#101720] border border-[#263241] rounded-xl">
          <p className="text-sm sm:text-base text-[#F1F5F9] font-medium leading-relaxed">
            «El impacto asociado al uso de un vehículo eléctrico depende, entre otros factores, de cómo se genera la electricidad utilizada para cargarlo.»
          </p>
        </div>
      </div>
    </section>
  );
};
