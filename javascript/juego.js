
var c = document.getElementById("juego");
var ctx = c.getContext("2d");

var tablerito = new Tablero(c.height,c.width,25);

function repetir() {
    tablerito.dibujar();
}

var juego = window.setInterval(repetir,100);

