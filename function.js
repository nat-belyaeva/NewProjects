===================Lesson 8===================
===================function====================

simple function ex.
console.log("Hello World!")

======================== function declaration =>

function name(param, param...) {
   statements
}

}; <= не ставится

1. Слово function,
2. Имя функции
3. Список аргументов в круглых скобках через запятую
4. Код функции,также называемый «телом функции», внутри фигурных скобок.


 ====================> выполнение(вызов)/function execution
showMessage();
showMessage();

sum();
sum();
sum();

function showMessage() {
  console.log("Hello World!")
}


function sum() {
  const a = 2;
  const b = 4;
  console.log(a + b)
}

когда код читается, то при такой декларации первыми он будет "искать" функции

=======================================================
помещение обьявленной функция в функцию

function showMessage() {
  console.log('Hello')
}

function sum() {
  const a = 2;
  const b = 4;

  console.log(a + b)
  showMessage()
}

sum();

=======================================================
обьявление функции в функции

function sum() {
  const a = 2;
  const b = 4;
  console.log(a + b);

  function showMessage() {
    console.log('Hello')
  }
  showMessage();

}
sum();


showMessage(); => error NOT VISIBLE OUTSIDE


pract.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime

function unixTime(){
  let time = Math.floor(new Date().getTime());
  console.log(time);
}
unixTime();

function mathRandom(){
  const min = 10;
  const max = 20;

  let random = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(random);
}
mathRandom()


mathRandom;
console.log(mathRandom);

===== function can be declaire only one time => what dors it mean?


function mathRandom(){
  console.log("random num 123");
}
mathRandom()

only the last declaration works




================= void function =====>
ничего не возвращает/нет return,
но выполняет вложенные в тело функции действия

function showMessage() {
  console.log("Hello World!")
}
showMessage();
console.log(showMessage());

==========================переменные в функциях=====================
====================================================================

Переменные, объявленные внутри функции, видны только внутри этой функции


function showMessage() {
  let name = 'Julia';
  return 'Hi' + name;
}
console.log(showMessage());
//console.log(name);

==================================
У функции есть доступ к внешним переменным и может изменять их значение

let name = 'Julia';

function showMessage() {
  return name += ' Hi';
}
console.log(showMessage());
console.log(name);


=====================
если переменная вызвана до вызова функции, то она не меняется

let name = 'Julia';
function showMessage() {
  name = 'Bill';
  return name;
}

console.log(name);
console.log(showMessage());

console.log(showMessage());
console.log(name);

=======================
Одноименная переменная будет выполнятся внутри функции,
внешняя будет проигнорированна

let name = 'Julia';

function showMessage() {
  let name = 'Bill';
  return name;
}
console.log(showMessage());
console.log(name);

execution vs veriable

mathRandom();

  let min = 10;
  let max = 20;

function mathRandom(){
  let random = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(random);
}
mathRandom();

   min = 100;
   max = 200;
mathRandom();

==================================================
counter - счетчик

10
function counter(){
  let c = 9
  c++;
  console.log(c);
}
counter();
counter();
counter();


10,11,12
let c = 9
function counter(){

  c++;
  console.log(c);
}
counter();
counter();

============================== arguments(, , , ,...) ==============================

==========================
1. without args inside()
==========================

function sum() {
  const a = 2;
  const b = 4;
  console.log(a + b)
}
sum();

==========================
2.args inside()
==========================

sum1(2, 4);

function sum1(x, y) {
  console.log(x + y)
}

==========================
3.more/less args inside()
==========================

function sum2(x, y) {
  console.log(x + y)
}
sum2(2, 4, 5, 6);
sum2(2);

==========================
4.assign args inside()
==========================

function sum2(x = 0, y = 2) {
  console.log(x + y)
}
sum2(2);

==========================
if we do not know the amount of arguments
1.
arguments
==========================

function showArg() {
  console.log(arguments);

  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  console.log(sum);
}
showArg(10, 10, 10, 10, 10);

==========================
args
2.
==========================

function showArg(...args) {

  console.log(args);

  let sum = args.reduce((accum, item) => accum += item);

  console.log(sum);
}
showArg(10, 10, 10, 10, 10);


============= callback function ==================
func as an argument

ex.1
find min in arr

const a = [2, 19, 17, 0, -7, -9];

function min(arrArg){
  let minNum = arrArg[0];
  for(let i = 0; i < arrArg.length; i++){
    if(minNum > arrArg[i]) minNum = arrArg[i];
  }
  //console.log(minNum);
  return minNum;
}
min(a);

