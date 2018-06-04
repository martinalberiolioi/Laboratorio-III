var Figuras;
(function (Figuras) {
    var Punto = /** @class */ (function () {
        function Punto(x, y) {
            this._x = x;
            this._y = y;
        }
        Punto.prototype.GetX = function () {
            return this._x;
        };
        Punto.prototype.GetY = function () {
            return this._y;
        };
        return Punto;
    }());
    Figuras.Punto = Punto;
})(Figuras || (Figuras = {}));
/// <reference path="./Punto.ts" />
/*

        *vertice1-------*vertice4
ladoUno |                       |
        |                       |
        *vertice2-------*vertice3

                ladoDos
*/
var Figuras;
(function (Figuras) {
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(v1, v3) {
            this._vertice1 = v1;
            this._vertice2 = new Figuras.Punto(v3.GetX(), v1.GetY());
            //(en eje de coordenadas) el vertice 2 va a tener la misma X que el vertice 1ç3 y la misma Y que el vertice 1
            this._vertice3 = v3;
            this._vertice4 = new Figuras.Punto(v1.GetX(), v3.GetY());
            //(en eje de coordenadas) el vertice 4 va a tener la misma X que el vertice 1 y la misma Y que el vertice 3
            this._ladoDos = this._vertice1.GetX() - this._vertice2.GetX(); //altura
            //un lado va a ser la diferencia entre la X del vertice 1, y la X del vertice 2 (la distancia entre ambos)
            //se resta el vertice 1 menos el 2, porque si se pusiese en un eje de coordenadas, el vertice 1 "vale mas" que el 2 (esta mas arriba)
            this._ladoUno = this._vertice3.GetY() - this._vertice2.GetY(); //ancho
            //el otro lado va a ser la diferencia entre la Y del vertice 2 y la Y del vertice 3 (la distancia entre ambos)
            //se resta el vertice 3 menos el 2, porque si se pusiese en un eje de coordenadas, el vertice 3 "vale mas" que el 2 (esta mas a la derecha)
            this._area = this._ladoDos * this._ladoUno; //area = base x altura
            this._perimetro = 2 * (this._ladoDos + this._ladoUno); //perimetro = 2 * (altura + ancho);
        }
        Rectangulo.prototype.GetArea = function () {
            return this._area;
        };
        Rectangulo.prototype.GetPerimetro = function () {
            return this._perimetro;
        };
        Rectangulo.prototype.ToString = function () {
            return "---Rectangulo---\nBase: " + this._ladoDos + "\nAltura: " + this._ladoUno + "\nArea: " + this._area + "\nPerimetro: " + this._perimetro + "\nVertice 1: (X: " + this._vertice1.GetX() + ", Y: " + this._vertice2.GetY() + ")\nVertice 2: (X: " + this._vertice2.GetX() + ", Y: " + this._vertice2.GetY() + ")\nVertice 3: (X: " + this._vertice3.GetX() + ", Y: " + this._vertice3.GetY() + ")\nVertice 4: (X: " + this._vertice4.GetX() + ", Y: " + this._vertice4.GetY() + ")\n";
        };
        return Rectangulo;
    }());
    Figuras.Rectangulo = Rectangulo;
})(Figuras || (Figuras = {}));
/// <reference path="./Clases/Rectangulo.ts" />
var puntoUno = new Figuras.Punto(1, 6);
var puntoDos = new Figuras.Punto(4, 2);
var unRectangulo = new Figuras.Rectangulo(puntoUno, puntoDos);
console.log(unRectangulo.ToString());
