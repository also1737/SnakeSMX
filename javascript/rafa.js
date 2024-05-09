class Serpiente {

    constructor(cabezaX, cabezaY) {

        this.cabezaX = cabezaX;
        this.cabezaY = cabezaY;
        this.longitud = 10;
        this.bloques = new Array(this.longitud);

    }

    empezar() {

        let off = 0;

        for (let i = 0; i < this.longitud; i++) {

            this.bloques[i] = {x: this.cabezaX - off, y: this.cabezaY};
            off++;

        }

        console.log(this.bloques);

    }


    mover(x, y, tablero) {

        let bloques2 = [...this.bloques];

        console.log("bloques2:",bloques2);

        this.cabezaX += x;
        this.cabezaY += y;

        this.bloques[0] = {x: this.cabezaX, y: this.cabezaY,};

        for (let i = 0; i < this.longitud - 1; i++) {

            this.bloques[i + 1] = bloques2[i];

        }

        console.log("bloques:",this.bloques);

        x = bloques2[this.longitud - 1]["x"];
        y = bloques2[this.longitud - 1]["y"];

        tablero[x][y].tipo = 0;

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