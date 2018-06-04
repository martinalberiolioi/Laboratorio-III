"use strict";
var Mostrar;
(function (Mostrar) {
    var xhttp = new XMLHttpRequest();
    function EnviarJSON() {
        var objJSON = {
            "producto": [
                { "codigoBarra": 500, "nombre": "walmart", "precio": 25 },
                { "codigoBarra": 501, "nombre": "yodeling", "precio": 50 },
                { "codigoBarra": 502, "nombre": "kid", "precio": 58 }
            ]
        };
        //crea un producto de tipo JSON
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //si todo sale bien...
                document.getElementById('mostrar').innerHTML = xhttp.responseText;
                //anda al html, fijate el div llamado "mostrar" que esta dentro tuyo (innterHTML) y mostra lo que devuelve el xttp (responseText)
                console.log(xhttp.responseText);
                //muestra la respuesta del servidor (mostrarJson.php)
            }
        };
        xhttp.open("POST", "./mostrarColeccionJson.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("obj=" + JSON.stringify(objJSON));
        //envia a mostrarColeccionJson.php un objeto tipo string que tiene como valor el JSON, pero pasado a string (stringify)
    }
    Mostrar.EnviarJSON = EnviarJSON;
})(Mostrar || (Mostrar = {}));
Mostrar.EnviarJSON();
//ejecuta la funcion 
