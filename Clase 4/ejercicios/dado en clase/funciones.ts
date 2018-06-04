namespace Login
{
    var xhttp = new XMLHttpRequest();
    

    export function ValidarUsuario():void
    {
        let usuario:string = (<HTMLInputElement> document.getElementById('txtUsuario')).value;
        let pass:string = (<HTMLInputElement> document.getElementById('txtPass')).value;

        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                if(xhttp.responseText == "OK")
                {
                    document.body.style.backgroundColor = "green";
                    alert("OK");
                }
                else
                {
                    document.body.style.backgroundColor = "red";
                    alert("NO OK");
                }
            }
        }

        xhttp.open("POST", "validar.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send("txtUsuario="+usuario+"&txtPass="+pass);
    }

    export function TraerTodos():void
    {
        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                if(xhttp.responseText != null)
                {
                    (<HTMLDivElement> document.getElementById("divTodos")).innerHTML = xhttp.responseText;
                }
            }
        }

        xhttp.open("POST", "botones.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send("opcion="+1);
    }

    export function TraerNombre():void
    {
        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                if(xhttp.responseText != null)
                {
                    (<HTMLDivElement> document.getElementById("divNombre")).innerHTML = xhttp.responseText;
                }
            }
        }

        xhttp.open("POST", "botones.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send("opcion="+2);
    }
    
}
