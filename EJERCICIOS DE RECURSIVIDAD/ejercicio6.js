/*Ejercicio 6:
Una subasta o remate es una venta organizada basado en la competencia directa, y
generalmente pública, es decir, a aquel comprador que pague la mayor cantidad de
dinero o de bienes a cambio del producto.
Hacer en JavaScript una simulación de subasta que cumpla con las siguientes
características:
1. Se podrá registrar los productos a subastar almacenados (id del producto, nombre
del producto, fecha y precio inicial de subasta).
2. Cada persona puede pujar por el producto que desea, indicando la fecha, el
producto y el valor ofrecido.
3. Se puede ver la lista de productos registrados.
4. La lista de ofertas por producto.
5. Seleccionar una oferta ganadora.*/

class Producto {
    constructor(id, nombre, fecha, precioInicial) {
      this.id = id;
      this.nombre = nombre;
      this.fecha = fecha;
      this.precioInicial = precioInicial;
      this.ofertas = [];
    }
  
    registrarOferta(oferta) {
      this.ofertas.push(oferta);
    }
  
    obtenerOfertas() {
      return this.ofertas;
    }
  
    obtenerMejorOferta() {
      return Math.max(...this.ofertas.map(oferta => oferta.monto), this.precioInicial);
    }
  }
  
  class Oferta {
    constructor(persona, fecha, monto) {
      this.persona = persona;
      this.fecha = fecha;
      this.monto = monto;
    }
  }
  
  class Subasta {
    constructor() {
      this.productos = [];
    }
  
    registrarProducto(producto) {
      this.productos.push(producto);
    }
  
    listarProductos() {
      return this.productos;
    }
  
    realizarOferta(idProducto, persona, fecha, monto) {
      const producto = this.productos.find(producto => producto.id === idProducto);
      if (producto) {
        const oferta = new Oferta(persona, fecha, monto);
        producto.registrarOferta(oferta);
        return `Oferta realizada por ${persona} de $${monto} para el producto ${producto.nombre}.`;
      } else {
        return `Producto con ID ${idProducto} no encontrado.`;
      }
    }
  
    listarOfertasPorProducto(idProducto) {
      const producto = this.productos.find(producto => producto.id === idProducto);
      if (producto) {
        return producto.obtenerOfertas();
      } else {
        return `Producto con ID ${idProducto} no encontrado.`;
      }
    }
  
    seleccionarOfertaGanadora(idProducto) {
      const producto = this.productos.find(producto => producto.id === idProducto);
      if (producto) {
        const mejorOferta = producto.obtenerMejorOferta();
        return `La oferta ganadora para el producto ${producto.nombre} es de $${mejorOferta}.`;
      } else {
        return `Producto con ID ${idProducto} no encontrado.`;
      }
    }
  }
  
 
  const subasta = new Subasta();
  
  const producto1 = new Producto(1, 'Teléfono', '2023-09-12', 500);
  const producto2 = new Producto(2, 'Laptop', '2023-09-12', 1000);
  
  subasta.registrarProducto(producto1);
  subasta.registrarProducto(producto2);
  
  subasta.realizarOferta(1, 'Comprador1', '2023-09-13', 600);
  subasta.realizarOferta(1, 'Comprador2', '2023-09-13', 700);
  subasta.realizarOferta(2, 'Comprador3', '2023-09-13', 1100);
  
  console.log(subasta.listarOfertasPorProducto(1));
  console.log(subasta.seleccionarOfertaGanadora(1));
  