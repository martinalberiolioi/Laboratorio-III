<?php

    $contador = 0;

    if($_POST['txtIngreso'] > 0)
    {
        for($i = $_POST['txtIngreso']; $i > 0; $i--)
        {
            if($i%2 != 1)
            {
                $contador++;
            }
        }

        echo($contador);

    }
    else
    {
        echo("NO OK");
    }


?>