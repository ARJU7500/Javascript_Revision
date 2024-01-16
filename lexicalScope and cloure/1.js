function outer(){
    let userName = "Arjun"
    function inner(){
        let a=10;
        console.log("inner",userName);
    }
    function inner2(){
        console.log("inner",userName);
        console.log(a);
    }
    inner()
    inner2()
}
outer()
console.log("outer", userName);