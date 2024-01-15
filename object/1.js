// math Pie.js

// const myObj = {name : "Arjun"}

// const disc = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(disc);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


// my turn to create object like PI 

const chai ={
    name: "without milk",
    price: "10",
    isAvailable : true
}

const descChai = Object.getOwnPropertyDescriptor(chai , "name")
console.log(descChai);
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    configurable :false
})

// finally we created
console.log(Object.getOwnPropertyDescriptor(chai , "name"))

chai.name ="mithi chai"
console.log(chai.name)