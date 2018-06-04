var numero:number = 5;

function pasarCubo(numero:number):number
{
    return (numero*numero*numero);
}

function mostrar(numero:number):void
{
    console.log(numero);
}

mostrar(pasarCubo(numero));

//la funcion mostrar recibe lo que devuelve la funcion pasarCubo. Todo en un solo paso