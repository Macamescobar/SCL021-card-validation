import validator from './validator.js';


let tarjeta = document.querySelector('#tarjeta');
let formulario = document.querySelector('#form-tarjeta');


let numFormulario = document.querySelector('#inputNumero'); //Selecciono el input del form
let numTarjeta = document.querySelector('#numeroTarjeta'); //Selecciono el p de la tarjeta

let button = document.querySelector('#btnEnviar');


button.addEventListener("click", function (e){
    alert(numFormulario.value)
    validator.isValid(numFormulario.value);
});

//Reflejar los numeros del input en la tarjeta
numFormulario.addEventListener("input", function(evento) {
    console.log(evento.target.value)
    numTarjeta.innerHTML = evento.target.value
});

formulario.inputNumero.addEventListener('keyup',(e) => {
    let valorInput = e.target.value; //acedemos al elemento y su valor, y lo guardo en la variable valorInput
    
    formulario.inputNumero.value = valorInput
    //Eliminar espacios en blanco
    .replace(/\s/g, '')
    //Eliminar las letras
    .replace(/\D/g, '')
    //Poner espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, '$1 ')
    //Eliminar último espacio
    .trim();

    if(valorInput === '') {
        numTarjeta.textContent = '#### #### #### ####';
    }
});
  

console.log(tarjeta);
console.log(formulario);
console.log(numFormulario);
console.log(numTarjeta);




