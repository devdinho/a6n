import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className='bg-gradient-to-r from-[#1565bd] to-[#0d47a1] py-16' id='contato'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='text-white'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Pronto para transformar seu negócio?</h2>
            <p className='text-lg opacity-90 mb-6'>Entre em contato conosco hoje mesmo e descubra como podemos ajudar a impulsionar seu projeto.</p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                href='mailto:a6ntechnology@gmail.com'
                className='bg-white text-[#1565bd] hover:bg-opacity-90 transition-all px-6 py-3 rounded-md font-medium text-center inline-flex items-center justify-center'
              >
                <span className='mr-2'></span>
                Enviar Email
              </Link>
              <Link
                href='tel:+5563992041379'
                className='bg-transparent border border-white hover:bg-white hover:bg-opacity-10 transition-all px-6 py-3 rounded-md font-medium text-center inline-flex items-center justify-center'
              >
                <span className='mr-2'></span>
                Ligar Agora
              </Link>
            </div>
          </div>
          
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-semibold mb-4 text-gray-900'>Fale com um especialista</h3>
            <form className='space-y-4'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>Nome</label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1565bd] focus:border-[#1565bd] outline-none'
                  placeholder='Seu nome completo'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1565bd] focus:border-[#1565bd] outline-none'
                  placeholder='seu@email.com'
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>Mensagem</label>
                <textarea
                  id='message'
                  rows={4}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1565bd] focus:border-[#1565bd] outline-none'
                  placeholder='Como podemos ajudar?'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-[#1565bd] text-white hover:bg-[#0d47a1] transition-colors px-6 py-3 rounded-md font-medium'
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
