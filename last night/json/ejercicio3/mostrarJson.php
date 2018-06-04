<?php
    
    $objeto = new stdClass();
    $objeto = json_decode($_POST['obj']);
    
    echo($objeto->codigoBarra." - ".$objeto->nombre." - ".$objeto->precio);


?>