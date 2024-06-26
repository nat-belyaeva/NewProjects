//Lesson 11 ======== object
// ===================  Обьявление обьекта  ===========================

// let obj = new Object();
// let user = {};

// let obj = {
//   name: 'Bob',
//   age: 21,
//   isAdult: true,
//   "salary": undefined,
//   4: null,
// };
// console.log(obj);

//Последнее свойство объекта может заканчиваться запятой ",".

// =========================================

// Имя свойства может состоять из нескольких слов, но тогда оно _обязательно_
// должно быть заключено в кавычки:

let user = {
  name: "John",
  age: 30,
  "high school": true,
}

//console.log(user.high school);  //ошибка
console.log(user["high school"]);

// значение свойства age и name изменено:
user.age = 20;
user.name = 'Bill';
console.log(user);

// добавлено свойство address:
user.address = {
  city: 'SF',
  state: 'CA',
  country: 'USA',
}
console.log(user);
console.log(user.address.state);

// ============================================
//оператор delete:

//  delete user.address.country;     //удаление свойства country
//  console.log(user);


// ====================  обращение к свойствам  =============================

// Для обращения к свойствам используется запись «через точку»: person.name, person.age.
//  или через [ ] :       person['name'], person["age"]

// const person = {
//   name: 'Joey',
//   age: 30,
//   "likes cats": true,
// };

//выведение значения

// console.log(person.name);
// console.log(person.age);

// console.log(person['name']);
// console.log(person['age']);
// console.log(person['likes cats']);


//==================  Добавление свойства  ================================
//

//создаем объект
//const obj = {};

//присваиваем значения
//  obj.name = 'Jess'; //через точку
//
// obj['likes read'] = true; //через скобки []
//
// let carModel = 'mini cooper'; //через переменную
// obj[carModel] = 1;
// console.log(typeof obj);
//
// console.log(obj);
//
//
// // =======================  Изменение свойства  ===================================
//
// obj.name = "John";           //через точку
// obj['likes read'] = false;     //через скобки []
// obj[carModel] = 7;           //через переменную
//
//  console.log(obj);

// ================== Создание объекта с использованием переменной  =====
//
// let name = "Anna";
// let age = 17
// const user = {
//   [name]: age
// };
// console.log(user);

// ============================================================
//Обращение к свойствам объекта

const customers = [
  {
    id: '01',
    personalInfo: {
      name: {
        first: 'John',
        last: 'Dow',
      },
    },
  },
  {
    id: '02',
    personalInfo: {
      name: {
        first: 'Jane',
        last: 'Dow',
      },
      dob: '01/01/1990',
      "contactInfo": {
        phone: '+123456789',
        email: null,
        address: null,
      },
    },
    purchases: [null],
  }];

// 1. Свойства 1-го уровня
// console.log(customers.length);
// console.log(customers[0]);
//  console.log(customers[1]);
// console.log(customers[2]);

// 2. Свойства 2-го уровня
// console.log(customers[0].id);
// console.log(customers[1]['id'])

// 3. Свойства 3-го уровня
// console.log(customers[1].personalInfo.name);
// console.log(customers[1].personalInfo.dob);
//console.log(customers[1]['personalInfo']['dob']);

// 4. Свойства 4-го уровня
//  console.log(customers[1].personalInfo.name.first);
// console.log(customers[1].personalInfo.contactInfo.email);
// console.log(customers[1]['personalInfo']['contactInfo']['email']);

// ====================  Проверка существования свойства  ======================================
//
// ===== проверка с undefined
// В отличие от многих других языков, особенность JavaScript-объектов в том,
// что можно получить доступ к любому свойству. Даже если свойства не существует –
// ошибки не будет!

// При обращении к свойству, которого нет, возвращается undefined.
// Это позволяет просто проверить существование свойства:

// let user = {};
// console.log(user.age);
// console.log(user.age === undefined); // true означает "свойства нет"

// ===== через оператор in
let obj = {
  firstName: 'Sofia',
  lastName: 'I.',
  age: 35,
  language: 'Java',
  newKey: undefined,
  undefined: false,
  job: null,
};
// console.log(obj);

// console.log("firstName" in obj);
// console.log("first" in obj);
// console.log(undefined in obj);
// console.log('job' in obj);

// console.log(obj.newKey === undefined);

// ============================================================

//обращение, добавление на примере

