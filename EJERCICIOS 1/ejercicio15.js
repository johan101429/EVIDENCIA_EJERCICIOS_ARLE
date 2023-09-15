/*15. Escriba un programa que genere la siguiente salida:
* * * * * * ==================================
* * * * * ==================================
* * * * * * ==================================
* * * * * ==================================
* * * * * * ==================================
* * * * * ==================================
* * * * * * ==================================
* * * * * ==================================
* * * * * * ==================================
===========================================*/

const n = 5;
function generarLinea() {
  let linea = "";
  for (let i = 0; i < n; i++) {
    linea += "* ";
  }
  linea += "= ";
  return linea;
}


function generarSalida() {
  for (let i = 0; i < n; i++) {
    console.log(generarLinea());
    if (i === n - 1) {
      let ultimaLinea = "";
      for (let j = 0; j < n; j++) {
        ultimaLinea += "= ";
      }
      console.log(ultimaLinea + "*");
    }
  }
}

generarSalida();






