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
          <div className="row">
            <div className="col-md-4 text-center card rounded-5">
              <h2>Petit Dejeuner</h2>
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
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{' '}
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxRestaurant;
