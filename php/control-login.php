<?php
//datos sobre MySQL necesarios para la conexión
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

function login_end(){
    echo "Usuario o contraseña incorrecto";
    die();
}

//variables que usaremos
$user = $pass = $consulta = $resultado = $fila = "";

//Comprobamos si se ha rellenado el formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    //cogemos los valores que ha introducido el usuario y los ponemos entre comillas
    $user = "'" . $_POST["usuario"] . "'";
    $pass = $_POST["contraseña"];

    // Establecemos conexión
    $conn = new mysqli($servidor, $usuario, $password, $base_datos);

    // Comprobamos si la conexión ha fallado 
    if ($conn->connect_errno) {
        die("<p>Connection failed: $conn->connect_error</p>");
    }

    //Con esta consulta buscamos si el usuario ($user) está en la base de datos
    $consulta = "SELECT Usuario, Password FROM Usuarios WHERE Usuario = $user";

    //Realizamos la consulta y la guardamos en $resultado
    $resultado = $conn->query($consulta, MYSQLI_USE_RESULT);

    //convertimos la consulta en un array para poder leerla
    $resultado = $resultado->fetch_all(MYSQLI_ASSOC);

    // Cerramos conexión con la base de datos
    mysqli_close($conn);

    //comprobamos si el array está vacío (el usuario no existe)
    if (empty($resultado)) {
        //lanzamos error
        login_end();
    }
    else { //existe
        
        //Sacamos la contraseña del usuario del array
        $fila = $resultado[0];
        $contraseña = $fila["Password"];
        
        //comprobamos que es igual a la contraseña de la BD
        if ($contraseña == $pass) {
            //Abrimos sesión
            session_start();
            $_SESSION["Usuario"] = trim($user, "'");
            $_SESSION["Password"] = $pass;
            $_SESSION["foto"] = "";

            header('Location: ../index.php');

        }
        else {
            //lanzamos error
            login_end();
        }
    }
    
}