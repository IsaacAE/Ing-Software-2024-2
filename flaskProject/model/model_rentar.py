from alchemyClasses.rentar import rentar
from alchemyClasses import db

def consultar_registros_rentas():
    for renta in rentar.query.all():
        print(renta)

def filtrar_id_renta(id_renta):
    renta = rentar.query.filter_by(idRentar=id_renta).first()
    if renta is None:
        print("No existe alguna renta con dicho ID.")
    else:
        print(renta)


def cambiar_columna_fecha_renta(id_rentar,fecha):
    renta = rentar.query.filter(rentar.idRentar==id_rentar).first()
    if renta is None:
       print("No existe alguna renta con dicho ID") 
    else:
        renta.fecha_renta= fecha
        db.session.commit()
        print("Se ha actualizado la renta con ID: "+ str(id_rentar) + " a tener la fecha de renta: "+ str(fecha))
        


def eliminar_id_renta(id_renta):
    if not id_renta :
        eliminar_tabla_rentar()
    else:
        renta = rentar.query.get(id_renta)
        if renta is None:
            print("No existe alguna renta con dicho ID.")
        else:
            db.session.delete(renta)
            db.session.commit()
            print(f"Usuario con ID {id_renta} eliminado exitosamente.")

def eliminar_tabla_rentar():
    confirmacion = input("Deseas eliminar todos los elementos de la tabla 'rentar'? (Y/N):")
    if confirmacion == 'Y':
        for renta in rentar.query.all():
            db.session.delete(renta)
        db.session.commit()
        print("Todos los elementos de la tabla 'rentar' han sido eliminados.")
    else:
        print("No se han eliminado los elementos de la tabla 'rentar'.")