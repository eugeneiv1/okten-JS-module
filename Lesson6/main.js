// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

            // console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

            // let hello = 'hello world'.toUpperCase();
            // let lorem = 'lorem ipsum'.toUpperCase();
            // let javaScript = 'javascript is cool'.toUpperCase();
            // console.log(hello, lorem, javaScript);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

            // let hello = 'HELLO WORLD'.toLowerCase();
            // let lorem = 'LOREM IPSUM'.toLowerCase();
            // let javaScript = 'JAVASCRIPT IS COOL'.toLowerCase();
            // console.log(hello, lorem, javaScript);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

//             let str = ' dirty string   ';
//              1-st variant
//             let cleanStr = str.trim();
//              2-nd variant
//             let cleanStr2 = str.split(' ').filter(value => value.length).join(' ')
//             console.log(cleanStr);
//             console.log(cleanStr2);

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

            // let str = 'Ревуть воли як ясла повні';
            //
            // let stringToArray = string => string.split(' ');
            // console.log(stringToArray(str));

// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

            // let arr = [10,8,-7,55,987,-1011,0,1050,0];
            // let newArray = arr.map(value => value.toString())
            // console.log(newArray);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

            // let nums = [11,21,3];
            // const sortNums = (arr, direction) => direction === 'ascending' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b -a);
            // console.log(sortNums(nums, 'ascending')); // [3,11,21]
            // console.log(sortNums(nums, 'descending')); // [21,11,3]



//
// ==========================
// - є масив
            let coursesAndDurationArray = [
                {title: 'JavaScript Complex', monthDuration: 5},
                {title: 'Java Complex', monthDuration: 6},
                {title: 'Python Complex', monthDuration: 6},
                {title: 'QA Complex', monthDuration: 4},
                {title: 'FullStack', monthDuration: 7},
                {title: 'Frontend', monthDuration: 4}
            ];
// -- відсортувати його за спаданням за monthDuration

            // let sortedByDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
            // console.log(sortedByDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

            // let filtered = coursesAndDurationArray.filter(value => value.monthDuration > 5);
            // console.log(filtered);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

            // let formatedArray = coursesAndDurationArray.map((value, index) => {
            //     return {
            //         id: index + 1,
            //         title: value.title,
            //         monthDuration: value.monthDuration
            //     }
            // });
            // console.log(formatedArray);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

            // let cards = [
            //     ['spade', 'diamond', 'heart', 'clubs'],
            //     ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
            // ];
            //
            // const createCardsDeck = function (arr) {
            //     let cardsDeck = [];
            //
            //     for (let suit of arr[0]) {
            //         for (let value of arr[1]) {
            //             let card = {};
            //             card.cardSuit = suit;
            //             card.value = value;
            //             if (suit === 'spade' || suit === 'clubs') {
            //                 card.color = 'black'
            //             } else {
            //                 card.color = 'red'
            //             }
            //             cardsDeck.push(card);
            //         }
            //     }
            //     return cardsDeck;
            // }
            //
            // let cardsDeck = createCardsDeck(cards);
            //
            // console.log(cardsDeck);

// - знайти піковий туз

            // let spadeAce = cardsDeck.filter (value => value.cardSuit === 'spade' && value.value === 'ace');
            // console.log(spadeAce);

// - всі шістки

            // let sixes = cardsDeck.filter(value => value.value === '6');
            // console.log(sixes);

// - всі червоні карти

            // let reds = cardsDeck.filter(value => value.color === 'red');
            // console.log(reds);

// - всі буби

            // let diamonds = cardsDeck.filter(value => value.cardSuit === 'diamond');
            // console.log(diamonds);

// - всі трефи від 9 та більше

            // let bigClubs = cardsDeck.filter(value => value.value.length > 1 && value.cardSuit === 'clubs' );
            // console.log(bigClubs)

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

            // let sortedDeck = cardsDeck.reduce((accumulator, value) => {
            //     switch (value.cardSuit) {
            //         case 'spade':
            //             accumulator.spades.push(value);
            //             break;
            //         case 'diamond':
            //             accumulator.diamonds.push(value);
            //             break;
            //         case 'heart':
            //             accumulator.hearts.push(value);
            //             break;
            //         case 'clubs':
            //             accumulator.clubs.push(value);
            //             break;
            //     }
            //     return accumulator;
            // }, {spades: [], diamonds: [], hearts: [], clubs: []})
            //
            // console.log(sortedDeck);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

            // let coursesArray = [
            //     {
            //         title: 'JavaScript Complex',
            //         monthDuration: 5,
            //         hourDuration: 909,
            //         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
            //     },
            //     {
            //         title: 'Java Complex',
            //         monthDuration: 6,
            //         hourDuration: 909,
            //         modules: ['html',
            //             'css',
            //             'js',
            //             'mysql',
            //             'mongodb',
            //             'angular',
            //             'aws',
            //             'docker',
            //             'git',
            //             'java core',
            //             'java advanced']
            //     },
            //     {
            //         title: 'Python Complex',
            //         monthDuration: 6,
            //         hourDuration: 909,
            //         modules: ['html',
            //             'css',
            //             'js',
            //             'mysql',
            //             'mongodb',
            //             'angular',
            //             'aws',
            //             'docker',
            //             'python core',
            //             'python advanced']
            //     },
            //     {
            //         title: 'QA Complex',
            //         monthDuration: 4,
            //         hourDuration: 909,
            //         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
            //     },
            //     {
            //         title: 'FullStack',
            //         monthDuration: 7,
            //         hourDuration: 909,
            //         modules: ['html',
            //             'css',
            //             'js',
            //             'mysql',
            //             'mongodb',
            //             'react',
            //             'angular',
            //             'aws',
            //             'docker',
            //             'git',
            //             'node.js',
            //             'python',
            //             'java']
            //     },
            //     {
            //         title: 'Frontend',
            //         monthDuration: 4,
            //         hourDuration: 909,
            //         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
            //     }
            // ];

// --написати пошук всіх об'єктів, в який в modules є sass

            // let includesSass = coursesArray.filter(value => value.modules.includes('sass'));
            // console.log(includesSass);

// --написати пошук всіх об'єктів, в який в modules є docker

            // let includesDocker = coursesArray.filter(value => value.modules.includes('docker'));
            // console.log(includesDocker);