let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date();


function calculateAge() {

    let birthDate = new Date(el.value);

    let age;

    if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDay() >= birthDate.getDay())) {
        age = today.getFullYear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`

    return age;
}

elSubmit.addEventListener('click', calculateAge);


var a = 10;
var a = 2;
let be = 10;
let be = 2;