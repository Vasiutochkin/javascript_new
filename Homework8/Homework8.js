// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//- Напишіть код,  котрий :

// //-- отримує текст з параграфа з id "content"
// let getElementById1 = document.getElementById("content")
// const text1 = getElementById1.innerText
// console.log(text1)

// // -- отримує текст з блоку з id "rules"
// let getElementById2 = document.getElementById("rules")
// const text2 = getElementById2.innerText
// console.log(text2)

// // -- замініть текст параграфа з id 'content' на будь-який інший
// let getElementById = document.getElementById("content")
// getElementById.innerHTML = "HELOW!!!!"
// console.log(getElementById)

// // -- замініть текст параграфа з id 'rules' на будь-який інший
// let elementById = document.getElementById("rules")
// elementById.innerText = 'HELLO MY FRIEND!!!!!!'

// //-- змініть кожному елементу колір фону на червоний
// let chldren = document.body.children;
// for (const chldElement of chldren) {
//     chldElement.style.backgroundColor = 'red'
// }

// // -- змініть кожному елементу колір тексту на синій
// let element = document.querySelectorAll('*')
// for (const elementElement of element) {
//     elementElement.style.color = 'red'
// }

// // -- отримати весь список класів елемента з id=rules і вивести
// // їх в console.log
// console.log(document.getElementById('rules').classList);

// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let elementsByClassName = document.getElementsByClassName('fc_rules');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.color = 'red'
// }

// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let main_header = document.getElementById ('main_header');
main_header.innerText = 'HELLOW!!!'

// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// let li = document.getElementsByClassName(`linkList`);
// for (const liElement of li) {
//     liElement.style.border = `1px solid red`;
//     liElement.style.width = `50%`;
// }
//
// // d) отримує текст який зберігається в елементі з класом listElement2
// let liText = document.getElementsByClassName(`listElement2`);
// console.log(liText);
// liText[0].innerHTML = `<a href = ""><b>Lorem ipsum dolor sit amet</b></a>`;
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let liFon = document.getElementsByClassName(`linkList`);
// console.log(liFon);
// for (const liFonElement of liFon) {
//     liFonElement.style.margin = `10px`;
//     liFonElement.style.backgroundColor = `#B1BCB8`;
// }
//
// // f) отримує всі елементи 'a' та додає їм клас anchor
// let ClasAnchor = document.getElementsByTagName(`a`);
// console.log(ClasAnchor);
// for (const clasAnchorElement of ClasAnchor) {
//     clasAnchorElement.classList.add(`anchor`);
//     console.log(clasAnchorElement)
// }
//
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// // змінює йому розмір тексту на 40 пікселів
// let aAll = document.getElementsByTagName(`a`);
// console.log(aAll);
// for (const aAllElement of aAll) {
//     if (aAllElement.innerText === "link3"){
//         aAllElement.style.fontSize = `40px`
//     }
// }
//
// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let sAll = document.getElementsByTagName(`a`);
// for (const sAllElement of sAll) {
//     console.log(sAllElement);
//     let newClas = sAllElement.innerText;
//     sAllElement.classList.add(`element_${newClas}`);
// }

// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let allSubHeader = document.getElementsByClassName(`sub-header`);
// console.log(allSubHeader);
// for (const el of allSubHeader) {
//     el.style.color =prompt(`Enter color: (red, green,blue..)`)
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку
// якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let allSabHeader = document.getElementsByClassName(`sub-header`);
// for (const el of allSabHeader) {
//     console.log(el);
//     if(el.innerText ===`content 2 segment`){
//         el.style.color =prompt(`Enter color: (red, green, blue ...)`)
//     }
// }

// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1 = document.getElementsByClassName(`content_1`);
// console.log(content_1[0].innerText);
// content_1[0].innerText = prompt(`Enrer new TEXT`);

// // l) отримати елементи p та змінити їм padding на 20px
// let p20px = document.getElementsByTagName(`p`);
// console.log(p20px);
// for (const el of p20px) {
//     el.style.padding = `20px`;
//     el.style.border = `2px solid red `
// }

// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let m = document.getElementsByClassName(`text2`);
// console.log(m);
// m[0].innerText = `ser-2022`;