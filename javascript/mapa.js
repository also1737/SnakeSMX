 class Mapa {

    constructor(alto, ancho, tamano, paredes) {

        // el color de las paredes
        this.color = "#f4f4f4";

        /*
        esta variable contiene la disposición de las paredes
        
        la disposición de las paredes se guarda en una cadena de ceros y unos
        del tipo: 00000111101010000001111100000
        donde un cero representa un espacio vacío y un uno representa
        una pared
        */
        this.paredes = paredes;

        // la cantidad de celdas por fila y columna
        this.numeroFilas = Math.floor(alto / tamano);
        this.numeroColumnas = Math.floor(ancho / tamano);

        // el array que guardará la posición de todas las paredes para dibujarlas en el tablero
        this.celdas = this.crearArray();;

    }

    // función que crea el array
    crearArray() {

        // creamos un array de la longitud que sea
        let celdas = new Array(this.numeroColumnas);

        // usaremos esta variable para ir carácter por carácter en la cadena de paredes
        let indice = 0;

        // iteramos sobre el array
        for (let i = 0; i < celdas.length; i++) {

            // cada posición del array es un nuevo array
            celdas[i] = new Array(this.numeroFilas);

            for (let j = 0; j < celdas[i].length; j++) {

                // cada posición del array guarda un uno o un cero (pared o vacío)
                // como this.paredes es un string, utilizamos Number() para convertirlo en un número
                celdas[i][j] = Number(this.paredes[indice]);
                indice++;

            }

        }

        // devolvemos el array
        return celdas;

    }

    // función que dibuja las paredes en el tablero
    dibujar(tablero) {

        // iteramos sobre el tablero
        for (let i = 0; i < tablero.length; i++) {
            for (let j = 0; j < tablero[i].length; j++) {

                // si en la posición actual hay un uno, dibujamos una pared
                if (this.celdas[i][j] === 1) {
                    tablero[i][j].tipo = 4;
                    tablero[i][j].color = this.color;
                }

            }
        }

    }

}