"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "../contants";

export default function Features() {
  return (
    <section className="py-24" id="servicos" style={{ background: '#060d1f' }}>
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
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto mb-4" />
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Do desenvolvimento à infraestrutura em nuvem, com foco em
            performance, segurança e escalabilidade.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl p-6 flex flex-col gap-4 overflow-hidden cursor-default"
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

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' }}
              >
                {service.icon}
              </div>

              <div>
                <h3 className="text-white font-semibold text-base mb-1">
                  {service.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="mt-auto space-y-1.5">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/55">
                    <span className="text-[#06B6D4] mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
