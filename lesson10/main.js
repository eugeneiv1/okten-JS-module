// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================

            // let myForm = document.forms.myForm;
            // myForm.onsubmit = function (ev) {
            //     ev.preventDefault();
            //     let name = this.name.value;
            //     let surname = this.surname.value;
            //     let age = +this.age.value > 0 ? +this.age.value : 'Enter age greater than 0';
            //     showInfo(name, surname, age);
            // }
            //
            // const showInfo = function (name, surname, age) {
            //     let div = document.createElement('div');
            //     let user = {name, surname, age};
            //     for (const userElement in user) {
            //         let p = document.createElement('p');
            //         p.innerText = user[userElement];
            //         div.appendChild(p);
            //
            //     }
            //     document.body.appendChild(div);
            // }



// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================


            // window.onload = function () {
            //     let element = document.getElementById('number');
            //     let localNumber = +JSON.parse(localStorage.getItem('number')) || +element.innerHTML;
            //     element.innerText = localNumber;
            //     localNumber += 1;
            //     localStorage.setItem('number', JSON.stringify(localNumber));
            // }


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================

            // let currentUrl = location.href;
            // console.log(currentUrl.includes('index'));
            // let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
            //
            // if (currentUrl.includes('index')) {
            //
            //         let date = new Date();
            //         let sessionDay = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            //         let sessionTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            //         let session = {sessionDay, sessionTime};
            //
            //         sessions.push(session);
            //         console.log(sessions);
            //         localStorage.setItem('sessions', JSON.stringify(sessions));
            //
            // } else {
            //
            //     console.log(sessions);
            //
            //     for (const session of sessions) {
            //         let div = document.createElement('div');
            //
            //         let day = document.createElement('span');
            //         day.innerText = `Day - ${session.sessionDay}`;
            //
            //         let time = document.createElement('span')
            //         time.innerText = `Time - ${session.sessionTime}`;
            //         time.classList.add('time');
            //
            //         div.append(day, time);
            //         document.body.appendChild(div);
            //     }
            // }

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться ппередні 10 об'єктів
//             document.body.innerHTML = '';
//             const makeObjArr = function (arrLength) {
//                 let arr = [];
//                 for (let i = 1; i < arrLength + 1; i++) {
//                     let obj = {};
//                     obj.id = i;
//                     obj.name = 'user' + i;
//                     arr.push(obj);
//                 }
//                 return arr;
//             }
//
//             let myArr = makeObjArr(100);
//
//             let start = 0;
//             let end = 9;
//
//             let prevBtn = document.createElement('button');
//             prevBtn.innerText = 'Show previous';
//             let nextBtn = document.createElement('button');
//             nextBtn.innerText = 'Show next';
//
//             document.body.append(prevBtn, nextBtn);
//             const showInfo = function (start, end, arr) {
//                 let oldWrapper = document.getElementById('wrapper');
//                 if (oldWrapper) {
//                     oldWrapper.remove();
//                 }
//                 let wrapper = document.createElement('div');
//                 wrapper.setAttribute('id', 'wrapper');
//                 for (let i = start; i <= end; i++) {
//                     let div = document.createElement('div');
//                     let id = document.createElement('p');
//                     let name = document.createElement('p');
//
//                     div.append(id, name);
//
//                     id.innerText = arr[i].id;
//                     name.innerText = arr[i].name;
//
//                     wrapper.appendChild(div);
//                 }
//                 document.body.appendChild(wrapper);
//             }
//
//             showInfo(start, end, myArr);
//
//             nextBtn.onclick = function (ev) {
//                 ev.preventDefault();
//
//                 start += 10;
//                 end += 10;
//
//                 if (end > myArr.length) {
//                     showInfo(start, myArr.length - 1, myArr);
//                 } else {
//                     showInfo(start, end, myArr);
//                 }
//             }
//
//             prevBtn.onclick = function (ev) {
//                 ev.preventDefault();
//
//                 if (start === 0) {
//                     showInfo(start, end, myArr);
//                 } else {
//                     start -= 10;
//                     end -= 10;
//                     showInfo(start, end, myArr);
//                 }
//             }
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

            // let button = document.getElementsByClassName('mybutton')[0];
            //
            // button.onclick = function (event) {
            //     event.preventDefault();
            //     document.getElementById('text').classList.toggle('hide')
            // }

//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

            // let btn = document.getElementById('ageBtn');
            // btn.onclick = function (ev) {
            //     ev.preventDefault();
            //     let inputValue = +document.getElementById('age1').value;
            //     let age = typeof inputValue === 'number' ? inputValue : 'Enter number';
            //     console.log(age);
            //     let p = document.getElementsByClassName('agepara')[0] || document.createElement('p');
            //     p.classList.add('agepara');
            //     if (age < 18) {
            //         p.innerText = 'Not old enough!!! Get out of here!!!';
            //         document.body.appendChild(p);
            //     } else {
            //         p.innerText = 'Come on!'
            //     }
            // }

//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

            // let infoBtn = document.getElementById('getInfo');
            //
            // infoBtn.onclick = function () {
            //     let linesNum = +document.getElementById('linesNum').value;
            //     let cellsNum = +document.getElementById('cellsNum').value;
            //     let cellsInfo = document.getElementById('cellsInfo').value;
            //
            //     let wrapper = document.getElementsByClassName('wrapper')[0] || document.createElement('div');
            //     wrapper.classList.add('wrapper');
            //     wrapper.innerHTML = '';
            //     for (let i = 0; i < linesNum; i++) {
            //         let div = document.createElement('div');
            //         div.classList.add('line');
            //         for (let j = 0; j <cellsNum; j++) {
            //             let cell = document.createElement('p');
            //             cell.innerText = cellsInfo;
            //             cell.classList.add('cell');
            //             div.appendChild(cell);
            //         }
            //         wrapper.appendChild(div);
            //     }
            //     document.body.appendChild(wrapper)
            // }
            //
            // const makeTable = function (lines, cells, info) {
            //
            // }

//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

            // let div = document.createElement('div');
            // let price = JSON.parse(localStorage.getItem('price')) || 100;
            // localStorage.setItem('price', JSON.stringify(price));
            // div.innerText = `${price} grn`;
            // div.style.marginTop = '140px';
            // div.style.fontSize = '30px';
            // div.style.textAlign = 'center';
            // console.log(price)
            //
            // document.body.appendChild(div);
            // let date = new Date();
            // let time = date.getTime();
            // let lastReloadTime = JSON.parse(localStorage.getItem('lastreload'))|| time;
            // console.log(lastReloadTime)
            // localStorage.setItem('lastreload', JSON.stringify(lastReloadTime));
            // let diff = time - lastReloadTime;
            //     if (diff > 10000) {
            //         price += 10;
            //         div.innerText = `${price} grn`;
            //         localStorage.setItem('lastreload', JSON.stringify(time));
            //         localStorage.setItem('price', JSON.stringify(price))
            //     }

