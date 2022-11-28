import * as React from 'react';
const Navbar = () => {
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Lagoon
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Bungalows & Chambres
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Activités
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Evenements
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Autres
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
};
export default Navbar;
