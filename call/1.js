function setUsername(username){
    this.userNme =username
}
function createUser(username,email,password){
    setUsername.call(this, username)
    
    this.email =email
    this.password = password
 }

 const chai = new createUser("chai", "chai@123", "123")
 console.log(chai);