/*
const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age)); // return boolean whether age is a NaN

if(condition){
    condition === true
} else {
    condition === false
}
condition will be boolean, isNaN() is a boolean
se we can us isNaN() with if
*/

const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
    console.log("Please write a number.");
} else {
    console.log("Thank you for writing your age.");
}