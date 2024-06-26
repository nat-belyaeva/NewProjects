//Lesson 9 Arrays' methods

//https://javascript.info/array-methods
//=====================================================
//.includes(), .reverse(), .find(), .filter(), .every(),
//some(), sort(), .forEach()
//.join(), .slice(), splice(), Number.isInteger()
//=====================================================

//.includes()
//includes() проверяет, содержит ли массив определённый элемент.
//Возвращает true или false
//Синтаксис: array.includes(searchElement, search from [index])

// const arr = ['a', 1, null, 'yes', false, NaN, undefined, ['k'], {}, []];

// console.log(arr.includes('a'));         // true
// console.log(arr.includes('a', 1));      // false
// console.log(arr.includes('1'));         // false
// console.log(arr.includes('ye'));        // false
// console.log(arr.includes(null));        // true
// console.log(arr.includes(undefined));   // true
// console.log(arr.includes([]));          // false
// console.log(arr.includes({}));          // false
// console.log(arr.includes(false));       // true
// console.log(arr.includes(NaN));         // true


// ====> "from" - can be negative number
// console.log(arr.includes(null, -4)); // arr.length - 4 = "from" index

// ====>from >= arr.length, result == false.

// console.log(arr.includes(1, 5)); // true
// console.log(arr.includes(1, 15)); // false


//=================================================================
// .reverse()
// array.reverse() метод не имеет параметров и возвращает перевернутый массив
// const arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr); // [5, 4, 3, 2, 1]
//========================================================

//.filter() coздает новый отфильтрованый массив
// mutate the origin

// 1. Найти элементы >= 0.

// const arr = [-1, -2, 3, 6, -5, 0];

// const newArr = arr.filter(el => el >= 0);
// console.log(newArr); // [3, 6, 0]
// console.log(arr);

// 2. Найти элементы == 0

// const arr = [1, 2, -3, 0, 4, -5, -6, -7];
// const num2 = arr.filter(el => el == 0);
// console.log(num2); // []

//3. Вернуть в виде массива элементы с нечетным индексом.

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// const filtered = arr.filter((element, index) => index % 2)

// console.log(filtered); //["b", "d", "f"]


//4. Вернуть все простые числа в массиве:

// const arr = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(arr.filter(isPrime));   // [53, 2, 5, 7, 31, 97, 17]


// Изменение всех элементов, кроме того, который под индексом 0

// const words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present'];

// const modifiedWords = words.filter( (el, i, arr) => {
//   arr[i+1] += ' extra';
//   return el.length < 6;
// } )

//console.log(modifiedWords)

// console.log(words);

//ex
// toUpperCase() новый массив возвращает изначальный, а старый будет мутирован

// const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

// const deleteWords = words.filter((el, i) => {
//   words[i] =  el.toUpperCase();
//   return el;
// })
// console.log(deleteWords)
// console.log(words);


//пример в Функции

// const arr = ['hat', 'hot', 'hope', 'holly'];

// function getWord(word) {
//   if (word.length === 3 && word.includes('ho'))
//     return word;
// }

// const arr2 = arr.filter(getWord);


// console.log(arr2); // ["hot"]


//=================================================================
//.find()
//array.find() поиск ПЕРВОГО элемента в массиве, который удовлетворяет условия поиска

// 1. Найти первый элемент > 0.

// const arr = [-1, -2, -3, 6, -5, 8, 13];

// let num = arr.find(el => el > 0);
// console.log(num); // 6

// 2. Найти первый элемент < 0, а индекс > 3.

// const arr = [1, 2, -3, 4, -5, -6, -7];
// let num2 = arr.find((el, i) => el < 0 && i > 3);
// console.log(num2); // -5

// 3. Найти первый элемент > 30.

// const arr = [1, 2, -3, 6, -5, 0];
// let num = arr.find(el => el > 30);
// console.log(num);                 // undefined

//arrey of obj

