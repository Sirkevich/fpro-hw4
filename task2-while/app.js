const randomNumber = +Math.floor(Math.random() * (3 - 1) + 1);

userNumber = prompt('Угадай число, которое я задумал от 1 до 10');

while (userNumber !== null && +userNumber !== randomNumber) {
    userNumber = prompt('Угадай число, которое я задумал от 1 до 10');
}

alert('Сгенерированое число было ' + randomNumber);





