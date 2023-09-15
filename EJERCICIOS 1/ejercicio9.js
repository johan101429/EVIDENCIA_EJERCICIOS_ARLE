/*9. Un sistema de voto electrónico es una aplicación informática diseñada para permitir a los votantes emitir sus
votos de forma electrónica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o
características (programa básico-simulación):
a. La cantidad de votantes son 10 personas
b. Hay dos opciones de votos: 1. Ana Maria Suarez 2. Diego Acero
c. El sistema debe ir sumando los votos de cada candidato.
d. El sistema debe arrojar el ganador y perdedor de la votación*/

const cantidadVotos = 10;
let i = 0;
let resultadosVotosAna = 0;
let resultadosVotosDiego = 0;
let respuesta = "";
let candidatos = 0;


while (i < 10) {
  candidatos = parseInt(
    prompt(" vota 1.para Ana Maria Suarez ,vota 2.para Diego Acero ")
  );

  switch (candidatos) {
    case 1:

			resultadosVotosAna ++;
      console.log("candidato 1");

      break;
    case 2:
			resultadosVotosDiego ++;
      console.log("candidato 2 ");
      break;

    default:
      break;
  }
  console.log(`${i}`);
  i++;
}

if (resultadosVotosAna >= resultadosVotosDiego) {
	alert(` !!! GANADOR Ana Maria Suarez con ${resultadosVotosAna} votos`);
	
} else if (resultadosVotosDiego >= resultadosVotosAna) {
	alert(` !!! GANADOR Diego Acero ${resultadosVotosDiego} votos ` );
}else{
	alert (`empate entre  Ana Maria Suarez ${resultadosVotosAna} y Diego Acero ${resultadosVotosDiego}`);
}


