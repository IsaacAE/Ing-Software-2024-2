import React, { useState, useEffect } from 'react';
import { leerPeliculas, leerPeliculaPorId } from '../../../../../DataBase/DataOperations.js';

function ReadMovies() {
  const [peliculas, setPeliculas] = useState([]);
  const [idPeliculaBuscar, setIdPeliculaBuscar] = useState('');
  const [peliculaEncontrada, setPeliculaEncontrada] = useState(null);

  useEffect(() => {
    cargarPeliculas();
  }, []);

  const cargarPeliculas = async () => {
    try {
      const peliculasData = await leerPeliculas();
      setPeliculas(peliculasData);
    } catch (error) {
      console.error('Error al cargar películas:', error);
    }
  };

  const searchMovie = (idPelicula) => {
    return peliculas.find(pelicula => pelicula.idPelicula === idPelicula);
  };

  const handleBuscarPelicula = async () => {
    try {
      const pelicula = leerPeliculaPorId(parseInt(idPeliculaBuscar));
      if (pelicula) {
        setPeliculaEncontrada(pelicula);
      } else {
        alert('No se encontró ninguna película con ese ID.');
      }
    } catch (error) {
      console.error('Error al buscar película por ID:', error);
    }
  };

  return (
    <div>
      <h2>Películas</h2>
      <div>
        <label>
          Buscar película por ID:
          <input type="text" value={idPeliculaBuscar} onChange={(e) => setIdPeliculaBuscar(e.target.value)} />
        </label>
        <button onClick={handleBuscarPelicula}>Buscar</button>
      </div>
      <div className="pelicula-detalle">
        {peliculaEncontrada && (
          <div>
            <h3>Detalles de la Película</h3>
            <p><strong>ID:</strong> {peliculaEncontrada.idPelicula}</p>
            <p><strong>Nombre:</strong> {peliculaEncontrada.nombre}</p>
            <p><strong>Género:</strong> {peliculaEncontrada.genero}</p>
            <p><strong>Duración:</strong> {peliculaEncontrada.duracion} minutos</p>
            <p><strong>Inventario:</strong> {peliculaEncontrada.inventario}</p>
          </div>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Género</th>
            <th>Duración</th>
            <th>Inventario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map(pelicula => (
            <tr key={pelicula.idPelicula}>
              <td>{pelicula.idPelicula}</td>
              <td>{pelicula.nombre}</td>
              <td>{pelicula.genero}</td>
              <td>{pelicula.duracion} minutos</td>
              <td>{pelicula.inventario}</td>
              <td>
                <button onClick={() => setPeliculaEncontrada(pelicula)}>Ver detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReadMovies;
