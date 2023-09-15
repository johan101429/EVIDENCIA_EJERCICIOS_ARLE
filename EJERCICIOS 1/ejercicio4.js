/*“Lavan Ya” es un servicio de limpieza en el que los clientes envían sus prendas para que se laven y se planchen
en un lugar determinado. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
(programa básico-simulación):
a. El cliente escoge entre dos servicios: lavado o planchado.
b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
c. Se solicita la cantidad de prendas.
d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
• Lavado en seco: 2000 por prenda
• Lavado normal: 1500 por prenda
• Planchado: 1800 por prenda
e. Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es gratis.*/

let servicios = prompt(" 1. lavado 2. planchado ");
let lavadoEnSeco = 2000;
let lavadoNormal = 1500;
let planchado = 1800;
let valorAdicional = 3000;

function lavanderia(servicios) {
  let tipoLavado = "";
  let cantidadPrendas = 0;
  let costoTotal = 0;
  let respuesta = "";


  if (servicios == "planchado") {
    cantidadPrendas = prompt("ingrese la cantidad");
    costoTotal = planchado * cantidadPrendas + valorAdicional;
    respuesta =`el costo total a pagar  es $${costoTotal}`;
  }

  if (servicios == "lavado") {
    tipoLavado = prompt(" escriba 1. para lavado en seco  y 2. para lavado normal ");
    cantidadPrendas = prompt("ingrese la cantidad");
    if (tipoLavado == 1) {
      costoTotal = lavadoEnSeco * cantidadPrendas;
      respuesta =`el costo total a pagar  es $${costoTotal}`;
    } else if (tipoLavado == 2) {
      costoTotal = lavadoNormal * cantidadPrendas;
      respuesta =`el costo total a pagar  es $${costoTotal}`;
    } else {
      respuesta = " el servicio no es valido ";
    }
  }

  return respuesta

}
const resultado = lavanderia(servicios);
alert(resultado);
    



