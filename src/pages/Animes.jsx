import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mockData from '../data/mockData.json';
import './Animes.css';

const Animes = () => {
  const [animes, setAnimes] = useState([]);
  const [filteredAnimes, setFilteredAnimes] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    genre: '',
    year: '',
    rating: '',
    studio: ''
  });

  useEffect(() => {
    setAnimes(mockData.animes);
    setFilteredAnimes(mockData.animes);
  }, []);

  useEffect(() => {
    filterAnimes();
  }, [filters, animes]);

  const filterAnimes = () => {
    let filtered = [...animes];

    if (filters.search) {
      filtered = filtered.filter(anime =>
        anime.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.genre) {
      filtered = filtered.filter(anime =>
        anime.genres.includes(filters.genre)
      );
    }

    if (filters.year) {
      if (filters.year === '2020s') {
        filtered = filtered.filter(anime => anime.year >= 2020);
      } else if (filters.year === '2010s') {
        filtered = filtered.filter(anime => anime.year >= 2010 && anime.year < 2020);
      } else if (filters.year === '2000s') {
        filtered = filtered.filter(anime => anime.year >= 2000 && anime.year < 2010);
      } else if (filters.year === '1990s') {
        filtered = filtered.filter(anime => anime.year >= 1990 && anime.year < 2000);
      }
    }

    if (filters.rating) {
      filtered = filtered.filter(anime => anime.rating >= parseFloat(filters.rating));
    }

    if (filters.studio) {
      filtered = filtered.filter(anime => anime.studio === filters.studio);
    }

    setFilteredAnimes(filtered);
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
      year: '',
      rating: '',
      studio: ''
    });
  };

  const uniqueGenres = [...new Set(animes.flatMap(a => a.genres))];
  const uniqueStudios = [...new Set(animes.map(a => a.studio))];

  return (
    <>
      <Header />
      <div className="animes-page">
        <div className="animes-container">
          <div className="page-header">
            <h1>🌸 Catálogo de Animes Yuri</h1>
            <p>Descubra animes com romance entre garotas e representação WLW</p>
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
                name="studio"
                value={filters.studio}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">Todos os Estúdios</option>
                {uniqueStudios.map(studio => (
                  <option key={studio} value={studio}>{studio}</option>
                ))}
              </select>

              <select
                name="year"
                value={filters.year}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">Qualquer Época</option>
                <option value="2020s">Anos 2020</option>
                <option value="2010s">Anos 2010</option>
                <option value="2000s">Anos 2000</option>
                <option value="1990s">Anos 1990</option>
              </select>

              <select
                name="rating"
                value={filters.rating}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">Qualquer Avaliação</option>
                <option value="4.5">4.5+ ⭐</option>
                <option value="4.0">4.0+ ⭐</option>
                <option value="3.5">3.5+ ⭐</option>
              </select>

              <button onClick={clearFilters} className="btn-clear">
                Limpar Filtros
              </button>
            </div>
          </div>

          <div className="results-header">
            <p>{filteredAnimes.length} {filteredAnimes.length === 1 ? 'anime encontrado' : 'animes encontrados'}</p>
          </div>

          <div className="animes-grid">
            {filteredAnimes.map(anime => (
              <div key={anime.id} className="anime-card">
                <div className="anime-poster">
                  <span className="poster-icon">{anime.poster}</span>
                  <div className="anime-rating">
                    <span>⭐ {anime.rating}</span>
                  </div>
                  <div className="anime-badge yuri">Yuri</div>
                  <div className="anime-overlay">
                    <Link to={`/anime/${anime.id}`} className="btn-details">Ver Detalhes</Link>
                  </div>
                </div>
                <div className="anime-info">
                  <h3 className="anime-title">{anime.title}</h3>
                  <div className="anime-meta">
                    <span>{anime.year}</span>
                    <span>•</span>
                    <span>{anime.country}</span>
                    {anime.episodes && (
                      <>
                        <span>•</span>
                        <span>{anime.episodes} eps</span>
                      </>
                    )}
                  </div>
                  <p className="anime-studio">{anime.studio}</p>
                  <p className="anime-genres">{anime.genres.join(', ')}</p>
                  <p className="anime-synopsis">{anime.synopsis}</p>
                  <div className="anime-tags">
                    {anime.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="anime-actions">
                    <button className="btn-favorite" title="Adicionar aos favoritos">
                      💜
                    </button>
                    <button className="btn-watchlist" title="Adicionar à lista">
                      📌
                    </button>
                    <button className="btn-watched" title="Marcar como assistido">
                      ✓
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAnimes.length === 0 && (
            <div className="no-results">
              <p>😔 Nenhum anime encontrado com esses filtros</p>
              <button onClick={clearFilters} className="btn-clear">
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Animes;
