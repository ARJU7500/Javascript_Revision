// High Order Array loops
// for of loop :
// array 
// let array = [1,2,3,4,5]
// for (const num of array) {
//     console.log(num);
// }
// string
// let greeting = "Hello 2024 " 
// for (const str of greeting) {
//     console.log(str);    
// }


//maps 
const map = new Map()
map.set('IN', "India")
map.set('USA', "unitated state of amerika")
map.set('Fr', "Frans")
map.set('IN', "India")
// console.log(map);

for (const [key, value] of map) 
{
    // console.log(key,':', value);
}
// not for this : myObj is not iterable

// const myObj = {
//     name: "riik negi",
//     branch : "cse",
//     rollNo : 9,
//     email: "ritik@123"
// }
// for (const [key, value] of myObj)
// {
//     console.log(key,':', value);
// }

