const c = document.getElementById("juego");
const ctx = c.getContext("2d");

var bucle = 0;

var dificultad, idmapa, posX, posY;

var color, tablerito, manzana, rafa1, paredes, mapa;

var TeclasFlechas = ["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"];
var TeclasWASD = ["KeyW","KeyD","KeyS","KeyA"];

/*mapa = [
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000111111111",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "11111111000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000111111111",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "11111111000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000111111111",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000"
];/*
[
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000011111000011111000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000010000000000001000000",
    "00000011111000011111000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000",
    "00000000000000000000000000"
];*/

function empezar() {

    botonAjustes.style.display = "none";

    dificultad = ajustesDificultad();
    idmapa = ajustesMapa();


    posX = Math.floor((c.width / dificultad) / 2) - 4;
    posY = Math.floor((c.height / dificultad) / 2);

    //creamos tablero
    tablerito = new Tablero(c.height, c.width, dificultad, "#00001a");

    //leemos color de la serpiente para crearla
    leerColor();
    
    leerMapa();

    //creamos manzana
    manzana = new Manzana (posX + 7, posY, dificultad, tablerito.celdas);

    //empezamos bucle del juego
    bucle = window.setInterval(bucleJuego, (dificultad * 3));

}

//función principal del juego
function bucleJuego() {

    //movemos la serpiente
    rafa1.mover(tablerito, manzana);

    paredes.dibujar(tablerito.celdas);
    
    //dibujamos el tablero
    tablerito.dibujar();

    //comprobamos si la serpiente se ha muerto
    if (rafa1.muerto) {

        //ejecutamos la función de fin de juego
        tablerito.acabarJuego(rafa1.score);

        //subimos la puntuación a la BD
        subirPuntuacion();

        //borramos el bucle de juego
        clearInterval(bucle);

    }
    
    //mostramos la puntuación
    rafa1.mostrarPuntos();

}

//empezamos el juego al cargarse la página
empezar();

//creamos un evento que escucha a las teclas presionadas y ejecuta la función
window.addEventListener("keydown", function(event){ rafa1.teclasPresionadas(event.code, TeclasFlechas); });

//función que sube la puntuación final del usuario a la BD
function subirPuntuacion() {

    //sacamos la fecha actual
    let d = new Date();
    let año = String(d.getFullYear());
    let mes = String(d.getMonth() + 1);
    let dia = String(d.getDate());

    //convertimos la fecha al formato que acepta mysql (YYYY-MM-DD)
    let Fecha = año + "-" + mes + "-" + dia;

    let dif;

    switch (dificultad) {

        case 20:
            dif = 3;
            break;
        case 25:
            dif = 2;
            break;
        case 30:
            dif = 1;
            break;

    }

    /*    REALIZAMOS LA PETICIÓN A PHP    */

    //creamos la petición
    var peticion = new XMLHttpRequest();

    //esto se ejecuta al abrir el archivo PHP
    peticion.onload = function() {

        //comprobamos que el archivo se ha abierto correctamente
        if (peticion.status == 200) {

            //la variable 'this.responseText' contiene los datos que ha devuelto el PHP
            console.log(peticion.responseText);

        }
    }

    //hacemos una petición post al archivo php pasando todas las variables
    peticion.open("POST", "/javascript/subir-puntuacion.php", true);
    peticion.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //variables post que pasamos
    peticion.send("puntos=" + rafa1.score + "&mapa=" + idmapa + "&fecha=" + Fecha + "&dif=" + dif);

}