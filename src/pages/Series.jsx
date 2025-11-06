import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mockData from '../data/mockData.json';
import './Series.css';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    genre: '',
    country: '',
    status: '',
    rating: ''
  });

  useEffect(() => {
    setSeries(mockData.series);
    setFilteredSeries(mockData.series);
  }, []);

  useEffect(() => {
    filterSeries();
  }, [filters, series]);

  const filterSeries = () => {
    let filtered = [...series];

    if (filters.search) {
      filtered = filtered.filter(show =>
        show.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.genre) {
      filtered = filtered.filter(show =>
        show.genres.includes(filters.genre)
      );
    }

    if (filters.country) {
      filtered = filtered.filter(show =>
        show.country.includes(filters.country)
      );
    }

    if (filters.status) {
      filtered = filtered.filter(show =>
        show.status === filters.status
      );
    }

    if (filters.rating) {
      filtered = filtered.filter(show => show.rating >= parseFloat(filters.rating));
    }

    setFilteredSeries(filtered);
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
      status: '',
      rating: ''
    });
  };

  const uniqueGenres = [...new Set(series.flatMap(s => s.genres))];
  const uniqueCountries = [...new Set(series.map(s => s.country))];

  return (
    <>
      <Header />
      <div className="series-page">
        <div className="series-container">
          <div className="page-header">
            <h1>📺 Catálogo de Séries</h1>
            <p>Descubra séries com representação lésbica e WLW autêntica</p>
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
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">Qualquer Status</option>
                <option value="Renovada">Renovada</option>
                <option value="Finalizada">Finalizada</option>
                <option value="Cancelada">Cancelada</option>
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
            <p>{filteredSeries.length} {filteredSeries.length === 1 ? 'série encontrada' : 'séries encontradas'}</p>
          </div>

          <div className="series-grid">
            {filteredSeries.map(show => (
              <div key={show.id} className="series-card">
                <div className="series-poster">
                  <span className="poster-icon">{show.poster}</span>
                  <div className="series-rating">
                    <span>⭐ {show.rating}</span>
                  </div>
                  <div className={`series-status ${show.status.toLowerCase()}`}>
                    {show.status}
                  </div>
                  <div className="series-overlay">
                    <Link to={`/serie/${show.id}`} className="btn-details">Ver Detalhes</Link>
                  </div>
                </div>
                <div className="series-info">
                  <h3 className="series-title">{show.title}</h3>
                  <div className="series-meta">
                    <span>{show.year}</span>
                    <span>•</span>
                    <span>{show.country}</span>
                  </div>
                  <div className="series-stats">
                    <span>📺 {show.seasons} {show.seasons === 1 ? 'temporada' : 'temporadas'}</span>
                    <span>•</span>
                    <span>{show.episodes} episódios</span>
                  </div>
                  <p className="series-genres">{show.genres.join(', ')}</p>
                  <p className="series-synopsis">{show.synopsis}</p>
                  <div className="series-tags">
                    {show.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="series-actions">
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

          {filteredSeries.length === 0 && (
            <div className="no-results">
              <p>😔 Nenhuma série encontrada com esses filtros</p>
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

export default Series;
