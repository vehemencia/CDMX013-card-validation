import validator from './validator.js';

let continueToValid = document.getElementById("continueButton");
let buyingTickets = document.getElementById("ticketScreen");
let obtainingTicketResults = document.getElementById("resultScreen");
let cardValue = document.getElementById("cardValues");
let letMeKnow = document.getElementById("isItValid");
let accessToData = document.getElementById("formOne");

function showingValid(creditCardNumber) {
  if (validator.isValid(creditCardNumber)) {
    true;
    return "Muchas gracias, tu tarjeta es válida. ¡Que te diviertas!";
  } else {
    return "Lo sentimos, tu tarjeta no es válida, intenta nuevamente";
  }
}

continueToValid.addEventListener("click", ()=> {
  let creditCardNumber = document.getElementById("plasticNumber").value; // .value se encarga de capturar el valor ingresado en la caja
  buyingTickets.style = "display: none";
  obtainingTicketResults.style = "display: block";
  cardValue.innerHTML = "Ingresaste la tarjeta " + validator.maskify(creditCardNumber);
  letMeKnow.innerHTML = showingValid(creditCardNumber);
})

console.log(validator);