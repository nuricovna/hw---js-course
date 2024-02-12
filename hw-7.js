// задание 1
let word = 'js';
word = word.toUpperCase();
console.log(word); 

// задание 2
function searchStart(arr, str) {
    const result = arr.filter((el) => el.tolowerCase().includes(str.tolowerCase()));
    return result;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


// задание 3
function getNumber() {
}
console.log(Math.round(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.floor(32.58884));


// задание 4
function searchNumber(minValue,maxValue) {
}

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

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
function whichDay(date) {
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  let myDate = date
  let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
  let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
  return fullDate+ ' \n ' + fullTime;
}

whichDay(new Date())
