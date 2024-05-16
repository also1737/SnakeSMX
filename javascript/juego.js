var c = document.getElementById("juego");
var ajustes = document.getElementById("ajustes");
var ctx = c.getContext("2d");
var bucle = 0;
var tamano = 25;
var color, tablerito, manzana, rafa1;


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

    rafa1  = new Serpiente(15,12,1,color);

}

function empezar() {

    ajustes.style.display = "none";
    tablerito = new Tablero(c.height,c.width,tamano,"#00001a");
    leerColor();
    manzana = new Manzana (35,12,tamano,tablerito.celdas);

    bucle = window.setInterval(bucleJuego, 75);

}


empezar();

function bucleJuego() {

    rafa1.mover(tablerito, manzana);
    
    tablerito.dibujar();

    if (rafa1.muerto) {

        tablerito.acabarJuego(rafa1.score);
        subirPuntuacion();
        clearInterval(bucle);

    }
    
    puntos();
    

}

window.addEventListener("keydown", function(event){ teclasPresionadas(event.code); });


function teclasPresionadas(tecla) {

    console.log(tecla);

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
        
        case "Space":
            if (rafa1.muerto) empezar(); 
    }
}
    


function puntos(){

    let texto = "Score: " + rafa1.score;

    ctx.font = "30px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText(texto, 10, 30);
}

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

        //si la petición se realiza correctamente, mostramos el contenido devuelto por el php
        if (peticion.status == 200) {

            //la variable 'this.responseText' contiene los datos que ha devuelto el PHP
            console.log(peticion.responseText);

        }
    }

    //hacemos una petición post al archivo php pasando todas las variables
    peticion.open("POST", "/javascript/subir-puntuacion.php", true);
    peticion.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //variables post que pasamos
    peticion.send("puntos="+rafa1.score+"&mapa=2&fecha="+Fecha+"&dif=2");

}