export let peliculas = [
  {idPelicula: 1, nombre: 'Apocalipto', genero: 'Drama', duracion: 195, inventario: 6},
  {idPelicula: 2, nombre: 'Volvo Va', genero: 'Ciencia Ficción', duracion: 137, inventario: 3},
  {idPelicula: 3, nombre: 'Despiadado', genero: 'Acción', duracion: 140, inventario: 6},
  {idPelicula: 4, nombre: 'La Herencia', genero: 'Crimen', duracion: 175, inventario: 4},
  {idPelicula: 5, nombre: 'La Batalla por la Tierra Media', genero: 'Fantasía', duracion: 201, inventario: 9},
  {idPelicula: 6, nombre: 'Marchar', genero: 'Policial', duracion: 152, inventario: 2},
  {idPelicula: 7, nombre: 'Simba: El Regreso del Rey', genero: 'Animación', duracion: 118, inventario: 5},
  {idPelicula: 8, nombre: 'Aventuras en el Mundo de los Juguetes', genero: 'Animación', duracion: 81, inventario: 7},
  {idPelicula: 9, nombre: 'Destino Intercambiado', genero: 'Anime', duracion: 106, inventario: 10},
  {idPelicula: 10, nombre: 'Neo-Tokio: La Ciudad Olvidada', genero: 'Anime', duracion: 124, inventario: 12}
];

export let usuarios = [
  {idUsuario: 1, nombre: 'Juan', apPat: 'Pablo', apMat: 'Gomez', password: '1234', email: 'juanito@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 2, nombre: 'Mafer', apPat: 'Gomez', apMat: "Martínez", password: 'absdfjs', email: 'maria_95@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 3, nombre: 'Ezio', apPat: 'Saldivar', apMat: 'Hernández', password: 'LKNDW8', email: 'partilos@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 4, nombre: 'Ana', apPat: 'Pearl', apMat: 'García', password: 'ksdfj4', email: 'anastasio890@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 5, nombre: 'Jose', apPat: 'García', apMat: 'Pérez', password: 'lsljnd', email: 'luis85@hotmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 6, nombre: 'Carlos', apPat: 'Lopez', apMat: 'Manzanares', password: 'kjsd', email: 'comal34@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 7, nombre: 'Sofía', apPat: 'Romero', apMat: 'Cabrera', password: ',nn44dbfb', email: 'crepas34@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 8, nombre: 'Gojo', apPat: 'Altamirano', apMat: 'Flores', password: 'aknn600del', email: 'lovage@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 9, nombre: 'Fernanda', apPat: 'Alcántara', apMat: "López", password: 'ljdhi', email: 'lova88@gmail.com', profilePicture: null, superUser: 0},
  {idUsuario: 10, nombre: 'Jatziri', apPat: 'Blanco', apMat: 'Rodríguez', password: 'lkfjo', email: 'perka@yahoo.com', profilePicture: null, superUser:1}
];

export let rentas = [
  {idRentar: 1, idUsuario: 1, idPelicula: 1, fecha_renta: new Date(2026, 3, 1), dias_de_renta: 7, estatus: 0},
  {idRentar: 2, idUsuario: 2, idPelicula: 2, fecha_renta: new Date(2025, 3, 3), dias_de_renta: 5, estatus: 0},
  {idRentar: 3, idUsuario: 3, idPelicula: 3, fecha_renta: new Date(2024, 12, 5), dias_de_renta: 3, estatus: 0},
  {idRentar: 4, idUsuario: 4, idPelicula: 4, fecha_renta: new Date(2024, 12, 7), dias_de_renta: 10, estatus: 0},
  {idRentar: 5, idUsuario: 5, idPelicula: 5, fecha_renta: new Date(2022, 11, 9), dias_de_renta: 2, estatus: 0},
  {idRentar: 6, idUsuario: 6, idPelicula: 6, fecha_renta: new Date(2025, 8, 11), dias_de_renta: 6, estatus: 0},
  {idRentar: 7, idUsuario: 7, idPelicula: 7, fecha_renta: new Date(2025, 3, 13), dias_de_renta: 8, estatus: 0},
  {idRentar: 8, idUsuario: 8, idPelicula: 8, fecha_renta: new Date(2025, 7, 15), dias_de_renta: 4, estatus: 0},
  {idRentar: 9, idUsuario: 9, idPelicula: 9, fecha_renta: new Date(2024, 1, 17), dias_de_renta: 9, estatus: 0},
  {idRentar: 10, idUsuario: 10, idPelicula: 10, fecha_renta: new Date(2025, 3, 19), dias_de_renta: 1, estatus: 0}
];
