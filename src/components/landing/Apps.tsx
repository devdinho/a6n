'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';
import AppsCarousel from './AppsCarousel';

export default function Apps() {
  return (
    <section id="apps" className="py-24" style={{ background: '#060d1f' }}>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Soluções mobile
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto mb-4" />
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Aplicativos desenvolvidos com foco em usabilidade, segurança e conformidade com a LGPD.
          </p>
        </motion.div>

        <AppsCarousel />

        {/* Ver todos */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            <Smartphone size={15} />
            Ver todos os aplicativos
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
