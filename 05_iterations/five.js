const coding = ["js", "ruby", "java", "python", "cpp"]

// call back function hai isliye no name

//ek parameter ander bhej rahe hai function ke which is iterating the values in the array

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach ((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
