var c = document.getElementById("juego");
var ajustes = document.getElementById("ajustes");
var ctx = c.getContext("2d");
var bucle = 0;
var tamano = 25;
var color, tablerito, manzana, rafa1;

var TeclasFlechas = ["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"];

var TeclasWASD = ["KeyW","KeyD","KeyS","KeyA"];

//función que se encarga de leer el color de serpiente del usuario guardado en la BD
async function leerColor() {
 
    //creamos una promesa
    let promesa = new Promise(function(myResolve) {
        
        //creamos la petición
        var xhttp = new XMLHttpRequest();

        //hacemos una petición post al archivo php pasando todas las variables
        xhttp.open("GET", "/javascript/user.php");

        //esto se ejecuta cuando PHP responde a la petición
        xhttp.onload = function() {

            //si la petición se realiza correctamente, mostramos el contenido devuelto por el php
            if (xhttp.status == 200 && xhttp.responseText) {

                //esta variable contiene el color de la serpiente
                myResolve(xhttp.responseText);
            
            } else {

                //si el usuario no tiene color, la serpiente se pone verde por defecto
                myResolve("#5d9b2e");

            }

        }

        //realizamos petición
        xhttp.send();

    });

    //esperamos a la promesa, con esto nos aseguramos de no crear la serpiente antes de que el PHP responda con el color de la serpiente.
    color = await promesa;

    //creamos la serpiente
    rafa1  = new Serpiente(15,12,1,color);

}

function empezar() {

    //escondemos el botón de ajustes
    ajustes.style.display = "none";

    //creamos tablero
    tablerito = new Tablero(c.height,c.width,tamano,"#00001a");

    //leemos color de la serpiente
    leerColor();

    //creamos manzana
    manzana = new Manzana (35,12,tamano,tablerito.celdas);

    //empezamos bucle del juego
    bucle = window.setInterval(bucleJuego, 75);

}

//función principal del juego
function bucleJuego() {

    //movemos la serpiente
    rafa1.mover(tablerito, manzana);
    
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
    mostrarPuntos();

}

//empezamos el juego al cargarse la página
empezar();

//creamos un evento que escucha a las teclas presionadas y ejecuta la función
window.addEventListener("keydown", function(event){ rafa1.teclasPresionadas(event.code, TeclasWASD); });

//función que muestra los puntos de la serpiente en la esquina del canvas
function mostrarPuntos(){

    let texto = "Score: " + rafa1.score;

    ctx.font = "30px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText(texto, 10, 30);

}

//función que sube la puntuación final del usuario a la BD
function subirPuntuacion() {

    //sacamos la fecha actual
    let d = new Date();
    let año = String(d.getFullYear());
    let mes = String(d.getMonth() + 1);
    let dia = String(d.getDate());

    //convertimos la fecha al formato que acepta mysql (YYYY-MM-DD)
    let Fecha = año + "-" + mes + "-" + dia;

    
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
    peticion.send("puntos=" + rafa1.score + "&mapa=2&fecha=" + Fecha + "&dif=2");

}