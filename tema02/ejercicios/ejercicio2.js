//Ejercicio 2
/*
Funciones básicas:
2.Crea un archivo web que pregunte al usuario una pregunta (Ej: ¿Número de hijos?) , y a continuación muestre un mensaje con la respuesta recibida.
*/
function alerta() {
  var mensaje;
  var opcion = prompt("¿Numero de hijos?", "0");

  if (opcion == null || opcion == "") {
    mensaje = "Has cancelado o no has introducido ningún número";
  } else {
    mensaje = "Tienes " + opcion + " hijos";
  }
  alert(mensaje);
}