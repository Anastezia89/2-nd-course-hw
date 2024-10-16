// Задание 1
let n = 1;
while (n < 3) {
   n++;
   console.log('Привет');
}

// Задание 2
let numberTwo = 0;
while (numberTwo <= 4) {
    numberTwo++;
    console.log(numberTwo);
}

// Задание 3
let numberThree = 7;
do {
    console.log(numberThree);
    numberThree++;
} while (numberThree < 23);

// Задание 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]} долларов`);
}

// Задание 5
let y = 1000;
let num = 0;

while (y >= 50) {
    y /= 2;
    console.log (y);
    num++;
}
console.log(`Количество циклов: ${num}`);

let number = 31.25;

// Задание 6
let friday = 5;
let allDay = 31;

for (let i = friday; i <= allDay; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
    
}
