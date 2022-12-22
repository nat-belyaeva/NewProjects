// // function killer(suspectInfo, dead) {
// //    for(let key in suspectInfo) {
// //         let count = 0;
// //        for (let el of dead) {
// //            if(suspectInfo[key].includes(el)){
// //                count++;
// //            }
// //        }
// //        if (dead.length === count) {
// //            return key;
// //        }
// //    }
// // }
// //
// // console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'],
// //     'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']));
//
// // function randomThree(number) {
// //
// //     let res = "";
// //     for ( let i = 0; i <= 2; i++) {
// //         let n = Math.floor(Math.random() * 11);
// //         if (number === n) {
// //             return res = "You are win";
// //         }
// //
// //     }
// //     return "failed"
// // }
// //
// // console.log(randomThree(1));
//
// //function getAverageAge(list) {
// //     let res = 0;
// //     for (let i = 0; i < list.length; i++) {
// //         res += list[i].age;
// //             console.log(res);
// //         }
// //
// //     return Math.round(res / list.length);
// // }
// //
// // console.log(getAverageAge( [
// //     { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
// //     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// // ]));
//
// // function findNum(N) {
// //     let arr = [] ;
// //     let res = [];
// //     let arrNew = [];
// //     for (let i = 0; i <= N; i++) {
// //         arr.push(i * i);
// //         console.log(arr);
// //         arrNew.push(i);
// //         //console.log(arrNew)
// //     }
// //     for (let i = 0; i < arr.length; i++) {
// //         for(let j = 0; j < arrNew.length; j++) {
// //             if( arr[i] % 100  !== arrNew[j]) {
// //             arrNew.shift()
// //                console.log(arrNew);
// //         }
// //
// //         }
// //     }
// // return arrNew;
// // }
// //
// // console.log(findNum(37));
//
// // function sum (arr, arr1) {
// //     let res = [];
// //     let remains = 0;
// //     let maxArr = Math.max(arr.length, arr1.length);
// //     //console.log(maxArr)
// //
// //     for (let i = 0; i < maxArr; i++) {
// //         let summa = (arr[arr.length - 1 - i] || 0) +  (arr1[arr1.length - 1 - i] || 0) + remains
// //
// //         if (summa >= 10) {
// //             remains = Math.trunc(summa / 10);
// //             res.unshift(summa % 10)
// //         } else {
// //             remains = 0
// //             res.unshift(summa);
// //         }
// //     }
// //
// //     return Number(res.join(''))
// //     console.log(res)
// // }
// //
// // console.log(sum([1,2,3,4,5], [9,9,9]))
//
//
// function findDeletedNumber(arr, mixArr) {
//     mixArr.sort((a, b) => a - b)
//     console.log(mixArr)
// let res = 0
//      for (let i = 0; i < mixArr.length; i++) {
//
//
//         }
//
// return arr.length === mixArr.length ? 0 : res;
//
// }
//
// console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]));
//
// let a = 10;
// let b = 5;
//
// a = b;
// b = a + b;
// console.log(a, b)
//  const a = 15;
// let b = 66;
// console.log(a);
// var c = 10;
// function sum() {
//     let a = 5;
//     const b = 6;
//     console.log(a + c)
//     a = 10;
//     //console.log(a + b)
//     return a + b;
// }
// let a = 10
// //console.log(a)
// sum();
// const arr = [a, 'd', 2]
// arr[3] = 5;
// arr[2] = 0;
// console.log(arr)
// console.log(arr.length)

function fib(n) {
let fn = [0, 1]

         for (let i = 2; i < n; i++) {

                 const buff = fn[i - 1] + fn[i - 2];
                 fn.push(buff)
             }
     return n <= 0 &&  typeof  'error' : fn.join(' ');
     }

console.log(fib(0));
