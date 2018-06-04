function calculoFactorial(numero:number):void
{
    var auxiliar:number = 1;

    for(var i = 1; i <= numero; i++)
    {
        auxiliar = auxiliar*i;
    }

    console.log(auxiliar);
}

calculoFactorial(5);