function mul(num){
    return num*5;
}
mul.power = 2
console.log(mul(5));
console.log(mul.power);
console.log(mul.prototype);

function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const userOne = new createUser("chai", 25)
const userTwo = createUser("tea", 250)

userOne.printMe()
