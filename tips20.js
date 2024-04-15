//1 find unique value from array:
const arr = [1, 2, 3, 2, 3, 2, 7, 8, 2]

const uniqueArr = [...new Set(arr)] // spread operator ...
console.log(uniqueArr)

//2 int to Str
const num = 32
console.log(num)
const numStr = String(num)
const str1 = num + ''
console.log(str1 + 10) // 3210
console.log(numStr)
console.log(typeof numStr)

//float to int
const floatNum = 3.4
// const intNum = parseInt(floatNum) // 3
// console.log(intNum)
const num1 = Math.floor(floatNum)
const num2 = Math.ceil(floatNum)
const num3 = Math.round(floatNum)
console.log(num3)
console.log(num1)
console.log(num2)

//4 check if a var is a Number
const value = 56

if (typeof value === 'number' && !isNaN(value)) {
    console.log(value + ' is number' ) //NaN
} else {
    console.log(value + ' is not number')
}

//swap variables values:
let a = 5
let b = 10;

[a, b] = [b, a]
console.log(a, b)

//check if an obj has a property:

const man = {
    name: 'Ann',
    age: 26
}

if(man.hasOwnProperty('nam')) {
    console.log('man has prop')
} else {
    console.log('no prop')
}

//7 remove falsy values
const val = [0, 1, 2, null, undefined, '', false, NaN, true]
const notFalsyVal = val.filter(Boolean)
console.log(notFalsyVal)

//8 String --> UpperCase, Lower
const str = "We learn Js"
const u1= str.toUpperCase()
const l1 = str.toLowerCase()
console.log(u1)
console.log(l1)

// 9 array contains a val

const array = ['java', 'js', 'ts', 'c++']

if(array.includes('js')){
    console.log('found')
}

//10 check if arr is empty
const empty = []
if(empty.length === 0) {
    console.log('Array is empty')
}

//11 generate a random number from the range
const min = 10
const max = 20
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumber)

//12 Str to num

const string1 = '32.1'
const num4 = parseFloat(string1)
const stringinNUm = +'32.0'
console.log(num4, stringinNUm)

//13 join array elements into a str

const words = ['Nat', 'hello', 'Ann']
const sentence = words.join(' ')
console.log(sentence)

// get obj property

const man1 = {
    name: 'Ann',
    age: 26,
    address: {
        street: 'Street1',
        house: 12
    }
}
console.log(man1.address.house)
console.log(man1['address']['street'])

// clone arr && obj

const nums = ['Nat', 'hello', 'Ann']
const dupl = [...nums]
console.log(dupl)

const duplObj = {...man1}
console.log(duplObj)

// convert in array

const person = {
    name: 'Ann',
    age: 26,
    address: {
        street: 'Street1',
        house: 12
    }
}

//a key array

const keyArray = Object.keys(person)
console.log(keyArray)

//b val arr

const valArr = Object.values(person)
console.log(valArr)
// c all

const dataObj = Object.entries(person)
console.log(dataObj)

// trancate length arr
const arr3 = [1, 2, 3, 2, 3, 2, 7, 8, 2]
arr3.length = 3
console.log(arr3)

//last item in array : without using .length

const arr4 = [1, 2, 3, 2, 3, 2, 7, 8, 2]
const last = arr4.slice(-1)
console.log(last)







