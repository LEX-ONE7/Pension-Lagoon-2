import * as React from 'react';
const Home = () => {
  return (
    <div>
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1 text-center">
            CHAMBRES ET BUNGALOWS.{' '}
            <span className="text-muted">CHAMBRES ET BUNGALOWS.</span>
          </h2>
          <p className="lead">
            Au coeur des jardins tropicaux ou le long des eaux paisibles du
            lagon, nos 10 chambres et bungalows sur pilotis vous offre confort
            et authenticité polynésienne. Lumineux et spacieux, ce sont de
            véritables havres de détente.
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
export default Home;
