var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funciones;
(function (Funciones) {
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
    Funciones.Persona = Persona;
})(Funciones || (Funciones = {}));
/// <reference path="./persona.ts" />
var Funciones;
(function (Funciones) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nombre, apellido, dni, sexo, legajo, sueldo) {
            var _this = _super.call(this, nombre, apellido, dni, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            return _this;
        }
        Empleado.prototype.GetLegajo = function () {
            return this._legajo;
        };
        Empleado.prototype.GetSueldo = function () {
            return this._sueldo;
        };
        Empleado.prototype.Hablar = function (idioma) {
            return _super.prototype.Hablar.call(this, idioma);
        };
        Empleado.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + " - Legajo: " + this._legajo + " - Sueldo: " + this._sueldo;
        };
        return Empleado;
    }(Funciones.Persona));
    Funciones.Empleado = Empleado;
})(Funciones || (Funciones = {}));
/// <reference path="./empleado.ts" />
var unEmpleado = new Funciones.Empleado("Juan", "Perez", 40729570, "Masculino", 105970, 15000);
console.log(unEmpleado.GetNombre()) + "\n";
console.log(unEmpleado.GetApellido()) + "\n";
console.log(unEmpleado.GetDNI()) + "\n";
console.log(unEmpleado.GetSexo()) + "\n";
console.log(unEmpleado.GetLegajo()) + "\n";
console.log(unEmpleado.GetSueldo()) + "\n";
