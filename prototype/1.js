let myName = "Arjun      "
console.log(myName.length);

let myHero = ["thor", "spiderman","hathim","gbral"]

let heroPower ={
    thor: "hammer",
    spiderman: "sling",
    hathim : "solve problem",
    gbral : "solve problem",

    getSpiderMan: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Ram = function(){
    console.log(`Ram present in all the world`);
}

Array.prototype.heayRam = function(){
    console.log(`all the worls say jai shree ram`);
}

// heroPower.Ram()

// myHero.Ram()

myHero.Ram()
myHero.heayRam()
// heroPower.heayRam()



// about inheritance 

const user = {
    name: "Arjun Negi",
    email : "an096237@gmail.com"
}
const Teacher = {
    makeVideo :true
}
const TeachSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment : 'js assignment',
    fullTime :true,
    __prto__:TeachSupport
}

Teacher.__prto__ = user

// morden syntax 

Object.setPrototypeOf(TeachSupport, Teacher)



let anotherName = "jai shree Ram     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
}
anotherName.trueLength()

"Arjun  ".trueLength()
"negi  ".trueLength()