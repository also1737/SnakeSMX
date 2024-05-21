class Cubo {

    constructor(x,y,tamano,tipo) {
        
        //posicion
        this.x = x;
        this.y = y;

        //tamaño
        this.tamano = tamano;
        
        //tipo y color
        /* 
        tipo 0 = nada
        tipo 1 = serpiente (1J)
        tipo 2 = serpiente (2J)
        tipo 3 = manzana
        tipo 4 = pared
        */
        this.tipo = tipo;
        this.color = "";
    }
    
    dibujar() {

        //dibujamos cubo con su posición, tamaño y color
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
        ctx.stroke();
        
        
    }

}