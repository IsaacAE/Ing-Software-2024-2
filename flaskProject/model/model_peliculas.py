from alchemyClasses.peliculas import peliculas
from alchemyClasses import db

def crear_pelicula(nombre, genero=None, duracion=None, inventario=1):
    nueva_pelicula = peliculas(nombre=nombre, genero=genero, duracion=duracion, inventario=inventario)
    db.session.add(nueva_pelicula)
    db.session.commit()
    return nueva_pelicula

def leer_peliculas():
    return peliculas.query.all()

# Función para obtener una película por su ID
def leer_pelicula_por_id(id):
    return peliculas.query.get(id)

# Función para actualizar una película por su ID
def actualizar_pelicula(id, nombre=None, genero=None, duracion=None, inventario=None):
    pelicula = peliculas.query.get(id)
    if nombre:
        pelicula.nombre = nombre
    if genero:
        pelicula.genero = genero
    if duracion:
        pelicula.duracion = duracion
    if inventario:
        pelicula.inventario = inventario
    db.session.commit()
    return pelicula

# Función para eliminar una película por su ID
def eliminar_pelicula(id):
    pelicula = peliculas.query.get(id)
    db.session.delete(pelicula)
    db.session.commit()