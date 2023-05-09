const days = ["mon", "tue", "wed"]; // items inside arrays are all same meaning, in here it's days of week

//if you need to store values with more meanings we use object and properties
const player = {
    name: "Vambraog",
    age: 23,
};

console.log(player, console); // console will be printed, we can see that the console is a object as well, f is function 

console.log(player);
player.name = "Vam";
console.log(player);

console.log("--------------");

console.log(player);
player.sexy = "soon";
console.log(player);

function plus22() {
    console.log(2 + 2);
}

// plus22; this won't play function plus()
plus22(); // this will play function
plus22();
plus22();

//recieving data
function plus(potato, salad) { // potato salad is just the name of the space the argument data will be stored inside of the function
    console.log(potato + salad);
}
//sending data
plus(5, 10); // potato = 5, salad = 10
plus(1.33453 + 9898); // potato = 1.33453, salad = 9898
plus(9898, 1.33453); // potato = 9898, salad = 1.33453
//even if the user send many argument the function will only take as amny argument it can starting from the first ones
function minus(onlyone) {
    console.log(onlyone - 5);
}
minus(5, 10, 4325, 345, 62.45);

/*
will be making calculator
const calculator = {
    add: function (a, b) {
        console.log(a + b);
    }
}
complete it

must be able to do the following
a+b
a-b
a*b
a/b
a**b (a by the power of b)
*/

const calculator = {
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
calculator.add(10, 2);
calculator.minus(10, 2);
calculator.multiply(10, 2);
calculator.divide(10, 2);
calculator.power(10, 2);