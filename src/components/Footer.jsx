import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-column">
            <h3 className="footer-title">SapphoClub</h3>
            <p className="footer-description">
              Plataforma de descoberta e comunidade para conteúdo sáfico e WLW. 
              Conectando pessoas através de filmes, séries e animes que representam 
              nossas histórias.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="Discord">💬</a>
              <a href="#" className="social-link" aria-label="Email">✉️</a>
            </div>
          </div>

          {/* Explore Section */}
          <div className="footer-column">
            <h4 className="footer-heading">Explorar</h4>
            <ul className="footer-links">
              <li><a href="#">Filmes</a></li>
              <li><a href="#">Séries</a></li>
              <li><a href="#">Animes/Yuri</a></li>
              <li><a href="#">Curtas</a></li>
              <li><a href="#">Lançamentos</a></li>
              <li><a href="#">Mais Votados</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="footer-column">
            <h4 className="footer-heading">Comunidade</h4>
            <ul className="footer-links">
              <li><a href="#">Criar Conta</a></li>
              <li><a href="#">Meu Perfil</a></li>
              <li><a href="#">Minhas Listas</a></li>
              <li><a href="#">Sugerir Conteúdo</a></li>
              <li><a href="#">Diretrizes</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="footer-column">
            <h4 className="footer-heading">Informações</h4>
            <ul className="footer-links">
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Acessibilidade</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2025 SapphoClub. Feito com 💜 para a comunidade WLW/Sáfica.
          </p>
          <p className="disclaimer">
            Este é um projeto de catalogação e comunidade. Todos os direitos de conteúdo 
            pertencem aos seus respectivos criadores e distribuidores.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
