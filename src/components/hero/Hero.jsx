import { useState, useEffect } from 'react';
import './hero.scss';
import youtubeThumb from '../../assets/images/home/youtube.jpeg';

const words = ['Modern', 'Creative', 'Lifestyle'];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id='hero'>
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h3>Welcome to the club</h3>
        <h1>
          Tiya is{' '}
          <span className="hero__dynamic" key={index}>
            {words[index]}
          </span>
        </h1>

        <div className="hero__buttons">
          <a href="#" className="btn-primary">Our Story</a>
          <a href="#" className="btn-link">Become a member</a>
        </div>

        <div className="hero__video-simulated">
          <img src={youtubeThumb} alt="Simulated YouTube Video" />
          <div className="hero__video-play"></div>
        </div>
      </div>

      <div className="hero__wave-top">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M0.00,49.98 C150.00,150.00 349.59,-49.98 500.00,49.98 L500.00,0 L0.00,0 Z"
            style={{ fill: '#3D405B' }}
          />
        </svg>
      </div>

      <div className="hero__wave-bottom">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M0.00,49.98 C150.00,0.00 349.59,150.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ fill: '#fff' }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
