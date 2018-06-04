/// <reference path="./empleado.ts" />

namespace Clases
{
    class Fabrica
    {
        private _empleados:Empleado[];
        private _razonSocial:string;

        public constructor(razonSocial:string)
        {
            this._razonSocial = razonSocial;
            this._empleados = new Array();
        }

        public AgregarEmpleado(persona:Empleado):boolean
        {
            if(persona != null)
            {
                this._empleados.push(persona);
                return true;
            }

            return false;
        }

        public CalcularSueldos():number
        {
            var sueldo:number = 0;

            for(let i = 0; i < this._empleados.length; i++)
            {
                sueldo += this._empleados[i].GetSueldo();
                break;
            }

            return sueldo;
        } 

        public EliminarEmpleado(persona:Empleado):boolean
        {
            for(let i = 0; i < this._empleados.length; i++)
            {
                if(persona.GetNombre() == this._empleados[i].GetNombre())
                {
                    this._empleados.splice(i, 1);
                    return true;
                }
            }

            return false;            
        }

        public ToString():string
        {
            var retorno:string = "Nombre: "+this._razonSocial+" - Lista de empleados:<br/>";
            var empleados:string = "";
            
            for(let i = 0; i < this._empleados.length; i++)
            {
                empleados.concat(this._empleados[i].ToString());
            }

            return retorno+empleados;
        }

    }
}