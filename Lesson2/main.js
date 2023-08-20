// Масиви та об'єкти:
    // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let scores = [60, 75, 80, 99, 100, 91, 83, 95, 70, 80];
console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);
console.log(scores[3]);
console.log(scores[4]);
console.log(scores[5]);
console.log(scores[6]);
console.log(scores[7]);
console.log(scores[8]);
console.log(scores[9]);

    // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
    // Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const book1 = {
    title: "title1",
    pageCount: 478,
    genre: "fantasy",
    authors: [{name: "John", age: 30}, {name: "Jane", age: 27}]
}

const book2 = {
    title: "book2",
    pages: 589,
    genre: "documentary",
    authors: [{name: "Smith", age: 50}, {name: "Lola", age: 60}, {name: "Ben", age: 62}]
}

const book3 = {
    title: "book3",
    pages: 215,
    genre: "fairy tail",
    authors: [{name: "James", age: 23},
        {name: "Lilith", age: 25},
        {name: "Trivia", age: 30},
        {name: "Leviathan", age: 100500}]
}

    // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
    // Вивести в консоль пароль кожного користувача

let users = [
    {name: "Yoda", userName: "user1", password: "yoda123"},
    {name: "Plo", userName: "user2", password: "$pLo$"},
    {name: "Mace", userName: "user3", password: "maceOFtheMACE"},
    {name: "Saesee", userName: "user4", password: "seeSaeseeSae"},
    {name: "Anakin", userName: "user5", password: "imTHEchosen"},
    {name: "Agen", userName: "user6", password: "1234.53.534"},
    {name: "Kit", userName: "user7", password: "greenEverythinG"},
    {name: "Obi-Wan", userName: "user8", password: "uwereTheChosen"},
    {name: "Qui-Gon", userName: "user9", password: "mustTrainHIM"},
    {name: "Luke", userName: "user10", password: "wtfisgoingon"}
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// Логічні розгалуження:

    //- Є змінна х, якій ви надаєте довільне числове значення.
    //Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
    // Перевірте  скрипт при a, що дорівнює 1, 0, -3



let x = 100500;
 if (x !== 0) {
     console.log("Вірно");
 } else {
     console.log("Невірно");
 }

 let a = 1;
if (a !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

a = 0;
if (a !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

a = -3;
if (a !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

    // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
    // години попадає число(в першу, другу, третю или четверту частину години).

let time = 59;
if (time >= 0 && time < 60) {
    if (time < 15) {
        console.log('First quarter');
    } else if (time < 30) {
        console.log('Second quarter');
    } else if (time < 45) {
        console.log("Third quarter");
    } else {
        console.log('Fourth quarter');
    }
} else {
    console.log("incorrect number");
}

    // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
    // потрапляє це число (у першу, другу чи третю).


let day = 5;

if (day>=1 && day < 11) {
    console.log('first');
} else if (day >= 11 && day < 21) {
    console.log('second');
} else if (day >= 21 && day < 32) {
    console.log("third")
} else {
    console.log('no')
}

    // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
    // відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = +prompt('enter number of day');

switch (dayNumber) {
    case 1 :
        console.log('Monday');
        break;
    case 2 :
        console.log('Tuesday');
        break;
    case 3 :
        console.log('Wednesday');
        break;
    case 4 :
        console.log('Thursday');
        break;
    case 5 :
        console.log('Friday');
        break;
    case 6 :
        console.log('Saturday');
        break;
    case 7 :
        console.log('Sunday');
        break;

    default:
        console.log('waiting');
}

    // - Користувач вводить або має два числа.
    //Потрібно знайти та вивести максимальне число з тих двох .
    //Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('enter number 1');
let num2 = +prompt('enter number 2');

if (num1 !== num2) {
    if (num1 > num2) {
        console.log (num1);
    } else {
        console.log (num2);
    }
} else {
    console.log(`${num1} = ${num2}`)
}

    //- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    //за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
    // (хибноподібні, тобто приводиться до false)


let newX = "asdf";
if (!newX) {
    newX = 'default';
}
console.log(newX);

    // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
    //За допомоги іф перевірити кожен його елемент на тривалість навчання.
    //У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
