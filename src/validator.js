const validator = {
    isValid: function (creditCardNumber) {
        let individualNumber = creditCardNumber.split("");
        let reversedNumbers = individualNumber.reverse();
        const numbersInNewPosition = reversedNumbers;
        for (let counting = 0; counting < numbersInNewPosition.length; counting++) {
            if (counting % 2 !== 0) {
                let evenNumbers = (numbersInNewPosition[counting] * 2);
                numbersInNewPosition[counting] = evenNumbers;
            }
            if (counting % 2 !== 0 && numbersInNewPosition[counting] > 9) {
                let reducedResult = (numbersInNewPosition[counting] - 9);
                numbersInNewPosition[counting] = reducedResult;
            }
        }
        let totalValue = 0;
        for (let counter = 0; counter < numbersInNewPosition.length; counter++) {
            totalValue += Number(numbersInNewPosition[counter]);
        }
        if (totalValue % 10 === 0) {
            return true;
        } else return false;
    }
    ,
    maskify: function (creditCardNumber) {
        let lastFourDigits = creditCardNumber.slice(-4);
        let dividedData = creditCardNumber.split("");
        for (let maskNumbers = 0; maskNumbers < dividedData.length; maskNumbers++) {
            // Si se cumple, se ejecutará lo que está dentro de estas llaves
            dividedData[maskNumbers] = dividedData[maskNumbers].replace(/./g, "#");
        }
        let allLooseData = dividedData.join("");
        let hiddenAndUnhiddenNumbers = allLooseData.slice(0, -4) + lastFourDigits; // A
        return hiddenAndUnhiddenNumbers;
    }
};

export default validator;