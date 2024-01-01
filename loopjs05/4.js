const myObj = {
    name: "riik negi",
    branch : "cse",
    rollNo : 9,
    email: "ritik@123"
}

for (const key in myObj) {
//    console.log(`${key} : ${myObj[key]}`);
}

const myarray = [1,2,3,4,5,6,7,8]
for (const key in myarray) {
        // console.log(`${key} : ${myarray[key]}`);
        
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "unitated state of amerika")
map.set('Fr', "Frans")
map.set('IN', "India")

for (const key in map) {
//    console.log(key);
}
// map is not itrtable 


// for each loop 