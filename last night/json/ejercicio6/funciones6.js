"use strict";
var Funciones;
(function (Funciones) {
    var xhttp = new XMLHttpRequest();
    function RecibirColeccion() {
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
                console.log(xhttp.responseText);
            }
        };
        xhttp.open("POST", "recibirColeccion.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send();
    }
    Funciones.RecibirColeccion = RecibirColeccion;
})(Funciones || (Funciones = {}));
Funciones.RecibirColeccion();
