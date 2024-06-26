// =========== string's methods


//concat()
// Метод concat() объединяет текст из двух или более строк
// и возвращает новую строку.

//ex1.
// let str = 'I';
// let str2 = 'am';
// let str3 = ' a student'

// let res = str.concat(' ', str2, str3);
// console.log(res);

//ex2.

// let hello = 'Hello, ';
// let name = 'Julia';
// console.log(hello.concat(`${name}`, '. Have a nice day.'))

//Hello, Kevin. Have a nice day.


//=========================================================
//padStart(length, otherStr)

// заполняет текущую строку другой строкой
// (несколько раз, если нужно) так, что итоговая строка достигает заданной длины.
// Заполнение осуществляется в начале (слева) текущей строки.

// function res(str){

//   const a = str.padStart(9, 'wood');
//   const b = str.padStart(13, 'wood');
//   const c = str.padStart(8);
//   const d = str.padStart(3, 'wood');
//   const e = str.padStart(6, 'wood');
//   return {a, b, c, d, e};

// }
// console.log(res('Table'));


//=========================================================
//padEnd(length, otherStr)
//Заполнение осуществляется в начале (слева) текущей строки.

// function res(str){

//   const a = str.padEnd(9, 'wood');
//   const b = str.padEnd(13, 'wood');
//   const c = str.padEnd(8);
//   const d = str.padEnd(3, 'wood');
//   const e = str.padEnd(6, 'wood');

//   return {a, b, c, d, e};

// }
// console.log(res('Table'));


//=========================================================
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes
//Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает,
//соответственно true или false.
//str.includes(searchString[, position])

// searchString Строка для поиска в данной строке.
// position Необязательный
// Позиция в строке, с которой начинать поиск строки
// searchString, по умолчанию 0.

//console.log('My'.includes('my')); //case sensative

// let str = 'Did you notice the notes you?';

// console.log(str.includes('you')); // true
// console.log(str.includes('not', 9)); // true
// console.log(str.includes('not', 20)); // false
// console.log(str.includes('did')); // false
// console.log(str.includes('+'));


// let str = '7890';
// console.log(str.includes('9'));

// let str = ';+=.++';

// console.log(str.includes('++'));
// console.log(str.includes('+.'));
// console.log(str.includes('+-'));

//=========================================================

//Метод indexOf() возвращает индекс первого вхождения подстроки в строке.
//str.indexOf(otherStr, [index]),
// //Возвращает -1, если значение не найдено.

// let str = 'A turtle is on the beach .';
// console.log(str.lastIndexOf('turtle'));

// console.log(str.indexOf('turtle'));
// console.log(str.indexOf('turtle', 3));

// The indexOf() method is case sensitive.
// console.log('Blue Whale'.indexOf('blue')); //-1

// const str = 'Hello, my deear freind. You are the beste';
// console.log(str.indexOf('e', 70));

// let count = 0;

// let position = str.indexOf('e'); //-1

// console.log(position);

// while (position !== -1) {
//   count++;
//   position = str.indexOf('e', position + 1)
// }

// console.log(count)


//==============================================================

//lastIndexOf() возвращает индекс последнего вхождения указанного
//значения в строковый объект String,
//на котором он был вызван,
//или -1, если ничего не было найдено.
//Поиск по строке ведётся от конца к началу,
//начиная с индекса fromIndex.

// let str = 'canala';
// console.log(str.lastIndexOf('a'));
// console.log(str.lastIndexOf('a', 4));
// console.log(str.lastIndexOf('a', 3));
// console.log(str.lastIndexOf('a', 2));
// console.log(str.lastIndexOf('a', 0));

// let anyString = 'Brave new world';

// console.log('The index of the first w from the beginning is ' + anyString.indexOf('w'));

// console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w'));

// console.log('The index of "new" from the beginning is ' + anyString.indexOf('new'));

// console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new'));



//==============================================================

//startsWith()
//string.startsWith(otherStr[, index]),
//startsWith() является регистрозависимым.

// let str = 'My name is Julia, you can call me Juls';

// console.log(str.startsWith('C'));          //false
// console.log(str.startsWith('My'));         //true
// console.log(str.startsWith('name'));       //false
// console.log(str.startsWith('Julia', 11));  //true
// console.log(str.startsWith('m'));          //false

//==============================================================
//endsWith()
//string.endsWith(otherStr[, index])
//Метод endsWith() является регистрозависимым.

// let str = 'My name is Julia, you can call me Js';
// console.log(str.endsWith('s'));          //true
// console.log(str.endsWith('Js'));       //true
// console.log(str.endsWith('name'));       //false
// console.log(str.endsWith('Js', 40));  //true
// console.log(str.endsWith(' '));          //false
// console.log(str.length);

//==============================================================
//string.substring(index1[, index2])

//Метод substring() возвращает подстроку строки между
//двумя индексами,
//или от одного индекса и до конца строки.
//indexA Целое число от 0 до длины строки,
//определяющее смещение в строке первого символа,
//который будет включён в результирующую подстроку.
//indexB Необязательный параметр.
//Целое число от 0 до длины строки,
//определяющее смещение в строке первого символа, который не будет включён в результирующую подстроку.

// let str = 'Helloworld';
// console.log(str.length);
//  console.log(str.substring(0, 9)); // "Hellow"
// console.log(str.substring(3, 6)); // "low"
// console.log(str.substring(6, 6)); // ""

