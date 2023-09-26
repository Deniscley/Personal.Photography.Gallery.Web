import "./header-template.css";

export default function HeaderTemplate() {
  return (
    <>
      <header>
        <div className="container header__container">
          <div className="header__left">
            <div className="header__image-bg"></div>
            <div className="header__image-lg">
              <img src="/images/foto_perfil.jpg" alt="Header Image" />
            </div>
            <div className="header__image-sm">
              <img src="/images/foto_perfil.jpg" alt="Header Image" />
            </div>
          </div>
          <div className="header__right">
            <h1>
              Esse é o meu cantinho onde poderá conhecer um pouco mais sobre mim
            </h1>
            <p>
              "Determinação, coragem e autoconfiança são fatores decisivos para
              o sucesso. Se estamos possuídos por uma inabalável determinação,
              conseguiremos superá-los. Independentemente das circunstâncias,
              devemos ser sempre humildes, recatados e despidos de orgulho.
              <br />- Dalai Lama
            </p>
          </div>
        </div>
      </header>

      <div className="header__frames">
        <div className="header__frame">
          <img src="/images/camera_1.jpg" alt="Header Frame One" />
        </div>
        <div className="header__frame">
          <img src="/images/camera_2.jpg" alt="Header Frame Two" />
        </div>
      </div>
    </>
  );
}
