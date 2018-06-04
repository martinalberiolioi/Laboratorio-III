"use strict";
var Funciones;
(function (Funciones) {
    var xhttp = new XMLHttpRequest();
    function Validar() {
        var path = document.getElementById('txtPath').value;
        var palabra = document.getElementById('txtPalabra').value;
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText == "NO EXISTE") {
                    alert("No se encontro el archivo o no se pudo abrir");
                }
                else if (xhttp.responseText == "NO ENCUENTRA") {
                    alert("No se encontro la palabra");
                }
            }
        };
        xhttp.open("POST", "validar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("txtPath=" + path + "&txtPalabra=" + palabra);
    }
    Funciones.Validar = Validar;
})(Funciones || (Funciones = {}));
