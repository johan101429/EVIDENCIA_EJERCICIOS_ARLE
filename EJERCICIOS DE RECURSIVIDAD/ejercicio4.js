/*Ejercicio 4
Se necesita simular en JavaScript la atención de clientes a través de la asignación de
turnos en un banco. Se debe usar arreglos o objetos dependiendo del algoritmo que
diseñe. Y tener en cuenta las siguientes restricciones y requisitos.
•Hay tres tipos de clientes: cliente preferencial, cliente general y cliente que no
tiene cuenta en el banco
•Hay dos tipos de atención: caja o asesoría.
•Los de atención de caja se clasifican en depósitos y retiros.
•El banco cuenta con 5 cajas, de las cuales la 1 y 2 están reservadas para retiros.•Aquellos clientes presenciales se atienden primero de los demás tipos.
•La caja 5 es solo asesoría.
•A medida que se atienden clientes se va liberando las cajas y distribuyendo entre
los usuarios de las colas.*/


const tiposClientes = {
    PREFERENCIAL: 'preferencial',
    GENERAL: 'general',
    SIN_CUENTA: 'sin_cuenta'
  };
  
  const tiposAtencion = {
    CAJA: 'caja',
    ASESORIA: 'asesoria'
  };
  
  // Definir tipos de atención de caja
  const tiposCaja = {
    DEPOSITO: 'deposito',
    RETIRO: 'retiro'
  };
  class Banco {
    constructor() {
      this.cajas = [null, null, null, null, tiposAtencion.ASESORIA];
      this.clientes = {
        [tiposClientes.PREFERENCIAL]: [],
        [tiposClientes.GENERAL]: [],
        [tiposClientes.SIN_CUENTA]: []
      };
      this.atendiendo = null;
    }
  
    agregarCliente(tipoCliente) {
      this.clientes[tipoCliente].push({});
      this.atenderClientes();
    }
  
    atenderClientes() {
      if (this.atendiendo !== null) return;
  
      const tiposPrioritarios = [tiposClientes.PREFERENCIAL, tiposClientes.GENERAL, tiposClientes.SIN_CUENTA];
  
      for (const tipoCliente of tiposPrioritarios) {
        const cliente = this.clientes[tipoCliente].shift();
        if (cliente) {
          this.atenderCliente(cliente, tipoCliente);
          break;
        }
      }
    }
  
    atenderCliente(cliente, tipoCliente) {
      if (this.cajas.includes(null)) {
        const cajaIndex = this.cajas.findIndex(caja => caja === null);
        this.cajas[cajaIndex] = tipoCliente === tiposClientes.PREFERENCIAL ? tiposAtencion.ASESORIA : tiposAtencion.CAJA;
        this.atendiendo = { cliente, cajaIndex };
        this.atenderCaja(cajaIndex, tipoCliente);
      }
    }
  
    atenderCaja(cajaIndex, tipoCliente) {
      const tipoAtencion = this.cajas[cajaIndex];
  
      if (tipoAtencion === tiposAtencion.CAJA) {
        let tipoCaja;
        if (cajaIndex <= 1) {
          tipoCaja = tiposCaja.RETIRO;
        } else {
          tipoCaja = Math.random() < 0.5 ? tiposCaja.DEPOSITO : tiposCaja.RETIRO;
        }
        console.log(`Atendiendo cliente ${tipoCliente} en caja ${cajaIndex + 1} (${tipoCaja})`);
      } else if (tipoAtencion === tiposAtencion.ASESORIA) {
        console.log(`Atendiendo cliente ${tipoCliente} en asesoría`);
      }
  
      setTimeout(() => {
        this.cajas[cajaIndex] = null;
        this.atendiendo = null;
        this.atenderClientes();
      }, Math.floor(Math.random() * 5000) + 1000); // Simula el tiempo de atención
    }
  }
  
  const miBanco = new Banco();
miBanco.agregarCliente(tiposClientes.PREFERENCIAL);
