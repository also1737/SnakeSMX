<?php

include "check-sesion.php";

//variables de conexión MySQL
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

function error_contra_new() {
    $error = "Las contraseñas no coinciden";
    header("Location: ../userconfig.php?errorpass=$error");
}

function error_contra_old() {
    $error = "Contraseña incorrecta";
    header("Location: ../userconfig.php?errorpass=$error");
}

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
    
    //Solo sacamos la contraseña del array y le asignamos la variable $contraseñaBD
    $contraseñaBD = $resultado[0]["Password"];

    //Comparamos la contraseña de la base de datos con la contraseña introducida en el campo de contraseña antigua
    if (password_verify($contraseña_actual, $contraseñaBD)) {
       
        //Comparamos la contraseña nueva y la repeticion de la contraseña
        if ($contraseña_nueva == $repetir_contraseña) {

            //encriptamos la contraseña
            $pass_hash = password_hash($contraseña_nueva, PASSWORD_DEFAULT);
            
            //Si las dos contraseñas son iguales, realizaremos una consulta para actualizar la nueva contraseña a la base de datos
            $consulta = "UPDATE Usuarios SET Password = '$pass_hash' WHERE Usuario = '$_SESSION[Usuario]'";
            $conn->query($consulta);

            //cerramos conexion mysql
            $conn->close();
            
            //volvemos a página de configuración
            header('Location: ../userconfig.php');

        } 
        
        //Si la contraseña nueva y la contraseña antigua no coinciden, daremos un error de que las contraseñas no coinciden
        else {
            error_contra_new();
        }
    }
    
    //Si la contraseña de la base de datos y la contraseña del campo de contraseña antigua no coinciden, daremos un error de contraseña incorrecta
    else {
        error_contra_old();
    }

}