// let users = [
//   {id: 1, name: "John"}, //el[0]
//   {id: 2, name: "Pete"}, //el[1]
//   {id: 3, name: "Mary"}  //el[2]
// ];

// let user = users.find(el => el.id == 1);
// console.log(user);
// console.log(user.name); // John

// Метод find() очень похож на метод filter().
// Разница только в том, что filter() вернёт все элементы,
// отвечающие условию в функции.
//========================================================
//.findIndex()
//arr.findIndex(callback( element[, index[, array]] )[, thisArg])

// const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

// const index = fruits.findIndex(el => el === "blueberries"); //3

// console.log(index); // 3
// console.log(fruits[index]); // blueberries

// const arr = [2, 5, 7, 8, 11];


// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// function result(arr){
//   let a = arr.findIndex(isPrime);

//   return a;

// }
// console.log(result(arr));


//=================================================================
// .every()
// return ==> true/false

// const arr = [10, -2, 0, 1, 9, 5];
// console.log(arr.every(el => el > 0)); // false

// const arr = [-10, -2, 2, 34, 90, 52];
// console.log(arr.every(el => el % 2 === 0)); // true

// const arr = [];
// console.log(arr.every(el => el % 2 === 0)); // true


//сравнить массивы

// const a = ['to', 'be', 'or', 'not','to', 'be'];
// const b = ['to', 'be', 'or', 'not','to', 'be'];

// console.log(a == b);

// function checkString(str){

//   const a = ['to','be','or','not','to','be'];

//   return a.every((el, i) => el === str[i])

// }
// console.log(checkString(['to','be','or']));
// console.log(checkString(['to','be','or','not','to','be']));
// console.log(checkString(['to']));

// function sortNums(numList){
//   const nums = [1,2,3,4,5];
//   return nums.every((el, i) => el === numList[i])
// }
// console.log(sortNums([1,2,3,4,5]));
// console.log(sortNums([2,1,3,4,5]));
// console.log(sortNums([5,8]));

//========================================================
// some() return true/false

// [2, 5, 8, 1, 4].some(elem => elem > 10);  // false

// [12, 5, 8, 1, 4].some(elem => elem > 10); // true

// //1. some el < 0

// const arr = [-10, -2, 0, 1, 9, 5];
// console.log(arr.some(el => el < 0)); // true

//2. some el % 2;
// const arr = [-10, -2, 2, 34, 90, 52];
// console.log(arr.some(el => el % 2)); // false

//3.  some el.length > 5.
// const arr = ['queue', 'line', 'crowd', 'people'];
// console.log(arr.some(el => el.length > 5)); // true

// const arr = [];
// console.log(arr.some(el => Number.isNaN(el))); // false
// console.log(arr.some(el => el == [])); // false

//========================================================
//.sort()

//1. a - b

//const arr = [1, 10, 6, 1600, 20, 5];

// arr.sort(
//   function(a, b){
//     return a - b;
// });

// console.log(arr);

// const arr = [1, 10, 6, 1600, 20, 5];

// arr.sort((a, b) => a - b);
// console.log(arr); // [1, 5, 6, 10, 20, 1600],


//2. b - a
// const arr = [1, 10, 6, 1600, 20, 5];
// arr.sort((a, b) => b - a);
// console.log(arr);                // [160, 10, 6, 5, 2, 1],

//3. Без аргумента функции ==> a - b
// const arr = [1, 10, 6, 1600, 2, 20, 12, 5];
// arr.sort();
// console.log(arr); // [1, 10, 160, 2, 5, 6, 60]


// const arr = ['1', '10', '6', '22', '160', '2', '5',"60"];
// arr.sort();
// console.log(arr); // ["1", "10", "160", "2", "5", "6", "60"]


// 4. Сорт со строками a-z

// const arr = ['cap', 'logo', 'apple', 'banana', 'loop'];
// arr.sort();
// console.log(arr); // ["apple", "banana", "cap", "logo", "loop"]

// 5. z-a
// const arr = ['cap', 'logo', 'apple', 'banana', 'loop'];
// arr.sort().reverse();
// console.log(arr); //["loop", "logo", "cap", "banana", "apple"]

