import React, { useState } from 'react';
import { crearPelicula } from '../../../../../DataBase/DataOperations.js'; // Importa la función para crear películas
import { Link } from 'react-router-dom';
import './MovieCreate.css'; // Importa los estilos CSS

function CreateMovie() {
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [duracion, setDuracion] = useState('');
  const [inventario, setInventario] = useState(5); // Valor predeterminado para el inventario

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar que duración e inventario sean números positivos
    if (duracion < 1 || inventario < 0) {
      alert('La duración y el inventario deben ser números positivos.');
      return;
    }

    // Llama a la función para crear la película
    const resultado = await crearPelicula(nombre, genero, duracion, inventario);

    if (resultado === 1) {
      // Si la creación fue exitosa, muestra un mensaje de éxito
      alert('Película creada exitosamente.');
      // Limpia los campos
      setNombre('');
      setGenero('');
      setDuracion('');
      setInventario(5);
    } else {
      // Si hubo un error, muestra un mensaje de error
      alert('Error al crear la película. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="createMovie-container">
      <h2 className="createMovie-title">Crear Película</h2>
      <form onSubmit={handleSubmit} className="createMovie-form">
        <div className="createMovie-input-container">
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="createMovie-input" />
        </div>
        <div>
          <label htmlFor="genero">Género:</label>
          <input type="text" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} className="createMovie-input" />
        </div>
        <div>
          <label htmlFor="duracion">Duración (minutos):</label>
          <input type="number" id="duracion" value={duracion} onChange={(e) => setDuracion(Math.max(0, e.target.value))} className="createMovie-input" />
        </div>
        <div>
          <label htmlFor="inventario">Inventario:</label>
          <input type="number" id="inventario" value={inventario} onChange={(e) => setInventario(Math.max(0, e.target.value))} className="createMovie-input" />
        </div>
        </div>
        <button type="submit" className="createMovie-submit">Crear Película</button>
        <Link to="/movies" className="createMovie-submit">Regresar</Link>
        
      </form>
    </div>
  );
}

export default CreateMovie;
