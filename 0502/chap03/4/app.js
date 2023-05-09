// google "h1 html element mdn" to search for tag's html elements
// for JS elements search for web APIs in the same keyword search
// or we can use console.dir(tag) to list all the elements

const title = document.querySelector(".hello h1");

console.dir(title);

function handleTitleClick() {
    console.log("mouse is here!");
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);