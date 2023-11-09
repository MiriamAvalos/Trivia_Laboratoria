const nombrePersona = localStorage.getItem("nombre");

const puntajeFinal = localStorage.getItem("puntaje");

document.getElementById(
  "nombreJugador"
).innerHTML = `¡Muy bien! ${nombrePersona}`;

document.getElementById("totalPuntaje").innerHTML = ` ${puntajeFinal}`;

window.reiniciarJuego = function () {
  localStorage.clear();
  window.open("/src/html/index.html", "_self");
};
