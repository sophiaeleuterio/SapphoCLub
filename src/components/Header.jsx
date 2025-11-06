import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <h1>SapphoClub</h1>
            <span className="tagline">🏳️‍🌈 Conteúdo Sáfico & WLW</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">Explorar</Link>
            <Link to="/filmes" className="nav-link">Filmes</Link>
            <Link to="/series" className="nav-link">Séries</Link>
            <Link to="/animes" className="nav-link">Animes</Link>
            <Link to="/curtas" className="nav-link">Curtas</Link>
            <Link to="/comunidade" className="nav-link">Comunidade</Link>
          </nav>

          {/* Right Actions */}
          <div className="header-actions">
            <button className="search-btn" aria-label="Buscar">
              🔍
            </button>
            <Link to="/login" className="btn-secondary">Entrar</Link>
            <Link to="/cadastro" className="btn-primary">Cadastrar</Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <Link to="/" className="mobile-nav-link">Explorar</Link>
            <Link to="/filmes" className="mobile-nav-link">Filmes</Link>
            <Link to="/series" className="mobile-nav-link">Séries</Link>
            <Link to="/animes" className="mobile-nav-link">Animes</Link>
            <Link to="/curtas" className="mobile-nav-link">Curtas</Link>
            <Link to="/comunidade" className="mobile-nav-link">Comunidade</Link>
            <Link to="/perfil" className="mobile-nav-link">Perfil</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
