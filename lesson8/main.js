// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

//             function User (id, name, surname, email, phone) {
//                 this.id = id;
//                 this.name = name;
//                 this.surname = surname;
//                 this.email = email;
//                 this.phone = phone;
//             }
//
//             let users = [
//                 new User(5, 'Vasya', 'Pupkin', 'pupkin@gmail.com', +380932785123),
//                 new User(10, 'Petya', 'Dupkin', 'dupkin@gmail.com', +380632718121),
//                 new User(7, 'Kolya', 'Kolodenko', 'kolodenko@gmail.com', +380932385198),
//                 new User(4, 'Sasha', 'Umerenko', 'umerenko@gmail.com', +380962785791),
//                 new User(1, 'Maks', 'Zvizdorenko', 'zvizdorenko@gmail.com', +380962785092),
//                 new User(9, "Glib", 'Ofihenko', 'ofihenko@gmail.com', +380932793728),
//                 new User(3, 'Oleg', 'Ktotovich', 'ktotovich@gmail.com', +380979123665),
//                 new User(8, 'Roma', 'Ruchenko', 'ruchenko@gmail.com', +380669815618),
//                 new User(6, 'Dima', 'Nozhenko', 'nozhenko@gmail.com', +380972780916),
//                 new User(2, 'Yevhenii', 'Golovenko', 'golovenko@gmail.com', +380932849560)
//             ];
//
//             console.log(users)
//
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
//             let oddIdUsers = users.filter(value => !(value.id % 2));
//             console.log(oddIdUsers)
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
//             let sortedUp = users.sort((a, b) => a.id - b.id);
//             console.log(sortedUp);

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

//             class Client {
//                 constructor(id, name, surname, email, phone, order) {
//                     this.id = id;
//                     this.name = name;
//                     this.surname = surname;
//                     this.email = email;
//                     this.phone = phone;
//                     this.order = order;
//                 }
//             }
//
//             let clients = [
//                 new Client(5, 'Vasya', 'Pupkin', 'pupkin@gmail.com', +380932785123, ['eggs', 'milk']),
//                 new Client(10, 'Petya', 'Dupkin', 'dupkin@gmail.com', +380632718121, ['water', 'bread']),
//                 new Client(7, 'Kolya', 'Kolodenko', 'kolodenko@gmail.com', +380932385198, ['meat', 'bread', 'tomatos']),
//                 new Client(4, 'Sasha', 'Umerenko', 'umerenko@gmail.com', +380962785791, ['cola', 'snacks', 'choco']),
//                 new Client(1, 'Maks', 'Zvizdorenko', 'zvizdorenko@gmail.com', +380962785092, ['snacks', 'beer']),
//                 new Client(9, "Glib", 'Ofihenko', 'ofihenko@gmail.com', +380932793728, ['choco', 'tea']),
//                 new Client(3, 'Oleg', 'Ktotovich', 'ktotovich@gmail.com', +380979123665, ['bread', 'meat', 'choco', 'beer']),
//                 new Client(8, 'Roma', 'Ruchenko', 'ruchenko@gmail.com', +380669815618, ['cucumbers']),
//                 new Client(6, 'Dima', 'Nozhenko', 'nozhenko@gmail.com', +380972780916, ['onion', 'cheese', 'olive oil']),
//                 new Client(2, 'Yevhenii', 'Golovenko', 'golovenko@gmail.com', +380932849560, ['i', 'want', 'it', 'all', 'and', 'now'])
//             ];
//
//             console.log(clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//             let sortedOrderLength = clients.sort((a, b) => a.order.length - b.order.length);
//             console.log(sortedOrderLength);

//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

            // function Car(model, manufacturer, manufYear, maxSpeed, engineCC) {
            //     this.model = model;
            //     this.manufacturer = manufacturer;
            //     this.manufYear = manufYear;
            //     this.maxSpeed = maxSpeed;
            //     this.engineCC = engineCC;
            //
            //     this.drive = function () {
            //         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
            //     }
            //
            //     this.info =  () => console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, manufYear - ${this.manufYear}, maxSpeed - ${this.maxSpeed}, engineCC - ${this.engineCC}`);
            //
            //     this.increaseMaxSpeed = newSpeed => this.maxSpeed = newSpeed;
            //     this.changeYear = newYear => this.manufYear = newYear;
            //     this.addDriver = driver => this.driver = driver;
            // }
            //
            // let newCar = new Car('Forester', 'Subaru', 2019, 185, 2.5);
            // newCar.drive();
            //
            // newCar.info();
            //
            // newCar.increaseMaxSpeed(200);
            // console.log(newCar.maxSpeed);
            //
            // newCar.changeYear(2022);
            // console.log(newCar.manufYear);
            //
            // newCar.addDriver({name: 'Vasya', expYears: 2, age: 50});
            // console.log(newCar.driver);

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

            // class Car {
            //     constructor(model, manufacturer, manufYear, maxSpeed, engineCC) {
            //         this.model = model;
            //         this.manufacturer = manufacturer;
            //         this.manufYear = manufYear;
            //         this.maxSpeed = maxSpeed;
            //         this.engineCC = engineCC;
            //     }
            //
            //     drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
            //
            //     info =  () => console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, manufYear - ${this.manufYear}, maxSpeed - ${this.maxSpeed}, engineCC - ${this.engineCC}`);
            //     increaseMaxSpeed = newSpeed => this.maxSpeed = newSpeed;
            //     changeYear = newYear => this.manufYear = newYear;
            //     addDriver = driver => this.driver = driver;
            //
            // }
            //
            // let newCar = new Car('Forester', 'Subaru', 2019, 185, 2.5);
            // console.log(newCar);
            //
            // newCar.drive();
            //
            // newCar.info();
            //
            // newCar.increaseMaxSpeed(200);
            // console.log(newCar.maxSpeed);
            //
            // newCar.changeYear(2022);
            // console.log(newCar.manufYear);
            //
            // newCar.addDriver({name: 'Vasya', expYears: 2, age: 50});
            // console.log(newCar.driver);

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

            // class Human {
            //     constructor(name, age) {
            //         this.name = name;
            //         this.age = age;
            //     }
            // }
            //
            // class Sinderella extends Human {
            //     constructor(name, age, legSize) {
            //         super(name, age);
            //         this.legSize = legSize;
            //     }
            // }
            //
            // class Prince extends Human {
            //     constructor(name, age, neededSize) {
            //         super(name, age);
            //         this.neededSize = neededSize;
            //     }
            // }
            //
            // let sinderellas = [new Sinderella('Olya', 30, 20),
            //     new Sinderella('Sasha', 40, 27),
            //     new Sinderella('Katya', 32, 22),
            //     new Sinderella('Lina', 37, 30),
            //     new Sinderella('Alisa', 45, 41),
            //     new Sinderella('Kolya', 30, 50),
            //     new Sinderella('Olya', 30, 20),
            //     new Sinderella('Olya', 30, 20),
            //     new Sinderella('Olya', 30, 20),
            //     new Sinderella('Olya', 30, 20),
            // ];
            //
            // console.log(sinderellas)
            //
            // let prince = new Prince('Ivan', 30, 50);
            // console.log(prince);
            //
            // for (let sinderella of sinderellas) {
            //     if (sinderella.legSize === prince.neededSize) {
            //         console.log(`It's a match, ${sinderella.name} with ${sinderella.legSize} leg size wins!!`)
            //     }
            // }
            //
            // let winner = sinderellas.find(value => value.legSize === prince.neededSize);
            // console.log(winner);
