<?php

    $servidor = "192.168.121.90";
    $base_datos = "SnakeSMX";
    $usuario = "proyecto";
    $password = "Alumne1234!";
    
    $offset = 0;

    $conn = new mysqli($servidor, $usuario, $password, $base_datos);

    //con esta consulta vemos la cantidad de líneas que hay en la tabla
    $consulta = "SELECT COUNT(IDPartida) FROM Partida_1J";

    $count = $conn->query($consulta, MYSQLI_USE_RESULT);

    $count = $count->fetch_array(MYSQLI_NUM)[0];

    if (isset($_POST["valor"])) {
        $offset = (int) $_POST["valor"];
    }

    if (isset($_POST["fin"]) && $count - $offset >= 10) {
        while($count - $offset >= 10){
            $offset = $offset + 10;
        }
    }

    if (isset($_POST["adelante"]) && ($count - $offset) - 1 >= 10) {
        $offset = $offset + 10;
    }

    if (isset($_POST["principio"]) && $offset != 0) {
        $offset = 0;
    }

    if (isset($_POST["atrás"]) && $offset != 0) {
        $offset = $offset - 10;
    }

    $pag = $offset / 10 + 1;

    //con esta consulta recuperamos las 10 partidas con más puntosde todos los usuarios, con el INNER JOIN mostramos el nombre del mapa en vez de su ID
    $consulta = "SELECT Partida_1J.Puntos, Partida_1J.Usuario, Mapas.NombreMapa, Partida_1J.Fecha, Partida_1J.Dificultad FROM Partida_1J INNER JOIN Mapas ON Partida_1J.IDMapa=Mapas.IDMapa ORDER BY Puntos DESC LIMIT $offset, 10";
    
    //realizamos la consulta y guardamos el resultado
    $resultado = $conn->query($consulta, MYSQLI_USE_RESULT);

    //mostramos la primera fila de la tabla
    echo "<table>
            <tr>
                <th> </th>
                <th>Puntos</th>
                <th colspan='2'>Usuario</th>
                <th>Mapa</th>
                <th>Fecha</th>
                <th>Dificultad</th>
            </tr>";

    //numero de líneas con datos, lo necesitaremos más tarde
    $len = 0;

    //puesto de la puntuación en cuestión
    $puesto = 1 + $offset;

    //este bucle se ejecuta tantas veces como filas haya devuelto la consulta
    //guardamos una fila en la variable $datos cada iteración
    while($datos=$resultado->fetch_array(MYSQLI_ASSOC)) {
        
        //mostramos una fila de la tabla con todos los datos
        echo'
            <tr>
                <th>'.$puesto.'</th>
                <td>'.$datos["Puntos"].'</td>
                <td>'; 
                include "php/fotos-leaderboard.php"; 
                echo 
                '</td><td class="usuario">'.$datos["Usuario"].'</td>
                <td>'.$datos["NombreMapa"].'</td>
                <td>'.$datos["Fecha"].'</td>
                <td>'.$datos["Dificultad"].'</td>
            </tr>';

            //incrementamos len y puesto
            $len++;
            $puesto++;
    
    }

    //aquí imprimimos las filas que faltan si la consulta devuelve menos de 10 filas, para esto usamos $len
    for ($i = 0; $i < 10 - $len; ++$i) {
        echo "<tr><th>$puesto</th><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>";
        $puesto++;
    }
