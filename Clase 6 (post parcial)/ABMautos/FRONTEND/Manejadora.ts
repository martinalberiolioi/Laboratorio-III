/// <reference path="./Auto.ts" />

namespace Enlace {
    export class Manejadora {
        public static Agregar(): void {

            let caso=(<HTMLInputElement>document.getElementById("txtPatente")).value;
            //el caso es para saber si agrega o modifica 

            let patente = (<HTMLInputElement>document.getElementById("txtPatente")).value;
            let marca = (<HTMLInputElement>document.getElementById("cboMarca")).value;
            let precio = Number((<HTMLInputElement>document.getElementById("txtPrecio")).value);

            let xhttp: XMLHttpRequest = new XMLHttpRequest();

            let unAuto = new Clases.Auto(patente, marca, precio);

            xhttp.open("POST", "./BACKEND/administrar.php");
            xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");

            if(caso == "agregar")
            {
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
            else
            {
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

                (<HTMLInputElement>document.getElementById("hdnIdModificacion")).value='agregar';
                //vuelve a cambiar la accion del boton Agregar a "agregar". Sino queda en modificar
            }
           

        }

        public static Mostrar(): void {
            let xhttp: XMLHttpRequest = new XMLHttpRequest();

            xhttp.open("POST", "./BACKEND/administrar.php");
            xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhttp.send("caso=mostrar");

            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {

                        let objArray = JSON.parse(xhttp.responseText);
                        let tablaAMostrar = '<table style="border:1px"><th>Patente</th><th>Marca</th><th>Precio</th><th>Edicion</th>';
                        //crea una tabla

                        objArray.forEach((elemento: any) => {
        
                            tablaAMostrar += `<tr><td>${elemento.patente}</td><td>${elemento.marca}</td><td>${elemento.precio}</td><td><input type="button" value="Eliminar" onclick='Enlace.Manejadora.Eliminar(${JSON.stringify(elemento)})'><input type="button" value="Modificar" onclick='Enlace.Manejadora.Modificar(${JSON.stringify(elemento)})'></td></tr>`;
                            //por cada elemento del array de JSON, crea una entrada en la tabla
                        });
                        tablaAMostrar+="</table>";
                        //cierra la tabla
                        (<HTMLDivElement>document.getElementById('divTabla')).innerHTML="";
                        //limpia la tabla
                        (<HTMLDivElement>document.getElementById('divTabla')).innerHTML=tablaAMostrar;
                        //le pasa la tabla que creamos al div (tabla) del html

                        Enlace.Manejadora.Limpiar();
                    }
                }
            };
        }

        public static Eliminar(aEliminar:string): void {

            let xhttp: XMLHttpRequest = new XMLHttpRequest();

            xhttp.open("POST", "./BACKEND/administrar.php");
            xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhttp.send("caso=eliminar&cadenaJson="+JSON.stringify(aEliminar));

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

        }

        public static Modificar(aModificar:any): void {
            
            (<HTMLInputElement>document.getElementById("txtPatente")).value = aModificar.patente;
            (<HTMLInputElement>document.getElementById("txtPatente")).readOnly = true;
            //convierte a readOnly para que no dejen cambiar la patente
            (<HTMLInputElement>document.getElementById("cboMarca")).value = aModificar.marca;
            ((<HTMLInputElement>document.getElementById("txtPrecio")).value) = aModificar.precio;


            (<HTMLInputElement>document.getElementById("hdnIdModificacion")).value='modificar';
            //cambia el comportamiento del boton Agregar a "modificar", para que modifique

            Enlace.Manejadora.Agregar();
            //llama a Agregar() para usarlo en modo "Modificar"
        }

        public static CargarMarcas():void
        {
            let xhttp: XMLHttpRequest = new XMLHttpRequest();

            xhttp.open("POST", "./BACKEND/administrar.php");
            xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhttp.send("caso=marcas");

            xhttp.onreadystatechange = function () {
                    if (xhttp.readyState == 4) {
                        if (xhttp.status == 200) {

                            let objArray = JSON.parse(xhttp.responseText);

                            (<HTMLInputElement>document.getElementById("cboMarca")).innerHTML = "";
                            //lo limpia

                            objArray.forEach((elemento:any) => {
                                (<HTMLInputElement>document.getElementById("cboMarca")).innerHTML += '<option>'+elemento.descripcion+'</option>';
                                //por cada elemento, hace un option para agregarlo

                        })
                    }
                }
            }
        }

        public static Filtrar():void
        {
            let xhttp: XMLHttpRequest = new XMLHttpRequest();

            xhttp.open("POST", "./BACKEND/administrar.php");
            xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhttp.send("caso=marcas");

            xhttp.onreadystatechange = function () {
                    if (xhttp.readyState == 4) {
                        if (xhttp.status == 200) {

                            let objArray = JSON.parse(xhttp.responseText);

                            (<HTMLInputElement>document.getElementById("cboMarca")).innerHTML = "";
                            //lo limpia

                            objArray.forEach((elemento:any) => {
                                (<HTMLInputElement>document.getElementById("cboMarca")).innerHTML += '<option>'+elemento.descripcion+'</option>';
                                //por cada elemento, hace un option para agregarlo

                        })
                    }
                }
            }
        }

        public static Limpiar():void
        {
            (<HTMLInputElement>document.getElementById("txtPatente")).value = "";
            (<HTMLInputElement>document.getElementById("cboMarca")).value = "Renault";
            ((<HTMLInputElement>document.getElementById("txtPrecio")).value) = "";
        }
    }
}