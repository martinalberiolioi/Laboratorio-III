<?php
    $objJSON = new stdClass();
    $objSTR = '[{"codigoBarra" : 100, "nombre" : "pera", "precio" : 10}, {"codigoBarra" : 101, "nombre" : "manzana", "precio" : 11}, {"codigoBarra" : 102, "nombre" : "kiwi", "precio" : 12}]';

    $objJSON = json_encode($objSTR);

    echo($objJSON);


?>