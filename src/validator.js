const validator = {
  isValid: (creditCardNumber) => {
    //Separar los numeros en digitos individuales
    let creditCardNumberSplit = creditCardNumber.split("");
    // Convertir de string a number
    let creditCardNumberToNumber = creditCardNumberSplit.map(Number);

    // Recorrer el arreglo y multiplicar x 2 los numeros de posiciones impares
    for (let i = 0; i < creditCardNumberToNumber.length; i++) {
      if (i % 2 !== 0) {
        let result = creditCardNumberToNumber[i] * 2;

        //Encontrar los numeros > a 9 para separar sus digitos
        if (result > 9) {
          let arrOfDigits = Array.from(String(result), Number);
          let sumOfDigits = 0;

          // Recorrer los digitos seleccionados y sumarlos
          for (let j = 0; j < arrOfDigits.length; j++) {
            sumOfDigits = sumOfDigits + arrOfDigits[j];
          }
          result = sumOfDigits;
        }
        creditCardNumberToNumber[i] = result;
      }
    }
    //Sumar todos los dígitos
    let suma = creditCardNumberToNumber.reduce((acc, item) => {
      return (acc = acc + item);
    }, 0);
    

    //Dividir el resultado en 10
    let resultTotal = suma % 10;
    

    //Mostrar si es válida o no
  
      if (resultTotal === 0) {
        return true
      } else 
        return false
  },
  maskify: (creditCardNumber) => {
   return creditCardNumber.split('').map((letter, idx) => idx < creditCardNumber.length - 4 ? '#' : letter).join('');
  }

};

//4766444574358863
//4137894711755904
//5529931622059431
//5261485053614216	
export default validator;