let obj = {
  firstName: 'Sofia',
  lastName: 'I.',
  country: 'Argentina',
  continent: 'Americas',
  age: 35,
  language: 'Java'
};
let name = obj.firstName;
let language = obj.language;

console.log(name, language);

let a = `Hi ${name}, Do you like ${language}?`;

 console.log(a);

let newKey = 'hello';
obj[newKey] = a;      //

console.log(obj);


// =======================  цикл for ... in  ===================================

//Для итерации по объекту используется цикл for ... in

// for(let key in object) {
//   // тело цикла выполняется для каждого свойства объекта
// }

// let obj = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for(let key in obj){
//   // ключи
//  console.log(key);  // name, age, isAdmin
//   // значения ключей
// //   console.log(obj[key]); // John, 30, true
// //   console.log(key + ": " + obj[key]);
// }


// count salaries
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

// let sum = 0;
// for(let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum); // 390


let obj = {
  width: 200,
  height: 300,
  title: "My menu"
};

// function multiplyNumeric(obj) {
//   let res = 1;

//   for(let key in obj) {
//     if(typeof obj[key] == 'number'){
//       res += obj[key] * 2;
//     }
//   }
//   return res;
// }
// console.log(multiplyNumeric(obj));

//  ======================= примеры ================

// ======  https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
// в массиве:

// var list = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
// ];

// function greetDevelopers(list) {
//   for(let i in list){
//     const name = list[i].firstName;
//     const language = list[i].language;
//     list[i].greeting = `Hi ${name}, what do you like the most about ${language}?`
//   };
// return list;
// }
// console.log(greetDevelopers(list));

//  ======  https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/train/javascript
//
// What is my name score? #1

// const alpha = {'ABCDE': 1,
//                'FGHIJ': 2,
//                'KLMNO': 3,
//                'PQRST': 4,
//                'UVWXY': 5};
//
//
// function nameScore(name){
//   let str = name.toUpperCase();
//   let count = 0;
//    for(let i = 0; i < str.length; i++){
//     for(let key in alpha){
//       if(key.includes(str[i]))
//         count += alpha[key];
//     }
//   }
// return {[name]: count};
// }
// console.log(nameScore('Mary Jane'));

// ============================================================

// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.
// Они хранят свойства (пары ключ-значение), где:

// => Ключи свойств должны быть строками (string) или символами (symbol) (обычно строками).
// => Значения могут быть любого типа.
// => Чтобы получить доступ к свойству, мы можем использовать:

// => Запись через точку: obj.property.
// => Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for(let key in obj).

// ======================  Методы объектов  ======================================

//Object.keys, values, entries
// Для простых объектов доступны следующие методы:
//
// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].


// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   language: "JavaScript",
// };
//
// console.log(Object.keys(user));    //выводит ключи (keys)
// console.log(Object.values(user));  //выводит значения (values)
// console.log(Object.entries(user)); //выводит массив

// ======== перебор в цикле
// // console.log('===========');
// let user = {
//   name: "John",
//   age: 30,
//   language: 'en',
//   home: 'apartment',
//   number: 6
// };
//
// // // перебор значений
// for (let value of Object.values(user)) {
//   console.log(value);
// }

// ======  https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript
//String Reordering
//Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

//  let arr = [
//             {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//             {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//            ];
// console.log(arr);

// const sentence = arr =>
//     arr.sort((a, b) => Object.keys(a) - Object.keys(b))
//              .map(obj => Object.values(obj))
//              .join(' ')
// console.log(sentence(arr));

// =======
// const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// const obj = {};

// for(let i = 0; i < str.length; i++){
//     obj[i+1] = str[i];
// };
// console.log(obj);


// =====================  Object.fromEntries:  ==========================

// let arr = [[1, 'a'], [2, 'b'], [3, 'c']];

// console.log(Object.fromEntries(arr));

//
// У объектов нет множества методов, которые есть в массивах, например map, filter и других.

// Если мы хотели бы их применить, то можно использовать Object.entries
// с последующим вызовом Object.fromEntries:

// Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
// На нём вызываем методы массива, например, map.
// Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.


// let items = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };
//
// let arr = Object.entries(items)
// console.log(arr);
// console.log(Object.fromEntries(arr));
//
//
// let newArr = arr.map(([key, value]) => [key, (value * 1.1).toFixed(2)]);
// console.log(newArr);
// const itemsNew = Object.fromEntries(newArr);
// console.log(itemsNew);



















