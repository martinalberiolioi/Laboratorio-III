function Mostrar():void
{
    let nombre = (<HTMLInputElement> document.getElementById("nombre")).value;
    let mail = (<HTMLInputElement> document.getElementById("mail")).value;
    let dni = (<HTMLInputElement> document.getElementById("dni")).value;
    let curriculum = (<HTMLInputElement> document.getElementById("curriculum")).value;

    alert(nombre + mail + dni + curriculum);
}