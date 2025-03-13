// Задание 1
function one(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let resaltOne = one(8, 4);
alert(resaltOne);

// Задание 2
function two(twoNumber) {
    if (twoNumber % 2 === 0) {
        return alert("Число четное");  
    } else {
        return alert("Число нечетное");
    }
    
}

let resaltTwo = two(2);

// Задание 3
function threeOne(threeNumber1) {
    return threeNumber1 ** 2;
}

console.log(threeOne(5));

// Задание 3.1
function threeTwo(threeNumber2) {
    let threeSquare = threeNumber2 ** 2;
    return threeSquare;
}

console.log(threeTwo(6));

// Задание 4
function fourAge() {
     let ageUser = Number(prompt("Сколько вам лет?"));

    if (ageUser <= 12 && ageUser >= 0) {
        alert('Привет, друг!');
    } else if (ageUser >= 13) {
        alert('Добро пожаловать!');
    } else if (ageUser <= 0) {
        alert('Вы ввели неправильное значение');
    }  
}

// Задание 5
function fifth() {
    let x = prompt('Введите 1 число');
    let y = prompt('Введите 2 число');

    if (isNaN(x) || isNaN(y)) {
        console.log('Одно или оба значения не являются числом');
    } else if (Number(x) || Number(y)) {
        console.log(`Произведение чисел ${Number(x) * Number(y)}`);
    }
}

// Задание 6
function sixCube() {
    let numberUser = prompt('Введите число');
    let resaltCube = numberUser ** 3;

    if (isNaN(numberUser)) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(`${numberUser} в кубе равняется ${resaltCube}`);
    }
}

// Задание 7
const circle1 = {
    radius: 2,
    getArea() {
        return Mаth.PI * (this.radius ** 2);
    },
    getPerimeter() {
        return 2 * Mаth.PI * this.radius;
    }
    
}

const circle2 = {
    radius: 10,
    getArea() {
        return Mаth.PI * (this.radius ** 2);
    },
    getPerimeter() {
        return 2 * Mаth.PI * this.radius;
    }
}

