// ----------------------- Lesson 4 ---------------
// if... else
// switch
//
// coкращения в js
//
// y = y + x;   equal     y += x;
// y = y - x;   equal     y -= x;
// y = y * x;   equal     y *= x;
// y = y / x;   equal     y /= x;
// y = y % x;   equal     y %= x;
//
// let y = 2;
// let x = 5;
// console.log(y = y + x);
// console.log(y += x);
//
// -----------------------if...else
//
//   if(condition){ --> condition has a result true or false
//     instruction; --> what if true?
//   } else {
//     instruction; --> what if false?
//   }
//
//
// Task 1 check for odd and even
// if(12 % 2 == 0){             //if it is true ?
//   console.log('even');       //print even
// } else {
//   console.log('odd');        //else print odd
// }
//
// rules
// 1. each bracket must have pair (){}
//
// Task 2 check for adult or not
// let adultAge = 21;
// let customerAge = 18;
// let message = 'You can drink';
// let warningMsg = 'Stop drinking!';
//
// if(customerAge >= adultAge){
//   console.log(message);
// } else {
//   console.log(warningMsg);
// }
//
// Task 3 check for open a bar
// let helloMsg = '';
// let guest = true;
// let time = 10;
//
// if(guest == false){
//   helloMsg = 'Welcome!';
// } else if(time >= 10){
//   helloMsg = 'Open a club!';
// } else {
//   helloMsg = 'We are close!'
// }
// console.log(helloMsg);
//
// Task 4 check for num positive or negative
//
// if(5 >= 0){
//   console.log('positive');
// } else {
//   console.log("negative");
// }
//
// -------------------------------------------------------------
//
// ternary operator
//
// if(5 >= 0){
//   console.log('positive');
// } else {
//   console.log("negative");
// }
//
// console.log(5 <= 0 ? 'positive' : "negative");
//
// let month = 3;
// let msg = '';
//
// if(month == 12 || month <= 2){
//   msg = 'winter';
// } else if(month <= 5){
//   msg = 'spring';
// } else if(month <= 8){
//   msg = 'summer';
// } else msg = 'fall';
//
// //console.log(msg);
//
// console.log(month == 12 || month <= 2 ? 'winter' : month <= 5 ? 'spring' : month <= 8 ? 'summer' : 'fall');
//
//
// Task 5, check if strings start from the same chars
//
// const str = 'I like you';
// const str1 = 'I like';
//
// console.log(str[0] == str1[0] ? true : false);
//
// Task 6, math abs
//
//
// let num = -5;
//
// console.log(num < 0 ? -num : num);
// console.log(Math.abs(-5)); //метод перевода в абсолютную величину
// =========================================================
// Math.abs(x) method returns the absolute value of a number.
//
// (function myFunction() {
//   var a = Math.abs('-1');      //1
//   var b = Math.abs(-2);       // 2
//   var c = Math.abs(null);     // 0
//   var d = Math.abs('');       // 0
//   var e = Math.abs([]);       // 0
//   var f = Math.abs([2]);      // 2
//   console.log(a, b, c, d, e, f);
// })();
//
// Math.abs([1,2]);    // NaN
// Math.abs({});       // NaN
// Math.abs('string'); // NaN
// Math.abs();         // NaN
//
// ----------------------------------------------------------
// SWITCH
// https://learn.javascript.ru/switch
//
// Конструкция switch заменяет собой сразу несколько if
//
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }
//
// Название дня недели
// 1 - 'Monday', 2 - 'Tuesday', 3 - 'Wednesday', 4 - 'Thursday', 5 - 'Friday', 6 - 'Saturday', 7 - 'Sunday'. Any other number - 'Wrong day'.

let numberOfDay = 7;
switch(numberOfDay) {

  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
     console.log('Wednesday');
    break;
  case 4:
     console.log('Thursday');
    break;
  case 5:
     console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break
  default:
   console.log('Wrong day');
}
//
// let season;
// let month = 6;
//
// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     season = 'winter';
//     break;
//   case 3:
//   case 4:
//   case 5:
//     season = 'spring';
//     break;
//   case 6:
//   case 7:
//   case 8:
//     season = 'summer';
//     break;
//   default:
//     season = 'fall';;
// }
// console.log(season);
//
//
// =========================================================
// Methods: Math.round(), Math.floor(); Math.ceil(); Math.trunc();
// =========================================================
// Math.floor() <==== округляет вниз ("к полу") в меньшую сторону
// к самому близкому целому числу
// Round a number downward to its nearest integer
//
// (function myFunction() {
//   var a = Math.floor(0.406);      //0
//   var b = Math.floor(0.909);      //0
//   var c = Math.floor(5.00789);    //5
//   var d = Math.floor(5.412345);   //5
//   var e = Math.floor(-5.10234);   //-6
//   var f = Math.floor(-5.99999);   //-6
//   console.log(a, b, c, d, e, f);
// })();
//
// =========================================================
// Math.ceil() <==== округляет вверх ("к потолку") в большую сторону
// к самому близкому целому числу
// (function myFunction() {
//   var a = Math.ceil(0.406);       //1
//   var b = Math.ceil(0.909);       //1
//   var c = Math.ceil(5.00789);     //6
//   var d = Math.ceil(5.412345);    //6
//   var e = Math.ceil(-5.10234);    //-5
//   var f = Math.ceil(-5.99999);    //-5
//   console.log(a, b, c, d, e, f);
// })();
//
// =========================================================
// Math.trunc() <==== отбрасывает дробную часть к самому близкому целому числу
// This method will NOT round the number up/down to the nearest integer,
// but simply remove the decimals.
//
// (function myFunction() {
//   var a = Math.trunc(0.406);       //0
//   var b = Math.trunc(0.909);       //0
//   var c = Math.trunc(5.00789);     //5
//   var d = Math.trunc(5.412345);    //5
//   var e = Math.trunc(-5.10234);    //-5
//   var f = Math.trunc(-5.99999);    //-5
//   console.log(a, b, c, d, e, f);
// })();
//
// =========================================================
// Math.round() <==== Если дробная часть
// отрицательного числа меньше или равна 0.5,
// число будет округлено к ближайшему большему целому,
// а если больше 0.5, то – к ближайшему меньшему целому.
//
// (function myFunction() {
//   var a = Math.round(0.406);       //0
//   var b = Math.round(0.909);       //1
//   var c = Math.round(5.00789);     //5
//   var d = Math.round(5.412345);    //5
//   var e = Math.round(-5.10234);    //-5
//   var f = Math.round(-5.99999);    //-6
//   var g = Math.round([2.98]);      //3
//   var h = Math.round('');          //0
//   console.log(a, b, c, d, e, f, g, h);
// })();
//
// (num).toFixed(n)=========================================================
// The method toFixed(n) rounds the number to n digits after the
// point and returns a string representation of the result.
// This rounds up or down to the nearest value, similar to Math.round()
//
// console.log((5.0009).toFixed(2)); //"5.00"
// console.log((5.0009).toFixed());  //"5"
// console.log((6.78).toFixed(4));   //"6.7800" added 00 to the end
// console.log((5.9).toFixed());     //"6"
//
// ==========================================================================
//
//  NUM     Math.floor()   Math.ceil()	Math.round()	Math.trunc()    .toFixed(2)
// 3.178	         3	             4	        3	           3               "3.18"
// 3.667          3	             4	        4	           3               "3.67"
// -1.1670	       -2            	-1         -1	          -1               "-1.17"
// -1.6432	       -2	            -1	       -2	          -1               "-1.64"
// 5.009          5               6          5            5               "5.01"
// 5.00           5               5          5            5               "5.00"
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
