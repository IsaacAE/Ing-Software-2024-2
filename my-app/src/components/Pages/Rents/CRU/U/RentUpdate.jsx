import React, { useState } from 'react';
import { leerRentaPorId, actualizarRenta } from '../../../../../DataBase/DataOperations';

function RentUpdate() {
    const [searchId, setSearchId] = useState('');
    const [estatus, setEstatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const actualizarEstatusRenta = async () => {
        try {
            const renta = await leerRentaPorId(parseInt(searchId));
            if (renta) {
                const resultado = await actualizarRenta(renta.idRentar, estatus);
                if (resultado === 0) {
                    alert('Estatus de renta actualizado correctamente.');
                } else {
                    alert('Error al actualizar el estatus de la renta.');
                }
            } else {
                alert('No se encontró ninguna renta con ese ID.');
            }
        } catch (error) {
            console.error('Error al actualizar estatus de renta:', error);
            alert('Hubo un error al actualizar el estatus de la renta.');
        }
    };

    return (
        <div>
            <h2>Actualizar Estatus de Renta</h2>
            <div>
                <label>
                    ID de Renta:
                    <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                </label>
                <label>
                    Nuevo Estatus:
                    <select value={estatus} onChange={(e) => setEstatus(e.target.value)}>
                        <option value="">Seleccionar Estatus</option>
                        <option value="0">En curso</option>
                        <option value="1">Devuelta</option>
                    </select>
                </label>
                <button onClick={actualizarEstatusRenta}>Actualizar Estatus</button>
            </div>
        </div>
    );
}

export default RentUpdate;
