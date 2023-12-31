# Javascript_Revision with "chai or code" hitesh sir
revision part of javascript basic to advance
day 1st:
diffrent b/w .text file and .js file.
multiple variable print together(console.table([var1,var2,........,varn])) used this method we have a table in o/p where we see our value.
setting write code online (codespace)
let,const or var ki story.
data type of js.
day 2nd:
1. string:
a. basic operation performed (+,-,*,/,%)
b. used when we find to power of any numbers (2**3=8)
c.  add string
str1="arjun singh"
str2= " negi"
str3=str1+str2;//arjun singh negi
d. agr first string value h to all value convert in string 
but if last value is string so first operation perform then convert in string 
e.  ++ and --;

comprasion in js:
basic <,>,==.
compresion when our data type are not same
("2">1)

//strict check ===
console.log("2"==2) because of conversion
console.log("2"===2) because check data types

***************************************day 2***********************************
1. memory allocation in javascript
    Stack_memory:
        -store primitive data types.
        -recevied copy value of declare variable.

    Heap_memory:
        -store non-primitive data types.
        -reference of original values.

2. string ans its methods like uppercase,lowercase, find length of string and etc.
3. Number and Maths in Javascript:


date and time 

use some function 


******************basicjs02*******************

when we perform copy operation in array so create shallow copies.

shallow copies: refrence point 
deep copy : do not create same refrence (value)

array and some functions/methods 

basicjs02/b.js=>
array part 2



objects/2.js=>

1. destructure value
const {propertyName of object}= objectName;
        or
const {propertyName of object: give a value you want to call it}= objectName;

in react js whenever we pass the props in {} so it means follow destructure 

API:application program interface
we can say "apna kam dusre k sir thopna"

############################basicjs03###################
*****************function********************
1.js=>

function: it is like a package then we use this package called any time

function decleartion: 
function functionName()
{
    //code
}

**note**
funcionName: reference
() used for function execution
parameters: when we create defination in function where we take input inside(a,b) called parameter.
Arguments: when we call a function that time we pass the value inside (a,b) is called arguments.


part 2 of functions =>

whenever we don't know how many argumet passed by user in function so we use rest operator(...) which is convert argument into array format  
ex:mostly used in shopping app where we don't know how many item  user add in cart 

how to pass rest operator in function 
function functionName(...variable)
{
    return variable
}
functionName(arg1,arg2,............,n)

rest operator: ...
spread operator: ...
both are same so its depends on its work then we calld rest or spread operator

object pass in function or use 

const objectName = {
    name: "Javascript",
    email:"js@google.com",
    phone:7668213002,
    address:"node.js"
}
function hanleObject(anyObjct)
{
    console.log(`user anme is ${anyObjct.name} from ${anyObjct.address}`);
}
hanleObject(objectName);

<!-- array pass in function or use -->
const varName= [100,500,600,456,789,34656]
function functionName(getArr)
{
    return getArr;
}
console.log(functionName(varName));
        or
console.log(functionName([100,"ram",500,600,456,789,34656]));


*************************scope********************************
2.js=>

scope : start with { and endthe scope }
story start with let, const, var in javaScript.

global: use inside and outside both 
local: only use inside {}

<!-- nested scope -->

scope inside scope like function inside function 
{
    {

    }
}

<!-- THIS and arrow function in javascript -->
basicjs03/arrow/1.js:-
this: refer current context.
in browser global object is window
but in node our this globaly is empty utill give a value but inside function if we print this so we get multiple property because inside the tis keword somthing or you cal access.

arrow function 

const functionName = ()=>{
    //code
}

impliset return 
const add= (num1, num2)=> (num1+num2)

expliset return 
const add= (num1, num2)=>{
    return num1+num2;
}

object return in arrow function:
object return 

const add=()=> ({userName:"java"})
console.log(add())


