'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import A6NLogo from '@/public/A6N 1.svg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060d1f]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src={A6NLogo} alt="A6N Logo" height={36} 
              style={{
                filter: "brightness(0) saturate(100%) invert(96%) sepia(97%) saturate(12%) hue-rotate(237deg) brightness(103%) contrast(103%)"
              }}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '/',         label: 'Início' },
              { href: '#servicos', label: 'Serviços' },
              { href: '/apps',     label: 'Apps' },
              { href: '#',         label: 'Sobre' },
              { href: '#contato',  label: 'Contato' },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-white/70 hover:text-white font-medium transition-colors text-sm"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="#contato"
              className="hidden md:inline-flex items-center bg-[#3B82F6] hover:bg-[#2563eb] text-white transition-colors px-4 py-2 rounded-md text-sm font-medium"
            >
              Fale Conosco
            </Link>

            <button className="md:hidden text-white/80 hover:text-white transition-colors" aria-label="Menu">
              <span className="block w-6 h-0.5 bg-current mb-1.5" />
              <span className="block w-6 h-0.5 bg-current mb-1.5" />
              <span className="block w-6 h-0.5 bg-current" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
