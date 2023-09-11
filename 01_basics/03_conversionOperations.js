let score = "33abc";
let x = undefined
// const {score} = req.body

//console.log(typeof score)

let valueInNumber = Number(score);

//console.log(typeof valueInNumber);
//console.log(valueInNumber); //Nan i.e Not a Number is also a datatype in js

let valueInNumberNew = Number(x)
//console.log(valueInNumberNew); // Null value of x after converting it to number is 0
                               // undefined value of x after converting it to number is Nan
                               //boolean value after converting it to number gives 1 for true and 0 for false 

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false 
// "arsh" => true

// ************************************ Operations ******************************************

let value = 3;
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " arsh"

let str3 = str1 + str2

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");


