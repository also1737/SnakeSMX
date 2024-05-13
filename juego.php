<?php
 include "php/check-sesion.php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/img/manzana_manzanita_roja.webp" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Znamenny+Musical+Notation&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/cssjuego.css">
    <link rel="stylesheet" type="text/css" href="css/cssglobal.css">
    <link rel="logo-manzana" type="image/x-icon" href="/img/manzana_manzanita_roja.webp">
    <title>JUEGO - SnakeSMX</title>
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
                    <li><a href="login.php" id="boton_inicio"><?php echo $boton ?> Sesión</a></li>
            </ul>
        </div>
    </nav> 
    <canvas id="juego" width="1350" height="650" ></canvas>
    <script src="javascript/tablero.js"></script>
    <script src="javascript/cubo.js"></script>
    <script src="javascript/manzana.js"></script>
    <script src="javascript/serpiente.js"></script>
    <script src="javascript/juego.js"></script>
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