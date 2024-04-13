import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesCRUD.css'; // Importa el archivo CSS para los estilos

function MoviesCRUD() {
  return (
    <div className="movies-container">
      <div className="banner-movies">ClonBuster: Películas</div>
      <div className="buttons-column">
      <Link to="/createMovie" className="action-movies-button">Crear</Link>
      <Link to="/readMovie" className="action-movies-button">Leer</Link>
      <Link to="/updateMovie" className="action-movies-button">Actualizar</Link>
      <Link to="/deleteMovie" className="action-movies-button">Borrar</Link>
      <Link to="/" className="return-movies-button">Regresar</Link>
      </div>
    </div>
  );
}

export default MoviesCRUD;

