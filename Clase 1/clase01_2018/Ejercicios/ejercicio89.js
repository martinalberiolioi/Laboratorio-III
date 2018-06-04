function calculoFactorial(numero) {
    var auxiliar = 1;
    for (var i = 1; i <= numero; i++) {
        auxiliar = auxiliar * i;
    }
    console.log(auxiliar);
}
calculoFactorial(5);
var numero = 5;
function pasarCubo(numero) {
    return (numero * numero * numero);
}
function mostrar(numero) {
    console.log(numero);
}
mostrar(pasarCubo(numero));
//la funcion mostrar recibe lo que devuelve la funcion pasarCubo. Todo en un solo paso 
