<?php
//datos sobre MySQL necesarios para la conexión
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

function error_user(){
    $error = "El usuario ya existe";
    header("Location: ../registro.php?error=$error");
}

function error_user_lenght(){
    $error = "Usuario no permitido";
    header("Location: ../registro.php?error=$error");
}

function error_pass(){
    $error = "Las contraseñas no coinciden";
    header("Location: ../registro.php?error=$error");
}


//variables que usaremos
$user = $pass1 = $pass2 = $consulta = $resultado = $fila = "";

//Comprobamos si se ha rellenado el formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    //cogemos los valores que ha introducido el usuario y los ponemos entre comillas
    $user = $_POST["usuario"];
    $pass1 = $_POST["contraseña1"];
    $pass2 = $_POST["contraseña2"];
    
    // Comprobamos la longitud del nombre de usuario
    if (strlen($_POST["usuario"]) > 20) {
        error_user_lenght();
    }

    // Establecemos conexión
    $conn = new mysqli($servidor, $usuario, $password, $base_datos);

    // Comprobamos si la conexión ha fallado 
    if ($conn->connect_errno) {
        die("<p>Connection failed: $conn->connect_error</p>");
    }

    //Con esta consulta buscamos si el usuario ($user) está en la base de datos
    $consulta = "SELECT Usuario, Password FROM Usuarios WHERE Usuario = '$user'";

    //Realizamos la consulta y la guardamos en $resultado
    $resultado = $conn->query($consulta, MYSQLI_USE_RESULT);

    //convertimos la consulta en un array para poder leerla
    $resultado = $resultado->fetch_all(MYSQLI_ASSOC);

    // Cerramos conexión con la base de datos
    mysqli_close($conn);

    //comprobamos si el array no está vacío (el usuario existe y no se puede crear)
    if (!empty($resultado)) {
        //lanzamos error
        error_user();
        
    } else { //no existe (cremos usuario)
        
        //comprobamos que las contraseñas sean iguales
        if ($pass1 === $pass2) {

            //son iguales, añadimos usuario
            $conn = new mysqli($servidor, $usuario, $password, $base_datos);
            
            if ($conn->connect_errno) {
                die("<p>Connection failed: $conn->connect_error</p>");
            }

            //encriptamos contraseña
            $pass_hash = password_hash($pass1, PASSWORD_DEFAULT);
            
            //añadimos el usuario y la contraseña a la BD
            //$consulta = "INSERT INTO Usuarios (Usuario, Password) VALUES ('$user', '".password_hash($pass1, PASSWORD_DEFAULT)."')";
            $consulta = "INSERT INTO Usuarios (Usuario, Password) VALUES ('$user', '$pass_hash')";

            //realizamos consulta
            $conn->query($consulta);

            //cerramos conexión MySQL
            mysqli_close($conn);

            //redirigimos a inicio de sesión
            header('Location: ../login.php');

        } else {

            //no son iguales, error
            error_pass();

        }

    }
    
}