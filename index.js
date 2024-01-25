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


function randFruit() {
    let arrFruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrFruit = arrFruit.sort(() => Math.random() - 0.5);
    alert(arrFruit);
    let firstFruit = prompt('Чему равнялся первый элемент массива?');
    let endFruit = prompt('Чему равнялся последний элемент массива?');
    if (firstFruit === arrFruit[0] && endFruit === arrFruit[arrFruit.length - 1]) {
        alert('Поздравляем, угадали оба элемента.');
    } else if (firstFruit === arrFruit[0] || endFruit === arrFruit[arrFruit.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Не угадали ни одного элемента.');
    }
};