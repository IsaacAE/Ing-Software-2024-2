export let peliculas = [
  {idPelicula: 1, nombre: 'El Renacimiento de Titanic', genero: 'Romance/Drama', duracion: 195, inventario: 8},
  {idPelicula: 2, nombre: 'Resurgimiento de Terminator', genero: 'Ciencia Ficción/Acción', duracion: 137, inventario: 3},
  {idPelicula: 3, nombre: 'Velocidad sin Límites', genero: 'Acción', duracion: 140, inventario: 6},
  {idPelicula: 4, nombre: 'La Herencia del Padrino', genero: 'Crimen/Drama', duracion: 175, inventario: 4},
  {idPelicula: 5, nombre: 'La Batalla por la Tierra Media', genero: 'Fantasía/Aventura', duracion: 201, inventario: 9},
  {idPelicula: 6, nombre: 'Magia y Misterio: Harry Potter', genero: 'Fantasía/Aventura', duracion: 152, inventario: 2},
  {idPelicula: 7, nombre: 'Simba: El Regreso del Rey', genero: 'Animación/Aventura', duracion: 118, inventario: 5},
  {idPelicula: 8, nombre: 'Aventuras en el Mundo de los Juguetes', genero: 'Animación/Comedia', duracion: 81, inventario: 7},
  {idPelicula: 9, nombre: 'Destino Intercambiado', genero: 'Anime/Romance', duracion: 106, inventario: 10},
  {idPelicula: 10, nombre: 'Neo-Tokio: La Ciudad Olvidada', genero: 'Anime/Ciencia Ficción', duracion: 124, inventario: 12}
];

export let usuarios = [
  {idUsuario: 1, nombre: 'Juanito', apPat: 'Perez', apMat: 'Gomez', password: '1234', email: 'juanito@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 2, nombre: 'María', apPat: 'Gomez', apMat: "Martínez", password: 'abjs', email: 'maria_95@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 3, nombre: 'Pedrito', apPat: 'López', apMat: 'Hernández', password: 'LKNDW8', email: 'pedro_22@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 4, nombre: 'Ana', apPat: 'Hernández', apMat: 'García', password: 'kdhkj4', email: 'ana_78@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 5, nombre: 'Luis', apPat: 'García', apMat: 'Pérez', password: 'lsljnd', email: 'luis85@hotmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 6, nombre: 'Carlos', apPat: 'Pérez', apMat: 'Manzanares', password: 'kjsd', email: 'cmanza@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 7, nombre: 'Sofía', apPat: 'Romero', apMat: 'Cabrera', password: ',nndbfb', email: 'sofi_2000@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 8, nombre: 'Gael', apPat: 'Altamirano', apMat: 'Flores', password: 'aknndel', email: 'gael_flores@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 9, nombre: 'Fernanda', apPat: 'Gómez', apMat: "López", password: 'ljdhi', email: 'fer88@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 10, nombre: 'Jin', apPat: 'Blanco', apMat: 'Rodríguez', password: 'lkfjo', email: 'jin88@yahoo.com', profilePicture: null, superUser:1}
];

export let rentas = [
  {idRentar: 1, idUsuario: 1, idPelicula: 1, fecha_renta: new Date(2022, 3, 1), dias_de_renta: 7, estatus: 0},
  {idRentar: 2, idUsuario: 2, idPelicula: 2, fecha_renta: new Date(2022, 3, 3), dias_de_renta: 5, estatus: 0},
  {idRentar: 3, idUsuario: 3, idPelicula: 3, fecha_renta: new Date(2022, 3, 5), dias_de_renta: 3, estatus: 0},
  {idRentar: 4, idUsuario: 4, idPelicula: 4, fecha_renta: new Date(2022, 3, 7), dias_de_renta: 10, estatus: 0},
  {idRentar: 5, idUsuario: 5, idPelicula: 5, fecha_renta: new Date(2022, 3, 9), dias_de_renta: 2, estatus: 0},
  {idRentar: 6, idUsuario: 6, idPelicula: 6, fecha_renta: new Date(2022, 3, 11), dias_de_renta: 6, estatus: 0},
  {idRentar: 7, idUsuario: 7, idPelicula: 7, fecha_renta: new Date(2022, 3, 13), dias_de_renta: 8, estatus: 0},
  {idRentar: 8, idUsuario: 8, idPelicula: 8, fecha_renta: new Date(2022, 3, 15), dias_de_renta: 4, estatus: 0},
  {idRentar: 9, idUsuario: 9, idPelicula: 9, fecha_renta: new Date(2022, 3, 17), dias_de_renta: 9, estatus: 0},
  {idRentar: 10, idUsuario: 10, idPelicula: 10, fecha_renta: new Date(2022, 3, 19), dias_de_renta: 1, estatus: 0}
];
