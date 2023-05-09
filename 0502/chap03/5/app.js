const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    console.log("mouse is here!");
    h1.style.color = "blue";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD~");
}

h1.onclick = handleTitleClick;
// the reason nicolas like addEventListener more, is because we can later do removeEventListener

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);

window.addEventListener("online", handleWindowOnline);