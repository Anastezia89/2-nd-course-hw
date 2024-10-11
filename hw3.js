// Задание 1
let password = '12345';
let input = prompt('Введите пароль');

if (input === '12345') {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

// Задание 2
let c = prompt('Введите любое число');

if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 3
let d = prompt('Введите первое число');
let e = prompt('Введите второе число');

if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 4
let a = '2';
let b = '3';
// // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert (Number(a) + Number(b));

// Задание 5
var monthNumber = prompt('Введите номер месяца');

monthNumber = monthNumber.toLocaleLowerCase ();

switch (monthNumber) {
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Зима');
        break;
    case '3':
        console.log('Весна');
        break;
    case '4':
        console.log('Весна');
        break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето');
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;
    case '9':
        console.log('Осень');
        break;
    case '10':
        console.log('Осень');
        break;
    case '11':
        console.log('Осень');
        break;
    case '12':
        console.log('Зима');
        break;
    default:
        console.log("Такого месяца нет");
        break;
}

