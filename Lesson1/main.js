let str1 ='hello';
let str2 ='owu'
let str3 ='com'
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool1 = true;
let bool2 = false;
console.log (str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, bool1, bool2);

let [firstName, middleName, lastName] = ['Yevhenii', 'Ivankin', 'Oleksandrovych'];
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

let myFirstName = prompt('Enter your first name');
let myLastName = prompt('Enter your last name');
let myAge = +prompt('Enter your age')
console.log(myFirstName, myLastName, myAge)