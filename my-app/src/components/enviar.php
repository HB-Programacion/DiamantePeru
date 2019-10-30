<?php 
//llamando a ls campos 
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//datos consultas@diamanteperu.com
$destinatario="yeniferalexandragapezo@gmail.com";
$asunto = "contacto desde nuestra web";

$carta = "De : $nombre + $apellido \n ";
$carta .= "Correo : $correo \n";
$carta .= "Telefono : $telefono \n "
$carta .= "Mensaje : $mensaje  ";


//enviando Mensaje
mail($destinatario,$asunto,$carta);
//header('Location:Home.jsx');

?>