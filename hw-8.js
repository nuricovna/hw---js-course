// ЗАДАНИЕ 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

console.log(people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      return 0;
    }));

// ЗАДАНИЕ 2
function isPositive(number) {
    return number >= 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(arr, callback) {
    const resultArr = [];

    arr.map((elem) => {
        if (callback(elem)) {
            resultArr.push(elem)
        }
    });

    return resultArr;
}
    
console.log(filter([3, -4, 1, 9], isPositive));
    
const human = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(human, isMale));


// ЗАДАНИЕ 3
const timer = () => {
 
    const interval = setInterval(() => console.log(new Date()), 300);
     
     setTimeout(() => { 
     clearInterval(interval); 
     console.log('30 секунд прошло'); 
         }, 3000);
 };
 
 timer(); 


// ЗАДАНИЕ 4
function delayForSecond(callback) {
    setTimeout(() => {
    callback();
    }, 1000);
}

delayForSecond(function () {
        console.log('Привет, Глеб!');
})

// ЗАДАНИЕ 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
