import datetime
from flask import Flask
from alchemyClasses import db
from alchemyClasses.rentar import rentar
from alchemyClasses.usuarios import usuarios
from alchemyClasses.peliculas import peliculas
from model.model_peliculas import consultar_registros_peliculas, filtrar_id_pelicula, cambiar_columna_nombre_pelicula, eliminar_id_pelicula, eliminar_tabla_peliculas
from model.model_usuarios import consultar_registros_usuarios, filtrar_id_usuario,cambiar_columna_nombre_usuario, eliminar_id_usuario, eliminar_tabla_usuarios
from model.model_rentar import consultar_registros_rentas, filtrar_id_renta, cambiar_columna_fecha_renta, eliminar_id_renta, eliminar_tabla_rentar
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_software'
app.config.from_mapping(
    SECRET_KEY='dev'
)
db.init_app(app)

def menu():
    print("### MENU ###")
    print("1. Consultar registros de una tabla.")
    print("2. Buscar registro de una tabla mediante el ID.")
    print("3. Actualizar la columna nombre (o fecha) de un registro segun su ID")
    print("4. Eliminar un registro por ID o eliminar todos los registros de la tabla.")
    print("5. Salir")

def convertir_string_a_fecha(fecha_str):
    try:
        fecha = datetime.datetime.strptime(fecha_str, '%Y-%m-%d')
        return fecha
    except ValueError:
        print("Oh, lo siento, pero el formato proporcionado no es valido.")
        return None

def obtener_tabla_usuario():
    while True:
        try:
            opcion = int(input("Elija la tabla sobre la cual desea hacer la operacion:\n1.Usuarios\n2.Peliculas\n3.Rentar\n"))
            if opcion == 1:
                return "usuarios"
            elif opcion == 2:
                return "peliculas"
            elif opcion == 3:
                return "rentar"
            else:
                print("Por favor, ingrese un número válido (1, 2 o 3).")
        except ValueError:
            print("Por favor, ingrese un número válido (1, 2 o 3).")    

if __name__ == '__main__':
    with app.app_context():
        while True:
            menu()

            try:
                opcion = int(input("Seleccione una opción (1-5): "))
            except ValueError:
                print("Error: Ingrese un número válido.")
                continue

            if opcion == 1:
                tabla = obtener_tabla_usuario()
                
                if tabla == "peliculas":
                    consultar_registros_peliculas()
                elif tabla == "usuarios":
                    consultar_registros_usuarios()
                elif tabla == "rentar":
                    consultar_registros_rentas()

            elif opcion == 2:
                tabla = obtener_tabla_usuario()

                try:
                    id_buscar = input("Ingrese el ID a filtrar: ")
                except ValueError:
                    print("Error: Ingrese un ID válido.")
                    continue

                if tabla == "peliculas":
                    filtrar_id_pelicula(id_buscar)
                elif tabla == "usuarios":
                    filtrar_id_usuario(id_buscar)
                elif tabla == "rentar":
                    filtrar_id_renta(id_buscar)

            elif opcion == 3:
                tabla = obtener_tabla_usuario()
                
                try:
                    id_actualizar = int(input("Ingrese el ID del registro a actualizar: "))
                except ValueError:
                    print("Error: Ingrese un ID válido.")
                    continue

                nuevo_valor = input("Ingrese el nuevo valor: ")
                if tabla == "peliculas":
                    cambiar_columna_nombre_pelicula(id_actualizar, nuevo_valor)
                elif tabla == "usuarios":
                    cambiar_columna_nombre_usuario(id_actualizar, nuevo_valor)
                elif tabla == "rentar":
                    # Intentar convertir el nuevo valor en una fecha
                    try:
                        nueva_fecha = convertir_string_a_fecha(nuevo_valor)
                        if nueva_fecha is not None:
                            # Si la conversión es exitosa, llamar a la función para cambiar la fecha
                            cambiar_columna_fecha_renta(id_actualizar, nueva_fecha)
                    except ValueError:
                        # Si la conversión falla, mostrar un mensaje de error
                        print("Error: Ingrese una fecha válida en formato dd/mm/aaaa.")
                        continue

                
                
            
            elif opcion == 4:
                tabla = obtener_tabla_usuario()
                
                try:
                    id_eliminar = input("Ingrese el ID del registro a eliminar (si no ingresa ningun ID, se borrara toda la tabla): ")
                except ValueError:
                    print("Error: Ingrese un ID válido.")
                    continue

                if tabla == "peliculas":
                    eliminar_id_pelicula(id_eliminar)
                elif tabla == "usuarios":
                    eliminar_id_usuario(id_eliminar)
                elif tabla == "rentar":
                    eliminar_id_renta(id_eliminar)


            elif opcion == 5:
                print("Saliendo del programa. ¡Hasta luego!")
                break

            else:
                print("Opción no válida. Inténtelo de nuevo.")
    
     
