import React from "react";

const navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Início
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Simulados</a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="/quiz1">
                Simulado 1
              </a>
              <a className="navbar-item" href="/quiz2">
                Simulado 2
              </a>
              <a className="navbar-item" href="/quiz3">
                Simulado 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
