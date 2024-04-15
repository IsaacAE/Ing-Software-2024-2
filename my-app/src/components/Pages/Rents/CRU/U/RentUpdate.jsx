import React, { useState } from 'react';
import { actualizarRenta } from '../../../../../DataBase/DataOperations';
import { Link } from 'react-router-dom';
import './RentUpdate.css';

function UpdateRent() {
    const [idRentar, setIdRentar] = useState('');
    const [estatus, setEstatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resultado = await actualizarRenta(parseInt(idRentar), parseInt(estatus));
            if (resultado === 1) {
                alert('Renta actualizada correctamente.');
            } else if (resultado === 0) {
                setEstatus('');
                setIdRentar('');
                alert('Renta actualizada correctamente.');
            } else {
                alert('Hubo un error al actualizar la renta.');
            }
        } catch (error) {
            console.error('Error al actualizar renta:', error);
            alert('Hubo un error al actualizar la renta.');
        }
    };

    return (
        <div className="updateRent-container">
            <h2 className="updateRent-title">Actualizar Renta</h2>
            <form className="updateRent-form" onSubmit={handleSubmit}>
                <div className="updateRent-input-container">
                    <label>
                        ID de Renta:
                        <input type="text" value={idRentar} onChange={(e) => setIdRentar(e.target.value)} required />
                    </label>
                
                
                    <label>
                        Estatus:
                        <select className= 'updateRent-checkbox' value={estatus} onChange={(e) => setEstatus(e.target.value)} required>
                            <option value="">Seleccionar</option>
                            <option value="0">No</option>
                            <option value="1">Sí</option>
                        </select>
                    </label>
                </div>
                <button className="updateRent-submit" type="submit">Actualizar Renta</button>
            </form>
            
                <Link to="/rents">
                    <button className="updateRent-submit">Regresar</button>
                </Link>
          
        </div>
    );
}

export default UpdateRent;
