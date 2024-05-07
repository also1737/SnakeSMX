class Tablero {

    constructor(alto,ancho, tamano) {
        this.alto = alto;
        this.ancho = ancho;
        this.crearMatriz(tamano); //matriz que contrendra las celdas del juego
        console.log(this.celdas);
    }

    crearMatriz(tamano){

        let numeroColumnas = this.ancho / tamano;
        let numeroFilas = this.alto / tamano;
        
        this.celdas = new Array(numeroColumnas);

        let x = 0;
        let y = 0;

        let tipo = 0;

        for (let i = 0; i < this.celdas.length; i++) {

            this.celdas[i] = new Array(numeroFilas);

            for (let j = 0; j < this.celdas[i].length; j++) {

                tipo = 0;

                if (x === 25 && y === 12) {
                    tipo = 1;
                }

                this.celdas[i][j] = new Cubo(x*tamano,y*tamano,tamano,tipo);
                y++;

            }

            x++;
            y = 0;

        }
            
    }

    dibujar() {

        for (let i = 0; i < this.celdas.length; i++) {

            for (let j = 0; j < this.celdas[i].length; j++) {

                this.celdas[i][j].dibujar();

            };

        };
    }

}
