import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, BarChart2 } from 'lucide-react';

export const Section06TheData: React.FC = () => {
  const [showCo2eExplain, setShowCo2eExplain] = useState(false);
  const [selectedLcaGrid, setSelectedLcaGrid] = useState<'mixed' | 'clean'>('mixed');

  // Chart 1: Emisiones en uso (g CO₂e / km)
  // Combustión nafta: 165 directas + 38 indirectas = 203 g CO2e/km
  // Eléctrico matriz media: 0 directas + 70 indirectas = 70 g CO2e/km
  // Eléctrico matriz limpia: 0 directas + 15 indirectas = 15 g CO2e/km

  // Chart 2: Fabricación del vehículo (toneladas CO₂e)
  // Combustión (1.3t chasis + motor térmico): 7.0 t CO₂e
  // Eléctrico (chasis + motor + batería 60kWh NMC): 10.8 t CO₂e (4.8t de la batería)

  // Chart 3: Ciclo de vida completo a 150.000 km (toneladas CO₂e)
  // ICE: Fab: 7.0 + Uso (203g*150k km = 30.5t) + Fin de vida: 0.6 = 38.1 t CO₂e
  // EV Mixta: Fab: 10.8 + Uso (70g*150k km = 10.5t) + Fin de vida: 0.8 = 22.1 t CO₂e
  // EV Limpia: Fab: 10.8 + Uso (15g*150k km = 2.25t) + Fin de vida: 0.8 = 13.85 t CO₂e

  return (
    <section id="los-datos" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            06 · LOS DATOS
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-3">
            Ahora, veamos los datos.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Valores de referencia estandarizados para un automóvil mediano (Segmento C, ~1.500 kg) basados en consensos de la IEA, ICCT y ADEME.
          </p>
        </div>

        <div className="space-y-12">
          {/* ============================================================== */}
          {/* GRÁFICO 1 — USO */}
          {/* ============================================================== */}
          <div className="bg-[#101720] border border-[#263241] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono-numbers text-[#A5B4FC] tracking-wider uppercase">
                GRÁFICO 01 DE 03
              </span>
              <span className="text-xs text-[#94A3B8] font-mono-numbers">
                Unidad: g CO₂e / km
              </span>
            </div>

            <h3 className="text-lg sm:text-2xl font-bold text-[#F1F5F9] mb-6">
              ¿Qué emisiones se producen durante el uso?
            </h3>

            {/* Bars for Chart 1 */}
            <div className="space-y-5 mb-6">
              {/* Electric - Clean Matrix */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-1.5">
                  <span className="flex items-center gap-2 text-[#22D3EE]">
                    <span>⚡</span>
                    <span>Eléctrico (Matriz renovable / limpia)</span>
                  </span>
                  <span className="font-mono-numbers font-bold text-[#F1F5F9]">
                    15 g CO₂e/km
                  </span>
                </div>
                <div className="h-6 w-full bg-[#080C12] rounded-lg overflow-hidden border border-[#263241] flex">
                  <div
                    style={{ width: `${(15 / 203) * 100}%` }}
                    className="bg-[#22D3EE] h-full transition-all duration-700 flex items-center justify-end pr-2 text-[10px] font-mono-numbers text-[#080C12] font-bold"
                  />
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-1 flex justify-between">
                  <span>0 g directos escape · 15 g generación de red</span>
                  <span className="font-mono-numbers">~7% respecto a combustión</span>
                </div>
              </div>

              {/* Electric - Mixed Matrix */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-1.5">
                  <span className="flex items-center gap-2 text-[#22D3EE]">
                    <span>⚡</span>
                    <span>Eléctrico (Matriz mixta / promedio global)</span>
                  </span>
                  <span className="font-mono-numbers font-bold text-[#F1F5F9]">
                    70 g CO₂e/km
                  </span>
                </div>
                <div className="h-6 w-full bg-[#080C12] rounded-lg overflow-hidden border border-[#263241] flex">
                  <div
                    style={{ width: `${(70 / 203) * 100}%` }}
                    className="bg-[#22D3EE]/80 h-full transition-all duration-700 flex items-center justify-end pr-2 text-[10px] font-mono-numbers text-[#080C12] font-bold"
                  />
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-1 flex justify-between">
                  <span>0 g directos escape · 70 g generación térmica/gas de red</span>
                  <span className="font-mono-numbers">~34% respecto a combustión</span>
                </div>
              </div>

              {/* Combustion */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-1.5">
                  <span className="flex items-center gap-2 text-[#F97316]">
                    <span>⛽</span>
                    <span>Combustión (Nafta / Gasolina Segmento C)</span>
                  </span>
                  <span className="font-mono-numbers font-bold text-[#F1F5F9]">
                    203 g CO₂e/km
                  </span>
                </div>
                <div className="h-6 w-full bg-[#080C12] rounded-lg overflow-hidden border border-[#263241] flex">
                  <div
                    style={{ width: '100%' }}
                    className="bg-[#F97316] h-full transition-all duration-700 flex items-center justify-end pr-2 text-[10px] font-mono-numbers text-white font-bold"
                  />
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-1 flex justify-between">
                  <span>165 g directo por escape + 38 g refino y distribución (Well-to-Tank)</span>
                  <span className="font-mono-numbers">100% (Línea base)</span>
                </div>
              </div>
            </div>

            {/* Collapsible: What is CO2e? */}
            <div className="border-t border-[#263241] pt-4">
              <button
                onClick={() => setShowCo2eExplain(!showCo2eExplain)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A5B4FC] hover:text-[#F1F5F9] transition-colors cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>¿Qué significa CO₂e?</span>
                {showCo2eExplain ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showCo2eExplain && (
                <div className="mt-3 p-4 bg-[#080C12] rounded-xl border border-[#263241] text-xs sm:text-sm text-[#94A3B8] leading-relaxed animate-in fade-in duration-200">
                  <p className="mb-2">
                    <strong className="text-[#F1F5F9]">CO₂ equivalente (CO₂e)</strong> es la métrica universal estandarizada por el IPCC para medir la huella de carbono.
                  </p>
                  <p>
                    Permite sumar el impacto del dióxido de carbono (CO₂), el metano (CH₄) y el óxido nitroso (N₂O) convirtiendo la capacidad de retención de calor de cada gas en la cantidad equivalente de CO₂ durante un horizonte de tiempo de 100 años (GWP100).
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ============================================================== */}
          {/* GRÁFICO 2 — FABRICACIÓN */}
          {/* ============================================================== */}
          <div className="bg-[#101720] border border-[#263241] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono-numbers text-[#A5B4FC] tracking-wider uppercase">
                GRÁFICO 02 DE 03
              </span>
              <span className="text-xs text-[#94A3B8] font-mono-numbers">
                Unidad: Toneladas de CO₂e (t CO₂e)
              </span>
            </div>

            <h3 className="text-lg sm:text-2xl font-bold text-[#F1F5F9] mb-2">
              ¿Qué impacto tiene fabricar cada vehículo?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mb-6">
              La fabricación incluye procesos como obtención de materiales, producción de componentes y ensamblaje.
            </p>

            {/* Bars for Chart 2 */}
            <div className="space-y-6 mb-6">
              {/* Electric Manufacturing */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-1.5">
                  <span className="flex items-center gap-2 text-[#22D3EE]">
                    <span>⚡</span>
                    <span>Vehículo eléctrico (Batería 60 kWh + Carrocería + Motor)</span>
                  </span>
                  <span className="font-mono-numbers font-bold text-[#F1F5F9]">
                    10.8 t CO₂e
                  </span>
                </div>
                {/* Segmented bar for electric manufacturing */}
                <div className="h-7 w-full bg-[#080C12] rounded-lg overflow-hidden border border-[#263241] flex">
                  {/* Chassis */}
                  <div
                    style={{ width: `${(5.2 / 12) * 100}%` }}
                    className="bg-[#22D3EE]/50 h-full flex items-center justify-center text-[10px] font-mono-numbers text-[#F1F5F9] font-medium"
                    title="Chasis y carrocería: 5.2 t"
                  >
                    Chasis 5.2t
                  </div>
                  {/* Battery */}
                  <div
                    style={{ width: `${(4.8 / 12) * 100}%` }}
                    className="bg-[#22D3EE] h-full flex items-center justify-center text-[10px] font-mono-numbers text-[#080C12] font-bold"
                    title="Batería: 4.8 t"
                  >
                    Batería 4.8t
                  </div>
                  {/* Motor */}
                  <div
                    style={{ width: `${(0.8 / 12) * 100}%` }}
                    className="bg-[#38bdf8] h-full flex items-center justify-center text-[10px] font-mono-numbers text-[#080C12] font-bold"
                    title="Motor e inversor: 0.8 t"
                  >
                    0.8t
                  </div>
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-1.5 flex items-center justify-between">
                  <span>Mayor impacto inicial debido a la química y celdas de la batería (~44% del total fab.)</span>
                  <span className="font-mono-numbers text-[#22D3EE]">+3.8 t vs ICE</span>
                </div>
              </div>

              {/* Combustion Manufacturing */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-1.5">
                  <span className="flex items-center gap-2 text-[#F97316]">
                    <span>⛽</span>
                    <span>Vehículo a combustión (Carrocería + Motor térmico)</span>
                  </span>
                  <span className="font-mono-numbers font-bold text-[#F1F5F9]">
                    7.0 t CO₂e
                  </span>
                </div>
                <div className="h-7 w-full bg-[#080C12] rounded-lg overflow-hidden border border-[#263241] flex">
                  {/* Chassis */}
                  <div
                    style={{ width: `${(5.2 / 12) * 100}%` }}
                    className="bg-[#F97316]/50 h-full flex items-center justify-center text-[10px] font-mono-numbers text-[#F1F5F9] font-medium"
                    title="Chasis y carrocería: 5.2 t"
                  >
                    Chasis 5.2t
                  </div>
                  {/* Engine */}
                  <div
                    style={{ width: `${(1.8 / 12) * 100}%` }}
                    className="bg-[#F97316] h-full flex items-center justify-center text-[10px] font-mono-numbers text-white font-bold"
                    title="Motor térmico y transmisión: 1.8 t"
                  >
                    Motor 1.8t
                  </div>
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-1.5 flex items-center justify-between">
                  <span>Menor impacto en fabricación; no requiere baterías de gran volumen.</span>
                  <span className="font-mono-numbers text-[#F97316]">7.0 t total</span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* GRÁFICO 3 — CICLO DE VIDA COMPLETO (GRÁFICO PRINCIPAL) */}
          {/* ============================================================== */}
          <div className="bg-[#101720] border-2 border-[#263241] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono-numbers text-[#4ADE80] tracking-wider uppercase font-semibold">
                GRÁFICO 03 (PRINCIPAL) · CICLO DE VIDA COMPLETO
              </span>
              <div className="flex items-center gap-1 p-1 bg-[#080C12] rounded-lg border border-[#263241]">
                <button
                  onClick={() => setSelectedLcaGrid('mixed')}
                  className={`px-2.5 py-1 text-xs rounded font-medium transition-colors cursor-pointer ${
                    selectedLcaGrid === 'mixed'
                      ? 'bg-[#22D3EE] text-[#080C12] font-bold'
                      : 'text-[#94A3B8] hover:text-[#F1F5F9]'
                  }`}
                >
                  Red Mixta
                </button>
                <button
                  onClick={() => setSelectedLcaGrid('clean')}
                  className={`px-2.5 py-1 text-xs rounded font-medium transition-colors cursor-pointer ${
                    selectedLcaGrid === 'clean'
                      ? 'bg-[#22D3EE] text-[#080C12] font-bold'
                      : 'text-[#94A3B8] hover:text-[#F1F5F9]'
                  }`}
                >
                  Red Renovable
                </button>
              </div>
            </div>

            <h3 className="text-lg sm:text-2xl font-bold text-[#F1F5F9] mb-2">
              ¿Qué ocurre cuando observamos todo el ciclo de vida?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mb-6">
              Simulación estandarizada para <strong>150.000 km</strong> recorridos.
            </p>

            {/* Visual Formula equation */}
            <div className="p-3 bg-[#080C12] rounded-xl border border-[#263241] text-xs font-mono-numbers text-[#94A3B8] text-center mb-6 flex items-center justify-center gap-2 flex-wrap">
              <span>FABRICACIÓN</span>
              <span className="text-[#F1F5F9]">+</span>
              <span>USO (150.000 KM)</span>
              <span className="text-[#F1F5F9]">+</span>
              <span>FIN DE VIDA</span>
              <span className="text-[#4ADE80] font-bold">=</span>
              <span className="text-[#F1F5F9] font-bold">IMPACTO TOTAL (t CO₂e)</span>
            </div>

            {/* Stacked comparison bars */}
            <div className="space-y-6">
              {/* Electric Stacked Bar */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-[#22D3EE]">
                    Vehículo eléctrico — {selectedLcaGrid === 'mixed' ? '22.1 t' : '13.9 t'} CO₂e
                  </span>
                  <span className="text-xs font-mono-numbers text-[#94A3B8]">
                    {selectedLcaGrid === 'mixed' ? 'Matriz eléctrica mixta' : 'Matriz eléctrica limpia'}
                  </span>
                </div>

                <div className="h-8 w-full bg-[#080C12] rounded-lg overflow-hidden border border-[#263241] flex">
                  {/* Fab: 10.8 t */}
                  <div
                    style={{ width: `${(10.8 / 40) * 100}%` }}
                    className="bg-[#22D3EE] h-full flex items-center justify-center text-[10px] font-mono-numbers text-[#080C12] font-bold"
                    title="Fabricación: 10.8 t"
                  >
                    Fab 10.8t
                  </div>
                  {/* Use: 10.5 t (mixed) or 2.3 t (clean) */}
                  <div
                    style={{ width: `${((selectedLcaGrid === 'mixed' ? 10.5 : 2.3) / 40) * 100}%` }}
                    className="bg-[#0284c7] h-full flex items-center justify-center text-[10px] font-mono-numbers text-white font-bold"
                    title={`Uso: ${selectedLcaGrid === 'mixed' ? '10.5 t' : '2.3 t'}`}
                  >
                    Uso {selectedLcaGrid === 'mixed' ? '10.5t' : '2.3t'}
                  </div>
                  {/* End of Life: 0.8 t */}
                  <div
                    style={{ width: `${(0.8 / 40) * 100}%` }}
                    className="bg-[#0369a1] h-full flex items-center justify-center text-[10px] font-mono-numbers text-white"
                    title="Fin de vida: 0.8 t"
                  >
                    0.8t
                  </div>
                </div>
              </div>

              {/* Combustion Stacked Bar */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-[#F97316]">
                    Vehículo a combustión — 38.1 t CO₂e
                  </span>
                  <span className="text-xs font-mono-numbers text-[#94A3B8]">
                    Combustible fósil estándar
                  </span>
                </div>

                <div className="h-8 w-full bg-[#080C12] rounded-lg overflow-hidden border border-[#263241] flex">
                  {/* Fab: 7.0 t */}
                  <div
                    style={{ width: `${(7.0 / 40) * 100}%` }}
                    className="bg-[#F97316] h-full flex items-center justify-center text-[10px] font-mono-numbers text-white font-bold"
                    title="Fabricación: 7.0 t"
                  >
                    Fab 7.0t
                  </div>
                  {/* Use: 30.5 t */}
                  <div
                    style={{ width: `${(30.5 / 40) * 100}%` }}
                    className="bg-[#c2410c] h-full flex items-center justify-center text-[10px] font-mono-numbers text-white font-bold"
                    title="Uso: 30.5 t"
                  >
                    Uso en ruta 30.5t
                  </div>
                  {/* End of Life: 0.6 t */}
                  <div
                    style={{ width: `${(0.6 / 40) * 100}%` }}
                    className="bg-[#9a3412] h-full flex items-center justify-center text-[10px] font-mono-numbers text-white"
                    title="Fin de vida: 0.6 t"
                  >
                    0.6t
                  </div>
                </div>
              </div>
            </div>

            {/* Rigorous Neutrality Notice: No Winners, Just Evidence */}
            <div className="mt-8 pt-5 border-t border-[#263241] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#94A3B8]">
              <div>
                <span className="text-[#F1F5F9] font-medium">Lectura neutral del dato:</span> El auto eléctrico arranca con mayor carga de fabricación (+3.8 t), pero compensa esa huella a medida que suma kilómetros limpios.
              </div>
              <div className="font-mono-numbers text-[11px] shrink-0 text-[#A5B4FC]">
                ICCT & ADEME LCA (2023)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
