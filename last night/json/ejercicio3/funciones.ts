namespace Funciones
{
    var xhttp = new XMLHttpRequest();

    export function Enviar():void
    {
        var Producto = {"codigoBarra" : 100, "nombre" : "pera", "precio" : 10};

        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                if(xhttp.responseText == "OK")
                {
                    (<HTMLDivElement>document.getElementById('mostrar')).innerHTML=xhttp.responseText;
                }
                else
                {
                    console.log(xhttp.responseText);
                }
            }
        }

        xhttp.open("POST", "mostrarJson.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send("obj="+JSON.stringify(Producto));
    }
}

Funciones.Enviar();