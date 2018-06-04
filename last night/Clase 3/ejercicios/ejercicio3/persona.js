"use strict";
var Clases;
(function (Clases) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, dni, sexo) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._dni = dni;
            this._sexo = sexo;
        }
        Persona.prototype.GetNombre = function () {
            return this._nombre;
        };
        Persona.prototype.GetApellido = function () {
            return this._apellido;
        };
        Persona.prototype.GetDNI = function () {
            return this._dni;
        };
        Persona.prototype.GetSexo = function () {
            return this._sexo;
        };
        Persona.prototype.Hablar = function (idioma) {
            return "Esta persona habla " + idioma;
        };
        Persona.prototype.ToString = function () {
            return "Nombre: " + this._nombre + " - Apellido: " + this._apellido + " - DNI: " + this._dni + " - Sexo: " + this._sexo;
        };
        return Persona;
    }());
    Clases.Persona = Persona;
})(Clases || (Clases = {}));
//# sourceMappingURL=persona.js.map