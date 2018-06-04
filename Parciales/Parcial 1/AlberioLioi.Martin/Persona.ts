namespace Entidades
{
    export class Persona
    {
        protected nombre:string;
        protected apellido:string;
        protected edad:number;

        public constructor(nombre:string, apellido:string, edad:number)
        {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }

        protected personaToString():string
        {
            return "Nombre: "+this.nombre+" - Apellido: "+this.apellido+" - Edad: "+this.edad+"\n";
        }
    }
}