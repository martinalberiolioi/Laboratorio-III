<?php

    $arrayProductos = new stdClass();
    $arrayProductos = json_decode($_POST['obj']);

    echo($arrayProductos[0]->nombre." - ".$arrayProductos[0]->codigoBarra." - ".$arrayProductos[0]->precio." - ".$arrayProductos[1]->nombre." - ".$arrayProductos[1]->codigoBarra." - ".$arrayProductos[1]->precio." - ".$arrayProductos[2]->nombre." - ".$arrayProductos[2]->codigoBarra." - ".$arrayProductos[2]->precio)

?>