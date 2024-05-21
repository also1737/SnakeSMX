 class Mapa {

    constructor(alto, ancho, tamano, paredes) {

        this.color = "#f4f4f4";

        this.paredes = this.leerParedes(paredes);

        this.celdas;

        this.numeroFilas = alto / tamano;
        this.numeroColumnas = ancho / tamano;

        this.crearArray();

    }

    leerParedes(paredes) {

        let str = "";

        for (let i = 0; i < paredes.length; i++)  {

            str = str.concat(paredes[i]);

        }

        return str;
    }

    crearArray() {

        this.celdas = new Array(this.numeroColumnas);

        let indice = 0;

        for (let i = 0; i < this.celdas.length; i++) {

            this.celdas[i] = new Array(this.numeroFilas);

            for (let j = 0; j < this.celdas[i].length; j++) {

                this.celdas[i][j] = Number(this.paredes[indice]);

                indice++;

            }

        }

    }

    dibujar(tablero) {

        for (let i = 0; i < tablero.length; i++) {

            for (let j = 0; j < tablero[i].length; j++) {

                if (this.celdas[i][j] === 1) {
                    tablero[i][j].tipo = 4;
                    tablero[i][j].color = this.color;
                }

            }

        }

    }

}