"use strict";
var numero = 5;
var cadena = "hola";
ejemploFUN(numero, cadena);
function ejemploFUN(numero, cadena) {
    if (cadena != null) {
        for (var i = 0; i < numero; i++) {
            console.log(cadena);
        }
    }
    else {
        console.log(!numero);
    }
}
//# sourceMappingURL=ejercicio3.js.map