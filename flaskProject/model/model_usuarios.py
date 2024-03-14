from alchemyClasses.usuarios import usuarios
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

# Función para obtener un usuario por su ID
def leer_usuario_por_id(id):
    return usuarios.query.get(id)

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

# Función para eliminar un usuario por su ID
def eliminar_usuario(id):
    
    usuario = usuarios.query.get(id)
    try:
       db.session.delete(usuario)
       db.session.commit()
       return 0  # Se encontró y eliminó el usuario correctamente
    except:
       return -1  # No se encontró el usuario
