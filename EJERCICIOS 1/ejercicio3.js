/*3. La inmobiliaria “Sucasa” es una empresa dedicada a la compraventa de casas. Hacer un programa en JavaScript
que cumpla los siguientes requisitos o características (programa básico-simulación):
a. Solicitar al usuario el costo de la casa.
b. Solicitar al usuario el ingreso del tipo de inmueble (1. Usado 2. Nuevo)
c. Calcular la comisión de la inmobiliaria en la venta así:
• Si es usado, tiene el 10% de comisión basado en el costo de la vivienda.
• Si es nuevo, tiene el 12% de la comisión basado en el costo de la vivienda.
d. El sistema debe mostrar al usuario cuanto es el valor que recibe el propietario y cuanto es el valor recibido
por la inmobiliaria.*/

let valorCasa = 20000000;
let tipoInmueble = 1;

function comisionInmobiliaria() {
  if (tipoInmueble == 1) {
    console.log("propietario recibe " + valorCasa * 0.9 + " le queda la inmobiliaria " + valorCasa * 0.1 );
  } else if (tipoInmueble == 2) {
    console.log("propietario recibe " + valorCasa * 0.88 + " le queda la inmobiliaria " + valorCasa * 0.12);
  } else {
    console.log(" no posee ningun valor disponible ");
  }
}
comisionInmobiliaria();