// 6. min + max in arr
// const arr = [1, 10, 6, 160, 2, 5, 60];

//[] let sum = arr.sort((a, b) => a - b)[0] + arr.sort((a, b) => b - a)[0];
// console.log(sum); // 161

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

// let countries = ['Österreich', 'Andorra', 'Vietnam'];

//console.log(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (wrong)

// console.log(countries.sort( (a, b) => a.localeCompare(b))); // Andorra, Österreich, Vietnam (correct!)


// Если функция сравнения compareFunction предоставлена, элементы массива сортируются в соответствии с её возвращаемым значением. Если сравниваются два элемента a и b, то:

// Если compareFunction(a, b) меньше 0, сортировка поставит a по меньшему индексу, чем b, то есть, a идёт первым.
// Если compareFunction(a, b) вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам. Обратите внимание:
// стандарт ECMAscript не гарантирует данное поведение, и ему следуют не все браузеры (например, версии Mozilla по крайней мере, до 2003 года).

// Если compareFunction(a, b) больше 0, сортировка поставит b по меньшему индексу, чем a.
// Функция compareFunction(a, b) должна всегда возвращать одинаковое значение для определённой пары элементов a и b. Если будут возвращаться непоследовательные результаты, порядок сортировки будет не определён.
// Итак, функция сравнения имеет следующую форму:

// function compare(a, b) {
//   if (a меньше b по некоторому критерию сортировки) {
//     return -1;
//   }
//   if (a больше b по некоторому критерию сортировки) {
//     return 1;
//   }
//   // a должно быть равным b
//   return 0;
// }

//=====================================================
//.forEach()
//.forEach((item, index, array)

//1. cosole.log each el
// const arr = ['1', '2', '3', 'Go!'];
// arr.forEach(el => console.log(el));

//2. return index of el next to each el

// const arr = ['One', 'Two', 'Tree', 'Go!'];
// const newArr = [];


//   arr.forEach(function(el, i) {
//   newArr.push(el, i);
// });
// console.log(newArr);

//3. return el length next to each el

// const arr = ['One', 'Two', 'Tree', 'Go!'];
// const newArr = [];

//   arr.forEach(el =>
//   newArr.push(el, el.length)
//              );

// console.log(newArr);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

//=====================================================
// .join()
// array.join([separator]),

//const a = [1, 2, 3];

// console.log(a.join(','));
// console.log(a.join());
// console.log(a.join('+'));
// console.log(a.join(''));
// console.log(a.join(';'));

// const arr = [];
// console.log(arr.join()); // ""

// const arr = ['a', 'b', 'c', 'd'];

// console.log(arr.join('')); //"abcd"
// console.log(arr.join()); //"a,b,c,d"
// console.log(arr.join(' ')); //"a b c d"
// console.log(arr.join(', ')); //"a, b, c, d"
// console.log(arr.join('2, '));

// const arr2 = [undefined, 'c', 'o', 'd', 'e', null, NaN];
// console.log(arr2.join(' '));
// console.log(arr2.join('?'));

//=====================================================
//.slice()копированиe элементов массива согласно указанным индексам
//array.slice([start[, end]])
//start - индекс начала для копирования
//end - до какого индекса (не включительно)

//
// const arr = [1, 2, 3, 4, 5];

//const arr = [1, 2, 3, 4, 5];          //(0,0)
// console.log(arr.slice(1, 3));   //(1, 3)
// console.log(arr.slice(2));      //(2, 0)
// console.log(arr.slice(-2));     //(2 с конца)
// console.log(arr.slice(0, -3));  //(0, 3 с конца не включительно)
// console.log(arr.slice(6));      //(start > i return [])



//find sum min and max

// const arr = [1, 7, 5, -8, 13, -6, 2];
// console.log(arr.sort((a, b) => b - a));

//const arr2 = [13, -2, 43, -41, 15];

// function sortNum(arrey){

