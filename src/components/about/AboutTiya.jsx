import './aboutTiya.scss';
import imgMichaelAbout from '../../assets/images/about/imgMichaelAbout.jpg';
import imgSandyAbout from '../../assets/images/about/imgSandyAbout.jpg';

const AboutTiya = () => {
  return (
    <section className="about-tiya" id='about-tiya'>
      <p className="about-tiya__subtitle">About Tiya</p>
      <h2 className="about-tiya__title">Tiya Club History</h2>
      <p className="about-tiya__description">
        <p>Fundada em 1998, a Tiya Golf Club nasceu da paixão pelo golfe e pelo estilo de vida que o esporte representa. Localizado em meio à natureza, nosso clube oferece muito mais do que campos profissionais — é um espaço pensado para quem busca excelência, convivência e bem-estar.</p>
        
        <p>Ao longo dos anos, nos tornamos referência em experiências de alto padrão, combinando tradição e modernidade. Nossos membros desfrutam de estrutura completa, eventos exclusivos, programas de treinamento e um ambiente acolhedor, seja para atletas experientes ou iniciantes.</p>
        
        <p>Na Tiya, o golfe é só o começo de uma jornada inspiradora.</p>
      </p>

      <div className="about-tiya__team">
        <div className="member">
          <img src={imgMichaelAbout} alt="Michael, Founder" />
          <div className="info">
            <h4>Michael</h4>
            <span>Founder</span>
          </div>
        </div>

        <div className="member">
          <img src={imgSandyAbout} alt="Sandy, Co-Founder" />
          <div className="info">
            <h4>Sandy</h4>
            <span>Co-Founder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTiya;