// //do not push min in a new arr

function delMin(arr, min){        //min is our func as arg
  const a2 = [];
  const delNum = min(arr);         //delNum equal result of funct execution

  for(let i of arr){
    if(i !== delNum){
      a2.push(i)
    }
  }
  console.log(min(arr));  //-9
  console.log(a2);
}
delMin(a, min)

ex.2

function correctPolishLetters (string) {
   return string.replace(/[0, 1, 2]/g, 'o, l, z');
}
console.log(correctPolishLetters ('I 10ve my 200'));

function swap(char){
  let str = '0, 1, 2';
  let i = str.indexOf(char);
  let str2 = 'o, l, z';
 return str2[i];
 }



============================= return ===================
======================================================================

По умолчанию функции возвращают undefined.
Чтобы вернуть другое значение, функция должна содержать инструкцию return,
которая указывает, какое значение возвращать

ex. undefined
function sum(a, b){
   a + b;
}
sum(4, 5);
console.log(sum(4, 5));

ex. use func inside other + sum(5, 5)

function fun(){
  console.log(2);
}
fun();

console.log(fun());


ex. перерывание функций через return

function indexOfNum(arr, num){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === num) return i;
  }
  return -1;
}
let result = indexOfNum([11, 22, 33, 44, 55], 22);
console.log(`index of a number is ${result}`);


ex. return & ();

function example(){
  let a = 5;
  //перенос - ошибка
  //return
  //a;  // через скобки рабаотет
  return a;

}
console.log(example());

ex. return use a func

function sumFunc(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

const arr = [[3, 4, 5], [9], [6, 7, 8], [4, 5, 7], [2, 2]];

const arrFiltered = arr.filter( function(item){
  return (sumFunc(item) % 2 === 0);
});
console.log(arrFiltered);

//ex. return function

function funcReturn(){
  return sumFunc;
}
let res = funcReturn();
console.log(res([10, 20, 30]));

=================== Arrow function=============================

const arrowSum = (a, b) => a + b;
console.log(arrowSum(2, 2));


some Arrow func rules

1.=============== with return and {}

const arrowSum = (a, b) => {
  return a + b;
}
console.log(arrowSum(2, 2));

2.=============== no need return and {}

const arrowSum = (a, b) => a + b;
console.log(arrowSum(2, 2.33));

3. if only 1 arg no need ()

const arrowSum = a => Math.pow(a, 2);
console.log(arrowSum(2));

========================================
Вы можете использовать функцию до того, как вы её объявили

sum(4, 5);

function sum(a, b){
  return console.log(a + b);
}

========================================
4. Вы НЕ можете использовать стрелочную функцию до того,
как вы её объявили

sum(4, 5);
const sum = (a, b) => console.log(a + b);

5. {} нужны если больше одного действия внутри

const arr = [1, 2, 3, 4, 5];

filter

const filterArr = arr.map(function(item){

      if(item % 2 === 0)
      return item + 1;
      else return item * 2;
})
console.log(filterArr);


const filterArr1 =
      arr.map((item, index) => index % 2 === 0 ? item + 2 : item * 2);
console.log(filterArr1);

functions

1. Напишите функцию, которая принимает массив чисел arr
и возвращает все пары одинаковых элементов в виде двумерного массива
Например, const arr = [2, 1, 5, 9, 6, 4, 1, 5, 6]
Результат:            [[1, 1], [5, 5], [6, 6]]

function arr (arr1) {
    const dupe = [];
    for (let i = 0; i < arr1.length; i++){
        for(let j = i + 1; j < arr1.length; j++) {
            if(arr1[i] === arr1[j]) {

                dupe.push([arr1[i], arr1[j]]);
                //console.log(dupe)
            }
        }

    }
    return dupe;
}
console.log(arr([2, 1, 5, 9, 6, 4, 1, 5, 6, 0, 0]));

2. Последовательность Фибоначчи: 0,1,1,2,3,5,8,13,21,34,...
Создайте функцию, которая получает число n и
возвращает последовательность n чисел Фибоначчи
function fin(n) {
    const arr = [0,1];

    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
        console.log(arr)

    }
    return arr;
}

console.log(fin(10));

function getLastDigit(index) {
    index = index + 1;
    const arr = [0, 1];
    let lastNum = 0;

    for (let i = 2; i < index; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
        // console.log(arr)

    }
    lastNum = arr[index - 1];
    console.log(lastNum)
    return lastNum % 10;
}

