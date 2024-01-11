const sayDate = function(str){
    console.log(str,Date.now());
}
const inveralId = setInterval(sayDate,1000,"ArjuNegi@uk01")
clearInterval(inveralId)