import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Descubra o Melhor do <br />
            <span className="highlight">Cinema & Séries WLW</span>
          </h1>
          <p className="hero-description">
            Sua plataforma de descoberta e compartilhamento de conteúdo sáfico. 
            Filmes, séries, animes e curtas com representação lésbica autêntica.
          </p>
          <div className="hero-actions">
            <button className="btn-hero-primary">
              Começar a Explorar
            </button>
            <button className="btn-hero-secondary">
              Sugerir Conteúdo
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Filmes & Séries</span>
            </div>
            <div className="stat">
              <span className="stat-number">2k+</span>
              <span className="stat-label">Usuárias Ativas</span>
            </div>
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Avaliações</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-image">🎬</div>
            <div className="card-content">
              <h3>Catálogo Diverso</h3>
              <p>Conteúdo do mundo todo</p>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-image">⭐</div>
            <div className="card-content">
              <h3>Avaliações</h3>
              <p>Reviews da comunidade</p>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-image">💜</div>
            <div className="card-content">
              <h3>Listas Personalizadas</h3>
              <p>Organize seus favoritos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
