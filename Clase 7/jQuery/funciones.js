function Saludar()
{
    var contenido = $("#idNombre").val();
    //recupera el valor del input text segun su id (idNombre). Antes se antepone #

    /* ///ENVIA COMO TEXTO Y RECIBE UN JSON///
    $.ajax({
        type: "POST", //envia por post
        url:"./funcionesPhp.php", //le pega a este php para ejecutar su funcion
        data: "nombre="+contenido, //contenido tiene $("#idNombre").val();
        dataType:"JSON", //espera recibir un objeto de tipo JSON
        async:true //lo hace de forma asincronica (porque es JSON)
    })
    .done(function(objPersona){
        $("#idDiv").html(JSON.stringify(objPersona));
    })
    */

    console.log("antes del ajax");

    $.ajax({
        type: "POST", //envia por post
        url:"./funciones.php", //le pega a este php para ejecutar su funcion
        data: JSON.parse('{"nombre":'+contenido+'}'), //contenido tiene $("#idNombre").val();
        dataType:"JSON", //espera recibir un objeto de tipo JSON
        async:true //lo hace de forma asincronica (porque es JSON)
    })
    .done(function(objPersona){
        console.log("en el done");
        $("#idDiv").html(objPersona);
    })

    console.log("despues del ajax");

    /*$("#idDiv").html("hola, "+contenido);
    //establece el valor del div
    */
}