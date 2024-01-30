// задание 1 
const arrNumber = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arrNumber.length; i++) { //можно записать так for(let i of arrNumber) {}
    console.log(arrNumber[i]);
    if (arrNumber[i] === 10) break;
}

// задание 2 
const arrNumber2 = [1, 5, 4, 10, 0, 3];
console.log(`${arrNumber2.indexOf(4)}:4`);

// задание 3 
const arrNumber3 = [1, 3, 5, 10, 20];
//const arrNumber3 = arrNumber3.join(' ');
console.log(arrNumber3.join(''));

// задание 4 
let arr = []

for (let i = 0; i < 3; i++) {
arr[i] = [];
for (let j = 0; j < 3; j++) {
    arr[i][j] = 1;
};
};

// задание 5 
const arrNumber4 = [1, 1, 1];
arrNumber4.push(2, 2, 2);
console.log(arrNumber4);

// задание 6 
const arr = [9, 8, 7, 'a', 6, 5];
let resultArr = [9, 8, 7, 'a', 6, 5].filter(item => !isNaN(item)).sort();
console.log(resultArr);

// задание 7
const arrNumber = [9, 8, 7, 6, 5];
let requestNumber = Number(prompt('Введи число'));
if (arrNumber.includes(requestNumber)) {
    console.log(`Число ${requestNumber} есть в массиве.`);
} else {
    console.log(`Числа ${requestNumber} нет в массиве.`);
}

// задание 8
let str = 'abcdef';
let arrStr = str.split('').reverse().join('');
console.log(arrStr);


// задание 9
const arr = [[1, 2, 3,], [4, 5, 6]];
console.log(arr.flat());


// задание 10
let arrCreate = [7, 4, 1, 8, 5, 0, 1, 10, 3];
for (let i = 0; i < arrCreate.length - 1; i++) {
    console.log(arrCreate[i] + arrCreate[i + 1]);
}

// задание 11

const products = [1, 2, 3, 4, 5, 6, 7, 8]
function returnSquares (array) { 
      return array.map(elem => elem ** 2) 
}
products.map(transformToSquare);


// задание 12
const getLenghtWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const newArray = [];
    for (let i = 0; i < getLenghtWords.length; i++) {
        newArray.push(getLenghtWords[i].length);
        console.log(newArray);
}  


// задание 13
const set = [5, -3, 50, -6];

function negativeNumbers(set) {
  return set.filter(function(value) {
    return value < 0;
  });
}
console.log(negativeNumbers(set));
