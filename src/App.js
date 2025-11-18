import React, { useState } from 'react';
import { Store, Watch, Smartphone, Users, TrendingUp, ShoppingCart, Star, Download, Search, Filter, Menu, X, Globe, Heart, Settings, Bell } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dados de exemplo
  const apps = [
    { id: 1, name: 'Fitness Tracker Pro', category: 'health', price: 29.90, rating: 4.8, downloads: '500K+', icon: '💪', description: 'Monitore seus treinos com IA' },
    { id: 2, name: 'Sleep Monitor', category: 'health', price: 19.90, rating: 4.6, downloads: '300K+', icon: '😴', description: 'Análise completa do sono' },
    { id: 3, name: 'Music Player', category: 'entertainment', price: 0, rating: 4.9, downloads: '1M+', icon: '🎵', description: 'Player otimizado para wearables' },
    { id: 4, name: 'Navigation Plus', category: 'utilities', price: 14.90, rating: 4.7, downloads: '250K+', icon: '🗺️', description: 'GPS com vibração inteligente' },
    { id: 5, name: 'Heart Health', category: 'health', price: 39.90, rating: 4.9, downloads: '800K+', icon: '❤️', description: 'Monitor cardíaco avançado' },
    { id: 6, name: 'Meditation Guide', category: 'health', price: 24.90, rating: 4.5, downloads: '400K+', icon: '🧘', description: 'Meditação guiada no pulso' },
    { id: 7, name: 'Voice Notes', category: 'productivity', price: 9.90, rating: 4.4, downloads: '150K+', icon: '🎤', description: 'Grave notas de voz rápidas' },
    { id: 8, name: 'Weather Pro', category: 'utilities', price: 0, rating: 4.6, downloads: '600K+', icon: '⛅', description: 'Previsão detalhada no pulso' },
  ];

  const wearables = [
    { id: 1, name: 'Apple Watch', compatibility: '95%', users: '500M+', logo: '🍎' },
    { id: 2, name: 'Samsung Galaxy Watch', compatibility: '92%', users: '300M+', logo: '📱' },
    { id: 3, name: 'Fitbit', compatibility: '88%', users: '200M+', logo: '⌚' },
    { id: 4, name: 'Garmin', compatibility: '85%', users: '150M+', logo: '🏃' },
    { id: 5, name: 'Huawei Watch', compatibility: '90%', users: '180M+', logo: '📲' },
  ];

  const stats = [
    { label: 'Apps Disponíveis', value: '5.000+', icon: Store },
    { label: 'Dispositivos Suportados', value: '50+', icon: Watch },
    { label: 'Usuários Ativos', value: '2M+', icon: Users },
    { label: 'Downloads Totais', value: '15M+', icon: Download },
  ];

  const addToCart = (app) => {
    if (!cart.find(item => item.id === app.id)) {
      setCart([...cart, app]);
    }
  };

  const removeFromCart = (appId) => {
    setCart(cart.filter(item => item.id !== appId));
  };

  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'Todos', icon: '📱' },
    { id: 'health', name: 'Saúde', icon: '💊' },
    { id: 'entertainment', name: 'Entretenimento', icon: '🎮' },
    { id: 'productivity', name: 'Produtividade', icon: '💼' },
    { id: 'utilities', name: 'Utilitários', icon: '🔧' },
  ];

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Componente Header
  const Header = () => (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => navigateTo('home')}>
          <Watch size={28} />
          <h1>SmartHub</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <button onClick={() => navigateTo('home')} className={currentPage === 'home' ? 'active' : ''}>
            Início
          </button>
          <button onClick={() => navigateTo('store')} className={currentPage === 'store' ? 'active' : ''}>
            Loja
          </button>
          <button onClick={() => navigateTo('devices')} className={currentPage === 'devices' ? 'active' : ''}>
            Dispositivos
          </button>
          <button onClick={() => navigateTo('about')} className={currentPage === 'about' ? 'active' : ''}>
            Sobre
          </button>
        </nav>

        <div className="header-actions">
          <button className="icon-btn cart-btn" onClick={() => navigateTo('cart')}>
            <ShoppingCart size={20} />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </button>
          
          {/* Mobile Menu Button */}
          <button className="icon-btn mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav">
          <button onClick={() => navigateTo('home')} className={currentPage === 'home' ? 'active' : ''}>
            Início
          </button>
          <button onClick={() => navigateTo('store')} className={currentPage === 'store' ? 'active' : ''}>
            Loja
          </button>
          <button onClick={() => navigateTo('devices')} className={currentPage === 'devices' ? 'active' : ''}>
            Dispositivos
          </button>
          <button onClick={() => navigateTo('about')} className={currentPage === 'about' ? 'active' : ''}>
            Sobre
          </button>
        </nav>
      )}
    </header>
  );

  // Página Home
  const HomePage = () => (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">O HUB Universal para Seus Wearables</h1>
          <p className="hero-subtitle">
            SmartHub é a primeira loja universal de aplicativos para dispositivos vestíveis. 
            Independente da marca ou design, encontre os melhores apps em um só lugar.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => navigateTo('store')}>
              Explorar Loja
            </button>
            <button className="btn btn-secondary" onClick={() => navigateTo('devices')}>
              Ver Dispositivos
            </button>
          </div>
        </div>
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon size={32} className="stat-icon" />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <h2>Por Que Escolher o SmartHub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Universal</h3>
            <p>Compatível com mais de 50 marcas de wearables diferentes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Rápido</h3>
            <p>Interface fluida otimizada para dispositivos vestíveis</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Seguro</h3>
            <p>Todos os apps são verificados e testados pela nossa equipe</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Econômico</h3>
            <p>Acesso gratuito com opções premium acessíveis</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Pronto para Começar?</h2>
        <p>Junte-se a mais de 2 milhões de usuários que já encontraram os melhores apps para seus wearables</p>
        <button className="btn btn-primary" onClick={() => navigateTo('store')}>
          Explorar Agora
        </button>
      </section>
    </div>
  );

  // Página Store
  const StorePage = () => (
    <div className="page store-page">
      <div className="store-header">
        <h1>Loja de Aplicativos</h1>
        <p>Descubra apps incríveis para o seu wearable</p>
      </div>

      <div className="search-bar">
        <Search size={20} />
        <input
          type="text"
          placeholder="Buscar aplicativos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-chip ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <span>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      <div className="apps-grid">
        {filteredApps.map(app => (
          <div key={app.id} className="app-card">
            <div className="app-icon">{app.icon}</div>
            <div className="app-info">
              <h3>{app.name}</h3>
              <p>{app.description}</p>
              <div className="app-meta">
                <span className="rating">
                  <Star size={14} fill="currentColor" />
                  {app.rating}
                </span>
                <span className="downloads">
                  <Download size={14} />
                  {app.downloads}
                </span>
              </div>
              <div className="app-footer">
                <span className="price">
                  {app.price === 0 ? 'Grátis' : `R$ ${app.price.toFixed(2)}`}
                </span>
                <button 
                  className="btn btn-sm"
                  onClick={() => addToCart(app)}
                  disabled={cart.find(item => item.id === app.id)}
                >
                  {cart.find(item => item.id === app.id) ? 'No Carrinho' : 'Adicionar'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Página Devices
  const DevicesPage = () => (
    <div className="page devices-page">
      <div className="devices-header">
        <h1>Dispositivos Compatíveis</h1>
        <p>Funciona com os principais wearables do mercado</p>
      </div>

      <div className="devices-grid">
        {wearables.map(device => (
          <div key={device.id} className="device-card">
            <div className="device-logo">{device.logo}</div>
            <h3>{device.name}</h3>
            <div className="device-stats">
              <div className="device-stat">
                <span className="label">Compatibilidade</span>
                <span className="value">{device.compatibility}</span>
              </div>
              <div className="device-stat">
                <span className="label">Usuários</span>
                <span className="value">{device.users}</span>
              </div>
            </div>
            <button className="btn btn-outline">Ver Apps Compatíveis</button>
          </div>
        ))}
      </div>

      <div className="compatibility-info">
        <h2>Não encontrou seu dispositivo?</h2>
        <p>Estamos constantemente adicionando suporte para novos wearables. Entre em contato para solicitar compatibilidade.</p>
        <button className="btn btn-secondary">Solicitar Suporte</button>
      </div>
    </div>
  );

  // Página About
  const AboutPage = () => (
    <div className="page about-page">
      <div className="about-hero">
        <h1>Sobre o SmartHub</h1>
        <p className="subtitle">Revolucionando o acesso a aplicativos para dispositivos vestíveis</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Nossa Visão</h2>
          <p>
            Criar um ecossistema universal onde qualquer aplicativo possa funcionar em qualquer wearable, 
            independente da marca ou sistema operacional. Acreditamos que a tecnologia vestível deve ser 
            acessível e sem barreiras.
          </p>
        </section>

        <section className="about-section">
          <h2>Como Funciona</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Parcerias com Desenvolvedores</h3>
              <p>Trabalhamos com empresas para adaptar aplicativos existentes para wearables</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Testes e Otimização</h3>
              <p>Garantimos que cada app funcione perfeitamente em todos os dispositivos suportados</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Distribuição Universal</h3>
              <p>Disponibilizamos na nossa loja para todos os usuários, independente do dispositivo</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Modelo de Receita</h2>
          <ul className="revenue-list">
            <li>💳 Venda de aplicativos premium</li>
            <li>💰 Porcentagem de transações in-app</li>
            <li>🤝 Comissões de parcerias com grandes empresas</li>
            <li>📊 Planos corporativos para desenvolvedores</li>
          </ul>
        </section>

        <section className="about-section timeline">
          <h2>Nosso Cronograma</h2>
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Meses 0-12: Desenvolvimento</h3>
                <p>Finalização do HUB e infraestrutura base</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Meses 13-18: Lançamento</h3>
                <p>Primeiros apps em parceria e abertura ao público</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Meses 19+: Expansão</h3>
                <p>Crescimento para mais dispositivos e mercados</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  // Página Cart
  const CartPage = () => (
    <div className="page cart-page">
      <h1>Carrinho de Compras</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <ShoppingCart size={64} />
          <h2>Seu carrinho está vazio</h2>
          <p>Explore nossa loja e adicione aplicativos incríveis!</p>
          <button className="btn btn-primary" onClick={() => navigateTo('store')}>
            Ir para Loja
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(app => (
              <div key={app.id} className="cart-item">
                <div className="cart-item-icon">{app.icon}</div>
                <div className="cart-item-info">
                  <h3>{app.name}</h3>
                  <p>{app.description}</p>
                </div>
                <div className="cart-item-price">
                  {app.price === 0 ? 'Grátis' : `R$ ${app.price.toFixed(2)}`}
                </div>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(app.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>R$ {cart.reduce((sum, app) => sum + app.price, 0).toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>R$ {cart.reduce((sum, app) => sum + app.price, 0).toFixed(2)}</span>
            </div>
            <button className="btn btn-primary btn-block">
              Finalizar Compra
            </button>
            <p className="payment-info">💳 Aceitamos PIX e Cartões</p>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'store' && <StorePage />}
        {currentPage === 'devices' && <DevicesPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'cart' && <CartPage />}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SmartHub</h3>
            <p>O HUB universal para seus dispositivos vestíveis</p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('store'); }}>Loja</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('devices'); }}>Dispositivos</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>Sobre</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <p>suporte@smarthub.com</p>
            <p>Brasília, DF - Brasil</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SmartHub. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;