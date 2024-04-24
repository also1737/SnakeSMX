<?php
 include "php/check-sesion.php";
?>
<!DOCTYPE html>
<html lang="es">
    <head> 
        <script>
            var abierto = false;
            
            function mostrar_esconder() {
                if (!abierto) {
                    document.getElementById("esconder").style = "display: block;";
                    document.getElementById("selector").style = "background-color: #9b2e2e;";
                    document.getElementById("selector").innerHTML = "Cerrar";
                    abierto = true;
                } else {
                    document.getElementById("esconder").style = "display: none;";
                    document.getElementById("selector").style = "background-color: #5d9b2e;";
                    document.getElementById("selector").innerHTML = "Cambiar";
                    abierto = false;
                };
            };
        </script> 
        <meta charset="UTF-8" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Znamenny+Musical+Notation&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/cssuserconfig.css">
        <link rel="stylesheet" type="text/css" href="css/cssglobal.css">
        <title>Ajustes de usuario - SnakeSMX</title>
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
            <h1>Ajustes de Usuario</h1>
            <h2>Datos de Login</h2>
            <div class="grid">
                <div>
                    <h4>Nombre de usuario</h4>
                    <p id="usr"><?php echo $_SESSION["Usuario"]; ?></p>
                    <button id="selector" onclick="mostrar_esconder()">Cambiar</button>
                    <div id="esconder">
                        <form action="php/cambio-user.php" method="post">
                            <p>Introduce tu nuevo nombre de usuario</p>
                            <input type="text" id="nuevo_user" name="nuevo_user" required><br>
                            <button type="submit">Cambiar</button>
                        </form>
                    </div>
                </div>
                <div>
                <h4>Cambiar contraseña</h4>
                    <form action method="POST">
                        <label for="old_passwd">Contraseña actual:</label>
                        <input type="password" name="old_passwd" required><br>
                        <label for="old_passwd">Contraseña nueva:</label>
                        <input type="password" name="new_passwd" required><br>
                        <label for="old_passwd">Confirmar Contraseña:</label>
                        <input type="password" name="repeat_passwd" required><br>
                        <button type="submit">Confirmar</button>
                    </form>
                </div>
            </div>
            <h2>Avatar y color de serpiente</h2>
            <div class="grid">
                <div>
                    <h4 class="izquierda">Avatar:</h4>
                    <?php
                        include "php/buscar-foto.php";
                    ?>
                    
                    <form action="php/fotoperfil.php" method="post" enctype="multipart/form-data">
                        <label for="FotoPerfil">Cambiar Avatar:</label>
                        <input type="file" id="FotoPerfil" name="FotoPerfil">
                        <button type="submit">Subir</button>
                    </form>
                </div>
                <div>
                    <h4>Color de la serpiente</h4>
                    <form method="GET">
                        <input type="color" id="ColorSerpiente" name="color" value="#00ff00">
                        <button type="submit">Guardar</button>
                    </form>
                </div>
            </div>
        </main>
    </body>
</html>