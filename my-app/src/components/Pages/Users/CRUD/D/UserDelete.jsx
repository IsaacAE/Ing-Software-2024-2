import React, { useState } from 'react';
import { eliminarUsuario, leerUsuarioPorId } from '../../../../../DataBase/DataOperations';
import { Link } from 'react-router-dom';
import './UserDelete.css'; // Importa el archivo CSS con los estilos

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
            alert('No se encontró ningún usuario con ese ID.');
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
        <div className="deleteUser-container">
            <h2 className="deleteUser-title">Eliminar Usuario</h2>
            <div>
                <label>
                    Ingresar ID del usuario a eliminar:
                    <input type="text" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} className="deleteUser-input" />
                </label>
                <button onClick={handleEliminarUsuario} className="deleteUser-button">Eliminar</button>
            </div>
            {alerta && <div>{alerta}</div>}
            {!alerta && <div>Si no ingresas un ID, se eliminarán todos los usuarios.</div>}
            <div className="deleteUser-back-button">
                <Link to="/users">
                    <button className="deleteUser-button">Regresar</button>
                </Link>
            </div>
        </div>
        
    );
}

export default DeleteUser;
