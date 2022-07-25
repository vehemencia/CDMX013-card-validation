import validator from './validator.js';

let continueToValid = document.getElementById("continueButton");
let buyingTickets = document.getElementById("ticketScreen");
let obtainingTicketResults = document.getElementById("resultScreen");
let cardValue = document.getElementById("cardValues");
let letMeKnow = document.getElementById("isItValid");

function showingValid(creditCardNumber) {
  if (validator.isValid(creditCardNumber) === true) {
    return "Tu tarjeta es válida, muchas gracias. ¡Diviértete!";
  } else {
    return "Tu tarjeta no es válida, lo sentimos mucho, intenta nuevamente";
  }
}

continueToValid.addEventListener("click", () => {
  let creditCardNumber = document.getElementById("plasticNumber").value; // .value se encarga de capturar el valor ingresado en la caja
  let myName = document.getElementById("firstname").value;
  let mySurname = document.getElementById("surname").value;
  let numberLength = creditCardNumber.length;
  if (creditCardNumber == "", numberLength < 16) {
    alert("Ingresa los 16 dígitos al frente de tu tarjeta para continuar.");
  }
 else {
    buyingTickets.style = "display: none";
    obtainingTicketResults.style = "display: block";
    cardValue.innerHTML = "Hola " + myName + ", ingresaste la tarjeta " + validator.maskify(creditCardNumber);
    letMeKnow.innerHTML = showingValid(creditCardNumber);
  }
}
)

console.log(validator);