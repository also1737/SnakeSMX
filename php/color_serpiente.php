<?php

include "check-sesion.php";

//variables de conexión MySQL
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    
    //cogemos el color que ha escogido el usuario
    $color = $_POST["ColorSerpiente"];
    
    //conectamos con la base de datos
    $conn = new mysqli($servidor, $usuario, $password, $base_datos);

    // Comprobamos si la conexión ha fallado 
    if ($conn->connect_errno) {
        die("<p>Connection failed: $conn->connect_error</p>");
    }

    //creamos la consulta que añadirá el color de serpiente
    $consulta = "UPDATE Usuarios SET ColorSerp = '$color' WHERE Usuario = '$_SESSION[Usuario]'";

    $conn->query($consulta);

    mysqli_close($conn);

    header('Location: ../userconfig.php');

}