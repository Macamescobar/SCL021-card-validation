import validator from "./validator.js";

let formulario = document.querySelector("#form-tarjeta");

let numFormulario = document.querySelector("#inputNumero"); //Selecciono el input del form
let numTarjeta = document.querySelector("#numeroTarjeta"); //Selecciono el p de la tarjeta
let nameFormulario = document.querySelector("#inputNombre"); //Selecciono el nombre del form
let nameTarjeta = document.querySelector("#name"); //Selecciono el nombre de la tarjeta
let button = document.querySelector("#btnEnviar");

button.addEventListener("click", function () {
  if (numFormulario.value == "" && numFormulario.type == "text") {
    alert("Campos vacios");
    return false;
  }
  validator.isValid(numFormulario.value);
  if (validator.isValid(numFormulario.value) === true) {
    alert("Su tarjeta es valida");
  } else alert("Su tarjeta no es valida");
});
numFormulario.value = validator.maskify(numFormulario.value);

//Reflejar los numeros del input en la tarjeta
numFormulario.addEventListener("input", function (evento) {
  numTarjeta.innerHTML = evento.target.value;
  numTarjeta.innerHTML = validator.maskify(numTarjeta.innerHTML); //pasar el valor de maskify a la tarjeta
});

//Reflejar el nombre del input en la tarjeta
nameFormulario.addEventListener("input", function (evento) {
  nameTarjeta.innerHTML = evento.target.value;
});

formulario.inputNumero.addEventListener("keyup", (e) => {
  let valorInput = e.target.value; //acedemos al elemento y su valor, y lo guardo en la variable valorInput
  formulario.inputNumero.value = valorInput
    //Eliminar espacios en blanco
    .replace(/\s/g, "")
    //Eliminar los numeros
    .replace(/\D/g, "")
    //Eliminar último espacio
    .trim();
});
