<?php

include "check-sesion.php";

//variables de conexión MySQL
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    
    //cogemos los valores que ha introducido el usuario y los ponemos entre comillas
    $user = "'" . $_POST["nuevo_user"] . "'";
    
    //conectamos con la base de datos
    $conn = new mysqli($servidor, $usuario, $password, $base_datos);

    // Comprobamos si la conexión ha fallado 
    if ($conn->connect_errno) {
        die("<p>Connection failed: $conn->connect_error</p>");
    }

    //creamos la consulta que reemplazará el nombre de usuario
    $consulta = "UPDATE Usuarios SET Usuario = $user WHERE Usuario = '$_SESSION[Usuario]'";

    //realizamos la consulta
    $conn->query($consulta);

    //actualizamos el nuevo user en la sesión, eliminando las comillas
    $_SESSION['Usuario'] = trim($user, "'");

    //cerramos conexión MySQL
    $conn->close();
}

    //volvemos a página de configuración
    header('Location: ../userconfig.php');

?>