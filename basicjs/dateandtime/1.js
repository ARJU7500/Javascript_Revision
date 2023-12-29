// DATE 

let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//create spesphic date 
// let myCreateDate = new Date(2023, 10, 29)
//yy-mm-dd 
let myCreateDate = new Date("2023-02-11");
// console.log(myCreateDate);
// console.log(myCreateDate.toString());
// console.log(myCreateDate.toLocaleString());

//USE TIMESTAMP WHEN WE CREATE POL

let timeStamp = Date.now()
// console.log(timeStamp);
//recived time 1978 to now in milisecond
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// methods with date 

let newDate = new Date();
console.log(newDate);
//get month
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getHours());

newDate.toLocaleString('default', {
    weekday: "long"
})