//Следующий пример использует метод substring() и
//свойство length для извлечения последних символов из строки.
//Этот метод может оказаться легче для запоминания,
//особенно если учесть, что вам не нужно знать начальный и конечный индексы,
//как это было в примере выше.

// console.log(str.substring(str.length - 3));
// console.log(str.substring(str.length - 5));


//==============================================================
// slice()
// str.slice(beginIndex[, endIndex])
// beginIndex
// Индекс, с которого начинать извлечение (нумерация начинается с нуля).
// извлекает часть строки и возвращает
// новую строку без изменения оригинальной строки.

// endIndex
// Индекс, перед которым заканчивать извлечение (нумерация начинается с нуля).
// Символ по этому индексу не будет включён.

// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31)); //"the lazy dog."
// console.log(str.slice(4, 19)); //"quick brown fox"
// console.log(str.slice());
// console.log(str.slice(2));
// console.log(str.slice(-5)); //"dog."
// console.log(str.slice(-9, -5)); //"lazy"


/*
What is the difference between String.slice and String.substring?
What they have in common:

If start equals stop: returns an empty string
If stop is omitted: extracts characters to the end of the string
If either argument is greater than the string's length, the string's length will be used instead.

Distinctions of substring():
If start > stop, then substring will swap those 2 arguments.
If either argument is negative or is NaN, it is treated as if it were 0.

Distinctions of slice():
If start > stop, slice() will return the empty string. ("")
If start is negative: sets char from the end of string, exactly like substr() in Firefox.
This behavior is observed in both Firefox and IE.
If stop is negative: sets stop to: string.length – Math.abs(stop) (original value),
except bounded at 0 (thus, Math.max(0, string.length + stop)) as covered in the ECMA specification.
*/

//==============================================================
//.replace()

/*Метод replace()
возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном,
заменёнными на заменитель.
Шаблон может быть строкой или регулярным выражением,
а заменитель может быть строкой или функцией,
вызываемой при каждом сопоставлении.
*/

//1
//выполнится единожды для первого найденного соответствия

// let str = 'bobooo';
// let str2 = str.replace('o', 'B');

// console.log(str2);

//2
// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replace('dog', 'monkey'));

//2 ругулярные

// let str = 'It was the night before Xmas...';

// let newstr = str.replace(/xmas/i, 'Christmas');
// console.log(newstr);

// 2.1

// let str = 'user name: Kevin_2000*/';

// let newstr = str.replace(/[0-9_*/]/gi, '');
// console.log(newstr);

// 2.2
// let str = 'user password: hngUNg6784';
// let newstr = str.split(':')[1].replace(/[0-9A-Za-z]/g, '*');
// console.log(str.split(':')[0] + ':' + newstr);


// https://learn.javascript.ru/regexp-introduction
// https://learn.javascript.ru/regexp-quantifiers
// https://learn.javascript.ru/regexp-character-classes

//==============================================================
//split()
//string.split([separator[, limit]])
//Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
//1

//let str = '1I do, 2you do, 3they do';
// console.log(str.split('do'));


// console.log(str.split(', '));

//console.log(str.split('o', 2));
// console.log(str.split('1'));
// console.log(str.split(''));
//console.log(str.split(/\d/));

// str = '0     1 2  3    4';
// console.log(str.split(/\s*/));



//=> /\d/ – заменяет символы от 0 до 9 включительно
//=> /\s*/ –  "ноль или более" (*) пробелов (\s)

console.log("JavaScript".length)

console.log("JavaScript"[2])
console.log("JavaScript".charAt(2))
//a-z: 97 to 122
console.log("JavaScript".charCodeAt(2)) // AScII value

console.log("JavaScript".toLowerCase())
console.log("JavaScript".toUpperCase())

console.log("JavaScript".slice(2, -5))
console.log("Javascript".substring(2, 6)) //vaSc
console.log("Javascript".substring(-2,2)) // -ve --> 0, 2 Ja

console.log("Javascript".concat(" is Cool").concat(" and easy!"))

let lang = "Java_JavaScript_Python"
const arr = lang.split('_')
console.log(arr[0])
console.log(arr[2])
console.log(arr[5])

console.log("Javascript".includes("Java"))
console.log("Javascript".includes("Python"))

console.log("Dev test Framework".replace("Dev", "JS"))
console.log("Dev test Framework Dev".replace("Dev", "JS"))
console.log("Dev test Framework Dev".replaceAll("Dev", "JS"))

console.log("Dev test Framework Dev".replace("Dev", "JS"))
console.log("01-01-1990".replaceAll('-', '/'))

console.log(("  hello js    ").trim())
console.log(("  hello js    ").trimStart())
console.log(("  hello js    ").trimEnd())

console.log("Dev".padEnd(10, "*")) //dev*******
console.log("Develop".padEnd(10, "*"))
console.log("Developer".padEnd(10, "*"))
console.log("Developers".padEnd(10, "*"))

console.log("Dev".padStart(10, "*")) //*******dev
console.log("Develop".padStart(10, "*"))
console.log("Developer".padStart(10, "*"))
console.log("Developers".padStart(10, "*"))

console.log("Javascript".startsWith("J")) //true
console.log("Javascript".endsWith('script')) //true

console.log("dev".repeat(3))

console.log("Hello cats and dogs".indexOf("cats"))
console.log("Hello cats and dogs".indexOf("Cats"))
console.log("Hello cats and dogs".indexOf("cats"))
console.log("Hello cats and dogs".indexOf("H"))

console.log("Hello cats and dogs".lastIndexOf("cats"))

console.log("Hello cats and dogs".search("cats")) //











