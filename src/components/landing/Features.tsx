import React from 'react';

export default function Features() {
  return (
    <section className='bg-white py-20' id='servicos'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Nossos Serviços</h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>Oferecemos soluções completas para transformar sua presença digital.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:translate-y-[-5px] duration-300'>
            <div className='w-12 h-12 bg-[#1565bd] text-white rounded-full flex items-center justify-center mb-4'></div>
            <h3 className='text-xl font-semibold mb-2 text-gray-900'>Desenvolvimento Web</h3>
            <p className='text-gray-600'>Criamos sites e aplicações web modernas, responsivas e otimizadas para SEO.</p>
            <ul className='mt-4 space-y-2 text-gray-600'>
              <li className='flex items-center'>
                <span className='mr-2 text-[#1565bd]'></span> Sites institucionais
              </li>
              <li className='flex items-center'>
                <span className='mr-2 text-[#1565bd]'></span> E-commerce
              </li>
              <li className='flex items-center'>
                <span className='mr-2 text-[#1565bd]'></span> Aplicações web
              </li>
            </ul>
          </div>

          <div className='bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:translate-y-[-5px] duration-300'>
            <div className='w-12 h-12 bg-[#1565bd] text-white rounded-full flex items-center justify-center mb-4'></div>
            <h3 className='text-xl font-semibold mb-2 text-gray-900'>Aplicativos Mobile</h3>
            <p className='text-gray-600'>Desenvolvemos aplicativos nativos e híbridos para iOS e Android.</p>
            <ul className='mt-4 space-y-2 text-gray-600'>
              <li className='flex items-center'>
                <span className='mr-2 text-[#1565bd]'></span> Apps iOS e Android
              </li>
              <li className='flex items-center'>
                <span className='mr-2 text-[#1565bd]'></span> Interfaces intuitivas
              </li>
              <li className='flex items-center'>
                <span className='mr-2 text-[#1565bd]'></span> Integração com APIs
              </li>
            </ul>
          </div>

          <div className='bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:translate-y-[-5px] duration-300'>
            <div className='w-12 h-12 bg-[#1565bd] text-white rounded-full flex items-center justify-center mb-4'></div>
            <h3 className='text-xl font-semibold mb-2 text-gray-900'>Consultoria em TI</h3>
            <p className='text-gray-600'>Oferecemos consultoria especializada para otimizar seus processos tecnológicos.</p>
            <ul className='mt-4 space-y-2 text-gray-600'>
              <li className='flex items-center'>
                <span className='mr-2 text-[#1565bd]'></span> Análise de sistemas
              </li>
              <li className='flex items-center'>
                <span className='mr-2 text-[#1565bd]'></span> Otimização de processos
              </li>
              <li className='flex items-center'>
                <span className='mr-2 text-[#1565bd]'></span> Segurança da informação
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
