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
                this.color = "#111111";
                break;
            case 1:
                this.color = "#5d9b2e";
                break;
            case 2:
                this.color = "#b30000";
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