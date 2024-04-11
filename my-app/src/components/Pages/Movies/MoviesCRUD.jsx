import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesCRUD.css'; // Importa el archivo CSS para los estilos

function MoviesCRUD() {
  return (
    <div className="movies-container">
      <div className="banner-movies">ClonBuster: Películas</div>
      <div className="buttons-column">
      <Link to="/create" className="action-movies-button">Crear</Link>
      <Link to="/read" className="action-movies-button">Leer</Link>
      <Link to="/update" className="action-movies-button">Actualizar</Link>
      <Link to="/delete" className="action-movies-button">Borrar</Link>
      <Link to="/" className="return-movies-button">Regresar</Link>
      </div>
    </div>
  );
}

export default MoviesCRUD;

