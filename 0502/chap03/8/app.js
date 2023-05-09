const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) { // checks if there is the element inside the class name
        h1.classList.remove(clickedClass); // remove specific class name
    } else {
        h1.classList.add(clickedClass); // add without deleting the current class name
    }
}


h1.addEventListener("click", handleTitleClick);

const hih1 = document.querySelector(".hi h1");

function handleTitleClick() {
    hih1.classList.toggle("clicked");
    // only one line of code!! doing the same thing
    // toogle checks if the element is already in the class name
    // if it is it removes it, if it isn't it adds it
}

hih1.addEventListener("click", handleTitleClick);