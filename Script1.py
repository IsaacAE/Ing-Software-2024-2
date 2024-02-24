import pymysql
import random
from datetime import datetime, timedelta

class Usuario:
    def __init__(self, idUsuario, nombre, apPat, apMat, password, email, profilePicture, superUser):
        self.idUsuario = idUsuario
        self.nombre = nombre
        self.apPat = apPat
        self.apMat = apMat
        self.password = password
        self.email = email
        self.profilePicture = profilePicture
        self.superUser = superUser

    def __str__(self):
        return f"ID: {self.idUsuario}, Nombre: {self.nombre} {self.apPat} {self.apMat}, Email: {self.email}, SuperUser: {self.superUser}"


def conectar_db():
    # Configura la conexión a la base de datos
    connection = pymysql.connect(host='localhost',
                             user='lab',
                             password='Developer123!',
                             database='lab_ing_software',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
    return connection

def cerrar_db(conexion):
    # Cierra la conexión a la base de datos
    conexion.close()

def mostrar_usuarios():
    try:
        # Conecta a la base de datos utilizando un context manager
        with conectar_db() as conexion:
            # Crea un cursor para ejecutar consultas
            with conexion.cursor() as cursor:
                # Consulta SQL para obtener todos los usuarios
                consulta = "SELECT * FROM usuarios"
                
                # Ejecuta la consulta
                cursor.execute(consulta)
                
                for fila in cursor.fetchall():
                    print(fila)

                # Muestra los usuarios en pantalla
               

    except pymysql.Error as e:
        # Si hay un error, imprímelo
        print(f"Error en la conexión a la base de datos: {e}")


def mostrar_peliculas():
    try:
        # Conecta a la base de datos utilizando un context manager
        with conectar_db() as conexion:
            # Crea un cursor para ejecutar consultas
            with conexion.cursor() as cursor:
                # Consulta SQL para obtener todos los usuarios
                consulta = "SELECT * FROM peliculas"
                
                # Ejecuta la consulta
                cursor.execute(consulta)
                
                for fila in cursor.fetchall():
                    print(fila)

                # Muestra los usuarios en pantalla
               

    except pymysql.Error as e:
        # Si hay un error, imprímelo
        print(f"Error en la conexión a la base de datos: {e}")

def insertar_usuarios():
    try:
        # Conecta a la base de datos utilizando un context manager
        with conectar_db() as conexion:
            # Crea un cursor para ejecutar consultas
            with conexion.cursor() as cursor:
                # Lista de usuarios a insertar
                usuarios = [
                    ('Maria', 'Gonzalez', 'Lopez', 'password2', 'maria@yahoo.com', None, 0),
                    # Agrega más usuarios según sea necesario
                    ('Carlos', 'Rodriguez', 'Santos', 'password3', 'carlos@hotmail.com', None, 0),
                    # ...
                    ('Laura', 'Hernandez', 'Rios', 'password20', 'laura@gmail.com', None, 0)
                ]

                # Consulta SQL para insertar usuarios
                consulta = "INSERT INTO usuarios (nombre, apPat, apMat, password, email, profilePicture, superUser) VALUES (%s, %s, %s, %s, %s, %s, %s)"

                # Ejecuta la consulta para cada usuario en la lista
                cursor.executemany(consulta, usuarios)

                # Confirma la transacción
                conexion.commit()

    except pymysql.Error as e:
        # Si hay un error, imprímelo
        print(f"Error en la conexión a la base de datos: {e}")

def filtrar_usuarios_por_apellido(apellido):
    try:
        # Conecta a la base de datos utilizando un context manager
        with conectar_db() as conexion:
            # Crea un cursor para ejecutar consultas
            with conexion.cursor() as cursor:
                # Consulta SQL para filtrar usuarios por apellido
                consulta = "SELECT * FROM usuarios WHERE apMat LIKE %s"

                apellido_con_comodin = f"%{apellido}"
                
                
                # Ejecuta la consulta
                cursor.execute(consulta, (apellido_con_comodin,))
               

                # Obtiene los resultados y crea instancias de la clase Usuario
                for fila in cursor.fetchall():
                    print(fila)

                

    except pymysql.Error as e:
        print(f"Error en la conexión a la base de datos: {e}")
        return None


def cambiar_genero_pelicula(nombre_pelicula, nuevo_genero):
    try:
        # Conecta a la base de datos utilizando un context manager
        with conectar_db() as conexion:
            # Crea un cursor para ejecutar consultas
            with conexion.cursor() as cursor:
                # Consulta SQL para actualizar el género de la película
                consulta = "UPDATE peliculas SET genero = %s WHERE nombre = %s"
                genero_con_comodin = f"%{nuevo_genero}"
                nombre_con_comodin = f"%{nombre_pelicula}"
                
                # Ejecuta la consulta
                cursor.execute(consulta, (nuevo_genero, nombre_pelicula))
                
                # Comprueba si se realizó alguna actualización
                if cursor.rowcount > 0:
                    print(f"Se actualizó el género de la película '{nombre_pelicula}' a '{nuevo_genero}'.")
                else:
                    print(f"No se encontró la película '{nombre_pelicula}'.")

                # Confirma la transacción
                conexion.commit()

    except pymysql.Error as e:
        # Si hay un error, imprímelo
        print(f"Error en la conexión a la base de datos: {e}")

def eliminar_rentas():
    try:
        # Conecta a la base de datos utilizando un context manager
        with conectar_db() as conexion:
            # Crea un cursor para ejecutar consultas
            with conexion.cursor() as cursor:
                # Consulta SQL para actualizar el género de la película
                fecha_limite = (datetime.now() - timedelta(days=3)).date()

                # Crear la consulta SQL para eliminar las rentas
                consulta = "DELETE FROM rentar WHERE fecha_renta <= %s AND fecha_renta < NOW()"

                # Ejecutar la consulta
                cursor.execute(consulta, (fecha_limite))

                # Hacer commit para aplicar los cambios
                conexion.commit()

                

    except pymysql.Error as e:
        # Si hay un error, imprímelo
        print(f"Error en la conexión a la base de datos: {e}")

def mostrar_rentas():
    try:
        # Conecta a la base de datos utilizando un context manager
        with conectar_db() as conexion:
            # Crea un cursor para ejecutar consultas
            with conexion.cursor() as cursor:
                # Consulta SQL para obtener todos los usuarios
                consulta = "SELECT * FROM rentar"
                
                # Ejecuta la consulta
                cursor.execute(consulta)
                
                for fila in cursor.fetchall():
                    print(fila)

                # Muestra los usuarios en pantalla
    except pymysql.Error as e:
        # Si hay un error, imprímelo
        print(f"Error en la conexión a la base de datos: {e}")
                    
def insertar_aleatorio():
    nombres = ["Juan", "Ana", "Pedro", "Maria", "Isaac", "Fernando", "Valeria", "Agripino", "Hector", "Gael"]
    apellidos = ["Maya", "Cooper", "Koothrappali", "Hofstadter", "Wolowitz", "Fowler", "Alvarez", "Juarez", "Perez", "Huerta"]
    pelicula1 = ["Dulce", "Sombria", "Alegre", "Triste", "Inmunda", "Deseada", "Asombrosa", "Increible", "Maravillosa", "Aburrida", "Gran", "Aburrida", "Detestable", "Inefable", "Inimaginable", "Primer", "Segunda", "Maldita", "Bnedita"]
    pelicula2 = ["Venganza", "Muerte", "Batalla", "Sequia", "Danza", "Defensa", "Imaginacion", "Alabanza", "Guerra", "Fiesta", "Sombra", "Ducha", "Creencia", "Arma", "Mariposa", "Revolucion", "Huelga"]
    generos= ["Drama", "Terror", "Comedia", "Sci-fi", "Thriller", "Documental", "Animacion"]
    numeros = ["1","2","3","4","5","6","7","8","9","0"]
    letra = ["A","B","C","D","E","F","G","H","I","J"]
    extension_correo = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com", "@correoJujuy.com"]

    nombre = random.choice(nombres)
    apPat = random.choice(apellidos)
    apMat = random.choice(apellidos)
    peli1 = random.choice(pelicula1)
    peli2 = random.choice(pelicula2)
    nombre_pelicula = peli1 + " " + peli2
    genero = random.choice(generos)
    num1 = random.choice(numeros)
    num2 = random.choice(numeros)
    num3 = random.choice(numeros)
    letra1 = random.choice(letra)
    letra2= random.choice(letra)
    dominio = random.choice(extension_correo)
    password = "password"+num3+num2+num1+letra2+letra1
    correo = f"{nombre}{apPat}{letra1}{letra2}{num1}{num2}{num3}{dominio}"
    duracion = random.randint(80,160)
    inventario = random.randint(2,10)
    superUser = random.randint(0,1)

    id_usuario = insertar_usuario(nombre, apPat, apMat, password, correo, None, superUser)
    id_pelicula = insertar_pelicula(nombre_pelicula,genero,duracion,inventario)
    fecha_actual = datetime.now()
    


    try:
        # Conecta a la base de datos utilizando un context manager
        with conectar_db() as conexion:
            # Crea un cursor para ejecutar consultas
            with conexion.cursor() as cursor:


                consulta = "INSERT INTO rentar (idUsuario, idPelicula, fecha_renta, dias_de_renta, estatus) VALUES (%s, %s, %s, %s, %s)"
                
                # Ejecuta la consulta
                cursor.execute(consulta, (id_usuario,id_pelicula,fecha_actual,5,0))
                conexion.commit()
                
               

                # Muestra los usuarios en pantalla
               

    except pymysql.Error as e:
        # Si hay un error, imprímelo
        print(f"Error en la conexión a la base de datos: {e}")

def insertar_usuario(nombre, apPat, apMat, password, email, profilePicture, superUser):
    # Establecer la conexión con la base de datos
    conexion = conectar_db()
    # Crear un objeto cursor
   
    # Establecer la conexión con la base de datos
    
    # Crear un objeto cursor
    cursor = conexion.cursor()

    # Crear la consulta SQL para insertar un usuario
    consulta = """
        INSERT INTO usuarios (nombre, apPat, apMat, password, email, profilePicture, superUser) 
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """

    # Ejecutar la consulta
    cursor.execute(consulta, (nombre, apPat, apMat, password, email, profilePicture, superUser))

    
    
      # Obtener el ID del usuario recién insertado
    id_usuario = cursor.lastrowid

    # Hacer commit para aplicar los cambios
    conexion.commit()
    
    
  

    return id_usuario

def insertar_pelicula(nombre, genero, duracion, inventario):
    # Establecer la conexión con la base de datos
    conexion = conectar_db()
    # Crear un objeto cursor
    cursor = conexion.cursor()

    # Crear la consulta SQL para insertar una película
    consulta = """
        INSERT INTO peliculas (nombre, genero, duracion, inventario) 
        VALUES (%s, %s, %s, %s)
    """

    # Ejecutar la consulta
    cursor.execute(consulta, (nombre, genero, duracion, inventario))

    
    # Obtener el ID del usuario recién insertado
    id_pelicula = cursor.lastrowid
    # Hacer commit para aplicar los cambios
    conexion.commit()

    
    
    print(id_pelicula)

    return id_pelicula





def main():
    # Ejemplo de uso para obtener el mayor idUsuario de la tabla usuarios
    insertar_aleatorio()

# Llama a la función para cambiar el género de la película
    #cambiar_genero_pelicula(nombre_pelicula, nuevo_genero)

    

if __name__ == "__main__":
    main()


