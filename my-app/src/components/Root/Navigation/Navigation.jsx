import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/users">
            <button>Usuarios</button>
          </Link>
          <Link to="/movies">
            <button>Películas</button>
          </Link>
          <Link to="/rents">
            <button>Rentas</button>
          </Link>
        </div>
      </div>
      <div className="footer-banner">
        <p>Sección para operaciones CRUD de CloneBuster </p>
      </div>
    </div>
  );
}

export default Navigation;
