"use strict";
function mostrarPrimos() {
    var contador = false;
    var auxiliar = 0;
    for (var i = 1; i < 100; i++) {
        auxiliar = i;
        if (auxiliar / i == 1 && auxiliar / 1 == 1) {
            contador = true;
        }
        if (contador) {
            console.log(auxiliar);
        }
    }
}
mostrarPrimos();
//# sourceMappingURL=ejercicio7.js.map