//   arrey.sort((a, b) => a - b);       //[-8, -6, 1, 2, 5, 7, 13]

//   let res = arrey.slice(-1);        //[13]
//   console.log(res);
//   let res2 = arrey.slice()[0];      //-8
//   console.log(res2);

//   return +res + res2;
// }
// console.log(sortNum(arr));
// console.log(sortNum(arr2));


//=====================================================
//splice() удаления/замены/добавления элементов.
// array.splice(start[, deleteCount[, element1[, element2[, ...]]]]),

//1. Del 3 els from i == 2.
// const arr = ['hi', 'by', 'hello', 'good', 'girl', 'boy'];

// let removed = arr.splice(2, 3);
// console.log(removed);                 //["hello", "good", "girl"]

// console.log(arr);                     //["hi", "by", "boy"]

// 2. Add el 'life' to i == 3.

// const arr = ['hi', 'by', 'hello', 'good', 'girl', 'boy'];
// let removed = arr.splice(3, 0, 'life');
// console.log(removed); // [],
// console.log(arr);

// 3. Del 2 els on i == 1 и change them on '365' and '7'.

// const arr = ['hi', 'by', 'hello', 'good', 'girl', 'boy'];
// let removed = arr.splice(1, 2, '365', '7');
// console.log(removed);
// console.log(arr);

// 4. Del all els from i == 1.
// const arr = ['hi', 'by', 'hello', 'good', 'girl', 'boy'];
// let removed = arr.splice(1);
// console.log(removed);
// console.log(arr);


// 5. Del 2 els from the end of arr

// const arr = ['hi', 'by', 'hello', 'good', 'girl', 'boy'];
// let removed = arr.splice(-2);
// console.log(removed);
// console.log(arr);


//=====================================================

// Number.isInteger()
//return true/false

// Number.isInteger(0);         // true
// Number.isInteger(1);         // true
// Number.isInteger(-100000);   // true
// Number.isInteger(99999999999999999999999); // true

// Number.isInteger(0.1);       // false
// Number.isInteger(Math.PI);   // false

// Number.isInteger(NaN);       // false
// Number.isInteger(Infinity);  // false
// Number.isInteger(-Infinity); // false
// Number.isInteger('10');      // false
// Number.isInteger(true);      // false
// Number.isInteger(false);     // false
// Number.isInteger([1]);       // false

// Number.isInteger(5.0);       // true
// Number.isInteger(5.000000000000001); // false
// Number.isInteger(5.0000000000000001); // true

//====================================================================

//.map()
// Если нам нужно перебрать массив и вернуть данные для каждого элемента – мы используем map.
// Метод «arr.map(callback[, thisArg])» используется для трансформации массива.

//Он создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr)
// для каждого элемента arr.

//1. power of 2

// const arr = [1, 2, 3, 4];
// const numPower = arr.map(el => el ** 2);
// console.log(numPower);

//2. Дан массив десятичных чисел arr.
// Необходимо вернуть новый массив, содержащий элементы исходного,
// причем для чисел, имеющих четный индекс,
// произвести округление до ближайшего целого, значение остальных сделать равным 0.

// const arr = [1.57, 2.1, 3.8, 10.67, 25.6];
// const nums = arr.map((el, i) => i % 2 === 0 ? Math.round(el) : el);
// console.log(nums); // [2, 0, 4, 0, 26]


//3. from  to string
// const arr = [-37, -8, 56.3, 0, 18.9];
// const newArr = arr.map(el => String(el));
// console.log(newArr);

//4.
// const numbers = [1.5, -4.7, 9.09];
// const roots = numbers.map(Math.trunc);
// const roots = numbers.map(Math.abs);

// console.log(roots);
// console.log(numbers);



//5. from str to num
// const arr = ['1.5', '-4.7', 9.09];
// console.log(arr.map(Number));


//====================================================================
//.reduce()
//reduce() применяет переданную в него функцию один раз для каждого элемента в порядке возрастания и возвращает одно результирующее значение.

