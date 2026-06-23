'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const LAST_UPDATED = '23 de junho de 2026';
const CONTACT_EMAIL = 'contato@a6n.tech';
const SITE_URL = 'https://a6n.tech';
const APP_NAME = 'PlantAgora';
const PACKAGE_NAME = 'com.a6n.plantagora';
const COMPANY = 'A6N Tecnologia';

const sections = [
  {
    title: '1. Identificação',
    content: (
      <div
        className="rounded-xl overflow-hidden text-sm"
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {[
          ['Aplicativo', APP_NAME],
          ['Pacote (Package Name)', PACKAGE_NAME],
          ['Plataforma', 'Android'],
          ['Empresa responsável', COMPANY],
          ['Site oficial', SITE_URL],
          ['Contato', CONTACT_EMAIL],
        ].map(([label, value], i) => (
          <div
            key={label}
            className="flex flex-col sm:flex-row sm:items-center px-5 py-3 gap-1"
            style={{
              background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
              borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.06)' : undefined,
            }}
          >
            <span className="text-white/40 text-xs uppercase tracking-wider sm:w-44 shrink-0">{label}</span>
            <span className="text-white/70 font-mono text-xs">{value}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: '2. Dados coletados',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">
          O {APP_NAME} pode coletar as seguintes categorias de dados pessoais, dependendo das funcionalidades utilizadas:
        </p>
        <div className="grid gap-3">
          {[
            { label: 'Nome completo', desc: 'Para identificação do usuário no sistema da horta comunitária.' },
            { label: 'Endereço de e-mail', desc: 'Para criação de conta, autenticação e comunicações.' },
            { label: 'Número de telefone', desc: 'Para facilitar o contato entre membros e administradores.' },
            { label: 'Localização geográfica', desc: 'Coletada apenas com permissão explícita. Usada para localizar hortas próximas.' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-4 flex flex-col gap-1"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="text-white text-sm font-medium">{item.label}</span>
              <span className="text-white/45 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-sm mt-4">
          <span className="text-[#06B6D4]">▸</span>{' '}
          Não coletamos dados de pagamento, documentos, biometria, dados de saúde nem informações de redes de anúncios.
        </p>
      </>
    ),
  },
  {
    title: '3. Finalidade e base legal (LGPD)',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">
          Tratamos seus dados para as seguintes finalidades, com as respectivas bases legais previstas no art. 7º da LGPD:
        </p>
        <div
          className="rounded-xl overflow-hidden text-sm"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div
            className="flex px-5 py-2.5 gap-4"
            style={{ background: 'rgba(59,130,246,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span className="text-white/40 text-xs uppercase tracking-wider flex-1">Finalidade</span>
            <span className="text-white/40 text-xs uppercase tracking-wider w-52 shrink-0">Base legal</span>
          </div>
          {[
            ['Criação e manutenção de conta', 'Execução de contrato (art. 7º, V)'],
            ['Gestão de hortas e membros', 'Execução de contrato (art. 7º, V)'],
            ['Envio de notificações da horta', 'Consentimento (art. 7º, I)'],
            ['Localização para busca de hortas', 'Consentimento (art. 7º, I)'],
            ['Cumprimento de obrigação legal', 'Obrigação legal (art. 7º, II)'],
          ].map(([fin, base], i) => (
            <div
              key={fin}
              className="flex items-start px-5 py-3 gap-4"
              style={{
                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : undefined,
              }}
            >
              <span className="text-white/60 flex-1">{fin}</span>
              <span className="text-white/40 w-52 shrink-0">{base}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: '4. Como usamos os dados',
    content: (
      <ul className="space-y-2">
        {[
          'Autenticar e identificar o usuário no aplicativo;',
          'Gerenciar parcelas, membros e atividades da horta comunitária;',
          'Enviar notificações e comunicados relacionados à horta;',
          'Exibir hortas próximas ao usuário (apenas com permissão de localização);',
          'Melhorar a estabilidade do app com base em padrões de uso agregados e anônimos.',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-white/55">
            <span className="text-[#06B6D4] mt-0.5 shrink-0">▸</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: '5. Compartilhamento de dados',
    content: (
      <>
        <div
          className="rounded-xl p-5 mb-4"
          style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.18)' }}
        >
          <p className="text-white font-medium text-sm mb-1">Não compartilhamos seus dados com terceiros.</p>
          <p className="text-white/55 text-sm">
            O {APP_NAME} <strong className="text-white">não vende, aluga nem repassa</strong> dados pessoais
            a empresas parceiras, anunciantes ou quaisquer terceiros para fins comerciais.
          </p>
        </div>
        <p className="text-white/50 text-sm">
          Os dados podem ser acessados somente pela equipe técnica da {COMPANY} com finalidade operacional,
          ou quando exigido por lei, ordem judicial ou autoridade competente.
        </p>
      </>
    ),
  },
  {
    title: '6. Armazenamento e segurança',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">
          Os dados são armazenados em servidores seguros com acesso restrito. Adotamos medidas técnicas e organizacionais
          para proteger suas informações contra acesso não autorizado, perda ou destruição:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            'Criptografia em trânsito (HTTPS/TLS);',
            'Autenticação segura com controle de sessão;',
            'Acesso restrito por credenciais e controle de permissões;',
            'Monitoramento de segurança da infraestrutura.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/55">
              <span className="text-[#06B6D4] mt-0.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-white/50 text-sm">
          Os dados são armazenados no Brasil ou em países com grau de proteção adequado, conforme exigências da LGPD.
        </p>
      </>
    ),
  },
  {
    title: '7. Permissões Android',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">O aplicativo pode solicitar as seguintes permissões:</p>
        <div className="grid gap-3">
          {[
            {
              label: 'Localização',
              code: 'ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION',
              desc: 'Usada para identificar hortas comunitárias próximas. Solicitada apenas ao usar essa funcionalidade e pode ser negada sem impacto no uso geral.',
            },
            {
              label: 'Notificações',
              code: 'POST_NOTIFICATIONS',
              desc: 'Usada para enviar alertas e comunicados sobre atividades da horta. Pode ser desativada nas configurações do dispositivo a qualquer momento.',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-5 flex flex-col gap-2"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white text-sm font-medium">{item.label}</span>
                <code className="text-[#06B6D4] font-mono text-xs">{item.code}</code>
              </div>
              <p className="text-white/45 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-sm mt-4">
          Nenhuma permissão é concedida automaticamente. O Android solicita confirmação explícita antes de qualquer acesso.
        </p>
      </>
    ),
  },
  {
    title: '8. Direitos do titular (LGPD)',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">
          Nos termos dos arts. 17 a 22 da LGPD, você tem os seguintes direitos:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            ['Confirmação', 'Confirmar se tratamos seus dados.'],
            ['Acesso', 'Obter cópia dos dados que mantemos sobre você.'],
            ['Correção', 'Corrigir dados incompletos ou desatualizados.'],
            ['Exclusão', 'Solicitar remoção de dados desnecessários.'],
            ['Portabilidade', 'Receber seus dados em formato estruturado.'],
            ['Revogação', 'Revogar consentimento dado anteriormente.'],
            ['Informação', 'Saber se compartilhamos seus dados.'],
            ['Oposição', 'Opor-se ao tratamento em desconformidade com a lei.'],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl p-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-white text-sm font-medium mb-0.5">{title}</p>
              <p className="text-white/45 text-sm">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-sm">
          Para exercer esses direitos, entre em contato pelo e-mail{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#06B6D4] hover:underline">
            {CONTACT_EMAIL}
          </a>
          . Responderemos em até 15 dias corridos.
        </p>
      </>
    ),
  },
  {
    title: '9. Retenção e exclusão de dados',
    content: (
      <>
        <p className="text-white/50 text-sm mb-3">
          Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política,
          salvo obrigação legal de retenção por prazo superior.
        </p>
        <p className="text-white/50 text-sm">
          Ao solicitar a exclusão de conta, seus dados pessoais serão removidos em até{' '}
          <span className="text-white font-medium">30 dias</span>, exceto aqueles cuja retenção seja exigida por lei.
        </p>
      </>
    ),
  },
  {
    title: '10. Menores de idade',
    content: (
      <p className="text-white/50 text-sm">
        O {APP_NAME} não é destinado a crianças menores de 13 anos. Não coletamos intencionalmente dados de menores.
        Caso identifiquemos dados de menores sem consentimento parental adequado, removeremos essas informações imediatamente.
      </p>
    ),
  },
  {
    title: '11. Atualizações desta política',
    content: (
      <>
        <p className="text-white/50 text-sm mb-3">
          Esta política pode ser atualizada periodicamente para refletir mudanças no aplicativo ou nas exigências legais.
          Notificaremos os usuários sobre alterações relevantes por meio do aplicativo ou por e-mail.
        </p>
        <p className="text-white/50 text-sm">
          A continuidade do uso do {APP_NAME} após a publicação de uma nova versão implica aceitação dos novos termos.
        </p>
      </>
    ),
  },
  {
    title: '12. Contato',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">
          Para dúvidas, solicitações ou reclamações relacionadas a esta Política de Privacidade, entre em contato com a {COMPANY}:
        </p>
        <div
          className="rounded-xl p-5 space-y-4"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {[
            ['Empresa', COMPANY, undefined],
            ['E-mail', CONTACT_EMAIL, `mailto:${CONTACT_EMAIL}`],
            ['Site', SITE_URL, SITE_URL],
          ].map(([label, value, href]) => (
            <div key={label as string}>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">{label}</p>
              {href ? (
                <a href={href} className="text-[#06B6D4] text-sm hover:underline" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {value}
                </a>
              ) : (
                <p className="text-white/70 text-sm">{value}</p>
              )}
            </div>
          ))}
        </div>
      </>
    ),
  },
];

export default function PlantAgoraPrivacyPage() {
  return (
    <main>
      <Navbar />

      <section className="py-24" style={{ background: '#060d1f' }}>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">

          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/apps"
              className="inline-flex items-center gap-1.5 text-white/35 hover:text-[#06B6D4] text-sm mb-10 transition-colors"
            >
              <ArrowLeft size={14} />
              Nossos aplicativos
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-white mx-auto mb-5"
              style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' }}
            >
              <Shield size={24} />
            </div>
            <span className="inline-block text-[#06B6D4] text-xs font-semibold tracking-[0.18em] uppercase mb-3">
              Privacidade
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Política de Privacidade
            </h1>
            <div className="w-12 h-px bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto mb-4" />
            <p className="text-white/50 text-base mb-1">
              <span className="text-white font-medium">{APP_NAME}</span>{' '}
              <span className="text-white/20 mx-1">/</span>{' '}
              {COMPANY}
            </p>
            <p className="text-white/25 text-xs font-mono">{PACKAGE_NAME}</p>
            <p className="text-white/25 text-xs mt-2">Última atualização: {LAST_UPDATED}</p>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl p-5 mb-10 text-sm text-white/55 leading-relaxed"
            style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.18)' }}
          >
            Esta Política de Privacidade descreve como o aplicativo{' '}
            <strong className="text-white">{APP_NAME}</strong>{' '}
            (pacote: <code className="text-[#06B6D4] font-mono text-xs">{PACKAGE_NAME}</code>),
            desenvolvido e operado pela <strong className="text-white">{COMPANY}</strong>,
            coleta, usa e protege os dados pessoais dos seus usuários, em conformidade com a Lei Geral
            de Proteção de Dados (LGPD, Lei nº 13.709/2018).
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <h2
                  className="text-white text-base font-semibold mb-4 pb-2"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {section.title}
                </h2>
                {section.content}
              </motion.div>
            ))}
          </div>

          {/* Back bottom */}
          <motion.div
            className="mt-16 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/apps"
              className="inline-flex items-center gap-1.5 text-white/35 hover:text-[#06B6D4] text-sm transition-colors"
            >
              <ArrowLeft size={14} />
              Voltar para nossos aplicativos
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
