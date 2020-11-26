const userNumber = +prompt('Введите число и я покажу все числа, которые будут ему кратны');
const countOfNumber = +prompt('Сколько кратных чисел вывести?');

let i = 0;
let countOfShownNumbers = 0;

do {
    if (++i % userNumber) continue;
        countOfShownNumbers++;
        console.log(i);
} while (countOfShownNumbers < countOfNumber);