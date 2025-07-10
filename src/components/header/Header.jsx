import { useState, useEffect, useRef } from 'react';
import './header.scss';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo/logoGolf-header.png';
import LoginModal from '../loginModal/LoginModal';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
    setPagesOpen(false);
    setLoginOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
        setPagesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Scroll suave com tempo ajustável
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const topOffset = section.offsetTop;
    const duration = 200;
    const start = window.pageYOffset;
    const distance = topOffset - start;
    let startTime = null;

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const timeElapsed = timestamp - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOutCubic(progress));
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    requestAnimationFrame(animateScroll);

    setMenuOpen(false);
    setPagesOpen(false);
  };

  // 🆕 Scroll para o topo da home ao clicar na logo
  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100); // pequeno delay para esperar a navegação
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div
          className="header__logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        >
          <img src={logo} alt="Tiya Golf Club Logo" />
          <div className="header__text">
            <strong>Tiya</strong>
            <span>GOLF CLUB</span>
          </div>
        </div>

        <div className="header__actions">
          <button className="header__login" onClick={() => setLoginOpen(true)}>
            Member Login
          </button>

          <button
            ref={buttonRef}
            className="header__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav ref={menuRef} className="header__mobile-menu">
          <a onClick={() => scrollToSection('hero')}>Home</a>
          <a onClick={() => scrollToSection('about-tiya')}>About</a>
          <a onClick={() => scrollToSection('membership')}>Membership</a>
          <a onClick={() => scrollToSection('upcoming-events')}>Events</a>
          <a onClick={() => scrollToSection('contact')}>Contact Us</a>

          <div className="pages-submenu">
            <div
              className="pages-submenu__trigger"
              onClick={() => setPagesOpen(!pagesOpen)}
            >
              Pages{' '}
              <ChevronDown
                size={16}
                style={{
                  transform: pagesOpen ? 'rotate(180deg)' : 'rotate(-90deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>

            {pagesOpen && (
              <div className="pages-submenu__content">
                <Link to="/pages/event-listing">Event Listing</Link>
                <Link to="/pages/event-detail">Event Detail</Link>
              </div>
            )}
          </div>
        </nav>
      )}

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
};

export default Header;