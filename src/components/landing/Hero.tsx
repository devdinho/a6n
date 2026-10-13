'use client';

import React from 'react';
import Link from 'next/link';
import FloatingLines from '../ui/FloatingLines';
import TypingEffect from '../ui/TypingEffect';

const typingTexts = [
  'soluções digitais',
  'plataformas de IA',
  'sistemas escaláveis',
  'produtos web modernos',
];

export default function Hero() {
  return (
    <section
      id="section-hero"
      className="relative overflow-hidden text-white py-16 md:py-24"
    >
      {/* FloatingLines background */}
      <FloatingLines
        linesGradient={["#3B82F6","#6f6f6f","#06B6D4"]}
        animationSpeed={1}
        interactive
        bendRadius={8}
        bendStrength={-2}
        mouseDamping={0.05}
        parallax
        parallaxStrength={0.2}
      />

      {/* Subtle dark overlay for text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(20,40,100,0.55) 0%, rgba(13,71,161,0.25) 100%)', zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 flex flex-col items-center justify-between" style={{ zIndex: 2 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
            Transformando ideias em
            <br />
            {' '}
            <TypingEffect
              texts={typingTexts}
              typingSpeed={55}
              deletingSpeed={28}
              pauseMs={1400}
              className="text-[#ffffff] font-semibold"
            />
          </h1>
          <p className="text-lg md:text-xl opacity-85 max-w-lg">
            Desenvolvemos soluções tecnológicas inovadoras que impulsionam o crescimento do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#contato"
              className="bg-white text-[#1565bd] hover:bg-opacity-90 transition-all px-6 py-3 rounded-md font-medium text-center"
            >
              Fale Conosco
            </Link>
            <Link
              href="#servicos"
              className="bg-transparent border border-white hover:bg-white/10 transition-all px-6 py-3 rounded-md font-medium text-center backdrop-blur-sm"
            >
              Nossos Serviços
            </Link>
          </div>
      </div>
    </section>
  );
}
