import * as React from 'react';
const Accueil = () => {
  return (
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4 p-4 d-flex flex-column align-items-center text-center">
          <img
            width="140"
            height="140"
            src="https://i.pinimg.com/originals/94/72/f4/9472f481da0de707b4f855d0db76b91c.jpg"
            className="rounded-circle"
          />

          <h2 className="fw-normal mt-4">Séjour Edenique</h2>
          <p>
            Ambiance « full lagon », optez pour l'un de nos Bungalows sur
            pilotis à fond de verre, permettant d’admirer la faune et la flore
            pendant les soins.
          </p>
          <p>
            <a className="btn btn-info text-white " href="/bungalows">
              En Savoir Plus
            </a>
          </p>
        </div>
        <div className="col-lg-4 p-4 d-flex flex-column align-items-center text-center">
          <img
            width="140"
            height="140"
            src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/feet5t.jpg"
            className="rounded-circle"
          />
          <h2 className="fw-normal mt-4">Spécialités Locales</h2>
          <p>
            Des menus comprenant divers poissons frais, des spécialités
            tahitiennes à base de produits frais locaux.
          </p>
          <p>
            <a className="btn btn-info mt-4 text-white" href="/bungalows">
              En Savoir Plus
            </a>
          </p>
        </div>
        <div className="col-lg-4 p-4 d-flex flex-column align-items-center text-center">
          <img
            width="140"
            height="140"
            src="https://mayottedecouverte.fr/wp-content/uploads/2018/05/saut-baleine-a-bosse-3-mayotte-decouverte.jpg"
            className="rounded-circle"
          />

          <h2 className="fw-normal mt-4 ">Sortie Baleine</h2>
          <p>
            Venez à la rencontre des baleines et de leurs baleineaux dans le
            plus grand respect des animaux.
          </p>
          <p>
            <a className="btn btn-info mt-4 text-white" href="/activites">
              En Savoir Plus
            </a>
          </p>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-6 d-flex flex-column  justify-content-center ">
          <h2 className="featurette-heading fw-normal  ">
            <a className="text-secondary " href="/bungalows">
              CHAMBRES ET BUNGALOWS
            </a>
            <hr className="text-primary " />
            <p className="text-info">Offrez vous un séjour de rêve !</p>
            <hr className="text-primary" />
          </h2>

          <p className="lead">
            Le long des eaux paisibles du lagon ou au coeur des jardins
            tropicaux nos chambres et Bungalows vous offre confort et
            authenticité polynésienne.
            <br />
            Lumineux et spacieux, ce sont de véritables havres de détente.
          </p>
        </div>
        <div className="col-md-6">
          <img
            style={{ height: '450px' }}
            className="img-fluid w-100"
            src="https://www.tropicalement-votre.com/produits/1030/doc/chambre-vue-lagon.jpg"
          />{' '}
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center ">
          <h2 className="featurette-heading fw-normal lh-1 text-secondary">
            ACTIVITES <hr className="text-primary" />
            <p className="text-info"> Sublimez votre expérience !</p>
            <hr className="text-primary" />
          </h2>
          <p className="lead ">
            Entre lagon bleu turquoise et vallées verdoyantes, Moorea regorge de
            paysages à couper le souffle qui ne demandent qu’à être découvert
            lors de votre séjour.
            <br /> En mer ou sur terre, Lagoon Lodge saura répondre à vos
            attentes.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img
            style={{ height: '450px' }}
            className="img-fluid w-100"
            src="https://adventuredivers-spain.com/wp-content/uploads/2018/06/jetski.png "
          />{' '}
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette pb-5">
        <div className="col-md-6 d-flex flex-column justify-content-center  ">
          <h2 className="featurette-heading fw-normal lh-1 text-secondary">
            EVENEMENTS <hr className="text-primary" />
            <p className="text-info">Vivez une expérience inoubliable !</p>
            <hr className="text-primary" />
          </h2>
          <p className="lead ">
            Avec des vues éblouissantes,un excellent soutien de notre équipe
            d'événements et un superbe emplacement dans le Pacifique Sud, soyez
            sûr d'un évènement réussi !
          </p>
        </div>
        <div className="col-md-6">
          <img
            style={{ height: '450px' }}
            className="img-fluid w-100"
            src="https://dbijapkm3o6fj.cloudfront.net/resources/1203,1004,1,6,4,0,600,450/-4153-/20180208132105/aro-tai-mariage-sur-la-plage.jpeg "
          />{' '}
        </div>
      </div>
    </div>
  );
};

export default Accueil;
