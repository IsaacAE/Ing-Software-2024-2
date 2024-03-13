from alchemyClasses.usuarios import usuarios
from alchemyClasses import db

def consultar_registros_usuarios():
    for usuario in usuarios.query.all():
        print(usuario)

def filtrar_id_usuario(id_usuario):
    usuario = usuarios.query.filter_by(idUsuario=id_usuario).first()
    if usuario is None:
        print("No existe algun usuario con dicho ID.")
    else:
        print(usuario)
        
def cambiar_columna_nombre_usuario(id_usuario,nombre):
    usuario = usuarios.query.filter(usuarios.idUsuario==id_usuario).first()
    if usuario is None:
       print("No existe algun usuario con dicho ID") 
    else:
        usuario.nombre= nombre
        db.session.commit()
        print("Se ha actualizado el usuario con ID: "+ str(id_usuario) + " a tener el nombre: "+ nombre)

def eliminar_id_usuario(id_usuario):
    if not id_usuario :
        eliminar_tabla_usuarios()
    else:
        usuario = usuarios.query.get(id_usuario)
        if usuario is None:
            print("No existe algun usuario con dicho ID.")
        else:
            db.session.delete(usuario)
            db.session.commit()
            print(f"Usuario con ID {id_usuario} eliminado exitosamente.")

def eliminar_tabla_usuarios():
    confirmacion = input("Deseas eliminar todos los elementos de la tabla 'usuarios'? (Y/N):")
    if confirmacion == 'Y':
        for usuario in usuarios.query.all():
            db.session.delete(usuario)
        db.session.commit()
        print("Todos los elementos de la tabla 'usuarios' han sido eliminados.")
    else:
        print("No se han eliminado los elementos de la tabla 'usuarios'.")