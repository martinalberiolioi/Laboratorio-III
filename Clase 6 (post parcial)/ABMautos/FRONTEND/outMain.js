/// <reference path="./Interface.ts"/>
var Clases;
(function (Clases) {
    var Auto = /** @class */ (function () {
        function Auto(patente, marca, precio) {
            this._patente = patente;
            this._marca = marca;
            this._precio = precio;
        }
        Auto.prototype.ToJSON = function () {
            return JSON.parse('{"patente" : "' + this._patente + '", "marca" : "' + this._marca + '", "precio" : ' + this._precio + '}');
        };
        Auto.prototype.GetPrecioConIva = function () {
            var impuesto = (this._precio * 21) / 100;
            return this._precio + impuesto;
        };
        return Auto;
    }());
    Clases.Auto = Auto;
})(Clases || (Clases = {}));
/// <reference path="./Auto.ts" />
var Enlace;
(function (Enlace) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.Agregar = function () {
            var caso = document.getElementById("txtPatente").value;
            //el caso es para saber si agrega o modifica 
            var patente = document.getElementById("txtPatente").value;
            var marca = document.getElementById("cboMarca").value;
            var precio = Number(document.getElementById("txtPrecio").value);
            var xhttp = new XMLHttpRequest();
            var unAuto = new Clases.Auto(patente, marca, precio);
            xhttp.open("POST", "./BACKEND/administrar.php");
            xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            if (caso == "agregar") {
                xhttp.send("caso=agregar&cadenaJson=" + JSON.stringify(unAuto.ToJSON()));
                xhttp.onreadystatechange = function () {
                    if (xhttp.readyState == 4) {
                        if (xhttp.status == 200) {
                            console.log("Auto agregado con exito!" + xhttp.responseText);
                            Enlace.Manejadora.Limpiar();
                        }
                        else {
                            console.error("No se pudo agregar el auto" + xhttp.responseText);
                            Enlace.Manejadora.Limpiar();
                        }
                    }
                };
            }
            else {
                xhttp.send("caso=modificar&cadenaJson=" + JSON.stringify(unAuto.ToJSON()));
                xhttp.onreadystatechange = function () {
                    if (xhttp.readyState == 4) {
                        if (xhttp.status == 200) {
                            console.log("Auto modificado con exito!" + xhttp.responseText);
                        }
                        else {
                            console.error("No se pudo modificar el auto" + xhttp.responseText);
                        }
                    }
                };
                document.getElementById("hdnIdModificacion").value = 'agregar';
                //vuelve a cambiar la accion del boton Agregar a "agregar". Sino queda en modificar
            }
        };
        Manejadora.Mostrar = function () {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "./BACKEND/administrar.php");
            xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhttp.send("caso=mostrar");
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {
                        var objArray = JSON.parse(xhttp.responseText);
                        var tablaAMostrar_1 = '<table style="border:1px"><th>Patente</th><th>Marca</th><th>Precio</th><th>Edicion</th>';
                        //crea una tabla
                        objArray.forEach(function (elemento) {
                            tablaAMostrar_1 += "<tr><td>" + elemento.patente + "</td><td>" + elemento.marca + "</td><td>" + elemento.precio + "</td><td><input type=\"button\" value=\"Eliminar\" onclick='Enlace.Manejadora.Eliminar(" + JSON.stringify(elemento) + ")'><input type=\"button\" value=\"Modificar\" onclick='Enlace.Manejadora.Modificar(" + JSON.stringify(elemento) + ")'></td></tr>";
                            //por cada elemento del array de JSON, crea una entrada en la tabla
                        });
                        tablaAMostrar_1 += "</table>";
                        //cierra la tabla
                        document.getElementById('divTabla').innerHTML = "";
                        //limpia la tabla
                        document.getElementById('divTabla').innerHTML = tablaAMostrar_1;
                        //le pasa la tabla que creamos al div (tabla) del html
                        Enlace.Manejadora.Limpiar();
                    }
                }
            };
        };
        Manejadora.Eliminar = function (aEliminar) {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "./BACKEND/administrar.php");
            xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhttp.send("caso=eliminar&cadenaJson=" + JSON.stringify(aEliminar));
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {
                        console.log("Auto eliminado con exito!" + xhttp.responseText);
                        Enlace.Manejadora.Limpiar();
                    }
                    else {
                        console.error("No se pudo eliminar el auto" + xhttp.responseText);
                        Enlace.Manejadora.Limpiar();
                    }
                }
            };
        };
        Manejadora.Modificar = function (aModificar) {
            document.getElementById("txtPatente").value = aModificar.patente;
            document.getElementById("txtPatente").readOnly = true;
            //convierte a readOnly para que no dejen cambiar la patente
            document.getElementById("cboMarca").value = aModificar.marca;
            (document.getElementById("txtPrecio").value) = aModificar.precio;
            document.getElementById("hdnIdModificacion").value = 'modificar';
            //cambia el comportamiento del boton Agregar a "modificar", para que modifique
            Enlace.Manejadora.Agregar();
            //llama a Agregar() para usarlo en modo "Modificar"
        };
        Manejadora.CargarMarcas = function () {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "./BACKEND/administrar.php");
            xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhttp.send("caso=marcas");
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {
                        var objArray = JSON.parse(xhttp.responseText);
                        document.getElementById("cboMarca").innerHTML = "";
                        objArray.forEach(function (elemento) {
                            document.getElementById("cboMarca").innerHTML += '<option>' + elemento.descripcion + '</option>';
                        });
                    }
                }
            };
        };
        Manejadora.Limpiar = function () {
            document.getElementById("txtPatente").value = "";
            document.getElementById("cboMarca").value = "Renault";
            (document.getElementById("txtPrecio").value) = "";
        };
        return Manejadora;
    }());
    Enlace.Manejadora = Manejadora;
})(Enlace || (Enlace = {}));
