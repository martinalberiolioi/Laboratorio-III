namespace Funciones
{
    var xhttp = new XMLHttpRequest();    

    export function Validar():void
    {
        let path:string = (<HTMLInputElement> document.getElementById('txtPath')).value;
        let palabra:string = (<HTMLInputElement> document.getElementById('txtPalabra')).value;

        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                if(xhttp.responseText == "NO EXISTE")
                {
                    alert("No se encontro el archivo o no se pudo abrir");
                }
                else if(xhttp.responseText == "NO ENCUENTRA")
                {
                    alert("No se encontro la palabra");
                }
            }
        }

        xhttp.open("POST", "validar.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send("txtPath="+path+"&txtPalabra="+palabra);
    }
}