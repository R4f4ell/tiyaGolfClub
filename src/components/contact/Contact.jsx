import './contact.scss';

const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <div className="contact__container">
        {/* Formulário */}
        <div className="contact__form">
          <h2 className="contact__title">Contact Tiya</h2>
          <form>
            <div className="contact__inputs">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email address" />
            </div>
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit" className="contact__button">Submit Form</button>
          </form>
        </div>

        {/* Bloco de informações */}
        <div className="contact__info">
          <div className="contact__info-box">
            <h3>London, United Kingdom</h3>
            <p>(020) 010-020-0340</p>
            <p>info@company.com</p>
            <a href="#" className="contact__directions">Directions</a>
          </div>
          {/* Imagem de fundo do mapa será aplicada via CSS */}
        </div>
      </div>
    </section>
  );
};

export default Contact;