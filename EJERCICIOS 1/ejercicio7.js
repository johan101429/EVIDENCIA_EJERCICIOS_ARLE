/*7. La biblioteca municipal de Armenia, necesita un sistema de Gestión de multas. Hacer un programa en JavaScript
que cumpla los siguientes requisitos o características (programa básico-simulación):
a. Se pregunta al usuario si es devolución o perdida.
b. Se le pide al usuario de la biblioteca que indique la cantidad de días de retraso.
c. La cantidad de libros prestados o revistas
• Revistas 500 pesos día.
• Libro 600 pesos día.
d. Si es perdida, debe de pagar 10000 por ejemplar*/

const estado = Number(prompt(" elije 1. para devolucion, 2. para perdida "));

let valorRevistas = 500;
let valorLibro = 600;
let valorPerdida = 10000;
let respuesta = "";
let totalPagar = 0;

switch (estado) {
  case 1:
    let diasReetraso = Number(prompt(" ingrese los dias de retraso "));
    const cantidadPrestamo = Number(prompt(" elija 1.para libros ,2. para revistas  "));
    switch (cantidadPrestamo) {
      case 1:
        totalPagar = cantidadPrestamo * diasReetraso * valorLibro;
        respuesta = `el costo total a pagar por libro es $${totalPagar}`;
        break;
      case 2:
        totalPagar = cantidadPrestamo * valorRevistas * diasReetraso;
        respuesta = `el costo total a pagar por revista  es $${totalPagar}`;

        break;

      default:
        break;
    }

    break;
  case 2:
    totalPagar = valorPerdida;
    respuesta = `el costo total a pagar por perdida es de $${totalPagar}`;
    break;

  default:
    break;
}

alert(respuesta);
