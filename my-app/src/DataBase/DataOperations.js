import { usuarios, peliculas, rentas  } from './Data';

// Función para crear un nuevo usuario
// Función para crear un nuevo usuario
function crearUsuario(nombre, apPat, password, apMat = null, email = null, profilePicture = null, superUser = null) {
    // Verifica si ya existe un usuario con el mismo correo electrónico
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        alert('Ya existe un usuario con el mismo correo electrónico.');
        return 0; // Devuelve 0 si ya existe un usuario con el mismo correo electrónico
    }

    // Obtener el último ID de usuario en la lista
    const ultimoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].idUsuario : 0;

    // Incrementar el último ID para obtener un ID único para el nuevo usuario
    const nuevoIdUsuario = ultimoId + 1;

    // Agregar el nuevo usuario con el ID único generado
    usuarios.push({
        idUsuario: nuevoIdUsuario,
        nombre: nombre,
        apPat: apPat,
        apMat: apMat,
        password: password,
        email: email,
        profilePicture: profilePicture,
        superUser: superUser
    });

    return 1; // Devuelve 1 si se ha registrado el usuario exitosamente
}


// Función para obtener todos los usuarios
function leerUsuarios() {
    return usuarios;
}


// Función para obtener un usuario por su ID
function leerUsuarioPorId(idUsuario) {
    return usuarios.find(usuario => usuario.idUsuario === idUsuario);
}

// Función para actualizar un usuario por su ID
function actualizarUsuario(id, nombre=null, apPat=null, apMat=null, password=null, email=null, profilePicture=null, superUser=null) {
    const usuario = leerUsuarioPorId(id);
    if (!usuario) return -1; // Usuario no encontrado
    
    // Verificar si otro usuario ya tiene el correo electrónico
    if (email && email !== usuario.email) {
        const usuarioExistente = usuarios.find(u => u.email === email);
        if (usuarioExistente) return -1; // Otro usuario ya tiene el mismo correo electrónico
    }
    
    // Actualizar los atributos del usuario
    if (nombre) usuario.nombre = nombre;
    if (apPat) usuario.apPat = apPat;
    if (apMat) usuario.apMat = apMat;
    if (password) usuario.password = password;
    if (email) usuario.email = email;
    if (profilePicture) usuario.profilePicture = profilePicture;
    if (superUser !== null) usuario.superUser = superUser;
    
    return 0; // Éxito
}

// Función para eliminar un usuario por su ID y todas sus rentas
function eliminarUsuario(idUsuario = null) {
    if (!idUsuario) {
        // Eliminar todas las rentas
        rentas.splice(0, rentas.length);
        // Vaciar la lista de usuarios
        usuarios.splice(0, usuarios.length);
        return 0; // Éxito
    } else {
        const index = usuarios.findIndex(usuario => usuario.idUsuario === idUsuario);
        if (index !== -1) {
            // Eliminar las rentas del usuario por su ID
            eliminarRentasPorIdUsuario(idUsuario);
            // Eliminar usuario por su índice
            usuarios.splice(index, 1);
            return 0; // Éxito
        } else {
            return -1; // Usuario no encontrado
        }
    }
}


function crearPelicula(nombre, genero, duracion, inventario) {
    // Verificar el id de la última película en la lista
    const ultimoId = peliculas.length > 0 ? peliculas[peliculas.length - 1].idPelicula : 0;

    // Agregar la nueva película con el id incrementado
    peliculas.push({
        idPelicula: ultimoId + 1,
        nombre: nombre,
        genero: genero,
        duracion: duracion,
        inventario: inventario
    });

    return 1; // Devuelve 1 si se ha registrado el usuario exitosamente
}

function leerPeliculas() {
    return peliculas;
}


function leerPeliculaPorId(idPelicula) {
    return peliculas.find(pelicula => pelicula.idPelicula === idPelicula);
}


