'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Shield,
  type LucideIcon,
} from 'lucide-react';

type AppInfo = {
  name: string;
  packageName: string;
  tagline: string;
  description: string;
  features: string[];
  platform: string;
  privacyUrl: string;
  icon: LucideIcon;
};

const apps: AppInfo[] = [
  {
    name: 'Zuraio AI Hub',
    packageName: 'br.a6n.zuraioaihub',
    tagline: 'Hub de IA para produtividade e agentes',
    description:
      'Aplicativo Android para acesso ao Zuraio AI Hub, com login Microsoft, chat com IA, comandos por áudio, upload e download de arquivos.',
    features: [
      'Login Microsoft e sessão segura',
      'Chat com IA e comandos por voz',
      'Upload e download de documentos',
    ],
    platform: 'Android',
    privacyUrl: '/apps/zuraio-ai-hub/privacy',
    icon: Bot,
  },
  {
    name: 'PlantAgora',
    packageName: 'com.a6n.plantagora',
    tagline: 'Gestão de hortas comunitárias',
    description:
      'Plataforma completa para gerenciamento de hortas comunitárias. Organize membros, parcelas, colheitas e comunicações em um só lugar.',
    features: [
      'Gestão de membros e parcelas',
      'Registro de colheitas e atividades',
      'Notificações e comunicados',
    ],
    platform: 'Android',
    privacyUrl: '/apps/plantagora/privacy',
    icon: Leaf,
  },
];

type AppsCarouselProps = {
  showPackageName?: boolean;
  showPrivacyArrow?: boolean;
};

export default function AppsCarousel({
  showPackageName = false,
  showPrivacyArrow = false,
}: AppsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeApp = apps[activeIndex];
  const Icon = activeApp.icon;

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? apps.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === apps.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[3rem_minmax(0,42rem)_3rem] items-center gap-4">
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Aplicativo anterior"
          className="hidden md:flex w-11 h-11 rounded-full items-center justify-center justify-self-end text-white/55 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeApp.packageName}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl p-6 flex flex-col gap-4 overflow-hidden min-h-[22rem]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
              />

              <div className="flex items-start gap-4 relative">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-white shrink-0"
                  style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' }}
                >
                  <Icon size={22} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="text-white font-semibold text-base">{activeApp.name}</h3>
                    <span
                      className="text-[#06B6D4] text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(6,182,212,0.10)', border: '1px solid rgba(6,182,212,0.20)' }}
                    >
                      {activeApp.platform}
                    </span>
                  </div>
                  <p className="text-white/45 text-sm">{activeApp.tagline}</p>
                  {showPackageName ? (
                    <p className="text-white/25 text-xs font-mono mt-0.5">{activeApp.packageName}</p>
                  ) : null}
                </div>
              </div>

              <p className="text-white/45 text-sm leading-relaxed relative">{activeApp.description}</p>

              <ul className="space-y-1.5 relative">
                {activeApp.features.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/55">
                    <span className="text-[#06B6D4] mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-2 relative mt-auto">
                <Link
                  href={activeApp.privacyUrl}
                  className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#06B6D4] transition-colors"
                >
                  <Shield size={14} />
                  Política de Privacidade
                  {showPrivacyArrow ? <ArrowRight size={13} /> : null}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Próximo aplicativo"
          className="hidden md:flex w-11 h-11 rounded-full items-center justify-center justify-self-start text-white/55 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex md:hidden items-center justify-center gap-3 mt-5">
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Aplicativo anterior"
          className="w-10 h-10 rounded-full flex items-center justify-center text-white/55 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          <ChevronLeft size={19} />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Próximo aplicativo"
          className="w-10 h-10 rounded-full flex items-center justify-center text-white/55 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          <ChevronRight size={19} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {apps.map((app, index) => (
          <button
            key={app.packageName}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Mostrar ${app.name}`}
            aria-current={activeIndex === index}
            className="h-2 rounded-full transition-all"
            style={{
              width: activeIndex === index ? 28 : 8,
              background: activeIndex === index ? '#06B6D4' : 'rgba(255,255,255,0.18)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
