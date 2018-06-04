"use strict";
var Funciones;
(function (Funciones) {
    var xhttp = new XMLHttpRequest();
    function Validar() {
        var path = document.getElementById('txtPath').value;
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText == "NO OK") {
                    alert("No se encontro el archivo o no se pudo abrir");
                }
                else {
                    alert(xhttp.responseText);
                }
            }
        };
        xhttp.open("POST", "validar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("txtPath=" + path);
    }
    Funciones.Validar = Validar;
})(Funciones || (Funciones = {}));
