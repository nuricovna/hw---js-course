//задание 1 

let i=0;

while (i<3) {
    console.log ('Привет!');
    i++;
}

//задание 2

let a = 1;
while (a<=6); { 
    console.log('a');
    a++;
} 

//задание 3

let b = 7;
while (b<=22); { 
    console.log(b);
    b++;
} 

//задание 4

let obj = {'Kolya': 200, 'Vasya':300, 'Petya': 400};

for (key in obj){
    console.log ([key]+ ' - Зарплата'+ obj[key]+'долларов'+'<br>');
}

//задание 5

let num = 0; 
for (let n = 1000; n >= 25; n = n / 2)  {
    console.log(n); 
    num++;
}

//задание 6

let friday = 6; 
for (let friday = 6; friday <=31; friday = friday +=7) {
    console.log(`Сегодня пятница, ${friday} - е число. Необходимо подготовить отчет`);
}