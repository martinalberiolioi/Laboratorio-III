<?php

    if($_POST['txtPath'] != null && $_POST['txtPalabra'] != null)
    {
        $path = $_POST['txtPath'];
        $palabra = $_POST['txtPalabra'];

        if(file_exists($path))
        {
            $archivo = fopen($path, "r");
            $encontro = false;
            
            while(!feof($archivo))
            {
                if(fgets($archivo) == $palabra)
                {
                    $retorno = "Se encontro la palabra: "+$palabra;
                    $encontro = true;
                    break;
                }
            }

            fclose($archivo);

            if($encontro)
            {
                echo($retorno);
            }
            else
            {
                echo "NO ENCUENTRA";
            }
        }
        else
        {
            echo("NO EXISTE");
        }   
    }
    else
    {
        echo ("NO EXISTE");
    }


?>