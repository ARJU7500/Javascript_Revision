// es6 

class user{
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `grrgrtr4r7tyy${this.password}##ahjdfgfdhfurhfu`
    }
}

const chai = new user("chai","chai@123","123")

console.log(chai.encryptPassword());