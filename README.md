# 🏳️‍🌈 SapphoClub

**Plataforma de descoberta de conteúdo sáfico e LGBTQ+ (WLW/Lésbica)**

Uma plataforma moderna e inclusiva para descobrir, avaliar e compartilhar filmes, séries, animes e curtas com representação lésbica e sáfica. Construída com React, Vite e muito amor pela comunidade WLW! 💜

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=flat&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat&logo=react-router&logoColor=white)

---

## ✨ Funcionalidades

### 🎬 Catálogos Completos
- **Filmes** - Clássicos e novidades do cinema lésbico/sáfico
- **Séries** - As melhores séries com representação WLW
- **Animes** - Animes Yuri e com personagens lésbicas
- **Curtas** - Curtas-metragens independentes e artísticos

### 🔍 Sistema de Filtros
- Busca por título
- Filtros por gênero, país, ano e avaliação
- Filtros específicos por estúdio (animes) e duração (curtas)

### 📄 Páginas de Detalhes
- Informações completas de cada conteúdo
- Elenco, direção e equipe técnica
- Onde assistir (plataformas de streaming)
- Sistema de avaliação com estrelas (1-5)
- Formulário de reviews

### 👤 Perfil de Usuário
- Edição de perfil (nome, pronome, bio, localização)
- Estatísticas pessoais
- Top 5 favoritos
- Listas customizadas (Favoritos, Assistir depois, Já assistido)
- Suas avaliações e reviews

### 💬 Comunidade
- Feed social com posts e reviews
- Sistema de curtidas e comentários
- Filtros (Recentes, Populares, Mais comentados)
- Tags em alta
- Estatísticas da comunidade

---

## 🎨 Design System

### Paleta de Cores
```css
--color-primary: #C73402      /* Vermelho queimado */
--color-secondary: #F68F4C    /* Laranja pêssego */
--color-white: #FFFFFF        /* Branco */
--color-accent-1: #D461A6     /* Rosa médio */
--color-accent-2: #A50062     /* Rosa-choque */
```

### Gradientes
- **Primário**: `linear-gradient(135deg, #C73402, #F68F4C)`
- **Secundário**: `linear-gradient(135deg, #D461A6, #A50062)`
- **Hero**: `linear-gradient(to bottom, #C73402, #F68F4C, #FFFFFF, #D461A6, #A50062)`

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/sophiaeleuterio/SapphoCLub.git
cd SapphoClub
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no navegador:
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build de produção
npm run lint     # Executa o linter
```

---

## 📁 Estrutura do Projeto

```
SapphoClub/
├── public/              # Arquivos públicos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FilterBar.jsx
│   │   ├── FeaturedContent.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Cadastro.jsx
│   │   ├── Movies.jsx
│   │   ├── Series.jsx
│   │   ├── Animes.jsx
│   │   ├── Shorts.jsx
│   │   ├── ContentDetails.jsx
│   │   ├── Profile.jsx
│   │   └── Community.jsx
│   ├── data/           # Dados mockados
│   │   └── mockData.json
│   ├── styles/         # Estilos globais
│   │   └── global.css
│   ├── App.jsx         # Componente raiz com rotas
│   └── main.jsx        # Entry point
├── package.json
└── README.md
```

---

## 🛣️ Rotas da Aplicação

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Página inicial com hero e destaques |
| `/login` | Login | Autenticação de usuário |
| `/cadastro` | Cadastro | Registro de novo usuário |
| `/filmes` | Filmes | Catálogo de filmes |
| `/series` | Séries | Catálogo de séries |
| `/animes` | Animes | Catálogo de animes |
| `/curtas` | Curtas | Catálogo de curtas-metragens |
| `/filme/:id` | Detalhes | Detalhes de um filme específico |
| `/serie/:id` | Detalhes | Detalhes de uma série específica |
| `/anime/:id` | Detalhes | Detalhes de um anime específico |
| `/curta/:id` | Detalhes | Detalhes de um curta específico |
| `/perfil` | Perfil | Perfil do usuário |
| `/comunidade` | Comunidade | Feed social da comunidade |

---

## 📦 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite 7.1** - Build tool ultrarrápido
- **React Router DOM 6** - Roteamento client-side
- **CSS3** - Estilização com CSS Variables
- **JSON** - Mock data (temporário até integração com backend)

---

## 📊 Conteúdo Disponível

Atualmente a plataforma conta com:
- **8 filmes** lésbicos/sáficos
- **8 séries** com representação WLW
- **7 animes** Yuri
- **2 curtas-metragens**

Todos com informações completas: sinopse, elenco, direção, onde assistir, tags, avaliações e mais!

---

## 🌈 Inclusividade

O SapphoClub foi criado pensando na comunidade LGBTQ+, especialmente:
- **WLW** (Women Loving Women)
- **Lésbicas**
- **Sáficas**
- **Bissexuais**
- **Pessoas não-binárias**

### Recursos de Inclusão
- Campo de pronomes no cadastro (ela/dela, ele/dele, elu/delu, qualquer pronome)
- Representação diversa de identidades de gênero
- Conteúdo com personagens lésbicas, bissexuais e trans
- Ambiente seguro e acolhedor

---

## 🎯 Roadmap Futuro

- [ ] Integração com backend real
- [ ] Sistema de autenticação completo
- [ ] Comentários e reviews funcionais
- [ ] Sistema de listas personalizadas
- [ ] Notificações
- [ ] Modo escuro
- [ ] Integração com APIs de streaming
- [ ] Sistema de recomendações
- [ ] Aplicativo mobile
- [ ] Comunidade com chat

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Este é um projeto open source feito com amor pela comunidade.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 💜 Agradecimentos

Este projeto é dedicado a todas as pessoas da comunidade LGBTQ+ que lutam por representação autêntica na mídia. 

**"Todo amor é válido. Toda história merece ser contada."** 🏳️‍🌈

---

## 📧 Contato

Sophia Eleutério - [@sophiaeleuterio](https://github.com/sophiaeleuterio)

Link do Projeto: [https://github.com/sophiaeleuterio/SapphoCLub](https://github.com/sophiaeleuterio/SapphoCLub)

---

**Feito com 💜 e ☕ por Sophia Eleutério**