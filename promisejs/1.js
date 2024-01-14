const promiseOne = new Promise(function(resolve, reject){
    //do an async task=> DB task, crypto graphics , network calls
    setTimeout(function(){
        console.log(`Async task is completed`);
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log(`promise consumed`);
})

// other types create promise 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async part 2`);
        resolve()
    },1000)
}).then(function(){
    console.log(`promise 2 consumed`);
})

//type 3 promises

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:"Arjun Negi", email: "arjun@1213gmail.com"})
    },1000)
})

promiseThree.then(function(usrData){
    console.log(usrData);
})

// promise 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:"ArjuNegi", password:"asn@123"})
        }
        else{
            console.log(`Error: Something went wrong`);
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.userName;
})
.then((username)=>{
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(()=>{
    console.log(`the promise either resolved or rejected`);
})

//promise five

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({name: "javaScript", version:"ES6"})
        }
        else{
            reject(`Error: js went wrong`)
        }
    },1000)
})
async function CunsumePromiseFive(){
   try{
    const res = await promiseFive
    console.log(res);
   }catch(error){
    console.log(error);
   }
}
CunsumePromiseFive()


// async function getAllUsers(){
//   try{
//     const res = await fetch('https://dummyjson.com/products')
//     // console.log(res);
//     const data = await res.json()
//     console.log(data);
//   }catch(err){
//     console.log("errors is",err);
//   }
// }
// getAllUsers()


// help of .then and catch 

fetch('https://dummyjson.com/products/1')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
})
.catch(()=>{
    console.log(err);
})