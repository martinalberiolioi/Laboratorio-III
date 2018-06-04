/// <reference path="./empleado.ts" />

var unEmpleado:Clases.Empleado = new Clases.Empleado("Juan", "Perez", 40729570, "Masculino", 105970, 15000);

console.log(unEmpleado.GetNombre())+"\n";
console.log(unEmpleado.GetApellido())+"\n";
console.log(unEmpleado.GetDNI())+"\n";
console.log(unEmpleado.GetSexo())+"\n";
console.log(unEmpleado.GetLegajo())+"\n";
console.log(unEmpleado.GetSueldo())+"\n";