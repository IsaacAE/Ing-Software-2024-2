import React, { useState, useEffect } from 'react';
import { leerUsuarios, leerUsuarioPorId } from '../../../../../DataBase/DataOperations.js';
import { Link } from 'react-router-dom';
import './UserRead.css'; // Importa el archivo CSS para los estilos

function ReadUsers() {
  const [usuarios, setUsuarios] = useState([]);
  const [idUsuarioBuscar, setIdUsuarioBuscar] = useState('');
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const usuariosData = await leerUsuarios();
      setUsuarios(usuariosData);
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  };

 

  const handleBuscarUsuario = async () => {
    try {
      const usuario = leerUsuarioPorId(parseInt(idUsuarioBuscar));
      if (usuario) {
        setUsuarioEncontrado(usuario);
      } else {
        alert('No se encontró ningún usuario con ese ID.');
      }
    } catch (error) {
      console.error('Error al buscar usuario por ID:', error);
    }
  };

  // Función para ocultar la contraseña mostrando asteriscos
  const hidePassword = (password) => {
    return '*'.repeat(password.length);
  };

  return (
    <div className="readUser-container"> {/* Aplica la clase del contenedor */}
      <h2 className="readUser-title">Leer Usuarios</h2> {/* Aplica la clase del título */}
      <div className="readUser-search"> {/* Aplica la clase del buscador */}
        <label>
          Buscar usuario por ID:
          <input type="text" value={idUsuarioBuscar} onChange={(e) => setIdUsuarioBuscar(e.target.value)} />
        </label>
        <button onClick={handleBuscarUsuario}>Buscar</button>
        <div className="readUser-back-button"> {/* Aplica la clase del botón de regresar */}
        <Link to="/users">
          <button>Regresar</button>
        </Link>
      </div>
      </div>
      <div className="readUser-details">
        {usuarioEncontrado && (
          <div>
            <h3>Detalles del Usuario</h3>
            <p><strong>ID:</strong> {usuarioEncontrado.idUsuario}</p>
            <p><strong>Nombre:</strong> {usuarioEncontrado.nombre}</p>
            <p><strong>Apellido Paterno:</strong> {usuarioEncontrado.apPat}</p>
            <p><strong>Apellido Materno:</strong> {usuarioEncontrado.apMat}</p>
            <p><strong>Password:</strong> {hidePassword(usuarioEncontrado.password)}</p>
            <p><strong>Email:</strong> {usuarioEncontrado.email}</p>
            <p><strong>Super Usuario:</strong> {usuarioEncontrado.superUser ? 'Sí' : 'No'}</p>
          </div>
        )}
      </div>
      <table className="readUser-table"> {/* Aplica la clase de la tabla */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Password</th>
            <th>Email</th>
            <th>Super Usuario</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.idUsuario}>
              <td>{usuario.idUsuario}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apPat}</td>
              <td>{usuario.apMat}</td>
              <td>{hidePassword(usuario.password)}</td>
              <td>{usuario.email}</td>
              <td>{usuario.superUser}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
}

export default ReadUsers;
