import { useState } from 'react';
import './FilterBar.css';

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos', icon: '🎭' },
    { id: 'filmes', label: 'Filmes', icon: '🎬' },
    { id: 'series', label: 'Séries', icon: '📺' },
    { id: 'animes', label: 'Animes', icon: '🌸' },
    { id: 'curtas', label: 'Curtas', icon: '🎞️' },
    { id: 'populares', label: 'Populares', icon: '⭐' },
  ];

  return (
    <section className="filter-section">
      <div className="filter-container">
        <div className="filter-header">
          <h2>Explorar Catálogo</h2>
          <div className="filter-search">
            <input 
              type="text" 
              placeholder="Buscar por título, gênero, país..." 
              className="search-input"
            />
            <button className="search-button">🔍</button>
          </div>
        </div>

        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              <span className="filter-label">{filter.label}</span>
            </button>
          ))}
        </div>

        <div className="advanced-filters">
          <select className="filter-select">
            <option value="">Gênero</option>
            <option value="romance">Romance</option>
            <option value="drama">Drama</option>
            <option value="comedia">Comédia</option>
            <option value="acao">Ação</option>
            <option value="suspense">Suspense</option>
          </select>

          <select className="filter-select">
            <option value="">País</option>
            <option value="brasil">Brasil</option>
            <option value="eua">EUA</option>
            <option value="uk">Reino Unido</option>
            <option value="coreia">Coreia do Sul</option>
            <option value="japao">Japão</option>
            <option value="franca">França</option>
          </select>

          <select className="filter-select">
            <option value="">Ano</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2020s">Anos 2020</option>
            <option value="2010s">Anos 2010</option>
            <option value="2000s">Anos 2000</option>
            <option value="older">Anteriores</option>
          </select>

          <button className="clear-filters">Limpar Filtros</button>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
