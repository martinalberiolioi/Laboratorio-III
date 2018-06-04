/// <reference path="./Interface.ts"/>

namespace Clases
{
    export class Auto implements Interfaces.ITributable
    {
        protected _patente:string;
        protected _marca:string;
        protected _precio:number;

        public constructor(patente:string, marca:string, precio:number)
        {
            this._patente = patente;
            this._marca = marca;
            this._precio = precio;
        }

        public ToJSON():JSON //devuelve los atributos como objeto JSON
        {
            return JSON.parse('{"patente" : "'+this._patente+'", "marca" : "'+this._marca+'", "precio" : '+this._precio+'}');
        }

        public GetPrecioConIva():number
        {
            let impuesto = (this._precio * 21) /100;

            return this._precio + impuesto;
        }

    }
}