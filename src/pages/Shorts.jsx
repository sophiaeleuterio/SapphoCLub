import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mockData from '../data/mockData.json';
import './Shorts.css';

const Shorts = () => {
  const [shorts, setShorts] = useState([]);
  const [filteredShorts, setFilteredShorts] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    genre: '',
    country: '',
    duration: ''
  });

  useEffect(() => {
    setShorts(mockData.shorts);
    setFilteredShorts(mockData.shorts);
  }, []);

  useEffect(() => {
    filterShorts();
  }, [filters, shorts]);

  const filterShorts = () => {
    let filtered = [...shorts];

    if (filters.search) {
      filtered = filtered.filter(short =>
        short.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.genre) {
      filtered = filtered.filter(short =>
        short.genres.includes(filters.genre)
      );
    }

    if (filters.country) {
      filtered = filtered.filter(short =>
        short.country === filters.country
      );
    }

    if (filters.duration) {
      if (filters.duration === 'short') {
        filtered = filtered.filter(short => short.duration <= 10);
      } else if (filters.duration === 'medium') {
        filtered = filtered.filter(short => short.duration > 10 && short.duration <= 20);
      } else if (filters.duration === 'long') {
        filtered = filtered.filter(short => short.duration > 20);
      }
    }

    setFilteredShorts(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      genre: '',
      country: '',
      duration: ''
    });
  };

  const uniqueGenres = [...new Set(shorts.flatMap(s => s.genres))];
  const uniqueCountries = [...new Set(shorts.map(s => s.country))];

  return (
    <>
      <Header />
      <div className="shorts-page">
        <div className="shorts-container">
          <div className="page-header">
            <h1>🎞️ Catálogo de Curtas-Metragens</h1>
            <p>Descubra curtas sáficos e com representação WLW</p>
          </div>

          <div className="filters-section">
            <div className="search-bar">
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Buscar por título..."
                className="search-input"
              />
            </div>

            <div className="filters-grid">
              <select
                name="genre"
                value={filters.genre}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">Todos os Gêneros</option>
                {uniqueGenres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>

              <select
                name="country"
                value={filters.country}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">Todos os Países</option>
                {uniqueCountries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>

              <select
                name="duration"
                value={filters.duration}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">Qualquer Duração</option>
                <option value="short">Até 10 min</option>
                <option value="medium">10-20 min</option>
                <option value="long">Mais de 20 min</option>
              </select>

              <button onClick={clearFilters} className="btn-clear">
                Limpar Filtros
              </button>
            </div>
          </div>

          <div className="results-header">
            <p>{filteredShorts.length} {filteredShorts.length === 1 ? 'curta encontrado' : 'curtas encontrados'}</p>
          </div>

          <div className="shorts-grid">
            {filteredShorts.map(short => (
              <div key={short.id} className="short-card">
                <div className="short-poster">
                  <span className="poster-icon">{short.poster}</span>
                  <div className="short-duration">
                    <span>🕐 {short.duration} min</span>
                  </div>
                  {short.rating && (
                    <div className="short-rating">
                      <span>⭐ {short.rating}</span>
                    </div>
                  )}
                  <div className="short-overlay">
                    <Link to={`/curta/${short.id}`} className="btn-watch">▶ Assistir</Link>
                  </div>
                </div>
                <div className="short-info">
                  <h3 className="short-title">{short.title}</h3>
                  <div className="short-meta">
                    <span>{short.year}</span>
                    <span>•</span>
                    <span>{short.country}</span>
                    {short.language !== 'Sem diálogos' && (
                      <>
                        <span>•</span>
                        <span>{short.language}</span>
                      </>
                    )}
                  </div>
                  <p className="short-genres">{short.genres.join(', ')}</p>
                  <p className="short-synopsis">{short.synopsis}</p>
                  {short.director && (
                    <p className="short-director">Direção: {short.director}</p>
                  )}
                  <div className="short-tags">
                    {short.tags.map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="short-actions">
                    <button className="btn-favorite" title="Adicionar aos favoritos">
                      💜
                    </button>
                    <button className="btn-share" title="Compartilhar">
                      🔗
                    </button>
                    <button className="btn-watched" title="Marcar como assistido">
                      ✓
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredShorts.length === 0 && (
            <div className="no-results">
              <p>😔 Nenhum curta encontrado com esses filtros</p>
              <button onClick={clearFilters} className="btn-clear">
                Limpar Filtros
              </button>
            </div>
          )}

          <div className="info-section">
            <div className="info-card">
              <h3>📤 Sugira um Curta</h3>
              <p>Conhece um curta-metragem sáfico que deveria estar aqui? Envie sua sugestão para nossa equipe!</p>
              <button className="btn-suggest">Enviar Sugestão</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shorts;
