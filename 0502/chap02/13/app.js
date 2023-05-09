// conditioner

/*
const age = prompt("How old are you?");

console.log(age);
this will stop the webpage, prompt will stop it
we don't use prompt now because of this
it is unpretty and the pausing is dangerous and this technique is old
*/

// ways to see the data type of your variable
// console.log(typeof age);
// prompt just give string

// how to change the data type?
parseInt("15");
console.log(typeof "15", typeof parseInt("15"));

// we can't check if a sting is more or less than something
// so we need to use parseInt() to change the string into number
// if we try to parseInt() something that is not a number it will give us NaN(Not a Number)

const age = parseInt(prompt("How old are you?"));
console.log(age);