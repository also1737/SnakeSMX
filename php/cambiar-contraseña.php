<?php

include "check-sesion.php";

//variables de conexión MySQL
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $contraseña_actual =  $_POST["old_passwd"] ;
    $contraseña_nueva =  $_POST["new_passwd"] ;
    $repetir_contraseña =  $_POST["repeat_passwd"] ;
    // Establecemos conexión
    $conn = new mysqli($servidor, $usuario, $password, $base_datos);
    $consulta = "SELECT Password FROM Usuarios WHERE Usuario = '$_SESSION[Usuario]'";
     //realizamos la consulta
     $conn->query($consulta); 
         //Realizamos la consulta y la guardamos en $resultado
    $resultado = $conn->query($consulta, MYSQLI_USE_RESULT);

    //convertimos la consulta en un array para poder leerla
    $resultado = $resultado->fetch_all(MYSQLI_ASSOC);

    $contraseñaBD = $resultado[0]["Password"];

    echo $contraseñaBD;

    if ($contraseñaBD == $contraseña_actual) {
        if ($contraseña_nueva == $repetir_contraseña) {
            $consulta = "UPDATE Usuarios SET Password = $contraseña_nueva WHERE Usuario = '$_SESSION[Usuario]'";
            $conn->query($consulta);

        } 
        else {
            echo "Las contraseñas no coinciden";
        }
    }
    else {
        echo "Contraseña incorrecta";
    }
    $conn->close();



}
