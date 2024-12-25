// Игра № 1

function gameOne() {
    const generateRandom = Math.floor(Math.random()*100) + 1;
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


// Игра № 2

function gameTwo() {
    
    const numbA = Math.floor(Math.random() * 100) + 1;
    const numbB = Math.floor(Math.random() * 100) + 1;

    const mathSigns = [`+`, `-`, `*`, `/`];
    const randomMathSigns = Math.floor(Math.random() * (mathSigns.length));
    let index = mathSigns[randomMathSigns];

    if (index === `+`) {
        task = `Решите пример ${numbA} + ${numbB}`;
    } else if (index === `-`) {
        task = `Решите пример ${numbA} - ${numbB}`;
    } else if (index === `*`) {
        task = `Решите пример ${numbA} * ${numbB}`;
    } else if (index === `/`) {
        task = `Решите пример ${numbA} / ${numbB}.`;
        if (numbA > numbB) {
            task = `Решите пример ${numbA} / ${numbB}. Укажите получившееся целое число (без остатка).`;
        } else {
            task = `Решите пример ${numbB} / ${numbA}. Укажите получившееся целое число (без остатка).`;
        }
    }

    userAnswer = prompt(task);

    trueAnswer = calcTrueAnswer(index, numbA, numbB);
    if (Number(userAnswer) === trueAnswer) {
        alert("Верно!");
    } else {
        alert("Неверно! Попробуйте ещё раз.");
    }

    function calcTrueAnswer(index, numbA, numbB) {
        switch (index) {
            case `+`:
                return numbA + numbB;
        
            case `-`:
                return numbA - numbB;

            case `*`:
                return numbA * numbB;
        
            case `/`:
                return Math.floor(numbA / numbB);
        }
    }

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
