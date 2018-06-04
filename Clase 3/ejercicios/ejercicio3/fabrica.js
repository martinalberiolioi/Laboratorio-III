"use strict";
/// <reference path="./empleado.ts" />
var Clases;
(function (Clases) {
    var Fabrica = /** @class */ (function () {
        function Fabrica(razonSocial) {
            this._razonSocial = razonSocial;
            this._empleados = new Array();
        }
        Fabrica.prototype.AgregarEmpleado = function (persona) {
            if (persona != null) {
                this._empleados.push(persona);
                return true;
            }
            return false;
        };
        Fabrica.prototype.CalcularSueldos = function () {
            var sueldo = 0;
            for (var i = 0; i < this._empleados.length; i++) {
                sueldo += this._empleados[i].GetSueldo();
                break;
            }
            return sueldo;
        };
        Fabrica.prototype.EliminarEmpleado = function (persona) {
            for (var i = 0; i < this._empleados.length; i++) {
                if (persona.GetNombre() == this._empleados[i].GetNombre()) {
                    this._empleados.splice(i, 1);
                    return true;
                }
            }
            return false;
        };
        Fabrica.prototype.ToString = function () {
            var retorno = "Nombre: " + this._razonSocial + " - Lista de empleados:<br/>";
            var empleados = "";
            for (var i = 0; i < this._empleados.length; i++) {
                empleados.concat(this._empleados[i].ToString());
            }
            return retorno + empleados;
        };
        return Fabrica;
    }());
})(Clases || (Clases = {}));
//# sourceMappingURL=fabrica.js.map