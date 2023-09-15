/*13. El concesionario de carros “VenXtucarro” es un lugar donde los compradores pueden comprar un carro nuevo o
usado. Estos establecimientos generalmente están asociados con una marca de automóviles específica y tienen
un inventario de vehículos nuevos. Hacer un programa en JavaScript que cumpla los siguientes requisitos o
características (programa básico-simulación):
a. El usuario debe ingresar una marca de carros entre Chevrolet-Mazda y Renault.
b. Dependiendo de la marca, se seleccionará una de dos referencias por marca ejemplo: captiva -traker
c. El sistema le mostrara toda la información de cada una de las referencias en particular.*/




const carros = {
  Chevrolet: {
    captiva: {
      modelo: "Captiva",
      año: 2022,
      precio: 25000,
      motor: "2.0L Turbo",
    },
    traker: {
      modelo: "Traker",
      año: 2022,
      precio: 22000,
      motor: "1.5L Turbo",
    },
  },
  Mazda: {
    mazda3: {
      modelo: "Mazda 3",
      año: 2022,
      precio: 28000,
      motor: "2.5L",
    },
    cx5: {
      modelo: "CX-5",
      año: 2022,
      precio: 32000,
      motor: "2.5L Turbo",
    },
  },
  Renault: {
    duster: {
      modelo: "Duster",
      año: 2022,
      precio: 18000,
      motor: "1.6L",
    },
    logan: {
      modelo: "Logan",
      año: 2022,
      precio: 15000,
      motor: "1.0L",
    },
  },
};


function mostrarInformacionCarro(marca, referencia) {
  const carro = carros[marca][referencia];
  if (carro) {
    console.log("Marca: " + marca);
    console.log("Referencia: " + referencia);
    console.log("Modelo: " + carro.modelo);
    console.log("Año: " + carro.año);
    console.log("Precio: $" + carro.precio);
    console.log("Motor: " + carro.motor);
  } else {
    console.log("Referencia no encontrada.");
  }
}


function main() {
  console.log("Bienvenido a VenXtucarro");
  const marca = prompt("Ingrese la marca de carros (Chevrolet, Mazda o Renault):");

  if (carros[marca]) {
    console.log("Marcas disponibles para " + marca + ":");
    const referencias = Object.keys(carros[marca]);
    for (const referencia of referencias) {
      console.log("- " + referencia);
    }

    const referenciaSeleccionada = prompt("Ingrese la referencia del carro:");
    mostrarInformacionCarro(marca, referenciaSeleccionada);
  } else {
    console.log("Marca no válida.");
  }
}


main();

