// --створити масив з:
// - з 5 числових значень

    // let numbers = [1, 3, 5, 7, 9];
    // console.log(numbers);

// - з 5 стічкових значень

    // let strings = ['str1', 'str2', 'str3', 'str4', 'str5'];
    // console.log(strings);

// - з 5 значень стрічкового, числового та булевого типу

    // let arr = [2, 4, 'random-string', true, false];
    // console.log(arr);

// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

    // let randomArray = [];
    // randomArray[0] = 5;
    // randomArray[1] = 'something';
    // randomArray[2] = true;
    // console.log(randomArray);

//
//
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :

            // let myArray = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
            //
            // let counter = 0;
            // while (counter < myArray.length) {
            //     console.log(myArray[counter]);
            //     counter++;
            // }
            //
            // reversed
            // let counter = myArray.length -1;
            // while (counter >= 0) {
            //     console.log(myArray[counter]);
            //     counter--;
            // }
            //
// 2. перебрати його циклом for
            //
            // for (let i = 0; i < myArray.length; i++) {
            //     console.log(myArray[i]);
            // }
            //
            // reversed
            // for (let i = myArray.length - 1 ; i >= 0; i--) {
            //     console.log(myArray[i]);
            // }
            //
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
            //
            // let secondCounter = 1;
            // while (secondCounter < myArray.length) {
            //     console.log(myArray[secondCounter]);
            //     secondCounter += 2;
            // }
            //
            // reversed
            // let secondCounter = myArray.length - 1;
            // while (secondCounter >= 0) {
            //     if (secondCounter % 2) {
            //         console.log(myArray[secondCounter])
            //     }
            //     secondCounter--;
            // }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
            //
            // for (let i = 1; i < myArray.length; i += 2) {
            //     console.log(myArray[i]);
            // }
            //
            // reversed
            // for (let i = myArray.length - 1; i >= 0; i--) {
            //     if (i % 2) {
            //         console.log(myArray[i])
            //     }
            // }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
            //
            // let secondCounter = 0;
            // while (secondCounter < myArray.length) {
            //     console.log(myArray[secondCounter]);
            //     secondCounter += 2;
            // }
            // reversed
            // let secondCounter = myArray.length - 1;
            // while (secondCounter >= 0) {
            //     if (!(secondCounter % 2)) {
            //         console.log(myArray[secondCounter])
            //     }
            //     secondCounter--;
            // }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
            //
            // for (let i = 0; i < myArray.length; i += 2) {
            //     console.log(myArray[i]);
            // }
            //
            // reversed
            //
            // for (let i = myArray.length - 1; i >= 0; i--) {
            //     if (!(i % 2)) {
            //         console.log(myArray[i])
            //     }
            // }
// 7. замінити кожне число кратне 3 на слово "okten"
            //
            // for (let i = 1; i < myArray.length; i++) {
            //     if (!(i%3)) {
            //         myArray[i] = 'okten';
            //     }
            //     console.log(myArray[i])
            // }
            // for (let i = myArray.length - 1; i >= 0; i--) {
            //     if (!(i%3)) {
            //         myArray[i] = 'okten';
            //     }
            //     console.log(myArray[i])
            // }
            //
// 8. вивести масив в зворотньому порядку.
            //
            // for (let i = myArray.length - 1; i >= 0; i--) {
            //     console.log(myArray[i])
            // }
            //
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)











//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// const books = [
//     {title: 'Simple book', pages: 289, authors: 'John Doe', genres: 'boring'},
//     {title: 'Book with 2 authors', pages: 694, authors: ['John Doe', 'Lily Cooper'], genres: 'doubleBoring'},
//     {title: 'Who is Sauron and why i follow him', pages: 294, authors: 'Saruman', genres: ['psychlogy', 'self development', 'historical']},
//     {title: 'Honey all around', pages: 149, authors: ['Sam Honey', 'Luke Bee'], genres: 'science'},
//     {title: 'Night life when you are rich', pages: 1024, authors: 'Bruce Wayne', genres: ['action', 'business consulting']},
//     {title: 'The longest book about nothing', pages: 5393, authors: 'Flash', genres: 'mystics'},
//     {title: 'How to craft rings', pages: 234, authors: 'Sauron', genres: 'DIY'}
// ]
//
// // -знайти наібльшу книжку.
//
//     let longestBookPages = 0;
//     let neededBook;
//     for (let currentBook of books) {
//         if (currentBook.pages > longestBookPages) {
//             longestBookPages = currentBook.pages;
//             neededBook = currentBook;
//         }
//     }
//
//     console.log(neededBook)
//
// // - знайти книжку/ки з найбільшою кількістю жанрів
//
//     let genresNum = 0;
//     let biggestGenresNumBook;
//     for (let currentBook of books) {
//         if(Array.isArray(currentBook.genres)) {
//             if (currentBook.genres.length > genresNum) {
//                 genresNum = currentBook.genres.length;
//                 biggestGenresNumBook = currentBook;
//             }
//         }
//     }
//
//     console.log(biggestGenresNumBook)
//
// // - знайти книжку/ки з найдовшою назвою
//
//     let longestTitle = 0;
//     let longestTitleBook;
//     for (let currentBook of books) {
//         if (currentBook.title.length > longestTitle) {
//             longestTitle = currentBook.title.length;
//             longestTitleBook = currentBook;
//         }
//     }
//
//     console.log(longestTitleBook)
//
// // - знайти книжку/ки які писали 2 автори
//
//     let twoAuthorsBooks = [];
//     for (let currentBook of books) {
//         if(Array.isArray(currentBook.authors)) {
//             if (currentBook.authors.length === 2) {
//                 twoAuthorsBooks.push(currentBook)
//             }
//         }
//     }
//
//     console.log(twoAuthorsBooks)
//
// // - знайти книжку/ки які писав 1 автор
//
//     let soloAuthorBook = [];
//     for (let currentBook of books) {
//         if(typeof currentBook.authors === "string") {
//             soloAuthorBook.push(currentBook)
//         }
//     }
//
//     console.log(soloAuthorBook)