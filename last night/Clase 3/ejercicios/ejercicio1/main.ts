/// <reference path="./Clases/Rectangulo.ts" />

var puntoUno:Figuras.Punto = new Figuras.Punto(1,6);
var puntoDos:Figuras.Punto = new Figuras.Punto(4,2);
var unRectangulo:Figuras.Rectangulo = new Figuras.Rectangulo(puntoUno, puntoDos);

console.log(unRectangulo.ToString());