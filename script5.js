function gameOne() {
    const generateRandom = Math.floor(Math.random()*100) +1;
    let numberUser = Number(prompt("Угадай число от 1 до 100."));

    if (numberUser >= 102 || numberUser <= 0) {
        alert("Введённое число не в диапазоне игры. Введите число от 1 до 100.");
    } else if (numberUser === generateRandom) {
        alert(`Верно! Это число ${generateRandom}.`);
    } else if (generateRandom >= numberUser) {
        alert("Это число меньше загаданного.");
    } else if (generateRandom <= numberUser) {
        alert("Это число больше загаданного.");
    } else {
        alert("Неверное значение. Введите число от 1 до 100.");
    }
    console.log(generateRandom);
}


