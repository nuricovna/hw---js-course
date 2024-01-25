// задание 1
let word = 'js';
word = word.toUpperCase();
console.log(word); 

// задание 2.1
const animals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const searchStart1 = 'ко';
animals.forEach((animal) => {
    if (animal.toLowerCase().includes(searchStart1.toLowerCase())) {
		console.log(animal);
	}
});

// задание 2.2
const fruits = ['яблоко', 'груша', 'гриб', 'огурец'];
const searchStart2 = 'гру';
fruits.forEach((fruit) => {
    if (fruit.toLowerCase().includes(searchStart2.toLowerCase())) {
		console.log(fruit);
	}
});

// задание 2.3
const places = ['Дом', 'Банк', 'Больница', 'Театр'];
const searchStart3 = 'Кино';
places.forEach((place) => {
    if (place.toLowerCase().includes(searchStart3.toLowerCase())) {
		console.log(place);
	}
});


// задание 3.1
function getNumber() {
    return Math.floor(32.58884);
}
console.log(getNumber());

// задание 3.2
function getNumber() {
    return Math.ceil(32.58884);
}
console.log(getNumber());

// задание 3.3
function getNumber() {
    return Math.round(32.58884);
}
console.log(getNumber());

// задание 4.1
function searchNumber() {
    return Math.max(52, 53, 49, 77, 21, 32);
}
console.log(searchNumber());

// задание 4.2
function searchNumber() {
    return Math.min(52, 53, 49, 77, 21, 32);
}
console.log(searchNumber());

// задание 5
function getRandomInt(minValue,maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(0, 10));


// задание 6
let exit = getRandomArrNumber(7);
function getRandomArrNumber(num) {
    let userArray = [];
    for (let i = 0; i < num / 2; i++) {
        userArray.push(Math.floor(Math.random() * Math.floor(num)));
    }
    return userArray;
}
console.log(exit);

// задание 7
function generator(minValue,maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(generator(0, 50));

// задание 8
let ourDate = new Date("25 January 2024");
console.log(ourDate); 

// задание 9
let currentDate = new Date("1/25/2024");
console.log(currentDate); 
currentDate.setDate(73);
console.log(currentDate);

// задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
myDate.setDate(25);
myDate.setMonth(0);
myDate.setYear(2024); 
myDate.setHours(10);
myDate.setMinutes(5);
myDate.setSeconds(5);
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

console.log(fullDate, fullTime);