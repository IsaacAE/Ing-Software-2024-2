import React, { useState } from 'react';
import { leerPeliculaPorId, actualizarPelicula } from '../../../../../DataBase/DataOperations.js';

function UpdateMovie() {
  const [idPelicula, setIdPelicula] = useState('');
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [duracion, setDuracion] = useState('');
  const [inventario, setInventario] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const pelicula = await leerPeliculaPorId(parseInt(idPelicula));
      if (pelicula) {
        if (parseInt(inventario) < 0 || parseInt(duracion) < 1) {
          setErrorMessage('El inventario no puede ser menor a 0 y la duración debe ser mayor a 0.');
          return;
        }
        const result = await actualizarPelicula(pelicula.idPelicula, nombre || null, genero || null, duracion || null, inventario || null);
        if (result === 0) {
          setSuccessMessage('Película actualizada correctamente.');
          // Limpiar los campos después de una actualización exitosa
          setIdPelicula('');
          setNombre('');
          setGenero('');
          setDuracion('');
          setInventario('');
        } else {
          setErrorMessage('Hubo un error al actualizar la película.');
        }
      } else {
        setErrorMessage('No se encontró ninguna película con ese ID.');
      }
    } catch (error) {
      console.error('Error al actualizar película:', error);
      setErrorMessage('Hubo un error al actualizar la película.');
    }
  };

  return (
    <div>
      <h2>Actualizar Película</h2>
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          ID Película:
          <input type="text" value={idPelicula} onChange={(e) => setIdPelicula(e.target.value)} required />
        </label>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Género:
          <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
        </label>
        <label>
          Duración:
          <input type="number" value={duracion} onChange={(e) => setDuracion(e.target.value)} />
        </label>
        <label>
          Inventario:
          <input type="number" value={inventario} onChange={(e) => setInventario(e.target.value)} />
        </label>
        <button type="submit">Actualizar Película</button>
      </form>
    </div>
  );
}

export default UpdateMovie;
