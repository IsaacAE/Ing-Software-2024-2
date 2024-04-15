import React, { useState } from 'react';
import { crearUsuario } from '../../../../../DataBase/DataOperations.js'; // Importa la función para crear usuarios
import { Link } from 'react-router-dom';
import './UserCreate.css'; // Importa el archivo CSS con los estilos

function CreateUser() {
  const [nombre, setNombre] = useState('');
  const [apPat, setApPat] = useState('');
  const [apMat, setApMat] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [superUser, setSuperUser] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ajusta el valor de superUser según el estado del checkbox
    const superUserValue = superUser ? 1 : 0;

    // Llama a la función para crear el usuario
    const resultado = await crearUsuario(nombre, apPat, password, apMat, email, null, superUserValue);

    if (resultado === 1) {
      // Si la creación fue exitosa, limpia todos los campos y redirige a la página de usuarios
      setNombre('');
      setApPat('');
      setApMat('');
      setPassword('');
      setEmail('');
      setSuperUser(false);
      alert('Usuario creado correctamente.');
    } else {
      // Si hubo un error, maneja el error según sea necesario
      alert('Error al crear el usuario. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="createUser-container"> {/* Aplica la clase al contenedor principal */}
      <h2 className="createUser-title">Crear Usuario</h2> {/* Aplica la clase al título */}
      <form onSubmit={handleSubmit} className="createUser-form"> {/* Aplica la clase al formulario */}
        <div className="createUser-input-container"> {/* Envuelve los inputs en un div con borde */}
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="createUser-input" />
          </div>
          <div>
            <label htmlFor="apPat">Apellido Paterno:</label>
            <input type="text" id="apPat" value={apPat} onChange={(e) => setApPat(e.target.value)} required className="createUser-input" />
          </div>
          <div>
            <label htmlFor="apMat">Apellido Materno:</label>
            <input type="text" id="apMat" value={apMat} onChange={(e) => setApMat(e.target.value)} className="createUser-input" />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="createUser-input" />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="createUser-input" />
          </div>
          <div>
            <label>
              <input type="checkbox" checked={superUser} onChange={(e) => setSuperUser(e.target.checked)} />
              Super Usuario
            </label>
          </div>
        </div>
        <button type="submit" className="createUser-submit">Crear Usuario</button> {/* Aplica la clase al botón */}
        <Link to="/users">
          <button className="createUser-submit">Regresar</button> {/* Aplica la clase al botón */}
        </Link>
      </form>
    </div>
  );
}

export default CreateUser;
