<?php
 include "php/check-sesion.php";
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/img/manzana_manzanita_roja.webp" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Znamenny+Musical+Notation&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/cssglobal.css" >
        <link rel="stylesheet" type="text/css" href="css/cssregistro.css" >
        <title>Registro de usuario - SnakeSMX</title>
    </head>
    <body>
        <nav>
            <div class="logo">
                <img id="logo" src="img/snakesmx-logo.png" alt="RAFA">
            </div>
            <div id="menu">
                <ul>
                    <li><a href="index.php">Inicio</a></li>
                    <li><a href="userconfig.php">Configuración</a></li>
                    <li><a href="leaderscore.php">Leaderboard</a></li>
                    <li><a href="login.php" class="boton_inicio">Iniciar Sesión</a></li>
                </ul>
            </div>
        </nav>
        <main>
            <h2>SNAKESMX</h2>
            <form action="php/control-registro.php" method="POST">
                <p>REGISTRARSE</p>
                <label for="usuario" >Usuario:</label>
                <input type="text" id="usuario" name="usuario" required>
                <label for="contraseña" >Contraseña:</label>
                <input type="password" id="contraseña" name="contraseña1" minlength="8" required>
                <label for="contraseña" >Confirmar contraseña:</label>
                <input type="password" id="contraseña" name="contraseña2" minlength="8" required>
                <button type="submit">Acceder</button>
            </form>
        </main>
    </body>
</html>