import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import A6NLogo from '../../public/A6N 1.svg';

export default function Navbar() {
  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <Image src={A6NLogo} alt='A6N Logo' height={60}/>
          </Link>
          
          <nav className='hidden md:flex items-center space-x-8 py-4'>
            <Link href='/' className='text-gray-700 hover:text-[#1565bd] font-medium transition-colors'>
              Início
            </Link>
            <Link href='#servicos' className='text-gray-700 hover:text-[#1565bd] font-medium transition-colors'>
              Serviços
            </Link>
            <Link href='#' className='text-gray-700 hover:text-[#1565bd] font-medium transition-colors'>
              Sobre
            </Link>
            <Link href='#' className='text-gray-700 hover:text-[#1565bd] font-medium transition-colors'>
              Blog
            </Link>
            <Link href='#contato' className='text-gray-700 hover:text-[#1565bd] font-medium transition-colors'>
              Contato
            </Link>
          </nav>
          
          <div className='flex items-center space-x-4'>
            <Link
              href='#contato'
              className='hidden md:inline-flex bg-[#1565bd] text-white hover:bg-[#0d47a1] transition-colors px-4 py-2 rounded-md font-medium'
            >
              Fale Conosco
            </Link>
            
            <button className='md:hidden text-gray-700 hover:text-[#1565bd] transition-colors'>
              <span className='block w-6 h-0.5 bg-current mb-1'></span>
              <span className='block w-6 h-0.5 bg-current mb-1'></span>
              <span className='block w-6 h-0.5 bg-current'></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
