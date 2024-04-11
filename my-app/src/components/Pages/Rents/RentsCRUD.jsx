import React from 'react';
import { Link } from 'react-router-dom';
import './RentsCRUD.css'; // Importa el archivo CSS para los estilos

function RentsCRUD() {
  return (
    <div className="rents-container">
      
      <div className="banner-rents">ClonBuster: Rentas</div>
      <div className="buttons-column">
      <Link to="/create" className="action-rents-button">Crear</Link>
      <Link to="/read" className="action-rents-button">Leer</Link>
      <Link to="/update" className="action-rents-button">Actualizar</Link>
      <Link to="/delete" className="action-rents-button">Borrar</Link>
      <Link to="/" className="return-rents-button">Regresar</Link>
      </div>
    </div>
  );
}

export default RentsCRUD;

