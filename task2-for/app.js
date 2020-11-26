const randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
let userNumber = prompt('Угадай число, которое я задумал от 1 до 10');

for (userNumber; userNumber !== null && +userNumber !== randomNumber;) {
    userNumber = prompt('Угадай число, которое я задумал от 1 до 10');
}

alert('Сгенерированое число было ' + randomNumber);
