import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onStart: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStart }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16 pb-12 overflow-hidden border-b border-[#263241]/50"
    >
      {/* Background Engineering Grid and Subtle Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 40%, rgba(34, 211, 238, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.06) 0%, transparent 50%),
            linear-gradient(to right, rgba(38, 50, 65, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(38, 50, 65, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px',
        }}
      />

      {/* Abstract Blueprint Vehicle Illustration (Lightweight vector lines) */}
      <div className="relative w-full max-w-lg mx-auto mb-8 h-40 sm:h-52 flex items-center justify-center opacity-85 select-none pointer-events-none">
        <svg
          viewBox="0 0 600 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_25px_rgba(34,211,238,0.15)]"
        >
          {/* Subtle grid reference lines */}
          <line x1="50" y1="120" x2="550" y2="120" stroke="#263241" strokeDasharray="4 6" strokeWidth="1" />
          <line x1="300" y1="20" x2="300" y2="220" stroke="#263241" strokeDasharray="4 6" strokeWidth="1" />

          {/* Left half: Electric Vehicle (Cyan) */}
          <path
            d="M 300 50 C 240 50, 200 65, 170 85 C 130 90, 85 110, 65 140 C 55 155, 55 175, 75 185 L 120 185"
            stroke="#22D3EE"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Left wheel outline */}
          <circle cx="160" cy="185" r="32" stroke="#22D3EE" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="160" cy="185" r="14" stroke="#22D3EE" strokeWidth="1.5" />
          <circle cx="160" cy="185" r="4" fill="#22D3EE" />

          {/* Electric Battery pack lines underneath floor */}
          <rect x="210" y="165" width="85" height="16" rx="3" stroke="#22D3EE" strokeWidth="1.5" fill="rgba(34,211,238,0.08)" />
          <line x1="225" y1="173" x2="280" y2="173" stroke="#22D3EE" strokeWidth="1" strokeDasharray="2 3" />

          {/* Electric Motor front node */}
          <circle cx="110" cy="155" r="12" stroke="#22D3EE" strokeWidth="1.5" fill="rgba(34,211,238,0.15)" />
          <text x="110" y="159" textAnchor="middle" fill="#22D3EE" fontSize="11" fontWeight="bold" fontFamily="monospace">⚡</text>

          {/* Right half: Combustion Vehicle (Orange) */}
          <path
            d="M 300 50 C 360 50, 400 65, 430 85 C 470 90, 515 110, 535 140 C 545 155, 545 175, 525 185 L 480 185"
            stroke="#F97316"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Right wheel outline */}
          <circle cx="440" cy="185" r="32" stroke="#F97316" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="440" cy="185" r="14" stroke="#F97316" strokeWidth="1.5" />
          <circle cx="440" cy="185" r="4" fill="#F97316" />

          {/* Combustion Engine node */}
          <rect x="475" y="145" width="22" height="20" rx="2" stroke="#F97316" strokeWidth="1.5" fill="rgba(249,115,22,0.12)" />
          <text x="486" y="159" textAnchor="middle" fill="#F97316" fontSize="10" fontWeight="bold" fontFamily="monospace">⛽</text>

          {/* Exhaust tailpipe line */}
          <path d="M 535 175 L 565 175 C 570 175, 575 173, 580 170" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Center split indicator */}
          <line x1="300" y1="40" x2="300" y2="195" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
        </svg>
      </div>

      {/* Main Content Composition */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Kicker badge */}
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono-numbers tracking-widest text-[#94A3B8] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
          <span>INVESTIGACIÓN AMBIENTAL</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F1F5F9] leading-tight mb-4" style={{ textWrap: 'balance' }}>
          ¿QUÉ TANTO CONTAMINAN LOS AUTOS?
        </h1>

        {/* Contrast Element */}
        <div className="my-3 flex items-center justify-center gap-4 text-xl sm:text-2xl font-bold tracking-wider">
          <span className="text-[#22D3EE] flex items-center gap-1.5">
            <span>⚡</span>
            <span className="text-sm sm:text-base font-semibold tracking-normal text-[#F1F5F9]">ELÉCTRICO</span>
          </span>
          <span className="text-[#94A3B8] text-sm font-mono-numbers px-2">VS</span>
          <span className="text-[#F97316] flex items-center gap-1.5">
            <span>⛽</span>
            <span className="text-sm sm:text-base font-semibold tracking-normal text-[#F1F5F9]">COMBUSTIÓN</span>
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-[#94A3B8] font-normal max-w-md mx-auto mt-2 mb-8 leading-relaxed">
          El impacto ambiental de dos tecnologías analizado a través de su ciclo de vida completo.
        </p>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-[#101720] hover:bg-[#1a2432] text-[#F1F5F9] font-medium text-sm sm:text-base border border-[#263241] hover:border-[#22D3EE] transition-all duration-200 shadow-lg shadow-cyan-950/20 active:scale-95 cursor-pointer"
        >
          <span className="tracking-wide">COMENZAR</span>
          <ArrowRight className="w-4 h-4 text-[#22D3EE] group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Explore prompt */}
        <div className="mt-12 flex flex-col items-center gap-1 text-xs text-[#94A3B8]/80">
          <span className="tracking-widest uppercase text-[11px] font-mono-numbers">explorar</span>
          <ChevronDown className="w-4 h-4 text-[#94A3B8] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
