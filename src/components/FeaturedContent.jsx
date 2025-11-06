import './FeaturedContent.css';

const FeaturedContent = () => {
  const contents = [
    {
      id: 1,
      title: "Carol",
      year: "2015",
      country: "EUA",
      genre: "Romance, Drama",
      rating: 4.8,
      image: "🎬",
      description: "Um romance proibido na Nova York dos anos 50."
    },
    {
      id: 2,
      title: "A Favorita",
      year: "2018",
      country: "Reino Unido",
      genre: "Drama, Comédia",
      rating: 4.6,
      image: "👑",
      description: "Disputa pelo favor da Rainha Anne no século XVIII."
    },
    {
      id: 3,
      title: "Retrato de uma Jovem em Chamas",
      year: "2019",
      country: "França",
      genre: "Romance, Drama",
      rating: 4.9,
      image: "🎨",
      description: "Uma pintora e sua musa na França do século XVIII."
    },
    {
      id: 4,
      title: "Tudo Sobre Ela",
      year: "2016",
      country: "Brasil",
      genre: "Romance, Comédia",
      rating: 4.3,
      image: "💕",
      description: "Comédia romântica brasileira sobre identidade e amor."
    },
    {
      id: 5,
      title: "Gentleman Jack",
      year: "2019",
      country: "Reino Unido",
      genre: "Drama, História",
      rating: 4.7,
      image: "📺",
      description: "Série baseada na vida real de Anne Lister."
    },
    {
      id: 6,
      title: "Citrus",
      year: "2018",
      country: "Japão",
      genre: "Anime, Romance",
      rating: 4.2,
      image: "🌸",
      description: "Anime yuri sobre duas garotas que se tornam irmãs."
    }
  ];

  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="section-header">
          <h2>Em Destaque</h2>
          <p>Conteúdo sáfico mais bem avaliado pela comunidade</p>
        </div>

        <div className="content-grid">
          {contents.map((content) => (
            <div key={content.id} className="content-card">
              <div className="card-image-placeholder">
                <span className="placeholder-icon">{content.image}</span>
                <div className="card-rating">
                  <span>⭐ {content.rating}</span>
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">{content.title}</h3>
                <div className="card-meta">
                  <span>{content.year}</span>
                  <span>•</span>
                  <span>{content.country}</span>
                </div>
                <p className="card-genre">{content.genre}</p>
                <p className="card-description">{content.description}</p>
                <div className="card-actions">
                  <button className="btn-card-primary">Ver Detalhes</button>
                  <button className="btn-card-icon" aria-label="Adicionar aos favoritos">
                    💜
                  </button>
                  <button className="btn-card-icon" aria-label="Adicionar à lista">
                    📌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more">
          <button className="btn-view-more">Ver Mais Conteúdo</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
