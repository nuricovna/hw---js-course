// задание 1

let hello = 0;
while (hello < 2) {
    console.log('Привет');
    hello++
}

// задание 2

let number = 1;
while (number <= 5) {
    console.log(number);
    number++
}

// задание 3

let numberNew = 7;
while (numberNew <= 22) {
    console.log(numberNew);
    numberNew++
}

// задание 4

const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};
for (let many in obj) {
    console.log(`${many} — зарплата ${obj[many]} долларов.`);
}

// задание 5

let number = 1000;
let counter= 0;

for (; number >= 50; number /= 2) {
    counter++;
}
console.log(`Получилось число ${number}. Число итераций равно ${counter}`);

// задание 6 

let firstFriday = 5;
for (let i = firstFriday; i <= 31; i += 7) {
console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}