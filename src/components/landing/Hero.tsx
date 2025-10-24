import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import presentation from '../../public/presentation.png';

export default function Hero() {
  return (
    <section id='section-hero' className='text-white py-8'>
      <div className='container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12'>
        <div className='md:w-1/2 space-y-6'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            Transformando ideias em soluções digitais
          </h1>
          <p className='text-lg md:text-xl opacity-90 max-w-lg'>
            Desenvolvemos soluções tecnológicas inovadoras que impulsionam o crescimento do seu negócio.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
            <Link
              href='#contato'
              className='bg-white text-[#1565bd] hover:bg-opacity-90 transition-all px-6 py-3 rounded-md font-medium text-center'
            >
              Fale Conosco
            </Link>
            <Link
              href='#servicos'
              className='bg-transparent border border-white hover:bg-white hover:bg-opacity-10 transition-all px-6 py-3 rounded-md font-medium text-center'
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <Image id="presentation" src={presentation} alt='Ilustração do Hero' className='w-full object-contain'/>
        </div>
      </div>
    </section>
  );
}
