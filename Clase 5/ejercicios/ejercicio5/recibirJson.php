<?php

    $objJSON = new stdClass();
    $objJSON->codigoBarra = "600";
    $objJSON->nombre = "FreshAvocado";
    $objJSON->precio = "10";
    
    echo json_encode($objJSON);  

?>