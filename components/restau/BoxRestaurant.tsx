import * as React from 'react';
const BoxRestaurant = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Activités */}
        <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3 text-center">
            <img
              style={{ height: '450px' }}
              className="img-fluid w-100"
              src="https://www.yestahiti.fr/_client_files/infos_voyageurs/chaud-froid.jpg"
            />
            <h2 className="mt-4 mb-4">Chaud-Froid</h2>
            <p className="fs-5">Tataki au thon rouge.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark border rounded-3 text-center">
            <img
              style={{ height: '450px' }}
              className="img-fluid w-100"
              src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/feet5t.jpg"
            />
            <h2 className="mt-4 mb-4">Crudités</h2>
            <p className="fs-5">Poisson cru au lait de coco.</p>
          </div>
        </div>
      </div>
      
        <div className="container">
          <div className="row p-2">
            <div className="col-md-4 text-center card rounded-5">
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
                className="w-100 btn btn-lg btn-info btn-lg rounded-3 btn-outline-light rounded-4 mb-2"
              >
                Réserver une table
              </button>
            </div>
            <div className="col-md-4 text-center card rounded-5">
              <h2>Demi Pension</h2>
              <img
                src="https://7.holiday/public/user_files/1/1/7_villas.jpg"
                className="card-img"
              />
              <div className="card-header py-3 bg-info text-light">
                <h4 className=" fw-normal"> Demi Pension</h4>
              </div>
              <p className="text-dark lead fs-4 text-center mt-2">
                2500 fr<small className="text-muted fw-light">/Jour</small>
              </p>

              <button
                type="button"
                className="w-100 btn btn-lg btn-info btn-lg rounded-3 btn-outline-light rounded-4 mb-2"
              >
                Réserver une table
              </button>
            </div>
            <div className="col-md-4 text-center card rounded-5">
              <h2>Pension Complète</h2>
              <img
                src="https://7.holiday/public/user_files/1/1/7_villas.jpg"
                className="card-img"
              />
              <div className="card-header py-3 bg-info text-light">
                <h4 className=" fw-normal"> Pension Complète</h4>
              </div>
              <p className="text-dark lead fs-4 text-center mt-2">
                4000 fr<small className="text-muted fw-light">/Jour</small>
              </p>

              <button
                type="button"
                className="w-100 btn btn-lg btn-info btn-lg rounded-3 btn-outline-light rounded-4 mb-2"
              >
                Réserver une table
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxRestaurant;
