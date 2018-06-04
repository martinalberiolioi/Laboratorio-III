/// <reference path="./Ciudadano.ts" />

namespace Test
{
    var xhttp = new XMLHttpRequest(); 

    export function AgregarCiudadano():void
    {
        var nombre = (<HTMLInputElement> document.getElementById('txtNombre')).value;
        var apellido = (<HTMLInputElement> document.getElementById('txtApellido')).value;
        var edad = (<HTMLInputElement> document.getElementById('txtEdad')).value;
        var dni = (<HTMLInputElement> document.getElementById('txtDni')).value;
        var pais = (<HTMLInputElement> document.getElementById('cboPais')).value;

        //var $cadenaJSON = '{"nombre" : '+nombre+', "apellido" : '+apellido+', "edad" : '+edad+', "dni" : '+dni+', "pais": '+pais+'}';

        var unCiudadano = new Entidades.Ciudadano(nombre, apellido, parseInt(edad),pais,  parseInt(dni));

        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                alert("La funcion AgregarCiudadano FUNCIONA");
            }
            else
            {
                alert("La funcion AgregarCiudadano FALLO");
            }

            LimpiarForm();
        }

        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send('cadenaJson='+JSON.stringify(unCiudadano)+'&caso='+"agregar");
    }

    export function MostrarCiudadanos():void
    {
        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                (<HTMLDivElement> document.getElementById('divTabla')).innerHTML = xhttp.responseText;               
            }

            LimpiarForm();
        }
        
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send('caso='+'mostrar');
    }

    export function EliminarCiudadano(aEliminar:JSON):void
    {
        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                alert(xhttp.responseText);
                //hacer lo que sea
            }

            LimpiarForm();
        }
        
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send('cadenaJson='+aEliminar+'&caso='+'eliminar');
    }

    export function ModificarCiudadano(aMostrar:JSON):void
    {
        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                alert(xhttp.responseText);
                //hacer listado dinamico
            }

            LimpiarForm();
        }
        
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send('caso='+'modificar');
    }

    export function FiltrarCiudadanosPorPais():void
    {
        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                var $lista = JSON.parse(xhttp.responseText);

                for(let i = 0; i < Object.keys($lista).length; i++)
                {
                    (<HTMLDivElement> document.getElementById('divTabla')).innerHTML = xhttp.responseText;  
                }
            }

            LimpiarForm();
        }
        
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send('caso='+'mostrar');
    }

    export function CargarPaisesJSON():void
    {
        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState == 4 && xhttp.status == 200)
            {
                (<HTMLInputElement> document.getElementById('cboPais')).value = xhttp.responseText;
            }

            LimpiarForm();
        }
        
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhttp.send('caso='+'paises');
    }

    export function LimpiarForm():void
    {
        (<HTMLInputElement> document.getElementById('txtNombre')).value = "";
        (<HTMLInputElement> document.getElementById('txtApellido')).value = "";
        (<HTMLInputElement> document.getElementById('txtDni')).value = "";
        (<HTMLInputElement> document.getElementById('txtEdad')).value = "";
        (<HTMLInputElement> document.getElementById('cboPais')).value = "Argentina";
    }
}