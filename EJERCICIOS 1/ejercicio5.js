/*los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, libretas, cuadernos,
pizarras, muebles, etc. Se utilizan para decorar y personalizar los productos de una manera barata y sencilla.
Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básico-
simulación):a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
• Costo pequeño es de 4000 y costo del grande 6000
b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; Sino
debe indicarse al usuario un numero correcto.
c. El sistema debe arrojar cuanto es el costo total para pagar*/

const tamañoSticker = prompt(
  "ingrese el tamaño del sticker 1. pequeño 2.grande".toLowerCase()
);
const cantidadStickers = parseInt(
  prompt("ingrese la cantidad de sticker a comprar")
);

const valorStickers= (tamaño, cantidad) => {
  const costoPequeño = 4000;
  const costoGrande = 6000;
  let costoTotal = 0;
  let respuesta = "";

  if (cantidad < 10) {
    respuesta = ` la cantidad de los stickers deben ser minino 10 stickers para el envio `;
  } else {
    if (tamaño == "pequeño") {
      costoTotal = costoPequeño * cantidad;
      respuesta =`el costo total a pagar  es $${costoTotal}`;
    } else if (tamaño == "grande") {
      costoTotal = costoGrande * cantidad;
      respuesta =`el costo total a pagar  es $${costoTotal}`;
    } else {
      respuesta = " el tamaño del stickers no es valido ";
    }
    
    
  } 
  return respuesta
}

const resultado = valorStickers(tamañoSticker, cantidadStickers);

alert(resultado);
/*---------------------------------------------------------------------------------*/


