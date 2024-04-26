<?php

//comprobamos si hay una sesión iniciada
if (isset($_COOKIE["PHPSESSID"])) {
    
    //si hay sesión abierta, mostramos tabla
    $servidor = "192.168.121.90";
    $base_datos = "SnakeSMX";
    $usuario = "proyecto";
    $password = "Alumne1234!";
    
    $conn = new mysqli($servidor, $usuario, $password, $base_datos);
    
    //con esta consulta recuperamos las 10 partidas con más puntos del usuarios, con el INNER JOIN mostramos el nombre del mapa en vez de su ID
    $consulta = "SELECT Partida_1J.Puntos, Mapas.NombreMapa, Partida_1J.Fecha, Partida_1J.Dificultad FROM Partida_1J INNER JOIN Mapas ON Partida_1J.IDMapa=Mapas.IDMapa  WHERE Usuario = '$_SESSION[Usuario]' ORDER BY Puntos DESC LIMIT 6";
    
    //realizamos la consulta
    $resultado = $conn->query($consulta, MYSQLI_USE_RESULT);

    //mostramos la primera fila de la tabla
    echo "<table>
            <tr>
                <th>Puntos</th>
                <th>Mapa</th>
                <th>Fecha</th>
                <th>Dificultad</th>
            </tr>";

    //numero de líneas con datos, lo necesitaremos más tarde
    $len = 0;

    //este bucle se ejecuta tantas veces como filas haya devuelto la consulta
    //guardamos una fila en la variable $datos cada iteración
    while($datos=$resultado->fetch_array(MYSQLI_ASSOC)){
        
        //mostramos una fila de la tabla con todos los datos
        echo'
            <tr>
                <td>'.$datos["Puntos"].'</td>
                <td>'.$datos["NombreMapa"].'</td>
                <td>'.$datos["Fecha"].'</td>
                <td>'.$datos["Dificultad"].'</td>
            </tr>';

            //incrementamos len
            $len++;
    
    }

    //aquí imprimimos las filas que faltan si la consulta devuelve menos de 6 filas, para esto usamos $len
    for ($i = 0; $i < 6 - $len; ++$i) {
        echo "<tr><td> </td><td> </td><td> </td><td> </td></tr>";
    }
    
    //cerramos el html de la tabla
    echo "</table>";

} else {

    //si no hay sesión abierta, mostramos esto
    echo "<div class='derecha' >Inicia sesión para ver tus puntuaciones</div>";

}
