//array

const myArry = [0,1,2,3,4,5,6];
// console.log(myArry);

const myhero = ["vikrm btra", "subhas chandr bosh"]
// console.log(myhero);

const myArray2 = new Array(1,2,3,4);
// console.log(myArray2);
// console.log(myArray2[0]);

// methods in array 

// push method: add Element in array 
myArray2.push(5,6,7);
// console.log(myArray2);

//pop method in array used for delete the last element of an array
myArray2.pop();
// console.log(myArray2);

//unshift used for add element at firat index of an array
myArray2.unshift(9);
// console.log(myArray2);

//shift used for delete the firat value of an array

myArray2.shift()
// console.log(myArray2);

//ASK SOME QUESTION AT ARRAY 
//includes give answer true and false 
// console.log(myArray2.includes(3));

//indexOf : index of element in array exists value return index otherwise return -1
// console.log(myArray2.indexOf(2));

//join methods: change the type of variables 

const newArray = myArray2.join()

// console.log(myArray2);
// console.log(newArray); //string type values recived 

//slice, splice methods 
// slice: no change in orginal array 
// splice: change in orginal array splice portion is removed 
const mynArray = new Array(1,2,3,4,6,7,8,9);
// console.log("A", mynArray);

const myArray3 = mynArray.slice(1,3);
// console.log(myArray3);
// console.log("B", mynArray);

const myArray4 = mynArray.splice(1,3);
// console.log(myArray4);
// console.log("C", mynArray);


