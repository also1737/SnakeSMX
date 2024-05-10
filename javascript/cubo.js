class Cubo {

    constructor(x,y,tamano,tipo) {

        this.x = x;
        this.y = y;
        this.tamano = tamano;
        this.tipo = tipo;
        this.color = "";
        this.imagen = new Image();

    }
    
    dibujar() {

        switch (this.tipo) {

            case 0:
                this.color = "#000";
                break;
            case 1:
                this.color = "#0f0";
                break;
            case 2:
                this.color = "#f00";
                break;
            default:
                this.color = "#fff";
        }

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
        ctx.stroke();
        
        
    }

}