const promiseOne = new Promise(function(resolve, reject){
    // Do a async task
    // DB calss, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username: "Arsh", email: "arsh@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Arsh", email:"arsh@gmail.com"})
        }
        else{
            reject('Error: Something went wrong')
        }
    })
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"JS", pass:"123"})
        }
        else{
            reject('Error: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //it takes time to load hence it is imp 
//         console.log(data);
//     } catch (error) {
//         console.log("Error", error)
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error))