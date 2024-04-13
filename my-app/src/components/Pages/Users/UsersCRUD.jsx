import React from 'react';
import { Link } from 'react-router-dom';
import './UsersCRUD.css'; // Importa el archivo CSS para los estilos

function UsersCRUD() {
  return (
    <div className="users-container">
      <div className="banner">ClonBuster: Usuarios</div>
      <div className="buttons-column">
      <Link to="/createUser" className="action-button">Crear</Link>
      <Link to="/readUser" className="action-button">Leer</Link>
      <Link to="/updateUser" className="action-button">Actualizar</Link>
      <Link to="/deleteUser" className="action-button">Borrar</Link>
      <Link to="/" className="return-button">Regresar</Link>
      </div>
    </div>
  );
}

export default UsersCRUD;

