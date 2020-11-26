const randomNumber = Math.floor(Math.random() * (3 - 1) + 1);

let userNumber;

 do {
    userNumber = prompt('Угадай число, которое я задумал от 1 до 10'); 
} while (userNumber !== null && +userNumber !== randomNumber);

alert('Сгенерированое число было ' + randomNumber);
