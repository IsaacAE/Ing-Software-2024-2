import { usuarios } from './Data';

// Función para crear un nuevo usuario
// Función para crear un nuevo usuario
function crearUsuario(nombre, apPat, password, apMat = null, email = null, profilePicture = null, superUser = null) {
    // Verifica si ya existe un usuario con el mismo correo electrónico
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        alert('Ya existe un usuario con el mismo correo electrónico.');
        return 0; // Devuelve 0 si ya existe un usuario con el mismo correo electrónico
    }

    // Si no hay usuario existente con el mismo correo electrónico, agrega el nuevo usuario
    usuarios.push({
        idUsuario: usuarios.length + 1,
        nombre: nombre,
        apPat: apPat,
        apMat: apMat,
        password: password,
        email: email,
        profilePicture: profilePicture, // Considera pasar el valor recibido en lugar de null
        superUser: superUser
    });
    
    alert('Usuario registrado exitosamente.');
    return 1; // Devuelve 1 si se ha registrado el usuario exitosamente
}

// Función para obtener todos los usuarios
function leerUsuarios() {
    return usuarios;
}

// Función para obtener un usuario por su ID
// Función para obtener un usuario por su ID
function leerUsuarioPorId(idUsuario) {
    return usuarios.find(usuario => usuario.idUsuario === idUsuario);
}

// Función para actualizar un usuario por su ID
function actualizarUsuario(id, nombre=null, apPat=null, apMat=null, password=null, email=null, profilePicture=null, superUser=null) {
    const usuario = leerUsuarioPorId(id);
    if (!usuario) return -1; // Usuario no encontrado
    if (nombre) usuario.nombre = nombre;
    if (apPat) usuario.apPat = apPat;
    if (apMat) usuario.apMat = apMat;
    if (password) usuario.password = password;
    if (email) usuario.email = email;
    if (profilePicture) usuario.profilePicture = profilePicture;
    if (superUser !== null) usuario.superUser = superUser;
    return 0; // Éxito
}

// Función para eliminar un usuario por su ID
function eliminarUsuario(idUsuario=null) {
    if (!idUsuario) {
        usuarios.splice(0, usuarios.length); // Vaciar la lista de usuarios
        return 0; // Éxito
    } else {
        const index = usuarios.findIndex(usuario => usuario.id === idUsuario);
        if (index !== -1) {
            usuarios.splice(index, 1); // Eliminar usuario por su índice
            return 0; // Éxito
        } else {
            return -1; // Usuario no encontrado
        }
    }
}



export { crearUsuario, leerUsuarios, leerUsuarioPorId, actualizarUsuario, eliminarUsuario };

