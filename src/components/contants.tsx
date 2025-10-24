import { Code, Server, Smartphone, Cloud, Cpu, Shield } from "lucide-react";

export const email = "contato@a6n.tech"

export const phoneNumber = "+55 (63) 99204-1379";

export const services = [
  {
    icon: <Code size={24} />,
    title: "Desenvolvimento Web",
    description:
      "Aplicações modernas, seguras e performáticas, construídas com tecnologias de ponta.",
    items: [
      "Sites e portais institucionais",
      "Dashboards administrativos",
      "Sistemas personalizados com Django ou FastAPI",
    ],
  },
  {
    icon: <Smartphone size={24} />,
    title: "Aplicativos Mobile",
    description:
      "Desenvolvimento de aplicativos híbridos e nativos com React Native, integrados a APIs seguras.",
    items: [
      "Aplicativos iOS e Android",
      "Integração com sistemas web",
      "Interface fluida e responsiva",
    ],
  },
  {
    icon: <Server size={24} />,
    title: "Infraestrutura e DevOps",
    description:
      "Automatizamos e escalamos aplicações em nuvem com pipelines CI/CD e conteinerização.",
    items: [
      "Docker, Nginx e orquestração",
      "Deploy automatizado (GitHub Actions, Azure DevOps)",
      "Monitoramento e observabilidade",
    ],
  },
  {
    icon: <Cloud size={24} />,
    title: "Consultoria em TI",
    description:
      "Apoio técnico para empresas que buscam escalar, migrar ou modernizar suas soluções.",
    items: [
      "Arquitetura de sistemas e APIs",
      "Cloud AWS e Azure",
      "Otimização de desempenho",
    ],
  },
  {
    icon: <Cpu size={24} />,
    title: "IA e Automação",
    description:
      "Integração de modelos de linguagem e automação de fluxos para aumentar a eficiência.",
    items: [
      "LLMs locais e APIs de IA",
      "Processos automatizados com Python",
      "Chatbots e análise inteligente",
    ],
  },
  {
    icon: <Shield size={24} />,
    title: "Segurança e Compliance",
    description:
      "Implementação de práticas seguras em código, autenticação e infraestrutura.",
    items: [
      "Autenticação JWT e OAuth2",
      "Proteção de APIs e dados sensíveis",
      "Conformidade com LGPD",
    ],
  },
];