<?php
 include "php/check-sesion.php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <title> Leaderboard </title>
    <meta charset="UTF-8" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/img/manzana_manzanita_roja.webp" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Znamenny+Musical+Notation&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/cssliderscore.css">
    <link rel="stylesheet" type="text/css" href="css/cssglobal.css" >
    <link rel="icon" type="image/x-icon" href="/img/manzana_manzanita_roja.webp">
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
                <li><a class="pagina_seleccionada" href="leaderscore.php">Leaderboard</a></li>
                <li><a href="login.php" id="boton_inicio"><?php echo $boton ?>Sesión</a></li>
                <script src="javascript/boton_iniciar_sesión.js"></script>

            </ul>
        </div>
    </nav>
    <h1>LEADERBOARD</h1>
    <?php include "php/users-podio.php"; ?>
    <div class="grid">
        <div class="tercercubo">
            <h3><?php echo $tercero; ?></h3>
            <h3>3º</h3>
        </div>
        <div class="primercubo">
            <h1><?php echo $primero; ?></h1>
            <h1>1º</h1>
        </div>
        <div class="segundocubo">
            <h2><?php echo $segundo; ?></h2>
            <h2>2º</h2>
        </div>
    </div>
    <main>
        <?php include "php/filas-leaderboard.php"; ?>
          <tr>
            <td colspan='7'>
              <form action='leaderscore.php' method='POST'>
                <input type='hidden' name='valor' value='<?php echo $offset; ?>'>
                <input type='submit' name='principio' value='<<'/>
                <input type='submit' name='atrás' value='<'/>
                <p id="pag">Página <?php echo $pag; ?></p>
                <input type='submit' name='adelante' value='>'/>
                <input type='submit' name='fin' value='>>'/>
              </form>
            </td>
          </tr>
        </table>
    </main>
    <script>
        //script que cambia el estilo de la última fila

        var x = document.getElementsByTagName("tr");

        x[x.length-1].style.backgroundColor = "#BFE4A2"; //color verde claro
        x[x.length-1].style.borderTop = "solid 1px #000"; //línia negra arriba
        x[x.length-1].style.height = "20px";
    </script>
</body>
</html>
