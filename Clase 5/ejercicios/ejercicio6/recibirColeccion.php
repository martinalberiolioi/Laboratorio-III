<?php

    $coleccion = new stdClass();
    $producto = new stdClass();

    //crea la coleccion y un producto

    $producto->codigoBarra="700";
    $producto->nombre="I don't";
    $producto->precio="3";

    $producto2 = new stdClass();

    $producto2->codigoBarra="701";
    $producto2->nombre="Feel";
    $producto2->precio="5";

    $coleccion->productos=array();

    //le agrega un atributo "productos" de tipo array a la coleccion, para despues llenarlo

    $producto3 = new stdClass();

    $producto3->codigoBarra="702";
    $producto3->nombre="So Good";
    $producto3->precio="18";

    array_push($coleccion->productos, $producto);
    array_push($coleccion->productos, $producto2);
    array_push($coleccion->productos, $producto3);

    //pushea todos los productos
    
    echo json_encode($coleccion);  

    //encodea y lo devuelve como JSON

?>