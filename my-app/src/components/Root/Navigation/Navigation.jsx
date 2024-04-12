import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <div className="header-banner">
        ClonBuster: la mejor opción en cinema
      </div>
      <div className="content">
        {/* Contenido del componente */}
        <div className="footer-buttons">
          <NavLink to="/users">
            <button>Usuarios</button>
          </NavLink>
          <NavLink to="/movies">
            <button>Películas</button>
          </NavLink>
          <NavLink to="/rents">
            <button>Rentas</button>
          </NavLink>
        </div>
      </div>
      <div className="footer-banner">
        <p>Sección para operaciones CRUD de CloneBuster </p>
      </div>
    </div>
  );
}

export default Navigation;
