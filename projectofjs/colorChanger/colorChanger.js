const boxes = document.querySelectorAll('.box')
// console.log(boxes);
const body = document.querySelector('.continer');
boxes.forEach( (box)=>{
    // console.log(box);
    box.addEventListener('click', (e)=>{
        // console.log(e)
        // console.log(e.target)
        if(e.target.id==='grey')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='blue')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow')
        {
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id==='pink')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='orange')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='green')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='red')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='black')
        {
            body.style.backgroundColor=e.target.id;
        }
    })
});