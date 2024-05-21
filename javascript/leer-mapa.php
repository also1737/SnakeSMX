<?php

$idmapa = $_POST["mapa"];

//datos de mysql
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

//nos conectamos a la base de datos
$conn = new mysqli($servidor, $usuario, $password, $base_datos);

//insertamos los datos enviados por el javascript
$consulta = "SELECT DiseñoMapa FROM Mapas WHERE IDMapa='$idmapa'";

//Realizamos la consulta y la guardamos en $resultado
$resultado = $conn->query($consulta, MYSQLI_USE_RESULT);

//convertimos la consulta en un array para poder leerla
$resultado = $resultado->fetch_all(MYSQLI_ASSOC);

//cerramos conexion
mysqli_close($conn);

print_r($resultado[0]["DiseñoMapa"]);

?>