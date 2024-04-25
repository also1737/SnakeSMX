<?php

$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

$conn = new mysqli($servidor, $usuario, $password, $base_datos);

$consulta = "SELECT Usuario FROM Partida_1J ORDER BY Puntos DESC LIMIT 3";

$resultado = $conn->query($consulta, MYSQLI_USE_RESULT);

$resultado = $resultado->fetch_all(MYSQLI_ASSOC);

$primero = $resultado[0]["Usuario"];
$segundo = $resultado[1]["Usuario"];
$tercero = $resultado[2]["Usuario"];