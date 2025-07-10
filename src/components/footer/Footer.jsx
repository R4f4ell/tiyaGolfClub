import './footer.scss';
import { Instagram, Twitter, MessageCircleMore } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Coluna da logo */}
        <div className="footer__col footer__col--logo">
          <div className="footer__logo-box">
            <div className="footer__logo" aria-label="Tiya Golf Club" />
            <div className="footer__logo-text">
              <span className="footer__logo-title">Tiya</span>
              <span className="footer__logo-subtitle">GOLF CLUB</span>
            </div>
          </div>
        </div>

        {/* Coluna com os conteúdos */}
        <div className="footer__col footer__col--info">
          <div className="footer__section footer__section--hours">
            <h3 className="footer__title">Join Us</h3>

            <div className="footer__line">
              <span className="footer__day">Mon–Fri</span>
              <span className="footer__hour">6:00 AM – 6:00 PM</span>
            </div>

            <hr className="footer__divider" />

            <div className="footer__line">
              <span className="footer__day">Sat–Sun</span>
              <span className="footer__hour">6:30 AM – 8:30 PM</span>
            </div>

            <p className="footer__text footer__text--copyright">
              Copyright © 2048 Tiya Golf Club
            </p>
          </div>

          <div className="footer__section footer__section--social">
            <div className="footer__social-icons">
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="WhatsApp">
                <MessageCircleMore size={20} />
              </a>
            </div>
            <p className="footer__design">
              Design: <a href="#">TemplateMo</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
