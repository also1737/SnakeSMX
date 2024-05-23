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

        for (let i = 0; i < this.celdas.length; i++) {

            for (let j = 0; j < this.celdas[i].length; j++) {

                if (this.celdas[i][j].tipo == 0) {
                    this.celdas[i][j].color = this.color;
                }
                this.celdas[i][j].dibujar();

            };

        };
    }

    acabarJuego(puntos) {

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

        texto = "Puntuación final: " + puntos;

        ctx.font = "40px Arial";
        ctx.fillStyle = "#fff"
        ctx.fillText(texto, 520, 350);

    }

}
