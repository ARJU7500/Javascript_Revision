//math library
console.log(Math);
console.log(Math.abs(-4));
//round figer value
console.log(Math.round(5.6));
// find minimum value in array 
console.log(Math.min(4, 3, 6, 8));
// find max value in array 
console.log(Math.max(4, 3, 6, 8));

// mostly used 
console.log(Math.random()); //range 0-1 by default
console.log((Math.random()*10)+1);

// when define min asnd mix
const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1))+min);
