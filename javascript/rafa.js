class Serpiente {

    constructor(cabezaX, cabezaY) {

        this.cabezaX = cabezaX;
        this.cabezaY = cabezaY;
        this.movimientoX = 1;
        this.movimientoY = 0;
        this.longitud = 3;
        this.score = 0;
        this.muerto = false;
        this.bloques = this.empezar();

    }

    empezar() {

        let bloques = new Array(this.longitud);

        for (let i = 0; i < this.longitud; i++) {

            bloques[i] = {x: this.cabezaX - i, y: this.cabezaY};

        }

        console.log(bloques);

        return bloques;
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
        

        switch (tablero[this.cabezaX][this.cabezaY].tipo) {
        
            case 1:
                this.muerto = true;
                break;
            case 2:
                this.longitud++;
                break;
        
        }

        tablero[x][y].tipo = 0;
        this.dibujar(tablero);
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