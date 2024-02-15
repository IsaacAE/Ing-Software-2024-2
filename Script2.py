def contar_pasos_negativos(cadena):
    try:
        # Validar la entrada
        if not all(paso in ('D', 'U') for paso in cadena):
            raise ValueError("La entrada es incorrecta. Debe contener solo 'D' y 'U'.")

        contador = 0
        nivel_actual = 0

        for paso in cadena:
            if paso == 'D':
                nivel_actual -= 1
            elif paso == 'U':
                nivel_actual += 1

            if nivel_actual == 0 and paso == 'U':
                contador += 1

        return contador

    except ValueError as e:
        print(f"Error: {e}")

class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izquierda = None
        self.derecha = None

class Arbol:
    # Funciones privadas
   
    def __init__(self, valor=None):
        self.raiz = None
        if valor is not None:
            self.agregar(valor)

    

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

    # estas son las funciones que se deben llamar para agregar y obtener recorridos.

    def agregar(self, valor):
        self.agregar_nodo(self.raiz, valor)

    def recorrido_in_orden(self, nodo):
        elementos = []
        if nodo is not None:
            elementos.extend(self.recorrido_in_orden(nodo.izquierda))
            elementos.append(nodo.valor)
            elementos.extend(self.recorrido_in_orden(nodo.derecha))
        return elementos

    def recorrido_pre_orden(self, nodo):
        elementos = []
        if nodo is not None:
            elementos.append(nodo.valor)
            elementos.extend(self.recorrido_pre_orden(nodo.izquierda))
            elementos.extend(self.recorrido_pre_orden(nodo.derecha))
        return elementos

    def recorrido_post_orden(self, nodo):
        elementos = []
        if nodo is not None:
            elementos.extend(self.recorrido_post_orden(nodo.izquierda))
            elementos.extend(self.recorrido_post_orden(nodo.derecha))
            elementos.append(nodo.valor)
        return elementos

    
   
   


def main():
    # Crear un árbol sin valor inicial
    arbol = Arbol()

    # Agregar 10 elementos al árbol
    elementos = [1,2,3,4,5,6,7,8,9,10]
    for elemento in elementos:
        arbol.agregar(elemento)

    # Realizar los tres recorridos
    in_orden_resultado = arbol.recorrido_in_orden(arbol.raiz)
    pre_orden_resultado = arbol.recorrido_pre_orden(arbol.raiz)
    post_orden_resultado = arbol.recorrido_post_orden(arbol.raiz)

    # Imprimir los resultados
    print("Recorrido In Orden:", in_orden_resultado)
    print("Recorrido Pre Orden:", pre_orden_resultado)
    print("Recorrido Post Orden:", post_orden_resultado)

if __name__ == "__main__":
    main()