

function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){
    return number1+number2
}

const result = addTwoNumbers(3,6)

// console.log("Result:", result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a valid name")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Arsh"))
console.log(loginUserMessage())