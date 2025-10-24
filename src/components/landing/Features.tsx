"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "../contants";


export default function Features() {
  return (
    <section className="bg-white py-20" id="servicos">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções tecnológicas completas do desenvolvimento à
            infraestrutura para impulsionar negócios digitais com performance,
            segurança e escalabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform duration-300 overflow-hidden"
            >
              {/* Brilho de fundo animado */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{
                  scale: 1.2,
                  opacity: 0.2,
                  filter: "blur(60px)",
                }}
                className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#1565bd] via-[#004ad4] to-[#1565bd] blur-3xl rounded-lg"
              />

              {/* Ícone com gradiente fixo */}
              <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-[#1565bd] to-[#004ad4] text-white rounded-full flex items-center justify-center mb-4 shadow-md">
                {service.icon}
              </div>

              <h3 className="relative z-10 text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-600">
                {service.description}
              </p>
              <ul className="relative z-10 mt-4 space-y-2 text-gray-600">
                {service.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
