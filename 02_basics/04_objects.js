//const tinderUser = new Object(); //singleton object

const tinderUser2 = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "c", 6: "d"}
// const obj3 = {obj1, obj2}

// const answer= Object.assign({}, obj1, obj2, obj3)
//now using spread function
const answer = {...obj1, ...obj2, ...obj3}
console.log(answer);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); 
//in this keys and values are there

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

