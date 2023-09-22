//Ejercicio 6
/*
Operadores:
6.Crea un archivo web que solicite una velocidad expresada en km/h y a continuación, se muestre el valor en m/s.
*/

function alerta() {
    var mensaje;
    var opcion = prompt("Introduce una velocidad en km/h");
  
    if (opcion == null || opcion == "") {
      mensaje = "Has cancelado o no has introducido ningún número";
    } else {
        metrossegundos = ((opcion * 1000) / 3600); 
      mensaje = metrossegundos ;
    }
    alert(metrossegundos);
  }