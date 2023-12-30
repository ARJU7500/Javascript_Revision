const array = [1,2,3,4,5,6];
const array2 = [7,8,9,10,11,12,13]
// array.push(array2);
// console.log(array);
// console.log(array[6][1]);

let array3= array.concat(array2);
// console.log(array3);

const array4=[...array, ...array2]
// console.log(array4);

const array5= [1,2,3,4,[5,6,7],8,[9,[10,11,12]]]
const array6= array5.flat(Infinity);
// console.log(array6);

// console.log(Array.isArray("javascript"));

// console.log(Array.from("Arjun negi"));
// console.log(Array.from({name: "Arjun negi"}))

// MULTIPLE VARIABLE CONVERT INTO ARRAY
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;
let score6 = 600;
console.log(Array.of(score1,score2,score3,score4,score5,score6));