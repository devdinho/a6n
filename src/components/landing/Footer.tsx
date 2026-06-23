import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import A6NLogo from '../../public/A6N 2.svg';
import { services, email, phoneNumber } from '../contants';
import { MapPin, Mail, Phone } from 'lucide-react';


export default function Footer() {
  return (
    <footer style={{ background: '#04091a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image src={A6NLogo} alt="A6N Logo" height={32} />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Transformando ideias em soluções digitais desde 2022.
            </p>
            {/* <div className="flex gap-3">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-md flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {['Sobre nós', 'Nosso time', 'Carreiras', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 hover:text-[#06B6D4] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href="#servicos" className="text-white/40 hover:text-[#06B6D4] text-sm transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-white/40 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#06B6D4]" />
                Palmas, TO
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Mail size={15} className="mt-0.5 shrink-0 text-[#06B6D4]" />
                <a href={`mailto:${email}`} className="text-white/40 hover:text-[#06B6D4] transition-colors break-all">
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#06B6D4]" />
                <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="text-white/40 hover:text-[#06B6D4] transition-colors">
                  {phoneNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white/25 text-xs">© 2026 A6N Tecnologia. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            {['Termos de Uso', 'Privacidade', 'Cookies'].map((item) => (
              <Link key={item} href="#" className="text-white/25 hover:text-white/60 text-xs transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
