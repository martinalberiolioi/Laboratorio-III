<?php

    $objJSON = new stdClass();
    $objSTR = '{"codigoBarra" : 100, "nombre": "pera", "precio":10}';

    $objJSON = json_encode($objSTR);

    echo($objJSON);

?>