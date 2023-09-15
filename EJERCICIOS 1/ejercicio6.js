/*6. Una pizzería “Italiana pizza” es un establecimiento que ofrece comida preparada principalmente a base de pizza,
sándwiches y ensaladas. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
(programa básico-simulación):
a. se muestra al usuario un menú de opciones así: 1. Pizza 2. Sándwiches 3 ensaladas
b. Dependiendo de la opción seleccionada (producto escogido) se pide la cantidad de porciones.
• Pizza a 7000 por unidad
• Sándwich a 5000 unidad
• Ensalada a 15000 unidad
c. Se le pide al usuario si desea agregar salsa que vale 3000.
d. El sistema indica el costo que paga el cliente por su producto.*/

const menuUsuario = Number(
  prompt("elije 1. para pizza , 2. para sandwiches y 3. para ensaladas ")
);
console.log(typeof menuUsuario);
const cantidadProductos = Number(
  prompt("por favor ingrese la cantidad de producto")
);
const adiccionSalsa = Number(prompt(" desea adicionar salsa 1. Si , 2. No"));
let unidadPizza = 7000;
let unidadSandwich = 5000;
let unidadEnsalada = 15000;
let agregarSalsa = 0;
let totalPedido = 0;
let respuesta = "";

if (adiccionSalsa == 1) {
  agregarSalsa = 3000;
}

switch (menuUsuario) {
  case 1:
    totalPedido = cantidadProductos * unidadPizza + agregarSalsa;
    respuesta = `el costo total a pagar  es $${totalPedido}`;

    break;
  case 2:
    totalPedido = cantidadProductos * unidadSandwich + agregarSalsa;
    respuesta = `el costo total a pagar  es $${totalPedido}`;

    break;
  case 3:
    totalPedido = cantidadProductos * unidadEnsalada + agregarSalsa;
    respuesta = `el costo total a pagar  es $${totalPedido}`;
    break;

  default:
    break;
}

alert(respuesta);
