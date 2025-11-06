import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mockData from '../data/mockData.json';
import './ContentDetails.css';

const ContentDetails = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState('');

  useEffect(() => {
    loadContent();
  }, [type, id]);

  const loadContent = () => {
    let allContent = [];
    
    if (type === 'filme') {
      allContent = mockData.movies;
    } else if (type === 'serie') {
      allContent = mockData.series;
    } else if (type === 'anime') {
      allContent = mockData.animes;
    } else if (type === 'curta') {
      allContent = mockData.shorts;
    }

    const foundContent = allContent.find(item => item.id === parseInt(id));
    setContent(foundContent);
  };

  const handleRatingChange = (rating) => {
    setUserRating(rating);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    alert(`Avaliação enviada!\nNota: ${userRating}\nResenha: ${review}`);
    setReview('');
  };

  if (!content) {
    return (
      <>
        <Header />
        <div className="details-page">
          <div className="not-found">
            <h2>😔 Conteúdo não encontrado</h2>
            <button onClick={() => navigate('/')} className="btn-back">
              Voltar para Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="details-page">
        {/* Hero Section */}
        <div className="details-hero">
          <div className="hero-backdrop" />
          <div className="hero-content">
            <div className="poster-large">
              <span className="poster-icon-large">{content.poster}</span>
            </div>
            <div className="hero-info">
              <h1 className="content-title">{content.title}</h1>
              <div className="content-meta-main">
                <span className="rating-badge">⭐ {content.rating}</span>
                <span>{content.year}</span>
                <span>•</span>
                <span>{content.country}</span>
                {content.duration && (
                  <>
                    <span>•</span>
                    <span>{content.duration} min</span>
                  </>
                )}
                {content.seasons && (
                  <>
                    <span>•</span>
                    <span>{content.seasons} {content.seasons === 1 ? 'temporada' : 'temporadas'}</span>
                  </>
                )}
              </div>
              <div className="genres-list">
                {content.genres.map(genre => (
                  <span key={genre} className="genre-badge">{genre}</span>
                ))}
              </div>
              <p className="synopsis-full">{content.synopsis}</p>
              <div className="action-buttons">
                <button className="btn-add-list">📌 Adicionar à Lista</button>
                <button className="btn-favorite-detail">💜 Favoritar</button>
                <button className="btn-watched-detail">✓ Já Assisti</button>
                <button className="btn-share-detail">🔗 Compartilhar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Container */}
        <div className="details-container">
          <div className="details-grid">
            {/* Left Column - Main Info */}
            <div className="main-column">
              {/* Cast/Crew */}
              <section className="info-section">
                <h2>🎬 Elenco e Equipe</h2>
                <div className="info-content">
                  {content.director && (
                    <div className="info-item">
                      <strong>Direção:</strong> {content.director}
                    </div>
                  )}
                  {content.creator && (
                    <div className="info-item">
                      <strong>Criação:</strong> {content.creator}
                    </div>
                  )}
                  {content.cast && (
                    <div className="info-item">
                      <strong>Elenco:</strong> {content.cast.join(', ')}
                    </div>
                  )}
                  {content.studio && (
                    <div className="info-item">
                      <strong>Estúdio:</strong> {content.studio}
                    </div>
                  )}
                </div>
              </section>

              {/* Where to Watch */}
              {content.whereToWatch && content.whereToWatch.length > 0 && (
                <section className="info-section">
                  <h2>📺 Onde Assistir</h2>
                  <div className="streaming-services">
                    {content.whereToWatch.map(service => (
                      <div key={service} className="service-badge">
                        {service}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Reviews Section */}
              <section className="info-section">
                <h2>⭐ Sua Avaliação</h2>
                <form onSubmit={handleSubmitReview} className="review-form">
                  <div className="rating-selector">
                    <p>Dê sua nota:</p>
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          className={`star ${userRating >= star ? 'active' : ''}`}
                          onClick={() => handleRatingChange(star)}
                        >
                          ⭐
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="review-input">
                    <label htmlFor="review">Escreva sua resenha:</label>
                    <textarea
                      id="review"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      placeholder="Compartilhe sua opinião sobre este conteúdo..."
                      rows="5"
                    />
                  </div>
                  <button type="submit" className="btn-submit-review">
                    Publicar Avaliação
                  </button>
                </form>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="sidebar-column">
              <div className="info-card">
                <h3>ℹ️ Informações</h3>
                <div className="info-list">
                  <div className="info-row">
                    <span className="label">Idioma:</span>
                    <span>{content.language}</span>
                  </div>
                  {content.contentRating && (
                    <div className="info-row">
                      <span className="label">Classificação:</span>
                      <span>{content.contentRating}</span>
                    </div>
                  )}
                  <div className="info-row">
                    <span className="label">Representação:</span>
                    <span>{content.lgbtqRepresentation}</span>
                  </div>
                  {content.votes && (
                    <div className="info-row">
                      <span className="label">Avaliações:</span>
                      <span>{content.votes} votos</span>
                    </div>
                  )}
                  {content.status && (
                    <div className="info-row">
                      <span className="label">Status:</span>
                      <span className={`status-badge ${content.status.toLowerCase()}`}>
                        {content.status}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="info-card">
                <h3>🏷️ Tags</h3>
                <div className="tags-list">
                  {content.tags.map(tag => (
                    <span key={tag} className="tag-item">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentDetails;
