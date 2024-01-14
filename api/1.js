const reqUrl = 'https://dummyjson.com/products/1'
const xhr = new XMLHttpRequest()
xhr.open('GET', reqUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4)
    {
        // console.log(this.responseText);
        let data = JSON.parse(this.responseText)
        console.log(typeof data)
    console.log(data.title);

    }
}
// console.log(xhr.readyState);
xhr.send();
