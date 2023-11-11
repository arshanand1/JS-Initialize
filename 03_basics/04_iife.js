//Immediately Invoked Function Expression (IIFE)

//global scope ke pollution se bachne ke liye humne iife ka use kia hai

//iss se function immediately execute bhi hoga aur hum global scope ke pollution se bhi bachenge

(function chai(){
    //named iife because iska ek naam hai
    console.log("DB Connected")
})();

//isme semicolon lagana jaroori hota hai because function ko nahi pata hai where to end 

(() => {
    console.log("DB Connected Two");
})();


((name) => {
    console.log(`DB Connected Two ${name}`);
})("Anand");




