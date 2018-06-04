namespace Funciones
{
    var xhttp = new XMLHttpRequest();

    export function EnviarColeccion():void
    {
        var Producto = [{"codigoBarra" : 100, "nombre" : "pera", "precio" : 10}, {"codigoBarra" : 101, "nombre" : "manzana", "precio" : 11}, {"codigoBarra" : 102, "nombre" : "kiwi", "precio" : 12}];

        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                if(xhttp.responseText == "OK")
                {
                    console.log(xhttp.responseText);
                }
                else
                {
                    console.log(xhttp.responseText);
                }
            }
        }

        xhttp.open("POST", "mostrarColeccionJson.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send("obj="+JSON.stringify(Producto));
    }
}

Funciones.EnviarColeccion();