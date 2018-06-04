<?php
    
    if(isset($_POST['txtUsuario'],$_POST['txtPass']))
    {
       $archivo = fopen("usuarios.txt", "r");
       $encontrado = false;

       while(!feof($archivo))
       {
           $stringArchivo = explode(" - ", trim(fgets($archivo)));

           if($_POST['txtUsuario'] == $stringArchivo[0] && $_POST['txtPass'] == $stringArchivo[1])
           {
               $encontrado = true;
               echo("OK");
               break;
           }
       }

       fclose($archivo);       

       if(!$encontrado)
       {
           echo("NO OK");
       }
    }

?>