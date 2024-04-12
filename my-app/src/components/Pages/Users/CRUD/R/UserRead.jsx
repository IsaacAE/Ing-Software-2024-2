import React, { useState, useEffect } from 'react';
import { leerUsuarios, leerUsuarioPorId } from '../../../../../DataBase/DataOperations.js';

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

  const searchUser = (idUsuario) => {
    return usuarios.find(usuario => usuario.idUsuario === idUsuario);
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

  return (
    <div>
      <h2>Usuarios</h2>
      <div>
        <label>
          Buscar usuario por ID:
          <input type="text" value={idUsuarioBuscar} onChange={(e) => setIdUsuarioBuscar(e.target.value)} />
        </label>
        <button onClick={handleBuscarUsuario}>Buscar</button>
      </div>
      <div className="usuario-detalle">
        {usuarioEncontrado && (
          <div>
            <h3>Detalles del Usuario</h3>
            <p><strong>ID:</strong> {usuarioEncontrado.idUsuario}</p>
            <p><strong>Nombre:</strong> {usuarioEncontrado.nombre}</p>
            <p><strong>Apellido Paterno:</strong> {usuarioEncontrado.apPat}</p>
            <p><strong>Apellido Materno:</strong> {usuarioEncontrado.apMat}</p>
            <p><strong>Email:</strong> {usuarioEncontrado.email}</p>
          </div>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.idUsuario}>
              <td>{usuario.idUsuario}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apPat}</td>
              <td>{usuario.apMat}</td>
              <td>{usuario.email}</td>
              <td>
                <button onClick={() => setUsuarioEncontrado(usuario)}>Ver detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReadUsers;
