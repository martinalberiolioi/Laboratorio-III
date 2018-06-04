namespace Funciones
{
    var xhttp = new XMLHttpRequest();
    var Producto = {"codigoBarra" : 100, "nombre" : "pera", "precio" : 10};

    export function TraerAuto():void
    {
        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                alert(xhttp.responseText);
                console.log(xhttp.responseText);
            }
        }

        xhttp.open("POST", "traerAuto.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send('obj='+JSON.stringify(Producto));
    }
}

Funciones.TraerAuto();