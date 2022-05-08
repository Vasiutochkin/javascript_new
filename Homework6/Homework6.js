// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let lehg1 = 'hello world';
// let lehg2 = 'lorem ipsum';
// let lehg3 = 'javascript is cool';
// console.log(lehg1.length);
// console.log(lehg2.length);
// console.log(lehg3.length);

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let b = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (const string of b) {
//     console.log(string.toUpperCase())
// }

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let a = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// for (const string of a) {
//     console.log(string.toLowerCase())
// }

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim());

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// // let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let stringToarray = (str) =>str.split(' ');
// console.log(stringToarray(str));

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та
// // колбеку перетворити всі об'єкти в масиві на стрінгові.
// let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(nums.map(value =>value.toString()));

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його
// // від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// // let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         arr.sort((a, b) => b - a)
//     }
//     return arr;
// }
// console.log(sortNums(nums, "ascending"));
// console.log(sortNums(nums, "descending"));

// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let sortArrey = (array) => array.sort((a, b) => a.monthDuration - b.monthDuration);
// console.log(sortArrey(coursesAndDurationArray));
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterArray = (array) => array.filter(value => value.monthDuration > 5);
// console.log(filterArray(coursesAndDurationArray));
