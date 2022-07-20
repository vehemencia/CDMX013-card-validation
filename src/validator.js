// /* Acá van las dos funciones correspondientes para:
// 1) ocultar los dígitos de la tarjeta utilizando maskify; y
// 2) validar la tarjeta de crédito utilizando isValid */

// const validator = {
//   "isValid"{
//
//   }

//   "maskify" {
//     let lastFourDigits = numbersInCard.slice(-4); // .slice() selecciona SOLAMENTE los últimos cuatro dígitos, regresa una copia en un nuevo arreglo sin modificar el original
//     let dividedData = numbersInCard.split(""); // .split() fragmenta un string, al no contener un separador específico selecciona cada cáracter por separado
//     /* Se obtiene cada carácter para poder utilizarlos en el ciclo 'for', su estructura requiere de una expresión inicial, una condición y una expresión final.
//     En este caso maskNumbers nos indica en qué punto comenzará a contar, inicia con el carácter en la posición 0, después se le indica que nuestro conteo en maskNumbers debe ser menor a la longitud de dividedData y maskNumber se incrementa hasta que se cumpla la condición anterior */
//     for (let maskNumbers = 0; maskNumbers < dividedData.length; maskNumbers++) {
//       // Si se cumple, se ejecutará lo que está dentro de estas llaves
//       dividedData[maskNumbers] = dividedData[maskNumbers].replace(/./g, "#");
//       /* .replace() se encarga de reemplazar los datos.
//       El valor entre barras corresponde al dato a cubrir; el punto y la g forman parte de una expresión regular (definida como un patrón de búsqueda).
//       El punto es un comodín pues representa "todos los caracteres", mientras que la g es de global, lo que significa que busca en todo el contenido;
//       el valor después de la coma es con lo que se sustituirá*/
//     }
//     let allLooseData = dividedData.join(""); // .join(), como su nombre lo indica, se encarga de unir los elementos, usar un separador es opcional y aquí no se requiere
//     let hiddenAndUnhiddenNumbers = allLooseData.slice(0, -4) + lastFourDigits; // A
//     //console.log(hiddenAndUnhiddenNumbers);
//     return "Ingresaste la tarjeta " + hiddenAndUnhiddenNumbers;
//   }
// };


// export default validator;