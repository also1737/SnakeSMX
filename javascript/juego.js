
var movimientoX = 1;
var movimientoY = 0;
var tamano = 25;

var c = document.getElementById("juego");
var ctx = c.getContext("2d");

var tablerito = new Tablero(c.height,c.width,tamano);
var rafa = new Serpiente(15,12);
var manzana = new Manzana (35,12,tamano);

rafa.empezar();

var bucle = 0;

window.clearInterval(bucle);
bucle = window.setInterval(bucleJuego, 100);

function bucleJuego() {

    manzana.mover(tablerito.numeroFilas,tablerito.numeroColumnas,tamano);
    manzana.anadirArray(tablerito.celdas);
    rafa.mover(movimientoX, movimientoY);
    rafa.dibujar(tablerito.celdas);
    tablerito.dibujar();

}

console.log(rafa.bloques);

window.addEventListener("keydown", function(event){ teclasPresionadas(event.code); });

function teclasPresionadas(tecla) {

    console.log(tecla);

    switch (tecla) {

        case "ArrowUp":
            movimientoY = -1;
            movimientoX = 0;
            break;

        case "ArrowRight":
            movimientoY = 0;
            movimientoX = 1;
            break;

        case "ArrowDown":
            movimientoY = 1;
            movimientoX = 0;
            break;

        case "ArrowLeft":
            movimientoY = 0;
            movimientoX = -1;
            break;

    }

    console.log(movimientoX, movimientoY);

}
