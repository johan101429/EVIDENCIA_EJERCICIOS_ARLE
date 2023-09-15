/*11. hacer en JavaScript el sistema de administración de pago para una pesa electrónica.
a. El usuario solo puede ingresar monedas o billetes
• Si es moneda, aceptar monedas de 500, 1000 solamente.
• Si es billete, de 2000 y 5000.
b. El servicio vale 500 pesos, el sistema debe indicar si falta dinero, si no tiene que devolver o el valor de la
devolución.
c. ¡Mostrar un mensaje “vuelve pronto!”*/


const precioServicio = 500;


function procesarPago() {
  const userInput = prompt("Ingrese el valor de su pago (500, 1000, 2000 o 5000):");
  const valorPago = parseInt(userInput);

  if (isNaN(valorPago)) {
    console.log("Ingreso inválido. Por favor, ingrese un valor numérico.");
    return;
  }

  if (valorPago === 500 || valorPago === 1000) {
    if (valorPago < precioServicio) {
      console.log("Falta dinero. El servicio cuesta " + precioServicio + " pesos.");
    } else if (valorPago === precioServicio) {
      console.log("Gracias por su pago. No se requiere devolución.");
    } else {
      const devolucion = valorPago - precioServicio;
      console.log("Gracias por su pago. Su devolución es de " + devolucion + " pesos.");
    }
  } else if (valorPago === 2000 || valorPago === 5000) {
    console.log("Lo siento, no podemos aceptar billetes. Por favor, pague con monedas de 500 o 1000 pesos.");
  } else {
    console.log("Valor no válido. Por favor, ingrese 500, 1000, 2000 o 5000 pesos.");
  }
}


console.log("Bienvenido al sistema de pesa electrónica.");
procesarPago();
console.log("¡Vuelve pronto!");