//array.reduce(func(accumulator, currentValue[, index[, array]])[, initialValue])

// Методы arr.reduce и arr.reduceRight используются для вычисления какого-нибудь единого значения на основе всего массива.

// Синтаксис:

// let value = arr.reduce(function(previousValue, item, index, array) {
//   // ...
// }, [initial]);
// Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.
// previousValue – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
// item – очередной элемент массива,
// index – его индекс,
// array – сам массив.

// Звучит сложновато, но всё становится проще, если думать о первом аргументе как «аккумулирующем» результат предыдущих вызовов функции. По окончании он становится результатом reduce.

// Этот метод проще всего понять на примере.
// Тут мы получим сумму всех элементов массива всего одной строкой:

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum * current, 0);
// console.log(result);

// Давайте детальнее разберём, как он работает.
// При первом запуске sum равен initial (последний аргумент reduce), то есть 0,
//а current – первый элемент массива, равный 1. Таким образом, результат функции равен 1.
// При втором запуске sum = 1, и к нему мы добавляем второй элемент массива (2).
// При третьем запуске sum = 3, к которому мы добавляем следующий элемент, и так далее…
// Поток вычислений получается такой:

// В виде таблицы, где каждая строка –- вызов функции на очередном элементе массива:

//                     sum	current	result
// первый вызов	        0	    1	       1
// второй вызов	        1	    2	       3
// третий вызов	        3	    3	       6
// четвёртый вызов	    6	    4	       10
// пятый вызов	        10	    5	       15
// Здесь отчётливо видно, как результат предыдущего вызова передаётся в первый аргумент следующего.

// Мы также можем опустить начальное значение:

// let arr = [1, 2, 3, 4, 5];

// убрано начальное значение (нет 0 в конце)
// let result = arr.reduce((sum, current) => sum + current);

// Результат – точно такой же! Это потому, что при отсутствии initial в качестве первого значения берётся первый элемент массива, а перебор стартует со второго.

// Таблица вычислений будет такая же за вычетом первой строки.

// Но такое использование требует крайней осторожности.
// Если массив пуст, то вызов reduce без начального значения выдаст ошибку.

// Вот пример:
// let arr = [];

// Error: Reduce of empty array with no initial value
// если бы существовало начальное значение, reduce вернул бы его для пустого массива.
// console.log(arr.reduce((sum, current) => sum + current));
// Поэтому рекомендуется всегда указывать начальное значение.
// Метод arr.reduceRight работает аналогично, но проходит по массиву справа налево.

// 1.
// const arr = [5, 20, 30, 55];
// let result = arr.reduceRight((acc, curr) => acc + curr, 100); // acc, curr - это сокращения для accumulator и currentValue
// console.log(result); // 210

// 2.
// const arr = [1, 2, 5, 8];
// let result = arr.reduceRight((acc, curr) => acc + curr);
// console.log(result); // 16

// 3.
// const arr = [2, 5, 5, 100];
// let result = arr.reduceRight((acc, curr) => acc * curr, 1);
// console.log(result); // 5000


//====================================================================
//.indexOf()
//https://learn.javascript.ru/array-methods#indexof-lastindexof-i-includes

// arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
// arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
// Например:
// let arr = [1, 0, 0, false];

// console.log(arr.indexOf(0));  // 1
// console.log(arr.indexOf(false)); // 2
// console.log(arr.indexOf(null)); // -1

// Обратите внимание, что методы используют строгое сравнение ===
// Если мы хотим проверить наличие элемента, и нет необходимости знать его точный индекс,
// тогда предпочтительным является arr.includes.

// Кроме того, очень незначительным отличием includes является то, что он правильно
// const arr = [NaN];
// console.log(arr.indexOf(NaN)); // -1 (должен быть 0, но === проверка на равенство не работает для NaN)
// console.log(arr.includes(NaN));// true (верно)


//====================================================================
//lastIndexOf() возвращает последний индекс искомого элемента в массиве. Если он не найден, вернёт -1.

