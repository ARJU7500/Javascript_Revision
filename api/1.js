const reqUrl = 'https://randomuser.me/api/'
const xhr = new XMLHttpRequest()
xhr.open('GET', reqUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4)
    {
        let data = JSON.parse(this.responseText)
        console.log(typeof data)
    console.log(data.name);

    }
}
// console.log(xhr.readyState);
xhr.send();
