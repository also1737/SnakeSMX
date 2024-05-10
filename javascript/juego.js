var tamano = 25;

var c = document.getElementById("juego");
var ctx = c.getContext("2d");

var tablerito = new Tablero(c.height,c.width,tamano);
var rafa = new Serpiente(15,12);
var manzana = new Manzana (35,12,tamano);

rafa.empezar();

var bucle = 0;

bucle = window.setInterval(bucleJuego, 100);

function bucleJuego() {

    if (rafa.comer(manzana)){
        manzana.mover(tablerito.numeroFilas,tablerito.numeroColumnas);
        rafa.aumentar();
        //clearInterval(bucle);
    }
    manzana.anadirArray(tablerito.celdas);
    rafa.mover(tablerito.celdas);
    rafa.dibujar(tablerito.celdas);
    tablerito.dibujar();
    puntos();

}

console.log(rafa.bloques);

window.addEventListener("keydown", function(event){ teclasPresionadas(event.code); });

function teclasPresionadas(tecla) {

    switch (tecla) {

        case "ArrowUp":
            rafa.movimientoY = -1;
            rafa.movimientoX = 0;
            break;

        case "ArrowRight":
            rafa.movimientoY = 0;
            rafa.movimientoX = 1;
            break;

        case "ArrowDown":
            rafa.movimientoY = 1;
            rafa.movimientoX = 0;
            break;

        case "ArrowLeft":
            rafa.movimientoY = 0;
            rafa.movimientoX = -1;
            break;

    }

}

function puntos(){

    let texto = "Score: "+rafa.score;

    ctx.font = "30px Arial";
    ctx.fillStyle = "#fff"
    ctx.fillText(texto, 10, 30);
}
