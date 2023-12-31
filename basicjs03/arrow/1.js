const user = {
    userName:"javascript",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()
// console.log(this);


// function myfun(){
    // userName="js"
//     console.log(this);
// }
// myfun();

//arrow function in javascript:

const js = ()=>{
    userName="js"
    console.log(this.userName);
}
// js();

// const add= (num1, num2)=>{
//     return num1+num2;
// }
// console.log(add(1,5));

// const add= (num1, num2)=> num1+num2
// console.log(add(3,5));

// const add= (num1, num2)=> (num1+num2)
// console.log(add(3,5));

// object return 

const add=()=> ({userName:"java"})
console.log(add())
