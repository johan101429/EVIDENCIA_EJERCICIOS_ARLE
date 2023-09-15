

/*14. Escriba un programa que dado un numero de tabla de multiplicar las imprima en la consola*/

function imprimirTablaMultiplicar(numero) {
  console.log("Tabla de multiplicar del " + numero + ":");

  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}

const numeroTabla = prompt("Ingrese el número para la tabla de multiplicar:");

if (!isNaN(numeroTabla)) {
  imprimirTablaMultiplicar(parseInt(numeroTabla));
} else {
  console.log("Por favor, ingrese un número válido.");
}

