<?php
    session_start();
    //creamos variables sin valor
    $nombre = $foto = "";
    //comprobamos que se ha rellenado el formulario
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        
        $nombre = $_SESSION["Usuario"];

        print_r($_POST);
        print_r($_FILES);

        //la carpeta donde se guardan las fotos
        $carpeta = "../fotos/";
        
        //extraemos la extensión de la foto
        $ext = pathinfo(basename($_FILES["FotoPerfil"]["name"]),PATHINFO_EXTENSION);
            
        //cambiamos el nombre de la foto a nombreusuario.extension (pepote.png)
        $foto = $nombre . "." . $ext;

        //guardamos el nombre de la foto para poder mostrarla en userconfig.php
        $_SESSION["foto"] = $foto;

        //subimos la imagen al servidor
        move_uploaded_file($_FILES["FotoPerfil"]["tmp_name"], $carpeta . $foto);
    }

    //volvemos a página de configuración
    header('Location: ../userconfig.php');
?>