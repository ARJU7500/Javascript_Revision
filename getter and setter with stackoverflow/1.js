class user{
    constructor(email,password){
        this.email=email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password =value
    }
}

const shyam = new user("shyam@gmail.com","shyam@123");
console.log(shyam.email);
console.log(shyam.password);