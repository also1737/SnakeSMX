<?php

    $servidor = "192.168.121.90";
    $base_datos = "SnakeSMX";
    $usuario = "proyecto";
    $password = "Alumne1234!";
    
    $conn = new mysqli($servidor, $usuario, $password, $base_datos);
    
    //
    $consulta = "SELECT Partida_1J.Puntos, Partida_1J.Usuario, Mapas.NombreMapa, Partida_1J.Fecha, Partida_1J.Dificultad FROM Partida_1J INNER JOIN Mapas ON Partida_1J.IDMapa=Mapas.IDMapa ORDER BY Puntos DESC LIMIT 10";
    
    $resultado = $conn->query($consulta, MYSQLI_USE_RESULT);
    
    //$resultado = $resultado->fetch_all(MYSQLI_ASSOC);

    echo "<table>
            <tr>
                <th> </th>
                <th>Puntos</th>
                <th>Usuario</th>
                <th>Mapa</th>
                <th>Fecha</th>
                <th>Dificultad</th>
            </tr>";
    
    /*for ($i = 0; $i < $len; ++$i) {
        echo "<tr><td>".$resultado[$i]["Puntos"]."</td><td>".$resultado[$i]["IDMapa"]."</td><td>".$resultado[$i]["Fecha"]."</td><td>".$resultado[$i]["Dificultad"]."</td></tr>";
    }*/

    $len = 0;
    $puesto = 1;

    while($datos=$resultado->fetch_array(MYSQLI_ASSOC)){
        echo'
            <tr>
                <th>'.$puesto.'</th>
                <td>'.$datos["Puntos"].'</td>
                <td>'.$datos["Usuario"].'</td>
                <td>'.$datos["NombreMapa"].'</td>
                <td>'.$datos["Fecha"].'</td>
                <td>'.$datos["Dificultad"].'</td>
            </tr>';

            $len++;
            $puesto++;
    
    }

    for ($i = 0; $i < 6 - $len; ++$i) {
        echo "<tr><td> </td><td> </td><td> </td><td> </td></tr>";
    }
    
    echo "</table>";



//print_r($resultado);
