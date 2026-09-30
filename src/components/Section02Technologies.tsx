import React from 'react';
import { Zap, Fuel, ArrowRight } from 'lucide-react';

export const Section02Technologies: React.FC = () => {
  return (
    <section id="dos-tecnologias" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            02 · DOS TECNOLOGÍAS
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-3">
            Dos tecnologías. Una misma función.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Ambas transportan personas y cargas de un punto a otro, pero la física y química de su propulsión operan de forma radicalmente distinta.
          </p>
        </div>

        {/* Split Screen Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Electric Vehicle Card */}
          <div className="bg-[#101720] border border-[#22D3EE]/30 rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22D3EE]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase">
                  TECNOLOGÍA 01
                </span>
                <span className="p-2 rounded-lg bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/20">
                  <Zap className="w-5 h-5" />
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] mb-1 flex items-center gap-2">
                <span>⚡</span>
                <span>Vehículo Eléctrico</span>
              </h3>
              <div className="text-xs font-mono-numbers text-[#22D3EE] mb-5">
                MOTOR ELÉCTRICO (EV)
              </div>

              <ul className="space-y-3 text-sm text-[#94A3B8]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 shrink-0" />
                  <span><strong className="text-[#F1F5F9]">Batería química:</strong> Almacena energía en celdas electroquímicas de iones de litio.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 shrink-0" />
                  <span><strong className="text-[#F1F5F9]">Electricidad:</strong> Energía suministrada desde la red de distribución eléctrica.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 shrink-0" />
                  <span><strong className="text-[#F1F5F9]">Motor eléctrico:</strong> Eficiencia de conversión superior al 85-90% de energía cinética.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 shrink-0" />
                  <span><strong className="text-[#22D3EE]">Sin emisiones por escape:</strong> Cero gases de combustión durante el rodaje.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#263241] text-xs font-mono-numbers text-[#94A3B8] flex items-center justify-between">
              <span>Alimentación: KWh</span>
              <span className="text-[#22D3EE]">Rendimiento térmico: Alto</span>
            </div>
          </div>

          {/* Combustion Vehicle Card */}
          <div className="bg-[#101720] border border-[#F97316]/30 rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F97316]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-numbers text-[#F97316] tracking-widest uppercase">
                  TECNOLOGÍA 02
                </span>
                <span className="p-2 rounded-lg bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20">
                  <Fuel className="w-5 h-5" />
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] mb-1 flex items-center gap-2">
                <span>⛽</span>
                <span>Vehículo a Combustión</span>
              </h3>
              <div className="text-xs font-mono-numbers text-[#F97316] mb-5">
                MOTOR TÉRMICO (ICE)
              </div>

              <ul className="space-y-3 text-sm text-[#94A3B8]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 shrink-0" />
                  <span><strong className="text-[#F1F5F9]">Combustible fósil:</strong> Tanque con derivados líquidos del petróleo (nafta, diésel o GNC).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 shrink-0" />
                  <span><strong className="text-[#F1F5F9]">Motor térmico:</strong> Cilindros con pistones y explosiones controladas de aire-mezcla.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 shrink-0" />
                  <span><strong className="text-[#F1F5F9]">Eficiencia motriz:</strong> Solo el ~25-35% de la energía del combustible mueve las ruedas; el resto es calor.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 shrink-0" />
                  <span><strong className="text-[#F97316]">Emisiones continuas:</strong> Escape con CO₂, óxidos de nitrógeno (NOₓ) y partículas.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#263241] text-xs font-mono-numbers text-[#94A3B8] flex items-center justify-between">
              <span>Alimentación: Litros / m³</span>
              <span className="text-[#F97316]">Pérdida por calor: ~70%</span>
            </div>
          </div>
        </div>

        {/* Transition Quote */}
        <div className="text-center py-4">
          <p className="text-lg sm:text-xl font-medium text-[#F1F5F9] italic">
            «Pero estas diferencias son solamente el comienzo.»
          </p>
        </div>
      </div>
    </section>
  );
};
