// "use strict";
// alert ("Я Javascript" );
// let UserName = prompt("Введите ваше имя", "");
// alert (`Привет ${UserName}`)
// alert( '1' + 2 + 2 ); 
// alert( 2 + '1'+ 2 );
// alert( 1 + 2 + '2' );
// let RealName = prompt("Введите официальное название JavaScript", "");
// if (RealName == "ECMAScript") {
//     alert("Правильно!");
// }   else {
//     alert("Незнаете? ECMAScript конечно же!");
//     }
// let UserNumber = prompt("введите число", "0")
// if (UserNumber > 0) {
//     alert(1);
// }   else if (UserNumber < 0) {
//     alert(-1);
// }   else {
//     alert ("0");
// }
// let result = (a + b < 4) ? "Мало" : "Много";
// let message= (login== "Сотрудник") ? "Привет": 
// (login == "Директор") ? "Здравствуйте":
// (login == "") ? "Нет логина": "" ;
// let login = prompt("Введите Login", "");
// if (login === "Админ") {

//     let password = prompt ("Введите пароль", "");

//     if (password === "Я главный") {
//          alert ("Здравствуйте!");
// }        else if (password ==="" || password === null){
//          alert ("Отменено");
// }        else {
//          alert ("Неверный пароль");    
// }
// }   else if (login ==="" || login === null) {
//     alert("Отменено");
// }   else {
//     alert ("Я вас не знаю");
// }
// for (let count = 2; count<=10 ; count++ ){
//     if (count % 2 ==0){
//         alert(count);
//     }
// }
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
// let i = 0 ;
// while (i++ < 3) {
// alert( `number ${i}!` );
// }
// let number = prompt ("Введите число больше 100", "0")
// let number

// do {
//     number = prompt ("Введите число больше 100", "0") 
// } while (number <= 100 && number)
// let n = 10
// Nextprime: 
// for (let i = 2; i <= n; i++ ){
//     for( let j = 2; j < i; j++){
//         if( i % j == 0) continue Nextprime;
//     }
// alert(i);
// }
// let (browser);
// if (browser ===`Edge`) {
//     alert ("You`ve got the Edge!" );
// }   else if (  browser === `Chrome` 
//             || browser === "Firefox" 
//             || browser === "Safari" 
//             || browser === "Opera") {
//     alert ("Okay we support these browsers too" );
// }   else {
//     alert ("We hope that this page looks ok!" );
// }
// const number = +prompt (`Введите число миежду 0 и 3`, "");
// switch (number) {
//     case 0:
//     alert ("Вы ввели 0");
//     break;

//     case 1:
//     alert ("Вы ввели 1");
//     break;
    
//     case 2:
//     case 3:
//     Alert ("Вы ввели число 2, а может и 3");
//     break;
// }