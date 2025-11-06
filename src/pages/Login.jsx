import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpar erro do campo quando usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
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
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Aqui você faria a chamada para a API
      console.log('Login:', formData);
      alert('Login realizado com sucesso! (simulação)');
      // Redirecionar para home após login
      window.location.href = '/';
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <Link to="/" className="logo-link">
            <h1 className="logo-text">SapphoClub</h1>
          </Link>
          <h2>Bem-vinda de Volta!</h2>
          <p>Entre para continuar explorando conteúdo sáfico</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
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

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Lembrar de mim</span>
            </label>
            <a href="#" className="forgot-password">Esqueci minha senha</a>
          </div>

          <button type="submit" className="btn-login">
            Entrar
          </button>

          <div className="social-login">
            <p>Ou entre com:</p>
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

        <div className="login-footer">
          <p>
            Não tem uma conta?{' '}
            <Link to="/cadastro" className="signup-link">
              Cadastre-se gratuitamente
            </Link>
          </p>
        </div>
      </div>

      <div className="login-visual">
        <div className="visual-content">
          <h3>🏳️‍🌈 Faça Parte da Comunidade</h3>
          <ul className="benefits-list">
            <li>💜 Crie listas personalizadas</li>
            <li>⭐ Avalie e comente conteúdos</li>
            <li>🎬 Descubra novos filmes e séries</li>
            <li>👥 Conecte-se com outras usuárias</li>
            <li>📌 Receba recomendações personalizadas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
