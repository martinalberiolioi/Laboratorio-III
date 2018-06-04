<?php
    
    var_dump($_POST['obj']);
    //hace un var_dump del objeto recibido (el JSON de ejercicio3.ts)

    $objJSON = new stdClass();
    $objJSON = json_decode($_POST['obj']);
    //transforma el objeto de string a JSON de nuevo (vino como string por post)
    
    echo "Mostrando desde PHP ".$objJSON->producto[0]->codigoBarra.$objJSON->producto[0]->nombre.$objJSON->producto[0]->precio.$objJSON->producto[1]->codigoBarra.$objJSON->producto[1]->nombre.$objJSON->producto[1]->precio.$objJSON->producto[2]->codigoBarra.$objJSON->producto[2]->nombre.$objJSON->producto[2]->precio;
    //muestra 
?>