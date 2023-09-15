/*10. Un examen de conocimientos es una prueba diseñada para evaluar el conocimiento y comprensión de un tema
o disciplina específica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
(programa básico-simulación):
a. Se debe presentar 5 preguntas (sea de selección múltiple o verdadero-falso.
b. Cada pregunta debe ser evaluada si fue correcta o no su respuesta.
c. Si la opción es correcta se suma 10 puntos por cada pregunta.d. Se debe mostrar los resultados del examen.*/


const preguntas = [
  {
    pregunta: "¿Cuál es la capital de Francia?",
    opciones: ["Madrid", "Londres", "París", "Berlín"],
    respuestaCorrecta: "París",
  },
  {
    pregunta: "¿El agua hierve a 100 grados Celsius a nivel del mar?",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: "Verdadero",
  },
  {
    pregunta: "¿Cuál es el planeta más grande del sistema solar?",
    opciones: ["La Tierra", "Venus", "Marte", "Júpiter"],
    respuestaCorrecta: "Júpiter",
  },
  {
    pregunta: "¿Quién escribió 'Romeo y Julieta'?",
    opciones: ["William Shakespeare", "Charles Dickens", "Jane Austen", "F. Scott Fitzgerald"],
    respuestaCorrecta: "William Shakespeare",
  },
  {
    pregunta: "¿Cuál es el símbolo químico del oxígeno?",
    opciones: ["Ox", "O2", "O", "Oxígeno"],
    respuestaCorrecta: "O",
  },
];


function realizarExamen() {
  let puntaje = 0;

  for (let i = 0; i < preguntas.length; i++) {
    const preguntaActual = preguntas[i];
    console.log("Pregunta " + (i + 1) + ": " + preguntaActual.pregunta);
    for (let j = 0; j < preguntaActual.opciones.length; j++) {
      console.log(j + 1 + ". " + preguntaActual.opciones[j]);
    }

    const respuestaUsuario = prompt("Ingrese el número de la respuesta correcta:");
    const respuestaSeleccionada = preguntaActual.opciones[respuestaUsuario - 1];

    if (respuestaSeleccionada === preguntaActual.respuestaCorrecta) {
      puntaje += 10;
      console.log("¡Respuesta correcta! Suma 10 puntos.");
    } else {
      console.log("Respuesta incorrecta. La respuesta correcta es: " + preguntaActual.respuestaCorrecta);
    }
  }

  console.log("Resultado del examen:");
  console.log("Puntaje total: " + puntaje + " puntos de 50 posibles.");
}


console.log("Bienvenido al examen de conocimientos.");
realizarExamen();

