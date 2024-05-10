class Tablero {

    constructor(alto,ancho, tamano) {
        this.numeroFilas = alto / tamano;
        this.numeroColumnas = ancho / tamano;
        this.crearMatriz(tamano); //matriz que contrendra las celdas del juego
        console.log(this.celdas);
    }

    crearMatriz(tamano){
        
        this.celdas = new Array(this.numeroColumnas);

        let x = 0;
        let y = 0;

        let tipo = 0;

        for (let i = 0; i < this.celdas.length; i++) {

            this.celdas[i] = new Array(this.numeroFilas);

            for (let j = 0; j < this.celdas[i].length; j++) {

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

    acabarJuego(puntos) {

        for (let i = 0; i < this.celdas.length; i++) {

            for (let j = 0; j < this.celdas[i].length; j++) {

                this.celdas[i][j].tipo = 0;
                this.celdas[i][j].dibujar();

            };

        };

        let texto = "Fin del juego";

        ctx.font = "80px Arial";
        ctx.fillStyle = "#fff"
        ctx.fillText(texto, 450, 250);

        texto = "Puntuación final: " + puntos;

        ctx.font = "40px Arial";
        ctx.fillStyle = "#fff"
        ctx.fillText(texto, 520, 340);

    }

}
