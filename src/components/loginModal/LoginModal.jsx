import { useEffect, useRef } from 'react';
import './LoginModal.scss';
import { X } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="login-modal__overlay">
      <div className="login-modal" ref={modalRef}>
        <div className="login-modal__header">
          <h2>Member Login</h2>
          <button className="login-modal__close" onClick={onClose} aria-label="Fechar modal">
            <X size={24} />
          </button>
        </div>

        <div className="login-modal__content">
          <label>
            Membership No.
            <input type="text" placeholder="11002560" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>

          <div className="login-modal__remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button className="login-modal__submit">Login</button>

          <a href="#" className="login-modal__forgot">
            Forgotten password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;