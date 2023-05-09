function sayName(nameOfPerson) {
	console.log(nameOfPerson);
}

sayName("Nico");
sayName("Vambroag");
sayName("Dal");

function sayName(nameOfPerson, age) {
	console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayName("Nico", 10);
sayName("Vambroag", 23);
sayName("Dal", 57);



function plus(a, b) {
	console.log(a + b);
}

plus(8, 60); // a = 8, b = 60

function plusTwoNumber(firstNumber, secondNumber) {
	console.log(firstNumber + secondNumber);
}
plus(60, 8); // firstNumber = 60, secondNumber = 8
function divide(a, b) {
	console.log(a / b);
}
divide(100, 21);



const player = {
	name: "Vambroag",
	sayHello: function () {
		console.log("Hello!");
	},
	greetPerson: function (otherPersonName) {
		console.log("Hello " + otherPersonName + " nice to meet you!");
	}
}
console.log(player.name);
player.sayHello();
player.greetPerson("Lynn");
player.greetPerson("Nico");