class Cubo {

    constructor(x,y,tamano,tipo) {

        this.x = x;
        this.y = y;
        this.tamano = tamano;
        this.tipo = tipo;

        if (tipo==0) {
            this.color = "#000";
        } else {
            this.color = "#0f0";
        }

    }
    
    dibujar() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
        ctx.stroke();
    }

}