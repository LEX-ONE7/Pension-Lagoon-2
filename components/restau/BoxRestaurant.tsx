import * as React from 'react';
const BoxRestaurant = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Activités */}
        

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
                className="w-100 btn btn-lg btn-info btn-lg rounded-3 btn-outline-light"
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
