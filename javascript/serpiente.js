class Serpiente {

    constructor(cabezaX, cabezaY) {

        //posición de la cabeza de la serpiente
        this.cabezaX = cabezaX;
        this.cabezaY = cabezaY;

        //dirección en la que se mueve
        this.movimientoX = 1;
        this.movimientoY = 0;

        //longitud
        this.longitud = 3;
        this.score = 0;

        //con esto comprobaremos colisiones
        this.muerto = false;

        //array que guarda el cuerpo de la serpiente
        this.bloques = this.empezar();

    }

    empezar() {

        //creamos array con la longitud especificada
        let bloques = new Array(this.longitud);

        //el array guardará las posiciones de todas sus partes (relativas a la cabeza)
        for (let i = 0; i < this.longitud; i++) {

            bloques[i] = {x: this.cabezaX - i, y: this.cabezaY};

        }

        //devolvemos el array
        return bloques;
    }


    mover(tablero, manzana) {

        //guardamos una copia de la serpiente
        let bloques2 = [...this.bloques];

        //cambiamos la posición de la cabeza
        this.cabezaX += this.movimientoX;
        this.cabezaY += this.movimientoY;

        //modificamos el array con esta nueva posición
        this.bloques[0] = {x: this.cabezaX, y: this.cabezaY};

        //utilizamos la copia de la serpiente para actualizar la serpiente
        for (let i = 0; i < this.longitud - 1; i++) {

            this.bloques[i + 1] = bloques2[i];

        }

        // guardamos la posición del último cubo de la serpiente
        let x = bloques2[bloques2.length - 1]["x"];
        let y = bloques2[bloques2.length - 1]["y"];
        
        //comprobamos qué es lo que hay delante de la serpiente
        switch (tablero.celdas[this.cabezaX][this.cabezaY].tipo) {
        
            //el bloque de delante es parte de la serpiente, se acaba el juego
            case 1:
                this.muerto = true;
                break;

            //el bloque de delante es una manzana, aumentamos longitud 
            case 2:
                this.longitud++;
                this.score++;
                manzana.mover(tablero.numeroFilas,tablero.numeroColumnas, tablero.celdas);
                break;
        
        }
            if (this.x < 0 || this.x + this.tamano > c.width || this.y < 0 || this.y + this.tamano > c.height) { 
                this.muerto = true;
            }

        //borramos el último cubo de la serpiente
        tablero.celdas[x][y].tipo = 0;
        this.dibujar(tablero.celdas);

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