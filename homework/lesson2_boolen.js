//Solve a task with logical operators in such a way as on example:

//Example:
let chocolate = true;
let strawberry = false;
let apple = true;
let caramel = true;

// case 1: I want ((strawberry and chocolate) or apple) or no caramel
// let icecream = ((strawberry && chocolate) || apple) || !caramel;
// console.log("case 1: " + icecream);

// case 2: I want (strawberry and (chocolate or apple)) or without caramel
let icecream = (strawberry && (chocolate || apple)) || !caramel;
console.log("case 2: " + icecream);

//TASKS:
//1. case 1: I want pizza and pasta and (no capers or no tomatos); => the result is false
//  case 2: I want ((pizza and tomatos) or (pasta and  capers and no tomatos)); => the result is true

let pizza = true;
let pasta = false;
let capers = true;
let tomatos = true;

//2. case 1: (Number a is bigger than number b) and b is not equal to 0 or a is not negative number; => the result is true
//   case 2: (Number a is a positive number or number b is a positive number) or b is not equal to 0 and a is equal to 7; => the result is true

let a = 5;
let b = 7;

//3. case 1: (Data type of 'one' is a string and (data type of 'two' is a boolean or number)) and data type of three is not a boolean => the result is false
// case 2: (Data type of 'one' is a number and data type of 'two' is boolean) or (data type of 'three' is not a boolean or data type of one is not a string) => the result is true

let one = 0;
let two = 'Hello';
let three = true;


//4. case 1: (The new building has 9 windows or a door) and the guest name is John or the address has a data type of a boolean => the result is true
//   case 2: The new building has 8 windows or (no door and the guest name is John) or the address has a data type of a number => the result is true

let windows = 8;
let door = true;
let guest = 'John';
let address = 5;


//5. Find what char is bigger 'G' or 'g';
//6. Find what char is smaller 'K' or 'a';
//7. Find what is smaller true or false;
//8. Transfer 7 to boolean
//9. Chack a number 66 is odd or even;
//10.Chack a number 166 is odd or even;

