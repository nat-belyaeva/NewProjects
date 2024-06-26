// Lesson 6
// ==========================================================================
// loops (for, while, do...while)
// ==========================================================================
//
// most common
// ==========================================================================
// for( ; ;){ loop body }
// ==========================================================================
//
// for(start/initialization; condition; step(increment/decrement)) {
// ... loop body ...
// }
//
// --------------------
//
//     ex. 1
//
// for(let i = 0; i < 6; i++){
//     console.log(i);
// }
//
// start from 0     => Executes once upon entering the loop
// condition i < 6  => Checked false or true before every loop iteration
// step i = i + 1   => Executes after the body on each iteration
//
// if (i <= 5) { console.log(i); i++ };     //i = 1;
// if (i <= 5) { console.log(i); i++ };     //i = 2;
// if (i <= 5) { console.log(i); i++ };     //i = 3;
// if (i <= 5) { console.log(i); i++ };     //i = 4;
// if (i <= 5) { console.log(i); i++ };     //i = 5;
// ...finish, when i == 6...
//
// ===================== ++i vs i++ =================
//
// Prefix increment (++i) => increments, and returns the new,
//     incremented value;
//
// for (let i = 0; i < 5;) {
//     console.log(++i); // 1 2 3 4 5
// }
//
// Postfix increment (i++) => increments,
//     but returns the old value (i.e. the value before the increment).
//
// for (let i = 0; i < 5;) {
//     console.log(i++); //0 1 2 3 4
// }
//
// ==========================================================================
// for loop i--      => decrement
// ==========================================================================
//
// ex. 1.1
// for(let i = 5; i >= -2; i--) {        //from 5 to -2
//     console.log(i);
// }
//
// ====================== Inline variable declaration for loop
//
//     ex. 1.2
// for(let i = 0; i < 3; i++) {
//     //console.log(i); // 0, 1, 2
// }
// console.log(i); // error, no such variable
//
// ======================= Outline variable declaration for loop
//
//     ex. 1.3
// let i = 0;
// for (i = 0; i < 3; i++) {     // use an existing variable
//     //console.log(i);           // 0, 1, 2
// }
// console.log(i);               //3
//
// 3, visible, because declared outside of the loop
// i = 3 because it becomes 3 in the momet of checking in a loop
//
//
// =======================
// ex 2. with array
//
//     const arr = [1, 4, 'hi', 8];
// for(let i = 0; i < arr.length; i++){
//     console.log(i);
//     //console.log(arr[i]);
// }
//
// ex 2.1
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number')
//         console.log(arr[i] * 2);
// }
//
// =======================
// i+=2
// ex.3 Отсортировать по типу данных - число и умножить этот елемент на 2
//
// const arr = [1, 2, 3, 4, 5, null, '6'];
// for(let i = 0; i < arr.length; i+=2){
//     if(typeof arr[i] === 'number'){
//         console.log(arr[i] * 2);
//     }
// }
//
// ex.3.1 Отсортировать по типу данных - число и
// умножить этот елемент на 2 + добавить в новый массив измененные елементы
//
// const arr = [1, 2, 3, 4, 5, null, '6'];
// const arr1 = []
//
// for(let i = 0; i < arr.length; i+=2){
//
//     if(typeof arr[i] === 'number'){
//         arr1.push(arr[i] * 2);
//
//     }
//     console.log(arr1);
// }
//
//
// =======================
// i -=2
// ex. 4 Отсортировать по типу данных - число и умножить этот елемент
// на 2 + добавить в новый массив измененные елементы (с конца)
//
// const arr = [1, 2, 3, 4, 5, null, '6'];
// const arr1 = []
//
// for(let i = arr.length - 1; i >= 0; i-=2){
//
//     if(typeof arr[i] === 'number'){
//         arr1.push(arr[i] * 2);
//         //console.log(arr1);
//     }
//     console.log(arr1);
// }
// console.log(arr1);
//
//
// console.log(); <=  loop scope - область видимости
//
//
// ===========================================================
// Task 5 works with string
//     "1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20"
//
//
//
// step 1  =>  create a string "1234567891011121314151617181920"
// let str = '';
// for(let i = 1; i <= 20; i++){
//     str += i;
// }
// console.log(str);
//
//
// step 2 => add enter
// let str = '';
// for(let i = 1; i <= 20; i++){
//     if(i % 5 == 0) str += i + '\n';
//     else str += i;
// }
// console.log(str);
//
// "12345
// 678910
// 1112131415
// 1617181920
// "
//
// step 3  => add spaces
// let str = '';
// for(let i = 1; i <= 20; i++){
//     if(i % 5 == 0) str += i + ' ' + '\n';
//     else str += i + ' ';
// }
// console.log(str);
//
// "1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20
// "
//
// step 4    => trim()
//
// let str = '';
// for(let i = 1; i <= 20; i++){
//     if(i % 5 == 0) str += i + ' ' + '\n';
//     else str += i + ' ';
// }
// console.log(str.trim());
//
//
// ========================================================
// Методы строк!!!!
//
//     trim() trimStart() trimEnd()
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
//
//     trimStart() or trimLeft() удаляет пробельные символы с начала строки;
// trimEnd() удаляет пробельные символы с конца строки;
// trim() удаляет пробельные символы с начала и конца строки;
//
// let str = `     Hello world     `;
// console.log(str);
// console.log(str.trimStart());
// console.log(str.trimEnd());
// console.log(str.trim());
//
//
// concat() <== обьединяет тексты 2х и более строк
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
//
//     let str = 'Hello ';
// let str1 = 'world!';
// let str2 = '+++'
//
// console.log(str.concat(str1, str2, '()'));
// console.log('Hello '.concat('World!'));
//
// ==========================
// i vs arr[i];
//
// const arr = [1, 4, 8, 'j', null, 18, 567];
// for(let i = arr.length - 1; i >= 0; i--){
//     console.log([arr[i], i]);
// }
//
// ========== reverse array or string*
//
// ex. 1 reverse array
//
// const arr = [1, 4, 8, 'j', null, 18, 567];
// const reversArr = [];
//
// for(let i = arr.length - 1; i >= 0; i--){
//     reversArr.push(arr[i]);
// }
// console.log(reversArr);
//
// ex. 2 reverse string
//
// const str = 'Hello World!';
// let reversStr = '';
//
// for(let i = str.length - 1; i >= 0; i--){
//     reversStr += str[i];
// }
// console.log(reversStr);
//
//
// ex.3 reverse without extra array/ reverse "на месте"
// Task from interview (Apple)
//
// const arr = [11, 12, 13, 14, 15];
// for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
// }
// console.log(arr); // [15, 14, 13, 12, 11]
//
// Steps:
//     1. => создаем цикл for(){}
// 2. => идем только до середины массива
// 3. => вводим дополнительную переменную temp
//
// 4. => 1-я итерация, i = 0:
//
// - присваиваем temp значение элемента arr[i], (сохраняем значение)
// let temp = arr[0];                      //  temp = 11
//
// - присваиваем arr[0] значение элемента массива,
//     с которым необходимо произвести замену:
//     arr[0] = arr[arr.length - 1 - i];
// 4 - i(0) = 4 => el on index 4 become el on index 0
// arr[0] = 15;
//
// - сохраненное в temp значение 11, которое было на первом индексе,
//     надо поместить па последний
// arr[arr.length - 1 - i] = temp // 4 - i(0) = 4
// arr[4] = temp;
//
// 5. => 2-я итерация, i = 1:...
//
// Зачем нужен - i ? Если этого не сделать,
//     то все последующие элементы мы будем менять местами только с этим последним элементом массива
// Важный момент, не идти до конца массива
//
//
//
// ======================================================================
// while (condition) { //condition == true;
//     code
//     so-called "loop body"
// }
// ==========================================================================
//
// }
//
// you set your counter variable before the loop statement
//
// const arr = [];
// let i = 0;
// while(i < 3) {
//     i++;
//     arr.push(i); // 1, 2, 3
// }
// console.log(arr); //3
//
// ===================== while loop i++ in the end of the execution
//
// const arr = [];
// let i = 0;
// while(i < 3) {
//     arr.push(i);
//     i++;
// }
// console.log(arr); //3
//
// ===================== i-- in the end of the execution
//
// let i = 3; //3, 2, 1
//
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//     console.log(i);
//     i--; // 3 - 1 = 2;  2 - 1 = 1; 1 - 1 = 0;
// }
// console.log(i)
//
//
//
// ==========================================+++++===========================
// do {
//     // loop body
// } while (condition);
// ==========================================================================
//
// =================do...while will execute at least one
//
// let i = 5;
// do {
//     i++;
//     console.log(i); //6
// } while (i < 3);
//
// =================
//
// let i = 0;
// do {
//     console.log(i); //0, 1, 2
//     i++;
// } while (i < 3);
//
// console.log(i);
//
// =================
//
//
// const arr = []; //0, 1, 2, 3, 4, 5
//
// let i = 0;
// do {
//     arr.push(i);       //0,1,2,3,4,5
//     i++;
//
// } while (i <= 5);
// console.log(arr);
// console.log(i);
//
//
// recursion <==== рекурсия;
// if we do not put increment of decrement,
//     we get the recursion (infinity loop)
// for(let i = 0; i < 3;){
//     console.log(i); //i always be 0;
// }
//
// ==========================================================================
// sum of the even numbers from 0 to 20
// ==========================================================================
//
// let sum = 0;
// for (let i = 0; i <= 20; i++) {
//     if(i % 2 == 0){
//         sum += i;
//         //console.log(i);               //0, 2, 4, 6, 8, 10...
//         //console.log(Array.of(sum));   // [0, 2, 6, 12, 20...]
//     }
// }
// console.log(sum);
//
// ===================== increment +=2 // i = i + 2
//
// let sum = 0;
// for (let i = 0; i <= 20; i+=2) {
//     sum +=i;
//     //console.log(sum);
//     console.log(i);
// }
// console.log(sum);
//
//
//
// ===================================================
// break... continue
// break ===> перерывание цикла for, while, do..while
//
// ===================================================
// Check if we have negative nums in arr
//
// function isNegative(arr){
//     for (let i = 0; i < arr.length; i++){
//         //console.log(arr[i]);
//         if (arr[i] < 0){
//             return true;
//             break;
//         }
//     }
//     return false;
// }
// console.log(isNegative([1, 2, 4, -7, 9, 9, 0, 11]));
//
// ===================================================
// Check if we have char in str
//
// function charSearch(str, char){
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === char){
//             return true;
//             break;
//         }
//     }
//     return false;
// }
// console.log(charSearch('hello', 'b'));
// console.log(charSearch('hello', 'o'));
//
// ===================================================
// Check the first odd num, no odds ==> return [];
//
// function oddNum(arr){
//     let el = 0;
//     let index = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 !== 0){
//             el = arr[i];
//             index = i;
//             break;
//         }
//     }
//     return el === 0 ? [] : [el, index];
// }
// console.log(oddNum([12, 2, 4, -7, 9, 9, 0, 11]));
//
// ===================================================
// continue ==> прерывает текущую итерацию циклов и
// продолжает выполнение цикла со следующей итерации
//
// ===================================================
// fill arrey with numbers from 0 to num without x
//
// function fillArray(num, x){
//     const arr = [];
//     for (let i = 1; i <= num; i++){
//         if (i !== x){
//             arr.push(i);
//             continue;
//         }
//     }
//     return arr;
// }
// console.log(fillArray(5, 2));
//
//
// "0234"
//
// let str = '';
// for (let i = 0; i < 5; i++) {
//     if (i === 1) {
//         continue;
//     }
//     str = str + i;
// }
// console.log(str);
//
//
// Нельзя использовать break/continue справа от оператора „?“
// (i > 5) ? console.log(i) : continue;
//
//
// O(n^2)
// search first element with letter c inside
//
// const arr = ['mama', 'my', 'papac', 'abc'];
//
// function search(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++){
//             if(arr[i][j] == 'c'){
//                 return arr[i];
//             }
//         }
//     }
// }
// console.log(search(arr));
//
// ===================================================
// for... of Loop
// ===================================================
//
// to iterate over iterable objects
// like arrays and strings, we can use the for...of statement.
//
// for (let variable of iterable) {
//     statement
// }
// ========================================================
// same i but different meaning: i vs arr[i]
// ========================================================
// i as index of arr
//
// const arr = [15, 14, 13, 12, 11]
// for(let i = 0; i < arr.length; i++){
//     console.log(i); //0, 1, 2, 3, 4
// }
//
// i as element of arr
// const arr = [15, 14, 13, 12, 11]
// for(let i of arr){
//     console.log(i); //15, 14, 13, 12, 11
// }
//
//
// add 2 to each element in arr
// const arr = [15, 14, 13, 12, 11];
// for(let i of arr){
//     i += 2;
//     console.log(i);
// }
//
// const arr = [66, 'jkk', 4, 58]
// for(let i of arr){
//     console.log(i);
//     console.log(arr.indexOf(i));
// }
//
//
// ========================================================
// for... in Loop
// ========================================================
//
// i => index of arr in this case
// const arr = [66, 'jkk', null, 4, 58]
// for(let i in arr){
//     console.log([Number(i), arr[i]]); // i => index in string
// }
//
//
// The for...in statement is useful for
//     iterating over object properties mostly
//
// const arr = [5, 4, 3, 2, 1]
// for(let i in arr){
//     console.log(i); // '0', '1', '2', '3', '4'
// }
//
//
//
//
// devide string by chars and push to array
//
//
// function findShort(str){
//     let arr = [];
//     for(let i in str){
//         arr.push(str[i]); // i vs str[i]
//         //arr.push(i);
//     }
//     return arr;
// }
// console.log(findShort('hello'))
//
//
// ========================================================
// upperCase(), lowerCase()
// trim() trimStart() trimEnd()
// repeat()
// "\n" <=== перенос строки
// ========================================================
//
// toUpperCase() возвращает символы строки в верхнем регистре
// toLowerCase() возвращает символы строки в нижнем регистре
//
// console.log('hello world'.toUpperCase());
// console.log('HELLO WORLD'.toLowerCase());
//
//
// check if the char is upper/lower case
// function swap(str){
//     let res = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == str[i].toLowerCase()){
//             //console.log(str[i]);
//             res += str[i].toUpperCase();
//         }else res += str[i].toLowerCase();
//     }
//     return res;
// }
// console.log(swap('HelloWorld'));
//
//
// ========================================================
// task from the interview
// string reverse
// check if the word is a polindrome?
//
//     function isPalindrome(x) {
//         x = x.toLowerCase();
//         let str = '';
//         for(let i = x.length - 1; i >= 0; i--){
//             str += x[i];
//         }
//         return x == str;
//     }
//     console.log(isPalindrome('Abba'));
// console.log(isPalindrome('MadaM'));
// console.log(isPalindrome('Hello'));
//
//
// ========================================================
//
// write a func that repeat argumetn 5 times
//
// function repeatChar(str){
//     let newStr = '';
//     for(let i = 0; i < 5; i++){
//         newStr += str;
//     }
//     return newStr;
// }
// console.log(repeatChar('*'));
//
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
//
//     string.repeat(n) повторение строки n раз
//
// let str = '*';
// console.log(str.repeat(3)); // "***"
// console.log(str.repeat(1)); // "*"
// console.log(str.repeat(0.5)); // ""
// console.log(str.repeat()); // ""
// // console.log(str.repeat(Infinity)); // RangeError
// // console.log(str.repeat(-1)); // RangeError
//
// "\n" <=== перенос строки
//
// console.log('HELLO \n WORLD');
//
//
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
//
//     "I
//     *I
//     **I
//     ***I
//     ****I
//     *****I
//     ******I"
//
// function drawStairs(n) {
//     let step = "I"
//     for(let i = 1; i < n; i++) {
//         step += "\n" + "*".repeat(i) + 'I';
//     }
//     return step;
// }
// console.log(drawStairs(7));
//
//
//
//
//
// //
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
