const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

/*
function onLoginBtnClick() {
    const username = loginInput.value
    if (username === "") {
        alert("Please write you username!");
    } else if (username.length > 15) {
        alert("Your username is too long.");
    }
}
loginButton.addEventListener("click",onLoginBtnClick);
*/

function onLoginBtnClick() {
    const username = loginInput.value
    console.log(username);
}
loginButton.addEventListener("click",onLoginBtnClick);