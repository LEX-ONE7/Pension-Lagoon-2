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

          <h2 className="fw-normal">Heading</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details &raquo;
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

          <h2 className="fw-normal">Heading</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details &raquo;
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

          <h2 className="fw-normal">Heading</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details &raquo;
            </a>
          </p>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-6 d-flex flex-column justify-content-center ">
          <h2 className="featurette-heading fw-normal lh-1">
            CHAMBRES ET BUNGALOWS.{' '}
            <span className="text-muted">It’ll blow your mind.</span>
          </h2>
          <p className="lead d-flex text-center">
            Au coeur des jardins tropicaux ou le long des eaux paisibles du
            lagon, nos Chambres et Bungalows vous offre confort et authenticité
            polynésienne.
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
          <h2 className="featurette-heading fw-normal lh-1">
            ACTIVITES. <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead d-flex">
            SUBLIMEZ VOTRE EXPÉRIENCE À LAGOON LODGE Notre centre de plongée
            sous-marine vous fait découvrir un monde extraordinaire.
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
        <div className="col-md-6 d-flex flex-column justify-content-center ">
          <h2 className="featurette-heading fw-normal lh-1">
            EVENEMENTS. <span className="text-muted">Checkmate.</span>
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
