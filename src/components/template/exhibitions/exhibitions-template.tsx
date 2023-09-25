import "./exhibitions-template.css";

export default function ExhibitionsTemplate() {
  return (
    <section id="exhibitions">
      <div className="container exhibitions__container">
        <h2 className="exhibitions__title">Exibições</h2>
        <div className="exhibitions__head">
          <p>Um pouquinho de minhas exibições</p>
        </div>
        <div className="exhibitions__gallery">
          <article>
            <img src="./images/exhibitions/20220301_183703.jpg" alt=""></img>
          </article>
          <article>
            <img src="./images/exhibitions/1665889632664.jpg" alt=""></img>
          </article>
          <article>
            <img
              src="./images/exhibitions/IMG_20230429_103309.jpg"
              alt=""
            ></img>
          </article>
          <article>
            <img
              src="./images/exhibitions/PSX_20200613_213746.jpg"
              alt=""
            ></img>
          </article>
          <article>
            <img
              src="./images/exhibitions/Screenshot_20230711_000624_Instagram.jpg"
              alt=""
            ></img>
          </article>
        </div>
      </div>
    </section>
  );
}
