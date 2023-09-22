//Ejercicio 5
/*
Operadores:
5.Crea un archivo web que solicite 2 números, y a continuación, muestre el resultado de su suma.
*/

function alerta() {
    var mensaje;
    var opcion = prompt("Introduce un número");
    var opcion2 = prompt("Introduce otro número");
  
    if (opcion == null || opcion == "") {
      mensaje = "Has cancelado o no has introducido ningún número";
    } else {
      mensaje = (parseInt(opcion) + parseInt(opcion2)) ;
    }
    alert(mensaje);
  }
  /*
  function alerta() {
    var mensaje;
    var opcion = Number (prompt("Introduce un número"));
    var opcion2 = Number (prompt("Introduce otro número"));
  
    if (opcion == null || opcion == "") {
      mensaje = "Has cancelado o no has introducido ningún número";
    } else {
      mensaje = opcion + opcion2 ;
    }
    alert(mensaje);
  }
  */