// document.getElementById('img1').addEventListener('click',function(e){
//     // console.log(e);
// }, false)
//attchEvent=> used when internet exploer is new in market.
//jQuery-on=> it is like addEventListener
// Event object :
//EVENT PROPEGATION: it has two context 
// 1. event bubbling: false(bottom to top)
// 2. event captuing: true (top to bottom)

// document.getElementById('img').addEventListener('click',function(e){
//     console.log("inside the ul");
//     e.stopPropagation()
// },true)
// document.getElementById('img1').addEventListener('click',function(e){
//     console.log('img1 click');
//     e.stopPropagation()
// },true)

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('google cliicked');
// },false)

document.querySelector('#img').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName==='IMG')
    {
        console.log(e.target.id);
        let removeImg = e.target.parentNode
        removeImg.remove()
    }
    // removeImg.parentNode.removeChlild(removeImg)

},false)