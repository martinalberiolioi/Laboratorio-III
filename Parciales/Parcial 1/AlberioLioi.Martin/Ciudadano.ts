/// <reference path="./Persona.ts" />

namespace Entidades
{
    export class Ciudadano extends Persona
    {
        protected dni:number;
        protected pais:string;

        public constructor(nombre:string, apellido:string, edad:number, pais:string, dni:number)
        {
            super(nombre, apellido, edad)
            this.dni = dni;
            this.pais = pais;
        }

        public ciudadanoToJson():JSON
        {
            return JSON.parse(super.personaToString());
        }

    }
}