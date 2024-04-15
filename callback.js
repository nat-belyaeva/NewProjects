// console.log("Hello World!")
//
// sum()
//
//
// function sum(a, b) {
// return a + b
//   }
//
// console.log(sum(5, 2))
// console.log('start')
// for(let i = 0; i < 3; i++) {
//     console.log(i)
// }
// console.log('end')
//
//
// console.log('start')
// setTimeout(() => {
//     console.log('time out is done')
// }, 10000)
//
// console.log('end')
// console.log('end')
// console.log('end')
// console.log('end')
// console.log('end')

// //callback
// function greet(name, callback) {
//     console.log("Hello" + name)
//     callback()
// }
//
// //callback function
//
// function welcome() {
//     console.log('Welcome!')
// }
//
// //console.log(welcome)
// // greet('Nat', welcome)
//
// function printInfo(name, cb) {
//     console.log('start')
//     setTimeout(function () {
//         console.log('info ' + name)
//         cb('plz wait me....')
//     }, 5000)
//     console.log('end')
// }
//
// function displayMessage(message) {
//     console.log(message)
// }
// printInfo('Ann', displayMessage)
//
// function calculateSum(a, b, cb) {
//     let sum = a + b
//         cb(sum)
// }
//
// function showRes(result) {
//     console.log('res: ' + result)
// }
//
// calculateSum(2, 5, showRes)

// find min in arr

const a = [2, 7, 19, 0, -7, -9]
const b = [2, 7, 19, 0, -7, -9, 5, 100, -100]

function min(arrArg) {
    let minNum = arrArg[0]

    for(let i = 0; i < arrArg.length; i++) {
        if(minNum > arrArg[i]){
            minNum = arrArg[i]
            // console.log(minNum)
        }
    }
    return minNum
}
//
// console.log(min(a))
// console.log(min(b))

// do not push min in new arr

function delMin(arr, min) {
    const newArr = []
    const delNum = min(arr)
    for(let i of arr){
        if(i !== delNum) {
            newArr.push(i)
        }
    }
    return newArr
}

console.log(delMin(b, min))



