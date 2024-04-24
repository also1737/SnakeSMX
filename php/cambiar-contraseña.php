<?php

include "check-sesion.php";

//variables de conexión MySQL
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    //Especificaremos variables para los campos de Contraseña antigua, contraseña nueva y repetir contraseña
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
    //Solo sacamos la contraseña del array
    $contraseñaBD = $resultado[0]["Password"];

    echo $contraseñaBD;
    //Comparamos la contraseña de la base de datos con la contraseña introducida en el campo de contraseña antigua
    if ($contraseñaBD == $contraseña_actual) {
        //Comparamos la contraseña nueva y la repeticion de la contraseña
        if ($contraseña_nueva == $repetir_contraseña) {
            //Si las dos contraseñas son iguales, realizaremos una consulta para actualizar la nueva contraseña a la base de datos
            $consulta = "UPDATE Usuarios SET Password = '$contraseña_nueva' WHERE Usuario = '$_SESSION[Usuario]'";
            $conn->query($consulta);

        } 
        //Si la contraseña nueva y la contraseña antigua no coinciden, daremos un error de que las contraseñas no coinciden
        else {
            echo "Las contraseñas no coinciden";
        }
    }
    //Si la contraseña de la base de datos y la contraseña del campo de contraseña antigua no coinciden, daremos un error de contraseña incorrecta
    else {
        echo "Contraseña incorrecta";
    }
    $conn->close();

    //volvemos a página de configuración
    header('Location: ../userconfig.php');

}
