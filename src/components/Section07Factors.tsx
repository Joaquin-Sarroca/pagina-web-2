import React, { useState } from 'react';
import { Zap, Battery, Car, Milestone, Factory, Recycle, ChevronRight } from 'lucide-react';

interface FactorCard {
  id: string;
  icon: typeof Zap;
  color: string;
  title: string;
  summary: string;
  deepDive: string;
}

const FACTORS: FactorCard[] = [
  {
    id: 'f-grid',
    icon: Zap,
    color: '#22D3EE',
    title: 'Fuente de electricidad',
    summary: 'La matriz energética influye de forma directa en el impacto asociado a cada recarga.',
    deepDive: 'Cargar con energía solar o eólica genera ~15-25 g CO₂e/km. En cambio, en una red dependiente de carbón mineral o fuel oil sin filtros, las emisiones pueden superar los 150 g CO₂e/km.',
  },
  {
    id: 'f-bat',
    icon: Battery,
    color: '#38BDF8',
    title: 'Capacidad de la batería',
    summary: 'Su capacidad (kWh) y composición química determinan la huella inicial de fabricación.',
    deepDive: 'Un vehículo con batería de 40 kWh amortiza su huella de carbono mucho más rápido que un SUV de lujo con batería de 100 kWh, cuyo peso elevado también aumenta el consumo por kilómetro.',
  },
  {
    id: 'f-size',
    icon: Car,
    color: '#F97316',
    title: 'Tamaño y aerodinámica',
    summary: 'El peso y el coeficiente de resistencia modifican el consumo energético tanto en nafta como en electricidad.',
    deepDive: 'Los vehículos pesados (pick-ups, camionetas) demandan más energía por kilómetro recorrido y desgastan neumáticos con mayor fricción, generando más micropartículas de rodadura.',
  },
  {
    id: 'f-dist',
    icon: Milestone,
    color: '#4ADE80',
    title: 'Distancia recorrida',
    summary: 'El impacto acumulado cambia radicalmente con la cantidad total de kilómetros acumulados.',
    deepDive: 'Si un vehículo eléctrico se usa poco (menos de 30.000 km en toda su vida), difícilmente amortizará las emisiones de su batería. A mayor kilometraje, mayor es la ventaja climática.',
  },
  {
    id: 'f-manuf',
    icon: Factory,
    color: '#A5B4FC',
    title: 'Procesos de fabricación',
    summary: 'Los materiales y la fuente de energía de las plantas industriales modifican la huella de partida.',
    deepDive: 'El uso de aluminio reciclado y fábricas que emplean calor renovable o vapor geotérmico pueden reducir hasta un 40% las emisiones iniciales de producción de ambos vehículos.',
  },
  {
    id: 'f-recic',
    icon: Recycle,
    color: '#34D399',
    title: 'Fin de vida y reciclaje',
    summary: 'La recuperación y reutilización de componentes y materiales cierran el ciclo de vida.',
    deepDive: 'La reutilización de baterías como sistemas de respaldo doméstico y el posterior reciclado hidrometalúrgico de níquel, cobalto y litio reducen la necesidad de nueva minería virgen.',
  },
];

export const Section07Factors: React.FC = () => {
  const [activeFactorId, setActiveFactorId] = useState<string | null>(null);

  return (
    <section id="factores" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            07 · VARIABLES CRÍTICAS
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-3">
            El resultado depende del contexto.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            No existe una cifra única e inamovible. Las comparaciones de impacto ambiental están sujetas a seis factores determinantes:
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FACTORS.map((factor) => {
            const Icon = factor.icon;
            const isOpen = activeFactorId === factor.id;

            return (
              <div
                key={factor.id}
                onClick={() => setActiveFactorId(isOpen ? null : factor.id)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isOpen
                    ? 'bg-[#162230] border-[#22D3EE] shadow-md shadow-cyan-950/20'
                    : 'bg-[#101720] border-[#263241] hover:border-[#94A3B8]/40 hover:bg-[#121b26]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="p-2 rounded-xl"
                      style={{ backgroundColor: `${factor.color}15`, color: factor.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono-numbers text-[#94A3B8]">
                      {isOpen ? 'Detalle' : 'Tocá para ver'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F1F5F9] mb-2 leading-snug">
                    {factor.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-3">
                    {factor.summary}
                  </p>
                </div>

                {isOpen ? (
                  <div className="pt-3 border-t border-[#263241] text-xs text-[#F1F5F9] leading-relaxed bg-[#080C12]/50 p-2.5 rounded-lg animate-in fade-in duration-150">
                    <strong className="text-[#22D3EE] block mb-1 font-mono-numbers text-[10px] uppercase">
                      Implicancia directa:
                    </strong>
                    {factor.deepDive}
                  </div>
                ) : (
                  <div className="pt-2 text-[11px] font-mono-numbers text-[#22D3EE] flex items-center gap-1">
                    <span>Profundizar</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
