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
    <link rel="stylesheet" type="text/css" href="css/cssglobal.css">
    <link rel="stylesheet" type="text/css" href="css/cssindex.css">
    <link rel="logo-manzana" type="image/x-icon" href="/img/manzana_manzanita_roja.webp">
    <title>Inicio - SnakeSMX</title>
</head>
<body>
    <nav>
        <div class="logo">
            <img id="logo" src="img/snakesmx-logo.png" alt="RAFA">
        </div>
        <div id="menu">
            <ul>
                    <li><a class="pagina_seleccionada" href="index.php">Inicio</a></li>
                    <li><a href="userconfig.php">Configuración</a></li>
                    <li><a href="leaderscore.php">Leaderboard</a></li>
                    <li><a href="login.php" id="boton_inicio"><?php echo $boton ?>Sesión</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <h1>INICIO</h1>
        <img id="gameplay" src="img/snakesmx.gif"> 
        <br>
        <button onclick="location.href='juego.php'" class="jugar">Jugar</button>
        <div class="cubos_abajo">
            <h3>Mejores puntuaciones globales</h3>
            <h3>Tus mejores puntuaciones</h3>
            <?php include "php/6-partidas-global.php"; ?>
            <?php include "php/6-partidas-user.php"; ?>
        </div>
    </main>
    
    <script>

        //código que colorea las tres líneas de la tabla global

        var x = document.getElementsByTagName("tr");

        x[1].style.backgroundColor = "#ECDE64"; //primera línea = oro
        x[2].style.backgroundColor = "#D9D9D9"; //segunda línea = plata
        x[3].style.backgroundColor = "#E7C369"; //tercera línea = bronce

    </script>
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

