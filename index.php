<?php
 include "php/check-sesion.php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Znamenny+Musical+Notation&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/cssindex.css">
    <link rel="stylesheet" type="text/css" href="css/cssglobal.css">
    <title>Inicio - SnakeSMX</title>
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
                    <li><a href="login.php" class="boton_inicio"><?php echo $boton ?>Sesión</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <h1>INICIO</h1>
        <div class="cubo_pero_grande">
            <p>Demo (Video/GIF) del Juego</p>
        </div>
        <p>aquí podemos poner texto de explicación del juego y eso</p>
        <button onclick="location.href='juego.php'" class="jugar">Jugar</button>
        <div class="cubos_abajo">
            <h3>Mejores puntuaciones globales</h3>
            <h3>Tus mejores puntuaciones</h3>
            <div class="cubo">
                <p>Tres Mejores Partidas Globales</p>
            </div>
            <table>
                <tr>
                    <th>Puntos</th>
                    <th>Usuario</th>
                    <th>Mapa</th>
                    <th>Fecha</th>
                </tr>
                <?php include "php/3-partidas-user.php"; ?>
            </table>
        </div>
    </main>
</body>
</html>

