from flask import Blueprint, request, render_template, flash, url_for, redirect
from model import model_rentar as mr

renta_blueprint = Blueprint('renta', __name__, url_prefix='/renta')

@renta_blueprint.route('/buscarRenta', methods=['GET', 'POST'])
def mostrar_renta_por_id():
     if request.method == "GET":
        return render_template('leer_rentas.html')
     else:

        id = request.form["rentaId"]
        renta = mr.leer_renta_por_id(id)
        if renta is not None:
           return render_template("mostrar_renta.html", renta=renta)
        else:
            return render_template("mensaje.html", mensaje= "No existe renta con dicho Id")
     


@renta_blueprint.route('/registro', methods=['GET', 'POST'])
def agregar_renta():
    if request.method == "GET":
        return render_template('crear_renta.html')
    else:

        idUsuario= request.form["userId"]
        print(idUsuario)
        idPelicula= request.form["peliculaId"]
        print(idPelicula)
        fecha_renta = request.form["fecha" ]
        print(fecha_renta)
        dias_de_renta = request.form["diasRenta" ]
        print(dias_de_renta)
        estatus = request.form["estatus"]
        print(estatus)

        if dias_de_renta == '':
            dias_de_renta = 5
            print("detectado")
        else:
            dias_de_renta = int(dias_de_renta)
            print("No detectado")
     
        retorno = mr.crear_renta(idUsuario, idPelicula, fecha_renta, dias_de_renta,estatus)
        
        if retorno == -1:
            return render_template("mensaje.html", mensaje="Ha habido un error al crear esa renta")
        else:
            return render_template("mensaje.html", mensaje="Renta creada con éxito")
    
    
    
@renta_blueprint.route('/leerRentas')
def mostrar_rentas():
    rentas = mr.leer_rentas()
    return render_template("mostrar_rentas.html", rentas=rentas)

@renta_blueprint.route('/actualizar', methods=['GET', 'POST'])
def actualizar_renta():
    if request.method == "GET":
        return render_template('actualizar_renta.html')
    else:
        idRenta= request.form["rentaId"]
        print(idRenta)
        estatus = request.form.get('estatus')
        print(estatus)

              
        retorno = mr.actualizar_renta(idRenta,None, None, None, None, estatus)
        
        if retorno == -1:
            return render_template("mensaje.html", mensaje="Ha habido un error al querer actualizar")
        else:
            return render_template("mensaje.html", mensaje="Renta actualizada con éxito")