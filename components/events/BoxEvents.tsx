import * as React from 'react';
import SliderAuto from '../SliderAuto';
const BoxEvents = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="  ">
        <div className="card rounded-3">
          <img
            src="https://7.holiday/public/user_files/1/1/7_villas.jpg"
            className="card-img"
          />
          <div className="card-img-overlay">
            <h3 className="card-title"> Évènements </h3>
            <p className="card-text">
              Tahiti est l'endroit rêvé pour une escapade romantique dans les
              îles. Des plages aux allures de carte postale, des eaux turquoises
              scintillantes, des récifs de corail et des jungles verdoyantes en
              font une destination hors pair. Notre archipel offre des lieux
              insolites pour célébrer un mariage ou pour un rendez-vous en tête
              à tête sous les étoiles, et une multitude de paysages féériques
              pour des cérémonies somptueuses ou intimes selon vos envies.
            </p>

            <small>Last updated 3 mins ago</small>
          </div>
        </div>
      </div>

      {/* 3 Events*/}
      <div className="row featurette">
        <div className="col-md-6 d-flex flex-column  justify-content-center ">
          <h2 className="featurette-heading fw-normal  ">Mariages</h2>

          <p>
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
      <div className=" bg-info"></div>
      <div className=" bg-warning">
        <h3> Lune de Miel</h3>
        <p>
          La Polynésie est l’une des plus belles destinations au monde pour
          fêter ce grand moment à deux, rien que tous les deux ! Nos offres
          incluent de nombreux cadeaux et surprises qui vous laisseront un
          souvenir impérissable.
        </p>
      </div>
      <div className="bg-danger">
        <h3> Anniversaires</h3>
        <p>
          Fini les salles de fête basiques ou les partys d’anniversaire
          organisés à l’improviste à la maison… Cette année, vous avez décidé de
          mettre le paquet et vous avez amplement raison ! Plusieurs idées
          peuvent être considérées pour faire de votre fête d’anniversaire un
          événement unique et inoubliable
        </p>
      </div>
    </div>
    ...
  </div>
);
export default BoxEvents;
