// function: it is like a package then we use this package called any time 

// function defination
function myfun()
{
    console.log("start function");
}

// myfun()

// add two number :
function addtwonum(num1, num2)
{
    console.log(num1+num2);
}
// addtwonum(3,"4")


function loginUser(userName = "user@123")
{
    // if(userName=== undefined)
    // {
    //     console.log("please enter user name");
    // return 
    // }
            // or standard time 
            if(!userName)
            {
                console.log("please enter user name");
            return 
            }
    return `${userName} just logged in`
}
// console.log(loginUser());

// **************************part 2 of functions******************************************

// whenever we don't know how many argumet passed 

function addCartPrice(...num)
{
    return num
}
// console.log(addCartPrice(1,2,3,4,5,6,7,8));

// object pass in function or use 
const user = {
    name: "Arjun Negi",
    email:"arjun@google.com",
    phone:7668213002,
    address:"almora"
}
function hanleObject(anyObjct)
{
    console.log(`user anme is ${anyObjct.name} from ${anyObjct.address}`);
}
// hanleObject(user);

// array pass in function or use

const myarray= [100,500,600,456,789,34656]
function returnValue(getArr)
{
    return getArr;
}
// console.log(returnValue(myarray));
            // or 
// console.log(returnValue([100,"ram",500,600,456,789,34656]));          
