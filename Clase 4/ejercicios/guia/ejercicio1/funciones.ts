namespace Funciones
{
    var xhttp = new XMLHttpRequest();    

    export function Validar():void
    {
        let numero:string = (<HTMLInputElement> document.getElementById('txtIngreso')).value;

        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                if(xhttp.responseText == "NO OK")
                {
                    alert("Numero ingresado no valido");
                }
                else
                {
                    alert("Cantida de numeros impares entre el 0 y el numero ingresado: "+xhttp.responseText);
                }
            }
        }

        xhttp.open("POST", "validar.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send("txtIngreso="+numero);
    }
}