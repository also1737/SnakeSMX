//función que se encarga de leer el mapa seleccionado
async function leerMapa() {

    if (idmapa != 0) {
        
        //creamos una promesa
        let promesa = new Promise(function(myResolve) {
        
            //creamos la petición
            var peticion = new XMLHttpRequest();

            //hacemos una petición post al archivo php pasando todas las variables
            peticion.open("POST", "/javascript/leer-mapa.php", true);
            peticion.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
            //variables post que pasamos
            peticion.send("mapa=" + idmapa);
            //esto se ejecuta cuando PHP responde a la petición
            peticion.onload = function() {

                //si la petición se realiza correctamente, mostramos el contenido devuelto por el php
                if (peticion.status == 200 && peticion.responseText) {

                    //esta variable contiene el color de la serpiente
                    myResolve(peticion.responseText);
            
                } else {

                    //si el usuario no tiene color, la serpiente se pone verde por defecto
                    myResolve("0");

                }

            }
        });
    

        //esperamos a la promesa, con esto nos aseguramos de no crear la serpiente antes de que el PHP responda con el color de la serpiente.
        mapa = await promesa;
    } else {
        mapa = "0";
    }

    paredes = new Mapa(c.height, c.width, dificultad, mapa, tablerito);

}

//función que se encarga de leer el color de serpiente del usuario guardado en la BD
async function leerColor() {
 
    color = ajustesColor();

    if (!color) {

        //creamos una promesa
        let promesa = new Promise(function(myResolve) {
        
            //creamos la petición
            var peticion = new XMLHttpRequest();

            //hacemos una petición post al archivo php pasando todas las variables
            peticion.open("GET", "/javascript/user.php");

            //esto se ejecuta cuando PHP responde a la petición
            peticion.onload = function() {

                //si la petición se realiza correctamente, mostramos el contenido devuelto por el php
                if (peticion.status == 200 && peticion.responseText) {

                    //esta variable contiene el color de la serpiente
                    myResolve(peticion.responseText);
            
                } else {

                    //si el usuario no tiene color, la serpiente se pone verde por defecto
                    myResolve("#5d9b2e");

                }

            }

            //realizamos petición
            peticion.send();

        });

        //esperamos a la promesa, con esto nos aseguramos de no crear la serpiente antes de que el PHP responda con el color de la serpiente.
        color = await promesa;

    }
    
    //creamos la serpiente
    rafa1  = new Serpiente(posX - 10, posY,1,color);

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
