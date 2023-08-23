// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

            // function calcRectArea (a, b) {
            //     return a * b;
            // }
            //
            // console.log(calcRectArea(4, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

            // function calsCircleArea (r) {
            //     return  Math.PI * Math.pow(r, 2);
            // }
            //
            // console.log(calsCircleArea(2));

            // function calcCylArea(h, r) {
            //     return 2 * Math.PI * r * h + 2 * calsCircleArea(r);
            // }
            //
            // console.log(calcCylArea(3, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

            // let myArray = [1, 4, 7, 123, 'dsko', 'sdjg'];
            // function printArray(arr) {
            //     for(let elem of arr) {
            //         console.log(elem)
            //     }
            // }
            //
            // console.log(printArray(myArray));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

            // function printText(text) {
            //     document.write(`<p>${text}</p>`);
            // }
            //
            // printText('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

            // function createList(itemText) {
            //     document.write(`<ul>
            //                         <li>${itemText}</li>
            //                         <li>${itemText}</li>
            //                         <li>${itemText}</li>
            //                     </ul>`);
            // }
            //
            // createList('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

            // function createList(itemText, itemNumber) {
            //     document.write(`<ul>`);
            //     for(let i = 0; i < itemNumber; i++) {
            //         document.write(`<li>${itemText}</li>`);
            //     }
            //     document.write(`</ul>`);
            // }
            //
            // createList('my text', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

            // let myArray = [1, 4, 7, 123, 'dsko', 'sdjg'];
            //
            // function createList(arr) {
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
            // function printUsers(arr) {
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
            // function minNumber(arr) {
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
            // function Sum(arr) {
            //     let sum = 0;
            //     for (let number of arr) {
            //         sum += number;
            //     }
            //     return sum
            // }
            //
            // console.log(Sum(numbers));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

            // let numbers = [45, 234, 3575, -78, 84, 2];
            //
            // function Swap(arr, index1, index2) {
            //     let a = arr[index1];
            //     arr[index1] = arr[index2];
            //     arr[index2] = a;
            //
            //     return arr;
            // }
            //
            // console.log(Swap(numbers, 2, 0));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

            // let currenciesRates = [{currency: 'PLN', value: 8.98}, {currency: 'USD', value: 40}, {currency: 'GBP', value: 46.97}, {currency: 'EUR', value: 42}]
            // function Exchange (sumUAH, currencyValues, exchangeCurrency) {
            //     let neededCurrency;
            //     debugger;
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
            // console.log(Exchange(10000, currenciesRates, 'USD'));
