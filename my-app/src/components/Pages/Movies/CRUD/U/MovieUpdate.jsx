import React, { useState } from 'react';
import { leerPeliculaPorId, actualizarPelicula } from '../../../../../DataBase/DataOperations.js';
import { Link } from 'react-router-dom';
import './MovieUpdate.css'; // Reemplaza "tu_archivo_de_estilos.css" con el nombre de tu archivo de estilos

function UpdateMovie() {
  const [idPelicula, setIdPelicula] = useState('');
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [duracion, setDuracion] = useState('');
  const [inventario, setInventario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const pelicula = await leerPeliculaPorId(parseInt(idPelicula));
      if (pelicula) {
        if (parseInt(inventario) < 0 || parseInt(duracion) < 1) {
          alert('El inventario no puede ser menor a 0 y la duración debe ser mayor a 0.');
          return;
        }
        const result = await actualizarPelicula(pelicula.idPelicula, nombre || null, genero || null, duracion || null, inventario || null);
        if (result === 0) {
          alert('Película actualizada correctamente.');
          // Limpiar los campos después de una actualización exitosa
          setIdPelicula('');
          setNombre('');
          setGenero('');
          setDuracion('');
          setInventario('');
        } else {
          alert('Hubo un error al actualizar la película.');
        }
      } else {
        alert('No se encontró ninguna película con ese ID.');
      }
    } catch (error) {
      console.error('Error al actualizar película:', error);
      alert('Hubo un error al actualizar la película.');
    }
  };

  return (
    <div className="updateMovie-container">
      <h2 className="updateMovie-title">Actualizar Película</h2>
      <form onSubmit={handleSubmit} className="updateMovie-form">
        <div className=''></div>
        <label>
          ID Película:
          <input type="text" value={idPelicula} onChange={(e) => setIdPelicula(e.target.value)} required className="updateMovie-input" />
        </label>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="updateMovie-input" />
        </label>
        <label>
          Género:
          <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} className="updateMovie-input" />
        </label>
        <label>
          Duración:
          <input type="number" value={duracion} onChange={(e) => setDuracion(e.target.value)} className="updateMovie-input" />
        </label>
        <label>
          Inventario:
          <input type="number" value={inventario} onChange={(e) => setInventario(e.target.value)} className="updateMovie-input" />
        </label>
        <button type="submit" className="updateMovie-submit">Actualizar Película</button>
      </form>
      <div className="updateMovie-back-button">
        <Link to="/movies">
          <button className="updateMovie-submit">Regresar</button>
        </Link>
      </div>
    </div>
  );
}

export default UpdateMovie;
