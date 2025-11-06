import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sophia',
    pronoun: 'ela/dela',
    bio: 'Amante de histórias lésbicas e séries sáficas 🏳️‍🌈',
    avatar: '👩',
    location: 'São Paulo, Brasil',
    memberSince: 'Janeiro 2024'
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEditToggle = () => {
    if (isEditing) {
      setProfile(editedProfile);
    } else {
      setEditedProfile(profile);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setEditedProfile({
      ...editedProfile,
      [e.target.name]: e.target.value
    });
  };

  // Top 5 favoritos
  const favorites = [
    { id: 1, title: 'Carol', type: 'filme', rating: 5, icon: '🎬' },
    { id: 2, title: 'Retrato de uma Jovem em Chamas', type: 'filme', rating: 5, icon: '🎬' },
    { id: 3, title: 'Gentleman Jack', type: 'serie', rating: 5, icon: '📺' },
    { id: 4, title: 'Citrus', type: 'anime', rating: 5, icon: '🌸' },
    { id: 5, title: 'The L Word', type: 'serie', rating: 4, icon: '📺' }
  ];

  // Listas customizadas
  const watchLists = [
    {
      name: 'Favoritos',
      count: 12,
      emoji: '❤️'
    },
    {
      name: 'Assistir depois',
      count: 8,
      emoji: '📌'
    },
    {
      name: 'Já assistido',
      count: 45,
      emoji: '✅'
    }
  ];

  // Reviews do usuário
  const userReviews = [
    {
      id: 1,
      title: 'Carol',
      rating: 5,
      review: 'Uma obra-prima do cinema lésbico. A química entre Cate Blanchett e Rooney Mara é incrível!',
      date: '15 Jan 2024'
    },
    {
      id: 2,
      title: 'Gentleman Jack',
      rating: 5,
      review: 'Anne Lister é uma personagem incrível. A série é muito bem produzida e histórica.',
      date: '10 Jan 2024'
    },
    {
      id: 3,
      title: 'Citrus',
      rating: 5,
      review: 'Meu anime Yuri favorito! A relação entre Yuzu e Mei é complexa e emocionante.',
      date: '05 Jan 2024'
    }
  ];

  return (
    <div className="profile-page">
      <Header />
      
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-card">
            <div className="avatar-section">
              <div className="avatar-large">{profile.avatar}</div>
              <button className="btn-change-avatar">Alterar Avatar</button>
            </div>

            <div className="profile-info">
              {!isEditing ? (
                <>
                  <h1 className="profile-name">{profile.name}</h1>
                  <p className="profile-pronoun">{profile.pronoun}</p>
                  <p className="profile-bio">{profile.bio}</p>
                  <div className="profile-meta">
                    <span>📍 {profile.location}</span>
                    <span>📅 Membro desde {profile.memberSince}</span>
                  </div>
                  <button className="btn-edit-profile" onClick={handleEditToggle}>
                    ✏️ Editar Perfil
                  </button>
                </>
              ) : (
                <div className="edit-form">
                  <div className="form-group">
                    <label>Nome</label>
                    <input
                      type="text"
                      name="name"
                      value={editedProfile.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Pronome</label>
                    <select
                      name="pronoun"
                      value={editedProfile.pronoun}
                      onChange={handleChange}
                    >
                      <option value="ela/dela">ela/dela</option>
                      <option value="ele/dele">ele/dele</option>
                      <option value="elu/delu">elu/delu</option>
                      <option value="qualquer">qualquer pronome</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Bio</label>
                    <textarea
                      name="bio"
                      value={editedProfile.bio}
                      onChange={handleChange}
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Localização</label>
                    <input
                      type="text"
                      name="location"
                      value={editedProfile.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="edit-actions">
                    <button className="btn-save" onClick={handleEditToggle}>
                      💾 Salvar
                    </button>
                    <button className="btn-cancel" onClick={() => {
                      setEditedProfile(profile);
                      setIsEditing(false);
                    }}>
                      ❌ Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="stats-card">
            <h3>Estatísticas</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">45</span>
                <span className="stat-label">Conteúdos assistidos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Favoritos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Reviews</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">156</span>
                <span className="stat-label">Curtidas recebidas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <section className="favorites-section">
            <h2>🏆 Top 5 Favoritos</h2>
            <div className="favorites-grid">
              {favorites.map((item) => (
                <div key={item.id} className="favorite-card">
                  <div className="favorite-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <div className="favorite-rating">
                    {'⭐'.repeat(item.rating)}
                  </div>
                  <span className="favorite-type">{item.type}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="lists-section">
            <h2>📚 Minhas Listas</h2>
            <div className="lists-grid">
              {watchLists.map((list, index) => (
                <div key={index} className="list-card">
                  <div className="list-emoji">{list.emoji}</div>
                  <h3>{list.name}</h3>
                  <p className="list-count">{list.count} itens</p>
                  <button className="btn-view-list">Ver lista</button>
                </div>
              ))}
            </div>
          </section>

          <section className="reviews-section">
            <h2>📝 Minhas Avaliações</h2>
            <div className="reviews-list">
              {userReviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <h4>{review.title}</h4>
                    <div className="review-rating">
                      {'⭐'.repeat(review.rating)}
                    </div>
                  </div>
                  <p className="review-text">{review.review}</p>
                  <div className="review-footer">
                    <span className="review-date">{review.date}</span>
                    <div className="review-actions">
                      <button className="btn-icon">✏️</button>
                      <button className="btn-icon">🗑️</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
