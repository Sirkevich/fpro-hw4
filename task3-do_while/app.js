const userNumber = +prompt('Введите число от 1 до 100, и я покажу все числа, которые будут ему кратны');

let i = 1;

  do {
    if (i % userNumber === 0)
    console.log(i);
    i++;
} while (i <= 100 );

