import React, { useState } from 'react';
import { crearRenta } from '../../../../../DataBase/DataOperations';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import './RentCreate.css'
function RentCreate() {
    const [idUsuario, setIdUsuario] = useState('');
    const [idPelicula, setIdPelicula] = useState('');
    const [fechaRenta, setFechaRenta] = useState('');
    const [diasRenta, setDiasRenta] = useState(5);
    const [estatus, setEstatus] = useState(0);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resultado = await crearRenta(parseInt(idUsuario), parseInt(idPelicula), new Date(fechaRenta), diasRenta, estatus);
            if (resultado === 1) {
                alert('Renta creada correctamente.');
                setIdUsuario('');
                setIdPelicula('');
                setFechaRenta('');
                setDiasRenta(5);
                setEstatus(0);
            } else {
                alert('Hubo un error al crear la renta.');
            }
        } catch (error) {
            console.error('Error al crear renta:', error);
            alert('Hubo un error al crear la renta.');
        }
    };

    return (
        <div className="createRent-container"> {/* Aplicar el estilo createRent-container */}
            <h2 className="createRent-title">Crear Renta</h2> {/* Aplicar el estilo createRent-title */}
            
            <form onSubmit={handleSubmit}>
                <div className="createRent-input-container"> {/* Aplicar el estilo createRent-input-container */}
                    <label>
                        ID Usuario:
                        <input type="text" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} required className="createRent-input" /> {/* Aplicar el estilo createRent-input */}
                    </label>
                    <label>
                        ID Película:
                        <input type="text" value={idPelicula} onChange={(e) => setIdPelicula(e.target.value)} required className="createRent-input" /> {/* Aplicar el estilo createRent-input */}
                    </label>
                    <label>
                        Fecha de Renta:
                        <input type="date" value={fechaRenta} onChange={(e) => setFechaRenta(e.target.value)} required className="createRent-input" /> {/* Aplicar el estilo createRent-input */}
                    </label>
                    <label>
                        Días de Renta:
                        <input type="number" value={diasRenta} onChange={(e) => setDiasRenta(e.target.value)} min="1" className="createRent-input" /> {/* Aplicar el estilo createRent-input */}
                    </label>
                </div>
                <button type="submit" className="createRent-submit">Crear Renta</button> {/* Aplicar el estilo createRent-submit */}
            </form>
            <div className="createRent-back-button">
                <Link to="/rents">
                    <button className="createRent-submit">Regresar</button> {/* Utiliza el mismo estilo createRent-submit para el botón de regresar */}
                </Link>
            </div>
        </div>
    );
}

export default RentCreate;
