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

<!-- IIFE -->

Immediately Invoked Function Expressions
is used for Immediately ececute the function 
like when we connect with databases so we need or file start so or database connetion start Immediately.
        or
2nd is global variable polution

syntax:

(function defination)();

        OR 
FAT ARROW FUNCTION 
( ()=>{
    console.log(`welcome to 2024`);
})();

1. named IIFE :

( function wiss(){
    console.log(`welcome to 2024`);
})();

2.simple IIFE/unnamed IIFE:

( ()=>{
    console.log(`welcome to 2024 agian`);
 })();


<!-- javascript execute code + call stack -->

javascript execute code:
whenever a script tag is loaded into browser it will be executed by JS engine.
javascript execute code in 3 phase
1. javascript execution contex: how to excute the file which created by you.
browser javascript execution contex value of this is window and 
node javascript execution contex value of his is empty object.

2. function/functional execution contex: 
how to execute your own code.

3. eval execution contex: it is property of global object


in javascript our code run on two phases:
1. memory creation execution/creation execution : for memory allocation for variable which declare by user in javaScript.
2. Execution phase: perform operation (arthmetic and etc.)

how to execute code in javaScript:

1. global execution/environment and allocated in this keyword

2. memory creation phase: all variable store which is avalible in our source code.
here each varible have undefined and function have defination of function.

3. execution phase:
    give orginal value to variable and whenever we use the function in our code  so, ready new executionl context where we have 
    1. new variable environmnt 
    2. excution thread
    now repeat two phase memory creation phase and execution phase 

    now our work os done so our new executionl context is deleted.
    
    CALL SATCK: 

**************controlFlow04=>*****************
    Control flow in javascript:

    1. if statement:
    if(condition)
    {
        //code
    }
    comprasion operator in js:
    <,>,==,!=,<=,>=,===

    2. if else statement:
    if(condition)
    {
        //code
    }
    else
    {
        //code
    }

    3. nested statement: 
    if(condition)
    {
        //code
    }
    else if(condition)
    {
        //code
    }
    else if(condition)
    {
        //code
    }
    else
    {
        //code
    }

4. use && (and) operator

    if(condition && condition)
    {
        //code
    }

5. use || (or) operator:
    if(condition || condition)
    {
        //code
    }

6. use switch:
    switch(key
{
case 1:
//print mgs
break;
case 2:
//print mgs
break;
.
.
.
case n:
//print mgs
break;
default:
//print mgs
break;
}

falsy values 
//     false, 0,-0,BigInt on, "", null, undefined, NaN
truthly value: true, 1, 0>,"0", 'false', " ",{},[],function(){} 

nullish coalescing operator(??):it use for handel error
all story depend on null or undefined.
let val1= 5??10;

For loop(itreation) with break and continue in javascript:
A. for loop:
	for( var inslization ; condition ; increment/decrement)
	{
		//code
	}
	B. while loop:
	while(condition)
	{
		//code;
		increment/decrement;
	}
	C. do while loop:
	do 
	{
 
    	// body of do-while loop    
    
	} 
	while (condition);

    ********Array specific loop************
    A. for of loop:
		a. array: for (const iterator of object) {}
		b. string: for (const iterator of object) {}

	B. map: it is an object which is hold key value pairs and print order way and not use duplicate value in map.

    C. for of loop: it is used for get index/key of an array.

    <!-- for each loop  -->
    --it is high orderd function

    const coading = ["c","c++","java","js","devops"]
coading.forEach( (item)=>{
    console.log(`I can code in ${item}`)
})
in foreach we have h problem 
this loop not return any value. 

6.js=>

<!-- Filter map and reduce in javascript -->

A. filter: 
		const varName = arrayName.filter( (num)=> conditions)

7.js=>

B. map: 
		const newNum = myNum.map( (num)=> conditin)

    C. chaining: They allow them to perform multiple functions simultaneously.
		const arraynum = myNum.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=> num>30)

8.js=>

redue:  	D.redue: 
	const list = shoppingCart.reduce((acc, item)=>acc+ item.price, 0)

    ######dom01
    3. query selector: 
	A. querySelector: show individual data in web page which you select.
	B. querySelectorAll: show All data in web page which you select.
	C. getElementByClassName.

3. How to create a new element in DOM:
	A. access parent node or children node help of js.
4. create element help of js.
	A. create element
	B. edit element
	C. remove Element

