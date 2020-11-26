const userNumber = +prompt('Введите число от 1 до 100, и я покажу все числа, которые будут ему кратны');

let i = 1;

while (i <= 100 ) {
    if (i % userNumber === 0)
    console.log(i);
    i++;
} 

