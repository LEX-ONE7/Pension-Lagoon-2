import * as React from 'react';
const Accueil = () => {
  return (
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
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
        <div className="col-lg-4">
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
        <div className="col-lg-4">
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
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            CHAMBRES ET BUNGALOWS.{' '}
            <span className="text-muted">It’ll blow your mind.</span>
          </h2>
          <p className="lead d-flex">
            AU COEUR DES JARDINS TROPICAUX OU LE LONG DES EAUX PAISIBLES DU
            LAGON, NOS 10 CHAMBRES ET BUNGALOWS VOUS OFFRE CONFORT ET
            AUTHENTICITE POLYNESIENNE.
            <br />
            LUMINEUX ET SPACIEUX,CE SONT DE VERITABLES HAVRES DE DETENTE.
          </p>
        </div>
        <div className="col-md-5">
          <img src="https://www.tropicalement-votre.com/produits/1030/doc/chambre-vue-lagon_500x500.jpg" />{' '}
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            ACTIVITES. <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            SUBLIMEZ VOTRE EXPÉRIENCE À LAGOON LODGE Notre centre de plongée
            sous-marine vous fait découvrir un monde extraordinaire.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img src="https://d2xf5gjipzd8cd.cloudfront.net/available/476881150/476881150_500x500.jpg " />{' '}
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            EVENEMENTS. <span className="text-muted">Checkmate.</span>
          </h2>
          <p className="lead">
            Avec des vues éblouissantes, un équipement à la pointe de la
            technologie, un excellent soutien de notre équipe d'événements et un
            superbe emplacement dans le Pacifique Sud, soyez sûr d'un évènement
            réussi !
          </p>
        </div>
        <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
