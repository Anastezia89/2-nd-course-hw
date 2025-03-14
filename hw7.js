
// Задание 1
let oneStr = 'js';

oneStr = oneStr.toUpperCase();
console.log(oneStr);

// Задание 2
function filter(twoArr, twoStr) {
    let result = [];
    for (let i = 0; i < twoArr.length; i++) {
        if (twoArr[i].toLowerCase().startsWith(twoStr.toLowerCase())) {
            result.push(twoArr[i]);
        }
    }
    return result;
}

console.log(filter(['eight', 'eighteen', 'eighty', 'Ethan'], 'ei'));

// Задание 3
let threeA = 32.58884;

// Округляет число до меньшего целого
console.log(Math.floor(threeA));
// Округляет число до большего целого
console.log(Math.ceil(threeA));
// Округляет число до ближайшего целого
console.log(Math.round(threeA));

// Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
function random() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(random());

// Задание 6
function sixRandomArr(numb) {
    return Array.from({length: Math.floor(numb / 2)}, () => Math.floor(Math.random() * numb));
}

console.log(sixRandomArr(10));

// Задание 7
function sevenRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(sevenRandom(9, 88));

// Задание 8
console.log(new Date());

// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// Задание 10
function formatDate(date) {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    let hour = date.getHours();
    let formatHour = String(hour).padStart(2, '0');
    let minutes = date.getMinutes();
    let formatMinutes = String(minutes).padStart(2, '0');
    let seconds = date.getSeconds();
    let formatSeconds = String(seconds).padStart(2, '0');

    return `
    Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}
    Время : ${formatHour}:${formatMinutes}:${formatSeconds}`;
}

console.log(formatDate(new Date()));
