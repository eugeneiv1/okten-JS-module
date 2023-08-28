// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

            // const calcRectArea = (a, b) => a * b;
            // console.log(calcRectArea(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

            // const calcCircleArea = r => Math.PI * Math.pow(r, 2);
            // console.log(calcCircleArea(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

            // const calcCylArea = (h, r) => 2 * Math.PI * r * h + 2 * Math.PI * r * r;
            // console.log(calcCylArea(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

            // let myArray = [1, 4, 7, 123, 'dsko', 'sdjg'];
            // const printArr = arr => {
            //     for (let elem of arr) {
            //         console.log(elem)
            //     }
            // }
            // console.log(printArr(myArray));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

            // const createPara = text => document.write(`<p>${text}</p>`);
            // createPara('my text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

            // const createList = text => {
            //     document.write(`<ul>
            //                         <li>${text}</li>
            //                         <li>${text}</li>
            //                         <li>${text}</li>
            //                     </ul>`)
            // }
            //
            // createList('text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

            // const createList = (text, num) => {
            //     document.write(`<ul>`);
            //     for (let i = 1; i <= num; i++) {
            //         document.write(`<li>${text}</li>`);
            //     }
            //     document.write(`</ul>`);
            // }
            // createList('text', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

            // let myArray = [1, 4, 7, 123, 'dsko', 'sdjg'];
            //
            // const createList = arr => {
            //     document.write(`<ul>`);
            //     for (let elem of arr) {
            //         document.write(`<li>${elem}</li>`);
            //     }
            //     document.write(`</ul>`);
            // }
            //
            // createList(myArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

            // let users = [{id: 1, name: 'John', age: 30}, {id: 2, name: 'Lucy', age: 42}, {id: 3, name: 'Peter', age: 12}, {id: 4, name: 'Mike', age: 61}];
            //
            // const printUsers =arr => {
            //     for (let user of arr) {
            //         document.write(`<div>
            //                             <h1>User ID: ${user.id}</h1>
            //                             <p>User name: ${user.name}</p>
            //                             <p>User age: ${user.age}</p>
            //                         </div>`)
            //     }
            // }
            //
            // printUsers(users);

// - створити функцію яка повертає найменьше число з масиву

            // let numbers = [45, 234, 3575, -78, 84, 2];
            //
            // const minNumber = arr => {
            //     let min = arr[0];
            //     for (let number of arr) {
            //         if (number < min) {
            //             min = number;
            //         }
            //     }
            //     return min;
            // }
            //
            // console.log(minNumber(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

            // let numbers = [45, 234, 3575, -78, 84, 2];
            //
            // const sum = arr => {
            //     let sum = 0;
            //     for (let number of arr) {
            //         sum += number;
            //     }
            //     return sum
            // }
            //
            // console.log(sum(numbers));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

            // let numbers = [45, 234, 3575, -78, 84, 2];
            //
            // const swap =(arr, index1, index2) => {
            //     let a = arr[index1];
            //     arr[index1] = arr[index2];
            //     arr[index2] = a;
            //
            //     return arr;
            // }
            //
            // console.log(swap(numbers, 2, 0));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

            // let currenciesRates = [{currency: 'PLN', value: 8.98}, {currency: 'USD', value: 40}, {currency: 'GBP', value: 46.97}, {currency: 'EUR', value: 42}]
            // const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
            //     let neededCurrency;
            //     for (let currentCurrency of currencyValues) {
            //         if (currentCurrency.currency === exchangeCurrency) {
            //             neededCurrency = currentCurrency;
            //             break;
            //         }
            //     }
            //
            //     return sumUAH / neededCurrency.value
            // }
            //
            // console.log(exchange(10000, currenciesRates, 'USD'));