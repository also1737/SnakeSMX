<?php
//print_r($_COOKIE);

//comprobamos si se ha creado la cookie PHPSESSID (el usuario ha iniciado sesión) y si no hay sesión ya abierta
if (isset($_COOKIE["PHPSESSID"]) && session_id() == NULL) {
    
    //abrimos la sesión
    session_start();
    //hacemos que el botón diga "Cerrar sesión"
    $boton = "Cerrar ";

} else  {
    //hacemos que el botón diga "Iniciar sesión"
    $boton = "Iniciar ";
}















