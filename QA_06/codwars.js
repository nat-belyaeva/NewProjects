//for loop
//https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
function billboard(name, price = 30){
    let sum = 0
    for(let i = 0; i < name.length; i++) {
        sum += price
    }
        return sum

}
console.log(billboard("Jeong-Ho Aristotelis", 30))

