let estado_linterna = false;

/* capturo el sonido */
let sonido_batman = document.querySelector("#bati_encendido");
let sonido_click = document.querySelector("#bati_click");

let batman = document.querySelector(".batman");
let bati_boton = document.querySelector(".bati_boton");

/* evento */

bati_boton.addEventListener("click", controlar_linterna);

function controlar_linterna() {
  if (!estado_linterna) {
    estado_linterna = true;
    sonido();
    batman.classList.add("batman_activo");
  } else {
    estado_linterna = false;
    sonido();
    batman.classList.remove("batman_activo");
  }
}

function sonido() {
  if (sonido_batman.paused) {
    sonido_click.play();
    sonido_batman.play();
  } else {
    sonido_click.play();
    sonido_batman.pause();
  }
}
