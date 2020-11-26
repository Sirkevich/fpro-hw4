const userNumber = +prompt('Введите число и я покажу все числа, которые будут ему кратны');
const countOfNumber = +prompt('Сколько кратных чисел вывести?');

let i = 0;
let countOfShownNumbers = 0;

for (;countOfShownNumbers < countOfNumber;){
    if (++i % userNumber) continue;
        countOfShownNumbers++;
        console.log(i);
}  
