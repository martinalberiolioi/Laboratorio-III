<?php

    if($_POST['opcion'] == 1)
    {
        $archivo = fopen("usuariosP.txt","r");

        echo(fread($archivo, filesize("usuariosP.txt")));

        fclose($archivo);
    }
    else if($_POST['opcion'] == 2)
    {
        $archivo = fopen("usuariosP.txt","r");
        
        while(!feof($archivo))
        {
            $stringArchivo = explode("-", trim(fgets($archivo)));
            
            if($stringArchivo[5] == "Argentina")
            {
                //array_push a un array para cargar los de argentina
            }

        }

    }

?>