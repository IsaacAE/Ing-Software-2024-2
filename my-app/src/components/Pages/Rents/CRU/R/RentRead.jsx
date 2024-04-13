import React, { useState, useEffect } from 'react';
import { leerRentaPorId, leerRentas } from '../../../../../DataBase/DataOperations';

function ReadRents() {
    const [rentas, setRentas] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [rentaEncontrada, setRentaEncontrada] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        cargarRentas();
    }, []);

    const cargarRentas = async () => {
        try {
            const rentasData = await leerRentas();
            setRentas(rentasData);
        } catch (error) {
            console.error('Error al cargar rentas:', error);
            setErrorMessage('Hubo un error al cargar las rentas.');
        }
    };

    const buscarRentaPorId = async () => {
        try {
            const renta = await leerRentaPorId(parseInt(searchId));
            if (renta) {
                setRentaEncontrada(renta);
            } else {
                setErrorMessage('No se encontró ninguna renta con ese ID.');
            }
        } catch (error) {
            console.error('Error al buscar renta por ID:', error);
            setErrorMessage('Hubo un error al buscar la renta.');
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    return (
        <div>
            <h2>Ver Rentas</h2>
            <div>
                <label>
                    Buscar renta por ID:
                    <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                </label>
                <button onClick={buscarRentaPorId}>Buscar</button>
            </div>
            {errorMessage && <div>{errorMessage}</div>}
            {rentaEncontrada && (
                <div>
                    <h3>Detalles de la Renta</h3>
                    <p><strong>ID de Renta:</strong> {rentaEncontrada.idRentar}</p>
                    <p><strong>ID de Usuario:</strong> {rentaEncontrada.idUsuario}</p>
                    <p><strong>ID de Película:</strong> {rentaEncontrada.idPelicula}</p>
                    <p><strong>Fecha de Renta:</strong> {formatDate(rentaEncontrada.fecha_renta)}</p>
                    <p><strong>Días de Renta:</strong> {rentaEncontrada.dias_de_renta}</p>
                    <p><strong>Estatus:</strong> {rentaEncontrada.estatus}</p>
                </div>
            )}
            <table>
                <thead>
                    <tr>
                        <th>ID Renta</th>
                        <th>ID Usuario</th>
                        <th>ID Película</th>
                        <th>Fecha de Renta</th>
                        <th>Días de Renta</th>
                        <th>Estatus</th>
                    </tr>
                </thead>
                <tbody>
                    {rentas.map(renta => (
                        <tr key={renta.idRentar}>
                            <td>{renta.idRentar}</td>
                            <td>{renta.idUsuario}</td>
                            <td>{renta.idPelicula}</td>
                            <td>{formatDate(renta.fecha_renta)}</td>
                            <td>{renta.dias_de_renta}</td>
                            <td>{renta.estatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReadRents;
