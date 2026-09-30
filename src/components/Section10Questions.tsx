import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/scientificData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const Section10Questions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#263241]/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono-numbers text-[#22D3EE] tracking-widest uppercase mb-2">
            10 · PREGUNTAS CLAVE
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight leading-snug mb-3">
            Preguntas que suelen aparecer
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Dudas frecuentes del público al evaluar la movilidad eléctrica y los motores de combustión.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#101720] border-[#22D3EE]/50 shadow-sm'
                    : 'bg-[#101720] border-[#263241] hover:border-[#94A3B8]/40'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-lg sm:text-xl text-[#22D3EE] font-mono-numbers">
                      0{index + 1}.
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#F1F5F9]">
                      {item.question}
                    </span>
                  </div>

                  <span className="p-1 rounded text-[#94A3B8] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#22D3EE]" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-[#263241]/60 bg-[#080C12]/30 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
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
