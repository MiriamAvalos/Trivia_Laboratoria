//obtengo el nombre (key) desde local storage
const nombrePersona = localStorage.getItem("nombre");
//Insertar el código HTML en el elemento con el ID  encabezado Y reemplaza su contenido
document.getElementById("nombreJugador").innerHTML =
  "Bienvenido " + nombrePersona;

window.elementoSeleccionado = function () {
  //Reviso que radio fue seleccionado y guardo el Local Storage la elección de la trivia
  if (document.getElementById("personaje").checked) {
    localStorage.setItem("trivia", "personaje");
  }
  if (document.getElementById("matematicas").checked) {
    localStorage.setItem("trivia", "matematicas");
  }
  if (document.getElementById("curiosidades").checked) {
    localStorage.setItem("trivia", "curiosidades");
  }

  //Guardo el numero de pregunta que voy a usar cuando arranque el juego en LocalStorage
  localStorage.setItem("numeroDePregunta", "0");

  window.open("/src/html/preguntas.html", "_self");
};
