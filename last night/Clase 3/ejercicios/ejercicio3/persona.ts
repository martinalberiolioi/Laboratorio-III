namespace Clases
{
    export abstract class Persona
    {
        private _apellido: string;
        private _dni: number;
        private _nombre:string;
        private _sexo:string;

        public constructor(nombre:string, apellido:string, dni:number, sexo:string)
        {
            this._nombre = nombre;
            this._apellido = apellido;
            this._dni = dni;
            this._sexo = sexo;
        }

        public GetNombre():string
        {
            return this._nombre;
        }

        public GetApellido():string
        {
            return this._apellido;
        }

        public GetDNI():number
        {
            return this._dni;
        }

        public GetSexo():string
        {
            return this._sexo;
        }

        public Hablar(idioma:string):string
        {
            return "Esta persona habla "+idioma;
        }

        public ToString():string
        {
            return "Nombre: "+this._nombre+" - Apellido: "+this._apellido+" - DNI: "+this._dni+" - Sexo: "+this._sexo;
        }
        
    }
}