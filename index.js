import validator from "./validator.js";

let formulario = document.querySelector("#form-tarjeta");
let numFormulario = document.querySelector("#inputNumero"); //Selecciono el input del form
let numTarjeta = document.querySelector("#numeroTarjeta"); //Selecciono el p de la tarjeta
let nameFormulario = document.querySelector("#inputNombre"); //Selecciono el nombre del form
let nameTarjeta = document.querySelector("#name"); //Selecciono el nombre de la tarjeta
let button = document.querySelector("#btnEnviar");

//Retornar mensaje cuando no hayan datos y si es valido o no.
button.addEventListener("click", function () {
  if (numFormulario.value == "" && numFormulario.type == "text" || nameFormulario.value == "") {
    alert("Campos vacios");
    return false;
  }
  validator.isValid(numFormulario.value);
  if (validator.isValid(numFormulario.value) === true) {
    alert("Su tarjeta es valida");
  } else alert("Su tarjeta no es valida");
});


//Reflejar los numeros del input en la tarjeta de credito
numFormulario.addEventListener("input", function (evento) {
  numTarjeta.innerHTML = evento.target.value;
  numTarjeta.innerHTML = validator.maskify(numTarjeta.innerHTML); //pasar el valor de maskify a la tarjeta
});

//Reflejar el nombre del input en la tarjeta de credito
nameFormulario.addEventListener("input", function (evento) {
  nameTarjeta.innerHTML = evento.target.value;
});

//Input nombre del formulario
formulario.inputNombre.addEventListener("keyup", (e) => {
  let valorInput = e.target.value; //acedemos al elemento y su valor, y lo guardo en la variable valorInput
  formulario.inputNombre.value = valorInput
  .replace(/[^a-z-A-Z\s]/g, '')//Aceptar solo letras y espacio, sino cambiarlo por nada
});

//Input numero del formulario
formulario.inputNumero.addEventListener("keyup", (e) => {
  let valorInput = e.target.value; //acedemos al elemento y su valor, y lo guardo en la variable valorInput
  formulario.inputNumero.value = valorInput
    //Eliminar espacios en blanco
    .replace(/\s/g, "")
    // Eliminar las letras
    .replace(/\D/g, '')
    //Eliminar último espacio
    .trim();
});