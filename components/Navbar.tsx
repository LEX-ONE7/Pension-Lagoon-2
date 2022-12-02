import * as React from 'react';
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <div className="container-fluid">
      <img
        width="50"
        height="50"
        src="
        blob:blob:https://mega.nz/2c23d4f0-4c74-43bc-9a7d-5b260be0d5bf
        
        "
        className="rounded-circle"
      />
      <a className="navbar-brand p-2" href="#">
        LAGOON LODGE
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
            <a className="nav-link" href="/bungalows">
              Bungalows & Chambres
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/activites">
              Activités
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/evenements">
              Évènements
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/evenements">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
