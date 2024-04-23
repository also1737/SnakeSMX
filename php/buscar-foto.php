<?php

// si es estúpido pero funciona no es estúpido
$dir = "/var/www/SnakeSMX/fotos";

$archivos = scandir($dir);
$patron = "/$_SESSION[Usuario]/";

foreach ($archivos as $archivo) {
    if (preg_match($patron, $archivo)) {
        echo "<img id='foto' src='fotos/$archivo' alt='foto de perfil'>";
        $imagen_defecto = "";
        break;
    } else {
        $imagen_defecto = "<img id='foto' src='img/fotoperfil.png' alt='Foto de perfil' >";
    }
}
echo $imagen_defecto;