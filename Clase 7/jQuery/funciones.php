<?php
    $persona = new stdClass();
    //$persona->nombre = $_POST['nombre']; //se hace asi cuando recibe texto
    
    $persona = json_decode(json_encode($_POST['nombre']));

    $persona->nombre.= " MODIFICADOOOO";

    echo(json_encode($persona));
?>