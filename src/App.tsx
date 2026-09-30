import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { Section01Problem } from './components/Section01Problem';
import { Section02Technologies } from './components/Section02Technologies';
import { Section03DirectImpact } from './components/Section03DirectImpact';
import { Section04IndirectImpact } from './components/Section04IndirectImpact';
import { Section05LifeCycle } from './components/Section05LifeCycle';
import { Section06TheData } from './components/Section06TheData';
import { Section07Factors } from './components/Section07Factors';
import { Section08Scenarios } from './components/Section08Scenarios';
import { Section09Argentina } from './components/Section09Argentina';
import { Section10Questions } from './components/Section10Questions';
import { Section11Reflection } from './components/Section11Reflection';
import { Section12Sources } from './components/Section12Sources';
import { Footer } from './components/Footer';
import { NAV_SECTIONS } from './data/scientificData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    NAV_SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleStart = () => {
    const problemSection = document.getElementById('el-problema');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080C12] text-[#F1F5F9] font-sans antialiased selection:bg-[#22D3EE]/20 selection:text-[#22D3EE] relative">
      {/* Persistent Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* 00: Inicio */}
        <HeroSection onStart={handleStart} />

        {/* 01: El Problema */}
        <Section01Problem />

        {/* 02: Dos Tecnologías */}
        <Section02Technologies />

        {/* 03: Impacto Directo */}
        <Section03DirectImpact />

        {/* 04: Impacto Indirecto */}
        <Section04IndirectImpact />

        {/* 05: Ciclo de Vida */}
        <Section05LifeCycle />

        {/* 06: Los Datos */}
        <Section06TheData />

        {/* 07: Factores */}
        <Section07Factors />

        {/* 08: Escenarios */}
        <Section08Scenarios />

        {/* 09: Argentina */}
        <Section09Argentina />

        {/* 10: Preguntas */}
        <Section10Questions />

        {/* 11: Reflexión */}
        <Section11Reflection />

        {/* 12: Fuentes */}
        <Section12Sources />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
