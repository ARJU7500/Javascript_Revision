// scope
var c=800
let a=100
if(1)
{
let a=10
const b=1
var c=20
// console.log("inside scope",a);
}
// console.log("outside scope",a);

// part 2 of scope 

// nested scope 
function functionOne()
{
    const userName="Arjun negi"
    function functionTwo()
    {
        const website="youtube"
        console.log(userName);
    }
    // console.log(website);
    functionTwo();
}
// functionOne()

console.log(addOne(5));;
function addOne(num)
{
    return num+1
}

console.log(addtwo(5));
const addtwo = function addtwo(num)
{
    return num+2
}

