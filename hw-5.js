// задание 1 
function result(a, b) {
    return Math.min(a, b)
}

console.log(result(8, 4));

// задание 2 
let num = prompt('Введите число');
function evenNumber() {
    if (num % 2 === 0) {
        alert('Четное число');
    } else {
        alert('Error');
    }
}
evenNumber();

// задание 3
let b = prompt('Введите число');
function squareNumber() {
    b = b ** 2;
    console.log(b);
}
function returnSquareNumber() {
    b = b ** 2;
    return b;
}
squareNumber();
returnSquareNumber();

// задание 4
let howAge = prompt('Сколько тебе лет?');
function fixAge(howAge) {
    if (howAge < 0) {
        return 'Вы ввели неправильное значение';
    } else if (howAge >=0 && howAge <= 12) {
            return 'Привет, друг!';
    } else {
            return 'Добро пожаловать!';
    }
}
alert(fixAge(howAge));

// задание 5
function trueIntNumber() {
        let a = prompt('Введите первое число');
        let b = prompt('Введите второе число');
        if (isNaN(a) || isNaN(b)) {
            return 'Одно или оба значения не являются числом';
          } else {
            return (a * b);
        }
}
trueIntNumber();

// задание 6
function backNumber() {
    let numberFirst = prompt('Enter number');
    if (!isNaN(numberFirst)) {
        const numberInCube = numberFirst ** 3;
        console.log(`n в кубе равняется ${numberInCube}`);
    } else {
        console.log('Переданный параметр не являются числом');
    }
}
backNumber();

// задание 7
function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * this.radius * Math.PI;
}

const circle1 = {
    radius: 10,
    getCircleleArea: getArea,
    getirclelePerimeter: getPerimeter,
};
const circle2 = {
    radius: 14,
    getCircleleArea: getArea,
    getirclelePerimeter: getPerimeter,
};
console.log(circle1.getCircleleArea());
console.log(circle1.getirclelePerimeter());
console.log(circle2.getCircleleArea());
console.log(circle2.getirclelePerimeter());

// задание 8
//Работа с макетом