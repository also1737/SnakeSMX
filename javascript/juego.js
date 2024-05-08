
var c = document.getElementById("juego");
var ctx = c.getContext("2d");

var tablerito = new Tablero(c.height,c.width,25);
var rafa = new Serpiente(15,12);
var manzana = new Manzana (25,12,25);

rafa.empezar();
rafa.dibujar(tablerito.celdas);
tablerito.dibujar();
manzana.dibujar();



