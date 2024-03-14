from flask import Blueprint, request, render_template, flash, url_for, redirect
from model import model_usuarios as mu

usuario_blueprint = Blueprint('usuario', __name__, url_prefix='/usuario')


@usuario_blueprint.route('/registro', methods=['GET', 'POST'])
def agregar_usuario():
    if request.method == "GET":
        return render_template('add_user.html')
    else:
        
        nombre = request.form["nombre"]
        print(nombre)
        apellidoP = request.form["apPat" ]
        print(apellidoP)
        apellidoM = request.form["apMat"]
        print(apellidoM)
        correo = request.form["email"]
        print(correo)
        password = request.form["password"]
        print(password)
        
        if 'superUser' in request.form:
            superuser = 1
        else:
            superuser = 0
        print(superuser)
            
        
        retorno = mu.crear_usuario(nombre, apellidoP, password, apellidoM, correo, None, superuser)
        
        if retorno == -1:
            return render_template("add_user.html", mensaje="El correo ingresado ya existe, intente con otro correo", nombre = nombre, apellidoP = apellidoP, apellidoM = apellidoM, superuser = superuser, password = password)
        else:
            return render_template("add_user.html", mensaje="Usuario creado con éxito")
    
    
    
@usuario_blueprint.route('/usuarios')
def mostrar_usuarios():
    usuarios = mu.ver_usuarios()
    return render_template("leer_usuarios.html", usuarios=usuarios)