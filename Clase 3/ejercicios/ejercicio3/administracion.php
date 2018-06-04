<?php

    if($_POST['txtNombre'] != null && $_POST['txtApellido'] != null && $_POST['txtDNI'] != null && $_POST['txtSexo'] != null && $_POST['txtLegajo'] != null && $_POST['txtSueldo'] != null)
    {
      // $empleado = new Empleado($_POST['txtNombre'], $_POST['txtApellido'], $_POST['txtDNI'], $_POST['txtSexo'], $_POST['txtLegajo'], $_POST['txtSueldo']);

       //$empleado.ToString();

       echo ($_POST['txtNombre']." - ".$_POST['txtApellido']." - ".$_POST['txtDNI']." - ".$_POST['txtSexo']." - ".$_POST['txtLegajo']." - ".$_POST['txtSueldo']);
    }
    else
    {
        echo ('<a href="./index.html">Error. Volver a la pagina principal</a>');
    }

?>