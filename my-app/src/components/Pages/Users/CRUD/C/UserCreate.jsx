import React, { useState } from 'react';

import { crearUsuario } from '../../../../../DataBase/DataOperations.js'; // Importa la función para crear usuarios

function CreateUser() {
 

  const [nombre, setNombre] = useState('');
  const [apPat, setApPat] = useState('');
  const [apMat, setApMat] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [superUser, setSuperUser] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Llama a la función para crear el usuario
    const resultado = await crearUsuario(nombre, apPat, password, apMat, email, profilePicture, superUser);

    if (resultado === 0) {
      // Si la creación fue exitosa, redirige a la página de usuarios
      
    } else {
      // Si hubo un error, maneja el error según sea necesario
      alert('Error al crear el usuario. Inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="apPat">Apellido Paterno:</label>
          <input type="text" id="apPat" value={apPat} onChange={(e) => setApPat(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="apMat">Apellido Materno:</label>
          <input type="text" id="apMat" value={apMat} onChange={(e) => setApMat(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="profilePicture">URL de la imagen de perfil:</label>
          <input type="text" id="profilePicture" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />
        </div>
        <div>
          <label>
            <input type="checkbox" checked={superUser} onChange={(e) => setSuperUser(e.target.checked)} />
            Super Usuario
          </label>
        </div>
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
}

export default CreateUser;
