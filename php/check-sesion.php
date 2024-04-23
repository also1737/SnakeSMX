<?php
print_r($_COOKIE);

if (isset($_COOKIE["PHPSESSID"])) {
    session_start();
    $boton = "Cerrar ";
} else  {
    $boton = "Iniciar ";
}
