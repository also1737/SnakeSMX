
let arriba = false;
let derecha = true;
let abajo = false;
let izquierda = false;

var c = document.getElementById("juego");
var ctx = c.getContext("2d");

var tablerito = new Tablero(c.height,c.width,25);
var rafa = new Serpiente(15,12);
var manzana = new Manzana (35,12,25);

rafa.empezar();

var x = 15

function bucleJuego() {

    rafa.bloques[0]["x"] = x;
    manzana.anadirArray(tablerito.celdas);
    rafa.dibujar(tablerito.celdas);
    tablerito.dibujar();

    x++;

}

var bucle = window.setInterval(bucleJuego, 100);

console.log(rafa.bloques);

window.addEventListener("keydown");

function teclasPresionadas() {





}
