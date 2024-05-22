class Manzana extends Cubo {
    
    constructor (x,y,tamano,tablero) {
        super (x,y,tamano); // sacamos posición y tamaño de la clase Cubo
        this.color = "#b30000";
        
        // estas variables guardarán la posición anterior de la manzana
        this.Xantes = 0;
        this.Yantes = 0;

        // la añadimos en su posición inicial
        this.anadirArray(tablero);
    }

    anadirArray(tablero) {

        // borramos la manzana de su posición anterior
        tablero[this.Xantes][this.Yantes].tipo = 0;

        // la movemos a su nueva posición
        tablero[this.x][this.y].tipo = 3;
        tablero[this.x][this.y].color = this.color;

    }

    mover (alto, ancho, tablero) {
        
        // guardamos su posición actual para borrarla luego
        this.Xantes = this.x;
        this.Yantes = this.y;

        // cambiamos la posición de la manzana
        do {

            // posición aleatoria
            this.x = Math.floor(Math.random() * ancho);
            this.y = Math.floor(Math.random() * alto);

        // si la posición escogida es parte de la serpiente, volvemos a escoger una posición
        } while (tablero[this.x][this.y].tipo == 1 || tablero[this.x][this.y].tipo == 4)
        
        // añadimos manzana al tablero
        this.anadirArray(tablero);
    }
    

      
}
