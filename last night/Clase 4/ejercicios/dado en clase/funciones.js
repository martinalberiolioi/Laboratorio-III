var Login;
(function (Login) {
    var xhttp = new XMLHttpRequest();
    function ValidarUsuario() {
        var usuario = document.getElementById('txtUsuario').value;
        var pass = document.getElementById('txtPass').value;
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText == "OK") {
                    document.body.style.backgroundColor = "green";
                    alert("OK");
                }
                else {
                    document.body.style.backgroundColor = "red";
                    alert("NO OK");
                }
            }
        };
        xhttp.open("POST", "validar.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("txtUsuario=" + usuario + "&txtPass=" + pass);
    }
    Login.ValidarUsuario = ValidarUsuario;
    function TraerTodos() {
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText != null) {
                    document.getElementById("divTodos").innerHTML = xhttp.responseText;
                }
            }
        };
        xhttp.open("POST", "botones.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("opcion=" + 1);
    }
    Login.TraerTodos = TraerTodos;
    function TraerNombre() {
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText != null) {
                    document.getElementById("divNombre").innerHTML = xhttp.responseText;
                }
            }
        };
        xhttp.open("POST", "botones.php", true);
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhttp.send("opcion=" + 2);
    }
    Login.TraerNombre = TraerNombre;
})(Login || (Login = {}));
