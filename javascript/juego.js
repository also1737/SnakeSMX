var c = document.getElementById("juego");
var ctx = c.getContext("2d");
//var rafa2 = new Serpiente(15,15,2);
var bucle = 0;
var tamano = 25;
var color, tablerito, manzana, rafa1;

async function leerColor() {
 
    let promesa = new Promise(function(myResolve) {
        
        //creamos la petición
        var xhttp = new XMLHttpRequest();

        //hacemos una petición post al archivo php pasando todas las variables
        xhttp.open("GET", "/javascript/user.php");

        //esto se ejecuta cuando PHP responde a la petición
        xhttp.onload = function() {

            //si la petición se realiza correctamente, mostramos el contenido devuelto por el php
            if (xhttp.status == 200 && xhttp.responseText) {

                //la variable 'this.responseText' contiene los datos que ha devuelto el PHP
                myResolve(xhttp.responseText);
            
            } else {

                myResolve("hsl(94, 54%, 39%)");
            }

        }

        //variables post que pasamos
        xhttp.send();

    });

    color = await promesa;
    console.log(color);
    rafa1  = new Serpiente(15,12,1,0);

}

function empezar() {

    tablerito = new Tablero(c.height,c.width,tamano);
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
    
    

        /*case "KeyW":
            
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
    }*/
    


function puntos(){

    let texto = /*usuario;*/"Score: " + rafa1.score;

    ctx.font = "30px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText(texto, 10, 30);
}
