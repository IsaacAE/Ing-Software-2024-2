from alchemyClasses.usuarios import usuarios
from alchemyClasses.rentar import rentar
from alchemyClasses import db
from Cryptodome.Hash import SHA256
from base64 import b64encode

# Función para crear un nuevo usuario
def crear_usuario(nombre, apPat, password, apMat=None, email=None, profilePicture=None, superUser=None):
    nuevo_usuario = usuarios(nombre=nombre, apPat=apPat, password=password, apMat=apMat, email=email, profilePicture=profilePicture, superUser=superUser)
    try:
        db.session.add(nuevo_usuario)
        db.session.commit()
        return 0
    except:
        return -1




# Función para obtener todos los usuarios
def leer_usuarios():
    return usuarios.query.all()



# Función para actualizar un usuario por su ID
def actualizar_usuario(id, nombre=None, apPat=None, apMat=None, password=None, email=None, profilePicture=None, superUser=None):
    usuario = usuarios.query.get(id)
    if nombre:
        usuario.nombre = nombre
    if apPat:
        usuario.apPat = apPat
    if apMat:
        usuario.apMat = apMat
    if password:
        usuario.password = usuario.cifrar_password(password)
    if email:
        usuario.email = email
    if profilePicture:
        usuario.profilePicture = profilePicture
    if superUser is not None:
        usuario.superUser = superUser
    try:
        db.session.commit()
        return 0
    except:
        return -1


# Función para obtener un usuario por su ID
def leer_usuario_por_id(id):
    return usuarios.query.get(id)



def eliminar_usuario(id_usuario):
    # Buscar el usuario por su ID
    usuario = usuarios.query.get(id_usuario)

    # Verificar si el usuario existe
    if usuario is None:
        # Si el usuario no existe, devolver -1
        return -1
    
    try:
        # Eliminar todas las rentas asociadas al usuario
        rentar.query.filter_by(idUsuario=id_usuario).delete()

        # Eliminar el usuario
        db.session.delete(usuario)
        db.session.commit()
        
        # Devolver 0 para indicar éxito
        return 0
    except Exception as e:
        # En caso de error, hacer rollback y devolver el error
        db.session.rollback()
        return str(e)
