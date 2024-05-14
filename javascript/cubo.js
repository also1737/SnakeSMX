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
        */
        this.tipo = tipo;
        this.color = "";
    }
    
    dibujar() {

        //decidimos que color tendrá el cubo a partir de su tipo
        switch (this.tipo) {

            //nada = gris
            case 0:
                this.color = "#111111";
                break;

            //serpiente = verde
            case 1:
                this.color = "#4FE39C";
                break;

            //serpiente = roja
            case 2:
                this.color = "#0099cc";
                break;

            //manzana
            case 3:
                this.color = "#b30000";
                break;

            //otro = blanco
            default:
                this.color = "#fff";
        }

        //dibujamos cubo con su posición, tamaño y color
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
        ctx.stroke();
        
        
    }

}