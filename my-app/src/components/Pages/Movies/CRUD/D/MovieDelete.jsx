import React, { useState } from 'react';
import { eliminarPelicula, leerPeliculaPorId } from '../../../../../DataBase/DataOperations';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import './MovieDelete.css'

function DeleteMovie() {
    const [idPelicula, setIdPelicula] = useState('');
    const [alerta, setAlerta] = useState('');

    const handleEliminarPelicula = async () => {
        if (!idPelicula) {
            setAlerta('Si no ingresas un ID, se eliminarán todas las películas.');
            eliminarPelicula(null); // Pasar null a la función eliminarPelicula
            return;
        }

        const pelicula = await leerPeliculaPorId(parseInt(idPelicula));
        if (!pelicula) {
            alert('No se encontró ninguna película con ese ID.');
            return;
        }

        const resultado = eliminarPelicula(pelicula.idPelicula);
        if (resultado === 0) {
            alert('Película eliminada correctamente.');
        } else {
            alert('Error al eliminar película.');
        }
    };

    return (
        <div className="deleteMovie-container">
            <h2 className="deleteMovie-title">Eliminar Película</h2>
            <div>
                <label>
                    Ingresar ID de la película a eliminar:
                    <input type="text" value={idPelicula} onChange={(e) => setIdPelicula(e.target.value)} className="deleteMovie-input" />
                </label>
                <button onClick={handleEliminarPelicula} className="deleteMovie-button">Eliminar</button>
            </div>
            {alerta && <div>{alerta}</div>}
            {!alerta && <div>Si no ingresas un ID, se eliminarán todas las películas.</div>}
            {/* Botón Regresar con Link de react-router-dom */}
            <div className="deleteMovie-back-button">
                <Link to="/movies">
                    <button className="deleteMovie-button">Regresar</button>
                </Link>
            </div>
        </div>
    );
}

export default DeleteMovie;
