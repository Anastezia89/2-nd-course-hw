
// Задание 1
// const one = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < one.length; i++) {
//     console.log(one[i]);
//     if (one[i] === 10) {
//         break
//     }
// }

// // Задание 2
// const two = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < two.length; i++) {
//     if (two[i] === 4) {
//       console.log(i);  
//     }
// }

// // Задание 3
// const three = [1, 3, 5, 10, 20];

// console.log(three.join(' '));

// // Задание 4
// const four = [];

// for (let i = 0; i < 3; i++) {
//     const four2 = [];
//     for (let i = 0; i < 3; i++) {
//         four2.push(1);
//     }
//     four.push(four2);
// }

// console.log(four);

// // Задание 5
// const fifth = [1, 1, 1];
// fifth.push(2, 2, 2);

// console.log(fifth);

// // Задание 6
// const six = [9, 8, 7, 'a', 6, 5];
// six.sort();
// six.pop();

// console.log(six);

// Задание 7
// const seven = [9, 8, 7, 6, 5];
// let a = +prompt("Угадай число!");

// if (seven.includes(a)) {
//     alert('Угадал!');
// } else {
//     alert('Не угадал.');
// }

// // Задание 8
// let eight = 'abcdef';
// eight = eight.split('');
// eight.reverse();
// eight = eight.join('');

// console.log(eight);

// Задание 9
// const nine = [[1, 2, 3], [4, 5, 6]];
// Можно использовать эту строку вместо всех нижних console.log(nine.flat());

// const newNine = [];

// for (let i = 0; i < nine.length; i++) {
//     newNine.push(...nine[i]);
// }

// console.log(newNine);

// Задание 10
// const ten = [2, 3, 6, 8, 9];

// for (let i = 0; i < ten.length; i++) {
//     if (ten[i + 1]) {
//         console.log(ten[i] + ten[i + 1]);
//     }
// }

// Задание 11
// function elSqv(eleven) {
//     return eleven.map(item => item ** 2);
// }

// console.log(elSqv([3, 6, 8, 9]));

// Задание 12
// function twWd(twelve) {
//     return twelve.map(item => item.length);
// }

// console.log(twWd(['my', 'name', 'is']));

// Задание 13
// function ttMns(thirteen) {
//     return thirteen.filter(item => item < 0);
// }

// console.log(ttMns([3, -1,  6, -15, 5, 9, -7, 13]));

// Задание 14
// function random() {
//     return Math.floor(Math.random() * 10);
// }

// const fourteen = [];

// for (let i = 0; i < 10; i++) {
//     fourteen.push(random());
// }

// console.log(fourteen);

// const fourteen2 = [];

// for (let i = 0; i < fourteen.length; i++) {
//     if (fourteen[i] % 2 === 0) {
//         fourteen2.push(fourteen[i]);
//     } 
// }

// console.log(fourteen2);

// Задание 15
function randomFif() {
    return Math.floor(Math.random() * 10);
}

const fifteen = [];

for (let i = 0; i < 6; i++) {
    fifteen.push(randomFif());
}

console.log(fifteen);
console.log(fifteen.reduce((a, b) => a + b) / fifteen.length);
