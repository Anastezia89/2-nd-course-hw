function gameOne() {
    const generateRandom = Math.floor(Math.random()*100) +1;
    let numberUser = 0;
    
    do {
        numberUser = Number(prompt("Угадай число от 1 до 100."));

        if (numberUser === generateRandom) {
            alert(`Верно! Это число ${generateRandom}.`);
        } else if (numberUser >= generateRandom) {
            alert(`Число ${numberUser} больше загаданного.`);
        } else if (numberUser <= generateRandom) {
            alert(`Число ${numberUser} меньше загаданного.`);
        }
        
    } while (numberUser !== generateRandom);
}





// Для примера
// do {
//     peremennay = Number(prompt(`bla, bla, bla.`));
// } while (peremennay !== 5);

// Пока поользователь на вопрос prompt(`bla, bla, bla.`) не введёт цифру 5 изз условия while (peremennay !== 5) цикл будет выполняться (окно с воппросом будет пояявляться вновь).


// let numberUser = Number(prompt("Угадай число от 1 до 100."));
// if (numberUser >= 102 || numberUser <= 0) {
//     alert("Введённое число не в диапазоне игры. Введите число от 1 до 100.");
// } else if (numberUser === generateRandom) {
//     alert(`Верно! Это число ${generateRandom}.`);
// } else if (generateRandom >= numberUser) {
//     alert("Это число меньше загаданного.");
// } else if (generateRandom <= numberUser) {
//     alert("Это число больше загаданного.");
// } else {
//     alert("Неверное значение. Введите число от 1 до 100.");
// }
// console.log(generateRandom); 
