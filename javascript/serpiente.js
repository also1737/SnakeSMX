class Serpiente {

    constructor(cabezaX, cabezaY, jugador, color) {

        // posición de la cabeza de la serpiente
        this.cabezaX = cabezaX;
        this.cabezaY = cabezaY;

        if (jugador == 1){
            this.movimientoX = 1;
        } else {
            this.movimientoX = -1;
        }

        // dirección en la que se mueve
        
        this.movimientoY = 0;

        // longitud de la serpiente y puntuación
        this.longitud = 4;
        this.score = 0;

        // jugador 1 o 2
        this.tipo = jugador;
        this.color = color;

        // con esto comprobaremos colisiones
        this.muerto = false;

        // array que guarda el cuerpo de la serpiente
        this.bloques = this.empezar();

    }

    empezar() {

        // creamos array con la longitud especificada
        let bloques = new Array(this.longitud);

        // el array guardará las posiciones de todas sus partes (relativas a la cabeza)
        for (let i = 0; i < this.longitud; i++) {

            bloques[i] = {x: this.cabezaX - i * this.movimientoX, y: this.cabezaY};

        }

        // devolvemos el array
        return bloques;
    }

    // función que mueve la serpiente
    mover(tablero, manzana) {

        // guardamos una copia de la serpiente
        let bloques2 = [...this.bloques];

        // cambiamos la posición de la cabeza
        this.cabezaX += this.movimientoX;
        this.cabezaY += this.movimientoY;
        
        // comprobamos si la cabeza de la serpiente está fuera del tablero
        if (this.cabezaX < 0 || this.cabezaX > tablero.numeroColumnas -1 || this.cabezaY < 0 || this.cabezaY > tablero.numeroFilas - 1 ) { 
            
            // se muere, salimos de la función
            this.muerto = true;
            return;
        }

        // modificamos el array con esta nueva posición
        this.bloques[0] = {x: this.cabezaX, y: this.cabezaY};

        // utilizamos la copia de la serpiente para actualizar la serpiente
        for (let i = 0; i < this.longitud - 1; i++) {

            this.bloques[i + 1] = bloques2[i];

        }

        // guardamos la posición del último cubo de la serpiente
        let x = bloques2[bloques2.length - 1]["x"];
        let y = bloques2[bloques2.length - 1]["y"];
        
        // comprobamos qué es lo que hay delante de la serpiente
        switch (tablero.celdas[this.cabezaX][this.cabezaY].tipo) {
        
            // el bloque de delante es parte de una serpiente o una pared, se acaba el juego
            case 1:
            case 2:
            case 4:
                this.muerto = true;
                break;

            // el bloque de delante es una manzana, aumentamos longitud, puntuación y movemos la manzana 
            case 3:
                this.longitud++;
                this.score++;
                manzana.mover(tablero.numeroFilas,tablero.numeroColumnas, tablero.celdas);
                break;
        
        }

        // borramos el último cubo de la serpiente
        tablero.celdas[x][y].tipo = 0;
        this.dibujar(tablero.celdas);

    }

    // función que dibuja la serpiente en el tablero
    dibujar(tablero) {

        /*this.color += 1;

        if(this.color > 360) this.color = 0;*/

        let x = 0;
        let y = 0;

        // iteramos el array de la serpiente
        for (let i = 0; i < this.bloques.length; i++) {

            // dibujamos los bloques de la serpiente en el array
            x = this.bloques[i]["x"];
            y = this.bloques[i]["y"];

            tablero[x][y].tipo = this.tipo;
            tablero[x][y].color = this.color;//"hsl(" + (this.color - i) + ", 100%, 50%)";
        }

    }

    // función que comprueba qué teclas se han presionado
    teclasPresionadas(tecla, teclas) {


        switch (tecla) {

            case teclas[0]:
            
                if (this.movimientoY != 1) this.movimientoY = -1;
                this.movimientoX = 0;
                break;

            case teclas[1]:
                this.movimientoY = 0;
                if (this.movimientoX != - 1) this.movimientoX = 1;
                break;

            case teclas[2]:
            
                if (this.movimientoY != -1) this.movimientoY = 1;
                this.movimientoX = 0;
                break;

            case teclas[3]:
                this.movimientoY = 0;
                if (this.movimientoX != 1) this.movimientoX = -1;
                break;

        }
        
    }


    // función que muestra los puntos de la serpiente en la esquina del canvas
    mostrarPuntos(x, y){

        let texto = "Score: " + this.score;

        ctx.font = "30px Arial";
        ctx.fillStyle = "#fff";
        ctx.fillText(texto, x, y);

    }

}