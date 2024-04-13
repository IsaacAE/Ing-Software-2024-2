import React, { useState } from 'react';
import { crearRenta } from '../../../../../DataBase/DataOperations';

function RentCreate() {
    const [idUsuario, setIdUsuario] = useState('');
    const [idPelicula, setIdPelicula] = useState('');
    const [fechaRenta, setFechaRenta] = useState('');
    const [diasRenta, setDiasRenta] = useState(5);
    const [estatus, setEstatus] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resultado = await crearRenta(parseInt(idUsuario), parseInt(idPelicula), new Date(fechaRenta), diasRenta, estatus);
            if (resultado === 1) {
                setSuccessMessage('Renta creada correctamente.');
                setIdUsuario('');
                setIdPelicula('');
                setFechaRenta('');
                setDiasRenta(5);
                setEstatus(0);
            } else {
                setErrorMessage('Hubo un error al crear la renta.');
            }
        } catch (error) {
            console.error('Error al crear renta:', error);
            setErrorMessage('Hubo un error al crear la renta.');
        }
    };

    return (
        <div>
            <h2>Crear Renta</h2>
            {errorMessage && <div>{errorMessage}</div>}
            {successMessage && <div>{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    ID Usuario:
                    <input type="text" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} required />
                </label>
                <label>
                    ID Película:
                    <input type="text" value={idPelicula} onChange={(e) => setIdPelicula(e.target.value)} required />
                </label>
                <label>
                    Fecha de Renta:
                    <input type="date" value={fechaRenta} onChange={(e) => setFechaRenta(e.target.value)} required />
                </label>
                <label>
                    Días de Renta:
                    <input type="number" value={diasRenta} onChange={(e) => setDiasRenta(e.target.value)} min="1" />
                </label>
                <button type="submit">Crear Renta</button>
            </form>
        </div>
    );
}

export default RentCreate;
