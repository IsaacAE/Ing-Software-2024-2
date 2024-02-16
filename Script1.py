import random

# Clase que simula a un jugador de tenis
class Jugador:
    def __init__(self, nombre):
        self.nombre = nombre
        self.puntos = 0
        self.juegos = 0
        self.sets = 0
        self.adv = False
    # Metodos setters y getters
    def getNombre(self):
        return self.nombre
    
    def anotacion(self):
        self.puntos += 1

    def getPuntos(self):
        return self.puntos
    
    def juego(self):
        self.juegos += 1

    def getJuegos(self):  
        return self.juegos
    
    def ganarSet(self):
        self.sets += 1

    def getSets(self):
        return self.sets
    
    def limpiarPuntos(self):
        self.puntos = 0
    
    def limpiarJuegos(self):
        self.juegos = 0

    def getAdv(self):
        return self.adv
    
    def setAdv(self, valor):
        self.adv = valor

# Funcion para imprimir el marcador de los puntos   
def marcador_puntos(nombre, puntos):
    if puntos == 0:
        print(nombre, ": 0")
    elif puntos == 1:
        print(nombre, ": 15")
    elif  puntos  == 2:
        print(nombre, ": 30")
    elif puntos >= 3:
        print(nombre, ": 40")
   
# Funcion para determinar si se debe hacer el cambio de cancha
def cambiarCancha(jugador1, jugador2):
    numJuegos = jugador1.getJuegos() + jugador2.getJuegos()
    return numJuegos % 2 != 0

# Funcion para pedir el anotador que marcara el punto
def pedir_anotador(jugador1, jugador2):
    while True:
        try:
            nombre_anotador = input("Elige la persona que marcara el punto: ({} o {}): ".format(jugador1.nombre, jugador2.nombre))
            if nombre_anotador == jugador1.getNombre() or nombre_anotador == jugador2.getNombre():
                return nombre_anotador
            else:
                print("Error: El nombre no coincide con ningun jugador. Por favor, intentalo de nuevo.")
        except Exception as e:
            print("Error:", e)

# Funcion para jugar por un punto del partido
def jugarPunto(jugador1, jugador2):
    nombre_anotador = pedir_anotador(jugador1, jugador2)
    print("Anoto el jugador: "+ nombre_anotador)
    print("\nAhora el marcador de puntos es: ")

    if nombre_anotador == jugador1.getNombre():
        jugador1.anotacion()
    elif nombre_anotador == jugador2.getNombre():
        jugador2.anotacion()
   
    # Casos para cuando ambos jugadores llegan a 40 puntos, donde se determina la ventaja
    if jugador1.getPuntos() >= 3 and jugador2.getPuntos() >= 3:
        if jugador1.getPuntos()==3 and jugador2.getPuntos()==3:
            marcador_puntos(jugador1.getNombre(), jugador1.getPuntos())
            marcador_puntos(jugador2.getNombre(), jugador2.getPuntos())
        elif jugador1.getAdv() and jugador1.getNombre() != nombre_anotador:
            jugador1.setAdv(False)
            jugador2.setAdv(False)
            marcador_puntos(jugador1.getNombre(), jugador1.getPuntos())
            marcador_puntos(jugador2.getNombre(), jugador2.getPuntos())
        elif jugador2.getAdv() and jugador2.getNombre() != nombre_anotador:
            jugador1.setAdv(False)
            jugador2.setAdv(False)
            marcador_puntos(jugador1.getNombre(), jugador1.getPuntos())
            marcador_puntos(jugador2.getNombre(), jugador2.getPuntos())
        elif jugador1.getNombre() == nombre_anotador:
             print("{} - Adv".format(jugador1.getNombre()))
             jugador1.setAdv(True)
             jugador2.setAdv(False)
             marcador_puntos(jugador2.getNombre(), jugador2.getPuntos())
        else:
            marcador_puntos(jugador1.getNombre(), jugador1.getPuntos())
            print("{} - Adv".format(jugador2.getNombre()))
            jugador1.setAdv(False)
            jugador2.setAdv(True)
    
         
    return nombre_anotador

