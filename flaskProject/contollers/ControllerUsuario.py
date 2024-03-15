from flask import Blueprint, request, render_template, flash, url_for, redirect
from model import model_usuarios as mu

usuario_blueprint = Blueprint('usuario', __name__, url_prefix='/usuario')

@usuario_blueprint.route('/buscarUsuario', methods=['GET', 'POST'])
def mostrar_usuario_por_id():
     if request.method == "GET":
        return render_template('leer_usuarios.html')
     else:

        id = request.form["userId"]
        usuario = mu.leer_usuario_por_id(id)
        if usuario is not None:
           return render_template("mostrar_usuario.html", usuario=usuario)
        else:
            return render_template("mensaje.html", mensaje= "No existe usuario con dicho Id")
     
@usuario_blueprint.route('/borrar', methods=['GET', 'POST'])
def eliminar_usuario_por_id():
     if request.method == "GET":
        return render_template('borrar_usuarios.html')
     else:

        id = request.form["userId"]
        print(id)
        retorno = mu.eliminar_usuario(id)
         
        if retorno == -1:
            return render_template("mensaje.html", mensaje="Ha habido un error al intentar borrar")
        else:
            return render_template("mensaje.html", mensaje="Usuario borrado con éxito")


@usuario_blueprint.route('/registro', methods=['GET', 'POST'])
def agregar_usuario():
    if request.method == "GET":
        return render_template('crear_usuario.html')
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
            return render_template("mensaje.html", mensaje="Ha habido un error al crear ese usuario")
        else:
            return render_template("mensaje.html", mensaje="Usuario creado con éxito")
    
    
    
@usuario_blueprint.route('/leerUsuarios')
def mostrar_usuarios():
    usuarios = mu.leer_usuarios()
    return render_template("mostrar_usuarios.html", usuarios=usuarios)

@usuario_blueprint.route('/actualizar', methods=['GET', 'POST'])
def actualizar_usuario():
    if request.method == "GET":
        return render_template('actualizar_usuario.html')
    else:
        id = request.form["userId"]
        print(id)
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
            superuser_value = int(request.form["superUser"])
            if superuser_value == 1 or superuser_value == 0:
                superuser = superuser_value
            else:
               superuser=None
        else:
            superuser=None
            
            
        
        retorno = mu.actualizar_usuario(id, nombre, apellidoP, apellidoM, password, correo, None, superuser)
        
        if retorno == -1:
            return render_template("mensaje.html", mensaje="Ha habido un error al querer actualizar")
        else:
            return render_template("mensaje.html", mensaje="Usuario actualizado con éxito")