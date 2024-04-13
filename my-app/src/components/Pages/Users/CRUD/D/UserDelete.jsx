import React, { useState } from 'react';
import { eliminarUsuario, leerUsuarioPorId } from '../../../../../DataBase/DataOperations';

function DeleteUser() {
    const [idUsuario, setIdUsuario] = useState('');
    const [alerta, setAlerta] = useState('');

    const handleEliminarUsuario = async () => {
        if (!idUsuario) {
            setAlerta('Si no ingresas un ID, se eliminarán todos los usuarios.');
            eliminarUsuario(null); // Pasar null a la función eliminarUsuario
            return;
        }

        const usuario = await leerUsuarioPorId(parseInt(idUsuario));
        if (!usuario) {
            setAlerta('No se encontró ningún usuario con ese ID.');
            return;
        }

        const resultado = eliminarUsuario(usuario.idUsuario);
        if (resultado === 0) {
            alert('Usuario eliminado correctamente.');
        } else {
            alert('Error al eliminar usuario.');
        }
    };

    return (
        <div>
            <h2>Eliminar Usuario</h2>
            <div>
                <label>
                    Ingresar ID del usuario a eliminar:
                    <input type="text" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} />
                </label>
                <button onClick={handleEliminarUsuario}>Eliminar</button>
            </div>
            {alerta && <div>{alerta}</div>}
            {!alerta && <div>Si no ingresas un ID, se eliminarán todos los usuarios.</div>}
        </div>
    );
}

export default DeleteUser;
