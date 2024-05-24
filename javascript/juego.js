const c = document.getElementById("juego");
const ctx = c.getContext("2d");

var bucle = 0;

var dificultad, idmapa, posX, posY;

var color, tablerito, manzana, rafa1, rafa2, paredes, mapa;

var TeclasFlechas = ["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"];
var TeclasWASD = ["KeyW","KeyD","KeyS","KeyA"];

function empezar() {

    ctx.clearRect(0,0,c.width,c.height);

    botonAjustes.style.display = "none";

    dificultad = ajustesDificultad();
    idmapa = ajustesMapa(dificultad);

    posX = Math.floor((c.width / dificultad) / 2);
    posY = Math.floor((c.height / dificultad) / 2);

    //creamos tablero
    tablerito = new Tablero(c.height, c.width, dificultad, "#00001a");

    //leemos color de la serpiente para crearla
    leerColor();
    
    //leemos el mapa seleccionado
    leerMapa();

    if ( ajustesJugadores() == 2 ) {

        rafa2 = new Serpiente(posX + 10, posY, 2, "#5d9b2e");

    } else {

        rafa2 = null;

    }

    //creamos manzana
    manzana = new Manzana (posX, posY, dificultad, tablerito.celdas);

    //empezamos bucle del juego
    bucle = window.setInterval(bucleJuego, (dificultad * 3));

}

//función principal del juego
function bucleJuego() {

    //movemos la serpiente
    rafa1.mover(tablerito, manzana);

    if (rafa2) {

        rafa2.mover(tablerito, manzana);

    }

    paredes.dibujar(tablerito.celdas);
    
    //dibujamos el tablero
    tablerito.dibujar();

    //comprobamos si la serpiente se ha muerto
    if (rafa1.muerto || (rafa2 && rafa2.muerto)) {

        //ejecutamos la función de fin de juego
        tablerito.acabarJuego(rafa1.score);

        //subimos la puntuación a la BD
        subirPuntuacion();

        //borramos el bucle de juego
        clearInterval(bucle);

    }
    
    //mostramos la puntuación de la(s) serpiente(s)
    rafa1.mostrarPuntos(10, 30);
    if (rafa2) rafa2.mostrarPuntos(c.width - 120, 30);

}

//empezamos el juego al cargarse la página
empezar();

//creamos un evento que escucha a las teclas presionadas y ejecuta la función
window.addEventListener("keydown", function(event){ 
    
    rafa1.teclasPresionadas(event.code, TeclasFlechas); 

    if (rafa2) rafa2.teclasPresionadas(event.code, TeclasWASD);

    if (event.code === "Space" && (rafa1.muerto || (rafa2 && rafa2.muerto))) empezar();

});