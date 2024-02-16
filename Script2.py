def contar_valles(cadena):
    try:
        # Validar la entrada
        if not all(paso in ('D', 'U') for paso in cadena):
            raise ValueError("La entrada es incorrecta. Debe contener solo 'D' y 'U'.")

        contador = 0
        nivel_actual = 0
        # Contamos los niveles bajados o subidos
        for paso in cadena:
            if paso == 'D':
                nivel_actual -= 1
            elif paso == 'U':
                nivel_actual += 1
            #Es un valle si dimos un paso arriba y justo llegamos al nivel del mar
            if nivel_actual == 0 and paso == 'U':
                contador += 1

        return contador

    except ValueError as e:
        print(f"Error: {e}")

# Clase para simular el nodo de un arbol
class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izquierda = None
        self.derecha = None
        
# Clase para simular el comportamiento de un arbol binario
class Arbol:
    # Funciones privadas
   
    def __init__(self, valor=None):
        self.raiz = None
        if valor is not None:
            self.agregar(valor)

    
# Funcion para agregar un nodo

    def agregar_nodo(self, nodo, valor):
        if self.raiz is None:
            self.raiz = Nodo(valor)
        elif valor < nodo.valor:
            if nodo.izquierda is None:
                nodo.izquierda = Nodo(valor)
            else:
                self.agregar_nodo(nodo.izquierda, valor)
        else:
            if nodo.derecha is None:
                nodo.derecha = Nodo(valor)
            else:
                self.agregar_nodo(nodo.derecha, valor)

    # Estas son las funciones que se deben llamar para agregar y obtener recorridos.

    # Agregar elementos al arbol
    def agregar(self, valor):
        self.agregar_nodo(self.raiz, valor)
    
    # Obtener la lista con los elementos en el recorrido in-orden
    def recorrido_in_orden(self, nodo):
        elementos = []
        if nodo is not None:
            elementos.extend(self.recorrido_in_orden(nodo.izquierda))
            elementos.append(nodo.valor)
            elementos.extend(self.recorrido_in_orden(nodo.derecha))
        return elementos

    # Obtener la lista de elementos con recorrido pre-orden
    def recorrido_pre_orden(self, nodo):
        elementos = []
        if nodo is not None:
            elementos.append(nodo.valor)
            elementos.extend(self.recorrido_pre_orden(nodo.izquierda))
            elementos.extend(self.recorrido_pre_orden(nodo.derecha))
        return elementos

    # Obtener la lista de elementos del arbol con recorrido post-orden
    def recorrido_post_orden(self, nodo):
        elementos = []
        if nodo is not None:
            elementos.extend(self.recorrido_post_orden(nodo.izquierda))
            elementos.extend(self.recorrido_post_orden(nodo.derecha))
            elementos.append(nodo.valor)
        return elementos

    
   
   



