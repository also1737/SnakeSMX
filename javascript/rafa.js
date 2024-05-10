class Serpiente {

    constructor(cabezaX, cabezaY) {

        this.cabezaX = cabezaX;
        this.cabezaY = cabezaY;
        this.movimientoX = 1;
        this.movimientoY = 0;
        this.longitud = 3;
        this.score = 0;
        this.bloques = new Array(this.longitud);

    }

    empezar() {

        for (let i = 0; i < this.longitud; i++) {

            this.bloques[i] = {x: this.cabezaX - i, y: this.cabezaY};

        }

        console.log(this.bloques);

    }


    mover(tablero) {

        let bloques2 = [...this.bloques];

        
        this.cabezaX += this.movimientoX;
        this.cabezaY += this.movimientoY;

        this.bloques[0] = {x: this.cabezaX, y: this.cabezaY};

        for (let i = 0; i < this.longitud - 1; i++) {

            this.bloques[i + 1] = bloques2[i];

        }

        let x = bloques2[this.longitud - 1]["x"];
        let y = bloques2[this.longitud - 1]["y"];
        //come
        if((tablero[this.cabezaX + this.movimientoX][this.cabezaY + this.movimientoY].tipo != 2)){
            tablero[x][y].tipo = 0;
        }
        
        dibujar(tablero);
    }

    comer(manzana) {
        
        let come = false;
        
        if (this.cabezaX === manzana.x && this.cabezaY === manzana.y) {
            come = true;
            this.score++;
        }

        return come;

    }

    aumentar() {

        let lastX = this.bloques[this.bloques.length - 1]["x"];
        let lastY = this.bloques[this.bloques.length - 1]["y"];

        this.bloques.push({x: lastX, y: lastY});

        this.longitud++;

        console.log(this.bloques);

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