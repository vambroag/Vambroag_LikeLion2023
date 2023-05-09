const hellos = document.getElementsByClassName("hellos"); //cant change properties because Elements will give you array

console.log(hellos);


const title = document.getElementsByTagName("h1");

console.log(title);

const title1 = document.querySelector(".hello h1"); // h1 inside class "hello"

console.log(title1);

const title2 = document.querySelector(".hello h2"); // will give only the first one

console.log(title2); // will give null

const title3 = document.querySelectorAll(".hello h1"); // will give every elements that suffice the argument

console.log(title3);

const title4 = document.querySelector("#hello h1");
console.log(title4);
const title5 = document.getElementById("hello"); // cna't get tag inside id like <h1>
console.log(title5);