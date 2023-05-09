/*
const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    console.log(h1.style.color);
    h1.style.color = "blue";
    console.log(h1.style.color);
}

h1.addEventListener("click", handleTitleClick);


// change color using if
const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    if(h1.style.color === "blue") {
        h1.style.color = "tomato";
    } else {
        h1.style.color = "blue";
    }
}

h1.addEventListener("click", handleTitleClick);
*/

// save the currnt color
const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
// but Nicolas prefer to change css inside css file, not in JS file
// it is not smart to change css in JS