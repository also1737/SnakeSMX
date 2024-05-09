class Serpiente {

    constructor(cabezaX, cabezaY) {

        this.cabezaX = cabezaX;
        this.cabezaY = cabezaY;
        this.longitud = 3;
        this.bloques = new Array(this.longitud);

    }

    empezar() {

        let off = 0;

        for (let i = 0; i < this.longitud; i++) {

            this.bloques[i] = {x: this.cabezaX - off, y: this.cabezaY};
            off++;

        }

    }

    mover(x, y) {

        rafa.bloques[0]["x"] += x;
        rafa.bloques[0]["y"] += y;

    }

    dibujar(tablero) {

        let x = 0;
        let y = 0;

        for (let i = 0; i < this.bloques.length; i++) {

            x = this.bloques[i]["x"];
            y = this.bloques[i]["y"];

            tablero[x][y].tipo = 1;

        }

    }

}