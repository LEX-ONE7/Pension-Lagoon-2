import * as React from 'react';
const Accueil = () => {
  return (
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4 p-4 d-flex flex-column align-items-center text-center">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
          </svg>

          <h2 className="fw-normal">Séjour Edenique</h2>
          <p>
            Ambiance « full lagon », optez pour l'un de nos Bungalows sur
            pilotis à fond de verre, permettant d’admirer la faune et la flore
            pendant les soins.
          </p>
          <p>
            <a className="btn btn-secondary" href="/bungalows">
              En Savoir Plus &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4 p-4 d-flex flex-column align-items-center text-center">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
          </svg>

          <h2 className="fw-normal">Spécialités Locales</h2>
          <p>
            Des menus comprenant divers poissons frais, des spécialités
            tahitiennes à base de produits frais locaux.
          </p>
          <p>
            <a className="btn btn-secondary" href="/bungalows">
              En Savoir Plus &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4 p-4 d-flex flex-column align-items-center text-center">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>
              {' '}
              <img src="https://mayottedecouverte.fr/wp-content/uploads/2018/05/saut-baleine-a-bosse-3-mayotte-decouverte.jpg" />
            </title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
          </svg>

          <h2 className="fw-normal">Sortie Baleine</h2>
          <p>
            Venez à la rencontre des baleines et de leurs baleineaux dans le
            plus grand respect des animaux.
          </p>
          <p>
            <a className="btn btn-secondary" href="/activites">
              En Savoir Plus &raquo;
            </a>
          </p>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-6 d-flex flex-column justify-content-center  ">
          <h2 className="featurette-heading fw-normal text-info">
            CHAMBRES ET BUNGALOWS.
            <hr className="text-info" />
            Offrez vous un séjour de rêve !
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
          <h2 className="featurette-heading fw-normal lh-1 text-info">
            ACTIVITES. <hr className="text-info" />
            Sublimez votre expérience !
          </h2>
          <p className="lead ">
            Entre lagon bleu turquoise et vallées verdoyantes, Tahiti regorge de
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
          <h2 className="featurette-heading fw-normal lh-1 text-info">
            EVENEMENTS. <hr className="text-info" />
            Vivez une expérience inoubliable !
          </h2>
          <p className="lead ">
            Avec des vues éblouissantes, un équipement à la pointe de la
            technologie, un excellent soutien de notre équipe d'événements et un
            superbe emplacement dans le Pacifique Sud, soyez sûr d'un évènement
            réussi !
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
