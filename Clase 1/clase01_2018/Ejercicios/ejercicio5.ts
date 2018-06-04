var nombre:string ="Martin";
var apellido:string ="Alberio Lioi";

function MostrarNombreApellido(nombre:string, apellido:string):void
{
    console.log(`${apellido.toUpperCase()}, ${nombre.charAt(0).toUpperCase()+nombre.slice(1).toLowerCase()}`);
}

MostrarNombreApellido(nombre, apellido);