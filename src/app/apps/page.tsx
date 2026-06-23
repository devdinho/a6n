'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Shield, ArrowRight } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const apps = [
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

export default function AppsPage() {
  return (
    <main>
      <Navbar />

      <section className="py-24" style={{ background: '#060d1f' }}>
        <div className="container mx-auto px-4 md:px-6">

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#06B6D4] text-xs font-semibold tracking-[0.18em] uppercase mb-3">
              Nossos Aplicativos
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Soluções mobile da A6N Tecnologia
            </h1>
            <div className="w-12 h-px bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto mb-4" />
            <p className="text-white/50 max-w-xl mx-auto text-base">
              Aplicativos desenvolvidos com foco em usabilidade, segurança e conformidade com a LGPD.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="max-w-2xl mx-auto grid gap-5">
            {apps.map((app, index) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={app.packageName}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-xl p-6 flex flex-col gap-4 overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
                  />

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center text-white shrink-0"
                      style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' }}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <h2 className="text-white font-semibold text-base">{app.name}</h2>
                        <span
                          className="text-[#06B6D4] text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(6,182,212,0.10)', border: '1px solid rgba(6,182,212,0.20)' }}
                        >
                          {app.platform}
                        </span>
                      </div>
                      <p className="text-white/45 text-sm">{app.tagline}</p>
                      <p className="text-white/25 text-xs font-mono mt-0.5">{app.packageName}</p>
                    </div>
                  </div>

                  <p className="text-white/45 text-sm leading-relaxed">{app.description}</p>

                  <ul className="space-y-1.5">
                    {app.features.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/55">
                        <span className="text-[#06B6D4] mt-0.5 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link
                      href={app.privacyUrl}
                      className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#06B6D4] transition-colors"
                    >
                      <Shield size={14} />
                      Política de Privacidade
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="text-center text-white/20 text-sm mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Mais aplicativos em breve.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
