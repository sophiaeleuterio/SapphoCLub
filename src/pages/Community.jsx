import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Community.css';

const Community = () => {
  const [filter, setFilter] = useState('recentes');

  // Posts da comunidade com reviews
  const communityPosts = [
    {
      id: 1,
      user: {
        name: 'Ana Clara',
        avatar: '👩',
        pronoun: 'ela/dela'
      },
      content: {
        title: 'Carol',
        type: 'filme',
        rating: 5
      },
      review: 'Acabei de assistir Carol pela terceira vez e continuo me emocionando! A direção de Todd Haynes é impecável, cada frame é uma obra de arte. A química entre Cate e Rooney é absolutamente magnética. 🏳️‍🌈❤️',
      likes: 42,
      comments: 8,
      date: '2h atrás',
      tags: ['drama', 'romance', 'clássico']
    },
    {
      id: 2,
      user: {
        name: 'Julia Santos',
        avatar: '🧑',
        pronoun: 'ela/dela'
      },
      content: {
        title: 'Gentleman Jack',
        type: 'serie',
        rating: 5
      },
      review: 'Estou viciada em Gentleman Jack! Anne Lister é uma personagem incrível e a Suranne Jones entrega uma performance magistral. Adoro como a série mistura história real com elementos modernos.',
      likes: 38,
      comments: 12,
      date: '5h atrás',
      tags: ['período', 'histórico', 'lgbtq+']
    },
    {
      id: 3,
      user: {
        name: 'Mariana Costa',
        avatar: '👱‍♀️',
        pronoun: 'ela/dela'
      },
      content: {
        title: 'Citrus',
        type: 'anime',
        rating: 4
      },
      review: 'Citrus foi meu primeiro anime Yuri e me apaixonei completamente pelo gênero! A relação entre Yuzu e Mei é complexa e cheia de nuances. Recomendo muito pra quem quer começar no mundo Yuri!',
      likes: 56,
      comments: 15,
      date: '1 dia atrás',
      tags: ['yuri', 'anime', 'romance']
    },
    {
      id: 4,
      user: {
        name: 'Beatriz Lima',
        avatar: '👩‍🦱',
        pronoun: 'ela/dela'
      },
      content: {
        title: 'The Handmaiden',
        type: 'filme',
        rating: 5
      },
      review: 'Que filme INCRÍVEL! Park Chan-wook é um gênio. A fotografia, a trilha sonora, o roteiro cheio de reviravoltas... Tudo perfeito! E o romance entre Sook-hee e Lady Hideko é lindo e intenso.',
      likes: 67,
      comments: 20,
      date: '1 dia atrás',
      tags: ['suspense', 'romance', 'thriller']
    },
    {
      id: 5,
      user: {
        name: 'Camila Oliveira',
        avatar: '👩‍🦰',
        pronoun: 'ela/dela'
      },
      content: {
        title: 'Bloom Into You',
        type: 'anime',
        rating: 5
      },
      review: 'Yagate Kimi ni Naru é simplesmente perfeito! A forma como explora assexualidade e questionamentos sobre amor é muito sensível. A animação é linda e a história é profunda. Chorei muito!',
      likes: 89,
      comments: 24,
      date: '2 dias atrás',
      tags: ['yuri', 'anime', 'lgbtq+', 'ace']
    }
  ];

  const [posts, setPosts] = useState(communityPosts);

  const handleFilter = (filterType) => {
    setFilter(filterType);
    let sortedPosts = [...communityPosts];
    
    if (filterType === 'populares') {
      sortedPosts.sort((a, b) => b.likes - a.likes);
    } else if (filterType === 'comentados') {
      sortedPosts.sort((a, b) => b.comments - a.comments);
    }
    
    setPosts(sortedPosts);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 } 
        : post
    ));
  };

  return (
    <div className="community-page">
      <Header />
      
      <div className="community-hero">
        <div className="community-hero-content">
          <h1>💬 Comunidade SapphoClub</h1>
          <p>Conecte-se com outras pessoas que amam conteúdo sáfico e LGBTQ+</p>
        </div>
      </div>

      <div className="community-container">
        <div className="community-sidebar">
          <div className="create-post-card">
            <h3>✍️ Criar Post</h3>
            <p>Compartilhe sua opinião sobre um filme, série ou anime!</p>
            <button className="btn-create-post">Novo Post</button>
          </div>

          <div className="community-stats-card">
            <h3>📊 Estatísticas</h3>
            <div className="community-stats">
              <div className="stat">
                <span className="stat-number">1,234</span>
                <span className="stat-label">Membros</span>
              </div>
              <div className="stat">
                <span className="stat-number">456</span>
                <span className="stat-label">Posts hoje</span>
              </div>
              <div className="stat">
                <span className="stat-number">89</span>
                <span className="stat-label">Online agora</span>
              </div>
            </div>
          </div>

          <div className="trending-tags-card">
            <h3>🔥 Tags em alta</h3>
            <div className="trending-tags">
              <span className="tag">#yuri</span>
              <span className="tag">#romance</span>
              <span className="tag">#lgbtq+</span>
              <span className="tag">#drama</span>
              <span className="tag">#anime</span>
              <span className="tag">#wlw</span>
            </div>
          </div>
        </div>

        <div className="community-feed">
          <div className="feed-header">
            <h2>📝 Feed da Comunidade</h2>
            <div className="feed-filters">
              <button 
                className={`filter-btn ${filter === 'recentes' ? 'active' : ''}`}
                onClick={() => handleFilter('recentes')}
              >
                🕒 Recentes
              </button>
              <button 
                className={`filter-btn ${filter === 'populares' ? 'active' : ''}`}
                onClick={() => handleFilter('populares')}
              >
                🔥 Populares
              </button>
              <button 
                className={`filter-btn ${filter === 'comentados' ? 'active' : ''}`}
                onClick={() => handleFilter('comentados')}
              >
                💬 Mais comentados
              </button>
            </div>
          </div>

          <div className="posts-list">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <div className="user-info">
                    <div className="user-avatar">{post.user.avatar}</div>
                    <div className="user-details">
                      <h4 className="user-name">{post.user.name}</h4>
                      <span className="user-pronoun">{post.user.pronoun}</span>
                      <span className="post-date"> • {post.date}</span>
                    </div>
                  </div>
                </div>

                <div className="post-content">
                  <div className="content-header">
                    <div className="content-info">
                      <h3 className="content-title">{post.content.title}</h3>
                      <span className="content-type">{post.content.type}</span>
                    </div>
                    <div className="content-rating">
                      {'⭐'.repeat(post.content.rating)}
                    </div>
                  </div>
                  <p className="post-review">{post.review}</p>
                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="post-tag">#{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="post-actions">
                  <button 
                    className="action-btn like-btn"
                    onClick={() => handleLike(post.id)}
                  >
                    ❤️ {post.likes}
                  </button>
                  <button className="action-btn comment-btn">
                    💬 {post.comments}
                  </button>
                  <button className="action-btn share-btn">
                    🔗 Compartilhar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
