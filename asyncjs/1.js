const name = function(){
    console.log("Arjun Singh Negi")
}
const changeText = function(){
    document.querySelector('h1').innerHTML="best js serise";
}
const changeMe = setTimeout(changeText,2000)

document.querySelector('#stop').addEventListener('click', function(){
    console.log("stopped")
})
