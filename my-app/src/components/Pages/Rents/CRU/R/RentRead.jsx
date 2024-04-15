import React, { useState, useEffect } from 'react';
import { leerRentaPorId, leerRentas } from '../../../../../DataBase/DataOperations';
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom
import './RentRead.css'

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
                alert('No se encontró ninguna renta con ese ID.');
            }
        } catch (error) {
            console.error('Error al buscar renta por ID:', error);
            alert('Hubo un error al buscar la renta.');
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    return (
        <div className="readRent-container">
            <h2 className="readRent-title">Ver Rentas</h2>
            <div className="readRent-search">
                <label>
                    Buscar renta por ID:
                    <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} className="readRent-input" />
                </label>
                <button onClick={buscarRentaPorId} className="readRent-submit">Buscar</button>
            </div>
            <div className="readRent-back-button">
                <Link to="/rents">
                    <button className="readRent-submit">Regresar</button>
                </Link>
            </div>
            {errorMessage && <div>{errorMessage}</div>}
            {rentaEncontrada && (
                <div className="readRent-details">
                    <h3>Detalles de la Renta</h3>
                    <p><strong>ID de Renta:</strong> {rentaEncontrada.idRentar}</p>
                    <p><strong>ID de Usuario:</strong> {rentaEncontrada.idUsuario}</p>
                    <p><strong>ID de Película:</strong> {rentaEncontrada.idPelicula}</p>
                    <p><strong>Fecha de Renta:</strong> {formatDate(rentaEncontrada.fecha_renta)}</p>
                    <p><strong>Días de Renta:</strong> {rentaEncontrada.dias_de_renta}</p>
                    <p><strong>Estatus:</strong> {rentaEncontrada.estatus}</p>
                </div>
            )}
            <table className="readRent-table">
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
                        <tr key={renta.idRentar} style={{ color: new Date(renta.fecha_renta) < new Date() ? 'red' : 'initial' }}>
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
