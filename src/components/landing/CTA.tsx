'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="contato"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060d1f 0%, #0a1535 50%, #060d1f 100%)' }}
    >
      {/* Glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Copy */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#06B6D4] text-xs font-semibold tracking-[0.18em] uppercase mb-3">
              Vamos conversar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Pronto para transformar<br />seu negócio?
            </h2>
            <p className="text-white/55 text-base mb-8 max-w-md">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a impulsionar seu projeto.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="mailto:contato@a6n.tech"
                className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563eb] transition-colors px-5 py-2.5 rounded-md text-sm font-medium"
              >
                <Mail size={16} />
                Enviar Email
              </Link>
              <Link
                href="tel:+5563992041379"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all px-5 py-2.5 rounded-md text-sm font-medium backdrop-blur-sm"
              >
                <Phone size={16} />
                Ligar Agora
              </Link>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl p-7"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <h3 className="text-white text-lg font-semibold mb-5">Fale com um especialista</h3>
            <form className="space-y-4">
              {[
                { id: 'name',    label: 'Nome',     type: 'text',  placeholder: 'Seu nome completo' },
                { id: 'email',   label: 'Email',    type: 'email', placeholder: 'seu@email.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-xs font-medium text-white/50 mb-1.5">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    className="w-full px-3 py-2.5 rounded-md text-sm text-white placeholder-white/25 outline-none transition-colors"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    placeholder={placeholder}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'; }}
                    onBlur={(e)  => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-white/50 mb-1.5">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2.5 rounded-md text-sm text-white placeholder-white/25 outline-none transition-colors resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  placeholder="Como podemos ajudar?"
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'; }}
                  onBlur={(e)  => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-[#2563eb] transition-colors text-white py-2.5 rounded-md text-sm font-medium"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
