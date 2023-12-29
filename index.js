// //задание 1 

// console.log('диана'.toUpperCase());

// //задание 2

// const products = ['Кошка', 'Кит', 'Комар', 'Носорог'];

// const search = ('ко');

// products.forEach((product) => {
// 	if (product.toLowerCase().startsWith(search.toLowerCase())) {
// 		console.log(product);
// 	}
// });

// //задание 3
// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));


// //задание 4
// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// //задание 5

// function getRandomInt(minValue, maxValue) {
//     return Math.round (Math.random() * maxValue);
//  }
//  console.log(getRandomInt(0, 10));

//  //задание 6

//  let massiv = getRandomArrNumber(7);
//  function getRandomArrNumber(num) {
//      let userArray = [];
//      for (let i = 0; i < num / 2; i++) {
//          userArray.push(Math.floor(Math.random() * Math.floor(num)));
//      }
//      return userArray;
//     }

//     console.log(massiv);

//  //задание 7

//  function celoe (minValue,maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }

// console.log(celoe(0, 50));

//  //задание 8
//  let now = new Date();
//  console.log (now);

//  //задание 9
//  let currentDate = new Date(2023, 4, 30);
// currentDate.setDate(currentDate.getDate() + 73);

// alert(currentDate);


// //задание 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();
// myDate.setDate(1);
// myDate.setMonth(5);
// myDate.setYear(2023);

// let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
// " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

// console.log(fullDate); 


function monthNumber() {
    let enterMonth = Number(prompt('Enter month number'));
    if (enterMonth === 12 || enterMonth === 1 || enterMonth === 2) {
        return alert('Зима');
    }
    else if (enterMonth === 3 || enterMonth === 4 || enterMonth === 5) {
        return alert('Весна');
    }
    else if (enterMonth === 6 || enterMonth === 7 || enterMonth === 8) {
        return alert('Лето');
    }
    else if (enterMonth === 9 || enterMonth === 10 || enterMonth === 11) {
        return alert('Осень');
    }
    else {
        return alert('Некорректный номер месяца');
    }
}
