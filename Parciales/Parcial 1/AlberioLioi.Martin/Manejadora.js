"use strict";
/// <reference path="./Ciudadano.ts" />
var Test;
(function (Test) {
    var xhttp = new XMLHttpRequest();
    function AgregarCiudadano() {
        var nombre = document.getElementById('txtNombre').value;
        var apellido = document.getElementById('txtApellido').value;
        var edad = document.getElementById('txtEdad').value;
        var dni = document.getElementById('txtDni').value;
        var pais = document.getElementById('cboPais').value;
        //var $cadenaJSON = '{"nombre" : '+nombre+', "apellido" : '+apellido+', "edad" : '+edad+', "dni" : '+dni+', "pais": '+pais+'}';
        var unCiudadano = new Entidades.Ciudadano(nombre, apellido, parseInt(edad), pais, parseInt(dni));
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert("La funcion AgregarCiudadano FUNCIONA");
            }
            else {
                alert("La funcion AgregarCiudadano FALLO");
            }
            LimpiarForm();
        };
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send('cadenaJson=' + JSON.stringify(unCiudadano) + '&caso=' + "agregar");
    }
    Test.AgregarCiudadano = AgregarCiudadano;
    function MostrarCiudadanos() {
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById('divTabla').innerHTML = xhttp.responseText;
            }
            LimpiarForm();
        };
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send('caso=' + 'mostrar');
    }
    Test.MostrarCiudadanos = MostrarCiudadanos;
    function EliminarCiudadano(aEliminar) {
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
                //hacer lo que sea
            }
            LimpiarForm();
        };
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send('cadenaJson=' + aEliminar + '&caso=' + 'eliminar');
    }
    Test.EliminarCiudadano = EliminarCiudadano;
    function ModificarCiudadano(aMostrar) {
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
                //hacer listado dinamico
            }
            LimpiarForm();
        };
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send('caso=' + 'modificar');
    }
    Test.ModificarCiudadano = ModificarCiudadano;
    function FiltrarCiudadanosPorPais() {
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var $lista = JSON.parse(xhttp.responseText);
                for (var i = 0; i < Object.keys($lista).length; i++) {
                    document.getElementById('divTabla').innerHTML = xhttp.responseText;
                }
            }
            LimpiarForm();
        };
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send('caso=' + 'mostrar');
    }
    Test.FiltrarCiudadanosPorPais = FiltrarCiudadanosPorPais;
    function CargarPaisesJSON() {
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById('cboPais').value = xhttp.responseText;
            }
            LimpiarForm();
        };
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send('caso=' + 'paises');
    }
    Test.CargarPaisesJSON = CargarPaisesJSON;
    function LimpiarForm() {
        document.getElementById('txtNombre').value = "";
        document.getElementById('txtApellido').value = "";
        document.getElementById('txtDni').value = "";
        document.getElementById('txtEdad').value = "";
        document.getElementById('cboPais').value = "Argentina";
    }
    Test.LimpiarForm = LimpiarForm;
})(Test || (Test = {}));
