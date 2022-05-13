// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, amail, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.amail = amail;
//     this.phone;
// }
//
// const userArr = [
//     new User(3, 'vika', 'golovko', 'ggg.gmail.com', 30680000010),
//     new User(4, 'vin', 'krun', 'khg.gmail.com', 30680000001),
//     new User(1, 'serge', 'ivanov', 'nng.gmail.com', 30680000002),
//     new User(2, 'nazar', 'golovko', 'gggkk.gmail.com', 30680000003),
//     new User(5, 'kola', 'golovko', 'ggggfdb.gmail.com', 30680000004),
//     new User(6, 'andre', 'golovko', 'gggxgv.gmail.com', 30680000005),
//     new User(7, 'ivan', 'golovko', 'ggvxvg.gmail.com', 30680000006),
//     new User(10, 'pol', 'golovko', 'ggxcbxg.gmail.com', 30680000007),
//     new User(9, 'fog', 'golovko', 'ggbbbbg.gmail.com', 30680000008),
//     new User(8, 'valla', 'golovko', 'gsdggg.gmail.com', 30680000009)
// ];
// console.log(userArr);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUser = userArr.filter((item) => {
//     if (item.id % 2 === 0) {
//         return item
//     }
// })
// console.log(filterUser)
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(userArr.sort((a, b) => a.id - b.id))

// // - Cтворити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, names, surname, email, phone, order) {
//         this.id = id;
//         this.names = names;
//         this.surname = surname;
//         this.email = email;
//         this.pohne = phone;
//         this.order = order;
//     }
// }
//
// let tovar = [
//     new Client(3, 'vika', 'golovko', 'ggg.gmail.com', 30680000010, ['book', 'game', 'ps4']),
//     new Client(4, 'vin', 'krun', 'khg.gmail.com', 30680000001, ['book', 'boks', 'game', 'ps4']),
//     new Client(1, 'serge', 'ivanov', 'nng.gmail.com', 30680000002, ['book', 'game', 'ps4']),
//     new Client(2, 'nazar', 'golovko', 'gggkk.gmail.com', 30680000003, ['book', 'game', 'ps4']),
//     new Client(5, 'kola', 'golovko', 'ggggfdb.gmail.com', 30680000004, ['book', 'ps4', 'game', 'ps4']),
//     new Client(6, 'andre', 'golovko', 'gggxgv.gmail.com', 30680000005, ['ps4']),
//     new Client(7, 'ivan', 'golovko', 'ggvxvg.gmail.com', 30680000006, ['book', 'game', 'ps4']),
//     new Client(10, 'pol', 'golovko', 'ggxcbxg.gmail.com', 30680000007, ['game', 'ps4']),
//     new Client(9, 'fog', 'golovko', 'ggbbbbg.gmail.com', 30680000008, ['book', 'game',]),
//     new Client(8, 'valla', 'golovko', 'gsdggg.gmail.com', 30680000009, ['book', 'ps4'])
// ]
// console.log(Client)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(tovar.sort((a, b) => a.order.length - b.order.length));
// //
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// // об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars(model, zavod, year, maxspeed, volume) {
//     this.model = model;
//     this.zavod = zavod;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const carsKey in this) {
//             if (typeof this[carsKey] !== "function") console.log(`${carsKey}-${this[carsKey]}`)
//         }
//     };
//     this.newMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//     this.addDriver = function (driver) {
//         this.drive = driver;
//     };
// }
//
// let addCar = new Cars("Tesla", "USA", 2019, 260, 2);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.newMaxSpeed(25500);
// addCar.changeYear(2020);
// addCar.addDriver('Vitalaa');
// console.log(addCar);
//
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars2 {
//     constructor(model, producer, year, maxspeed, engineVal) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engineVal = engineVal;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//
//     info() {
//         for (const Key in this) {
//             console.log(`${Key}-${this[Key]}`)
//         }
//     };
//
//     newMaxSpeed(newSpeed) {
//         console.log(`їдемо з новою швидкістю ${this.maxspeed + newSpeed} на годину`);
//     }
//
//     changeYear(newValue) {
//         console.log(`новий рік випуску авто ${this.year = newValue}`)
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }
//
// let addCar2 = new Cars2('Tesla', 'USA', 2000, 370, 3.0);
// console.log(addCar2);
// addCar2.drive();
// addCar2.info();
// addCar2.changeYear(2021);
// addCar2.newMaxSpeed(50);
// addCar2.addDriver('Viktor')
// console.log(addCar2)

// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Prince {
//     constructor(name, age, size) {
//         this.neme = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// class Popeluska {
//     constructor(name, year, size) {
//         this.neme = name;
//         this.year = year;
//         this.size = size;
//     }
//
// }
//
// const prince = new Prince("Kola",52,39);
//
// const cindirelles = [
//     new Popeluska("vika",12,21),
//     new Popeluska("ola",25,31),
//     new Popeluska("liza",23,21),
//     new Popeluska("ket",25,39),
//     new Popeluska("olga",92,60),
//     new Popeluska("lesa",30,27),
//     new Popeluska("nika",45,42),
//     new Popeluska("nika",45,46),
//     new Popeluska("nasta",18,25),
//     new Popeluska("mila",46,36),
// ]
// for (const popeluska of cindirelles) {
//     if (popeluska.size === prince.size) {
//         console.log(popeluska)
//     }
//
// }