console.log(getLastDigit(15));

function getLastDigit (index){
    let f0 = 0;
    let f1 = 1;

    for(let i = 1; i < index; i++) {
        const buff = f0;
        f0 = f1;
        f1 = (f1 + buff) % 10;
        console.log(f1)
    }

    return f1;
    console.log(f1)
}

console.log(getLastDigit(15))

3. Палиндромы:
3.1 Напишите функцию, которая получает имя и выводит
    его в обратном порядке

function viceVerse(name) {
    let newName = "";
    for(let i = name.length - 1; i >= 0; i--) {
        newName += name[i];
        console.log(newName)
    }
    return newName;
}

console.log(viceVerse("was it a car or a cat i saw"));


3.2 Напишите функцию isPalindrome, которая принимает строку и определяет,
    является ли строка палиндромом после удаления из нее всех пробелов
    Выполните проверку на примере строки: "was it a car or a cat i saw"

function nameReverse(str) {
    let reverseStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
            }
    return reverseStr;
}
//console.log(nameReverse("was it a car or a cat i saw"));

function isPalindrome(str) {
    let strNoSpace = "";
        let res;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            strNoSpace += str[i];
            //console.log(strNoSpace);
        }
//         }
    if( nameReverse(strNoSpace) === strNoSpace) {
        //console.log( "String is Palindrome")
        res = true;
    }else {
        res = false;
    }
    return res;
}
 console.log(isPalindrome("was it a car or a cat i saw"))


4. Напишите функцию draw, которая
принимает количество строк n и возвращает строку,
содержащую рисунок:
*****
****
***
**
*
 function draw(n) {
    let res = "";
    for (let i = 0; i < n; i++) {
        res += "\n" + "*".repeat(n - i);
    }
    return res;
 }

console.log(draw(5));

5. Напишите функцию draw; которая
принимает ширину треугольника (здесь 7) n и возвращает строку],
содержащую рисунок:

    *
   ***
  *****
 *******
function draw(n) {
    let res = "";

    for (let i = 1; i <= (n * 1) / 2; i++) (
        res
    )
}

5. Напишите функцию draw которая выводит содержащий рисунок:

"
                                    1 1
                                1 2 2 1
                            1 2 3 3 2 1
                        1 2 3 4 4 3 2 1
                    1 2 3 4 5 5 4 3 2 1
                1 2 3 4 5 6 6 5 4 3 2 1
            1 2 3 4 5 6 7 7 6 5 4 3 2 1
        1 2 3 4 5 6 7 8 8 7 6 5 4 3 2 1
    1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1"


function draw3() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        let res = " ".repeat(4 * (10 - i));

        for (let j = 1; j <= i; j++) {
            res += " " + (j % 10);
        }
        for (let k = i; k >= 1; k--) {
            res += " " + (k % 10);
        }
        result += "\n" + res;
    }
    return result;
}

 console.log(draw3());

6. Напишите Функция fahrenheitToCelcius для  перевода градусов
Фаренгейта в градусы Цельсия. Функция принимает значение
температуры в градусах фаренгейта
и возвращает температуру в градусах Цельсия

7. Функция - calculator
принимает два числа a, b и операцию operation (+, -, *, /)
и возвращает результат выполнения операции над числами или сообщение об
ошибке в случае некорректной операции или деления на ноль

8. функция isBrakets, которая принимает строку s,
содержащую скобки '[]', проверяет правильность
расстановки скобок.
Возвращает 'valid' or 'invalid'

function isBalanced(s) {
    let res = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[") {
            res.push(s[i]);
        }else if (s[i] === "]") {
            if(res[res.length - 1] === "[") {
                res.pop();
            }else {
                return "invalid"
            }
        }

    }
    return res.length === 0 ? "valid" : "invalid";
}


console.log(isBalanced('[][][[]]')); // valid
console.log(isBalanced('[[[[]]]][[[]]][[]][]')); // valid
console.log(isBalanced('[]][[[]]')); // invalid
console.log(isBalanced('][[[]][][')); // invalid


https://www.codewars.com/kata/5aa39ba75084d7cf45000008
https://www.codewars.com/kata/522551eee9abb932420004a0
https://www.codewars.com/kata/52549d3e19453df56f0000fe
https://www.codewars.com/kata/5b4e779c578c6a898e0005c5













