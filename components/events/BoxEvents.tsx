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
          <h3 className="card-title text-center fs-3 align-content-center"> Évènements </h3>
        </div>
        {/* 3 Events*/}
        <hr className="featurette-divider" />
        <div className="row featurette ">
          <div className="col-md-6 d-flex flex-column  justify-content-center px-4">
            <h2 className="featurette-heading  fw-normal  text-secondary ">
              Mariages
            </h2>

            <p className="lead fs-4">
              Notre équipe vous organise des évènements mémorables,
              <br /> du dîner romantique au mariage tahitien traditionnel.
              <br /> Entre cadeaux, surprises et privilèges, vivez des moments à
              deux exceptionnels et inoubliables.
            </p>
          </div>
          <div className="col-md-6">
            <SliderAuto collection="mariage" />
          </div>
        </div>
        {/* HoneyMoon */}
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className=" d-flex   ">
            <SliderAuto collection="honeymoon" />
            <div className="col-md-6  d-flex flex-column justify-content-center px-4  ">
              <h2 className=" featurette-heading fw-normal lh-1 text-secondary">
                Lune de Miel
                <hr className="text-primary" />
                <p className="text-info"> Vivez une expérience inoubliable !</p>
                <hr className="text-primary" />
              </h2>

              <p className="lead fs-4">
                La Polynésie est l’une des plus belles destinations au monde
                <br />
                pour fêter ce grand moment à deux ! <br />
                Nos offres incluent de nombreux cadeaux et surprises qui vous
                laisseront un souvenir impérissable.
              </p>
            </div>
          </div>

          {/* HB */}
          <hr className="featurette-divider" />
          <div className="row featurette ">
            <div className="col-md-6  d-flex flex-column justify-content-center px-4">
              <h2 className="featurette-heading fw-normal  text-secondary">
                Anniversaires
              </h2>
            </div>
            <p className="lead fs-4">
              Fini les salles de fête basiques,les partys d’anniversaire
              organisés à l’improviste à la maison.
              <br /> Cette année, vous avez décidé de mettre le paquet!
              <br />
              Unique et inoubliable
            </p>
          </div>
          <div className="col-md-6">
            <SliderAuto collection="anniversaire" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default BoxEvents;
