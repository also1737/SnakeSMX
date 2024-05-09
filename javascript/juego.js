
var movimientoX = 1;
var movimientoY = 0;

var c = document.getElementById("juego");
var ctx = c.getContext("2d");

var tablerito = new Tablero(c.height,c.width,25);
var rafa = new Serpiente(15,12);
var manzana = new Manzana (35,12,25);

rafa.empezar();

var bucle = 0;

function empezarJuego(tecla) {

    if (tecla === "Enter") {

        window.clearInterval(bucle);
        bucle = window.setInterval(bucleJuego, 100);

    }

}

function pausarJuego(tecla) {

    if (tecla === "Space") {

        window.clearInterval(bucle);

    }

}

function bucleJuego() {

    manzana.anadirArray(tablerito.celdas);
    rafa.mover(movimientoX, movimientoY);
    rafa.dibujar(tablerito.celdas);
    tablerito.dibujar();

}

console.log(rafa.bloques);

window.addEventListener("keydown", function(event){ empezarJuego(event.code); });
window.addEventListener("keydown", function(event){ pausarJuego(event.code); });
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
