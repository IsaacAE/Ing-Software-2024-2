from alchemyClasses.peliculas import peliculas
from alchemyClasses import db

def consultar_registros_peliculas():
    for pelicula in peliculas.query.all():
        print(pelicula)

def filtrar_id_pelicula(id):
    pelicula = peliculas.query.filter_by(idPelicula=id).first()
    if pelicula is None:
        print("No existe pelicula con dicho ID.") 
    else:
        print(pelicula)


def cambiar_columna_nombre_pelicula(id_pelicula,nombre):
    pelicula = peliculas.query.filter(peliculas.idPelicula==id_pelicula).first()
    if pelicula is None:
       print("No existe alguna pelicula con dicho ID") 
    else:
        pelicula.nombre= nombre
        db.session.commit()
        print("Se ha actualizado la pelicula con ID: "+ str(id_pelicula) + " a tener el nombre: "+ nombre)
        


def eliminar_id_pelicula(id_pelicula):
    if not id_pelicula :
        eliminar_tabla_peliculas()
    else:
        pelicula = peliculas.query.get(id_pelicula)
        if pelicula is None:
            print("No existe película con dicho ID.")
        else:
            db.session.delete(pelicula)
            db.session.commit()
            print(f"La película con ID: {id_pelicula} fue eliminada.")
       

def eliminar_tabla_peliculas():
    confirmacion = input("Deseas eliminar todos los elementos de la tabla 'peliculas'? (Y/N): ")
    if confirmacion == 'Y':
        for pelicula in peliculas.query.all():
            db.session.delete(pelicula)
        db.session.commit()
        print("Todos los elementos de la tabla 'peliculas' han sido eliminados.")
    else:
        print("No se han eliminado los elementos de la tabla 'peliculas'.")