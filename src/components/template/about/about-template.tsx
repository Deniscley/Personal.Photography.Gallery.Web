import "./about-template.css";

export default function AboutTemplate() {
  return (
    <section id="about">
      <div className="container about__container">
        <h2 className="about__title">
          Sobre
          <br />
          Deniscley Marfran
        </h2>
        <div className="about__left">
          <div className="about__image">
            <div className="about__image-bg"></div>
            <div className="about__image-lg">
              <img src="/images/foto_sobre.jpg" alt="About Deniscley Marfran" />
            </div>
            <div className="about__image-sm">
              <img src="/images/foto_sobre.jpg" alt="About Deniscley Marfran" />
            </div>
          </div>
        </div>

        <div className="about__right">
          <p>
            Sou Deniscley Marfran, mineiro, natural de Ribeirão Vermelho, sou
            uma pessoa que adora a vida, a família e a busca por conhecimento.
          </p>
          <p>
            Tenho diversos hobby tais como desenhar, jogar video-game, música,
            entre outros. Adoro tocar diversos instrumentos tais como violão,
            saxofone, cajon, etc.
          </p>
          <p>
            Formado no curso de Ciência da Computação pela Universidade Federal
            de Lavras - UFLA e desde então atuo como desenvolvedor web foco-me
            em trazer qualidade em usabilidade para os usuários.
          </p>
        </div>
      </div>
    </section>
  );
}
