import React, { useState } from 'react';
import { eliminarPelicula, leerPeliculaPorId } from '../../../../../DataBase/DataOperations';

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
            setAlerta('No se encontró ninguna película con ese ID.');
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
        <div>
            <h2>Eliminar Película</h2>
            <div>
                <label>
                    Ingresar ID de la película a eliminar:
                    <input type="text" value={idPelicula} onChange={(e) => setIdPelicula(e.target.value)} />
                </label>
                <button onClick={handleEliminarPelicula}>Eliminar</button>
            </div>
            {alerta && <div>{alerta}</div>}
            {!alerta && <div>Si no ingresas un ID, se eliminarán todas las películas.</div>}
        </div>
    );
}

export default DeleteMovie;
