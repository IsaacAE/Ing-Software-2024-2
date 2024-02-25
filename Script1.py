import pymysql
import random
from Cryptodome.Hash import SHA256
from base64 import b64encode
from datetime import datetime, timedelta

def cifrar_password(password):
    # Creamos un objeto de hash SHA-256
    hash_obj = SHA256.new()

    # Convertimos la contrasenia a bytes y actualizamos el hash
    hash_obj.update(password.encode('utf-8'))

    # Obtenemos el hash en formato de bytes
    password_hash = hash_obj.digest()

    # Convertimos el hash a una cadena Base64 para almacenarlo de forma segura
    return b64encode(password_hash).decode('utf-8')

#Creamos una funcion para conectar con la base de datos, de esta manera basta con llamar a la funcion
def conectar_db():
    connection = pymysql.connect(host='localhost',
                             user='lab',
                             password='Developer123!',
                             database='lab_ing_software',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
    return connection

#Funcion para cerrar la conexion a la base de datos
def cerrar_db(conexion):
    conexion.close()



#Funcion para filtrar los usuarios que cuyo apellido (cualquiera de los dos) termine con la cadena dada 
def filtrar_usuarios_por_apellido(apellido):
    try:
        with conectar_db() as conexion:
            with conexion.cursor() as cursor:
                consulta = "SELECT * FROM usuarios WHERE apPat LIKE %s OR apMat LIKE %s"

                apellido_con_comodin = f"%{apellido}"
                cursor.execute(consulta, (apellido_con_comodin,apellido_con_comodin))
               
                usuarios_filtrados = cursor.fetchall()
                for usuario in usuarios_filtrados:
                    print(f"ID: {usuario['idUsuario']}\nNombre: {usuario['nombre']}\napPat: {usuario['apPat']}\napMat: {usuario['apMat']}\nPassword: {usuario['password']}\nEmail: {usuario['email']}\nProfilePicture:{usuario['profilePicture']}\nSuperUser: {usuario['superUser']}\n")


                

    except pymysql.Error as e:
        print(f"Error en la conexion a la base de datos: {e}")
        return None

#Funcion para cambiar el genero de una pelicula a partir del nombre de la misma y el genero que se quiere que se tenga
def cambiar_genero_pelicula(nombre_pelicula, nuevo_genero):
    try:
        with conectar_db() as conexion:
            with conexion.cursor() as cursor:
                consulta = "UPDATE peliculas SET genero = %s WHERE nombre = %s"
               
                cursor.execute(consulta, (nuevo_genero, nombre_pelicula))
                
                if cursor.rowcount > 0:
                    print(f"Se actualizo el genero de la pelicula '{nombre_pelicula}' a '{nuevo_genero}'.")
                else:
                    print(f"No se encontro la pelicula '{nombre_pelicula}'.")

                conexion.commit()

    except pymysql.Error as e:
        print(f"Error en la conexion a la base de datos: {e}")

#Funcion para eliminar las rentas cuya fecha de renta sea menor a la actual menos 3 dias
def eliminar_rentas():
    try:
        with conectar_db() as conexion:
            with conexion.cursor() as cursor:
                fecha_limite = (datetime.now() - timedelta(days=3)).date()

                consulta = "DELETE FROM rentar WHERE fecha_renta < %s AND fecha_renta < NOW()"
                cursor.execute(consulta, (fecha_limite))
                conexion.commit()

                

    except pymysql.Error as e:
        print(f"Error en la conexion a la base de datos: {e}")


#Funcion para insertar un nuevo registro en cada tabla                  
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
        with conectar_db() as conexion:
            with conexion.cursor() as cursor:

                consulta = "INSERT INTO rentar (idUsuario, idPelicula, fecha_renta, dias_de_renta, estatus) VALUES (%s, %s, %s, %s, %s)"
                
                cursor.execute(consulta, (id_usuario,id_pelicula,fecha,5,0))
                conexion.commit()
                
    except pymysql.Error as e:
        print(f"Error en la conexion a la base de datos: {e}")

#Funcion para insertar un registro nuevo en la tabla usuarios
def insertar_usuario(nombre, apPat, apMat, password, email, profilePicture, superUser):
    conexion = conectar_db()

    cursor = conexion.cursor()
    #Se cifra la contrasenia
    passwordCifrada = cifrar_password(password)

    consulta = """
        INSERT INTO usuarios (nombre, apPat, apMat, password, email, profilePicture, superUser) 
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    cursor.execute(consulta, (nombre, apPat, apMat, passwordCifrada, email, profilePicture, superUser))

    
    id_usuario = cursor.lastrowid
    conexion.commit()
    
    return id_usuario

#Funcion para insertar un registro en la tabla peliculas
def insertar_pelicula(nombre, genero, duracion, inventario):
    conexion = conectar_db()
    cursor = conexion.cursor()

    consulta = """
        INSERT INTO peliculas (nombre, genero, duracion, inventario) 
        VALUES (%s, %s, %s, %s)
    """

    cursor.execute(consulta, (nombre, genero, duracion, inventario))

    id_pelicula = cursor.lastrowid
    conexion.commit()

    return id_pelicula

#Funcion para genrar una fecha aleatoria para las rentas
def generar_fecha_aleatoria():
    fecha_inicio = datetime(2022, 1, 1)
    fecha_fin = datetime(2024, 12, 31)

    diferencia_dias = (fecha_fin - fecha_inicio).days
    fecha_aleatoria = fecha_inicio + timedelta(days=random.randint(0, diferencia_dias),
                                               hours=random.randint(0, 23),
                                               minutes=random.randint(0, 59),
                                               seconds=random.randint(0, 59))

    return fecha_aleatoria


#Funcion main para interactuar con las operaciones que puede realizar el programa
def main():
    while True:
        print("Selecciona una opcion:")
        print("1. Insertar usuario aleatorio")
        print("2. Filtrar usuarios por apellido")
        print("3. Cambiar genero de una pelicula dado el nombre")
        print("4. Eliminar rentas")
        print("5. Salir")

        opcion = input("Ingresa el numero de la opcion: ")

        if opcion == "1":
            insertar_aleatorio()
        elif opcion == "2":
            apellido = input("Ingresa el apellido para filtrar usuarios: ")
            filtrar_usuarios_por_apellido(apellido)
        elif opcion == "3":
            nombre = input("Ingresa el nombre de la pelicula: ")
            nuevo_genero = input("Ingresa el nuevo genero de la pelicula: ")
            cambiar_genero_pelicula(nombre, nuevo_genero)
        elif opcion == "4":
            eliminar_rentas()
        elif opcion == "5":
            print("Saliendo del programa.")
            break
        else:
            print("Opcion no valida. Ingresa un numero del 1 al 5.")

if __name__ == "__main__":
    main()



