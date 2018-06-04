<?php

    if($_POST['txtPath'] != null)
    {
        $path = $_POST['txtPath'];

        if(file_exists($path))
        {
            $archivo = fopen($path, "r");
            $retorno = fread($archivo, filesize($path));

            fclose($archivo);

            echo($retorno);
        }
        else
        {
            echo("NO OK");
        }   
    }
    else
    {
        echo ("NO OK");
    }


?>