const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');
    if(height===''||height<0||isNaN(height))
    {
        results.innerHTML = `<h1>please give a valid height:${height}</h1>`;
    }
})