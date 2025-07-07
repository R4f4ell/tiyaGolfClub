import { useState, useEffect, useRef } from 'react';
import './header.scss';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/images/logo/logoGolf-header.png';
import LoginModal from '../loginModal/LoginModal';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

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

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Tiya Golf Club Logo" />
          <div className="header__text">
            <strong>Tiya</strong>
            <span>GOLF CLUB</span>
          </div>
        </Link>

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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact Us</Link>

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