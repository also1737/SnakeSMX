class Manzana extends Cubo {
    
    constructor (x,y,tamano) {
        super (x,y,tamano);
        this.color = "";
    }

    anadirArray(tablero) {

        let x = this.x;
        let y = this.y;

        tablero[x][y].tipo = 2;

    }

    mover (alto, ancho) {
        
        this.x = Math.floor(Math.random() * ancho);
        this.y = Math.floor(Math.random() * alto);
        
    }
    

      
}
