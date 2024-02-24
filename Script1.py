import pymysql
import random
from Cryptodome.Hash import SHA256
from base64 import b64encode
from datetime import datetime, timedelta

def cifrar_password(password):
    # Creamos un objeto de hash SHA-256
    hash_obj = SHA256.new()

    # Convertimos la contraseña a bytes y actualizamos el hash
    hash_obj.update(password.encode('utf-8'))

    # Obtenemos el hash en formato de bytes
    password_hash = hash_obj.digest()

    # Convertimos el hash a una cadena Base64 para almacenarlo de forma segura
    return b64encode(password_hash).decode('utf-8')


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




def filtrar_usuarios_por_apellido(apellido):
    try:
        # Conecta a la base de datos utilizando un context manager
        with conectar_db() as conexion:
            # Crea un cursor para ejecutar consultas
            with conexion.cursor() as cursor:
                # Consulta SQL para filtrar usuarios por apellido
                consulta = "SELECT * FROM usuarios WHERE apPat LIKE %s OR apMat LIKE %s"

                apellido_con_comodin = f"%{apellido}"
                
                
                # Ejecuta la consulta
                cursor.execute(consulta, (apellido_con_comodin,apellido_con_comodin))
               

                # Obtiene los resultados y crea instancias de la clase Usuario
                usuarios_filtrados = cursor.fetchall()
                for usuario in usuarios_filtrados:
                    print(f"ID: {usuario['idUsuario']}\nNombre: {usuario['nombre']}\napPat: {usuario['apPat']}\napMat: {usuario['apMat']}\nPassword: {usuario['password']}\nEmail: {usuario['email']}\nProfilePicture:{usuario['profilePicture']}\nSuperUser: {usuario['superUser']}\n")


                

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
                consulta = "DELETE FROM rentar WHERE fecha_renta < %s AND fecha_renta < NOW()"

                # Ejecutar la consulta
                cursor.execute(consulta, (fecha_limite))

                # Hacer commit para aplicar los cambios
                conexion.commit()

                

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
    fecha = generar_fecha_aleatoria()
    


    try:
        # Conecta a la base de datos utilizando un context manager
        with conectar_db() as conexion:
            # Crea un cursor para ejecutar consultas
            with conexion.cursor() as cursor:


                consulta = "INSERT INTO rentar (idUsuario, idPelicula, fecha_renta, dias_de_renta, estatus) VALUES (%s, %s, %s, %s, %s)"
                
                # Ejecuta la consulta
                cursor.execute(consulta, (id_usuario,id_pelicula,fecha,5,0))
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
    passwordCifrada = cifrar_password(password)


    # Crear la consulta SQL para insertar un usuario
    consulta = """
        INSERT INTO usuarios (nombre, apPat, apMat, password, email, profilePicture, superUser) 
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """

    # Ejecutar la consulta
    cursor.execute(consulta, (nombre, apPat, apMat, passwordCifrada, email, profilePicture, superUser))

    
    
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

    return id_pelicula

def generar_fecha_aleatoria():
    fecha_inicio = datetime(2024, 1, 1)
    fecha_fin = datetime(2024, 2, 29)

    diferencia_dias = (fecha_fin - fecha_inicio).days
    fecha_aleatoria = fecha_inicio + timedelta(days=random.randint(0, diferencia_dias),
                                               hours=random.randint(0, 23),
                                               minutes=random.randint(0, 59),
                                               seconds=random.randint(0, 59))

    return fecha_aleatoria



def main():
    while True:
        print("Selecciona una opción:")
        print("1. Insertar usuario aleatorio")
        print("2. Filtrar usuarios por apellido")
        print("3. Cambiar género de una película")
        print("4. Eliminar rentas")
        print("5. Salir")

        opcion = input("Ingresa el número de la opción: ")

        if opcion == "1":
            insertar_aleatorio()
        elif opcion == "2":
            apellido = input("Ingresa el apellido para filtrar usuarios: ")
            filtrar_usuarios_por_apellido(apellido)
        elif opcion == "3":
            nombre = input("Ingresa el nombre de la película: ")
            nuevo_genero = input("Ingresa el nuevo género de la película: ")
            cambiar_genero_pelicula(nombre, nuevo_genero)
        elif opcion == "4":
            eliminar_rentas()
        elif opcion == "5":
            print("Saliendo del programa.")
            break
        else:
            print("Opción no válida. Ingresa un número del 1 al 5.")

if __name__ == "__main__":
    main()



