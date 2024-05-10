class Manzana extends Cubo {
    
    constructor (x,y,tamano,tablero) {
        super (x,y,tamano);
        this.color = "";
        this.Xantes = 0;
        this.Yantes = 0;

        this.anadirArray(tablero);
    }

    anadirArray(tablero) {

        tablero[this.Xantes][this.Yantes].tipo = 0;
        tablero[this.x][this.y].tipo = 2;

    }

    mover (alto, ancho, tablero) {
        
        this.Xantes = this.x;
        this.Yantes = this.y;

        this.x = Math.floor(Math.random() * ancho);
        this.y = Math.floor(Math.random() * alto);
        this.anadirArray(tablero);
    }
    

      
}
