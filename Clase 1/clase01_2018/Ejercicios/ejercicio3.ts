var numero : number =5;
var cadena : string = "hola";

ejemploFUN(numero, cadena);

function ejemploFUN (numero:number, cadena?:string):void
{
    if(cadena != null)
    {
        for(var i = 0; i < numero; i++)
        {
            console.log(cadena);
        }
    }
    else
    {
        console.log(!numero);
    }
}