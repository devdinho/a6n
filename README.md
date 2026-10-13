## A6N Tecnologia – Transformando ideias em soluções digitais

Site institucional da A6N Tecnologia, publicado em <https://a6n.tech>.

#### 🛠️ Tecnologias
- Next.js 15 (App Router) e React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- ESLint

#### 📁 Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `src/app/page.tsx` | Página inicial, montada a partir das seções em `components/landing` |
| `src/app/apps/` | Página de aplicativos e políticas de privacidade de cada app |
| `src/components/landing/` | Seções do site: Navbar, Hero, Features, Apps, CTA e Footer |
| `src/components/contants.tsx` | E-mail, telefone e lista de serviços — editar o conteúdo aqui |
| `src/components/ui/` | Componentes visuais (efeito de digitação, linhas animadas do Hero) |
| `src/public/` | Logos |

#### ⚡️ Rodar localmente
```
yarn install
yarn dev
```
Abra <http://localhost:3000>.

#### 📦 Produção
O `start.sh` gera o build e sobe o servidor na porta `3001`:
```
./start.sh
```

#### ✉️ Formulário de contato
Não há backend: ao enviar, o formulário abre o cliente de e-mail do visitante com a mensagem preenchida para o endereço definido em `src/components/contants.tsx`.

#### 📄 Licença
Este projeto é privado e de uso exclusivo da A6N Tecnologia.
