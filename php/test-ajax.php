<?php

//datos de mysql
$servidor = "192.168.121.90";
$base_datos = "SnakeSMX";
$usuario = "proyecto";
$password = "Alumne1234!";

$conn = new mysqli($servidor, $usuario, $password, $base_datos);

//insertamos los datos enviados por el javascript
$consulta = "INSERT INTO Partida_1J (Puntos, Usuario, IDMapa, Fecha, Dificultad) VALUES ('$_POST[puntos]','$_POST[usuario]','$_POST[mapa]','$_POST[fecha]','$_POST[dif]')";

$resultado = $conn->query($consulta);

//comprobamos que la consulta se ha eralizado correctamente
if ($resultado) {
    echo "eeeeeee<br>";

    //recuperamos todas las partidas en la base de datos
    $consulta = "SELECT Partida_1J.Puntos, Partida_1J.Usuario, Mapas.NombreMapa, Partida_1J.Fecha, Partida_1J.Dificultad FROM Partida_1J INNER JOIN Mapas ON Partida_1J.IDMapa=Mapas.IDMapa ORDER BY Puntos DESC";
    $resultado = $conn->query($consulta, MYSQLI_USE_RESULT);

    //las mostramos
    while($datos=$resultado->fetch_array(MYSQLI_ASSOC)) {
        
        echo '<p>'.$datos["Puntos"].' | '.$datos["Usuario"].' | '.$datos["NombreMapa"].' | '.$datos["Fecha"].' | '.$datos["Dificultad"].'</p>';
    }

} else {

    echo "noooooo<br>";

}

//cerramos conexion
mysqli_close($conn);