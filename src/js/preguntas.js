//Obtengo los valores que guarde en el menu y en el index
const tipoTrivia = localStorage.getItem("trivia");
const numeroDePregunta = parseInt(localStorage.getItem("numeroDePregunta")); // parseint convierte un string a un number
//Obtengo el puntaje del local storage si no existe aun le asigno 0
let puntaje = parseInt(localStorage.getItem("puntaje") || 0);

const preguntaPersonaje = [
  "¿Cómo se llama el vecino de Andy en la pelicula Toy Story?",
  "¿Qué personajes utilizan la frase Hakuna Matata?",
  "¿Cuántos dedos tiene Mickey Mouse?"
];
const preguntaMatematicas = [
  "¿Cuánto es el triple de 25?",
  "¿Cuántos meses tiene un año?",
  "¿Cuánto es 68+33? "
];
const preguntaCuriosidades = [
  "¿Cuántas patas tiene una araña?",
  "¿Durante cuántos segundos debemos lavarnos las manos?",
  "¿Qué animal puede sentir los sabores por los pies?"
];

const opcionesPersonaje = [
  `
  <span><input type="radio" name="respuesta" id="opcion0" onclick="evaluar(false)" /> Buzz Lightyear </span>
  <br/>
  <span><input type="radio" name="respuesta" id="opcion1" onclick="evaluar(true)" /> Sid </span>
  <br/>
  <span><input type="radio" name="respuesta" id="opcion2" onclick="evaluar(false)" /> Jessie </span>
  <br/>
`,
  `
  <span><input type="radio"  name="respuesta" id="opcion0" onclick="evaluar(false)" /> Zazy y Timón</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion1" onclick="evaluar(false)" /> Rafiki y Mufasa</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion2" onclick="evaluar(true)" /> Timón y Pumba</span>
  <br/>
`,
  `
  <span><input type="radio"  name="respuesta" id="opcion0" onclick="evaluar(true)" /> Cuatro (tres dedos y un pulgar)</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion1" onclick="evaluar(false)" /> Cinco (cuatro dedos y un pulgar)</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion2" onclick="evaluar(false)" /> Seis (cinco dedos y un pulgar)</span>
  <br/>
`
];

const opcionesMatematicas = [
  `
  <span><input type="radio"  name="respuesta" id="opcion0" onclick="evaluar(false)" /> 85</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion1" onclick="evaluar(true)" />  75</span>
  <br/>
  <span><input type="radio" name="respuesta" id="opcion2" onclick="evaluar(false)" /> 95</span>
  <br/>
`,
  `
  <span><input type="radio"  name="respuesta" id="opcion0" onclick="evaluar(true)" /> 12</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion1" onclick="evaluar(false)" />  10</span>
  <br/>
  <span><input type="radio" name="respuesta" id="opcion2" onclick="evaluar(false)" /> 11</span>
  <br/>
`,
  `
  <span><input type="radio"  name="respuesta" id="opcion0" onclick="evaluar(false)" /> 97</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion1" onclick="evaluar(true)" />  101</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion2" onclick="evaluar(false)" /> 103</span>
  <br/>
`
];

const opcionesCuriosidades = [
  `
  <span><input type="radio"  name="respuesta" id="opcion0" onclick="evaluar(true)" /> 8</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion1" onclick="evaluar(false)" />  12</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion2" onclick="evaluar(false)" /> 10</span>
  <br/>
`,
  `
  <span><input type="radio"  name="respuesta" id="opcion0" onclick="evaluar(false)" /> 10</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion1" onclick="evaluar(true)" /> 20</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion2" onclick="evaluar(false)" /> 15</span>
  <br/>
`,
  `
  <span><input type="radio"  name="respuesta" id="opcion0" onclick="evaluar(false)" /> El pez</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion1" onclick="evaluar(false)" />  El Lobo</span>
  <br/>
  <span><input type="radio"  name="respuesta" id="opcion2" onclick="evaluar(true)" /> La mariposa</span>
  <br/>
`
];

document.getElementById("numeroPregunta").innerHTML = `Pregunta ${
  numeroDePregunta + 1
}`;

if (tipoTrivia === "curiosidades") {
  document.getElementById("pregunta").innerHTML =
    preguntaCuriosidades[numeroDePregunta]; //inserta la pregunta del arreglo en el html

  document.getElementById("opcionesRespuesta").innerHTML =
    opcionesCuriosidades[numeroDePregunta];
}

if (tipoTrivia === "matematicas") {
  document.getElementById("pregunta").innerHTML =
    preguntaMatematicas[numeroDePregunta];

  document.getElementById("opcionesRespuesta").innerHTML =
    opcionesMatematicas[numeroDePregunta];
}

if (tipoTrivia === "personaje") {
  document.getElementById("pregunta").innerHTML =
    preguntaPersonaje[numeroDePregunta];

  document.getElementById("opcionesRespuesta").innerHTML =
    opcionesPersonaje[numeroDePregunta];
}

window.evaluar = function (esCorrecto) {
  if (esCorrecto === true) {
    puntaje = puntaje + 10;
    document.getElementById("mensaje").innerHTML =
      "¡Muy bien! acumulaste: " + puntaje + " puntos";
  } else {
    document.getElementById("mensaje").innerHTML = "!Oh no! :( ";
  }
  //Desahabilita las opciones
  document.getElementById("opcion0").disabled = true;
  document.getElementById("opcion1").disabled = true;
  document.getElementById("opcion2").disabled = true;
};

window.siguiente = function () {
  //Aumenta el numero de la pregunta en 1
  localStorage.setItem("numeroDePregunta", numeroDePregunta + 1);
  //Guardo el puntaje ya sea que se haya sumado o no en el Local Storage
  localStorage.setItem("puntaje", puntaje);

  //Valido que la pregunta sea menor a dos para recargar la pagina
  if (numeroDePregunta < 2) {
    window.location.reload();
  } else {
    //agregar la pagina de resultado
    window.open("/src/html/resultado.html", "_self");
  }
};
