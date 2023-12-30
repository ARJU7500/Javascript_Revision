//OBJECT LITERALS
//unique data types symbol
// const user= {}=> non single tern object
const mysym = Symbol("key1") //declare symbol
const user= {
    id: "asnuk01",
    "full name":"Arjun Singh Negi",
    name: "arjun",
    [mysym]: "asnkey1",
    branch: "c.s.e.",
    location: "devbhumi uttarakhand",
    isLoggedIn: false,
    lastLogin: ["monday", "tuesday"]
}
// console.log(user.id);
// console.log(user.name);
// access object 
// console.log(user["full name"]);
// define symbol 
// console.log(user[mysym]);
// console.log(typeof [user.mysym]);

// change the value 
user.branch = "computer sacience and engineering"

// if i want no any one change the value so we use 
// Object.freeze(user);

// user.id="asnuk02";
// console.log(user);


user.greeting = function()
{
    console.log("hii welcome to here ");
}
user.greeting1 = function()
{
    console.log(`hii, ${this["full name"]} welcome to here`);
}
// console.log(user.greeting());
// console.log(user.greeting1());






// ******************************part 2 objcts ***************************************
//SINGLE TERM 
// const tinder = new Object(); //single term object 
const tinder = {}
tinder.id="afg123"
tinder.name = "ram lal"
tinder.isLoggedIn= false
// console.log(tinder);

const regularUser = {
    name: "aryan",
    fullname:{
        userfullname:{
            first_name:"arjun",
            mid_name:"singh",
            last_name:"negi"
        }
    },
    age: 21,
    email: "aryan@123gmail.com",
    address: "chamoli",
    phone : 7668213002
}
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.first_name);


//COMBINE TWO OBJECT 

const user1= {
    id: "asnuk01",
    "full name":"Arjun Singh Negi",
    name: "arjun",
    [mysym]: "asnkey1"
}
const user2= {
    branch: "ECE",
    location: "uttarakhand",
    isLoggedIn: false,
    lastLogin: ["monday", "friday"]
}

// const user3 = {user1, user2} //object inside object 

// const user3 = Object.assign({},user1, user2)
// {}=> target 
// user1,user2=> is source 

const user3= {...user1, ...user2}
// console.log(user3);

const users = [
    {
        id:1,
        name: "Arjun Negi"
    },
    {
        id:2,
        name: "naven"
    },
    {
        id:3,
        name: "neeraj"
    }
]

// console.log(users[1].name);

// object convert into array 

// get all key of object user2 
// console.log(Object.keys(user2));
// console.log(Object.values(user2));

// get key value pair in array 
// console.log(Object.entries(user2));

// ask a question for to get some value in the objects 
// console.log(user2.hasOwnProperty('branch'));
// console.log(user2.hasOwnProperty('branch_name'));

