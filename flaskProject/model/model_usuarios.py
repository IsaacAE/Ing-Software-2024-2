from alchemyClasses.usuarios import usuarios
from alchemyClasses import db

# Función para crear un nuevo usuario
def crear_usuario(nombre, apPat, password, apMat=None, email=None, profilePicture=None, superUser=None):
    nuevo_usuario = usuarios(nombre=nombre, apPat=apPat, password=password, apMat=apMat, email=email, profilePicture=profilePicture, superUser=superUser)
    db.session.add(nuevo_usuario)
    db.session.commit()
    return nuevo_usuario




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
    db.session.commit()
    return usuario

# Función para eliminar un usuario por su ID
def eliminar_usuario(id):
    usuario = usuarios.query.get(id)
    db.session.delete(usuario)
    db.session.commit()