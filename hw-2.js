
// задание 1
let a = 10; //update
alert(a);
a = 20;
alert(a);

// задание 2
const yearReleaseIphone = 'Год выпуска первого iPhone - 2007г.';
alert(yearReleaseIphone);

//  задание 3
let creatorOfJavaScript = 'Брендан Айк';
alert(creatorOfJavaScript);

//  задание 4
let c = 10;
let d = 2;
let summ = c + d;
let subtraction = c - d;
let multiplication = c * d;
let division = c / d;
alert(` Сумма = ${summ}\n Разность = ${subtraction}\n Произведение = ${multiplication}\n Частное = ${division}`);

// задание 5
let e = 2;
result = e ** 5;
alert(`2 в 5-й степени = ${result}`);

// задание 6
let a = 9;
let b = 2;
result = a % b;
alert(`Остаток = ${result}`);

//  задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

//  задание 8
let age = prompt('Сколько вам лет?');
alert(age);

//  задание 9
let user = {
    firstname: "",
    age: Number,
    isAdmin: true,
};
//  задание 9.1
user.cityOfResidence = true;
//  задание 9.2
user.cityOfResidence = false;
//  задание 9.3
delete user.cityOfResidence;
//  задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user.info);

//  задание 10
let youname = prompt('Укажите имя.');
alert('Привет,' + youname + '!');



