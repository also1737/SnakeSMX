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
        <link rel="logo-manzana" type="image/x-icon" href="/img/manzana_manzanita_roja.webp">
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
                    <li><a href="login.php" id="boton_inicio">Iniciar Sesión</a></li>
                    <script src="javascript/boton_iniciar_sesión.js"></script>
                </ul>
            </div>
        </nav>
        <main>
            <h1>SNAKESMX</h1>
            <form action="php/control-registro.php" method="POST">
                <p>REGISTRARSE</p>
                <p id="error"><?php if(isset($_GET["error"])) { echo $_GET["error"]; } else { echo " ";}?></p>
                <label for="usuario" >Usuario:</label>
                <input type="text" id="usuario" name="usuario" required>
                <label for="contraseña" >Contraseña:</label>
                <input type="password" id="contraseña" name="contraseña1" minlength="8" required>
                <label for="contraseña" >Confirmar contraseña:</label>
                <input type="password" id="contraseña" name="contraseña2" minlength="8" required>
                <button type="submit">Acceder</button>
            </form>
        </main>
        <script>

let boton = document.getElementById("boton_inicio");

    if (boton.innerHTML == "Iniciar Sesión") {

        boton.style.backgroundColor = "#5d9b2e";
        boton.style.color = "#fff";

    } else if (boton.innerHTML == "Cerrar Sesión") { 
    
        boton.style.backgroundColor =  "#cccccc";
        boton.style.color = "#000";

    }
</script>
    </body>
</html>