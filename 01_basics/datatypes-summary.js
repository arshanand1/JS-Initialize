//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// userEmail will be undefined in this case when no value is assigned to it

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// symbol harr cheez ko alag consider kerta hai isliye ye comparison bhi false return krega

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions
// objects heap memory mai create hote hain agar mai ek object ka reference ek doosre variable ko deta hu
// toh dusra variable bhi original object mai changes karega 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
let myObj2 = myObj
myObj2.name = "arsh"

console.log(myObj.name);
console.log(myObj2.name);

//uper maine jab print kervaya toh dono jagha changes hogye because new variable ke paas heap memory mai
//refrence hai jo ki original value ko point ker raha hai rather than creating a copy

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// typeof undefined => undefined
// typeof null => object 
// typeof heros => object

// https://262.ecma-international.org/5.1/#sec-11.4.3