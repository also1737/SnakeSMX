var tamano = 25;

var c = document.getElementById("juego");
var ctx = c.getContext("2d");

var tablerito = new Tablero(c.height,c.width,tamano);
var rafa1 = new Serpiente(15,12,1);
var rafa2 = new Serpiente(15,15,2);
var manzana = new Manzana (35,12,tamano,tablerito.celdas);

var bucle = 0;

bucle = window.setInterval(bucleJuego, 75);

function bucleJuego() {

    rafa1.mover(tablerito, manzana);
    rafa2.mover(tablerito, manzana);
    
    tablerito.dibujar();

    if (rafa1.muerto) {

        tablerito.acabarJuego(rafa1.score);
        clearInterval(bucle);

    }
    if (rafa2.muerto) {

        tablerito.acabarJuego(rafa2.score);
        clearInterval(bucle);

    }
    
    puntos();
    

}

window.addEventListener("keydown", function(event){ teclasPresionadas(event.code); });

function teclasPresionadas(tecla) {

    switch (tecla) {

        case "ArrowUp":
            
            if (rafa1.movimientoY != 1) rafa1.movimientoY = -1;
            rafa1.movimientoX = 0;
            break;

        case "ArrowRight":
            rafa1.movimientoY = 0;
            if (rafa1.movimientoX != - 1) rafa1.movimientoX = 1;
            break;

        case "ArrowDown":
            
            if (rafa1.movimientoY != -1) rafa1.movimientoY = 1;
            rafa1.movimientoX = 0;
            break;

        case "ArrowLeft":
            rafa1.movimientoY = 0;
            if (rafa1.movimientoX != 1) rafa1.movimientoX = -1;
            break;
    
    

        case "KeyW":
            
            if (rafa2.movimientoY != 1) rafa2.movimientoY = -1;
            rafa2.movimientoX = 0;
            break;

        case "KeyD":
            rafa2.movimientoY = 0;
            if (rafa2.movimientoX != - 1) rafa2.movimientoX = 1;
            break;

        case "KeyS":
            
            if (rafa2.movimientoY != -1) rafa2.movimientoY = 1;
            rafa2.movimientoX = 0;
            break;

        case "KeyA":
            rafa2.movimientoY = 0;
            if (rafa2.movimientoX != 1) rafa2.movimientoX = -1;
            break;
    }

}

function puntos(){

    let texto = "Score: " + rafa1.score;

    ctx.font = "30px Arial";
    ctx.fillStyle = "#fff"
    ctx.fillText(texto, 10, 30);
}
