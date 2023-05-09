/*
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    h1.className = "active"; // className can give us data or we can update className data
}

h1.addEventListener("click", handleTitleClick);
// this is better, less code, looking more better


const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    if(h1.className === "active") {
        h1.className = ""
    } else {
        h1.className = "active";
    }
    // if we use string to change data, there is a risk for error
    // it is hard for us to catch misspelled words in string
    // but it is easy to catch misspelled variable name because console can tell us
}


h1.addEventListener("click", handleTitleClick);
*/

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.className === clickedClass) {
        h1.className = ""
    } else {
        h1.className = clickedClass;
    }
    // this will replace class name, doesn't care about the past, resulting damage to the code
    // example) font disappearing
}


h1.addEventListener("click", handleTitleClick);