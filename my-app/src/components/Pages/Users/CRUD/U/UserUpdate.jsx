import React, { useState } from 'react';
import { leerUsuarioPorId, actualizarUsuario } from '../../../../../DataBase/DataOperations.js';

function UpdateUser() {
  const [idUsuario, setIdUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [apPat, setApPat] = useState('');
  const [apMat, setApMat] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [superUser, setSuperUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = await leerUsuarioPorId(parseInt(idUsuario));
      if (usuario) {
        const result = await actualizarUsuario(usuario.idUsuario, nombre, apPat, apMat, password, email, null, superUser ? 1 : 0);
        if (result === 0) {
          setSuccessMessage('Usuario actualizado correctamente.');
          // Limpiar los campos después de una actualización exitosa
          setIdUsuario('');
          setNombre('');
          setApPat('');
          setApMat('');
          setPassword('');
          setEmail('');
          setSuperUser(false);
        } else {
          setErrorMessage('Hubo un error al actualizar el usuario.');
        }
      } else {
        setErrorMessage('No se encontró ningún usuario con ese ID.');
      }
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      setErrorMessage('Hubo un error al actualizar el usuario.');
    }
  };

  return (
    <div>
      <h2>Actualizar Usuario</h2>
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          ID Usuario:
          <input type="text" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} required />
        </label>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Apellido Paterno:
          <input type="text" value={apPat} onChange={(e) => setApPat(e.target.value)} />
        </label>
        <label>
          Apellido Materno:
          <input type="text" value={apMat} onChange={(e) => setApMat(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Super Usuario:
          <select value={superUser} onChange={(e) => setSuperUser(e.target.value === 'true')}>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </label>
        <button type="submit">Actualizar Usuario</button>
      </form>
    </div>
  );
}

export default UpdateUser;
