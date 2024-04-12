import React from 'react';
import { useParams } from 'react-router-dom';
import { leerUsuarioPorId, leerUsuarios } from '../../../../../DataBase/DataOperations.js';

function UserDetails() {
  const usuarios = leerUsuarios()
  const params = useParams();
  const userId = parseInt(params.idUsuario)
  const searchUser = (idUsuario) => {
    return usuarios.find(usuario => usuario.idUsuario === idUsuario);
  };
  const usuario = searchUser(userId);
  



  

  return (
    <div>
      <h2>Detalles del usuario</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>ID:</strong></td>
            <td>{usuario.idUsuario}</td>
          </tr>
          <tr>
            <td><strong>Nombre:</strong></td>
            <td>{usuario.nombre}</td>
          </tr>
          <tr>
            <td><strong>Apellido Paterno:</strong></td>
            <td>{usuario.apPat}</td>
          </tr>
          <tr>
            <td><strong>Apellido Materno:</strong></td>
            <td>{usuario.apMat}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{usuario.email}</td>
          </tr>
          {/* Agrega más detalles si es necesario */}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;
