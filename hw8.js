//задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
    ];
   
    console.log(people.sort((a, b) => a.age - b.age));

//задание 2

function isPositive(arr) {
    return arr.filter((a => a >= 0))
    
    }
    
    function isMale(arr2) {
    return arr2.filter(a => (a.gender == 'male'))
    
    }
    
    function filter(array, instr) {
    return instr(array)
    
    };
    const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
    ];
    console.log(filter(people, isMale))

//задание 3


let count = 0;
const intervalID = setInterval(function() {
console.log(new Date());
count += 3;
if (count >= 30) {
clearInterval(intervalID);
console.log('30 секунд прошло');
}
}, 3000);


//задание 4


function delayForSecond(callback) {
    setTimeout(callback, 1000);
    }

 delayForSecond(function () {
        console.log('Привет, Глеб!');
        });


//задание 5



 // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
 // а затем вызывает переданный колбэк
 function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
                if(cb) { cb(); 
        }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => { 
    sayHi('Глеб')
    });