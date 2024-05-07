<?php

//datos de mysql
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

//recogemos los datos enviados por el JS
$puntos  = $_POST['puntos'];
$user = $_POST['usuario'];
$mapa    = $_POST['mapa'];
$fecha   = $_POST['fecha'];
$dif     = $_POST['dif'];

//nos conectamos a la base de datos
$conn = new mysqli($servidor, $usuario, $password, $base_datos);

//insertamos los datos enviados por el javascript
$consulta = "INSERT INTO Partida_1J (Puntos, Usuario, IDMapa, Fecha, Dificultad) VALUES ('$puntos','$user','$mapa','$fecha','$dif')";

$resultado = $conn->query($consulta);

//comprobamos que la consulta se ha eralizado correctamente
if ($resultado) {

    //recuperamos todas las partidas del usuario en la base de datos
    $consulta = "SELECT Partida_1J.Puntos, Partida_1J.Usuario, Mapas.NombreMapa, Partida_1J.Fecha, Partida_1J.Dificultad FROM Partida_1J INNER JOIN Mapas ON Partida_1J.IDMapa=Mapas.IDMapa WHERE Usuario='$user' ORDER BY Puntos DESC";
    
    //realizamos la consulta
    $resultado = $conn->query($consulta, MYSQLI_USE_RESULT);

    //las mostramos
    while($datos=$resultado->fetch_array(MYSQLI_ASSOC)) {
        
        echo '<p>'.$datos["Puntos"].' | '.$datos["Usuario"].' | '.$datos["NombreMapa"].' | '.$datos["Fecha"].' | '.$datos["Dificultad"].'</p>';
    
    }

}

//cerramos conexion
mysqli_close($conn);