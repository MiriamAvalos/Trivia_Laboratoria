window.obtenerNombre = function () {
    //Creamos una constante en la cual guardaremos el valor del input
    const nombreJugador = document
      .getElementById("iptNombreJugador")
      .value.trim(); //obtenemos el nombre que el jugador coloco en el input
  
    //Si no ingresa un nombre entra en el IF
    if (nombreJugador === "") {
      //Mostramos una alerta y con el "return" nos salimos de todo la funcion obtenerNombre()
      alert("ingrese un nombre");
      return;
    }
  
    //se guarda el valor del nombre del jugador en un espacion de mi memoria local
    localStorage.setItem("nombre", nombreJugador);
  
    //nos dirigimos al menu y self abre el menu en la misma pestaña
    window.open("/src/html/menu.html", "_self");
  };
  