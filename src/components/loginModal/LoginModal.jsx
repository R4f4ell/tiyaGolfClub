import { useEffect, useRef, useState } from 'react';
import './LoginModal.scss';
import { X } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const [membership, setMembership] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!membership || !password) return;
    alert('Login realizado com sucesso! Seja bem-vindo(a) ao Tiya Golf Club.');
    onClose();
  };

  return (
    <div className="login-modal__overlay">
      <div className="login-modal" ref={modalRef}>
        <div className="login-modal__header">
          <h2>Member Login</h2>
          <button className="login-modal__close" onClick={onClose} aria-label="Fechar modal">
            <X size={30} />
          </button>
        </div>

        <form className="login-modal__content" onSubmit={handleSubmit}>
          <label>
            Membership No.
            <input
              type="text"
              placeholder="11002560"
              required
              maxLength={12}
              value={membership}
              onChange={(e) => setMembership(e.target.value)}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Password"
              required
              minLength={8}
              maxLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="login-modal__remember">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button className="login-modal__submit" type="submit">
            Login
          </button>

          <a href="#" className="login-modal__forgot">
            Forgotten password?
          </a>
        </form>

        <div className="login-modal__footer">
          <div className="login-modal__info">
            <p>
              <strong>Any Questions?</strong><br />
              <span className="footer-number">010-020-0340</span>
            </p>
          </div>
          <svg
            className="login-modal__wave"
            viewBox="0 0 500 150"
            preserveAspectRatio="none">
            <path
              d="M0,70C80,50 160,90 240,70S400,40 500,70L500,150L0,150Z" fill="#3D405B"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;