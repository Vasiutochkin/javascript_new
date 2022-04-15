// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a = 'hello';
// console.log(a);
// document.write(a);
// alert(a);
//
// let b = "owu";
// console.log(b);
// document.write(b);
// alert(b);
//
// let c = 'com';
// console.log(c);
// document.write(c);
// alert(c);
//
// let d = 'ua';
// console.log(d);
// document.write(d);
// alert(d);
//
// let e = 1;
// console.log(e);
// document.write(e);
// alert(e);
//
// let f = 10;
// console.log(f);
// document.write(f);
// alert(f);
//
// let g = -999;
// console.log(g);
// document.write(g);
// alert(g);
//
// let h = 123;
// console.log(h);
// document.write(h);
// alert(h);
//
// let i = 3.14;
// console.log(i);
// document.write(i);
// alert(i);
//
// let j = 2.7;
// console.log(j);
// document.write(j);
// alert(j);
//
// let k = 16;
// console.log(j);
// document.write(j);
// alert(j);
//
// let l = true;
// console.log(j);
// document.write(j);
// alert(j);
//
// let m = false;
// console.log(m);
// document.write(m);
// alert(m);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)

// let book = {
//     title: 'warkraft',
//     pages: 956,
//     genre: 'fantasy'
// };
// console.log(book);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

// let book = {
//     title: 'warkraft',
//     pages: 956,
//     genre: 'fantasy',
//     author: ["Vasiutochkin Ivan", "Lodok Yulia"]
// };
// console.log(book);

//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// let firstName = "Ivan";
// let lastName = "Vasiutochkin";
// let middleName = "Valerievich";
// let person = `${lastName} ${firstName} ${middleName}`;
// console.log(person);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль
// let firstName = prompt("Як тебе звати?")
// let lastName = prompt("Твоє прізвище")
// let middleName = prompt("По батькові")
// let person = `${lastName} ${firstName} ${middleName}`;
// console.log(person);
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести
// їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Створити масив об'єктів з назвою books з наступними полями
// - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let books = [
//     {title: 'Warkraft', pages: 956, genre: 'fantasy', author: ["Vasiutochkin Ivan", "Lodok Yulia"]},
//     {title: 'Halk', pages: 56, genre: 'fantasy'}
// ]
// console.log(books[0]);
// console.log(books[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
// let heinght = 23;
// let s = [heinght*10]
// console.log (s.)
// let height = 23
// let widt = 10
// let s = (height*widt)
// console.log(s)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// Sпол = 2 * 3.14 * 4 + 2 * 3.14 * 4 * 10 = 25,12 + 251,2 = 276,32мм2
// let heightC = 10
// let dC = 4
// let s = ((2 * 3.14 * dC) + (2 * 3.14 * dC * heightC))
// let v = s
// console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
// або оператор зведення в ступінь **).

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//  В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 ==! 10 -> false
// 10 < 10 -> false
// 10 > 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// Ваше завдання, зробити так, щоб файл відкривався без помилок .
// let a = 100;
// let b = 500;
// let c = "hello";
// let d = "okten";
// const x = 'constant value';
// {
//     console.log(a);
//     x = 'new value';
// }
// let b = 'new value';
// let result = 100 + y;
// console(result);

// let a = 100;
// console.log(a);
//
// let b = 500;
// b = 'new value';
//
// let c = "hello";
// let d = "okten";
// console.log(`${c} ${d}`);
//
// let x = 'constant value';
// x = 'new value';
//
// let y = 6345;
// let result = 100 + y;
// console.log(result);