# Funcion para jugar un juego, en cada uno se solicita el jugar por un punto hasta obtener un ganador
def jugarJuego(jugador1,jugador2):
    
    jugador1.limpiarPuntos()
    jugador2.limpiarPuntos()
    jugador1.setAdv(False)
    jugador2.setAdv(False)
    while True:
        jugador1Adv = jugador1.getAdv()
        jugador2Adv = jugador2.getAdv()
        ganador_punto = jugarPunto(jugador1, jugador2)
        
        if (jugador1.getPuntos() >= 3 or jugador2.getPuntos()  >= 3) :
            if(jugador1Adv and ganador_punto==jugador1.getNombre()):
                return jugador1.getNombre()
            elif (jugador2Adv and ganador_punto==jugador2.getNombre()):
                return jugador2.getNombre()
            elif jugador1.getPuntos() >= 4 and jugador2.getPuntos()<3: 
                return jugador1.getNombre()
            elif jugador2.getPuntos() >= 4 and jugador1.getPuntos()<3:
                return jugador2.getNombre()
        if jugador1.getPuntos() <= 3 and jugador2.getPuntos() <= 3 and (jugador1.getPuntos() != 3 or jugador2.getPuntos() != 3):
            marcador_puntos(jugador1.getNombre(), jugador1.getPuntos())
            marcador_puntos(jugador2.getNombre(), jugador2.getPuntos())

# Funcion para sleccionar el jugador que hara el saque
def elegirJugadorSaque(jugador1, jugador2, ultimo_saque=None):
    jugadores = [jugador1, jugador2]

    # Asegurarse de que el jugador seleccionado para el saque sea diferente al ultimo
    if ultimo_saque is not None:
        jugadores.remove(ultimo_saque)

    jugador_saque = random.choice(jugadores)
    print("El jugador que saca este juego es:", jugador_saque.getNombre())
    return jugador_saque

# Funcion que imprime el marcador de los juegos
def marcador_Juegos(jugador1, jugador2):
    print("### Marcador de juego ###")
    print("{}: {}".format(jugador1.getNombre(), jugador1.getJuegos()))
    print("{}: {}".format(jugador2.getNombre(), jugador2.getJuegos()))

# Funcion que imprime el marcador de los sets
def marcador_Sets(jugador1, jugador2):
    print("### Marcador de sets ###")
    print("{}: {}".format(jugador1.getNombre(), jugador1.getSets()))
    print("{}: {}".format(jugador2.getNombre(), jugador2.getSets()))

# Funcion para jugar un set, se jugan juegos hasta determinar un ganador
def jugarSet(jugador1, jugador2, jugador_saque):
    jugador_saque= elegirJugadorSaque(jugador1, jugador2,jugador_saque)  
    while True:
        
        ganador_juego = jugarJuego(jugador1, jugador2)
        if ganador_juego == jugador1.getNombre():
            ("El ganador del juego es: " + jugador1.getNombre())
            jugador1.juego()
        else:
            jugador2.juego()
            ("El ganador del juego es: " + jugador2.getNombre())
        
        marcador_Juegos(jugador1,jugador2)

        cambio_cancha = cambiarCancha(jugador1, jugador2)
        if cambio_cancha:
            print("Se realiza cambio de cancha")
       
        
        

        if jugador1.juegos >= 6 and jugador1.juegos >= jugador2.juegos + 2:
            return jugador1.getNombre()
        elif jugador2.juegos >= 6 and jugador2.juegos >= jugador1.juegos + 2:
            return jugador2.getNombre()  
        jugador_saque= elegirJugadorSaque(jugador1, jugador2,jugador_saque)  

# Funciona princiapl donde se lleva a cabo la simulacion del juego 
def main():
    while True:
        try:
            nombre1 = input("Ingresa el nombre del jugador 1: ")
            nombre2 = input("Ingresa el nombre del jugador 2: ")

        # Verificar si los nombres son iguales
            if nombre1 == nombre2:
            # Lanzar una excepción personalizada si los nombres son iguales
                raise ValueError("Error: Los nombres no pueden ser iguales.")

        # Continuar con el resto del código si los nombres son diferentes
            break

        except ValueError as e:
            print(e)
    
    
    jugador1 = Jugador(nombre1)
    jugador2 = Jugador(nombre2)  
      
    jugadores = [jugador1, jugador2]

   

    jugador_saque = random.choice(jugadores)
    while jugador1.getSets() < 2 and jugador2.getSets() < 2: #El juego termina cuando uno de los jugadores llegue a 3 sets
        
        ganador_set = jugarSet(jugador1,jugador2,jugador_saque)
        if ganador_set == jugador1.getNombre():
            jugador1.ganarSet()
        else: 
            jugador2.ganarSet()
        print("El ganador del set es: " + ganador_set)
        marcador_Sets(jugador1,jugador2)
        jugador1.limpiarJuegos()
        jugador2.limpiarJuegos()
        

    if jugador1.getSets() > jugador2.getSets():
        print("¡El ganador del juego es {}!".format(jugador1.nombre))
    else:
        print("¡El ganador del juego es {}!".format(jugador2.nombre)) 

    

if __name__ == '__main__':
    main()  
