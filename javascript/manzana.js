class Manzana extends Cubo {
    
    constructor (x,y,tamano) {
        super (x,y,tamano);
        this.color = "";
        this.Xantes = 0;
        this.Yantes = 0;
    }

    anadirArray(tablero) {

        tablero[this.Xantes][this.Yantes].tipo = 0;
        tablero[this.x][this.y].tipo = 2;

    }

    mover (alto, ancho) {
        
        this.Xantes = this.x;
        this.Yantes = this.y;

        this.x = Math.floor(Math.random() * ancho);
        this.y = Math.floor(Math.random() * alto);

    }
    

      
}
