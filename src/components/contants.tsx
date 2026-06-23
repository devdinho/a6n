import { Code, Server, Smartphone, GitMerge, Bot, Shield } from "lucide-react";

export const email = "contato@a6n.tech"

export const phoneNumber = "+55 (63) 99204-1379";

export const services = [
  {
    icon: <Code size={24} />,
    title: "Desenvolvimento Web",
    description:
      "Aplicações modernas, seguras e performáticas, construídas com tecnologias de ponta.",
    items: [
      "Sites, portais e dashboards",
      "Sistemas personalizados com Django ou FastAPI",
      "Frontend em React e Next.js",
    ],
  },
  {
    icon: <Smartphone size={24} />,
    title: "Aplicativos Mobile",
    description:
      "Aplicativos híbridos e nativos com React Native, integrados a APIs seguras e escaláveis.",
    items: [
      "iOS e Android com uma única base de código",
      "Integração com sistemas web e APIs REST",
      "Interface fluida e responsiva",
    ],
  },
  {
    icon: <Server size={24} />,
    title: "Infraestrutura e DevOps",
    description:
      "Automatizamos e escalamos aplicações em nuvem com pipelines CI/CD e conteinerização.",
    items: [
      "Docker, Nginx e orquestração de containers",
      "Deploy automatizado (GitHub Actions, GitLab CI)",
      "Monitoramento com Prometheus e Grafana",
    ],
  },
  {
    icon: <GitMerge size={24} />,
    title: "APIs & Integrações",
    description:
      "Design e desenvolvimento de APIs robustas e integrações entre sistemas, plataformas e serviços de terceiros.",
    items: [
      "APIs REST e GraphQL com autenticação segura",
      "Webhooks, filas e processamento assíncrono",
      "Integrações com ERPs, CRMs e serviços externos",
    ],
  },
  {
    icon: <Bot size={24} />,
    title: "Agentes de IA & LLM",
    description:
      "Construímos plataformas de IA com agentes autônomos, RAG e orquestração de modelos de linguagem para automatizar processos complexos.",
    items: [
      "Agentes autônomos com MCP e orquestração multi-agent",
      "RAG sobre bases de dados proprietárias (PGVector)",
      "Integração com OpenAI, Anthropic e LLMs locais",
    ],
  },
  {
    icon: <Shield size={24} />,
    title: "Segurança e Compliance",
    description:
      "Implementação de práticas seguras em código, autenticação e infraestrutura, com conformidade regulatória.",
    items: [
      "Autenticação JWT, OAuth2 e rate limiting",
      "Proteção de APIs e dados sensíveis",
      "Conformidade com LGPD",
    ],
  },
];