# 🗺️ Rotas da Aplicação

## Páginas Disponíveis

### Home
- **Rota**: `/`
- **Descrição**: Página inicial com hero section, filtros e conteúdos em destaque
- **Componentes**: Header, Hero, FilterBar, FeaturedContent, Footer

### Login
- **Rota**: `/login`
- **Descrição**: Página de autenticação de usuários
- **Funcionalidades**:
  - Formulário de login com validação
  - Links para cadastro
  - Opções de login social (Google, Facebook)
  - Recuperação de senha

### Cadastro
- **Rota**: `/cadastro`
- **Descrição**: Página de registro de novos usuários
- **Funcionalidades**:
  - Formulário completo com validação
  - Campo de pronomes (inclusivo)
  - Aceite de termos de uso
  - Opções de cadastro social

### Catálogo de Filmes
- **Rota**: `/filmes`
- **Descrição**: Listagem completa de filmes WLW/sáficos
- **Funcionalidades**:
  - Busca por título
  - Filtros: gênero, país, época, avaliação
  - Grid responsivo com cards de filmes
  - Informações detalhadas: sinopse, elenco, tags
  - Ações: favoritar, adicionar à lista, marcar como assistido
- **Dados**: 8 filmes catalogados

### Catálogo de Séries
- **Rota**: `/series`
- **Descrição**: Listagem completa de séries WLW/sáficas
- **Funcionalidades**:
  - Busca por título
  - Filtros: gênero, país, status (renovada/finalizada/cancelada), avaliação
  - Grid responsivo com cards de séries
  - Informações: temporadas, episódios, sinopse, elenco
  - Badge de status (renovada/finalizada/cancelada)
  - Ações: favoritar, adicionar à lista, marcar como assistido
- **Dados**: 8 séries catalogadas

## Páginas Futuras (Em Planejamento)

### Animes
- **Rota**: `/animes` (planejada)
- **Descrição**: Catálogo de animes Yuri e com personagens WLW

### Curtas
- **Rota**: `/curtas` (planejada)
- **Descrição**: Catálogo de curtas-metragens sáficos

### Detalhes do Conteúdo
- **Rota**: `/filme/:id` ou `/serie/:id` (planejada)
- **Descrição**: Página detalhada com informações completas

### Perfil de Usuário
- **Rota**: `/perfil` (planejada)
- **Descrição**: Perfil do usuário com listas e avaliações

### Comunidade
- **Rota**: `/comunidade` (planejada)
- **Descrição**: Feed social com posts e reviews da comunidade

## Navegação

A navegação é feita através do Header presente em todas as páginas:
- Logo: volta para Home
- Links: Explorar, Filmes, Séries, Animes, Curtas, Comunidade
- Botões: Entrar (Login), Cadastrar

## Dados Mock

Os dados estão em `/src/data/mockData.json` e incluem:
- **8 Filmes**: Carol, Retrato de uma Jovem em Chamas, A Favorita, etc.
- **8 Séries**: Gentleman Jack, The L Word, Orange Is the New Black, etc.
- **7 Animes**: Citrus, Bloom Into You, She-Ra, The Owl House, etc.
- **2 Curtas**: In a Heartbeat, The Red Ribbon

Cada conteúdo possui:
- Título, ano, país, idioma
- Gêneros, tags
- Sinopse
- Avaliação e número de votos
- Elenco/criadores
- Onde assistir
- Representação LGBTQ+
- Classificação etária
