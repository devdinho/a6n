import React from 'react';
import { Code, Server, Smartphone, Cloud, Cpu, Shield } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-white py-20" id="servicos">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções tecnológicas completas — do desenvolvimento à infraestrutura —
            para impulsionar negócios digitais com performance, segurança e escalabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Desenvolvimento Web */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#1565bd] text-white rounded-full flex items-center justify-center mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Desenvolvimento Web</h3>
            <p className="text-gray-600">
              Aplicações modernas, seguras e performáticas, construídas com tecnologias de ponta.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Sites e portais institucionais</li>
              <li>• Dashboards administrativos</li>
              <li>• Sistemas personalizados com Django ou FastAPI</li>
            </ul>
          </div>

          {/* Aplicativos e Sistemas Mobile */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#1565bd] text-white rounded-full flex items-center justify-center mb-4">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Aplicativos Mobile</h3>
            <p className="text-gray-600">
              Desenvolvimento de aplicativos híbridos e nativos com React Native, integrados a APIs seguras.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Aplicativos iOS e Android</li>
              <li>• Integração com sistemas web</li>
              <li>• Interface fluida e responsiva</li>
            </ul>
          </div>

          {/* Infraestrutura e DevOps */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#1565bd] text-white rounded-full flex items-center justify-center mb-4">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Infraestrutura e DevOps</h3>
            <p className="text-gray-600">
              Automatizamos e escalamos aplicações em nuvem com pipelines CI/CD e conteinerização.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Docker, Nginx e orquestração</li>
              <li>• Deploy automatizado (GitHub Actions, Azure DevOps)</li>
              <li>• Monitoramento e observabilidade</li>
            </ul>
          </div>

          {/* Consultoria em TI e Arquitetura */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#1565bd] text-white rounded-full flex items-center justify-center mb-4">
              <Cloud size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Consultoria em TI</h3>
            <p className="text-gray-600">
              Apoio técnico para empresas que buscam escalar, migrar ou modernizar suas soluções.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Arquitetura de sistemas e APIs</li>
              <li>• Cloud AWS e Azure</li>
              <li>• Otimização de desempenho</li>
            </ul>
          </div>

          {/* Inteligência Artificial e Automação */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#1565bd] text-white rounded-full flex items-center justify-center mb-4">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">IA e Automação</h3>
            <p className="text-gray-600">
              Integração de modelos de linguagem e automação de fluxos para aumentar a eficiência.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• LLMs locais e APIs de IA</li>
              <li>• Processos automatizados com Python</li>
              <li>• Chatbots e análise inteligente</li>
            </ul>
          </div>

          {/* Segurança e Compliance */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-[#1565bd] text-white rounded-full flex items-center justify-center mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Segurança e Compliance</h3>
            <p className="text-gray-600">
              Implementação de práticas seguras em código, autenticação e infraestrutura.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Autenticação JWT e OAuth2</li>
              <li>• Proteção de APIs e dados sensíveis</li>
              <li>• Conformidade com LGPD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
