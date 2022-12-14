import * as React from 'react';
const BoxRestaurant = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Activités */}
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Hello, world!</h1>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more &raquo;
              </a>
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row p-2">
            <div className="col-md-4 text-center ">
              <h2>Petit Dejeuner</h2>
              <img
                src="https://7.holiday/public/user_files/1/1/7_villas.jpg"
                className="card-img"
              />
              <div className="card-header py-3 bg-info text-light">
                <h4 className=" fw-normal"> Petit Déjeuner</h4>
              </div>
              <p className="text-dark lead fs-4 text-center mt-2">
                1000 fr<small className="text-muted fw-light">/Jour</small>
              </p>

              <button
                type="button"
                className="w-100 btn btn-lg btn-info btn-lg rounded-3 btn-outline-light"
              >
                Réserver une table
              </button>

              <div className="col-md-4 text-center card rounded-5">
                <h2>Demi Pension</h2>
                <img
                  src="https://7.holiday/public/user_files/1/1/7_villas.jpg"
                  className="card-img"
                />
                <div className="card-img-text">
                  <h3 className="card-title text-center fs-3 fw-bold align-content-center">
                    Évènements
                  </h3>
                  <p className="text-dark lead fs-4 text-center">
                    Vivez une expérience inoubliable !
                  </p>
                </div>
                <a className="btn btn-secondary" href="" role="button">
                  View details &raquo;
                </a>
              </div>
              <div className="col-md-4 text-center card rounded-5">
                <h2>Pension Complète</h2>
                <img
                  src="https://7.holiday/public/user_files/1/1/7_villas.jpg"
                  className="card-img"
                />
                <div className="card-img-text">
                  <h3 className="card-title text-center fs-3 fw-bold align-content-center">
                    Évènements
                  </h3>
                  <p className="text-dark lead fs-4 text-center">
                    Vivez une expérience inoubliable !
                  </p>
                </div>
                <a className="btn btn-secondary" href="" role="button">
                  View details &raquo;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxRestaurant;
