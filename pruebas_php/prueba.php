<!DOCTYPE html>
<html>
   <head>
   <?php
   //variables de la conexión MySql
   $servidor = "192.168.121.90";
   $base_datos = "SnakeSMX";
   $usuario = "alvaro";
   $password = "Alumne1234!";
  
   $user = $pass = $color = $consulta = "";
  
   //comprobamos que se ha rellenado el formulario
   if ($_SERVER["REQUEST_METHOD"] === "POST") {
		 //configuramos las variables con comillas
           $user = "'" . $_POST["user"] . "'";
           $pass = "'" . $_POST["pass"] . "'";
           $color = "'" . $_POST["color"] . "'";


           // Establecer conexión
           $conn = new mysqli($servidor, $usuario, $password, $base_datos);
  
           // Comprobar conexión
           if ($conn->connect_errno) {
               die("<p>Connection failed: $conn->connect_error</p>");
           }


           //imprimimos info sobre la conexión
           echo "<p>Conexión exitosa!</p>";
           echo "<p>$conn->host_info</p>";
  
           $consulta = "INSERT INTO Usuarios VALUES ($user, $pass, $color)";


           echo "<p>$consulta</p>";


           if ($conn->query($consulta)) {
               echo "Nueva línea actualizada";
           } else {
               echo "Error: " . $sql . "<br>" . mysqli_error($conn);
           }
          
           // Cerramos conexión con la base de datos
           if (mysqli_close($conn)) {
               echo "<p>chao</p>";
           }
   }


   ?>
   <title>test db</title>
   </head>
   <body>
       <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
           <label for="user">Tu nombre: <input type="text" id="user" name="user" ></label><br>
           <label for="pass">Tu apellido: <input type="password" id="pass" name="pass"></label><br>
           <label for="color">Tu color: <input type="color" id="color" name="color" ></label><br>
           <button type="submit" >Subir</button>
       </form>
   </body>
</html>