// Массив просматривается справа налево.
// Синтаксис: array.lastIndexOf(searchElement[, from = array.length])

// Метод имеет два параметра:

// искомый элемент (searchElement),
// индекс (from) – индекс элемента, с которого необходимо начинать поиск в массиве.
// По умолчанию равен длине массива и является необязательным параметром.

// const arr = ['1', 5, 'b', NaN, 'a', 'b', 0];
// console.log(arr.lastIndexOf('fox'));   // -1, элемент с таким значением не найден
// console.log(arr.lastIndexOf('b', 5));  // 5, поиск начинается с 5-ого индекса справа налево
// console.log(arr.lastIndexOf('b'));     // 5, индекс from не задан, по умолчанию он = длине массива
// console.log(arr.lastIndexOf('b', 4));  // 2, поиск начинается с 4-ого индекса справа налево
// console.log(arr.indexOf(NaN));         // -1
// console.log(arr.lastIndexOf(NaN));     // -1
// console.log(NaN === NaN);              // false

// const arr = [1, 5, 'b', NaN, 'a', 'b'];

// console.log(arr.indexOf(1));      //0
// console.log(arr.lastIndexOf(1));  //0


//====================================================================
//Уникальные элементы в массиве.

// 1. Дан массив чисел arr. Вернуть новый массив, в котором будут содержаться только уникальные значения элементов (у этих элементов нет дубликатов в массиве).

// const arr = [-1, -2, 0, -2, 7, 7, 7, -1, 0, 8, 3, 4, 2, 2];
//
// const result = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
// console.log(result);

// [8, 3, 4], т.к. мы ищем только уникальные элементы,
// то индекс первого и последнего вхождения в массиве будет одним значением

// arr.indexOf(el) вернёт индекс первого вхождения элемента в массив
// arr.lastIndexOf(el) – индекс последнего вхождения.
// индекс первого будет равен индексу последнего, т.е. arr.indexOf(el) === arr.lastIndexOf(el).

//====================================================================
// Дубликаты в массиве

// 1. только повторяющиеся элементы (дубликаты).
//
// const arr = [-1, -2, 0, -2, 7, 7, 7, -1, 0, 8, 3, 4, 2, 2];
//
// const result = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
//
// console.log(result); // [-1, 2, 0, 2, 7, 7, 7, -1, 0]

// 2.элементы встречаются только один раз.
//
// const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
//
// const result = arr.filter((el, i) => i === arr.indexOf(el));
// console.log(result); // [-1, 2, 0, 7, 8, 3, 4],

// 3. Дан массив arr.
//Вернуть массив дубликатов, при этом каждый дубликат
//должен быть представлен в единственном числе, и в порядке,
//когда он появляется в массиве в последний раз.

// const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
//
// const result = arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el));
// console.log(result); // [2, 7, -1, 0]
//
// const arr3 = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
// const newArray3 = [];
// arr3.forEach((number, index) => {
//     if (index === arr3.lastIndexOf(number) && index !== arr3.indexOf(number)) {
//         newArray3.push(arr3[index]);
//     }
// });
// console.log(newArray3);

//====================================================================
//sum of nums in string inside the arr using methods
//
//  const arr = ['1 32 -3 n -5 hj n'];
//
// let res = arr.join()
//        .split(' ')
     //  .map(el => +el)
     //  .filter(el => !isNaN(el))
     // .reduce((acc, curr) => acc + curr);
// console.log(res);
// console.log(typeof res)


// const arr = [-1, -2, 0, -2, 7, 7, 7, -1, 0, 8, 3, 4, 2, 2];
// const newArr = [];
// for (let i=0; i<arr.length; i++) {
//     let notDuplicate = true;
//     for (let j=0; j<i; j++) {
//         if (arr[i] === arr[j]) {
//             notDuplicate = false
//         }
//     } if (notDuplicate) {
//         newArr.push(arr[i]);
//     }
//
// };
// console.log(newArr)









