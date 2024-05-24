class Tablero {

    constructor(alto, ancho, tamano, color) {

        //cantidad de cubos que habrá por fila y columna
        this.numeroFilas = Math.floor(alto / tamano);
        this.numeroColumnas = Math.floor(ancho / tamano);
        
        //creamos la matriz que contendra las celdas de juego
        this.crearMatriz(tamano);

        this.color = color;

    }

    crearMatriz(tamano){
        
        //inicializamos matriz como array del mismo tamaño que el numero de columnas
        this.celdas = new Array(this.numeroColumnas);

        //posición del cubo
        let x = 0;
        let y = 0;

        //tipo del cubo 
        let tipo = 0;

        //iteramos sobre este array
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

        c.style="background-color: #f4f4f4;"

        for (let i = 0; i < this.celdas.length; i++) {

            for (let j = 0; j < this.celdas[i].length; j++) {

                if (this.celdas[i][j].tipo == 0) {
                    this.celdas[i][j].color = this.color;
                }
                this.celdas[i][j].dibujar();

            };

        };
    }

    acabarJuego() {

        for (let i = 0; i < this.celdas.length; i++) {

            for (let j = 0; j < this.celdas[i].length; j++) {

                this.celdas[i][j].tipo = 0;
                this.celdas[i][j].color = this.color;
                this.celdas[i][j].dibujar();

            };

        };

        botonAjustes.style.display = "block";

        let texto = "Fin del juego";

        ctx.font = "80px Arial";
        ctx.fillStyle = "#fff"
        ctx.fillText(texto, 450, 280);

        ctx.font = "40px Arial";

        if (!rafa2) {

            texto = "Puntuación final: " + rafa1.score;
            ctx.fillText(texto, 520, 350);

        } else {

            texto = "Puntuaciones finales";

            let jug1 = "Jugador 1: " + rafa1.score + " puntos"; 
            let jug2 = "Jugador 2: " + rafa2.score + " puntos";

            ctx.fillText(texto, 500, 350);

            ctx.font = "30px Arial";

            ctx.fillText(jug1, 550, 390);
            ctx.fillText(jug2, 550, 430);


        }

    }

}
