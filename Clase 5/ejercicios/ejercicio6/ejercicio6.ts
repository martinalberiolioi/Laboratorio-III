namespace Mostrar
{
    var xhttp = new XMLHttpRequest();    

    export function RecibirJSON():void
    {       
        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                alert(xhttp.responseText);
                console.log(xhttp.responseText);
            }
        }
        
        xhttp.open("POST", "./recibirColeccion.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send();
    }
}
Mostrar.RecibirJSON();
//ejecuta la funcion