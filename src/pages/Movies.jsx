import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mockData from '../data/mockData.json';
import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    genre: '',
    country: '',
    year: '',
    rating: ''
  });

  useEffect(() => {
    setMovies(mockData.movies);
    setFilteredMovies(mockData.movies);
  }, []);

  useEffect(() => {
    filterMovies();
  }, [filters, movies]);

  const filterMovies = () => {
    let filtered = [...movies];

    // Filtro de busca por título
    if (filters.search) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Filtro por gênero
    if (filters.genre) {
      filtered = filtered.filter(movie =>
        movie.genres.includes(filters.genre)
      );
    }

    // Filtro por país
    if (filters.country) {
      filtered = filtered.filter(movie =>
        movie.country === filters.country
      );
    }

    // Filtro por ano
    if (filters.year) {
      if (filters.year === '2020s') {
        filtered = filtered.filter(movie => movie.year >= 2020);
      } else if (filters.year === '2010s') {
        filtered = filtered.filter(movie => movie.year >= 2010 && movie.year < 2020);
      } else if (filters.year === '2000s') {
        filtered = filtered.filter(movie => movie.year >= 2000 && movie.year < 2010);
      } else if (filters.year === 'older') {
        filtered = filtered.filter(movie => movie.year < 2000);
      } else {
        filtered = filtered.filter(movie => movie.year === parseInt(filters.year));
      }
    }

    // Filtro por avaliação
    if (filters.rating) {
      filtered = filtered.filter(movie => movie.rating >= parseFloat(filters.rating));
    }

    setFilteredMovies(filtered);
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
      year: '',
      rating: ''
    });
  };

  const uniqueGenres = [...new Set(movies.flatMap(m => m.genres))];
  const uniqueCountries = [...new Set(movies.map(m => m.country))];

  return (
    <>
      <Header />
      <div className="movies-page">
        <div className="movies-container">
          {/* Header */}
          <div className="page-header">
            <h1>🎬 Catálogo de Filmes</h1>
            <p>Descubra filmes com representação lésbica e WLW autêntica</p>
          </div>

          {/* Filters */}
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
                name="year"
                value={filters.year}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">Qualquer Época</option>
                <option value="2020s">Anos 2020</option>
                <option value="2010s">Anos 2010</option>
                <option value="2000s">Anos 2000</option>
                <option value="older">Anteriores</option>
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

          {/* Results */}
          <div className="results-header">
            <p>{filteredMovies.length} {filteredMovies.length === 1 ? 'filme encontrado' : 'filmes encontrados'}</p>
          </div>

          {/* Movies Grid */}
          <div className="movies-grid">
            {filteredMovies.map(movie => (
              <div key={movie.id} className="movie-card">
                <div className="movie-poster">
                  <span className="poster-icon">{movie.poster}</span>
                  <div className="movie-rating">
                    <span>⭐ {movie.rating}</span>
                  </div>
                  <div className="movie-overlay">
                    <Link to={`/filme/${movie.id}`} className="btn-details">Ver Detalhes</Link>
                  </div>
                </div>
                <div className="movie-info">
                  <h3 className="movie-title">{movie.title}</h3>
                  <div className="movie-meta">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>{movie.country}</span>
                    <span>•</span>
                    <span>{movie.duration}min</span>
                  </div>
                  <p className="movie-genres">{movie.genres.join(', ')}</p>
                  <p className="movie-synopsis">{movie.synopsis}</p>
                  <div className="movie-tags">
                    {movie.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="movie-actions">
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

          {filteredMovies.length === 0 && (
            <div className="no-results">
              <p>😔 Nenhum filme encontrado com esses filtros</p>
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

export default Movies;
