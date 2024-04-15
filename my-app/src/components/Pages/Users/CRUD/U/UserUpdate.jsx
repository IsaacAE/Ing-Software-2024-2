import React, { useState } from 'react';
import { leerUsuarioPorId, actualizarUsuario } from '../../../../../DataBase/DataOperations.js';
import { Link } from 'react-router-dom';
import './UserUpdate.css'; // Importa el archivo CSS con los estilos

function UpdateUser() {
  const [idUsuario, setIdUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [apPat, setApPat] = useState('');
  const [apMat, setApMat] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [superUser, setSuperUser] = useState(false);
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = await leerUsuarioPorId(parseInt(idUsuario));
      if (usuario) {
        const result = await actualizarUsuario(usuario.idUsuario, nombre, apPat, apMat, password, email, null, superUser ? 1 : 0);
        if (result === 0) {
          alert('Usuario actualizado correctamente.');
          // Limpiar los campos después de una actualización exitosa
          setIdUsuario('');
          setNombre('');
          setApPat('');
          setApMat('');
          setPassword('');
          setEmail('');
          setSuperUser(false);
        } else {
          alert('Hubo un error al actualizar el usuario.');
        }
      } else {
        alert('No se encontró ningún usuario con ese ID.');
      }
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      alert('Hubo un error al actualizar el usuario.');
    }
  };

  return (
    <div className="updateUser-container">
      <h2 className="updateUser-title">Actualizar Usuario</h2>
      
      <form onSubmit={handleSubmit} className="updateUser-form">
        <div className="updateUser-input-container">
          <div>
          <label>
            ID Usuario:
            <input type="text" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} required className="updateUser-input" />
          </label>
          </div>
          <div>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="updateUser-input" />
          </label>
          </div>
          <div>
          <label>
            Apellido Paterno:
            <input type="text" value={apPat} onChange={(e) => setApPat(e.target.value)} className="updateUser-input" />
          </label>
          </div>
          <div>
          <label>
            Apellido Materno:
            <input type="text" value={apMat} onChange={(e) => setApMat(e.target.value)} className="updateUser-input" />
          </label>
          </div>
          <div>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="updateUser-input" />
          </label>
          </div>
          <div>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="updateUser-input" />
          </label>
          </div>
          <div>
          <label>
            Super Usuario:
            <select value={superUser} onChange={(e) => setSuperUser(e.target.value === 'true')} className="updateUser-input">
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </label>
          </div>
        </div>
        <button type="submit" className="updateUser-submit">Actualizar Usuario</button>
        <Link to="/users">
          <button className="createUser-submit">Regresar</button> {/* Aplica la clase al botón */}
        </Link>
      
      </form>
    </div>
  );
}

export default UpdateUser;
