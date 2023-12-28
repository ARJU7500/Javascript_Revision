let score = 400
console.log(`score is ${score}`);
console.log(typeof(score));
const balance= new Number(300)
console.log(`balance is ${balance}`);
console.log(typeof(balance));
// convert to string 
console.log(balance.toString());
console.log(typeof(balance.toString()));

console.log(`use tofixed methods ${balance.toFixed(2)}`);

const hundreds = 10000000000
console.log(`according to USA ${hundreds.toLocaleString()}`);
console.log(`according to india ${hundreds.toLocaleString('en-IN')}`);