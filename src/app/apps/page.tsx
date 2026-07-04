'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import AppsCarousel from '@/components/landing/AppsCarousel';

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

          <AppsCarousel showPackageName showPrivacyArrow />

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
