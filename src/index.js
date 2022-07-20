//import validator from './validator.js';

let continueToValid = document.getElementById("continueButton");
let firstResults = document.getElementById("resultScreen");
//let accessToData = document.getElementById("formOne");

continueToValid.addEventListener("click", function firstEvent() {
  let numbersInCard = document.getElementById("plasticNumber").value; // .value se encarga de capturar el valor ingresado en la caja
  console.log(numbersInCard);
  let individualNumber = numbersInCard.split("");
  console.log(individualNumber);
  console.log(typeof individualNumber);
  let reversedNumbers = individualNumber.reverse(); // .reverse() se encarga de invertir los valores
  console.log(reversedNumbers);
  console.log(typeof reversedNumbers);
}
)

//console.log(validator);