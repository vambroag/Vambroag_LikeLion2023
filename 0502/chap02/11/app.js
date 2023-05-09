const oldcalculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    multiply: function (a, b) {
        console.log(a * b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    power: function (a, b) {
        console.log(a ** b);
    }
}
oldcalculator.add(2, 3);
oldcalculator.minus(2, 3);
oldcalculator.multiply(2, 3);
oldcalculator.divide(2, 3);
oldcalculator.power(2, 3);

console.log("-------------------------------------------");
// now we want to stop using console.log()
// we want to put the data on the screen not the console where its difficult for the user to see
// also we can't use the result of the function if we use console.log()

// we must think that a function will give me a result to use in my code
const age = 96;
function claculateKrAge(ageOfForeigner) {
    // ageOfForeigner + 2; this will give nothing resulting into undefined
    return ageOfForeigner + 2; // this will give the result, it returns the result
    // return "hello"; this will return "hello" which we don't want
}
const krAge = claculateKrAge(age);

console.log(krAge);
// this is how the function communicates with the outside


const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    }
}
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);
