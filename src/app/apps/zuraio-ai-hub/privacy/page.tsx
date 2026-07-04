'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const LAST_UPDATED = '3 de julho de 2026';
const CONTACT_EMAIL = 'dev@zuraio.ch';
const SITE_URL = 'https://zuraio.ch';
const APP_NAME = 'Zuraio AI Hub';
const PACKAGE_NAME = 'br.a6n.zuraioaihub';
const COMPANY = 'Zuraio - Own Your Data';

const dataCategories = [
  {
    label: 'Dados de conta e perfil',
    desc: 'Nome, e-mail, cargo, preferências do usuário e demais informações necessárias para identificação e uso da plataforma.',
  },
  {
    label: 'Identidade Microsoft',
    desc: 'Quando o login Microsoft é utilizado, podemos tratar identificadores da conta Microsoft, e-mail, nome e dados básicos retornados pelo provedor de autenticação.',
  },
  {
    label: 'Conversas e interações com IA',
    desc: 'Mensagens, prompts, respostas, histórico de conversas e metadados necessários para entregar a experiência de chat e agentes de IA.',
  },
  {
    label: 'Arquivos enviados',
    desc: 'Documentos, imagens, anexos e outros arquivos selecionados pelo usuário para upload, processamento, análise ou download dentro do aplicativo.',
  },
  {
    label: 'Áudio e transcrições',
    desc: 'Áudios gravados pelo microfone, quando autorizado pelo usuário, e suas transcrições para envio de mensagens por voz.',
  },
  {
    label: 'Dados técnicos',
    desc: 'Registros de autenticação, endereço IP, identificadores técnicos, cookies de sessão, logs de erro e dados de uso necessários para segurança e estabilidade.',
  },
];

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
          O {APP_NAME} pode coletar ou processar as seguintes categorias de dados, conforme as funcionalidades utilizadas:
        </p>
        <div className="grid gap-3">
          {dataCategories.map((item) => (
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
          Não coletamos dados de pagamento, biometria, dados de saúde nem informações de redes de anúncios.
        </p>
      </>
    ),
  },
  {
    title: '3. Finalidade e base legal (LGPD)',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">
          Tratamos dados pessoais para as finalidades abaixo, com fundamento nas bases legais da Lei Geral de Proteção de Dados:
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
            ['Autenticação e manutenção da conta', 'Execução de contrato (art. 7º, V)'],
            ['Login federado com Microsoft', 'Execução de contrato e legítimo interesse'],
            ['Operação do chat, agentes e recursos de IA', 'Execução de contrato (art. 7º, V)'],
            ['Processamento de áudio e arquivos enviados pelo usuário', 'Consentimento e execução de contrato'],
            ['Segurança, prevenção a fraude e auditoria', 'Legítimo interesse (art. 7º, IX)'],
            ['Cumprimento de obrigações legais', 'Obrigação legal (art. 7º, II)'],
          ].map(([purpose, basis], i) => (
            <div
              key={purpose}
              className="flex items-start px-5 py-3 gap-4"
              style={{
                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.06)' : undefined,
              }}
            >
              <span className="text-white/60 flex-1">{purpose}</span>
              <span className="text-white/40 w-52 shrink-0">{basis}</span>
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
          'Autenticar usuários, inclusive por login Microsoft quando disponível;',
          'Manter a sessão, preferências e permissões de acesso;',
          'Enviar mensagens, processar comandos de voz e exibir respostas da IA;',
          'Permitir upload, análise, visualização e download de arquivos selecionados pelo usuário;',
          'Proteger a plataforma contra acessos indevidos, falhas e abuso;',
          'Melhorar estabilidade e desempenho com base em logs técnicos e métricas operacionais.',
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
    title: '5. Permissões Android',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">
          O aplicativo pode solicitar permissões do dispositivo apenas quando necessárias para uma funcionalidade:
        </p>
        <div className="grid gap-3">
          {[
            {
              label: 'Microfone',
              code: 'RECORD_AUDIO',
              desc: 'Usado para gravar áudio quando o usuário decide enviar mensagens por voz. O acesso depende de autorização explícita do Android.',
            },
            {
              label: 'Arquivos e armazenamento',
              code: 'Seletor de arquivos / Downloads',
              desc: 'Usado para escolher arquivos para upload e salvar arquivos baixados. Em versões antigas do Android, pode ser solicitada permissão de escrita em armazenamento externo.',
            },
            {
              label: 'Internet',
              code: 'INTERNET',
              desc: 'Necessária para carregar a aplicação web, autenticar usuários e comunicar-se com os serviços da plataforma.',
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
          O usuário pode revogar permissões a qualquer momento nas configurações do dispositivo.
        </p>
      </>
    ),
  },
  {
    title: '6. Compartilhamento de dados',
    content: (
      <>
        <div
          className="rounded-xl p-5 mb-4"
          style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.18)' }}
        >
          <p className="text-white font-medium text-sm mb-1">Não vendemos dados pessoais.</p>
          <p className="text-white/55 text-sm">
            O {APP_NAME} não vende, aluga nem compartilha dados pessoais com anunciantes ou redes de publicidade.
          </p>
        </div>
        <p className="text-white/50 text-sm mb-3">
          Dados podem ser tratados por fornecedores de infraestrutura, autenticação, armazenamento, IA e segurança,
          sempre conforme contratos e controles compatíveis com a LGPD.
        </p>
        <p className="text-white/50 text-sm">
          Quando o login Microsoft é utilizado, informações necessárias à autenticação são trocadas com a Microsoft
          conforme a política e os termos do respectivo provedor.
        </p>
      </>
    ),
  },
  {
    title: '7. Armazenamento e segurança',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">
          Adotamos medidas técnicas e organizacionais para proteger as informações contra acesso não autorizado,
          perda, alteração ou destruição:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            'Criptografia em trânsito por HTTPS/TLS;',
            'Autenticação com tokens e controle de sessão;',
            'Controle de acesso por permissões e perfis de usuário;',
            'Registros de auditoria e monitoramento operacional;',
            'Acesso restrito aos ambientes e dados necessários para suporte e operação.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/55">
              <span className="text-[#06B6D4] mt-0.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-white/50 text-sm">
          Nenhum sistema é totalmente imune a riscos, mas buscamos aplicar práticas adequadas de segurança,
          disponibilidade e prevenção de incidentes.
        </p>
      </>
    ),
  },
  {
    title: '8. Direitos do titular (LGPD)',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">
          Nos termos da LGPD, você pode solicitar:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            ['Confirmação', 'Confirmar se tratamos seus dados.'],
            ['Acesso', 'Obter cópia dos dados mantidos sobre você.'],
            ['Correção', 'Corrigir dados incompletos ou desatualizados.'],
            ['Exclusão', 'Solicitar remoção de dados desnecessários.'],
            ['Portabilidade', 'Receber seus dados em formato estruturado.'],
            ['Revogação', 'Revogar consentimento dado anteriormente.'],
            ['Informação', 'Saber com quem compartilhamos dados.'],
            ['Oposição', 'Opor-se a tratamentos em desconformidade com a lei.'],
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
          Para exercer seus direitos, entre em contato pelo e-mail{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#06B6D4] hover:underline">
            {CONTACT_EMAIL}
          </a>
          . Responderemos em prazo compatível com a legislação aplicável.
        </p>
      </>
    ),
  },
  {
    title: '9. Retenção e exclusão de dados',
    content: (
      <>
        <p className="text-white/50 text-sm mb-3">
          Mantemos dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política,
          prestar o serviço, preservar segurança, cumprir obrigações legais ou proteger direitos.
        </p>
        <p className="text-white/50 text-sm">
          Solicitações de exclusão serão avaliadas e executadas conforme a LGPD, exceto quando a retenção for
          necessária por obrigação legal, prevenção a fraude, auditoria ou exercício regular de direitos.
        </p>
      </>
    ),
  },
  {
    title: '10. Menores de idade',
    content: (
      <p className="text-white/50 text-sm">
        O {APP_NAME} não é destinado a crianças menores de 13 anos. Caso identifiquemos tratamento indevido
        de dados de menores, adotaremos medidas para remover ou regularizar essas informações.
      </p>
    ),
  },
  {
    title: '11. Atualizações desta política',
    content: (
      <p className="text-white/50 text-sm">
        Esta política pode ser atualizada para refletir alterações no aplicativo, nos serviços integrados ou em
        requisitos legais. A versão vigente estará sempre disponível nesta página.
      </p>
    ),
  },
  {
    title: '12. Contato',
    content: (
      <>
        <p className="text-white/50 text-sm mb-4">
          Para dúvidas, solicitações ou reclamações relacionadas a esta Política de Privacidade, entre em contato:
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

export default function ZuraioAiHubPrivacyPage() {
  return (
    <main>
      <Navbar />

      <section className="py-24" style={{ background: '#060d1f' }}>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
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
            coleta, usa, armazena e protege dados pessoais de seus usuários, em conformidade com a LGPD
            (Lei nº 13.709/2018).
          </motion.div>

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
