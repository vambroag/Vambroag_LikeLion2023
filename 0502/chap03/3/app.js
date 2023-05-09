const title = document.querySelector("div.hello:first-child h1");
const title1 = document.querySelector("div.hello1 h1");

console.log(title);
console.dir(title);
console.log(title1);

title.style.color = "blue";


function handleTitleClick() {
    console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick); // we don't need to press play handleTitleClick() because JS will do it for us in EventListener
// no need to write handleTitleClick() outside of EvenetListener


function handleTitleClick1() {
    title1.style.color = "blue";
}

title1.addEventListener("click", handleTitleClick1);

