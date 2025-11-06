import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    pronoun: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter no mínimo 3 caracteres';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Você deve aceitar os termos de uso';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Cadastro:', formData);
      alert('Cadastro realizado com sucesso! (simulação)');
      window.location.href = '/login';
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <div className="cadastro-header">
          <Link to="/" className="logo-link">
            <h1 className="logo-text">SapphoClub</h1>
          </Link>
          <h2>Crie sua Conta</h2>
          <p>Junte-se à comunidade sáfica e WLW</p>
        </div>

        <form onSubmit={handleSubmit} className="cadastro-form">
          <div className="form-group">
            <label htmlFor="name">Nome completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Senha *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar senha *</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Digite novamente"
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="pronoun">Pronome (opcional)</label>
            <select
              id="pronoun"
              name="pronoun"
              value={formData.pronoun}
              onChange={handleChange}
              className="select-input"
            >
              <option value="">Selecione (opcional)</option>
              <option value="ela/dela">Ela/Dela</option>
              <option value="ele/dele">Ele/Dele</option>
              <option value="elu/delu">Elu/Delu</option>
              <option value="qualquer">Qualquer pronome</option>
              <option value="outro">Outro</option>
              <option value="prefiro-nao-informar">Prefiro não informar</option>
            </select>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <span>
                Eu concordo com os{' '}
                <a href="#" className="link">Termos de Uso</a>
                {' '}e{' '}
                <a href="#" className="link">Política de Privacidade</a>
              </span>
            </label>
            {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
          </div>

          <button type="submit" className="btn-cadastro">
            Criar Conta
          </button>

          <div className="social-cadastro">
            <p>Ou cadastre-se com:</p>
            <div className="social-buttons">
              <button type="button" className="btn-social google">
                🔍 Google
              </button>
              <button type="button" className="btn-social facebook">
                📘 Facebook
              </button>
            </div>
          </div>
        </form>

        <div className="cadastro-footer">
          <p>
            Já tem uma conta?{' '}
            <Link to="/login" className="login-link">
              Faça login
            </Link>
          </p>
        </div>
      </div>

      <div className="cadastro-visual">
        <div className="visual-content">
          <h3>🌈 Bem-vinda ao SapphoClub!</h3>
          <p className="visual-description">
            Uma comunidade segura e inclusiva para descobrir e compartilhar 
            conteúdo com representação lésbica e WLW autêntica.
          </p>
          <div className="visual-features">
            <div className="feature">
              <span className="feature-icon">🎬</span>
              <div>
                <h4>Descubra</h4>
                <p>Filmes, séries e animes WLW</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">💜</span>
              <div>
                <h4>Organize</h4>
                <p>Crie listas personalizadas</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">⭐</span>
              <div>
                <h4>Avalie</h4>
                <p>Compartilhe suas opiniões</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">👥</span>
              <div>
                <h4>Conecte-se</h4>
                <p>Faça parte da comunidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
