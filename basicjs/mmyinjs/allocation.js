//stack memory allocation
let name= "javaScript"
let anotherName= name
anotherName= "node.js"
console.log("name is "+name);
console.log("name is "+anotherName);

//heap memory allocation
let user1={
    name:"arun singh ",
    email: "arun@123gmail.com",
    phone:7668213002,
    class:12
}
let user2=user1
user2.email="user2@google.com"
console.log("user1= "+user1.email);
console.log("user2= "+user2.email);