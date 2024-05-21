<?php

session_start();

//datos de mysql
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

//recogemos los datos enviados por el JS
$puntos  = $_POST['puntos'];
$user = $_SESSION['Usuario'];
$mapa    = $_POST['mapa'];
$fecha   = $_POST['fecha'];
$dif     = $_POST['dif'];

//nos conectamos a la base de datos
$conn = new mysqli($servidor, $usuario, $password, $base_datos);

//insertamos los datos enviados por el javascript
$consulta = "INSERT INTO Partida_1J (Puntos, Usuario, IDMapa, Fecha, Dificultad) VALUES ('$puntos','$user','$mapa','$fecha','$dif')";

$resultado = $conn->query($consulta);

//cerramos conexion
mysqli_close($conn);

//comprobamos que la consulta se ha realizado correctamente
if ($resultado) {


}
