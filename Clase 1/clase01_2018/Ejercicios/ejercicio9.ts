function numeros(numero:number):void
{
    if(numero > 0)
    {
        calculoFactorial(numero);
    }
    else
    {
        mostrar(pasarCubo(numero));
    }
}

numeros(3);