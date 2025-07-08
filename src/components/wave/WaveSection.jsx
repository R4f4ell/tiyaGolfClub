import './waveSection.scss';
import { FiMail } from 'react-icons/fi';
import bgImage from '../../assets/images/wave/imgWaveSection.jpg';

export default function WaveSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado por se inscrever!');
  };

  return (
    <section
      className="wave-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="newsletter-card">
        <h2>Get our newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FiMail className="icon-mail" aria-hidden="true" />
            <input
              type="email"
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}