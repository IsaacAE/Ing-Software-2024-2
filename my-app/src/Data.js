
  const peliculas = [
    {idPelicula: 1, nombre: 'Titanic', genero: 'Drama', duracion: 210, inventario: 10},
    {idPelicula: 2, nombre: 'Terminator', genero: 'Accion', duracion: 120, inventario: 5},
    {idPelicula: 3, nombre: 'Rapidos y Furiosos', genero: 'Accion', duracion: 180, inventario: 7},
    {idPelicula: 4, nombre: 'El Padrino', genero: 'Drama', duracion: 180, inventario: 3},
    {idPelicula: 5, nombre: 'El Señor de los Anillos', genero: 'Fantasia', duracion: 180, inventario: 2},
    {idPelicula: 6, nombre: 'Harry Potter', genero: 'Fantasia', duracion: 180, inventario: 1},
    {idPelicula: 7, nombre: 'El Rey Leon', genero: 'Animada', duracion: 180, inventario: 4},
    {idPelicula: 8, nombre: 'Toy Story', genero: 'Animada', duracion: 180, inventario: 6},
    {idPelicula: 9, nombre: 'Your name', genero: 'Anime', duracion: 180, inventario: 8},
    {idPelicula: 10, nombre: 'Akira', genero: 'Anime', duracion: 180, inventario: 9}
  ]

  const usuarios = [
    {idUsuario: 1, nombre: 'Juan', apPat: 'Perez', apMat: 'Gomez', password: '1234', email: 'juan@gmail.com', profilePicture: null, superUser: 0},
    {idUsuario: 2, nombre: 'Maria', apPat: 'Gomez', apMat: "Martinez", password: 'abjs', email: 'maria@gmail.com', profilePicture: null, superUser: 0},
    {idUsuario: 3, nombre: 'Pedro', apPat: 'Lopez', apMat: 'Hernandez', password: 'LKNDW8', email: 'pedrol@gmail.com', profilePicture: null, superUser: 0},
    {idUsuario: 4, nombre: 'Ana', apPat: 'Hernandez', apMat: 'Garcia', password: 'kdhkj4', email: 'ana@gmail.com', profilePicture: null, superUser: 0},
    {idUsuario: 5, nombre: 'Luis', apPat: 'Garcia', apMat: 'Perez', password: 'lsljnd', email: 'lgarci@gmail.com', profilePicture: null, superUser: 0},
    {idUsuario: 6, nombre: 'Carlos', apPat: 'Perez', apMat: 'Manzanares', password: 'kjsd', email: 'carlosp@gmail.com', profilePicture: null, superUser: 0},
    {idUsuario: 7, nombre: 'Sofia', apPat: 'Romero', apMat: 'Cabrera', password: ',nndbfb', email: 'sofiaman@gmail.com', profilePicture: null, superUser: 0},
    {idUsuario: 8, nombre: 'Gael', apPat: 'Altamirano', apMat: 'Flores', password: 'aknndel', email: 'gaelalt@hotmail.com', profilePicture: null, superUser: 0},
    {idUsuario: 9, nombre: 'Fernanda', apPat: 'Gomez', apMat: "Lopez", password: 'ljdhi', email: 'fernandag@gmail.com', profilePicture: null, superUser: 0},
    {idUsuario: 10, nombre: 'Jin', apPat: 'Blanco', apMat: 'Rodríguez', password: 'lkfjo', email: 'jin@gmail.com', profilePicture: null, superUser:1}
  ]

  const rentas = [
    {idRentar: 1, idUsuario: 1, idPelicula: 1, fecha_renta: new Date(2021, 7, 14), dias_de_renta: 10, estatus: 0},
    {idRentar: 2, idUsuario: 2, idPelicula: 2, fecha_renta: new Date(2021, 7, 14), dias_de_renta: 10, estatus: 0},
    {idRentar: 3, idUsuario: 3, idPelicula: 3, fecha_renta: new Date(2021, 7, 14), dias_de_renta: 10, estatus: 0},
    {idRentar: 4, idUsuario: 4, idPelicula: 4, fecha_renta: new Date(2021, 7, 14), dias_de_renta: 10, estatus: 0},
    {idRentar: 5, idUsuario: 5, idPelicula: 5, fecha_renta: new Date(2021, 7, 14), dias_de_renta: 10, estatus: 0},
    {idRentar: 6, idUsuario: 6, idPelicula: 6, fecha_renta: new Date(2021, 7, 14), dias_de_renta: 10, estatus: 0},
    {idRentar: 7, idUsuario: 7, idPelicula: 7, fecha_renta: new Date(2021, 7, 14), dias_de_renta: 10, estatus: 0},
    {idRentar: 8, idUsuario: 8, idPelicula: 8, fecha_renta: new Date(2021, 7, 14), dias_de_renta: 10, estatus: 0},
    {idRentar: 9, idUsuario: 9, idPelicula: 9, fecha_renta: new Date(2021, 7, 14), dias_de_renta: 10, estatus: 0},
    {idRentar: 10, idUsuario: 10, idPelicula: 10, fecha_renta: new Date(2021, 7, 14), dias_de_renta: 10, estatus: 0}
  ]