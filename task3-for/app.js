const userNumber = +prompt('Введите число от 1 до 100, и я покажу все числа, которые будут ему кратны');

let result;

for (let i = 1; i <= 101; i++) {

    if ((result = i % userNumber) === 0) {
        console.log(i);
    }
}
