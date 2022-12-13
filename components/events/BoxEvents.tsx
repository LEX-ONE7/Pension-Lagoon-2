import * as React from 'react';
import SliderAuto from '../SliderAuto';
const BoxEvents = () => (
  <div className="container-fluid">
    <div className="row col-12">
      <div className="card rounded-5  ">
        <img
          src="https://7.holiday/public/user_files/1/1/7_villas.jpg"
          className="card-img"
        />
        <div className="card-img-overlay">
          <h3 className="card-title"> Évènements </h3>
        </div>

        {/* 3 Events*/}
        <hr className="featurette-divider" />

        <div className="row featurette ">
          <div className="col-md-6 d-flex flex-column  justify-content-center  ">
            <h2 className="featurette-heading  fw-normal  text-secondary ">
              Mariages
            </h2>

            <p className="lead">
              Notre équipe vous organise des évènements mémorables, du dîner
              romantique au mariage tahitien traditionnel. Entre cadeaux,
              surprises et privilèges, vivez des moments à deux exceptionnels et
              inoubliables.
            </p>
          </div>
          <div className="col-md-6">
            <SliderAuto collection="mariage" />
          </div>
        </div>
        {/* HoneyMoon */}
        <hr className="featurette-divider" />

        <div className="row featurette ">
          <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center ">
            <SliderAuto collection="honeymoon" />
            <h2 className="featurette-heading fw-normal lh-1 text-secondary col-md-6">
              Lune de Miel
              <hr className="text-primary" />
              <p className="text-info"> Vivez une expérience inoubliable !</p>
              <hr className="text-primary" />
            </h2>

            <p className="lead fs-4">
              La Polynésie est l’une des plus belles destinations au monde pour
              fêter ce grand moment à deux ! Nos offres incluent de nombreux
              cadeaux et surprises qui vous laisseront un souvenir impérissable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default BoxEvents;

{
  /* HB */
}
<div className="row featurette">
  <div className="col-md-6  d-flex flex-column justify-content-center ">
    <h2 className="featurette-heading fw-normal  text-secondary">
      Anniversaires
    </h2>

    <SliderAuto collection="anniversaire" />
  </div>
  <p className="lead fs-4">
    Fini les salles de fête basiques ou les partys d’anniversaire organisés à
    l’improviste à la maison… Cette année, vous avez décidé de mettre le paquet
    et vous avez amplement raison ! Plusieurs idées peuvent être considérées
    pour faire de votre fête d’anniversaire un événement unique et inoubliable
  </p>
</div>;
