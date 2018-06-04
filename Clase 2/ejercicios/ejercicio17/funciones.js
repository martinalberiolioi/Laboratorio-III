function Mostrar() {
    var arrayPeliculas = new Array();
    for (var i = 0; i < 5; i++) {
        arrayPeliculas.push(document.getElementById("pelicula").value);
    }
    for (var i = 0; i < 5; i++) {
        alert(arrayPeliculas.pop());
    }
}