function actualizarPelicula(idPelicula, nombre = null, genero = null, duracion = null, inventario = null) {
    const pelicula = leerPeliculaPorId(idPelicula);
    if (!pelicula) return -1; // Película no encontrada
    if (nombre) pelicula.nombre = nombre;
    if (genero) pelicula.genero = genero;
    if (duracion) pelicula.duracion = duracion;
    if (inventario) pelicula.inventario = inventario;
    return 0; // Éxito
}



function eliminarPelicula(idPelicula = null) {
    if (!idPelicula) {
        // Eliminar todas las películas
        peliculas.splice(0, peliculas.length);
        
        // Eliminar todas las rentas
        rentas.splice(0, rentas.length);
        
        return 0; // Éxito
    } else {
        const index = peliculas.findIndex(pelicula => pelicula.idPelicula === idPelicula);
        if (index !== -1) {
            // Eliminar película por su índice
            peliculas.splice(index, 1);

            eliminarRentasPorIdPelicula(idPelicula);
            
            return 0; // Éxito
        } else {
            return -1; // Película no encontrada
        }
    }
}

function crearRenta(idUsuario, idPelicula, fecha_renta, dias_de_renta, estatus) {
    // Verificar si existe un usuario con el id proporcionado
    const usuarioExistente = leerUsuarioPorId(idUsuario);
    if (!usuarioExistente) {
        return -1; // Código de error para usuario no encontrado
    }

    // Verificar si existe una película con el id proporcionado
    const peliculaExistente = leerPeliculaPorId(idPelicula);
    if (!peliculaExistente) {
        return -2; // Código de error para película no encontrada
    }

    // Verificar el id de la última renta en la lista
    const ultimoId = rentas.length > 0 ? rentas[rentas.length - 1].idRentar : 0;

    // Agregar la nueva renta con el id incrementado
    rentas.push({
        idRentar: ultimoId + 1,
        idUsuario: idUsuario,
        idPelicula: idPelicula,
        fecha_renta: fecha_renta,
        dias_de_renta: dias_de_renta,
        estatus: estatus // 0 para renta activa, 1 para renta finalizada
    });

    // Retornar 1 si todo sale bien
    return 1;
}

function leerRentas() {
    return rentas;
}

function leerRentaPorId(idRentar) {
    return rentas.find(renta => renta.idRentar === idRentar);
}

function actualizarRenta(idRentar, estatus) {
    const renta = leerRentaPorId(idRentar);
    if (!renta) return -1; // Renta no encontrada
    renta.estatus = estatus;
    return 0; // Éxito
}

function eliminarRentasPorIdUsuario(idUsuario) {
    try {
        // Obtener las rentas asociadas al idUsuario
        const rentasUsuario = rentas.filter(renta => renta.idUsuario === idUsuario);
        
        // Eliminar cada renta
        rentasUsuario.forEach((renta) => {
             eliminarRenta(renta.idRentar);
        });

        return 0; // Éxito
    } catch (error) {
        console.error('Error al eliminar rentas por ID de usuario:', error);
        return -1; // Error
    }
}

function eliminarRentasPorIdPelicula(idPelicula) {
    try {
        // Obtener las rentas asociadas al idUsuario
        const rentasPelicula = rentas.filter(renta => renta.idPelicula === idPelicula);
        
        // Eliminar cada renta
        rentasPelicula.forEach((renta) => {
             eliminarRenta(renta.idRentar);
        });

        return 0; // Éxito
    } catch (error) {
        console.error('Error al eliminar rentas por ID de usuario:', error);
        return -1; // Error
    }
}



function eliminarRenta(idRentar) {
    try {

        const index = rentas.findIndex(renta=> renta.idRentar === idRentar);
        if (index !== -1) {
           
            // Eliminar usuario por su índice
            rentas.splice(index, 1);

        return 0; // Éxito
        }
    } catch (error) {
        console.error('Error al eliminar renta:', error);
        return -1; // Error
    }
}



export { crearUsuario, leerUsuarios, leerUsuarioPorId, actualizarUsuario, eliminarUsuario, 
    crearPelicula, leerPeliculas, leerPeliculaPorId, actualizarPelicula, eliminarPelicula,
    crearRenta, leerRentas, leerRentaPorId, actualizarRenta, eliminarRenta};

