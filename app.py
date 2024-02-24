import datetime
from flask import Flask
from alchemyClasses import db
from alchemyClasses.rentar import rentar
from alchemyClasses.usuarios import usuarios
from alchemyClasses.peliculas import peliculas
from model.model_peliculas import consultar_registros_peliculas, filtrar_id_pelicula, eliminar_id_pelicula, eliminar_tabla_peliculas
from model.model_usuarios import consultar_registros_usuarios, filtrar_id_usuario, eliminar_id_usuario, eliminar_tabla_usuarios
from model.model_rentar import consultar_registros_rentas, filtrar_id_renta, eliminar_id_renta, eliminar_tabla_rentar
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_software'
app.config.from_mapping(
    SECRET_KEY='dev'
)
db.init_app(app)

def mostrar_menu():
    print("===== MENÚ PRINCIPAL =====")
    print("1. Ver registros de una tabla.")
    print("2. Filtrar registros de una tabla por ID.")
    print("3. Actualizar la columna nombre o fecha de un registro.")
    print("4. Eliminar un registro por ID.")
    print("5. Eliminar todos los registros de una tabla.")
    print("6. Salir")

if __name__ == '__main__':
    with app.app_context():
        while True:
            mostrar_menu()

            try:
                opcion = int(input("Seleccione una opción (1-6): "))
            except ValueError:
                print("Error: Ingrese un número válido.")
                continue

            if opcion == 1:
                tabla = input("Ingrese el nombre de la tabla (peliculas, usuarios, rentas): ").lower()
                if tabla not in ["peliculas", "usuarios", "rentas"]:
                    print("Error: Tabla no válida. Inténtelo de nuevo.")
                    continue

                if tabla == "peliculas":
                    consultar_registros_peliculas()
                elif tabla == "usuarios":
                    consultar_registros_usuarios()
                elif tabla == "rentas":
                    consultar_registros_rentas()

            elif opcion == 2:
                tabla = input("Ingrese el nombre de la tabla (peliculas, usuarios, rentas): ").lower()
                if tabla not in ["peliculas", "usuarios", "rentas"]:
                    print("Error: Tabla no válida. Inténtelo de nuevo.")
                    continue

                try:
                    id_buscar = input("Ingrese el ID a filtrar: ")
                except ValueError:
                    print("Error: Ingrese un ID válido.")
                    continue

                if tabla == "peliculas":
                    filtrar_id_pelicula(id_buscar)
                elif tabla == "usuarios":
                    filtrar_id_usuario(id_buscar)
                elif tabla == "rentas":
                    filtrar_id_renta(id_buscar)
                
                
            
            elif opcion == 4:
                tabla = input("Ingrese el nombre de la tabla (peliculas, usuarios, rentas): ").lower()
                if tabla not in ["peliculas", "usuarios", "rentas"]:
                    print("Error: Tabla no válida. Inténtelo de nuevo.")
                    continue

                try:
                    id_eliminar = input("Ingrese el ID del registro a eliminar: ")
                except ValueError:
                    print("Error: Ingrese un ID válido.")
                    continue

                if tabla == "peliculas":
                    eliminar_id_pelicula(id_eliminar)
                elif tabla == "usuarios":
                    eliminar_id_usuario(id_eliminar)
                elif tabla == "rentas":
                    eliminar_id_renta(id_eliminar)

            elif opcion == 5:
                tabla = input("Ingrese el nombre de la tabla (peliculas, usuarios, rentas): ").lower()
                if tabla not in ["peliculas", "usuarios", "rentas"]:
                    print("Error: Tabla no válida. Inténtelo de nuevo.")
                    continue

                if tabla == "peliculas":
                    eliminar_tabla_peliculas()
                elif tabla == "usuarios":
                    eliminar_tabla_usuarios()
                elif tabla == "rentas":
                    eliminar_tabla_rentar()


            elif opcion == 6:
                print("Saliendo del programa. ¡Hasta luego!")
                break

            else:
                print("Opción no válida. Inténtelo de nuevo.")
    
     
